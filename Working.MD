## Virtual Environment Setup
- python -m venv venv
- Activate it: venv\Scripts\activate

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

## Now to puch is git use these codes in terminal
- git add .
- git commit -m "Your commit message"
- git remote add origin <repo-url> --> https://github.com/Jyoti-rautela/deepfake_detector/tree/major-project
- git push -u origin main
or
- git remote add origin <repository-url>
- git push -u origin main