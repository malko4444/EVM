import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCand } from "../../store/slices/candidateSlice";

export default function Candidate() {
  const [candidate, setCandidate] = useState("");
  const [work, setWork] = useState("");
  const dispatch = useDispatch();

  const addCollection = () => {
    const newCandidate = {
      name: candidate,
      work: work,
    };
    console.log("candidate", candidate);
    dispatch(addCand(newCandidate));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 to-green-400">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Candidate</h1>
        
        <div className="space-y-4">
          <input
            value={candidate}
            onChange={(e) => setCandidate(e.target.value)}
            type="text"
            placeholder="Enter voter name"
            className="w-full p-3 rounded-xl border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            value={work}
            onChange={(e) => setWork(e.target.value)}
            type="text"
            placeholder="Enter voter details"
            className="w-full p-3 rounded-xl border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-green-400 outline-none"
          />
          
          <button
            onClick={addCollection}
            className="w-full text-xl p-3 text-white bg-green-500 rounded-xl hover:bg-green-600 transition-all duration-300 shadow-md"
          >
            Add Voter
          </button>
        </div>
      </div>
    </div>
  );
}
