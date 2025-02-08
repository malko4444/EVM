import React, { useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../store/slices/authSlice';

export default function ({ onClose }) {
  const dispatch = useDispatch();
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const modelref = useRef();
  const loginShow = (e) => {
    if (modelref.current === e.target) {
      onClose();
    }
  };
  const loginUser = ()=>{
    const user = {
      email:email,
      password:password
      }
      console.log("login components ",user);
      
      dispatch(userLogin(user));

  }

  return (
    <div ref={modelref} onClick={loginShow} className="inset-0 z-20 fixed w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div className="text-black flex flex-col rounded-xl p-7 h-[20em] w-[20em] bg-green-100 shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-red-600 hover:text-red-800">
          <AiOutlineClose size={20} />
        </button>
        <h2 className="text-center text-green-700 font-bold text-xl mb-4">Login Required</h2>
        <input onChange={(e)=> setEmail(e.target.value)} type='text' className="p-2 border rounded-lg w-full mb-2" placeholder='Enter your email' />
        <input type='password' onChange={(e)=>setPassword(e.target.value)} className="p-2 border rounded-lg w-full mb-4" placeholder='Enter your password' />
        <button onClick={loginUser} className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 w-full">Login</button>
      </div>
    </div>
  );
}
