// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes, FaBell } from "react-icons/fa";
// import logo from "../assets/images/logo.jpg";
// import { Link } from "react-router-dom";
//  import { MdMenuBook } from "react-icons/md";
//  import { FiUser } from "react-icons/fi";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Menu data (name + path)
//   const menuItems = [
//     { name: "HOME", path: "/" },
//     { name: "ABOUT", path: "/about" },
//     { name: "EVENTS", path: "/events" },
//     { name: "ORDER OF SERVICES", path: "/services" },
//     { name: "GALLERY", path: "/gallery" },
//     { name: "CONTACT", path: "/contact" }, // ✅ Contact added
//     { name: "LOGIN", path: "/login" },
//   ];

//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 600) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
//         scrolled ? "bg-black/70" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-8xl mx-auto flex justify-between items-center px-6 md:px-20 py-4 text-white">
//         {/* Logo */}
//         <div className="flex items-center gap-2 text-xl font-bold tracking-wide">
//           <Link to="/">
//             <img
//               src={logo}
//               alt="Church Logo"
//               className="w-14 h-14 md:w-16 md:h-16 rounded-full"
//             />
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
//           {menuItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               className="relative group tracking-wide"
//             >
//               {item.name}
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] duration-500 bg-gray-300 transition-all group-hover:w-full"></span>
//             </Link>
//           ))}
//           {/* ✅ Announcements Icon (Desktop) */}
//           {/* <Link to="/announcements" className="text-xl hover:text-gray-300">
//             <FaBell />
//           </Link> */}
         

// <div className="relative group">
//   <Link
//     to="/bible-verses"
//     className="flex items-center justify-center w-10 h-10 rounded-md 
//                 transition"
//   >
//     <MdMenuBook className="text-xl text-gray-300 group-hover:text-white" />
//   </Link>

//   <span className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 
//     text-xs bg-black text-white px-2 py-1 rounded opacity-0 
//     group-hover:opacity-100 whitespace-nowrap">
//     Bible Verses
//   </span>
// </div>


// <div className="relative group -ml-5">
//   <Link
//   to="/profile"
//     className="w-10 h-10 flex items-center justify-center 
//                 transition"
//   >
//     <FiUser className="text-lg text-white" />
//   </Link>

//   {/* Tooltip */}
//   <span className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 
//     text-xs bg-black text-white px-2 py-1 rounded opacity-0 
//     group-hover:opacity-100 whitespace-nowrap">
//     Profile
//   </span>
// </div>
//         </nav>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden flex items-center gap-4">
//           {/* ✅ Announcements Icon (Mobile) */}
//           <Link to="/announcements" className="text-xl hover:text-gray-300">
//             <FaBell />
//           </Link>

//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-2xl focus:outline-none"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-black/95 backdrop-blur-sm">
//           <nav className="flex flex-col items-center py-6 space-y-6 text-sm md:text-lg font-medium text-white">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className="hover:text-gray-300 transition"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaBell } from "react-icons/fa";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { FiUser } from "react-icons/fi";

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
    { name: "CONTACT", path: "/contact" },
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

          {/* Bible Verses Icon (Desktop) */}
          <div className="relative group">
            <Link
              to="/bible-verses"
              className="flex items-center justify-center w-10 h-10 rounded-md transition"
            >
              <MdMenuBook className="text-xl text-gray-300 group-hover:text-white" />
            </Link>
            <span className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 
              text-xs bg-black text-white px-2 py-1 rounded opacity-0 
              group-hover:opacity-100 whitespace-nowrap">
              Bible Verses
            </span>
          </div>

          {/* Profile Icon (Desktop) */}
          <div className="relative group -ml-5">
            <Link
              to="/profile"
              className="w-10 h-10 flex items-center justify-center transition"
            >
              <FiUser className="text-lg text-white" />
            </Link>
            <span className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 
              text-xs bg-black text-white px-2 py-1 rounded opacity-0 
              group-hover:opacity-100 whitespace-nowrap">
              Profile
            </span>
          </div>
        </nav>

        {/* Mobile Menu Icon & Icons */}
        <div className="md:hidden flex items-center gap-4">
          {/* Bible Verses Icon (Mobile) */}
          <Link to="/bible-verses" className="text-xl hover:text-gray-300">
            <MdMenuBook />
          </Link>

          {/* Profile Icon (Mobile) */}
          <Link to="/profile" className="text-xl hover:text-gray-300">
            <FiUser />
          </Link>

          {/* Announcements Icon (Mobile) */}
          {/* <Link to="/announcements" className="text-xl hover:text-gray-300">
            <FaBell />
          </Link> */}

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
