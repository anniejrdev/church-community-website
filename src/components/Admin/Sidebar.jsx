// import { NavLink } from "react-router-dom";
// import {
//   FiHome,
//   FiUsers,
//   FiCalendar,
//   FiImage,
//   FiMail,
//   FiSettings,
//   FiBookOpen,
// } from "react-icons/fi";

// export default function Sidebar() {
//   const linkClass =
//     "flex items-center gap-3 px-3 py-2 rounded text-sm hover:bg-gray-800 transition";

//   const activeClass = "bg-gray-800";

//   return (
//     <div className="w-60 bg-gray-900 text-white min-h-screen p-4">

//       {/* Logo / Title */}
//       <h2 className="text-lg font-semibold mb-6">
//         Kristucoil Admin
//       </h2>

//       {/* Menu */}
//       <nav className="flex flex-col gap-2">

//         <NavLink
//           to="/admin/dashboard"
//           className={({ isActive }) =>
//             `${linkClass} ${isActive ? activeClass : ""}`
//           }
//         >
//           <FiHome /> Dashboard
//         </NavLink>

//         <NavLink
//           to="/admin/users"
//           className={({ isActive }) =>
//             `${linkClass} ${isActive ? activeClass : ""}`
//           }
//         >
//           <FiUsers /> Users
//         </NavLink>

//         <NavLink
//           to="/admin/events"
//           className={({ isActive }) =>
//             `${linkClass} ${isActive ? activeClass : ""}`
//           }
//         >
//           <FiCalendar /> Events
//         </NavLink>

//         <NavLink
//           to="/admin/gallery"
//           className={({ isActive }) =>
//             `${linkClass} ${isActive ? activeClass : ""}`
//           }
//         >
//           <FiImage /> Gallery
//         </NavLink>

//         <NavLink
//           to="/admin/messages"
//           className={({ isActive }) =>
//             `${linkClass} ${isActive ? activeClass : ""}`
//           }
//         >
//           <FiMail /> Contact
//         </NavLink>

//         <NavLink
//           to="/admin/verses"
//           className={({ isActive }) =>
//             `${linkClass} ${isActive ? activeClass : ""}`
//           }
//         >
//           <FiBookOpen /> Verses
//         </NavLink>

//         <NavLink
//           to="/admin/settings"
//           className={({ isActive }) =>
//             `${linkClass} ${isActive ? activeClass : ""}`
//           }
//         >
//           <FiSettings /> Settings
//         </NavLink>

//       </nav>
//     </div>
//   );
// }


// import {
//   FiHome,
//   FiUsers,
//   FiCalendar,
//   FiBell,
//   FiImage,
//   FiMail,
//   FiBookOpen,
//   FiSettings,
//   FiDollarSign,
//   FiClipboard,
// } from "react-icons/fi";

// export default function Sidebar() {
//   const itemClass =
//     "flex items-center gap-3 px-3 py-2 rounded text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition cursor-pointer";

//   return (
//     <div className="w-60 bg-gray-900 text-white min-h-screen flex flex-col">

//       {/* Header */}
//       <div className="px-4 py-4 border-b border-gray-800">
//         <h1 className="text-lg font-semibold">
//           Kristucoil Admin
//         </h1>
//       </div>

//       {/* Menu */}
//       <div className="flex-1 px-3 py-4 space-y-1">

//         <div className={itemClass}>
//           <FiHome /> Dashboard
//         </div>

//         <div className={itemClass}>
//           <FiUsers /> Users
//         </div>

//         <div className={itemClass}>
//           <FiClipboard /> Prayer Requests
//         </div>

//         <div className={itemClass}>
//           <FiCalendar /> Order of Service
//         </div>

//         <div className={itemClass}>
//           <FiCalendar /> Events
//         </div>

//         <div className={itemClass}>
//           <FiBell /> Announcements
//         </div>

//         <div className={itemClass}>
//           <FiUsers /> Ministries
//         </div>

