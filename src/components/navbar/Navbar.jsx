import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-yellow-400">EVM Pakistan</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-green-300 transition duration-300">Home</Link>
            <Link to="/about" className="hover:text-green-300 transition duration-300">About</Link>
            <Link to="/vote" className="hover:text-green-300 transition duration-300">Go Vote</Link>
            <Link to="/login" className="bg-yellow-400 text-green-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition">Login</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-800 text-white text-center space-y-3 py-4">
          <Link to="/" className="block px-4 py-2 hover:bg-green-700 rounded">Home</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-green-700 rounded">About</Link>
          <Link to="/vote" className="block px-4 py-2 hover:bg-green-700 rounded">Go Vote</Link>
          <Link to="/login" className="block px-4 py-2 bg-yellow-400 text-green-900 rounded-lg hover:bg-yellow-500 transition">Login</Link>
        </div>
      )}
    </nav>
  );
}
