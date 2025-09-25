import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="relative py-16 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl px-20 font-bold text-gray-800 mb-10"
          >
            About Our Church
          </motion.h2>
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1718285553269-d0c2a40f205b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNodXJjaCUyMGluc2lkZSUyMGltYWdlcyUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Church Interior"
              className="shadow-lg object-cover w-full"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed text-justify"
          >
            <p>
              In the heart of a quiet village, St. Mary’s church stood as a
              beacon of unity and hope. Every Christmas Eve, its halls filled
              with families, their faces aglow with anticipation. Father Thomas,
              wise and kind, spoke of love and the humble birth that changed the
              world. Candlelight danced, voices rose in harmony, and the message
              resonated.
            </p>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1664006989128-71fc47e7c3d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJpYmxlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
              alt="Bible"
              className="shadow-lg object-cover w-full h-60"
            />
          </motion.div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1723496427340-41dc47b0afdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNodXJjaCUyMHBlb3BsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Church People"
              className="shadow-lg object-cover w-full h-60"
            />

            <div className="pt-5">
              <h4 className="text-lg font-bold mb-3">OUR BELIEFS :</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li>
                  In the Essential beliefs we have{" "}
                  <span className="font-semibold text-[#fe0000]">unity</span>.
                </li>
                <li>
                  In the Non-essential beliefs we have{" "}
                  <span className="font-semibold text-[#fe0000]">liberty</span>.
                </li>
                <li>
                  In all our beliefs we maintain an attitude of{" "}
                  <span className="font-semibold text-[#fe0000]">love</span>.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-gray-700"
          >
            <img
              src="https://images.unsplash.com/photo-1576185358244-140d9f5a2f2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGNodXJjaCUyMHBlb3BsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Church People"
              className="shadow-lg object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
