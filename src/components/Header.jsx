import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaBell } from "react-icons/fa";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Menu data (name + path)
  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "EVENTS", path: "/events" },
    { name: "ORDER OF SERVICES", path: "/services" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" }, // ✅ Contact added
    { name: "LOGIN", path: "/login" },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/70" : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto flex justify-between items-center px-6 md:px-20 py-4 text-white">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold tracking-wide">
          <Link to="/">
            <img
              src={logo}
              alt="Church Logo"
              className="w-14 h-14 md:w-16 md:h-16 rounded-full"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative group tracking-wide"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] duration-500 bg-gray-300 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          {/* ✅ Announcements Icon (Desktop) */}
          <Link to="/announcements" className="text-xl hover:text-gray-300">
            <FaBell />
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-4">
          {/* ✅ Announcements Icon (Mobile) */}
          <Link to="/announcements" className="text-xl hover:text-gray-300">
            <FaBell />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center py-6 space-y-6 text-sm md:text-lg font-medium text-white">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-gray-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