//         <div className={itemClass}>
//           <FiImage /> Gallery
//         </div>

//         <div className={itemClass}>
//           <FiDollarSign /> Sponsors
//         </div>

//         <div className={itemClass}>
//           <FiMail /> Contact Messages
//         </div>

//         <div className={itemClass}>
//           <FiBookOpen /> Bible Verses
//         </div>

//         <div className={itemClass}>
//           <FiBell /> Notifications
//         </div>

//         <div className={itemClass}>
//           <FiSettings /> Settings
//         </div>

//       </div>

     
//     </div>
//   );
// }

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FiHome,
//   FiUsers,
//   FiCalendar,
//   FiBell,
//   FiImage,
//   FiMail,
//   FiBookOpen,
//   FiSettings,
//   FiDollarSign,
//   FiClipboard,
//   FiLogOut,
//   FiChevronDown,
//   FiChevronRight,
// } from "react-icons/fi";
// import { Link, useLocation } from "react-router-dom";

// export default function Sidebar() {
//   const location = useLocation();
//   const [openMenus, setOpenMenus] = useState({});

//   const toggleMenu = (menu) => {
//     setOpenMenus((prev) => ({
//       ...prev,
//       [menu]: !prev[menu],
//     }));
//   };

//   const menuItems = [
//     { name: "Dashboard", icon: FiHome, path: "/admin/dashboard" },
//     { name: "Users", icon: FiUsers, path: "/admin/users" },
//     { name: "Prayer Requests", icon: FiClipboard, path: "/admin/prayer-requests" },
//     { 
//       name: "Services", 
//       icon: FiCalendar, 
//       path: "/admin/order-of-service",
//       submenu: [
//         { name: "Order of Service", path: "/admin/order-of-service" },
//         { name: "Events", path: "/admin/events" },
//       ]
//     },
//     { name: "Announcements", icon: FiBell, path: "/admin/announcements" },
//     { name: "Ministries", icon: FiUsers, path: "/admin/ministries" },
//     { name: "Gallery", icon: FiImage, path: "/admin/gallery" },
//     { name: "Sponsors", icon: FiDollarSign, path: "/admin/sponsors" },
//     { name: "Contact Messages", icon: FiMail, path: "/admin/contact-messages" },
//     { name: "Bible Verses", icon: FiBookOpen, path: "/admin/bible-verses" },
//     { name: "Settings", icon: FiSettings, path: "/admin/settings" },
//   ];

//   const itemClass = (isActive) =>
//     `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
//       isActive
//         ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border-l-3 border-yellow-400"
//         : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
//     } cursor-pointer`;

//   return (
//     <motion.div 
//       initial={{ x: -20, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.4 }}
//       className="w-64 bg-gradient-to-b from-gray-900 to-gray-950 text-white min-h-screen flex flex-col shadow-xl border-r border-gray-800"
//     >
//       {/* Header */}
//       <div className="px-4 py-5 border-b border-gray-800 bg-gradient-to-r from-yellow-500/10 to-transparent">
//         <div className="flex items-center gap-2 mb-1">
          
//           <h1 className="text-xs font-bold tracking-wide">
//             KRISTUCOIL LONDON MISSION <span className="ml-15">CHURCH</span>
//           </h1>
//         </div>
        
//       </div>

//       {/* Menu */}
//       <div className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
//         {menuItems.map((item, index) => (
//           <div key={item.name}>
//             {item.submenu ? (
//               <>
//                 <motion.div
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.03 }}
//                   onClick={() => toggleMenu(item.name)}
//                   className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer ${
//                     location.pathname === item.path || 
//                     item.submenu.some(sub => location.pathname === sub.path)
//                       ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400"
//                       : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <item.icon size={18} />
//                     <span>{item.name}</span>
//                   </div>
//                   {openMenus[item.name] ? <FiChevronDown size={14} /> : <FiChevronRight size={14} />}
//                 </motion.div>
                
