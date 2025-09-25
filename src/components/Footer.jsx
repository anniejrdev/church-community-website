// Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/images/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 relative overflow-hidden">
      {/* Animated Top Border Glow */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-gray-500"
      ></motion.div>

      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {/* Church Info with Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col  text-center md:text-left"
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Kristucoil Logo"
            className="w-24 h-24 object-contain rounded-full mb-4 drop-shadow-lg"
          />

          <h2 className="text-2xl font-bold text-white mb-4">
            Kristucoil London Mission Church
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            Serving faithfully in Palliyadi, spreading light, love, and hope
            through worship, fellowship, and community service.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-yellow-400 transition">Home</li>
            <li className="hover:text-yellow-400 transition">About</li>
            <li className="hover:text-yellow-400 transition">Events</li>
            <li className="hover:text-yellow-400 transition">Gallery</li>
            <li className="hover:text-yellow-400 transition">Services</li>
          </ul>
        </motion.div>

        {/* Contact + Social */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-4 justify-center items-center"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-yellow-400" /> Palliyadi, Tamil Nadu
          </p>
          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-yellow-400" /> +91 85258 51212
          </p>
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-yellow-400" /> info@kristucoil.org
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-yellow-400 transition text-white hover:text-black"
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -10 }}
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-yellow-400 transition text-white hover:text-black"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-yellow-400 transition text-white hover:text-black"
            >
              <FaYoutube />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-6 text-center text-gray-400 text-sm relative z-10">
        © {new Date().getFullYear()}{" "}
        <span className="text-yellow-400 font-semibold">
          Kristucoil London Mission Church
        </span>{" "}
        | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
