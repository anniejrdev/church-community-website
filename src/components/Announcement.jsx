// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaXmark, FaChurch, FaBell } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const Announcement = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: 100, scale: 0.8 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 100, scale: 0.8 }}
//           transition={{
//             duration: 0.6,
//             ease: [0.16, 1, 0.3, 1],
//             scale: { duration: 0.4 },
//           }}
//           className="fixed z-50 bottom-6 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md lg:max-w-lg xl:max-w-xl"
//         >
//           <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200/70 transform transition-all duration-300 hover:shadow-3xl">
//             {/* Decorative Church Icon */}
//             <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center">
//               <FaChurch className="text-amber-600 text-xl" />
//             </div>

//             {/* Content Layout */}
//             <div className="flex flex-col md:flex-row">
//               {/* Image Section */}
//               <div className="hidden md:block w-28 lg:w-52 flex-shrink-0">
//                 <div className="relative h-full">
//                   <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent z-10"></div>
//                   <img
//                     src="https://plus.unsplash.com/premium_photo-1732030992711-27e178f00ec7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2h1cmNoJTIwaW5zaWRlJTIwaW1hZ2VzJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
//                     alt="Bible Study Announcement"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="p-5 md:p-6 flex-1">
//                 <div className="flex items-start justify-between">
//                   <div className="flex items-center">
//                     <div className="p-2 rounded-lg bg-amber-500/10 mr-3">
//                       <FaBell className="text-amber-600 text-lg" />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800 font-serif">
//                       Wednesdays in the Word is Back!
//                     </h3>
//                   </div>

//                   {/* Close Button */}
//                   <button
//                     onClick={() => setIsOpen(false)}
//                     className="ml-4 p-1.5 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-all duration-200"
//                   >
//                     <FaXmark size={16} />
//                   </button>
//                 </div>

//                 <p className="text-gray-600 mt-3 leading-relaxed text-sm md:text-base">
//                   Bible study begins{" "}
//                   <span className="font-semibold text-amber-700">
//                     Wednesday, November 6th at 7pm
//                   </span>{" "}
//                   in person and via Zoom. Check out the events tab for more
//                   information.
//                 </p>

//                 <div className="flex mt-5 space-x-3">
//                   <Link to="/announcements">
//                     <motion.button
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.98 }}
//                       className="px-4 py-2 bg-[#fe0000] text-white rounded-lg text-sm cursor-pointer font-medium transition-colors duration-200"
//                     >
//                       Learn More
//                     </motion.button>
//                   </Link>

//                   <motion.button
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-colors duration-200"
//                   >
//                     Remind Me Later
//                   </motion.button>
//                 </div>
//               </div>
//             </div>

//             {/* Progress Bar */}
//             <motion.div
//               className="h-1 bg-amber-500/30"
//               initial={{ width: "100%" }}
//               animate={{ width: "0%" }}
//               transition={{ duration: 8, ease: "linear" }}
//             />
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Announcement;



// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   FaXmark, 
//   FaChurch, 
//   FaBell, 
//   FaCalendar,
//   FaClock, 
//   FaCross
// } from "react-icons/fa6";
// import { Link } from "react-router-dom";


// const Announcement = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [currentService, setCurrentService] = useState(null);
//   const [currentDeathAnnouncement, setCurrentDeathAnnouncement] = useState(null);

//   // Sample Order of Service Data - Replace with your Firebase data
//   const orderOfServiceData = [
//     {
//       id: 1,
//       title: "Wednesday Bible Study",
//       date: "2024-11-06",
//       time: "7:00 PM",
//       description: "In person and via Zoom. Join us for an inspiring study of God's Word.",
//       location: "Main Sanctuary & Zoom",
//       speaker: "Pastor John",
//       status: "upcoming"
//     },
//     {
//       id: 2,
//       title: "Sunday Morning Worship",
//       date: "2024-11-10",
//       time: "10:00 AM",
//       description: "Come together for praise, worship, and powerful preaching.",
//       location: "Main Sanctuary",
//       speaker: "Pastor Sarah",
//       status: "upcoming"
//     },
//     {
//       id: 3,
//       title: "Youth Fellowship",
//       date: "2024-11-08",
//       time: "6:30 PM",
//       description: "Special gathering for youth with games, music, and message.",
//       location: "Youth Hall",
//       speaker: "Youth Pastor Mike",
//       status: "upcoming"
//     },
//     {
//       id: 4,
//       title: "Prayer Meeting",
//       date: "2024-11-05",
//       time: "5:00 AM",
//       description: "Early morning prayer for church and community needs.",
//       location: "Prayer Tower",
//       speaker: "Elder Thomas",
//       status: "past"
//     }
//   ];

//   // Sample Death Announcements Data - Replace with your Firebase data
//   const deathAnnouncementsData = [
//     {
//       id: 1,
//       name: "Mrs. Mary Johnson",
//       age: 78,
//       place: "Kerala, India",
//       date: "2024-11-01",
//     },
//     {
//       id: 2,
//       name: "Mr. David Wilson",
//       age: 65,
//       place: "Chennai, Tamil Nadu",
//       date: "2024-10-28",
//     },
//     {
//       id: 3,
//       name: "Baby Sarah Thomas",
//       age: 2,
//       place: "Bangalore, Karnataka",
//       date: "2024-11-03",
//     }
//   ];

//   // Get the next upcoming service (current date/time based)
//   const getNextService = () => {
//     const now = new Date();
//     const upcomingServices = orderOfServiceData
//       .filter(service => new Date(service.date) >= now)
//       .sort((a, b) => new Date(a.date) - new Date(b.date));
    
//     return upcomingServices[0] || orderOfServiceData[0];
//   };

//   // Get the most recent death announcement
//   const getRecentDeathAnnouncement = () => {
//     const sortedDeaths = [...deathAnnouncementsData].sort(
//       (a, b) => new Date(b.date) - new Date(a.date)
//     );
//     return sortedDeaths[0];
//   };

//   useEffect(() => {
//     setCurrentService(getNextService());
//     setCurrentDeathAnnouncement(getRecentDeathAnnouncement());
//   }, []);

//   // Format date for display
//   const formatDate = (dateString) => {
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: 100, scale: 0.8 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 100, scale: 0.8 }}
//           transition={{
//             duration: 0.6,
//             ease: [0.16, 1, 0.3, 1],
//             scale: { duration: 0.4 },
//           }}
//           className="fixed z-50 bottom-6 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md lg:max-w-lg xl:max-w-xl"
//         >
//           <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200/70 transform transition-all duration-300 hover:shadow-3xl">
//             {/* Decorative Church Icon */}
//             <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center">
//               <FaChurch className="text-amber-600 text-xl" />
//             </div>

//             {/* Content Layout */}
//             <div className="flex flex-col md:flex-row">
//               {/* Image Section */}
//               <div className="hidden md:block w-28 lg:w-52 flex-shrink-0">
//                 <div className="relative h-full">
//                   <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent z-10"></div>
//                   <img
//                     src="https://plus.unsplash.com/premium_photo-1732030992711-27e178f00ec7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2h1cmNoJTIwaW5zaWRlJTIwaW1hZ2VzJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
//                     alt="Church Announcement"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="p-5 md:p-6 flex-1">
//                 {/* Order of Service Section */}
//                 <div className="mb-5">
//                   <div className="flex items-start justify-between">
//                     <div className="flex items-center">
//                       <div className="p-2 rounded-lg bg-amber-500/10 mr-3">
//                         <FaBell className="text-amber-600 text-lg" />
//                       </div>
//                       <h3 className="text-lg font-bold text-gray-800 font-serif">
//                         Upcoming Service
//                       </h3>
//                     </div>

//                     {/* Close Button */}
//                     <button
//                       onClick={() => setIsOpen(false)}
//                       className="ml-4 p-1.5 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-all duration-200"
//                     >
//                       <FaXmark size={16} />
//                     </button>
//                   </div>

//                   {currentService && (
//                     <>
//                       <h4 className="text-md font-semibold text-gray-800 mt-2">
//                         {currentService.title}
//                       </h4>
                      
//                       <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
//                         <div className="flex items-center gap-1">
//                           <FaCalendar className="text-amber-600" />
//                           <span>{formatDate(currentService.date)}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <FaClock className="text-amber-600" />
//                           <span>{currentService.time}</span>
//                         </div>
//                       </div>

//                       {/* <p className="text-gray-600 mt-2 leading-relaxed text-xs md:text-sm">
//                         {currentService.description}
//                       </p> */}

//                       <div className="flex mt-3 space-x-3">
//                         <Link to={`/announcements/service/${currentService.id}`}>
//                           <motion.button
//                             whileHover={{ scale: 1.03 }}
//                             whileTap={{ scale: 0.98 }}
//                             className="px-3 py-1.5 bg-[#fe0000] text-white rounded-lg text-xs cursor-pointer font-medium transition-colors duration-200"
//                           >
//                             Learn More
//                           </motion.button>
//                         </Link>
//                       </div>
//                     </>
//                   )}
//                 </div>

//                 {/* Divider */}
//                 <div className="border-t border-gray-200 my-3"></div>

//                 {/* Death Announcement Section */}
//                 {/* {currentDeathAnnouncement && (
//                   <div>
//                     <div className="flex items-center mb-2">
//                       <div className="p-2 rounded-lg bg-gray-100 mr-3">
//                         <FaCross className="text-gray-600 text-sm" />
//                       </div>
//                       <h4 className="text-sm font-semibold text-gray-700">
//                         Death
//                       </h4>
//                     </div>

//                     <p className="text-gray-700 text-sm leading-relaxed">
//                       <span className="font-semibold">{currentDeathAnnouncement.name}</span>
//                       {currentDeathAnnouncement.age && ` (${currentDeathAnnouncement.age} years)`}
//                       {currentDeathAnnouncement.place && `, ${currentDeathAnnouncement.place}`}
//                     </p>

//                     <p className="text-gray-500 text-xs mt-1">
//                       Entered eternal rest on {formatDate(currentDeathAnnouncement.date)}
//                     </p>

//                     <div className="flex mt-3 space-x-3">
//                       <Link to={`/announcements/death/${currentDeathAnnouncement.id}`}>
//                         <motion.button
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="px-3 py-1.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-medium transition-colors duration-200"
//                         >
//                           Learn More
//                         </motion.button>
//                       </Link>
//                     </div>
//                   </div>
//                 )} */}
//                 {currentDeathAnnouncement && (
//   <div>
//     <div className="flex items-center mb-2">
//       <div className="p-2 rounded-lg bg-gray-100 mr-3">
//         <FaCross className="text-gray-600 text-sm" />
//       </div>
//       <h4 className="text-sm font-semibold text-gray-700">
//         In Loving Memory
//       </h4>
//     </div>

//     <p className="text-gray-700 text-sm leading-relaxed">
//       <span className="font-semibold">{currentDeathAnnouncement.name}</span>
//       {currentDeathAnnouncement.age && `, Age ${currentDeathAnnouncement.age}`}
//       {currentDeathAnnouncement.place && `, ${currentDeathAnnouncement.place}`}
//     </p>

//     <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
//       <span>🕊️</span> May their soul rest in peace
//     </p>

//     <div className="flex mt-3 space-x-3">
//       <Link to={`/announcements/death/${currentDeathAnnouncement.id}`}>
//         <motion.button
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.98 }}
//           className="px-3 py-1.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-medium transition-colors duration-200"
//         >
//           Learn More
//         </motion.button>
//       </Link>
//     </div>
//   </div>
// )}
//               </div>
//             </div>

//             {/* Progress Bar */}
//             <motion.div
//               className="h-1 bg-amber-500/30"
//               initial={{ width: "100%" }}
//               animate={{ width: "0%" }}
//               transition={{ duration: 8, ease: "linear" }}
//             />
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Announcement;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   FaXmark, 
//   FaChurch, 
//   FaBell, 
//   FaCalendar,
//   FaClock, 
//   FaCross
// } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const Announcement = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [currentService, setCurrentService] = useState(null);
//   const [currentDeathAnnouncement, setCurrentDeathAnnouncement] = useState(null);