//                 {openMenus[item.name] && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.2 }}
//                     className="ml-7 mt-1 space-y-1 border-l border-gray-800 pl-3"
//                   >
//                     {item.submenu.map((sub) => (
//                       <Link to={sub.path} key={sub.name}>
//                         <div
//                           className={`px-3 py-2 rounded-lg text-xs transition-all duration-200 ${
//                             location.pathname === sub.path
//                               ? "text-yellow-400 bg-yellow-500/10"
//                               : "text-gray-500 hover:text-white hover:bg-gray-800/50"
//                           } cursor-pointer`}
//                         >
//                           {sub.name}
//                         </div>
//                       </Link>
//                     ))}
//                   </motion.div>
//                 )}
//               </>
//             ) : (
//               <Link to={item.path}>
//                 <motion.div
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.03 }}
//                   className={itemClass(location.pathname === item.path)}
//                 >
//                   <item.icon size={18} />
//                   <span>{item.name}</span>
//                 </motion.div>
//               </Link>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <div className="px-3 py-4 border-t border-gray-800">
//         <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-gray-800/50 hover:text-white transition-all duration-200 cursor-pointer">
//           <FiLogOut size={18} />
//           <span>Logout</span>
//         </div>
       
//       </div>
//     </motion.div>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiBell,
  FiImage,
  FiMail,
  FiBookOpen,
  FiSettings,
  FiDollarSign,
  FiClipboard,
  FiLogOut,
  FiChevronDown,
  FiChevronRight,
  FiSearch,
  FiActivity
} from "react-icons/fi";
import logo from "../../assets/images/logo.jpg";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const menuItems = [
    { name: "Dashboard", icon: FiHome, path: "/admin/dashboard" },
    { name: "Users", icon: FiUsers, path: "/admin/users" },
    { name: "Prayer Requests", icon: FiClipboard, path: "/admin/prayer-requests" },
    { name: "Order Of Services", icon: FiCalendar, path: "/admin/services" },
  //  { name: "Events", icon: FiCalendar, path: "/admin/events" },
  {
  name: "Events",
  icon: FiCalendar,
  submenu: [
    { name: "Events List", path: "/admin/events" },
    { name: "Event Section", path: "/admin/events/section" },
  ],
},
    // { name: "Announcements", icon: FiBell, path: "/admin/announcements" },
    { name: "Announcements", icon: FiBell, path: "/admin/announcements" },
    { name: "Ministries", icon: FiUsers, path: "/admin/ministries" },
    // { name: "Gallery", icon: FiImage, path: "/admin/gallery" },
    {
  name: "Gallery",
  icon: FiImage,
  submenu: [
    { name: "Gallery List", path: "/admin/gallery" },
    { name: "Gallery Section", path: "/admin/gallery/section" },
  ],
},
    // { name: "Sponsors", icon: FiDollarSign, path: "/admin/sponsors" },
    { name: "Donation", icon: FiDollarSign, path: "/admin/sponsors",},
    {name: "Contact",icon: FiMail,path: "/admin/contact",},
    // { name: "Bible Verses", icon: FiBookOpen, path: "/admin/bible-verses" },
    {name: "Daily Bible",icon: FiBookOpen,path: "/admin/bible-verses",},
    // { name: "Settings", icon: FiSettings, path: "/admin/settings" },
  ];

  // Filter menu items based on search
  const filterMenuItems = (items, term) => {
    if (!term) return items;
    
    return items.filter(item => {
      const matchesName = item.name.toLowerCase().includes(term.toLowerCase());
      if (item.submenu) {
        const matchesSubmenu = item.submenu.some(sub => 
          sub.name.toLowerCase().includes(term.toLowerCase())
        );
        return matchesName || matchesSubmenu;
      }
      return matchesName;
    });
  };

  const filteredMenuItems = filterMenuItems(menuItems, searchTerm);

  const itemClass = (isActive) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
      isActive
        ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border-l-1 border-yellow-400"
        : "text-black hover:bg-gray-800/50 hover:text-white"
    } cursor-pointer`;

  return (
//     <motion.div 
//       initial={{ x: -20, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.4 }}
//       className=" w-58 h-screen bg-white text-black flex flex-col shadow-xl "
//     >
//       {/* Header */}
//       <div className="px-4 py-4 border-b bg-white flex-shrink-0 border-r shadow-r-sm">
//         <h1 className="text-xs font-bold tracking-wide text-center">
//           KRISTUCOIL LONDON MISSION CHURCH
//         </h1>
//       </div>

//       {/* Search Bar */}
//       {/* <div className="px-3 py-3 border-b border-gray-800 flex-shrink-0">
//         <div className="relative">
//           <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={14} />
//           <input
//             type="text"
//             placeholder="Search menu..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-9 pr-3 py-2  bg-gray-800/50 border border-b-gray-700 text-white text-sm placeholder:text-gray-500 outline-none focus:border-b-yellow-500   transition"
//           />
//         </div>
//       </div> */}
//       <div className="px-3 py-3  border-gray-800 flex-shrink-0">
//   <div className="relative">
//     <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={14} />
//     <input
//       type="text"
//       placeholder="Search menu..."
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//       className="w-full pl-9 pr-3 py-2 bg-transparent border-b border-gray-700 text-black text-sm placeholder:text-gray-500 outline-none focus:border-b-yellow-500 border-0 transition"
//     />
//   </div>
// </div>

//       {/* Menu - Scrollable with hidden scrollbar */}
//       <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto scrollbar-hide">
//         <AnimatePresence mode="wait">
//           {filteredMenuItems.length > 0 ? (
//             filteredMenuItems.map((item, index) => (
//               <div key={item.name}>
//                 {item.submenu ? (
//                   <>
//                     <motion.div
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.03 }}
//                       onClick={() => toggleMenu(item.name)}
//                       className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer ${
//                         location.pathname === item.path || 
//                         item.submenu.some(sub => location.pathname === sub.path)
//                           ? "bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-400"
//                           : "text-black hover:bg-gray-800/50 hover:text-black"
//                       }`}
//                     >
//                       <div className="flex items-center gap-3">
//                         <item.icon size={18} />
//                         <span>{item.name}</span>
//                       </div>
//                       {openMenus[item.name] ? <FiChevronDown size={14} /> : <FiChevronRight size={14} />}
//                     </motion.div>
                    
