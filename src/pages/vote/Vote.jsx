import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

export default function Vote() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Voting Registration Form</h2>
        <p className="text-red-600 font-semibold text-center">⚠️ Login is required to proceed with voting.</p>
        <form className="space-y-4 mt-4">
          <div>
            <label className="block font-medium">Full Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter your full name" required />
          </div>
          <div>
            <label className="block font-medium">Father's Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter your father's name" required />
          </div>
          <div>
            <label className="block font-medium">CNIC</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter your CNIC (XXXXX-XXXXXXX-X)" required />
          </div>
          <div>
            <label className="block font-medium">Candidate Number</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter candidate number" required />
          </div>
          <div>
            <label className="block font-medium">Gender</label>
            <select className="w-full p-2 border rounded-lg" required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block font-medium">Date of Birth</label>
            <input type="date" className="w-full p-2 border rounded-lg" required />
          </div>
          <div>
            <label className="block font-medium">Address</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter your address" required />
          </div>
          <div>
            <label className="block font-medium">Select Your Candidate</label>
            <select className="w-full p-2 border rounded-lg" required>
              <option value="">Select a Candidate</option>
              <option value="mariyam_nawaz">Maryam Nawaz</option>
              <option value="imran_khan">Imran Khan</option>
              <option value="bilawal_bhutto">Bilawal Bhutto</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-green-700 text-white p-2 rounded-lg hover:bg-blue-700">Submit Vote</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}
