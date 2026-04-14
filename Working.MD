------------------------------------
# Deepfake Detection Web App
------------------------------------

- “We built an end-to-end AI web application where the frontend interacts with a FastAPI backend that performs deepfake detection using a CNN model with frame-level video analysis.”


------------------------------------
# WORKING
------------------------------------

User (Frontend UI)
        ↓
Uploads Image/Video
        ↓
Frontend sends request (API call)
        ↓
Backend (FastAPI server)
        ↓
File received & processed
        ↓
If Video → Convert to frames (OpenCV)
        ↓
Face Detection (MTCNN)
        ↓
Model Prediction (EfficientNet)
        ↓
Voting Logic (for video)
        ↓
Final Result (Real / Fake + Confidence)
        ↓
Backend sends JSON response
        ↓
Frontend displays result

------------------------------------
# PROJECT ARCHITECTURE
------------------------------------    

Frontend (React / HTML / Streamlit UI)
        ↓
Backend API (FastAPI)
        ↓
ML Model (.pth)
        ↓
Data Processing (OpenCV + MTCNN)




## Virtual Environment Setup
- python -m venv venv
- Activate it: `venv\Scripts\activate`

## Notebook file made for collecting dataset
- dataset.ipynb

## Install Required Libararies
- requirements.txt
- pip install -r requirements.txt

## main.ipynb to check all libraries imported and working succesfully or not?
if any file doesn't installed even after installing so
- install them individually like in my case there were these two: 
`pip install opencv-python` , `pip install torch`

## Kaggle ki api use karke dataset import 
- pip install kaggle 
- phir ek code dataset.ipynb ka use kareke pura dataset install kar diya aur ek data folder mein sab save hore

## make .gitignore file and write all file paths that you don't want to upload in github
like venv/ , data/ , other ..

## Now to push is git use these codes in terminal
- source control --> push to Github --> Can make branch from here and work in branch

OR

- git add .
- git commit -m "Your commit message"
- git remote add origin <repo-url>
- git push -u origin main

OR

- git remote add origin <repository-url>
- git push -u origin main
 

## preprocessing, dataExploration , frontend




----------------------------------------------
----------------------------------------------

### Training Model in google colab
That code handle these things:
✅ Added MTCNN face detection
✅ Handles no-face images safely
✅ Fixed tensor shape issues
✅ Added custom dataset (VERY IMPORTANT)
✅ Keeps your training loop clean
✅ Prevents common crashes

Code Breakdown: 
- `!pip install facenet-pytorch`
👉 Meaning:
`!` → run a shell command (because you’re in Colab/Jupyter)
`pip install` → install a Python library
`facenet-pytorch` → the library we need ----> It’s a pre-built deep learning library for face-related tasks

It gives you ready-made tools like:

🔹 `1. MTCNN (Face Detection)`
Finds faces in images
Crops them automatically
Very accurate
🔹 `2. FaceNet (Face Recognition)`
Converts face → embeddings (numbers)
Used for face matching

🎯 Why YOU need it

Our problem:

`Image → contains face + background + noise`

But deepfake happens mainly on:
👉` FACE REGION`

❌ Without this library:
`Model sees:`
background
clothes
lighting
`Result → ❌ lower accuracy`

✅ With facenet-pytorch:
Detect face
Crop face
Feed ONLY face to model
`Image → MTCNN → Face → Model → Prediction`

👉 Result:

Cleaner input
Better learning
Higher accuracy 🚀

`What is MTCNN (Important)`

👉 Full form:
Multi-task Cascaded Convolutional Neural Network

It does 3 things:
Detect face
Find face boundaries
Align/crop face


---> Google Colab's T4 GPU supports a feature called Automatic Mixed Precision (AMP). It makes the math slightly "simpler" for the GPU, which can speed up your training by 2x without losing accuracy.

---> “We treat video as a sequence of images, perform frame-level classification, and use majority voting for robust prediction. While this approach works well, future improvements could include temporal modeling using LSTM.”

`“why did you use facenet-pytorch?”`:

“We used MTCNN from facenet-pytorch to detect and crop facial regions before classification, ensuring the model focuses only on manipulated areas and improving accuracy.”






