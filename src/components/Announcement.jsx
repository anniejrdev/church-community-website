import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark, FaChurch, FaBell } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Announcement = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            scale: { duration: 0.4 },
          }}
          className="fixed z-50 bottom-6 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md lg:max-w-lg xl:max-w-xl"
        >
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200/70 transform transition-all duration-300 hover:shadow-3xl">
            {/* Decorative Church Icon */}
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center">
              <FaChurch className="text-amber-600 text-xl" />
            </div>

            {/* Content Layout */}
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="hidden md:block w-28 lg:w-52 flex-shrink-0">
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent z-10"></div>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1732030992711-27e178f00ec7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2h1cmNoJTIwaW5zaWRlJTIwaW1hZ2VzJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
                    alt="Bible Study Announcement"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 md:p-6 flex-1">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-amber-500/10 mr-3">
                      <FaBell className="text-amber-600 text-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 font-serif">
                      Wednesdays in the Word is Back!
                    </h3>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="ml-4 p-1.5 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-all duration-200"
                  >
                    <FaXmark size={16} />
                  </button>
                </div>

                <p className="text-gray-600 mt-3 leading-relaxed text-sm md:text-base">
                  Bible study begins{" "}
                  <span className="font-semibold text-amber-700">
                    Wednesday, November 6th at 7pm
                  </span>{" "}
                  in person and via Zoom. Check out the events tab for more
                  information.
                </p>

                <div className="flex mt-5 space-x-3">
                  <Link to="/announcements">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 bg-[#fe0000] text-white rounded-lg text-sm cursor-pointer font-medium transition-colors duration-200"
                    >
                      Learn More
                    </motion.button>
                  </Link>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    Remind Me Later
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <motion.div
              className="h-1 bg-amber-500/30"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 8, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Announcement;
