import streamlit as st
import requests
import base64
import json
from PIL import Image
import io
import matplotlib.pyplot as plt
import numpy as np

# ── Page Config ───────────────────────────────────────────────────────────────
st.set_page_config(
    page_title='OrVex — Deepfake Detector',
    page_icon='🔍',
    layout='wide'
)

# ── API URL ───────────────────────────────────────────────────────────────────
API_URL = 'http://localhost:8000'

# ── Title ─────────────────────────────────────────────────────────────────────
st.title('🔍 OrVex — AI Deepfake Detector')
st.markdown('Upload an image or video to detect if it is **REAL** or **FAKE**.')
st.divider()

# ── Check API Health ──────────────────────────────────────────────────────────
try:
    health = requests.get(f'{API_URL}/api/healthz', timeout=3)
    if health.status_code == 200:
        data = health.json()
        st.success(f"✅ Model online — Device: {data['device'].upper()}")
    else:
        st.error('❌ API is not responding. Make sure `python api/main.py` is running.')
        st.stop()
except Exception:
    st.error('❌ Cannot reach API. Make sure `python api/main.py` is running.')
    st.stop()

st.divider()

# ── File Upload ───────────────────────────────────────────────────────────────
file_type = st.radio('Select input type:', ['Image', 'Video'], horizontal=True)

if file_type == 'Image':
    uploaded_file = st.file_uploader(
        'Upload a face image',
        type=['jpg', 'jpeg', 'png', 'webp']
    )
else:
    uploaded_file = st.file_uploader(
        'Upload a video',
        type=['mp4', 'mov', 'avi', 'webm']
    )

# ── Analyze Button ────────────────────────────────────────────────────────────
if uploaded_file is not None:
    st.divider()

    col1, col2 = st.columns(2)

    # Show uploaded file preview
    with col1:
        st.subheader('Uploaded File')
        if file_type == 'Image':
            image = Image.open(uploaded_file)
            st.image(image, use_container_width=True)
        else:
            st.video(uploaded_file)

    if st.button('🔍 Analyze', use_container_width=True):
        uploaded_file.seek(0)

        with st.spinner('Analyzing... please wait'):
            try:
                # ── Send to API ───────────────────────────────────────────────
                if file_type == 'Image':
                    endpoint = f'{API_URL}/api/predict/image'
                    mime     = uploaded_file.type
                else:
                    endpoint = f'{API_URL}/api/predict/video'
                    mime     = uploaded_file.type

                response = requests.post(
                    endpoint,
                    files={'file': (uploaded_file.name, uploaded_file, mime)},
                    timeout=300
                )

                if response.status_code != 200:
                    st.error(f'Prediction failed: {response.json().get("detail", "Unknown error")}')
                    st.stop()

                result = response.json()

                # ── Results ───────────────────────────────────────────────────
                with col2:
                    st.subheader('Detection Result')

                    label      = result['label'].upper()
                    confidence = result['confidence']
                    fake_prob  = result['fake_prob']
                    real_prob  = result['real_prob']

                    # Verdict
                    if label == 'FAKE':
                        st.error(f'### 🚨 {label}')
                    else:
                        st.success(f'### ✅ {label}')

                    # Metrics
                    m1, m2, m3 = st.columns(3)
                    m1.metric('Confidence', f'{confidence}%')
                    m2.metric('Fake Probability', f'{fake_prob}%')
                    m3.metric('Real Probability', f'{real_prob}%')

                    # Progress bar
                    st.markdown('**Confidence Score**')
                    st.progress(confidence / 100)

                # ── Grad-CAM ──────────────────────────────────────────────────
                if 'gradcam' in result and result['gradcam']:
                    st.divider()
                    st.subheader('🔥 Grad-CAM Heatmap')
                    st.markdown('Highlighted regions show which parts of the face triggered the prediction.')

                    cam_bytes = base64.b64decode(result['gradcam'])
                    cam_image = Image.open(io.BytesIO(cam_bytes))

                    gc1, gc2 = st.columns(2)
                    with gc1:
                        if file_type == 'Image':
                            uploaded_file.seek(0)
                            st.image(Image.open(uploaded_file),
                                     caption='Original', use_container_width=True)
                    with gc2:
                        st.image(cam_image,
                                 caption='Grad-CAM Heatmap', use_container_width=True)

                # ── Frame Graph (Video only) ───────────────────────────────────
                if file_type == 'Video' and result.get('frame_results'):
                    st.divider()
                    st.subheader('📊 Frame-by-Frame Analysis')

                    frame_results = result['frame_results']
                    frame_numbers = [f['frame_number'] for f in frame_results]
                    fake_probs    = [f['fake_prob']    for f in frame_results]

                    fig, ax = plt.subplots(figsize=(12, 4))
                    colors  = ['red' if p > 50 else 'green' for p in fake_probs]
                    ax.bar(frame_numbers, fake_probs, color=colors, width=8)
                    ax.axhline(y=50, color='orange', linestyle='--',
                               linewidth=1.5, label='Threshold (50%)')
                    ax.set_xlabel('Frame Number')
                    ax.set_ylabel('Fake Probability (%)')
                    ax.set_title('Fake Probability per Frame')
                    ax.set_ylim(0, 100)
                    ax.legend()
                    plt.tight_layout()
                    st.pyplot(fig)

                    # Video metadata
                    if result.get('metadata'):
                        st.divider()
                        st.subheader('📹 Video Metadata')
                        meta = result['metadata']
                        v1, v2, v3, v4 = st.columns(4)
                        v1.metric('FPS',        meta['fps'])
                        v2.metric('Duration',   f"{meta['duration_seconds']}s")
                        v3.metric('Resolution', meta['resolution'])
                        v4.metric('Frames Analysed', result['frames_analysed'])

            except requests.exceptions.Timeout:
                st.error('Request timed out. Video may be too long.')
            except Exception as e:
                st.error(f'Error: {str(e)}')

st.divider()
st.caption('OrVex — Final Year Project | B.Tech CSE 2026 | Amrapali University')