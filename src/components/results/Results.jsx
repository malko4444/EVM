import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCand, getCand } from "../../store/slices/candidateSlice";
import { FaUserTie } from "react-icons/fa"; // Candidate icon
import { MdWork } from "react-icons/md"; // Work icon
import { BsBarChartFill } from "react-icons/bs"; // Vote icon
import { AiFillDelete } from "react-icons/ai"; // Delete icon

export default function Results() {
    const userinfo = useSelector(state => state.authSlice.user);
    console.log("user in result",userinfo);
    
  const candidates = useSelector((state) => state.candidateSlice.candidate);
  const dispatch = useDispatch();
  const deletCandidate = (id) => {
    console.log("name of deleted candidate ", id);
    dispatch(deleteCand(id))
    
  }

  useEffect(() => {
    dispatch(getCand()); // Fetch candidates when component mounts
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-green-800 mb-6 flex items-center">
        <BsBarChartFill className="text-green-700 mr-2" /> Voting Results
      </h1>

      {/* Candidates List */}
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-4 space-y-4">
        {candidates && candidates.length > 0 ? (
          candidates.map((cand, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-green-50 p-3 rounded-lg shadow-md border border-green-300"
            >
              {/* Candidate Name */}
              <div className="flex items-center space-x-3">
                <FaUserTie className="text-green-700 text-2xl" />
                <h2 className="text-xl font-semibold text-green-900">{cand.id}</h2>
              </div>

              {/* Candidate Work */}
              <div className="flex items-center space-x-3">
                <MdWork className="text-green-600 text-lg" />
                <p className="text-sm text-gray-700">{cand.work || "No details available"}</p>
              </div>

              {/* Vote Count */}
              <div className="flex items-center space-x-3">
                <BsBarChartFill className="text-green-600 text-lg" />
                <p className="text-lg font-semibold text-green-900">{cand.vote || 0} Votes</p>
              </div>

              {/* Delete Button */}
              {userinfo? 
              <button onClick={()=>deleteCand (cand.id)} className="flex items-center space-x-1 bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-md shadow-md">
              <AiFillDelete className="text-lg" />
              <span>Delete</span>
            </button>:<button onClick={()=>deletCandidate (cand.id)} className="flex items-center space-x-1 bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-md shadow-md">
              <AiFillDelete className="text-lg" />
              <span>Delete</span>
            </button>}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No candidates available.</p>
        )}
      </div>
    </div>
  );
}
