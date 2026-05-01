// import { GoArrowRight } from "react-icons/go";

// const Register = () => {
//   return (
//     <div>
//       <div className="relative h-screen w-full text-white">
//         {/* Background Image */}
//         <img
//           src="https://png.pngtree.com/background/20230611/original/pngtree-church-with-large-wooden-pews-and-stained-glass-picture-image_3171495.jpg"
//           alt=""
//           className="h-screen w-full"
//         />

//         {/* login page */}
//         <div className="absolute inset-0 flex items-center justify-center bg-black/60">
//           <div
//             className="bg-white/10 backdrop-blur-md p-8 rounded-2xl  max-w-md w-full border border-transparent 
//             shadow-lg"
//           >
//             <div className="flex justify-center">
//               {/* <div><img src={logoImage} className='w-18 h-18'/></div> */}
//               <h2 className="text-3xl  font-bold text-center mb-2 p-4 ">
//                 Register Here
//               </h2>
//             </div>
//             <div className="space-y-5">
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full py-2 border-b text-white outline-none"
//               />
//               {/* <input
//                 type="date"
//                 placeholder="Enter DOB"
//                 className="w-full py-2 border-b outline-none"
//               /> */}
//               {/* <input
//                 type="number"
//                 placeholder="Phone Number"
//                 className="w-full py-2 border-b outline-none"
//               /> */}
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full py-2 border-b outline-none"
//               />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full py-2 border-b outline-none"
//               />
//               <input
//                 type="password"
//                 placeholder="confirm password"
//                 className="w-full py-2 border-b outline-none"
//               />
//               <div className="flex justify-center mt-6">
//                 <button className="flex justify-center items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-medium shadow transition">
//                   Sign in
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import { Link } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoArrowRight } from "react-icons/go";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const Register = () => {
  // Add your logo image import here
  // import logoImage from "./path-to-your-logo.png";
  const logoImage = "https://via.placeholder.com/72/FFD700/FFFFFF?text=⛪";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

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

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Registration successful! 🎉 Please login.");
      console.log("Register Data:", formData);
      // Add your registration logic here
    } else {
      toast.error("Please fill all fields correctly");
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

      {/* Register Page */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md w-full border border-white/20">
          
          {/* Logo */}
          {/* <div className="flex justify-center mb-2">
            <img src={logoImage} className='w-20 h-20 object-contain' alt="logo" />
          </div> */}
          
          <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
            Register Here
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border ${
                    errors.name ? "border-red-400" : "border-white/20"
                  } outline-none focus:border-yellow-400 transition-all text-white placeholder:text-gray-400`}
                />
              </div>
              {/* {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )} */}
            </div>

            {/* Email Input */}
            <div>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border ${
                    errors.email ? "border-red-400" : "border-white/20"
                  } outline-none focus:border-yellow-400 transition-all text-white placeholder:text-gray-400`}
                />
              </div>
              {/* {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )} */}
            </div>

            {/* Password Input */}
            <div>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`w-full pl-10 pr-10 py-2 rounded-lg bg-white/10 border ${
                    errors.password ? "border-red-400" : "border-white/20"
                  } outline-none focus:border-yellow-400 transition-all text-white placeholder:text-gray-400`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
              {/* {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password}</p>
              )} */}
            </div>

            {/* Confirm Password Input */}
            <div>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className={`w-full pl-10 pr-10 py-2 rounded-lg bg-white/10 border ${
                    errors.confirmPassword ? "border-red-400" : "border-white/20"
                  } outline-none focus:border-yellow-400 transition-all text-white placeholder:text-gray-400`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
              {/* {errors.confirmPassword && (
                <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>
              )} */}
            </div>

            {/* Register Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Register <GoArrowRight />
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="flex justify-center items-center gap-1 mt-6">
            <p className="text-sm text-gray-300">Already have an account?</p>
            <Link to="/login">
              <p className="text-sm font-semibold text-yellow-400 hover:text-yellow-300 cursor-pointer transition">
                Login Here
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
