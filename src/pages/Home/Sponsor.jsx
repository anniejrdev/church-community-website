// Sponsor.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sponsor = () => {
  return (
    <div className="bg-black text-white flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full grid md:grid-cols-2 gap-20 items-center"
      >
        {/* Left Side - Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-4xl font-semibold text-yellow-400 leading-tight">
            Be a Sponsor in God’s Mission
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Your generous contribution helps us spread love, hope, and faith to
            those in need. Every donation strengthens our church mission and
            brings blessings to countless lives.{" "}
            <span className="text-yellow-400 font-semibold">
              Together, we can make a difference!
            </span>
          </p>
          <Link to="/payment">
            <motion.button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full text-sm shadow-lg hover:bg-yellow-500 transition-all cursor-pointer">
              Donate Now
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1683134050449-080429c850a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNodXJjaCUyMG1vbmV5JTIwZG9uYXRpb24lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
            alt="Donation Support"
            className="shadow-lg w-full max-w-md object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sponsor;
