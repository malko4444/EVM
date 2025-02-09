import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getCand } from '../../store/slices/candidateSlice';

export default function Vote() {
  const idCardNumber = [3, 4, 5, 6, 8, 9]; // Array of CNIC numbers that have already voted
  const candidates = useSelector((state) => state.candidateSlice.candidate);
  const dispatch = useDispatch();

  // Handle form state
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    cnic: '',
    // candidateNumber: '',
    gender: '',
    dob: '',
    address: '',
    selectedCandidate: ''
  });

  // State for error handling
  const [error, setError] = useState('');

  useEffect(() => {
    dispatch(getCand()); // Fetch candidates when component mounts
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if CNIC already exists in the idCardNumber array
    if (idCardNumber.includes(parseInt(formData.cnic))) {
      setError('⚠️ You have already voted!');
    } else {
      setError(''); // Clear any previous error
      console.log("Form Submitted", formData);
      // Here you can dispatch the vote submission action
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Voting Registration Form</h2>
        {/* <p className="text-red-600 font-semibold text-center">⚠️ Login is required to proceed with voting.</p> */}
        
        {/* Show error message if CNIC is already used */}
        {error && <p className="text-red-600 font-semibold text-center">{error}</p>}
        
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your father's name"
              required
            />
          </div>
          <div>
            <label className="block font-medium">CNIC</label>
            <input
              type="text"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your CNIC (XXXXX-XXXXXXX-X)"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your address"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Select Your Candidate</label>
            <select
              name="selectedCandidate"
              value={formData.selectedCandidate}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">Select a Candidate</option>
              {candidates && candidates.length > 0 ? (
                candidates.map((candidate, index) => (
                  <option key={index} value={candidate.id}>
                    {candidate.id}
                  </option>
                ))
              ) : (
                <option value="" disabled>No candidates available</option>
              )}
            </select>
          </div>
          <button type="submit" className="w-full bg-green-700 text-white p-2 rounded-lg hover:bg-green-900">
            Submit Vote
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
