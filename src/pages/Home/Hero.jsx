import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import church from "../../assets/video/church.mp4";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src={church} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-snug">
          KRISTUCOIL <br />
          <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            LONDON MISSION CHURCH
          </span>
        </h1>

        <p className="mt-6 text-base md:text-lg lg:text-xl text-gray-200/90 max-w-2xl mx-auto leading-relaxed">
          A place of worship, love, and community — where faith grows stronger
          and hearts find peace.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-[#fe0000] text-white font-semibold shadow-lg transition"
          >
            Join Us
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-full border border-gray-300 text-gray-200 font-medium hover:bg-gray-200 hover:text-gray-900 transition"
          >
            Learn More
          </Link>
        </div>
      </motion.div>

      {/* Marquee Section */}
      <div className="absolute bottom-0 w-full overflow-hidden ">
        <div className="animate-marquee whitespace-nowrap py-2 text-center text-md font-medium tracking-wide">
          <p>
            ✨ Today’s Vasanam:{" "}
            <span className="text-yellow-400">
              Let your light shine before others, that they may see your good
              deeds and glorify your Father in heaven.
            </span>{" "}
            ✨ <span className="text-gray-300 italic">(Matthew 5:16)</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