//   // Sample Order of Service Data - Replace with your Firebase data
//   const orderOfServiceData = [
//     {
//       id: 1,
//       title: "Wednesday Bible Study",
//       date: "2024-11-06",
//       time: "7:00 PM",
//       description: "In person and via Zoom. Join us for an inspiring study of God's Word.",
//       location: "Main Sanctuary & Zoom",
//       speaker: "Pastor John",
//       status: "upcoming"
//     },
//     {
//       id: 2,
//       title: "Sunday Morning Worship",
//       date: "2024-11-10",
//       time: "10:00 AM",
//       description: "Come together for praise, worship, and powerful preaching.",
//       location: "Main Sanctuary",
//       speaker: "Pastor Sarah",
//       status: "upcoming"
//     },
//     {
//       id: 3,
//       title: "Youth Fellowship",
//       date: "2024-11-08",
//       time: "6:30 PM",
//       description: "Special gathering for youth with games, music, and message.",
//       location: "Youth Hall",
//       speaker: "Youth Pastor Mike",
//       status: "upcoming"
//     },
//     {
//       id: 4,
//       title: "Prayer Meeting",
//       date: "2024-11-05",
//       time: "5:00 AM",
//       description: "Early morning prayer for church and community needs.",
//       location: "Prayer Tower",
//       speaker: "Elder Thomas",
//       status: "past"
//     }
//   ];

//   // Sample Death Announcements Data - Replace with your Firebase data
//   const deathAnnouncementsData = [
//     {
//       id: 1,
//       name: "Mrs. Mary Johnson",
//       age: 78,
//       place: "Kerala, India",
//       date: "2024-11-01",
//     },
//     {
//       id: 2,
//       name: "Mr. David Wilson",
//       age: 65,
//       place: "Chennai, Tamil Nadu",
//       date: "2024-10-28",
//     },
//     {
//       id: 3,
//       name: "Baby Sarah Thomas",
//       age: 2,
//       place: "Bangalore, Karnataka",
//       date: "2024-11-03",
//     }
//   ];

//   // Get the next upcoming service (current date/time based)
//   const getNextService = () => {
//     const now = new Date();
//     const upcomingServices = orderOfServiceData
//       .filter(service => new Date(service.date) >= now)
//       .sort((a, b) => new Date(a.date) - new Date(b.date));
    
//     return upcomingServices[0] || orderOfServiceData[0];
//   };

//   // Get the most recent death announcement
//   const getRecentDeathAnnouncement = () => {
//     const sortedDeaths = [...deathAnnouncementsData].sort(
//       (a, b) => new Date(b.date) - new Date(a.date)
//     );
//     return sortedDeaths[0];
//   };

//   useEffect(() => {
//     setCurrentService(getNextService());
//     setCurrentDeathAnnouncement(getRecentDeathAnnouncement());
//   }, []);

//   // Format date for display
//   const formatDate = (dateString) => {
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: 100, scale: 0.8 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 100, scale: 0.8 }}
//           transition={{
//             duration: 0.6,
//             ease: [0.16, 1, 0.3, 1],
//             scale: { duration: 0.4 },
//           }}
//           className="fixed z-50 bottom-6 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md lg:max-w-lg xl:max-w-xl"
//         >
//           <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200/70 transform transition-all duration-300 hover:shadow-3xl">
//             {/* Decorative Church Icon */}
//             <div className="absolute -top-3 -left-3 w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center">
//               <FaChurch className="text-amber-600 text-lg" />
//             </div>

//             {/* Content Layout */}
//             <div className="flex flex-col md:flex-row">
//               {/* Image Section - Reduced height */}
//               <div className="hidden md:block w-28 lg:w-48 flex-shrink-0">
//                 <div className="relative h-full min-h-[220px]">
//                   <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent z-10"></div>
//                   <img
//                     src="https://plus.unsplash.com/premium_photo-1732030992711-27e178f00ec7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2h1cmNoJTIwaW5zaWRlJTIwaW1hZ2VzJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
//                     alt="Church Announcement"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Content Section - Reduced padding */}
//               <div className="p-4 md:p-5 flex-1">
//                 {/* Order of Service Section */}
//                 <div className="mb-3">
//                   <div className="flex items-start justify-between">
//                     <div className="flex items-center">
//                       <div className="p-1.5 rounded-lg bg-amber-500/10 mr-2">
//                         <FaBell className="text-amber-600 text-sm" />
//                       </div>
//                       <h3 className="text-base font-bold text-gray-800 font-serif">
//                         Upcoming Service
//                       </h3>
//                     </div>

//                     {/* Close Button - Smaller */}
//                     <button
//                       onClick={() => setIsOpen(false)}
//                       className="ml-3 p-1 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-all duration-200"
//                     >
//                       <FaXmark size={14} />
//                     </button>
//                   </div>

//                   {currentService && (
//                     <>
//                       <h4 className="text-sm font-semibold text-gray-800 mt-1">
//                         {currentService.title}
//                       </h4>
                      
//                       <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500">
//                         <div className="flex items-center gap-1">
//                           <FaCalendar className="text-amber-600 text-xs" />
//                           <span>{formatDate(currentService.date)}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <FaClock className="text-amber-600 text-xs" />
//                           <span>{currentService.time}</span>
//                         </div>
//                       </div>

//                       <div className="flex mt-2 space-x-3">
//                        <Link 
//   to="/announcement-details" 
//   state={{ 
//     announcement: { 
//       type: "service",
//       ...currentService 
//     } 
//   }}
// >
//                           <motion.button
//                             whileHover={{ scale: 1.03 }}
//                             whileTap={{ scale: 0.98 }}
//                             className="px-2.5 py-1 bg-[#fe0000] text-white rounded-lg text-xs cursor-pointer font-medium transition-colors duration-200"
//                           >
//                             Learn More
//                           </motion.button>
//                         </Link>
//                       </div>
//                     </>
//                   )}
//                 </div>

//                 {/* Divider - Thinner */}
//                 <div className="border-t border-gray-200 my-2"></div>

//                 {/* Death Announcement Section - Compact */}
//                 {currentDeathAnnouncement && (
//                   <div>
//                     <div className="flex items-center mb-1.5">
//                       <div className="p-1.5 rounded-lg bg-gray-100 mr-2">
//                         <FaCross className="text-gray-600 text-xs" />
//                       </div>
//                       <h4 className="text-xs font-semibold text-gray-700">
//                         In Loving Memory
//                       </h4>
//                     </div>

//                     <p className="text-gray-700 text-xs leading-relaxed">
//                       <span className="font-semibold">{currentDeathAnnouncement.name}</span>
//                       {currentDeathAnnouncement.age && `, Age ${currentDeathAnnouncement.age}`}
//                       {currentDeathAnnouncement.place && `, ${currentDeathAnnouncement.place}`}
//                     </p>

//                     <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
//                       <span>🕊️</span> May their soul rest in peace
//                     </p>

//                     <div className="flex mt-2 space-x-3">
//                       <Link 
//   to="/announcement-details" 
//   state={{ 
//     announcement: { 
//       type: "death",
//       ...currentDeathAnnouncement 
//     } 
//   }}
// >
//                         <motion.button
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="px-2.5 py-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-medium transition-colors duration-200"
//                         >
//                           Learn More
//                         </motion.button>
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Progress Bar - Thinner */}
//             <motion.div
//               className="h-0.5 bg-amber-500/30"
//               initial={{ width: "100%" }}
//               animate={{ width: "0%" }}
//               transition={{ duration: 8, ease: "linear" }}
//             />
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Announcement;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   FaXmark, 
//   FaChurch, 
//   FaBell, 
//   FaCalendar,
//   FaClock, 
//   FaCross,
//   FaChevronLeft,
//   FaChevronRight
// } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const Announcement = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [currentService, setCurrentService] = useState(null);
//   const [deathAnnouncements, setDeathAnnouncements] = useState([]);
//   const [currentDeathIndex, setCurrentDeathIndex] = useState(0);

//   // Sample Order of Service Data - Replace with your Firebase data
//   const orderOfServiceData = [
//     {
//       id: 1,
//       title: "Wednesday Bible Study",
//       date: "2024-11-06",
//       time: "7:00 PM",
//       description: "In person and via Zoom. Join us for an inspiring study of God's Word.",
//       location: "Main Sanctuary & Zoom",
//       speaker: "Pastor John",
//       status: "upcoming"
//     },
//     {
//       id: 2,
//       title: "Sunday Morning Worship",
//       date: "2024-11-10",
//       time: "10:00 AM",
//       description: "Come together for praise, worship, and powerful preaching.",
//       location: "Main Sanctuary",
//       speaker: "Pastor Sarah",
//       status: "upcoming"
//     },
//     {
//       id: 3,
//       title: "Youth Fellowship",
//       date: "2024-11-08",
//       time: "6:30 PM",
//       description: "Special gathering for youth with games, music, and message.",
//       location: "Youth Hall",
//       speaker: "Youth Pastor Mike",
//       status: "upcoming"
//     },
//     {
//       id: 4,
//       title: "Prayer Meeting",
//       date: "2024-11-05",
//       time: "5:00 AM",
//       description: "Early morning prayer for church and community needs.",
//       location: "Prayer Tower",
//       speaker: "Elder Thomas",
//       status: "past"
//     }
//   ];

//   // Sample Death Announcements Data - Replace with your Firebase data
//   const deathAnnouncementsData = [
//     {
//       id: 1,
//       name: "Mrs. Mary Johnson",
//       age: 78,
//       place: "Kerala, India",
//       date: "2024-11-01",
//     },
//     {
//       id: 2,
//       name: "Mrs. Elizabeth Paul",
//       age: 71,
//       place: "Delhi, India",
//       date: "2024-10-30",
//     }
//   ];

//   // Get the next upcoming service (current date/time based)
//   const getNextService = () => {
//     const now = new Date();
//     const upcomingServices = orderOfServiceData
//       .filter(service => new Date(service.date) >= now)
//       .sort((a, b) => new Date(a.date) - new Date(b.date));
    
//     return upcomingServices[0] || orderOfServiceData[0];
//   };

//   // Get all death announcements sorted by most recent
//   const getDeathAnnouncements = () => {
//     const sortedDeaths = [...deathAnnouncementsData].sort(
//       (a, b) => new Date(b.date) - new Date(a.date)
//     );
//     return sortedDeaths;
//   };

//   useEffect(() => {
//     setCurrentService(getNextService());
//     const deaths = getDeathAnnouncements();
//     setDeathAnnouncements(deaths);
//     setCurrentDeathIndex(0);
//   }, []);

//   // Auto-rotate death announcements every 5 seconds
//   useEffect(() => {
//     if (deathAnnouncements.length <= 1) return;
    
//     const interval = setInterval(() => {
//       setCurrentDeathIndex((prevIndex) => 
//         prevIndex === deathAnnouncements.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [deathAnnouncements.length]);

//   // Navigation functions for death carousel
//   const nextDeath = () => {
//     setCurrentDeathIndex((prevIndex) => 
//       prevIndex === deathAnnouncements.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevDeath = () => {
//     setCurrentDeathIndex((prevIndex) => 
//       prevIndex === 0 ? deathAnnouncements.length - 1 : prevIndex - 1
//     );
//   };

//   // Format date for display
//   const formatDate = (dateString) => {
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   const currentDeath = deathAnnouncements[currentDeathIndex];

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: 100, scale: 0.8 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 100, scale: 0.8 }}
//           transition={{
//             duration: 0.6,
//             ease: [0.16, 1, 0.3, 1],
//             scale: { duration: 0.4 },
//           }}
//           className="fixed z-50 bottom-6 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md lg:max-w-lg xl:max-w-xl"
//         >
//           <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200/70 transform transition-all duration-300 hover:shadow-3xl">
//             {/* Decorative Church Icon */}
//             <div className="absolute -top-3 -left-3 w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center">
//               <FaChurch className="text-amber-600 text-lg" />
//             </div>

