// import React from 'react'
// import bgImage from '../assets/Images/stained-glass-illuminates-gothic-chapel-ancient-history-generated-by-ai.jpg'
// import logoImage from '../assets/Images/church-logo-removebg-preview.png'

// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="relative h-screen w-full text-white">
//       {/* Background Image */}

//       <img
//         src="https://png.pngtree.com/background/20230611/original/pngtree-church-with-large-wooden-pews-and-stained-glass-picture-image_3171495.jpg"
//         alt=""
//         className="h-screen w-full"
//       />

//       {/* login page */}
//       <div className="absolute inset-0 flex items-center justify-center bg-black/60">
//         <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-sm lg:max-w-md w-full">
//           <div className="flex justify-center">
//             {/* <div><img src={logoImage} className='w-18 h-18'/></div> */}
//             <h2 className="text-3xl  font-bold text-center mb-6 p-4 ">Login</h2>
//           </div>
//           <div className="space-y-8">
//             <input
//               type="text"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border-b text-white outline-none"
//             />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 border-b outline-none"
//             />
//           </div>

//           <div className="flex items-center justify-between mt-4 text-sm">
//             <label className="flex items-center space-x-2">
//               <input type="checkbox" />
//               <span>Remember me</span>
//             </label>
//             <button>Forgot Password?</button>
//           </div>

//           <button className="w-25  text-black bg-white py-2 ml-20 mt-10 md:ml-35 font-medium rounded-full ">
//             Sign In
//           </button>
//           <div className="flex justify-center items-center">
//             <div>
//               <p className="text-center text-sm mt-4 pe-1">
//                 Don't have an account?
//               </p>
//             </div>
//             <div className="">
//               <Link to="/register">
//                 <p className="px-1 mt-4 text-red-600 font-semibold cursor-pointer">
//                   Register Here
//                 </p>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import { Link } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoImage from "../../assets/images/logo.jpg"
import { auth, db } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";




const Login = () => {
  
  // Add your logo image import here
  // import logoImage from "./path-to-your-logo.png"; // Uncomment and add your logo path
  
  // Temporary logo variable - replace with your actual logo import
  const logoImage = "https://via.placeholder.com/72/FFD700/FFFFFF?text=⛪";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     toast.success("Login successful! 🎉");
  //     console.log("Login Data:", formData);
  //   } else {
  //     toast.error("Please fill all fields correctly");
  //   }
  // };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!validateForm()) {
//     toast.error("Please fill all fields correctly");
//     return;
//   }

//   try {
//     // 🔐 Firebase login
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       formData.email,
//       formData.password
//     );

//     const user = userCredential.user;

//     // 📦 Get role from Firestore
//     const ref = doc(db, "users", user.uid);
//     const snap = await getDoc(ref);

//     if (!snap.exists()) {
//       toast.error("User role not found");
//       return;
//     }

//     const role = snap.data().role;

//     // 🚀 Redirect
//     if (role === "admin") {
//       navigate("/admin/dashboard");
//     } else {
//       navigate("/");
//     }

//     toast.success("Login successful 🎉");
//   } catch (error) {
//     toast.error(error.message);
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    toast.error("Please fill all fields correctly");
    return;
  }

  try {
    // 🔐 Login
    const userCredential = await signInWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    const user = userCredential.user;

    console.log("Logged UID:", user.uid);

    // 📦 Get Firestore user
    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      console.log("No Firestore user found");
      toast.error("User not found in DB");
      return;
    }

    const role = snap.data().role;

    console.log("ROLE:", role);

    // 🚀 Redirect
    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/");
    }

    toast.success("Login successful 🎉");

  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

  return (
    <div className="relative h-screen w-full text-white">
      <ToastContainer theme="colored" />

      {/* Background Image */}
      <img
        src="https://png.pngtree.com/background/20230611/original/pngtree-church-with-large-wooden-pews-and-stained-glass-picture-image_3171495.jpg"
        alt=""
        className="h-screen w-full object-cover"
      />

      {/* login page */}
      <div className="absolute inset-0 flex items-center justify-center py-5 bg-black/60">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl  shadow-lg max-w-sm lg:max-w-md w-full border border-white/20">
          
          {/* Logo with transparent background */}
          {/* <div className="flex justify-center mb-4">
            <img src={logoImage} className='w-20 h-20 object-contain' alt="logo" />
          </div> */}
          
          <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
            Login
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-2 rounded-lg bg-white/10 border ${
                  errors.email ? "border-red-400" : "border-white/20"
                } outline-none focus:border-yellow-400 transition-all text-white placeholder:text-gray-400`}
              />
              {/* {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )} */}

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full px-4 py-2 rounded-lg bg-white/10 border ${
                  errors.password ? "border-red-400" : "border-white/20"
                } outline-none focus:border-yellow-400 transition-all text-white placeholder:text-gray-400`}
              />
              {/* {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password}</p>
              )} */}
            </div>

            {/* Remember Me - No Forgot Password */}
            <div className="flex items-center mt-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 text-yellow-500 focus:ring-yellow-500 rounded"
                />
                <span className="text-sm text-gray-300">Remember me</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-2 mt-6 font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Sign In
            </button>
          </form>

          {/* Register Link */}
          <div className="flex justify-center items-center gap-1 mt-6">
            <p className="text-sm text-gray-300">Don't have an account?</p>
            <Link to="/register">
              <p className="text-sm font-semibold text-yellow-400 hover:text-yellow-300 cursor-pointer transition">
                Register Here
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;