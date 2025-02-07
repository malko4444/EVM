import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">About Our Voting Platform</h1>
        <p className="text-lg text-gray-700 text-center">
          Welcome to our online voting system, designed to ensure a transparent, secure, and efficient voting process. 
          We empower citizens to cast their votes digitally while maintaining the integrity of elections.
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-green-600">Secure & Transparent</h2>
            <p className="text-gray-600 mt-2">
              Our system ensures end-to-end encryption, preventing any unauthorized access or tampering.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-green-600">User-Friendly Interface</h2>
            <p className="text-gray-600 mt-2">
              A seamless and intuitive voting experience that allows users to cast their votes with just a few clicks.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-green-600">Real-Time Results</h2>
            <p className="text-gray-600 mt-2">
              Get instant updates and election outcomes as soon as the voting period ends.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-green-600">Trusted by Citizens</h2>
            <p className="text-gray-600 mt-2">
              A platform built to enhance democracy by making the voting process more accessible to everyone.
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-green-700">Your Vote Matters!</h2>
          <p className="text-gray-600 mt-2">
            Make your voice heard by participating in the digital revolution of voting.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
