import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import LoginImage from '../assets/images/1.png'
import { Link } from 'react-router';

function SignUp() {
  return (
    <div className="container flex flex-col  items-center bg-white py-8">
      <div className="flex flex-col md:flex-row gap-7.5 bg-white rounded-xl overflow-hidden shadow-none">
        {/* Left: Image */}
        <div className=" flex-1 flex items-center">
          <img src={LoginImage} alt="Shopping"/>
        </div>
        {/* Right: Form */}
        <div className="flex-1 flex flex-col justify-center px-8 py-12">
          <h2 className="text-3xl font-bold mb-2">Create an account</h2>
          <p className="text-gray-600 mb-8">Enter your details below</p>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="border-b border-gray-300 py-2 px-1 outline-none focus:border-[#DB4444] transition" />
            <input type="text" placeholder="Email or Phone Number" className="border-b border-gray-300 py-2 px-1 outline-none focus:border-[#DB4444] transition" />
            <input type="password" placeholder="Password" className="border-b border-gray-300 py-2 px-1 outline-none focus:border-[#DB4444] transition" />
            <button type="submit" className="bg-[#DB4444] text-white rounded-md py-3 mt-4 font-medium hover:bg-[#b83232] transition">Create Account</button>
          </form>
          <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 mt-4 w-full hover:bg-gray-50 transition">
            <FcGoogle size={22} />
            <span className="font-medium text-gray-700">Sign up with Google</span>
          </button>
          <div className="mt-8 text-center text-gray-600 text-sm">
            Already have account?{' '}
            <Link to="/login" className="text-gray-900 underline hover:text-[#DB4444]">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;