# ================= IMPORT =================
import streamlit as st
import requests

# ================= TITLE =================
st.title("🧠 Deepfake Detection App")

# ================= FILE UPLOAD =================
uploaded_file = st.file_uploader("Upload Image or Video", type=["jpg", "png", "mp4"])

if uploaded_file is not None:

    st.write("⏳ Processing...")

    # Send file to backend
    files = {"file": uploaded_file.getvalue()}

    response = requests.post(
        "http://127.0.0.1:8000/predict/",
        files={"file": (uploaded_file.name, uploaded_file.getvalue())}
    )

    result = response.json()

    # Display result
    if "error" in result:
        st.error(result["error"])

    else:
        st.write(f"Type: {result['type']}")
        st.write(f"Result: {result['result']}")
        st.write(f"Confidence: {result['confidence']:.2f}")