//             {/* Content Layout */}
//             <div className="flex flex-col md:flex-row">
//               {/* Image Section - Reduced height */}
//               <div className="hidden md:block w-28 lg:w-48 flex-shrink-0">
//                 <div className="relative h-full min-h-[220px]">
//                   <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent z-10"></div>
//                   <img
//                     src="https://plus.unsplash.com/premium_photo-1732030992711-27e178f00ec7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2h1cmNoJTIwaW5zaWRlJTIwaW1hZ2VzJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
//                     alt="Church Announcement"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Content Section - Reduced padding */}
//               <div className="p-4 md:p-5 flex-1">
//                 {/* Order of Service Section */}
//                 <div className="mb-3">
//                   <div className="flex items-start justify-between">
//                     <div className="flex items-center">
//                       <div className="p-1.5 rounded-lg bg-amber-500/10 mr-2">
//                         <FaBell className="text-amber-600 text-sm" />
//                       </div>
//                       <h3 className="text-base font-bold text-gray-800 font-serif">
//                         Upcoming Service
//                       </h3>
//                     </div>

//                     {/* Close Button - Smaller */}
//                     <button
//                       onClick={() => setIsOpen(false)}
//                       className="ml-3 p-1 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-all duration-200"
//                     >
//                       <FaXmark size={14} />
//                     </button>
//                   </div>

//                   {currentService && (
//                     <>
//                       <h4 className="text-sm font-semibold text-gray-800 mt-1">
//                         {currentService.title}
//                       </h4>
                      
//                       <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500">
//                         <div className="flex items-center gap-1">
//                           <FaCalendar className="text-amber-600 text-xs" />
//                           <span>{formatDate(currentService.date)}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <FaClock className="text-amber-600 text-xs" />
//                           <span>{currentService.time}</span>
//                         </div>
//                       </div>

//                       <div className="flex mt-2 space-x-3">
//                        <Link 
//   to="/announcement-details" 
//   state={{ 
//     announcement: { 
//       type: "service",
//       ...currentService 
//     } 
//   }}
// >
//                           <motion.button
//                             whileHover={{ scale: 1.03 }}
//                             whileTap={{ scale: 0.98 }}
//                             className="px-2.5 py-1 bg-[#fe0000] text-white rounded-lg text-xs cursor-pointer font-medium transition-colors duration-200"
//                           >
//                             Learn More
//                           </motion.button>
//                         </Link>
//                       </div>
//                     </>
//                   )}
//                 </div>

//                 {/* Divider - Thinner */}
//                 <div className="border-t border-gray-200 my-2"></div>

//                 {/* Death Announcement Section with Carousel */}
//                 {deathAnnouncements.length > 0 && currentDeath && (
//                   <div className="relative">
//                     <div className="flex items-center mb-1.5">
//                       <div className="p-1.5 rounded-lg bg-gray-100 mr-2">
//                         <FaCross className="text-gray-600 text-xs" />
//                       </div>
//                       <h4 className="text-xs font-semibold text-gray-700">
//                         In Loving Memory
//                       </h4>
//                     </div>

//                     {/* Carousel Content */}
//                     <div className="relative">
//                       <AnimatePresence mode="wait">
//                         <motion.div
//                           key={currentDeathIndex}
//                           initial={{ opacity: 0, x: 20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           exit={{ opacity: 0, x: -20 }}
//                           transition={{ duration: 0.3 }}
//                         >
//                           <p className="text-gray-700 text-xs leading-relaxed">
//                             <span className="font-semibold">{currentDeath.name}</span>
//                             {currentDeath.age && `, Age ${currentDeath.age}`}
//                             {currentDeath.place && `, ${currentDeath.place}`}
//                           </p>

//                           <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
//                             <span>🕊️</span> May their soul rest in peace
//                           </p>
//                         </motion.div>
//                       </AnimatePresence>

//                       {/* Navigation Arrows - Only show if more than 1 death announcement */}
//                       {deathAnnouncements.length > 1 && (
//                         <>
//                           <button
//                             onClick={prevDeath}
//                             className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 p-1 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-50 transition-all duration-200"
//                           >
//                             <FaChevronLeft size={10} className="text-gray-600" />
//                           </button>
//                           <button
//                             onClick={nextDeath}
//                             className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 p-1 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-50 transition-all duration-200"
//                           >
//                             <FaChevronRight size={10} className="text-gray-600" />
//                           </button>
//                         </>
//                       )}
//                     </div>

//                     {/* Dots Indicator */}
//                     {deathAnnouncements.length > 1 && (
//                       <div className="flex justify-center gap-1.5 mt-2">
//                         {deathAnnouncements.map((_, idx) => (
//                           <button
//                             key={idx}
//                             onClick={() => setCurrentDeathIndex(idx)}
//                             className={`transition-all duration-200 rounded-full ${
//                               idx === currentDeathIndex
//                                 ? "w-1.5 h-1.5 bg-gray-600"
//                                 : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
//                             }`}
//                           />
//                         ))}
//                       </div>
//                     )}

//                     <div className="flex mt-2 space-x-3">
//                       <Link 
//                         to="/announcement-details" 
//                         state={{ 
//                           announcement: { 
//                             type: "death",
//                             ...currentDeath 
//                           } 
//                         }}
//                       >
//                         <motion.button
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="px-2.5 py-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-medium transition-colors duration-200"
//                         >
//                           Learn More
//                         </motion.button>
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Progress Bar - Thinner */}
//             <motion.div
//               className="h-0.5 bg-amber-500/30"
//               initial={{ width: "100%" }}
//               animate={{ width: "0%" }}
//               transition={{ duration: 8, ease: "linear" }}
//             />
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Announcement;


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   FaXmark, 
//   FaChurch, 
//   FaBell, 
//   FaCalendar,
//   FaClock, 
//   FaCross,
//   FaChevronLeft,
//   FaChevronRight
// } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const Announcement = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [currentService, setCurrentService] = useState(null);
//   const [deathAnnouncements, setDeathAnnouncements] = useState([]);
//   const [currentDeathIndex, setCurrentDeathIndex] = useState(0);

//   // Sample Order of Service Data - Replace with your Firebase data
//   const orderOfServiceData = [
//     {
//       id: 1,
//       title: "Wednesday Bible Study",
//       date: "2024-11-06",
//       time: "7:00 PM",
//       description: "In person and via Zoom. Join us for an inspiring study of God's Word.",
//       location: "Main Sanctuary & Zoom",
//       speaker: "Pastor John",
//       status: "upcoming"
//     },
//     {
//       id: 2,
//       title: "Sunday Morning Worship",
//       date: "2024-11-10",
//       time: "10:00 AM",
//       description: "Come together for praise, worship, and powerful preaching.",
//       location: "Main Sanctuary",
//       speaker: "Pastor Sarah",
//       status: "upcoming"
//     },
//     {
//       id: 3,
//       title: "Youth Fellowship",
//       date: "2024-11-08",
//       time: "6:30 PM",
//       description: "Special gathering for youth with games, music, and message.",
//       location: "Youth Hall",
//       speaker: "Youth Pastor Mike",
//       status: "upcoming"
//     },
//     {
//       id: 4,
//       title: "Prayer Meeting",
//       date: "2024-11-05",
//       time: "5:00 AM",
//       description: "Early morning prayer for church and community needs.",
//       location: "Prayer Tower",
//       speaker: "Elder Thomas",
//       status: "past"
//     }
//   ];

//   // Sample Death Announcements Data - Replace with your Firebase data
//   const deathAnnouncementsData = [
//     {
//       id: 1,
//       name: "Mrs. Mary Johnson",
//       age: 78,
//       place: "Kerala, India",
//       date: "2024-11-01",
//     },
//     {
//       id: 2,
//       name: "Mrs. Elizabeth Paul",
//       age: 71,
//       place: "Delhi, India",
//       date: "2024-10-30",
//     }
//   ];

//   // Get the next upcoming service (current date/time based)
//   const getNextService = () => {
//     const now = new Date();
//     const upcomingServices = orderOfServiceData
//       .filter(service => new Date(service.date) >= now)
//       .sort((a, b) => new Date(a.date) - new Date(b.date));
    
//     return upcomingServices[0] || orderOfServiceData[0];
//   };

//   // Get all death announcements sorted by most recent
//   const getDeathAnnouncements = () => {
//     const sortedDeaths = [...deathAnnouncementsData].sort(
//       (a, b) => new Date(b.date) - new Date(a.date)
//     );
//     return sortedDeaths;
//   };

//   useEffect(() => {
//     setCurrentService(getNextService());
//     const deaths = getDeathAnnouncements();
//     setDeathAnnouncements(deaths);
//     setCurrentDeathIndex(0);
//   }, []);

//   // Auto-rotate death announcements every 5 seconds (only if more than 1)
//   useEffect(() => {
//     if (deathAnnouncements.length <= 1) return;
    
//     const interval = setInterval(() => {
//       setCurrentDeathIndex((prevIndex) => 
//         prevIndex === deathAnnouncements.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [deathAnnouncements.length]);

//   // Navigation functions for death carousel
//   const nextDeath = () => {
//     setCurrentDeathIndex((prevIndex) => 
//       prevIndex === deathAnnouncements.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevDeath = () => {
//     setCurrentDeathIndex((prevIndex) => 
//       prevIndex === 0 ? deathAnnouncements.length - 1 : prevIndex - 1
//     );
//   };

//   // Format date for display
//   const formatDate = (dateString) => {
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   const currentDeath = deathAnnouncements[currentDeathIndex];

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: 100, scale: 0.8 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 100, scale: 0.8 }}
//           transition={{
//             duration: 0.6,
//             ease: [0.16, 1, 0.3, 1],
//             scale: { duration: 0.4 },
//           }}
//           className="fixed z-50 bottom-6 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md lg:max-w-lg xl:max-w-xl"
//         >
//           <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200/70 transform transition-all duration-300 hover:shadow-3xl">
//             {/* Decorative Church Icon */}
//             <div className="absolute -top-3 -left-3 w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center">
//               <FaChurch className="text-amber-600 text-lg" />
//             </div>

//             {/* Content Layout */}
//             <div className="flex flex-col md:flex-row">
//               {/* Image Section - Reduced height */}
//               <div className="hidden md:block w-28 lg:w-48 flex-shrink-0">
//                 <div className="relative h-full min-h-[220px]">
//                   <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent z-10"></div>
//                   <img
//                     src="https://plus.unsplash.com/premium_photo-1732030992711-27e178f00ec7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2h1cmNoJTIwaW5zaWRlJTIwaW1hZ2VzJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
//                     alt="Church Announcement"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Content Section - Reduced padding */}
//               <div className="p-4 md:p-5 flex-1">
//                 {/* Order of Service Section */}
//                 <div className="mb-3">
//                   <div className="flex items-start justify-between">
//                     <div className="flex items-center">
//                       <div className="p-1.5 rounded-lg bg-amber-500/10 mr-2">
//                         <FaBell className="text-amber-600 text-sm" />
//                       </div>
//                       <h3 className="text-base font-bold text-gray-800 font-serif">
//                         Upcoming Service
//                       </h3>
//                     </div>

//                     {/* Close Button - Smaller */}
//                     <button
//                       onClick={() => setIsOpen(false)}
//                       className="ml-3 p-1 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-all duration-200"
//                     >
//                       <FaXmark size={14} />
//                     </button>
//                   </div>

//                   {currentService && (
//                     <>
//                       <h4 className="text-sm font-semibold text-gray-800 mt-1">
//                         {currentService.title}
//                       </h4>
                      
//                       <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500">
//                         <div className="flex items-center gap-1">
//                           <FaCalendar className="text-amber-600 text-xs" />
//                           <span>{formatDate(currentService.date)}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <FaClock className="text-amber-600 text-xs" />
//                           <span>{currentService.time}</span>
//                         </div>
//                       </div>

//                       <div className="flex mt-2 space-x-3">
//                        <Link 
//   to="/announcement-details" 
//   state={{ 
//     announcement: { 
//       type: "service",
//       ...currentService 
//     } 
//   }}
// >
//                           <motion.button
//                             whileHover={{ scale: 1.03 }}
//                             whileTap={{ scale: 0.98 }}
//                             className="px-2.5 py-1 bg-[#fe0000] text-white rounded-lg text-xs cursor-pointer font-medium transition-colors duration-200"
//                           >
//                             Learn More
//                           </motion.button>
//                         </Link>
//                       </div>
//                     </>
//                   )}
//                 </div>

