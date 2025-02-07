import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold uppercase border-b-2 border-green-400 inline-block pb-1 mb-4">About Pakistan</h2>
            <p className="text-sm text-gray-300">
              "Pakistan is not just a country; it is an idea, a vision of progress, unity, and strength. Let us honor our democracy 
              by voting for a brighter tomorrow." 🇵🇰
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-bold uppercase border-b-2 border-green-400 inline-block pb-1 mb-4">Quick Links</h2>
            <ul className="text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-green-400">Home</a></li>
              <li><a href="#candidates" className="hover:text-green-400">Candidates</a></li>
              <li><a href="#about" className="hover:text-green-400">About</a></li>
              <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold uppercase border-b-2 border-green-400 inline-block pb-1 mb-4">Contact Us</h2>
            <p className="text-gray-300 flex items-center justify-center md:justify-start"><FaMapMarkerAlt className="mr-2"/> Islamabad, Pakistan</p>
            <p className="text-gray-300 flex items-center justify-center md:justify-start"><FaPhone className="mr-2"/> +92 300 1234567</p>
            <p className="text-gray-300 flex items-center justify-center md:justify-start"><FaEnvelope className="mr-2"/> info@evm.pk</p>
          </div>

        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-green-600 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>&copy; {new Date().getFullYear()} Electronic Voting Machine. All rights reserved.</p>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-green-400">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-green-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-green-400">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
