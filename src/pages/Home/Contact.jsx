// // Contact.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <section className="relative w-full min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-6 md:px-16 py-20 overflow-hidden">
//       {/* Background Decorative Overlay */}
//       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20"></div>
//       <div className="absolute inset-0 bg-black/20"></div>

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-32 items-center"
//       >
//         {/* Left Side - Info */}
//         <div className="space-y-12">
//           <h2 className="text-4xl md:text-5xl font-semibold text-yellow-400 leading-tight">
//             Get in Touch
//           </h2>
//           <p className="text-gray-300 text-lg leading-relaxed">
//             We’d love to hear from you! Whether you have questions about our
//             services, upcoming events, or need support, feel free to reach out.
//           </p>

//           <div className="space-y-5 text-gray-300">
//             <p className="flex items-center gap-3">
//               <FaMapMarkerAlt className="text-yellow-400 text-xl" /> Palliyadi,
//               Tamil Nadu
//             </p>
//             <p className="flex items-center gap-3">
//               <FaPhoneAlt className="text-yellow-400 text-xl" /> +91 85258 51212
//             </p>
//             <p className="flex items-center gap-3">
//               <FaEnvelope className="text-yellow-400 text-xl" />{" "}
//               info@kristucoil.org
//             </p>
//           </div>
//         </div>

//         {/* Right Side - Form */}
//         <motion.form
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg space-y-6"
//         >
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-400 outline-none"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-2">
//               Email ID
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-400 outline-none"
//               required
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-2">
//               Message
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your message"
//               className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-400 outline-none"
//               required
//             />
//           </div>

//           {/* Submit */}
//           <motion.button
//             type="submit"
//             className="w-full cursor-pointer bg-yellow-400 text-black font-semibold py-3 rounded-lg shadow-lg transition"
//           >
//             Submit
//           </motion.button>
//         </motion.form>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.warning("Please fill in all fields");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setSubmitting(true);
    
    try {
      // Save to Firestore
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        date: new Date().toISOString().split("T")[0],
        createdAt: serverTimestamp(),
        status: "unread",
      });
      
      toast.success("Message sent successfully! We'll get back to you soon.");
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-6 md:px-16 py-20 overflow-hidden">
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      
      {/* Background Decorative Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-32 items-center"
      >
        {/* Left Side - Info */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-yellow-400 leading-tight">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We’d love to hear from you! Whether you have questions about our
            services, upcoming events, or need support, feel free to reach out.
          </p>

          <div className="space-y-5 text-gray-300">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400 text-xl" /> Palliyadi,
              Tamil Nadu
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400 text-xl" /> +91 85258 51212
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400 text-xl" />{" "}
              info@kristucoil.org
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <motion.form
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email ID
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={submitting}
            className="w-full cursor-pointer bg-yellow-400 text-black font-semibold py-3 rounded-lg shadow-lg transition hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Sending..." : "Submit"}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
