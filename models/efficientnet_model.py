import torch
import torch.nn as nn
from torchvision import models


class DeepfakeDetector(nn.Module):
    """EfficientNet-B3 backbone with custom binary classifier (Real vs Fake)."""

    def __init__(self, num_classes=2, dropout=0.4):
        super(DeepfakeDetector, self).__init__()

        # Load EfficientNet-B3 pretrained on ImageNet
        self.backbone = models.efficientnet_b3(weights='IMAGENET1K_V1')

        # B3 outputs 1536 features before the final classifier
        in_features = self.backbone.classifier[1].in_features  # 1536

        # Replace 1000-class head with our 2-class head
        self.backbone.classifier = nn.Sequential(
            nn.Dropout(p=dropout),
            nn.Linear(in_features, 512),  # 1536 → 512
            nn.ReLU(),
            nn.Dropout(p=dropout),
            nn.Linear(512, num_classes)   # 512 → 2 (Fake / Real)
        )

    def forward(self, x):
        """Input: [batch, 3, 300, 300] → Output: logits [batch, 2]"""
        return self.backbone(x)


if __name__ == "__main__":
    model = DeepfakeDetector(num_classes=2)

    dummy_input = torch.randn(4, 3, 300, 300)
    output = model(dummy_input)

    print(f"Input shape  : {dummy_input.shape}")   # [4, 3, 300, 300]
    print(f"Output shape : {output.shape}")         # [4, 2]
    print(f"Predictions  : {output.argmax(dim=1)}") # 0=Fake, 1=Real
    print(f"Probabilities:\n{torch.softmax(output, dim=1)}")