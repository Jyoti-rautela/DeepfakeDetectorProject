import streamlit as st
import requests
from PIL import Image
import io

st.set_page_config(page_title='Deepfake Detector', page_icon=' ', layout='centered')
st.title(' AI Deepfake Detector')
st.write('Upload a face image to check if it is real or AI-generated.')
uploaded_file = st.file_uploader('Upload Image', type=['jpg','jpeg','png'])

if uploaded_file is not None:
    col1, col2 = st.columns(2)
    image = Image.open(uploaded_file)
    col1.image(image, caption='Uploaded Image', use_column_width=True)

# with st.spinner('Analyzing image...'):
#     # Send image to FastAPI backend
#     files = {'file': uploaded_file.getvalue()}
#     response = requests.post('http://localhost:8000/predict', files=files)
#     result = response.json()

# with col2:
#     st.subheader('Detection Result')
# if result['result'] == 'FAKE':
#     st.error(f"FAKE IMAGE DETECTED")
# else:
#     st.success(f"REAL IMAGE DETECTED")
#     st.metric('Confidence', f"{result['confidence']}%")