### Backend --> app.py
“I designed a FastAPI backend that handles both image and video inputs, performs frame-level inference for videos, and returns structured JSON responses for frontend integration.”
-----------------------------------------------
-----------------------------------------------







import torch 
import torch.nn as nn
import torchvision.models as models
from torchvision.models.efficientnet import EfficientNet_B4_Weights
from torch.utils.data import DataLoader
from torchvision.datasets import ImageFolder
import torchvision.transforms as transforms



# Load the pre-trained EfficientNet B4 model with default weights
model = models.efficientnet_b4(weights=EfficientNet_B4_Weights.DEFAULT)

# Replace the final layer to match your number of classes (e.g., 2 for real vs fake)
num_ftrs = model.classifier[1].in_features
model.classifier[1] = nn.Linear(num_ftrs, 2)  # Adjust to 2 classes

# Move the model to GPU if available
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = model.to(device)

# Define the loss function and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

num_epochs = 10  # For example, 10 epochs

# These exact values are required for ALL pre-trained models
MEAN = [0.485, 0.456, 0.406]
STD = [0.229, 0.224, 0.225]

train_transforms = transforms.Compose([
transforms.Resize((224, 224)), # resize to 224x224
transforms.RandomHorizontalFlip(),# flip randomly (augmentation)
transforms.ToTensor(), # convert to tensor
transforms.Normalize(MEAN, STD) # normalize
])
val_transforms = transforms.Compose([
transforms.Resize((224, 224)),
transforms.ToTensor(),
transforms.Normalize(MEAN, STD)
])


# Auto-loads images from folder — 0=fake, 1=real
train_data = ImageFolder(r'files', transform=train_transforms)
valid_data = ImageFolder(r'D:\ZOE\deepfake_detection\DeepfakeDetectorProject\data\real_vs_fake\real-vs-fake\valid', transform=val_transforms)

# Load in batches of 32
train_loader = DataLoader(train_data, batch_size=32, shuffle=True)
valid_loader = DataLoader(valid_data, batch_size=32, shuffle=False)

for epoch in range(num_epochs):
    model.train()  # Training mode
    for inputs, labels in train_loader:
        inputs, labels = inputs.to(device), labels.to(device)
        optimizer.zero_grad()
        outputs = model(inputs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

    # Validation loop
    model.eval()  # Set to evaluation mode
    val_loss = 0.0
    correct = 0
    total = 0
    with torch.no_grad():  # Disable gradient computation
        for inputs, labels in valid_loader:
            inputs, labels = inputs.to(device), labels.to(device)
            outputs = model(inputs)
            val_loss += criterion(outputs, labels).item()
            _, preds = torch.max(outputs, 1)
            correct += (preds == labels).sum().item()
            total += labels.size(0)

    val_loss /= len(valid_loader)
    val_accuracy = correct / total
    print(f'Epoch {epoch+1}/{num_epochs}, Val Loss: {val_loss:.4f}, Val Accuracy: {val_accuracy:.4f}')

best_accuracy = 0.0
best_epoch = 0

for epoch in range(num_epochs):
    model.train()
    for inputs, labels in train_loader:
        inputs, labels = inputs.to(device), labels.to(device)
        optimizer.zero_grad()
        outputs = model(inputs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

    # Validation loop
    model.eval()
    val_loss = 0.0
    correct = 0
    total = 0
    with torch.no_grad():
        for inputs, labels in valid_loader:
            inputs, labels = inputs.to(device), labels.to(device)
            outputs = model(inputs)
            val_loss += criterion(outputs, labels).item()
            _, preds = torch.max(outputs, 1)
            correct += (preds == labels).sum().item()
            total += labels.size(0)

    val_loss /= len(valid_loader)
    val_accuracy = correct / total
    
    print(f'Epoch {epoch+1}/{num_epochs}, Val Loss: {val_loss:.4f}, Val Accuracy: {val_accuracy:.4f}')
    
    # Save the best model
    if val_accuracy > best_accuracy:
        best_accuracy = val_accuracy
        best_epoch = epoch
        torch.save(model.state_dict(), 'best_model.pth')
        print(f'Best model saved at epoch {best_epoch+1}')

# After training, save the model
torch.save(model.state_dict(), 'my_model.pth')