//                 {/* Divider - Thinner */}
//                 <div className="border-t border-gray-200 my-2"></div>

//                 {/* Death Announcement Section with Conditional Carousel */}
//                 {deathAnnouncements.length > 0 && currentDeath && (
//                   <div className="relative">
//                     <div className="flex items-center mb-1.5">
//                       <div className="p-1.5 rounded-lg bg-gray-100 mr-2">
//                         <FaCross className="text-gray-600 text-xs" />
//                       </div>
//                       <h4 className="text-xs font-semibold text-gray-700">
//                         In Loving Memory
//                       </h4>
//                     </div>

//                     {/* Carousel Content - Different layout based on number of announcements */}
//                     <div className="relative">
//                       {deathAnnouncements.length === 1 ? (
//                         // Single announcement - No carousel, just display
//                         <div>
//                           <p className="text-gray-700 text-xs leading-relaxed">
//                             <span className="font-semibold">{currentDeath.name}</span>
//                             {currentDeath.age && `, Age ${currentDeath.age}`}
//                             {currentDeath.place && `, ${currentDeath.place}`}
//                           </p>

//                           <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
//                             <span>🕊️</span> May their soul rest in peace
//                           </p>
//                         </div>
//                       ) : (
//                         // Multiple announcements - Carousel with animations
//                         <>
//                           <AnimatePresence mode="wait">
//                             <motion.div
//                               key={currentDeathIndex}
//                               initial={{ opacity: 0, x: 20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               exit={{ opacity: 0, x: -20 }}
//                               transition={{ duration: 0.3 }}
//                             >
//                               <p className="text-gray-700 text-xs leading-relaxed">
//                                 <span className="font-semibold">{currentDeath.name}</span>
//                                 {currentDeath.age && `, Age ${currentDeath.age}`}
//                                 {currentDeath.place && `, ${currentDeath.place}`}
//                               </p>

//                               <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
//                                 <span>🕊️</span> May their soul rest in peace
//                               </p>
//                             </motion.div>
//                           </AnimatePresence>

//                           {/* Navigation Arrows */}
//                           <button
//                             onClick={prevDeath}
//                             className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 p-1 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-50 transition-all duration-200"
//                           >
//                             <FaChevronLeft size={10} className="text-gray-600" />
//                           </button>
//                           <button
//                             onClick={nextDeath}
//                             className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 p-1 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-50 transition-all duration-200"
//                           >
//                             <FaChevronRight size={10} className="text-gray-600" />
//                           </button>

//                           {/* Dots Indicator - Shows exactly number of announcements */}
//                           <div className="flex justify-center gap-1.5 mt-2">
//                             {deathAnnouncements.map((_, idx) => (
//                               <button
//                                 key={idx}
//                                 onClick={() => setCurrentDeathIndex(idx)}
//                                 className={`transition-all duration-200 rounded-full ${
//                                   idx === currentDeathIndex
//                                     ? "w-1.5 h-1.5 bg-gray-600"
//                                     : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
//                                 }`}
//                               />
//                             ))}
//                           </div>
//                         </>
//                       )}
//                     </div>

//                     <div className="flex mt-2 space-x-3">
//                       <Link 
//   to="/announcement-details" 
//   state={{ 
//     announcement: { type: "death" },
//     allDeathAnnouncements: deathAnnouncements
//   }}
// >
//                         <motion.button
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="px-2.5 py-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-medium transition-colors duration-200"
//                         >
//                           Learn More
//                         </motion.button>
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Progress Bar - Thinner */}
//             <motion.div
//               className="h-0.5 bg-amber-500/30"
//               initial={{ width: "100%" }}
//               animate={{ width: "0%" }}
//               transition={{ duration: 8, ease: "linear" }}
//             />
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Announcement;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   FaXmark, 
//   FaChurch, 
//   FaBell, 
//   FaCalendar,
//   FaClock, 
//   FaCross,
//   FaChevronLeft,
//   FaChevronRight
// } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
// import { db } from "../firebase"; // Adjust path as needed

// const Announcement = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [currentService, setCurrentService] = useState(null);
//   const [deathAnnouncements, setDeathAnnouncements] = useState([]);
//   const [currentDeathIndex, setCurrentDeathIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [services, setServices] = useState([]);
//   const [allDeaths, setAllDeaths] = useState([]);

//   // Load data from Firebase
//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     setLoading(true);
//     await Promise.all([loadServices(), loadDeathAnnouncements()]);
//     setLoading(false);
//   };

//   // Load services from Firebase
//   const loadServices = async () => {
//     try {
//       const snap = await getDocs(collection(db, "services"));
//       const data = snap.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       console.log("✅ Loaded services:", data);
//       setServices(data);
      
//       // Find next upcoming service
//       const nextService = getNextService(data);
//       setCurrentService(nextService);
//     } catch (error) {
//       console.error("Error loading services:", error);
//     }
//   };

//   // Load death announcements from Firebase announcements collection
//   const loadDeathAnnouncements = async () => {
//     try {
//       // Assuming death announcements are in 'announcements' collection with type 'death'
//       // OR you might have a separate 'deaths' collection
//       const snap = await getDocs(collection(db, "announcements"));
//       const data = snap.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
      
//       // Filter death announcements (adjust based on your data structure)
//       const deaths = data.filter(item => 
//         item.type === "death" || 
//         item.category === "death" ||
//         item.section === "deaths"
//       );
      
//       console.log("✅ Loaded death announcements:", deaths);
//       setAllDeaths(deaths);
      
//       // Sort by date (most recent first)
//       const sortedDeaths = [...deaths].sort((a, b) => 
//         new Date(b.date) - new Date(a.date)
//       );
//       setDeathAnnouncements(sortedDeaths);
//       setCurrentDeathIndex(0);
//     } catch (error) {
//       console.error("Error loading death announcements:", error);
//     }
//   };

//   // Get the next upcoming service based on current date/time
//   const getNextService = (servicesList) => {
//     const now = new Date();
//     const today = now.toISOString().split('T')[0];
//     const currentTime = now.toTimeString().slice(0, 5);
    
//     // Parse time from service time string (e.g., "10:00 AM" -> "10:00")
//     const parseServiceTime = (timeStr) => {
//       if (!timeStr) return "00:00";
//       const match = timeStr.match(/(\d{1,2}):(\d{2})/);
//       if (match) {
//         let hour = parseInt(match[1]);
//         const minute = match[2];
//         const isPM = timeStr.toLowerCase().includes("pm");
//         if (isPM && hour !== 12) hour += 12;
//         if (!isPM && hour === 12) hour = 0;
//         return `${hour.toString().padStart(2, "0")}:${minute}`;
//       }
//       return "00:00";
//     };
    
//     // Get today's services
//     const todayServices = servicesList.filter(service => {
//       if (!service.day) return false;
//       const dayName = getDayName(service.day);
//       const todayName = getDayName(new Date().getDay());
//       return dayName === todayName;
//     });
    
//     // Find next service today that hasn't passed
//     const upcomingToday = todayServices
//       .filter(service => {
//         const serviceTime = parseServiceTime(service.time);
//         return serviceTime > currentTime;
//       })
//       .sort((a, b) => parseServiceTime(a.time).localeCompare(parseServiceTime(b.time)));
    
//     if (upcomingToday.length > 0) {
//       return upcomingToday[0];
//     }
    
//     // If no more services today, get first service of next day
//     const daysOrder = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//     const todayIndex = new Date().getDay();
    
//     for (let i = 1; i <= 7; i++) {
//       const nextDayIndex = (todayIndex + i) % 7;
//       const nextDayName = daysOrder[nextDayIndex];
//       const nextDayServices = servicesList.filter(s => s.day?.toLowerCase() === nextDayName);
      
//       if (nextDayServices.length > 0) {
//         return nextDayServices[0];
//       }
//     }
    
//     return servicesList[0] || null;
//   };

//   // Get day name from day number or string
//   const getDayName = (day) => {
//     const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//     if (typeof day === "number") return days[day];
//     return day?.toLowerCase() || "";
//   };

//   // Format date for display
//   const formatDate = (dateString) => {
//     if (!dateString) return "Date TBA";
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   // Get today's date for the service
//   const getServiceDate = () => {
//     const today = new Date();
//     return today.toISOString().split('T')[0];
//   };

//   // Auto-rotate death announcements every 5 seconds
//   useEffect(() => {
//     if (deathAnnouncements.length <= 1) return;
    
//     const interval = setInterval(() => {
//       setCurrentDeathIndex((prevIndex) => 
//         prevIndex === deathAnnouncements.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [deathAnnouncements.length]);

//   // Navigation functions for death carousel
//   const nextDeath = () => {
//     setCurrentDeathIndex((prevIndex) => 
//       prevIndex === deathAnnouncements.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevDeath = () => {
//     setCurrentDeathIndex((prevIndex) => 
//       prevIndex === 0 ? deathAnnouncements.length - 1 : prevIndex - 1
//     );
//   };

//   const currentDeath = deathAnnouncements[currentDeathIndex];

//   // Don't show if no data
//   if (loading) {
//     return null; // Or show a loading placeholder
//   }

//   // Don't show if no services and no death announcements
//   if (!currentService && deathAnnouncements.length === 0) {
//     return null;
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: 100, scale: 0.8 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 100, scale: 0.8 }}
//           transition={{
//             duration: 0.6,
//             ease: [0.16, 1, 0.3, 1],
//             scale: { duration: 0.4 },
//           }}
//           className="fixed z-50 bottom-6 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md lg:max-w-lg xl:max-w-xl"
//         >
//           <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200/70 transform transition-all duration-300 hover:shadow-3xl">
//             {/* Decorative Church Icon */}
//             <div className="absolute -top-3 -left-3 w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center">
//               <FaChurch className="text-amber-600 text-lg" />
//             </div>

//             {/* Content Layout */}
//             <div className="flex flex-col md:flex-row">
//               {/* Image Section */}
//               <div className="hidden md:block w-28 lg:w-48 flex-shrink-0">
//                 <div className="relative h-full min-h-[220px]">
//                   <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent z-10"></div>
//                   <img
//                     src="https://plus.unsplash.com/premium_photo-1732030992711-27e178f00ec7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2h1cmNoJTIwaW5zaWRlJTIwaW1hZ2VzJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
//                     alt="Church Announcement"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="p-4 md:p-5 flex-1">
//                 {/* Order of Service Section */}
//                 {currentService && (
//                   <div className="mb-3">
//                     <div className="flex items-start justify-between">
//                       <div className="flex items-center">
//                         <div className="p-1.5 rounded-lg bg-amber-500/10 mr-2">
//                           <FaBell className="text-amber-600 text-sm" />
//                         </div>
//                         <h3 className="text-base font-bold text-gray-800 font-serif">
//                           Upcoming Service
//                         </h3>
//                       </div>

//                       <button
//                         onClick={() => setIsOpen(false)}
//                         className="ml-3 p-1 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-all duration-200"
//                       >
//                         <FaXmark size={14} />
//                       </button>
//                     </div>

//                     <h4 className="text-sm font-semibold text-gray-800 mt-1">
//                       {currentService.name}
//                     </h4>
                    
//                     <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500">
//                       <div className="flex items-center gap-1">
//                         <FaCalendar className="text-amber-600 text-xs" />
//                         <span>{formatDate(getServiceDate())}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <FaClock className="text-amber-600 text-xs" />
//                         <span>{currentService.time}</span>
//                       </div>
//                     </div>

//                     <div className="flex mt-2 space-x-3">
//                       <Link 
//                         to="/announcement-details" 
//                         state={{ 
//                           announcement: { 
//                             type: "service",
//                             ...currentService,
//                             date: getServiceDate()
//                           } 
//                         }}
//                       >
//                         <motion.button
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="px-2.5 py-1 bg-[#fe0000] text-white rounded-lg text-xs cursor-pointer font-medium transition-colors duration-200"
//                         >
//                           Learn More
//                         </motion.button>
//                       </Link>
//                     </div>
//                   </div>
//                 )}

