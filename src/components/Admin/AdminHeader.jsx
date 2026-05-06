// import { FiBell, FiSearch, FiUser, FiChevronDown } from "react-icons/fi";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Header() {
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);

//   const notifications = [
//     { id: 1, title: "New prayer request", time: "5 min ago", read: false },
//     { id: 2, title: "Event scheduled", time: "1 hour ago", read: false },
//     { id: 3, title: "New user registered", time: "2 hours ago", read: true },
//   ];

//   const unreadCount = notifications.filter(n => !n.read).length;

//   return (
//     <div className="fixed top-0 left-64 right-0 h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-40 shadow-sm">
//       {/* Left - Title */}
//       <div>
//         <h2 className="text-lg font-semibold text-gray-800">
//           Dashboard
//         </h2>
//         <p className="text-xs text-gray-400 mt-0.5">Welcome back, Admin</p>
//       </div>

//       {/* Right */}
//       <div className="flex items-center gap-5">
//         {/* Search Bar */}
//         <div className="hidden md:flex items-center bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 focus-within:border-yellow-400 focus-within:shadow-sm transition-all duration-200">
//           <FiSearch className="text-gray-400" size={16} />
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-transparent outline-none px-2 text-sm text-gray-700 placeholder:text-gray-400 w-48"
//           />
//         </div>

//         {/* Notifications */}
//         <div className="relative">
//           <button
//             onClick={() => setShowNotifications(!showNotifications)}
//             className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
//           >
//             <FiBell size={18} className="text-gray-600" />
//             {unreadCount > 0 && (
//               <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//             )}
//           </button>

//           <AnimatePresence>
//             {showNotifications && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
//               >
//                 <div className="px-4 py-3 border-b border-gray-100">
//                   <h3 className="text-sm font-semibold text-gray-800">Notifications</h3>
//                 </div>
//                 <div className="max-h-96 overflow-y-auto">
//                   {notifications.map((notif) => (
//                     <div
//                       key={notif.id}
//                       className={`px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer ${
//                         !notif.read ? "bg-yellow-50/30" : ""
//                       }`}
//                     >
//                       <p className="text-sm text-gray-800">{notif.title}</p>
//                       <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="px-4 py-2 border-t border-gray-100 text-center">
//                   <button className="text-xs text-yellow-600 hover:text-yellow-700 font-medium">
//                     View all notifications
//                   </button>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Profile Dropdown */}
//         <div className="relative">
//           <button
//             onClick={() => setShowProfile(!showProfile)}
//             className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
//           >
//             <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
//               <FiUser size={14} className="text-white" />
//             </div>
//             <span className="hidden md:inline text-sm text-gray-700">Admin</span>
//             <FiChevronDown size={14} className="text-gray-400" />
//           </button>

//           <AnimatePresence>
//             {showProfile && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
//               >
//                 <div className="px-4 py-3 border-b border-gray-100">
//                   <p className="text-sm font-semibold text-gray-800">Admin User</p>
//                   <p className="text-xs text-gray-400">admin@kristucoil.com</p>
//                 </div>
//                 <div className="py-1">
//                   <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
//                     Profile Settings
//                   </button>
//                   <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
//                     My Account
//                   </button>
//                   <hr className="my-1" />
//                   <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
//                     Logout
//                   </button>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }

import { FiBell, FiSearch, FiUser, FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
 import { useLocation } from "react-router-dom";

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    { id: 1, title: "New prayer request", time: "5 min ago", read: false },
    { id: 2, title: "Event scheduled", time: "1 hour ago", read: false },
    { id: 3, title: "New user registered", time: "2 hours ago", read: true },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

const location = useLocation();

const getTitle = () => {
  if (location.pathname.includes("users")) return "Users";
  if (location.pathname.includes("prayer")) return "Prayer Requests";
  if (location.pathname.includes("events")) return "Events";
  if (location.pathname.includes("services")) return "Services";
  if (location.pathname.includes("announcements")) return "Announcements";
  if (location.pathname.includes("gallery")) return "Gallery";
  if (location.pathname.includes("ministries")) return "Ministries";
  if (location.pathname.includes("contact")) return "Contact";
  if (location.pathname.includes("bible-verses")) return "Daily Bible";
  if (location.pathname.includes("sponsor")) return "Donation";
  return "Dashboard";
};

  return (
    <div className="h-14  bg-white flex items-center justify-between px-3 border-b border-gray-200">
      {/* Left - Dashboard Title */}
      <div>
        {/* <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2> */}
        <h2 className="text-lg font-semibold text-gray-800">
  {getTitle()}
</h2>
      </div>

      {/* Right - Search and Admin */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        {/* <div className="flex items-center bg-gray-50 rounded-md px-3 py-1.5 border border-gray-200">
          <FiSearch className="text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-2 text-sm text-gray-700 placeholder:text-gray-400 w-48"
          />
        </div> */}

        {/* Notifications Icon */}
        <div className="relative">
          {/* <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-md "
          >
            <FiBell size={18} className="text-gray-600" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button> */}

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-80 bg-white rounded-md border border-gray-200 overflow-hidden z-50"
              >
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-800">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className={`px-4 py-2 hover:bg-gray-50 cursor-pointer ${
                        !notif.read ? "bg-yellow-50" : ""
                      }`}
                    >
                      <p className="text-sm text-gray-800">{notif.title}</p>
                      <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-gray-100 text-center">
                  <button className="text-xs text-yellow-600 hover:text-yellow-700">
                    View all
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Admin Profile */}
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 p-1.5 rounded-md"
          >
            <div className="w-7 h-7 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
              <FiUser size={13} className="text-white" />
            </div>
            <span className="text-sm text-gray-700">Admin</span>
            <FiChevronDown size={13} className="text-gray-400" />
          </button>

          <AnimatePresence>
            {showProfile && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-44 bg-white rounded-md border border-gray-200 overflow-hidden z-50"
              >
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-800">Admin User</p>
                  <p className="text-xs text-gray-400">admin@church.com</p>
                </div>
                <div className="py-1">
                  {/* <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Profile
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Settings
                  </button> */}
                  {/* <hr className="my-1" />
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    Logout
                  </button> */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}