//                     {openMenus[item.name] && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.2 }}
//                         className="ml-7 mt-1 space-y-1 border-l border-gray-800 pl-3"
//                       >
//                         {item.submenu.map((sub) => (
//                           <Link to={sub.path} key={sub.name}>
//                             <div
//                               className={`px-3 py-2 rounded-lg text-xs transition-all duration-200 ${
//                                 location.pathname === sub.path
//                                   ? "text-yellow-400 bg-yellow-500/10"
//                                   : "text-black hover:text-black hover:bg-gray-800/50"
//                               } cursor-pointer`}
//                             >
//                               {sub.name}
//                             </div>
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </>
//                 ) : (
//                   <Link to={item.path}>
//                     <motion.div
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.03 }}
//                       className={itemClass(location.pathname === item.path)}
//                     >
//                       <item.icon size={18} />
//                       <span>{item.name}</span>
//                     </motion.div>
//                   </Link>
//                 )}
//               </div>
//             ))
//           ) : (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center text-black text-sm py-8"
//             >
//               No menu found
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Footer - Fixed */}
//       <div className="px-3 py-4 border-t border-gray-800 flex-shrink-0">
//         <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-gray-800/50 hover:text-white transition-all duration-200 cursor-pointer">
//           <FiLogOut size={18} />
//           <span>Logout</span>
//         </div>
//       </div>
//     </motion.div>
<motion.div 
  initial={{ x: -20, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.4 }}
  className="w-64 h-screen bg-white text-gray-800 flex flex-col shadow-xs border-r border-gray-100"