//                 {/* Divider */}
//                 {currentService && deathAnnouncements.length > 0 && (
//                   <div className="border-t border-gray-200 my-2"></div>
//                 )}

//                 {/* Death Announcement Section */}
//                 {deathAnnouncements.length > 0 && currentDeath && (
//                   <div className="relative">
//                     <div className="flex items-center mb-1.5">
//                       <div className="p-1.5 rounded-lg bg-gray-100 mr-2">
//                         <FaCross className="text-gray-600 text-xs" />
//                       </div>
//                       <h4 className="text-xs font-semibold text-gray-700">
//                         In Loving Memory
//                       </h4>
//                     </div>

//                     <div className="relative">
//                       {deathAnnouncements.length === 1 ? (
//                         <div>
//                           <p className="text-gray-700 text-xs leading-relaxed">
//                             <span className="font-semibold">{currentDeath.name}</span>
//                             {currentDeath.age && `, Age ${currentDeath.age}`}
//                             {currentDeath.place && `, ${currentDeath.place}`}
//                           </p>
//                           <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
//                             <span>🕊️</span> May their soul rest in peace
//                           </p>
//                         </div>
//                       ) : (
//                         <>
//                           <AnimatePresence mode="wait">
//                             <motion.div
//                               key={currentDeathIndex}
//                               initial={{ opacity: 0, x: 20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               exit={{ opacity: 0, x: -20 }}
//                               transition={{ duration: 0.3 }}
//                             >
//                               <p className="text-gray-700 text-xs leading-relaxed">
//                                 <span className="font-semibold">{currentDeath.name}</span>
//                                 {currentDeath.age && `, Age ${currentDeath.age}`}
//                                 {currentDeath.place && `, ${currentDeath.place}`}
//                               </p>
//                               <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
//                                 <span>🕊️</span> May their soul rest in peace
//                               </p>
//                             </motion.div>
//                           </AnimatePresence>

//                           {/* Navigation Arrows */}
//                           <button
//                             onClick={prevDeath}
//                             className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 p-1 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-50 transition-all duration-200"
//                           >
//                             <FaChevronLeft size={10} className="text-gray-600" />
//                           </button>
//                           <button
//                             onClick={nextDeath}
//                             className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 p-1 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-50 transition-all duration-200"
//                           >
//                             <FaChevronRight size={10} className="text-gray-600" />
//                           </button>

//                           {/* Dots Indicator */}
//                           <div className="flex justify-center gap-1.5 mt-2">
//                             {deathAnnouncements.map((_, idx) => (
//                               <button
//                                 key={idx}
//                                 onClick={() => setCurrentDeathIndex(idx)}
//                                 className={`transition-all duration-200 rounded-full ${
//                                   idx === currentDeathIndex
//                                     ? "w-1.5 h-1.5 bg-gray-600"
//                                     : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
//                                 }`}
//                               />
//                             ))}
//                           </div>
//                         </>
//                       )}
//                     </div>

//                     <div className="flex mt-2 space-x-3">
//                       <Link 
//                         to="/announcement-details" 
//                         state={{ 
//                           announcement: { type: "death" },
//                           allDeathAnnouncements: deathAnnouncements
//                         }}
//                       >
//                         <motion.button
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="px-2.5 py-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-medium transition-colors duration-200"
//                         >
//                           Learn More
//                         </motion.button>
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Progress Bar */}
//             <motion.div
//               className="h-0.5 bg-amber-500/30"
//               initial={{ width: "100%" }}
//               animate={{ width: "0%" }}
//               transition={{ duration: 8, ease: "linear" }}
//             />
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Announcement;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   FaXmark, 
//   FaChurch, 
//   FaBell, 
//   FaCalendar,
//   FaClock, 
//   FaCross,
//   FaChevronLeft,
//   FaChevronRight
// } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

// const Announcement = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [currentService, setCurrentService] = useState(null);
//   const [deathAnnouncements, setDeathAnnouncements] = useState([]);
//   const [currentDeathIndex, setCurrentDeathIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     setLoading(true);
//     await Promise.all([loadServices(), loadDeathAnnouncements()]);
//     setLoading(false);
//   };

//   const loadServices = async () => {
//     try {
//       const snap = await getDocs(collection(db, "services"));
//       const data = snap.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       console.log("✅ Loaded services:", data);
//       setServices(data);
      
//       const nextService = getNextService(data);
//       setCurrentService(nextService);
//     } catch (error) {
//       console.error("Error loading services:", error);
//     }
//   };

//   const loadDeathAnnouncements = async () => {
//     try {
//       const snap = await getDocs(collection(db, "announcements"));
//       const data = snap.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
      
//       const todayDate = new Date().toISOString().split('T')[0];
      
//       console.log("Today's date:", todayDate);
//       console.log("All announcements:", data);
      
//       // Filter by today's date only (since all are death announcements)
//       const todayDeaths = data.filter(item => item.date === todayDate);
      
//       console.log("Today's death announcements:", todayDeaths);
      
//       // Sort by date (most recent first)
//       const sortedDeaths = [...todayDeaths].sort((a, b) => 
//         new Date(b.date) - new Date(a.date)
//       );
//       setDeathAnnouncements(sortedDeaths);
//       setCurrentDeathIndex(0);
      
//     } catch (error) {
//       console.error("Error loading death announcements:", error);
//     }
//   };

//   const getNextService = (servicesList) => {
//     const now = new Date();
//     const currentTime = now.toTimeString().slice(0, 5);
    
//     const parseServiceTime = (timeStr) => {
//       if (!timeStr) return "00:00";
//       const match = timeStr.match(/(\d{1,2}):(\d{2})/);
//       if (match) {
//         let hour = parseInt(match[1]);
//         const minute = match[2];
//         const isPM = timeStr.toLowerCase().includes("pm");
//         if (isPM && hour !== 12) hour += 12;
//         if (!isPM && hour === 12) hour = 0;
//         return `${hour.toString().padStart(2, "0")}:${minute}`;
//       }
//       return "00:00";
//     };
    
//     const todayName = getDayName(new Date().getDay());
//     const todayServices = servicesList.filter(service => {
//       if (!service.day) return false;
//       return service.day.toLowerCase() === todayName;
//     });
    
//     const upcomingToday = todayServices
//       .filter(service => {
//         const serviceTime = parseServiceTime(service.time);
//         return serviceTime > currentTime;
//       })
//       .sort((a, b) => parseServiceTime(a.time).localeCompare(parseServiceTime(b.time)));
    
//     if (upcomingToday.length > 0) {
//       return upcomingToday[0];
//     }
    
//     const daysOrder = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//     const todayIndex = new Date().getDay();
    
//     for (let i = 1; i <= 7; i++) {
//       const nextDayIndex = (todayIndex + i) % 7;
//       const nextDayName = daysOrder[nextDayIndex];
//       const nextDayServices = servicesList.filter(s => s.day?.toLowerCase() === nextDayName);
      
//       if (nextDayServices.length > 0) {
//         return nextDayServices[0];
//       }
//     }
    
//     return servicesList[0] || null;
//   };

//   const getDayName = (day) => {
//     const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//     if (typeof day === "number") return days[day];
//     return day?.toLowerCase() || "";
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return "Date TBA";
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   const getServiceDate = () => {
//     const today = new Date();
//     return today.toISOString().split('T')[0];
//   };

//   useEffect(() => {
//     if (deathAnnouncements.length <= 1) return;
    
//     const interval = setInterval(() => {
//       setCurrentDeathIndex((prevIndex) => 
//         prevIndex === deathAnnouncements.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [deathAnnouncements.length]);

//   const nextDeath = () => {
//     if (deathAnnouncements.length === 0) return;
//     setCurrentDeathIndex((prevIndex) => 
//       prevIndex === deathAnnouncements.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevDeath = () => {
//     if (deathAnnouncements.length === 0) return;
//     setCurrentDeathIndex((prevIndex) => 
//       prevIndex === 0 ? deathAnnouncements.length - 1 : prevIndex - 1
//     );
//   };

//   const currentDeath = deathAnnouncements[currentDeathIndex];

//   if (loading) {
//     return null;
//   }

//   if (!currentService && deathAnnouncements.length === 0) {
//     return null;
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: 100, scale: 0.8 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 100, scale: 0.8 }}
//           transition={{
//             duration: 0.6,
//             ease: [0.16, 1, 0.3, 1],
//             scale: { duration: 0.4 },
//           }}
//           className="fixed z-50 bottom-6 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md lg:max-w-lg xl:max-w-xl"
//         >
//           <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200/70">
//             <div className="absolute -top-3 -left-3 w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center">
//               <FaChurch className="text-amber-600 text-lg" />
//             </div>

//             <div className="flex flex-col md:flex-row">
//               <div className="hidden md:block w-28 lg:w-48 flex-shrink-0">
//                 <div className="relative h-full min-h-[220px]">
//                   <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent z-10"></div>
//                   <img
//                     src="https://plus.unsplash.com/premium_photo-1732030992711-27e178f00ec7?w=600&auto=format&fit=crop&q=60"
//                     alt="Church Announcement"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>

//               <div className="p-4 md:p-5 flex-1">
//                 {currentService && (
//                   <div className="mb-3">
//                     <div className="flex items-start justify-between">
//                       <div className="flex items-center">
//                         <div className="p-1.5 rounded-lg bg-amber-500/10 mr-2">
//                           <FaBell className="text-amber-600 text-sm" />
//                         </div>
//                         <h3 className="text-base font-bold text-gray-800 font-serif">
//                           Upcoming Service
//                         </h3>
//                       </div>
//                       <button
//                         onClick={() => setIsOpen(false)}
//                         className="ml-3 p-1 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200"
//                       >
//                         <FaXmark size={14} />
//                       </button>
//                     </div>

//                     <h4 className="text-sm font-semibold text-gray-800 mt-1">
//                       {currentService.name}
//                     </h4>
                    
//                     <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500">
//                       <div className="flex items-center gap-1">
//                         <FaCalendar className="text-amber-600 text-xs" />
//                         <span>{formatDate(getServiceDate())}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <FaClock className="text-amber-600 text-xs" />
//                         <span>{currentService.time}</span>
//                       </div>
//                     </div>

//                     <div className="flex mt-2">
//                       <Link 
//                         to="/announcement-details" 
//                         state={{ 
//                           announcement: { 
//                             type: "service",
//                             ...currentService,
//                             date: getServiceDate()
//                           } 
//                         }}
//                       >
//                         <motion.button
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="px-2.5 py-1 bg-[#fe0000] text-white rounded-lg text-xs cursor-pointer font-medium"
//                         >
//                           Learn More
//                         </motion.button>
//                       </Link>
//                     </div>
//                   </div>
//                 )}

//                 {currentService && deathAnnouncements.length > 0 && (
//                   <div className="border-t border-gray-200 my-2"></div>
//                 )}

//                 {deathAnnouncements.length > 0 && currentDeath && (
//                   <div className="relative">
//                     <div className="flex items-center mb-1.5">
//                       <div className="p-1.5 rounded-lg bg-gray-100 mr-2">
//                         <FaCross className="text-gray-600 text-xs" />
//                       </div>
//                       <h4 className="text-xs font-semibold text-gray-700">
//                         In Loving Memory
//                       </h4>
//                     </div>

//                     <div className="relative">
//                       {deathAnnouncements.length === 1 ? (
//                         <div>
//                           <p className="text-gray-700 text-xs leading-relaxed">
//                             <span className="font-semibold">{currentDeath.name}</span>
//                             {currentDeath.age && `, Age ${currentDeath.age}`}
//                             {currentDeath.place && `, ${currentDeath.place}`}
//                           </p>
//                           <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
//                             <span>🕊️</span> May their soul rest in peace
//                           </p>
//                         </div>
//                       ) : (
//                         <>
//                           <AnimatePresence mode="wait">
//                             <motion.div
//                               key={currentDeathIndex}
//                               initial={{ opacity: 0, x: 20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               exit={{ opacity: 0, x: -20 }}
//                               transition={{ duration: 0.3 }}
//                             >
//                               <p className="text-gray-700 text-xs leading-relaxed">
//                                 <span className="font-semibold">{currentDeath.name}</span>
//                                 {currentDeath.age && `, Age ${currentDeath.age}`}
//                                 {currentDeath.place && `, ${currentDeath.place}`}
//                               </p>
//                               <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
//                                 <span>🕊️</span> May their soul rest in peace
//                               </p>
//                             </motion.div>
//                           </AnimatePresence>

