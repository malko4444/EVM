import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { addVote, getCand } from "../../store/slices/candidateSlice";
import cartoonAnimation from "../../asset/ani.json";
import FaceUploader from "../../components/faceUploader/FaceUploader";

export default function Vote() {
  const candidates = useSelector((state) => state.candidateSlice.candidate);
  const faceCredential = useSelector((state) => state.candidateSlice.face);
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState("");

  useEffect(() => {
    dispatch(getCand());
  }, [dispatch]);
  const handleVote = () => {
    if (!fullName || !selectedCandidate) {
      alert("Please fill in all fields");
      return;
    }
    if (!faceCredential) {
      alert("Please Detect your face");
      return;
    }
    
    const data = {
      fullName: fullName,
      candidate: selectedCandidate,
    };
  
    dispatch(addVote(data));
  
    // Show success message and refresh after 2 seconds
    alert("Your vote has been successfully submitted!");
    setFullName('')
    setSelectedCandidate('')

  
  };
    return (
    <><Navbar />
    <div className="min-h-screen bg-green-100 flex flex-col items-center">
      
      
      <motion.div
        className="max-w-3xl w-full mt-10 p-8 bg-white shadow-xl rounded-xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex justify-center items-center mb-6"
          initial={{ y: -10 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Lottie animationData={cartoonAnimation} className="w-32 h-32" />
        </motion.div>

        <div className="space-y-6">
          <div>
            <label className="block font-semibold text-green-700">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <FaceUploader />

          <div>
            <label className="block font-semibold text-green-700">Select Your Candidate</label>
            <select
              value={selectedCandidate}
              onChange={(e) => setSelectedCandidate(e.target.value)}
              className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Select a Candidate</option>
              {candidates.length > 0 ? (
                candidates.map((candidate) => (
                  <option key={candidate.id} value={candidate.id}>
                    {candidate.id}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  No candidates available
                </option>
              )}
            </select>
          </div>

          <motion.button
            onClick={handleVote}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-800 transition-all duration-300 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Vote
          </motion.button>
        </div>
      </motion.div>

      <Footer />
    </div>
    </>
  );
}