>
  {/* Header */}
  <div className="px-4 py-3 border-b border-gray-100 bg-white flex-shrink-0">
    {/* <div className="flex flex-col items-center text-center">
      <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-2 mx-auto shadow-md">
        <span className="text-white font-bold text-sm">K</span>
      </div>
      <h1 className="text-xs font-bold tracking-wide text-gray-800 uppercase">
        Kristucoil London<br />
        <span className="text-[10px] font-normal text-gray-500 mt-0.5 block">Mission Church</span>
      </h1>
    </div> */}
    <div className="flex flex-col items-center text-center">
  
  {/* LOGO */}
  <img
    src={logo}
    alt="Church Logo"
    className="w-14 h-14 object-contain mb-2"
  />

 
 <h1 className="text-xs font-bold tracking-wide text-gray-800 uppercase">
        Kristucoil London<br />
        <span className="text-[10px] font-normal text-gray-500 mt-0.5 block">Mission Church</span>
      </h1>

</div>
  </div>

  {/* Search Bar */}
  <div className="px-4 py-4 flex-shrink-0 bg-white">
    <div className="relative">
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
      <input
        type="text"
        placeholder="Search menu..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-9 pr-3 py-2  border border-gray-200 rounded-lg text-gray-700 text-sm placeholder:text-gray-400 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/20 transition-all duration-200"
      />
    </div>
  </div>

  {/* Menu - Scrollable with hidden scrollbar */}
  <div className="flex-1 px-3 py-1 space-y-1 overflow-y-auto scrollbar-hide">
    <AnimatePresence mode="wait">
      {filteredMenuItems.length > 0 ? (
        filteredMenuItems.map((item, index) => (
          <div key={item.name}>
            {item.submenu ? (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => toggleMenu(item.name)}
                  className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer ${
                    location.pathname === item.path || 
                    item.submenu.some(sub => location.pathname === sub.path)
                      ? "bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-700 border-l-4 border-yellow-500"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className={location.pathname === item.path || item.submenu.some(sub => location.pathname === sub.path) ? "text-yellow-600" : "text-gray-500"} />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {openMenus[item.name] ? <FiChevronDown size={14} className="text-gray-500" /> : <FiChevronRight size={14} className="text-gray-500" />}
                </motion.div>
                
                {openMenus[item.name] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-9 mt-1 space-y-1 border-l-2 border-gray-100 pl-3"
                  >
                    {item.submenu.map((sub) => (
                      <Link to={sub.path} key={sub.name}>
                        <div
                          className={`px-3 py-2 rounded-lg text-xs transition-all duration-200 ${
                            location.pathname === sub.path
                              ? "text-yellow-700 bg-yellow-50 font-medium"
                              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                          } cursor-pointer`}
                        >
                          {sub.name}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </>
            ) : (
              <Link to={item.path}>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-700 border-l-4 border-yellow-500"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  } cursor-pointer`}
                >
                  <item.icon size={18} className={location.pathname === item.path ? "text-yellow-600" : "text-gray-500"} />
                  <span className="font-medium">{item.name}</span>
                </motion.div>
              </Link>
            )}
          </div>
        ))
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-400 text-sm py-8"
        >
          No menu found
        </motion.div>
      )}
    </AnimatePresence>
  </div>

  {/* Footer - Fixed */}
  <div className="px-3 py-4 border-t border-gray-100 bg-white flex-shrink-0">
    {/* <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 cursor-pointer group">
      <FiLogOut size={18} className="group-hover:text-red-600" />
      <span className="font-medium">Logout</span>
    </div> */}
    <Link to="/admin/logout">
  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 cursor-pointer group">
    <FiLogOut size={18} className="group-hover:text-red-600" />
    <span className="font-medium">Logout</span>
  </div>
</Link>
  </div>
</motion.div>
  );
}