//                           <button
//                             onClick={prevDeath}
//                             className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 p-1 bg-white rounded-full shadow-md border border-gray-200"
//                           >
//                             <FaChevronLeft size={10} className="text-gray-600" />
//                           </button>
//                           <button
//                             onClick={nextDeath}
//                             className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 p-1 bg-white rounded-full shadow-md border border-gray-200"
//                           >
//                             <FaChevronRight size={10} className="text-gray-600" />
//                           </button>

//                           <div className="flex justify-center gap-1.5 mt-2">
//                             {deathAnnouncements.map((_, idx) => (
//                               <button
//                                 key={idx}
//                                 onClick={() => setCurrentDeathIndex(idx)}
//                                 className={`transition-all duration-200 rounded-full ${
//                                   idx === currentDeathIndex
//                                     ? "w-1.5 h-1.5 bg-gray-600"
//                                     : "w-1.5 h-1.5 bg-gray-300"
//                                 }`}
//                               />
//                             ))}
//                           </div>
//                         </>
//                       )}
//                     </div>

//                     <div className="flex mt-2">
//                       <Link 
//                         to="/announcement-details" 
//                         state={{ 
//                           announcement: { type: "death", ...currentDeath },
//                           allDeathAnnouncements: deathAnnouncements
//                         }}
//                       >
//                         <motion.button
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="px-2.5 py-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-medium"
//                         >
//                           Learn More
//                         </motion.button>
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Announcement;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   FaXmark, 
//   FaChurch, 
//   FaBell, 
//   FaCalendar,
//   FaClock, 
//   FaCross,
//   FaChevronLeft,
//   FaChevronRight
// } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

// const Announcement = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [currentService, setCurrentService] = useState(null);
//   const [deathAnnouncements, setDeathAnnouncements] = useState([]);
//   const [currentDeathIndex, setCurrentDeathIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     setLoading(true);
//     await Promise.all([loadServices(), loadDeathAnnouncements()]);
//     setLoading(false);
//   };

//   const loadServices = async () => {
//     try {
//       const snap = await getDocs(collection(db, "services"));
//       const data = snap.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       console.log("✅ Loaded services:", data);
//       setServices(data);
      
//       const nextService = getNextService(data);
//       console.log("🎯 Next upcoming service:", nextService);
//       setCurrentService(nextService);
//     } catch (error) {
//       console.error("Error loading services:", error);
//     }
//   };

//   const loadDeathAnnouncements = async () => {
//     try {
//       const snap = await getDocs(collection(db, "announcements"));
//       const data = snap.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
      
//       const todayDate = new Date().toISOString().split('T')[0];
//       const todayDeaths = data.filter(item => item.date === todayDate);
//       const sortedDeaths = [...todayDeaths].sort((a, b) => 
//         new Date(b.date) - new Date(a.date)
//       );
//       setDeathAnnouncements(sortedDeaths);
//       setCurrentDeathIndex(0);
      
//     } catch (error) {
//       console.error("Error loading death announcements:", error);
//     }
//   };

//   // FIXED: Get the next upcoming service
//   const getNextService = (servicesList) => {
//     if (!servicesList || servicesList.length === 0) return null;
    
//     const now = new Date();
//     const currentHour = now.getHours();
//     const currentMinute = now.getMinutes();
//     const currentTimeInMinutes = currentHour * 60 + currentMinute;
    
//     // Get current day name
//     const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//     const currentDayIndex = now.getDay();
//     const currentDayName = days[currentDayIndex];
    
//     console.log("Current day:", currentDayName);
//     console.log("Current time:", `${currentHour}:${currentMinute}`);
    
//     // Parse time string to minutes (e.g., "10:00 AM" -> 600, "7:00 PM" -> 1140)
//     const parseTimeToMinutes = (timeStr) => {
//       if (!timeStr) return null;
      
//       // Handle format like "10:00 AM - 12:00 PM" - take the start time
//       let startTime = timeStr;
//       if (timeStr.includes(" - ")) {
//         startTime = timeStr.split(" - ")[0];
//       }
      
//       const match = startTime.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
//       if (!match) return null;
      
//       let hour = parseInt(match[1]);
//       const minute = parseInt(match[2]);
//       const period = match[3].toUpperCase();
      
//       if (period === "PM" && hour !== 12) hour += 12;
//       if (period === "AM" && hour === 12) hour = 0;
      
//       return hour * 60 + minute;
//     };
    
//     // Get day name from service day field
//     const getServiceDayName = (service) => {
//       if (service.day) return service.day.toLowerCase();
//       return null;
//     };
    
//     // Find all future services (today's not passed yet + future days)
//     const futureServices = [];
    
//     for (const service of servicesList) {
//       const serviceDay = getServiceDayName(service);
//       if (!serviceDay) continue;
      
//       const serviceTimeMinutes = parseTimeToMinutes(service.time);
//       if (!serviceTimeMinutes) continue;
      
//       const serviceDayIndex = days.indexOf(serviceDay);
//       if (serviceDayIndex === -1) continue;
      
//       // Calculate days until this service
//       let daysUntil = serviceDayIndex - currentDayIndex;
//       if (daysUntil < 0) daysUntil += 7;
      
//       // If it's today, check if time is in the future
//       if (daysUntil === 0 && serviceTimeMinutes <= currentTimeInMinutes) {
//         continue; // Skip today's service that already passed
//       }
      
//       futureServices.push({
//         ...service,
//         daysUntil,
//         timeMinutes: serviceTimeMinutes,
//         sortScore: daysUntil * 1440 + serviceTimeMinutes // 1440 minutes in a day
//       });
//     }
    
//     // Sort by sortScore
//     futureServices.sort((a, b) => a.sortScore - b.sortScore);
    
//     console.log("Future services:", futureServices.map(s => ({ name: s.name, daysUntil: s.daysUntil, time: s.time })));
    
//     return futureServices.length > 0 ? futureServices[0] : servicesList[0];
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return "Date TBA";
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   const getServiceDate = () => {
//     if (currentService && currentService.daysUntil !== undefined) {
//       const today = new Date();
//       const futureDate = new Date(today);
//       futureDate.setDate(today.getDate() + currentService.daysUntil);
//       return futureDate.toISOString().split('T')[0];
//     }
//     return new Date().toISOString().split('T')[0];
//   };

//   useEffect(() => {
//     if (deathAnnouncements.length <= 1) return;
    
//     const interval = setInterval(() => {
//       setCurrentDeathIndex((prevIndex) => 
//         prevIndex === deathAnnouncements.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [deathAnnouncements.length]);

//   const nextDeath = () => {
//     if (deathAnnouncements.length === 0) return;
//     setCurrentDeathIndex((prevIndex) => 
//       prevIndex === deathAnnouncements.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevDeath = () => {
//     if (deathAnnouncements.length === 0) return;
//     setCurrentDeathIndex((prevIndex) => 
//       prevIndex === 0 ? deathAnnouncements.length - 1 : prevIndex - 1
//     );
//   };

//   const currentDeath = deathAnnouncements[currentDeathIndex];

//   if (loading) {
//     return null;
//   }

//   if (!currentService && deathAnnouncements.length === 0) {
//     return null;
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: 100, scale: 0.8 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 100, scale: 0.8 }}
//           transition={{
//             duration: 0.6,
//             ease: [0.16, 1, 0.3, 1],
//             scale: { duration: 0.4 },
//           }}
//           className="fixed z-50 bottom-6 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md lg:max-w-lg xl:max-w-xl"
//         >
//           <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200/70">
//             <div className="absolute -top-3 -left-3 w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center">
//               <FaChurch className="text-amber-600 text-lg" />
//             </div>

//             <div className="flex flex-col md:flex-row">
//               <div className="hidden md:block w-28 lg:w-48 flex-shrink-0">
//                 <div className="relative h-full min-h-[220px]">
//                   <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent z-10"></div>
//                   <img
//                     src="https://plus.unsplash.com/premium_photo-1732030992711-27e178f00ec7?w=600&auto=format&fit=crop&q=60"
//                     alt="Church Announcement"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>

//               <div className="p-4 md:p-5 flex-1">
//                 {currentService && (
//                   <div className="mb-3">
//                     <div className="flex items-start justify-between">
//                       <div className="flex items-center">
//                         <div className="p-1.5 rounded-lg bg-amber-500/10 mr-2">
//                           <FaBell className="text-amber-600 text-sm" />
//                         </div>
//                         <h3 className="text-base font-bold text-gray-800 font-serif">
//                           Upcoming Service
//                         </h3>
//                       </div>
//                       <button
//                         onClick={() => setIsOpen(false)}
//                         className="ml-3 p-1 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200"
//                       >
//                         <FaXmark size={14} />
//                       </button>
//                     </div>

//                     <h4 className="text-sm font-semibold text-gray-800 mt-1">
//                       {currentService.name}
//                     </h4>
                    
//                     <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500">
//                       <div className="flex items-center gap-1">
//                         <FaCalendar className="text-amber-600 text-xs" />
//                         <span>{formatDate(getServiceDate())}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <FaClock className="text-amber-600 text-xs" />
//                         <span>{currentService.time}</span>
//                       </div>
//                     </div>

//                     <div className="flex mt-2">
//                       <Link 
//                         to="/announcement-details" 
//                         state={{ 
//                           announcement: { 
//                             type: "service",
//                             name: currentService.name,
//                             title: currentService.name,
//                             date: getServiceDate(),
//                             time: currentService.time,
//                             location: currentService.location,
//                             description: currentService.description,
//                             speaker: currentService.speaker || currentService.fatherName
//                           } 
//                         }}
//                       >
//                         <motion.button
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="px-2.5 py-1 bg-[#fe0000] text-white rounded-lg text-xs cursor-pointer font-medium"
//                         >
//                           Learn More
//                         </motion.button>
//                       </Link>
//                     </div>
//                   </div>
//                 )}

//                 {currentService && deathAnnouncements.length > 0 && (
//                   <div className="border-t border-gray-200 my-2"></div>
//                 )}

//                 {deathAnnouncements.length > 0 && currentDeath && (
//                   <div className="relative">
//                     <div className="flex items-center mb-1.5">
//                       <div className="p-1.5 rounded-lg bg-gray-100 mr-2">
//                         <FaCross className="text-gray-600 text-xs" />
//                       </div>
//                       <h4 className="text-xs font-semibold text-gray-700">
//                         In Loving Memory
//                       </h4>
//                     </div>

//                     <div className="relative">
//                       {deathAnnouncements.length === 1 ? (
//                         <div>
//                           <p className="text-gray-700 text-xs leading-relaxed">
//                             <span className="font-semibold">{currentDeath.name}</span>
//                             {currentDeath.age && `, Age ${currentDeath.age}`}
//                             {currentDeath.place && `, ${currentDeath.place}`}
//                           </p>
//                           <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
//                             <span>🕊️</span> May their soul rest in peace
//                           </p>
//                         </div>
//                       ) : (
//                         <>
//                           <AnimatePresence mode="wait">
//                             <motion.div
//                               key={currentDeathIndex}
//                               initial={{ opacity: 0, x: 20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               exit={{ opacity: 0, x: -20 }}
//                               transition={{ duration: 0.3 }}
//                             >
//                               <p className="text-gray-700 text-xs leading-relaxed">
//                                 <span className="font-semibold">{currentDeath.name}</span>
//                                 {currentDeath.age && `, Age ${currentDeath.age}`}
//                                 {currentDeath.place && `, ${currentDeath.place}`}
//                               </p>
//                               <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
//                                 <span>🕊️</span> May their soul rest in peace
//                               </p>
//                             </motion.div>
//                           </AnimatePresence>

