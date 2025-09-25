// import React from 'react'
// import bgImage from '../assets/Images/stained-glass-illuminates-gothic-chapel-ancient-history-generated-by-ai.jpg'
// import logoImage from '../assets/Images/church-logo-removebg-preview.png'

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="relative h-screen w-full text-white">
      {/* Background Image */}

      <img
        src="https://png.pngtree.com/background/20230611/original/pngtree-church-with-large-wooden-pews-and-stained-glass-picture-image_3171495.jpg"
        alt=""
        className="h-screen w-full"
      />

      {/* login page */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-sm lg:max-w-md w-full">
          <div className="flex justify-center">
            {/* <div><img src={logoImage} className='w-18 h-18'/></div> */}
            <h2 className="text-3xl  font-bold text-center mb-6 p-4 ">Login</h2>
          </div>
          <div className="space-y-8">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border-b text-white outline-none"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border-b outline-none"
            />
          </div>

          <div className="flex items-center justify-between mt-4 text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <button>Forgot Password?</button>
          </div>

          <button className="w-25  text-black bg-white py-2 ml-20 mt-10 md:ml-35 font-medium rounded-full ">
            Sign In
          </button>
          <div className="flex justify-center items-center">
            <div>
              <p className="text-center text-sm mt-4 pe-1">
                Don't have an account?
              </p>
            </div>
            <div className="">
              <Link to="/register">
                <p className="px-1 mt-4 text-red-600 font-semibold cursor-pointer">
                  Register Here
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
