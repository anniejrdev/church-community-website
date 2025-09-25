// AboutHero.jsx
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="bg-[#fce9da] py-28 px-4 md:px-8 lg:px-16 text-center">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-8"
      >
        Loving God, loving others and <br className="hidden md:block" /> serving
        the world!
      </motion.h1>

      {/* Church Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <img
          src="https://media.istockphoto.com/id/182744626/photo/panjim-church-goa.webp?a=1&b=1&s=612x612&w=0&k=20&c=XzKyKaRIDmaVOWfa57vbRcUOzBBadM92vHgRtZc9CbA="
          alt="Church"
          className="shadow-lg w-full object-cover"
        />
      </motion.div>

      {/* Subheading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700 mb-4"
      >
        We are a church that believes in Jesus, a church that loves God and
        people!
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-6"
      >
        We are a church committed to living out our mission, impacting the
        Richardson, TX community and extending the love of Jesus beyond. Join us
        for Sunday morning gatherings at 10:30 am.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition">
          Join Us
        </button>
      </motion.div>
    </section>
  );
}