//                           <button
//                             onClick={prevDeath}
//                             className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 p-1 bg-white rounded-full shadow-md border border-gray-200"
//                           >
//                             <FaChevronLeft size={10} className="text-gray-600" />
//                           </button>
//                           <button
//                             onClick={nextDeath}
//                             className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 p-1 bg-white rounded-full shadow-md border border-gray-200"
//                           >
//                             <FaChevronRight size={10} className="text-gray-600" />
//                           </button>

//                           <div className="flex justify-center gap-1.5 mt-2">
//                             {deathAnnouncements.map((_, idx) => (
//                               <button
//                                 key={idx}
//                                 onClick={() => setCurrentDeathIndex(idx)}
//                                 className={`transition-all duration-200 rounded-full ${
//                                   idx === currentDeathIndex
//                                     ? "w-1.5 h-1.5 bg-gray-600"
//                                     : "w-1.5 h-1.5 bg-gray-300"
//                                 }`}
//                               />
//                             ))}
//                           </div>
//                         </>
//                       )}
//                     </div>

//                     <div className="flex mt-2">
//                       <Link 
//                         to="/announcement-details" 
//                         state={{ 
//                           announcement: { type: "death", ...currentDeath },
//                           allDeathAnnouncements: deathAnnouncements
//                         }}
//                       >
//                         <motion.button
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="px-2.5 py-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-medium"
//                         >
//                           Learn More
//                         </motion.button>
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Announcement;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   FaXmark, 
//   FaChurch, 
//   FaBell, 
//   FaCalendar,
//   FaClock, 
//   FaCross,
//   FaChevronLeft,
//   FaChevronRight,
//   FaHeart,
//   FaHandsPraying
// } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

// const Announcement = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [currentService, setCurrentService] = useState(null);
//   const [deathAnnouncements, setDeathAnnouncements] = useState([]);
//   const [currentDeathIndex, setCurrentDeathIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     setLoading(true);
//     await Promise.all([loadServices(), loadDeathAnnouncements()]);
//     setLoading(false);
//   };

//   const loadServices = async () => {
//     try {
//       const snap = await getDocs(collection(db, "services"));
//       const data = snap.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       console.log("✅ Loaded services:", data);
//       setServices(data);
      
//       const nextService = getNextService(data);
//       console.log("🎯 Next upcoming service:", nextService);
//       setCurrentService(nextService);
//     } catch (error) {
//       console.error("Error loading services:", error);
//     }
//   };

//   const loadDeathAnnouncements = async () => {
//     try {
//       const snap = await getDocs(collection(db, "announcements"));
//       const data = snap.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
      
//       const todayDate = new Date().toISOString().split('T')[0];
//       const todayDeaths = data.filter(item => item.date === todayDate);
//       const sortedDeaths = [...todayDeaths].sort((a, b) => 
//         new Date(b.date) - new Date(a.date)
//       );
//       setDeathAnnouncements(sortedDeaths);
//       setCurrentDeathIndex(0);
      
//     } catch (error) {
//       console.error("Error loading death announcements:", error);
//       setDeathAnnouncements([]);
//     }
//   };

//   // Get the next upcoming service
//   const getNextService = (servicesList) => {
//     if (!servicesList || servicesList.length === 0) return null;
    
//     const now = new Date();
//     const currentHour = now.getHours();
//     const currentMinute = now.getMinutes();
//     const currentTimeInMinutes = currentHour * 60 + currentMinute;
    
//     const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//     const currentDayIndex = now.getDay();
//     const currentDayName = days[currentDayIndex];
    
//     const parseTimeToMinutes = (timeStr) => {
//       if (!timeStr) return null;
      
//       let startTime = timeStr;
//       if (timeStr.includes(" - ")) {
//         startTime = timeStr.split(" - ")[0];
//       }
      
//       const match = startTime.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
//       if (!match) return null;
      
//       let hour = parseInt(match[1]);
//       const minute = parseInt(match[2]);
//       const period = match[3].toUpperCase();
      
//       if (period === "PM" && hour !== 12) hour += 12;
//       if (period === "AM" && hour === 12) hour = 0;
      
//       return hour * 60 + minute;
//     };
    
//     const getServiceDayName = (service) => {
//       if (service.day) return service.day.toLowerCase();
//       return null;
//     };
    
//     const futureServices = [];
    
//     for (const service of servicesList) {
//       const serviceDay = getServiceDayName(service);
//       if (!serviceDay) continue;
      
//       const serviceTimeMinutes = parseTimeToMinutes(service.time);
//       if (!serviceTimeMinutes) continue;
      
//       const serviceDayIndex = days.indexOf(serviceDay);
//       if (serviceDayIndex === -1) continue;
      
//       let daysUntil = serviceDayIndex - currentDayIndex;
//       if (daysUntil < 0) daysUntil += 7;
      
//       if (daysUntil === 0 && serviceTimeMinutes <= currentTimeInMinutes) {
//         continue;
//       }
      
//       futureServices.push({
//         ...service,
//         daysUntil,
//         timeMinutes: serviceTimeMinutes,
//         sortScore: daysUntil * 1440 + serviceTimeMinutes
//       });
//     }
    
//     futureServices.sort((a, b) => a.sortScore - b.sortScore);
    
//     return futureServices.length > 0 ? futureServices[0] : servicesList[0];
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return "Date TBA";
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   const getServiceDate = () => {
//     if (currentService && currentService.daysUntil !== undefined) {
//       const today = new Date();
//       const futureDate = new Date(today);
//       futureDate.setDate(today.getDate() + currentService.daysUntil);
//       return futureDate.toISOString().split('T')[0];
//     }
//     return new Date().toISOString().split('T')[0];
//   };

//   useEffect(() => {
//     if (deathAnnouncements.length <= 1) return;
    
//     const interval = setInterval(() => {
//       setCurrentDeathIndex((prevIndex) => 
//         prevIndex === deathAnnouncements.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [deathAnnouncements.length]);

//   const nextDeath = () => {
//     if (deathAnnouncements.length === 0) return;
//     setCurrentDeathIndex((prevIndex) => 
//       prevIndex === deathAnnouncements.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevDeath = () => {
//     if (deathAnnouncements.length === 0) return;
//     setCurrentDeathIndex((prevIndex) => 
//       prevIndex === 0 ? deathAnnouncements.length - 1 : prevIndex - 1
//     );
//   };

//   const currentDeath = deathAnnouncements[currentDeathIndex];

//   if (loading) {
//     return null;
//   }

//   // If no service and no death announcements, don't show anything
//   if (!currentService && deathAnnouncements.length === 0) {
//     return null;
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: 100, scale: 0.8 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 100, scale: 0.8 }}
//           transition={{
//             duration: 0.6,
//             ease: [0.16, 1, 0.3, 1],
//             scale: { duration: 0.4 },
//           }}
//           className="fixed z-50 bottom-6 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md lg:max-w-lg xl:max-w-xl"
//         >
//           <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200/70">
//             <div className="absolute -top-3 -left-3 w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center">
//               <FaChurch className="text-amber-600 text-lg" />
//             </div>

//             <div className="flex flex-col md:flex-row">
//               <div className="hidden md:block w-28 lg:w-48 flex-shrink-0">
//                 <div className="relative h-full min-h-[220px]">
//                   <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent z-10"></div>
//                   <img
//                     src="https://plus.unsplash.com/premium_photo-1732030992711-27e178f00ec7?w=600&auto=format&fit=crop&q=60"
//                     alt="Church Announcement"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>

//               <div className="p-4 md:p-5 flex-1">
//                 {/* UPCOMING SERVICE SECTION */}
//                 {currentService && (
//                   <div className="mb-3">
//                     <div className="flex items-start justify-between">
//                       <div className="flex items-center">
//                         <div className="p-1.5 rounded-lg bg-amber-500/10 mr-2">
//                           <FaBell className="text-amber-600 text-sm" />
//                         </div>
//                         <h3 className="text-base font-bold text-gray-800 font-serif">
//                           Upcoming Service
//                         </h3>
//                       </div>
//                       <button
//                         onClick={() => setIsOpen(false)}
//                         className="ml-3 p-1 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200"
//                       >
//                         <FaXmark size={14} />
//                       </button>
//                     </div>

//                     <h4 className="text-sm font-semibold text-gray-800 mt-1">
//                       {currentService.name}
//                     </h4>
                    
//                     <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500">
//                       <div className="flex items-center gap-1">
//                         <FaCalendar className="text-amber-600 text-xs" />
//                         <span>{formatDate(getServiceDate())}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <FaClock className="text-amber-600 text-xs" />
//                         <span>{currentService.time}</span>
//                       </div>
//                     </div>

//                     <div className="flex mt-2">
//                       <Link 
//                         to="/announcement-details" 
//                         state={{ 
//                           announcement: { 
//                             type: "service",
//                             name: currentService.name,
//                             title: currentService.name,
//                             date: getServiceDate(),
//                             time: currentService.time,
//                             location: currentService.location,
//                             description: currentService.description,
//                             speaker: currentService.speaker || currentService.fatherName
//                           } 
//                         }}
//                       >
//                         <motion.button
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="px-2.5 py-1 bg-[#fe0000] text-white rounded-lg text-xs cursor-pointer font-medium"
//                         >
//                           Learn More
//                         </motion.button>
//                       </Link>
//                     </div>
//                   </div>
//                 )}

//                 {/* DIVIDER - Only if both sections exist */}
//                 {currentService && deathAnnouncements.length > 0 && (
//                   <div className="border-t border-gray-200 my-2"></div>
//                 )}

//                 {/* DEATH ANNOUNCEMENTS SECTION */}
//                 {deathAnnouncements.length > 0 && currentDeath ? (
//                   <div className="relative">
//                     <div className="flex items-center mb-1.5">
//                       <div className="p-1.5 rounded-lg bg-gray-100 mr-2">
//                         <FaCross className="text-gray-600 text-xs" />
//                       </div>
//                       <h4 className="text-xs font-semibold text-gray-700">
//                         In Loving Memory
//                       </h4>
//                     </div>

//                     <div className="relative">
//                       {deathAnnouncements.length === 1 ? (
//                         <div>
//                           <p className="text-gray-700 text-xs leading-relaxed">
//                             <span className="font-semibold">{currentDeath.name}</span>
//                             {currentDeath.age && `, Age ${currentDeath.age}`}
//                             {currentDeath.place && `, ${currentDeath.place}`}
//                           </p>
//                           <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
//                             <span>🕊️</span> May their soul rest in peace
//                           </p>
//                         </div>
//                       ) : (
//                         <>
//                           <AnimatePresence mode="wait">
//                             <motion.div
//                               key={currentDeathIndex}
//                               initial={{ opacity: 0, x: 20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               exit={{ opacity: 0, x: -20 }}
//                               transition={{ duration: 0.3 }}
//                             >
//                               <p className="text-gray-700 text-xs leading-relaxed">
//                                 <span className="font-semibold">{currentDeath.name}</span>
//                                 {currentDeath.age && `, Age ${currentDeath.age}`}
//                                 {currentDeath.place && `, ${currentDeath.place}`}
//                               </p>
//                               <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
//                                 <span>🕊️</span> May their soul rest in peace
//                               </p>
//                             </motion.div>
//                           </AnimatePresence>

//                           <button
//                             onClick={prevDeath}
//                             className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 p-1 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-50"
//                           >
//                             <FaChevronLeft size={10} className="text-gray-600" />
//                           </button>
//                           <button
//                             onClick={nextDeath}
//                             className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 p-1 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-50"
//                           >
//                             <FaChevronRight size={10} className="text-gray-600" />
//                           </button>

//                           <div className="flex justify-center gap-1.5 mt-2">
//                             {deathAnnouncements.map((_, idx) => (
//                               <button
//                                 key={idx}
//                                 onClick={() => setCurrentDeathIndex(idx)}
//                                 className={`transition-all duration-200 rounded-full ${
//                                   idx === currentDeathIndex
//                                     ? "w-1.5 h-1.5 bg-gray-600"
//                                     : "w-1.5 h-1.5 bg-gray-300"
//                                 }`}
//                               />
//                             ))}
//                           </div>
//                         </>
//                       )}
//                     </div>

