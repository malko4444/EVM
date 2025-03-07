import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import { setFace } from "../../store/slices/candidateSlice";

const FaceUploader = () => {
    const [image, setImage] = useState(null);
    const [features, setFeatures] = useState(null);
    const [showWebcam, setShowWebcam] = useState(false);
    const webcamRef = useRef(null);
    const dispatch = useDispatch();

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
        setShowWebcam(false);
    };

    const handleUpload = async () => {
        if (!image) return alert("Please capture an image first");

        const blob = await fetch(image).then((res) => res.blob());
        const formData = new FormData();
        formData.append("file", blob, "captured_image.jpg");

        try {
            const response = await fetch("http://127.0.0.1:8000/extract_features/", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            setFeatures(data);
            const faceData = data.features[0].specific_features;
            const face = {
                leftEye: faceData.left_eye.center,
                rightEye: faceData.right_eye.center,
                noseTip: faceData.nose_tip.center,
                mouthCenter: faceData.mouth_outer_lips.center
            };
            dispatch(setFace(face));
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const getUniqueFeatures = () => {
        if (!features || !features.features || features.features.length === 0) {
            return null;
        }
        return "Face is detected successfully";
    };

    const uniqueFeatures = getUniqueFeatures();

    return (
        <div className="max-w-md mx-auto p-6 bg-green-100 border border-green-300 rounded-lg shadow-md text-green-900">
            <h2 className="text-2xl font-semibold text-center mb-4">Vote on Face Detection</h2>
            <button 
                onClick={() => setShowWebcam(true)} 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 transition duration-300">
                Face Detect
            </button>
            
            {showWebcam && (
                <div className="flex flex-col items-center">
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className="border-4 border-green-600 rounded-lg mb-4"
                    />
                    <button 
                        onClick={capture} 
                        className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded transition duration-300">
                        Capture Image
                    </button>
                </div>
            )}
            
            {image && <img src={image} alt="Captured" className="w-40 mx-auto border-4 border-green-600 rounded-lg mt-4" />}
            
            {image && (
                <button 
                    onClick={handleUpload} 
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300">
                    Image is OK?
                </button>
            )}
            
            {features && (
                <div className="mt-4 bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-center text-green-700">Extracted Facial Features:</h3>
                    <p className="text-center text-green-800 font-medium">{uniqueFeatures}</p>
                </div>
            )}
        </div>
    );
};

export default FaceUploader;
