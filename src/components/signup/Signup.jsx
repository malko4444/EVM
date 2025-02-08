import React, { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { signup } from "../../store/slices/authSlice";

export default function Signup({ onClose }) {
    const dispatch = useDispatch();
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    // const [phone , setPhone] = useState("")
    // const [terms,setTerms] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    termsAccepted: false,
  });

  const modalRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleModalClick = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  const creatUser = ()=>{
    console.log("in the signup component",formData);
    dispatch(signup(formData))
    
  }

  return (
    <div
      ref={modalRef}
      onClick={handleModalClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <div className="relative bg-white p-5 rounded-xl shadow-lg w-[95%] max-w-lg border-2 border-green-400">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 transition"
        >
          <AiOutlineClose size={22} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-center mb-3 text-green-700">
          Create an Account
        </h2>

        {/* Form */}
        <div className="space-y-3">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-50"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-50"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-50"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-50"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Phone (Optional)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-50"
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2 h-4 w-4 accent-green-600"
            />
            <label className="text-gray-700 text-sm">
              I accept the <span className="text-green-600 font-semibold cursor-pointer">terms & conditions</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
             onClick={creatUser}
            className="w-full bg-green-500 text-white p-2 rounded-lg mt-2 hover:bg-green-600 transition transform hover:scale-105"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