//                     <div className="flex mt-2">
//                       <Link 
//                         to="/announcement-details" 
//                         state={{ 
//                           announcement: { type: "death", ...currentDeath },
//                           allDeathAnnouncements: deathAnnouncements
//                         }}
//                       >
//                         <motion.button
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="px-2.5 py-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-medium"
//                         >
//                           Learn More
//                         </motion.button>
//                       </Link>
//                     </div>
//                   </div>
//                 ) : (
//                   // NO DEATH ANNOUNCEMENTS - Show peaceful message
//                   currentService && (
//                     <div className="py-2">
//                       <div className="flex items-center gap-2 mb-1.5">
//                         <div className="p-1.5 rounded-lg bg-amber-50">
//                           <FaHandsPraying className="text-amber-500 text-sm" />
//                         </div>
//                         <h4 className="text-xs font-semibold text-amber-700">
//                           Today's Blessing
//                         </h4>
//                       </div>
//                       <div className="text-center py-2">
//                         <FaHeart className="text-amber-400 text-lg mx-auto mb-1 animate-pulse" />
//                         <p className="text-gray-600 text-xs leading-relaxed">
//                           No death announcements for today.
//                         </p>
//                         <p className="text-gray-400 text-[10px] mt-1">
//                           May God's peace be with you and your family.
//                         </p>
//                       </div>
//                     </div>
//                   )
//                 )}

//                 {/* If only death announcements exist (no service) */}
//                 {!currentService && deathAnnouncements.length > 0 && (
//                   <div className="flex items-start justify-between mb-2">
//                     <div className="flex items-center">
//                       <div className="p-1.5 rounded-lg bg-gray-100 mr-2">
//                         <FaCross className="text-gray-600 text-sm" />
//                       </div>
//                       <h3 className="text-base font-bold text-gray-800 font-serif">
//                         In Loving Memory
//                       </h3>
//                     </div>
//                     <button
//                       onClick={() => setIsOpen(false)}
//                       className="ml-3 p-1 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200"
//                     >
//                       <FaXmark size={14} />
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Announcement;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaXmark, 
  FaChurch, 
  FaBell, 
  FaCalendar,
  FaClock, 
  FaCross,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Announcement = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentService, setCurrentService] = useState(null);
  const [deathAnnouncements, setDeathAnnouncements] = useState([]);
  const [currentDeathIndex, setCurrentDeathIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    await Promise.all([loadServices(), loadDeathAnnouncements()]);
    setLoading(false);
  };

  const loadServices = async () => {
    try {
      const snap = await getDocs(collection(db, "services"));
      const data = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("✅ Loaded services:", data);
      setServices(data);
      
      const nextService = getNextService(data);
      console.log("🎯 Next upcoming service:", nextService);
      setCurrentService(nextService);
    } catch (error) {
      console.error("Error loading services:", error);
    }
  };

  const loadDeathAnnouncements = async () => {
    try {
      const snap = await getDocs(collection(db, "announcements"));
      const data = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      const todayDate = new Date().toISOString().split('T')[0];
      const todayDeaths = data.filter(item => item.date === todayDate);
      const sortedDeaths = [...todayDeaths].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
      );
      setDeathAnnouncements(sortedDeaths);
      setCurrentDeathIndex(0);
      
    } catch (error) {
      console.error("Error loading death announcements:", error);
      setDeathAnnouncements([]);
    }
  };

  const getNextService = (servicesList) => {
    if (!servicesList || servicesList.length === 0) return null;
    
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;
    
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const currentDayIndex = now.getDay();
    
    const parseTimeToMinutes = (timeStr) => {
      if (!timeStr) return null;
      
      let startTime = timeStr;
      if (timeStr.includes(" - ")) {
        startTime = timeStr.split(" - ")[0];
      }
      
      const match = startTime.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
      if (!match) return null;
      
      let hour = parseInt(match[1]);
      const minute = parseInt(match[2]);
      const period = match[3].toUpperCase();
      
      if (period === "PM" && hour !== 12) hour += 12;
      if (period === "AM" && hour === 12) hour = 0;
      
      return hour * 60 + minute;
    };
    
    const getServiceDayName = (service) => {
      if (service.day) return service.day.toLowerCase();
      return null;
    };
    
    const futureServices = [];
    
    for (const service of servicesList) {
      const serviceDay = getServiceDayName(service);
      if (!serviceDay) continue;
      
      const serviceTimeMinutes = parseTimeToMinutes(service.time);
      if (!serviceTimeMinutes) continue;
      
      const serviceDayIndex = days.indexOf(serviceDay);
      if (serviceDayIndex === -1) continue;
      
      let daysUntil = serviceDayIndex - currentDayIndex;
      if (daysUntil < 0) daysUntil += 7;
      
      if (daysUntil === 0 && serviceTimeMinutes <= currentTimeInMinutes) {
        continue;
      }
      
      futureServices.push({
        ...service,
        daysUntil,
        timeMinutes: serviceTimeMinutes,
        sortScore: daysUntil * 1440 + serviceTimeMinutes
      });
    }
    
    futureServices.sort((a, b) => a.sortScore - b.sortScore);
    
    return futureServices.length > 0 ? futureServices[0] : servicesList[0];
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Date TBA";
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getServiceDate = () => {
    if (currentService && currentService.daysUntil !== undefined) {
      const today = new Date();
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + currentService.daysUntil);
      return futureDate.toISOString().split('T')[0];
    }
    return new Date().toISOString().split('T')[0];
  };

  useEffect(() => {
    if (deathAnnouncements.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentDeathIndex((prevIndex) => 
        prevIndex === deathAnnouncements.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [deathAnnouncements.length]);

  const nextDeath = () => {
    if (deathAnnouncements.length === 0) return;
    setCurrentDeathIndex((prevIndex) => 
      prevIndex === deathAnnouncements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevDeath = () => {
    if (deathAnnouncements.length === 0) return;
    setCurrentDeathIndex((prevIndex) => 
      prevIndex === 0 ? deathAnnouncements.length - 1 : prevIndex - 1
    );
  };

  const currentDeath = deathAnnouncements[currentDeathIndex];

  if (loading) {
    return null;
  }

  if (!currentService && deathAnnouncements.length === 0) {
    return null;
  }

  const hasDeathAnnouncements = deathAnnouncements.length > 0;

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
          className={`fixed z-50 bottom-6 left-4 right-4 md:left-auto md:right-6 md:bottom-6 ${
            hasDeathAnnouncements 
              ? "md:max-w-md lg:max-w-lg xl:max-w-xl" 
              : "md:max-w-sm lg:max-w-md"
          }`}
        >
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200/70">
            <div className="absolute -top-3 -left-3 w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center">
              <FaChurch className="text-amber-600 text-lg" />
            </div>

            <div className="flex flex-row">
              {/* Image sidebar - shows always, but with different sizes */}
              <div className={`flex-shrink-0 ${hasDeathAnnouncements ? "w-28 lg:w-48" : "w-20 lg:w-28"}`}>
                <div className="relative h-full min-h-[155px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent z-10"></div>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1732030992711-27e178f00ec7?w=600&auto=format&fit=crop&q=60"
                    alt="Church Announcement"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className={`p-4 md:p-5 flex-1 ${!hasDeathAnnouncements ? "md:p-3" : ""}`}>
                {/* UPCOMING SERVICE SECTION */}
                {currentService && (
                  <div className={!hasDeathAnnouncements ? "mb-0" : "mb-3"}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="p-1.5 rounded-lg bg-amber-500/10 mr-2">
                          <FaBell className="text-amber-600 text-sm" />
                        </div>
                        <h3 className={`font-bold text-gray-800 font-serif ${hasDeathAnnouncements ? "text-base" : "text-sm"}`}>
                          Upcoming Service
                        </h3>
                      </div>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="ml-3 p-1 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        <FaXmark size={14} />
                      </button>
                    </div>

                    <h4 className={`font-semibold text-gray-800 mt-1 ${hasDeathAnnouncements ? "text-sm" : "text-xs"}`}>
                      {currentService.name}
                    </h4>
                    
                    <div className={`flex items-center gap-3 mt-1.5 text-gray-500 ${hasDeathAnnouncements ? "text-xs" : "text-[11px]"}`}>
                      <div className="flex items-center gap-1">
                        <FaCalendar className="text-amber-600 text-xs" />
                        <span>{formatDate(getServiceDate())}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock className="text-amber-600 text-xs" />
                        <span>{currentService.time}</span>
                      </div>
                    </div>

                    <div className="flex mt-2">
                      <Link 
                        to="/announcement-details" 
                        state={{ 
                          announcement: { 
                            type: "service",
                            name: currentService.name,
                            title: currentService.name,
                            date: getServiceDate(),
                            time: currentService.time,
                            location: currentService.location,
                            description: currentService.description,
                            speaker: currentService.speaker || currentService.fatherName
                          } 
                        }}
                      >
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          className={`${hasDeathAnnouncements ? "px-2.5 py-1 text-xs" : "px-2 py-0.5 text-[11px]"} bg-[#fe0000] text-white rounded-lg cursor-pointer font-medium`}
                        >
                          Learn More
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                )}

                {/* DIVIDER - Only if both sections exist */}
                {currentService && hasDeathAnnouncements && (
                  <div className="border-t border-gray-200 my-2"></div>
                )}

                {/* DEATH ANNOUNCEMENTS SECTION - Only show if there are death announcements */}
                {hasDeathAnnouncements && currentDeath && (
                  <div className="relative">
                    <div className="flex items-center mb-1.5">
                      <div className="p-1.5 rounded-lg bg-gray-100 mr-2">
                        <FaCross className="text-gray-600 text-xs" />
                      </div>
                      <h4 className="text-xs font-semibold text-gray-700">
                        In Loving Memory
                      </h4>
                    </div>

                    <div className="relative">
                      {deathAnnouncements.length === 1 ? (
                        <div>
                          <p className="text-gray-700 text-xs leading-relaxed">
                            <span className="font-semibold">{currentDeath.name}</span>
                            {currentDeath.age && `, Age ${currentDeath.age}`}
                            {currentDeath.place && `, ${currentDeath.place}`}
                          </p>
                          <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                            <span>🕊️</span> May their soul rest in peace
                          </p>
                        </div>
                      ) : (
                        <>
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentDeathIndex}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="text-gray-700 text-xs leading-relaxed">
                                <span className="font-semibold">{currentDeath.name}</span>
                                {currentDeath.age && `, Age ${currentDeath.age}`}
                                {currentDeath.place && `, ${currentDeath.place}`}
                              </p>
                              <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                                <span>🕊️</span> May their soul rest in peace
                              </p>
                            </motion.div>
                          </AnimatePresence>

                          <button
                            onClick={prevDeath}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 p-1 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-50"
                          >
                            <FaChevronLeft size={10} className="text-gray-600" />
                          </button>
                          <button
                            onClick={nextDeath}
                            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 p-1 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-50"
                          >
                            <FaChevronRight size={10} className="text-gray-600" />
                          </button>

                          <div className="flex justify-center gap-1.5 mt-2">
                            {deathAnnouncements.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentDeathIndex(idx)}
                                className={`transition-all duration-200 rounded-full ${
                                  idx === currentDeathIndex
                                    ? "w-1.5 h-1.5 bg-gray-600"
                                    : "w-1.5 h-1.5 bg-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex mt-2">
                      <Link 
                        to="/announcement-details" 
                        state={{ 
                          announcement: { type: "death", ...currentDeath },
                          allDeathAnnouncements: deathAnnouncements
                        }}
                      >
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-2.5 py-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-medium"
                        >
                          Learn More
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                )}

                {/* If only death announcements exist (no service) */}
                {!currentService && hasDeathAnnouncements && (
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                      <div className="p-1.5 rounded-lg bg-gray-100 mr-2">
                        <FaCross className="text-gray-600 text-sm" />
                      </div>
                      <h3 className="text-base font-bold text-gray-800 font-serif">
                        In Loving Memory
                      </h3>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="ml-3 p-1 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200"
                    >
                      <FaXmark size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Announcement;