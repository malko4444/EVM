import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../store/slices/authSlice";

export default function Navbar() {
  const userinfo = useSelector(state => state.authSlice.user);
  console.log("user in component", userinfo);
  const dispatch = useDispatch();
  const [login, setLogin] = useState(false)
  const [signup, setSignup] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const logOut = () => {
    dispatch(userLogout())
  }

  return (
    <nav className="bg-green-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-yellow-400">OVS Pakistan</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-green-300 transition duration-300">Home</Link>
            <Link to="/about" className="hover:text-green-300 transition duration-300">About</Link>
            <Link to="/vote" className="hover:text-green-300 transition duration-300">Go Vote</Link>

            {userinfo ?
              <>

                <Link to="/addCandidate" className="hover:text-green-300 transition duration-300">Add Candidate</Link>
                <div onClick={logOut} className="bg-yellow-400 cursor-pointer text-green-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition">LogOut</div>
                <div onClick={() => setSignup(!signup)} className="bg-yellow-400 cursor-pointer text-green-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition">Signup</div>


              </> :
              <>
                <div onClick={() => setLogin(!login)} className="bg-yellow-400 cursor-pointer text-green-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition">Login</div>
               
              </>}
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
          {/* <div onClick={() => setSignup(!signup)} className="block px-4 py-2 bg-yellow-400 text-green-900 rounded-lg hover:bg-yellow-500 transition">signup</div> */}

          {!userinfo ? <>
            <div onClick={() => setLogin(!login)} className="block px-4 py-2 bg-yellow-400 text-green-900 rounded-lg hover:bg-yellow-500 transition">Login</div>
            
          </>
            :<>
            <Link to="/addCandidate" className="hover:text-green-300 transition duration-300">Add Candidate</Link>
            
            {signup && <Signup onClose={() => setSignup(false)} />}   
            <div onClick={() => setSignup(!signup)} className="block px-4 py-2 bg-yellow-400 text-green-900 rounded-lg hover:bg-yellow-500 transition">Signup</div>

            <div onClick={logOut} className="bg-yellow-400 cursor-pointer text-green-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition">LogOut</div>

            </>}
        </div>
      )}
      {login && <Login onClose={() => setLogin(false)} />}
      {signup && <Signup onClose={() => setSignup(false)} />}
    </nav>
  );
}
