import torch
import numpy as np
import cv2
from PIL import Image
from torchvision import transforms
from pytorch_grad_cam import GradCAM
from pytorch_grad_cam.utils.image import show_cam_on_image
from pytorch_grad_cam.utils.model_targets import ClassifierOutputTarget
import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from models.efficientnet_model import DeepfakeDetector

# ── Constants ────────────────────────────────────────────────────────────────
MEAN     = [0.485, 0.456, 0.406]
STD      = [0.229, 0.224, 0.225]
IMG_SIZE = 300

# ── Transform ────────────────────────────────────────────────────────────────
transform = transforms.Compose([
    transforms.Resize((IMG_SIZE, IMG_SIZE)),
    transforms.ToTensor(),
    transforms.Normalize(MEAN, STD)
])

# ── Generate Grad-CAM ─────────────────────────────────────────────────────────
def generate_gradcam(image_path: str, model: DeepfakeDetector,
                     device: torch.device, target_class: int = None) -> np.ndarray:
    """
    Generate Grad-CAM heatmap for an image.

    Args:
        image_path   : path to image file
        model        : loaded DeepfakeDetector model
        device       : torch device (cuda/cpu)
        target_class : 0=fake, 1=real. If None, uses predicted class.

    Returns:
        np.ndarray: RGB image with heatmap overlay (300x300x3)
    """
    # Load original image for overlay
    image     = Image.open(image_path).convert('RGB')
    image     = image.resize((IMG_SIZE, IMG_SIZE))
    image_np  = np.array(image, dtype=np.float32) / 255.0  # normalize to 0-1

    # Prepare tensor
    tensor = transform(Image.open(image_path).convert('RGB'))
    tensor = tensor.unsqueeze(0).to(device)                 # [1, 3, 300, 300]

    # Target layer — last conv block of EfficientNet-B3
    target_layer = [model.backbone.features[-1]]

    # If no target class given, use predicted class
    if target_class is None:
        with torch.no_grad():
            outputs = model(tensor)
            target_class = outputs.argmax(dim=1).item()

    targets = [ClassifierOutputTarget(target_class)]

    # Generate Grad-CAM
    with GradCAM(model=model, target_layers=target_layer) as cam:
        grayscale_cam = cam(input_tensor=tensor, targets=targets)
        grayscale_cam = grayscale_cam[0]                    # [300, 300]

    # Overlay heatmap on original image
    cam_image = show_cam_on_image(image_np, grayscale_cam, use_rgb=True)

    return cam_image                                        # np.ndarray [300, 300, 3]


# ── Save Grad-CAM to file ─────────────────────────────────────────────────────
def save_gradcam(image_path: str, model: DeepfakeDetector,
                 device: torch.device, save_path: str) -> str:
    """
    Generate and save Grad-CAM heatmap to disk.

    Args:
        image_path : path to input image
        model      : loaded DeepfakeDetector model
        device     : torch device
        save_path  : path to save the heatmap image

    Returns:
        str: path where heatmap was saved
    """
    cam_image = generate_gradcam(image_path, model, device)
    cam_bgr   = cv2.cvtColor(cam_image, cv2.COLOR_RGB2BGR)
    cv2.imwrite(save_path, cam_bgr)
    return save_path


# ── Quick Test ────────────────────────────────────────────────────────────────
if __name__ == '__main__':
    from predict import load_model

    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    model  = load_model('saved_models/best_model.pth', device)

    print('gradcam.py loaded successfully')
    print(f'Device: {device}')
    print('Target layer:', model.backbone.features[-1].__class__.__name__)