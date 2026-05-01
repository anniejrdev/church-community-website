// // AnnouncementDetails.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const AnnouncementDetails = () => {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <div className="relative h-screen">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage:
//               "url(https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cmNofGVufDB8fDB8fHww)",
//           }}
//         />
//         {/* Black Overlay */}
//         <div className="absolute inset-0 bg-black/60"></div>

//         {/* Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//           <motion.h1
//             initial={{ y: -30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 drop-shadow-lg"
//           >
//             Church Announcements
//           </motion.h1>

//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="text-lg md:text-xl lg:text-xl text-gray-200 mt-4 max-w-3xl leading-relaxed"
//           >
//             Stay updated with the latest announcements, events, and important
//             news from our church community.
//           </motion.p>
//         </div>
//       </div>

//       {/* Announcements Section */}
//       <div className="relative z-10 py-16 px-6 md:px-12 lg:px-20 bg-black">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.7 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-8 text-center">
//             Latest Announcements
//           </h2>

//           <div className="space-y-8">
//             {/* Single Announcement */}
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="bg-white/5 p-6 rounded-2xl border border-yellow-400/30 shadow-lg"
//             >
//               <h3 className="text-2xl font-semibold text-yellow-400">
//                 Sunday Worship Gathering
//               </h3>
//               <p className="text-gray-300 mt-2">
//                 Join us this Sunday at 10 AM for a special worship service
//                 followed by fellowship time. All are welcome.
//               </p>
//             </motion.div>

//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="bg-white/5 p-6 rounded-2xl border border-yellow-400/30 shadow-lg"
//             >
//               <h3 className="text-2xl font-semibold text-yellow-400">
//                 Youth Fellowship
//               </h3>
//               <p className="text-gray-300 mt-2">
//                 Our next youth fellowship will be held on Friday at 6 PM. Don’t
//                 miss out on an evening of fun, learning, and worship.
//               </p>
//             </motion.div>

//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="bg-white/5 p-6 rounded-2xl border border-yellow-400/30 shadow-lg"
//             >
//               <h3 className="text-2xl font-semibold text-yellow-400">
//                 Community Outreach
//               </h3>
//               <p className="text-gray-300 mt-2">
//                 Be part of our outreach program this month as we extend our
//                 hands to serve the needy in our local community.
//               </p>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AnnouncementDetails;



// import React from "react";
// import { motion } from "framer-motion";
// import { useLocation, useNavigate } from "react-router-dom";
// import { 
//   FaCalendar, 
//   FaClock, 
//   FaUser, 
//   FaCross, 
//   FaChurch, 
//   FaLocationDot,
//   FaArrowLeft
// } from "react-icons/fa6";

// const AnnouncementDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { announcement } = location.state || {};

//   // If no announcement data, redirect back or show error
//   if (!announcement) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-gray-400 mb-4">No announcement found</p>
//           <button 
//             onClick={() => navigate(-1)}
//             className="px-4 py-2 bg-yellow-500 text-black rounded-lg"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   // Render Service Announcement Details
//   const renderServiceDetails = () => (
//     <>
//       <div className="flex items-center gap-3 mb-4">
//         <div className="p-3 rounded-full bg-yellow-500/10">
//           <FaChurch className="text-yellow-400 text-2xl" />
//         </div>
//         <span className="text-yellow-400 font-semibold">Service Announcement</span>
//       </div>
      
//       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//         {announcement.title}
//       </h1>
      
//       <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
//         <div className="flex items-center gap-2">
//           <FaCalendar className="text-yellow-400" />
//           <span>{formatDate(announcement.date)}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FaClock className="text-yellow-400" />
//           <span>{announcement.time}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FaLocationDot className="text-yellow-400" />
//           <span>{announcement.location}</span>
//         </div>
//         {announcement.speaker && (
//           <div className="flex items-center gap-2">
//             <FaUser className="text-yellow-400" />
//             <span>Speaker: {announcement.speaker}</span>
//           </div>
//         )}
//       </div>
      
//       <div className="mt-6 p-5 bg-white/5 rounded-xl">
//         <p className="text-gray-200 leading-relaxed text-base md:text-lg">
//           {announcement.description}
//         </p>
//       </div>
      
//       <div className="flex gap-4 mt-6">
//         <button className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition">
//           Add to Calendar
//         </button>
//         <button className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition">
//           Share
//         </button>
//       </div>
//     </>
//   );

//   // Render Death Announcement Details
//   const renderDeathDetails = () => (
//     <>
//       <div className="flex items-center gap-3 mb-4">
//         <div className="p-3 rounded-full bg-gray-500/10">
//           <FaCross className="text-gray-400 text-2xl" />
//         </div>
//         <span className="text-gray-400 font-semibold">In Loving Memory</span>
//       </div>
      
//       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//         {announcement.name}
//       </h1>
      
//       <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
//         {announcement.age && <span>Age: {announcement.age} years</span>}
//         {announcement.place && <span>Place: {announcement.place}</span>}
//         {announcement.date && <span>Entered rest: {formatDate(announcement.date)}</span>}
//       </div>
      
//       {announcement.description && (
//         <div className="mt-6 p-5 bg-white/5 rounded-xl">
//           <p className="text-gray-200 leading-relaxed text-base md:text-lg">
//             {announcement.description}
//           </p>
//         </div>
//       )}
      
//       {announcement.family && (
//         <div className="mt-4 p-4 bg-white/5 rounded-lg">
//           <h3 className="text-yellow-400 font-semibold mb-2">Family</h3>
//           <p className="text-gray-300">{announcement.family}</p>
//         </div>
//       )}
      
//       {(announcement.funeralDate || announcement.funeralTime || announcement.location) && (
//         <div className="mt-4 p-4 bg-white/5 rounded-lg">
//           <h3 className="text-yellow-400 font-semibold mb-2">Funeral Service</h3>
//           {announcement.funeralDate && <p className="text-gray-300">Date: {formatDate(announcement.funeralDate)}</p>}
//           {announcement.funeralTime && <p className="text-gray-300">Time: {announcement.funeralTime}</p>}
//           {announcement.location && <p className="text-gray-300">Location: {announcement.location}</p>}
//         </div>
//       )}
      
//       <div className="flex gap-4 mt-6">
//         <button className="px-5 py-2 bg-gray-500/30 hover:bg-gray-500/50 text-white font-semibold rounded-lg transition">
//           Light a Candle 🕯️
//         </button>
//         <button className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition">
//           Share
//         </button>
//       </div>
//     </>
//   );

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <div className="relative min-h-[40vh] md:min-h-[50vh]">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: announcement.image || "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cmNofGVufDB8fDB8fHww",
//           }}
//         />
//         <div className="absolute inset-0 bg-black/70"></div>
        
//         <div className="relative z-10 flex flex-col justify-center h-full min-h-[40vh] md:min-h-[50vh] px-6 md:px-12 lg:px-20">
//           {/* Back Button */}
//           <button
//             onClick={() => navigate(-1)}
//             className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 text-white/80 hover:text-white transition"
//           >
//             <FaArrowLeft />
//             <span>Back</span>
//           </button>
          
//           <div className="max-w-4xl mx-auto w-full mt-16">
//             {announcement.type === "death" ? renderDeathDetails() : renderServiceDetails()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnnouncementDetails;

// import React from "react";
// import { motion } from "framer-motion";
// import { useLocation, useNavigate } from "react-router-dom";
// import { 
//   FaCalendar, 
//   FaClock, 
//   FaUser, 
//   FaCross, 
//   FaChurch, 
//   FaLocationDot,
//   FaArrowLeft
// } from "react-icons/fa6";

// const AnnouncementDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   // Debug: Log the entire location object to see what's being passed
//   console.log("Location state:", location.state);
  
//   const announcement = location.state?.announcement;
  
//   // Debug: Log the announcement data
//   console.log("Announcement data:", announcement);

//   // If no announcement data, show error
//   if (!announcement) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-gray-400 mb-4">No announcement found. Data received: {JSON.stringify(location.state)}</p>
//           <button 
//             onClick={() => navigate(-1)}
//             className="px-4 py-2 bg-yellow-500 text-black rounded-lg cursor-pointer"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const formatDate = (dateString) => {
//     if (!dateString) return "Date not specified";
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   // Render Service Announcement Details
//   const renderServiceDetails = () => (
//     <>
//       <div className="flex items-center gap-3 mb-4">
//         <div className="p-3 rounded-full bg-yellow-500/10">
//           <FaChurch className="text-yellow-400 text-2xl" />
//         </div>
//         <span className="text-yellow-400 font-semibold">Service Announcement</span>
//       </div>
      
//       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//         {announcement.title}
//       </h1>
      
//       <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
//         <div className="flex items-center gap-2">
//           <FaCalendar className="text-yellow-400" />
//           <span>{formatDate(announcement.date)}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FaClock className="text-yellow-400" />
//           <span>{announcement.time}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FaLocationDot className="text-yellow-400" />
//           <span>{announcement.location}</span>
//         </div>
//         {announcement.speaker && (
//           <div className="flex items-center gap-2">
//             <FaUser className="text-yellow-400" />
//             <span>Speaker: {announcement.speaker}</span>
//           </div>
//         )}
//       </div>
      
//       <div className="mt-6 p-5 bg-white/5 rounded-xl">
//         <p className="text-gray-200 leading-relaxed text-base md:text-lg">
//           {announcement.description}
//         </p>
//       </div>
      
//       <div className="flex gap-4 mt-6">
//         <button className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition cursor-pointer">
//           Add to Calendar
//         </button>
//         <button className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer">
//           Share
//         </button>
//       </div>
//     </>
//   );

//   // Render Death Announcement Details
//   const renderDeathDetails = () => (
//     <>
//       <div className="flex items-center gap-3 mb-4">
//         <div className="p-3 rounded-full bg-gray-500/10">
//           <FaCross className="text-gray-400 text-2xl" />
//         </div>
//         <span className="text-gray-400 font-semibold">In Loving Memory</span>
//       </div>
      
//       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//         {announcement.name}
//       </h1>
      
//       <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
//         {announcement.age && <span>Age: {announcement.age} years</span>}
//         {announcement.place && <span>Place: {announcement.place}</span>}
//         {announcement.date && <span>Entered rest: {formatDate(announcement.date)}</span>}
//       </div>
      
//       {announcement.description && (
//         <div className="mt-6 p-5 bg-white/5 rounded-xl">
//           <p className="text-gray-200 leading-relaxed text-base md:text-lg">
//             {announcement.description}
//           </p>
//         </div>
//       )}
      
//       {announcement.family && (
//         <div className="mt-4 p-4 bg-white/5 rounded-lg">
//           <h3 className="text-yellow-400 font-semibold mb-2">Family</h3>
//           <p className="text-gray-300">{announcement.family}</p>
//         </div>
//       )}
      
//       {(announcement.funeralDate || announcement.funeralTime || announcement.location) && (
//         <div className="mt-4 p-4 bg-white/5 rounded-lg">
//           <h3 className="text-yellow-400 font-semibold mb-2">Funeral Service</h3>
//           {announcement.funeralDate && <p className="text-gray-300">Date: {formatDate(announcement.funeralDate)}</p>}
//           {announcement.funeralTime && <p className="text-gray-300">Time: {announcement.funeralTime}</p>}
//           {announcement.location && <p className="text-gray-300">Location: {announcement.location}</p>}
//         </div>
//       )}
      
//       <div className="flex gap-4 mt-6">
//         <button className="px-5 py-2 bg-gray-500/30 hover:bg-gray-500/50 text-white font-semibold rounded-lg transition cursor-pointer">
//           Light a Candle 🕯️
//         </button>
//         <button className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer">
//           Share
//         </button>
//       </div>
//     </>
//   );

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <div className="relative min-h-[40vh] md:min-h-[50vh]">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: announcement.image 
//               ? `url(${announcement.image})` 
//               : "url(https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=600&auto=format)"
//           }}
//         />
//         <div className="absolute inset-0 bg-black/70"></div>
        
//         <div className="relative z-10 flex flex-col justify-center h-full min-h-[40vh] md:min-h-[50vh] px-6 md:px-12 lg:px-20">
//           <button
//             onClick={() => navigate(-1)}
//             className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 text-white/80 hover:text-white transition cursor-pointer"
//           >
//             <FaArrowLeft />
//             <span>Back</span>
//           </button>
          
//           <div className="max-w-4xl mx-auto w-full mt-16">
//             {announcement.type === "death" ? renderDeathDetails() : renderServiceDetails()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnnouncementDetails;


// import React from "react";
// import { motion } from "framer-motion";
// import { useLocation, useNavigate } from "react-router-dom";
// import { 
//   FaCalendar, 
//   FaClock, 
//   FaUser, 
//   FaCross, 
//   FaChurch, 
//   FaLocationDot,
//   FaArrowLeft
// } from "react-icons/fa6";

// const AnnouncementDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   // Get the passed data from location state
//   const { announcement } = location.state || {};

//   // If no announcement data, redirect back or show error
//   if (!announcement) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-gray-400 mb-4">No announcement found</p>
//           <button 
//             onClick={() => navigate(-1)}
//             className="px-4 py-2 bg-yellow-500 text-black rounded-lg cursor-pointer"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   // Render Service Announcement Details (from notification card)
//   const renderServiceDetails = () => (
//     <>
//       <div className="flex items-center gap-3 mb-4">
//         <div className="p-3 rounded-full bg-yellow-500/10">
//           <FaChurch className="text-yellow-400 text-2xl" />
//         </div>
//         <span className="text-yellow-400 font-semibold">Service Announcement</span>
//       </div>
      
//       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//         {announcement.title}
//       </h1>
      
//       <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
//         <div className="flex items-center gap-2">
//           <FaCalendar className="text-yellow-400" />
//           <span>{formatDate(announcement.date)}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FaClock className="text-yellow-400" />
//           <span>{announcement.time}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FaLocationDot className="text-yellow-400" />
//           <span>{announcement.location}</span>
//         </div>
//         {announcement.speaker && (
//           <div className="flex items-center gap-2">
//             <FaUser className="text-yellow-400" />
//             <span>Speaker: {announcement.speaker}</span>
//           </div>
//         )}
//       </div>
      
//       <div className="mt-6 p-5 bg-white/5 rounded-xl">
//         <p className="text-gray-200 leading-relaxed text-base md:text-lg">
//           {announcement.description}
//         </p>
//       </div>
      
//       <div className="flex gap-4 mt-6">
//         <button className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition cursor-pointer">
//           Add to Calendar
//         </button>
//         <button className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer">
//           Share
//         </button>
//       </div>
//     </>
//   );

//   // Render Death Announcement Details (from notification card)
//   const renderDeathDetails = () => (
//     <>
//       <div className="flex items-center gap-3 mb-4">
//         <div className="p-3 rounded-full bg-gray-500/10">
//           <FaCross className="text-gray-400 text-2xl" />
//         </div>
//         <span className="text-gray-400 font-semibold">In Loving Memory</span>
//       </div>
      
//       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//         {announcement.name}
//       </h1>
      
//       <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
//         {announcement.age && <span>Age: {announcement.age} years</span>}
//         {announcement.place && <span>Place: {announcement.place}</span>}
//         {announcement.date && <span>Entered rest: {formatDate(announcement.date)}</span>}
//       </div>
      
//       {announcement.description && (
//         <div className="mt-6 p-5 bg-white/5 rounded-xl">
//           <p className="text-gray-200 leading-relaxed text-base md:text-lg">
//             {announcement.description}
//           </p>
//         </div>
//       )}
      
//       {announcement.family && (
//         <div className="mt-4 p-4 bg-white/5 rounded-lg">
//           <h3 className="text-yellow-400 font-semibold mb-2">Family</h3>
//           <p className="text-gray-300">{announcement.family}</p>
//         </div>
//       )}
      
//       {(announcement.funeralDate || announcement.funeralTime || announcement.location) && (
//         <div className="mt-4 p-4 bg-white/5 rounded-lg">
//           <h3 className="text-yellow-400 font-semibold mb-2">Funeral Service</h3>
//           {announcement.funeralDate && <p className="text-gray-300">Date: {formatDate(announcement.funeralDate)}</p>}
//           {announcement.funeralTime && <p className="text-gray-300">Time: {announcement.funeralTime}</p>}
//           {announcement.location && <p className="text-gray-300">Location: {announcement.location}</p>}
//         </div>
//       )}
      
//       <div className="flex gap-4 mt-6">
//         <button className="px-5 py-2 bg-gray-500/30 hover:bg-gray-500/50 text-white font-semibold rounded-lg transition cursor-pointer">
//           Light a Candle 🕯️
//         </button>
//         <button className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer">
//           Share
//         </button>
//       </div>
//     </>
//   );

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <div className="relative min-h-[40vh] md:min-h-[50vh]">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url(https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cmNofGVufDB8fDB8fHww)",
//           }}
//         />
//         <div className="absolute inset-0 bg-black/70"></div>
        
//         <div className="relative z-10 flex flex-col justify-center h-full min-h-[40vh] md:min-h-[50vh] px-6 md:px-12 lg:px-20">
//           {/* Back Button */}
//           <button
//             onClick={() => navigate(-1)}
//             className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 text-white/80 hover:text-white transition cursor-pointer"
//           >
//             <FaArrowLeft />
//             <span>Back</span>
//           </button>
          
//           <div className="max-w-4xl mx-auto w-full mt-16">
//             {announcement.type === "death" ? renderDeathDetails() : renderServiceDetails()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnnouncementDetails;

// import React from "react";
// import { motion } from "framer-motion";
// import { useLocation, useNavigate } from "react-router-dom";
// import { 
//   FaCalendar, 
//   FaClock, 
//   FaUser, 
//   FaCross, 
//   FaChurch, 
//   FaLocationDot,
//   FaArrowLeft,
//   FaBell,
//   FaHeart
// } from "react-icons/fa6";

// const AnnouncementDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   // Get the passed data from location state
//   const { announcement } = location.state || {};

//   // If no announcement data, redirect back or show error
//   if (!announcement) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-gray-400 mb-4">No announcement found</p>
//           <button 
//             onClick={() => navigate(-1)}
//             className="px-4 py-2 bg-yellow-500 text-black rounded-lg cursor-pointer"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section - UNCHANGED */}
//       <div className="relative h-screen">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url(https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cmNofGVufDB8fDB8fHww)",
//           }}
//         />
//         <div className="absolute inset-0 bg-black/60"></div>

//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//           <motion.h1
//             initial={{ y: -30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 drop-shadow-lg"
//           >
//             Church Announcements
//           </motion.h1>

//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="text-lg md:text-xl text-gray-200 mt-4 max-w-3xl leading-relaxed"
//           >
//             Stay updated with the latest announcements, events, and important
//             news from our church community.
//           </motion.p>
//         </div>
//       </div>

//       {/* Cards Section - Below Hero */}
//       <div className="relative z-10 py-16 px-6 md:px-12 lg:px-20 bg-black">
//         <div className="max-w-4xl mx-auto">
          
//           {/* Service Announcement Card */}
//           {announcement.type === "service" && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="mb-8 bg-white/5 rounded-2xl border border-yellow-400/30 shadow-lg overflow-hidden"
//             >
//               <div className="p-6">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="p-2 rounded-lg bg-yellow-500/10">
//                     <FaChurch className="text-yellow-400 text-xl" />
//                   </div>
//                   <span className="text-yellow-400 font-semibold">Service Announcement</span>
//                 </div>
                
//                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
//                   {announcement.title}
//                 </h2>
                
//                 <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
//                   <div className="flex items-center gap-2">
//                     <FaCalendar className="text-yellow-400" />
//                     <span>{formatDate(announcement.date)}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaClock className="text-yellow-400" />
//                     <span>{announcement.time}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaLocationDot className="text-yellow-400" />
//                     <span>{announcement.location}</span>
//                   </div>
//                   {announcement.speaker && (
//                     <div className="flex items-center gap-2">
//                       <FaUser className="text-yellow-400" />
//                       <span>Speaker: {announcement.speaker}</span>
//                     </div>
//                   )}
//                 </div>
                
//                 <div className="mt-4 p-4 bg-white/5 rounded-xl">
//                   <p className="text-gray-200 leading-relaxed">
//                     {announcement.description}
//                   </p>
//                 </div>
                
//                 {/* <div className="flex gap-4 mt-5">
//                   <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition cursor-pointer text-sm">
//                     Add to Calendar
//                   </button>
//                   <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer text-sm">
//                     Share
//                   </button>
//                 </div> */}
//               </div>
//             </motion.div>
//           )}

//           {/* Death Announcement Card */}
//           {announcement.type === "death" && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white/5 rounded-2xl border border-gray-500/30 shadow-lg overflow-hidden"
//             >
//               <div className="p-6">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="p-2 rounded-lg bg-gray-500/10">
//                     <FaCross className="text-gray-400 text-xl" />
//                   </div>
//                   <span className="text-gray-400 font-semibold">In Loving Memory</span>
//                 </div>
                
//                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
//                   {announcement.name}
//                 </h2>
                
//                 <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
//                   {announcement.age && <span>Age: {announcement.age} years</span>}
//                   {announcement.place && <span>Place: {announcement.place}</span>}
//                   {announcement.date && <span>Entered rest: {formatDate(announcement.date)}</span>}
//                 </div>
                
//                 {announcement.description && (
//                   <div className="mt-4 p-4 bg-white/5 rounded-xl">
//                     <p className="text-gray-200 leading-relaxed">
//                       {announcement.description}
//                     </p>
//                   </div>
//                 )}
                
//                 {announcement.family && (
//                   <div className="mt-4 p-4 bg-white/5 rounded-lg">
//                     <h3 className="text-yellow-400 font-semibold mb-2">Family</h3>
//                     <p className="text-gray-300 text-sm">{announcement.family}</p>
//                   </div>
//                 )}
                
//                 {(announcement.funeralDate || announcement.funeralTime || announcement.location) && (
//                   <div className="mt-4 p-4 bg-white/5 rounded-lg">
//                     <h3 className="text-yellow-400 font-semibold mb-2">Funeral Service</h3>
//                     {announcement.funeralDate && <p className="text-gray-300 text-sm">Date: {formatDate(announcement.funeralDate)}</p>}
//                     {announcement.funeralTime && <p className="text-gray-300 text-sm">Time: {announcement.funeralTime}</p>}
//                     {announcement.location && <p className="text-gray-300 text-sm">Location: {announcement.location}</p>}
//                   </div>
//                 )}
                
//                 {/* <div className="flex gap-4 mt-5">
//                   <button className="px-4 py-2 bg-gray-500/30 hover:bg-gray-500/50 text-white font-semibold rounded-lg transition cursor-pointer text-sm">
//                     Light a Candle 🕯️
//                   </button>
//                   <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer text-sm">
//                     Share
//                   </button>
//                 </div> */}
//               </div>
//             </motion.div>
//           )}

//           {/* Back Button at Bottom */}
//           {/* <div className="flex justify-center mt-8">
//             <button
//               onClick={() => navigate(-1)}
//               className="flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer"
//             >
//               <FaArrowLeft />
//               <span>Back to Home</span>
//             </button>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnnouncementDetails;




// import React from "react";
// import { motion } from "framer-motion";
// import { useLocation, useNavigate } from "react-router-dom";
// import { 
//   FaCalendar, 
//   FaClock, 
//   FaUser, 
//   FaCross, 
//   FaChurch, 
//   FaLocationDot,
//   FaArrowLeft,
//   FaBell,
//   FaHeart,
//   FaRegClock,
//   FaCircleCheck,
//   FaCircleInfo
// } from "react-icons/fa6";
// const AnnouncementDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   const { announcement } = location.state || {};

//   if (!announcement) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-gray-400 mb-4">No announcement found</p>
//           <button 
//             onClick={() => navigate(-1)}
//             className="px-4 py-2 bg-yellow-500 text-black rounded-lg cursor-pointer"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   // More details for Service using map
//   const serviceDetails = [
//     { icon: FaUser, label: "Speaker", value: announcement.speaker || "Pastor John" },
//     { icon: FaRegClock, label: "Duration", value: "2 hours" },
//     { icon: FaCheckCircle, label: "Entry", value: "Free for all" },
//     { icon: FaHeart, label: "Refreshments", value: "Will be served after service" }
//   ];

//   // More details for Death using map
//   const deathDetails = [
//     { icon: FaHeart, label: "Prayer Meeting", value: "At family residence, 7 PM daily" },
//     { icon: FaCheckCircle, label: "Condolence Register", value: "Available at the church" },
//     { icon: FaInfoCircle, label: "Donations", value: "To charity in lieu of flowers" }
//   ];

//   // Schedule timeline using map
//   const serviceSchedule = [
//     { time: "9:30 AM", activity: "Prayer" },
//     { time: "10:00 AM", activity: "Worship" },
//     { time: "11:00 AM", activity: "Message" },
//     { time: "12:00 PM", activity: "Fellowship" }
//   ];

//   // Funeral schedule timeline using map
//   const funeralSchedule = [
//     { time: "9:00 AM", activity: "Viewing" },
//     { time: "10:00 AM", activity: "Funeral Service" },
//     { time: "11:30 AM", activity: "Burial" },
//     { time: "12:30 PM", activity: "Memorial Meal" }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <div className="relative h-screen">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url(https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cmNofGVufDB8fDB8fHww)",
//           }}
//         />
//         <div className="absolute inset-0 bg-black/60"></div>

//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//           <motion.h1
//             initial={{ y: -30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 drop-shadow-lg"
//           >
//             Church Announcements
//           </motion.h1>

//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="text-lg md:text-xl text-gray-200 mt-4 max-w-3xl leading-relaxed"
//           >
//             Stay updated with the latest announcements, events, and important
//             news from our church community.
//           </motion.p>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="relative z-10 py-16 px-6 md:px-12 lg:px-20 bg-black">
//         <div className="max-w-4xl mx-auto">
          
//           {/* Service Announcement Card */}
//           {announcement.type === "service" && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="mb-8 bg-white/5 rounded-2xl border border-yellow-400/30 shadow-lg overflow-hidden"
//             >
//               <div className="p-6">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="p-2 rounded-lg bg-yellow-500/10">
//                     <FaChurch className="text-yellow-400 text-xl" />
//                   </div>
//                   <span className="text-yellow-400 font-semibold">Service Announcement</span>
//                 </div>
                
//                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
//                   {announcement.title}
//                 </h2>
                
//                 <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
//                   <div className="flex items-center gap-2">
//                     <FaCalendar className="text-yellow-400" />
//                     <span>{formatDate(announcement.date)}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaClock className="text-yellow-400" />
//                     <span>{announcement.time}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaLocationDot className="text-yellow-400" />
//                     <span>{announcement.location}</span>
//                   </div>
//                   {announcement.speaker && (
//                     <div className="flex items-center gap-2">
//                       <FaUser className="text-yellow-400" />
//                       <span>Speaker: {announcement.speaker}</span>
//                     </div>
//                   )}
//                 </div>
                
//                 <div className="mt-4 p-4 bg-white/5 rounded-xl">
//                   <p className="text-gray-200 leading-relaxed">
//                     {announcement.description}
//                   </p>
//                 </div>

//                 {/* More Details Section using MAP */}
//                 <div className="mt-4">
//                   <h3 className="text-yellow-400 font-semibold mb-3">Additional Details</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                     {serviceDetails.map((detail, index) => (
//                       <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
//                         <detail.icon className="text-yellow-400 text-sm" />
//                         <div>
//                           <p className="text-gray-400 text-xs">{detail.label}</p>
//                           <p className="text-white text-sm">{detail.value}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Schedule Timeline using MAP */}
//                 <div className="mt-4">
//                   <h3 className="text-yellow-400 font-semibold mb-3">Service Schedule</h3>
//                   <div className="space-y-2">
//                     {serviceSchedule.map((item, index) => (
//                       <div key={index} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
//                         <FaClock className="text-yellow-400 text-xs" />
//                         <span className="text-yellow-400 text-sm font-medium w-20">{item.time}</span>
//                         <span className="text-gray-300 text-sm">{item.activity}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {/* Death Announcement Card */}
//           {announcement.type === "death" && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white/5 rounded-2xl border border-gray-500/30 shadow-lg overflow-hidden"
//             >
//               <div className="p-6">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="p-2 rounded-lg bg-gray-500/10">
//                     <FaCross className="text-gray-400 text-xl" />
//                   </div>
//                   <span className="text-gray-400 font-semibold">In Loving Memory</span>
//                 </div>
                
//                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
//                   {announcement.name}
//                 </h2>
                
//                 <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
//                   {announcement.age && <span>Age: {announcement.age} years</span>}
//                   {announcement.place && <span>Place: {announcement.place}</span>}
//                   {announcement.date && <span>Entered rest: {formatDate(announcement.date)}</span>}
//                 </div>
                
//                 {announcement.description && (
//                   <div className="mt-4 p-4 bg-white/5 rounded-xl">
//                     <p className="text-gray-200 leading-relaxed">
//                       {announcement.description}
//                     </p>
//                   </div>
//                 )}
                
//                 {announcement.family && (
//                   <div className="mt-4 p-4 bg-white/5 rounded-lg">
//                     <h3 className="text-yellow-400 font-semibold mb-2">Family</h3>
//                     <p className="text-gray-300 text-sm">{announcement.family}</p>
//                   </div>
//                 )}
                
//                 {(announcement.funeralDate || announcement.funeralTime || announcement.location) && (
//                   <div className="mt-4 p-4 bg-white/5 rounded-lg">
//                     <h3 className="text-yellow-400 font-semibold mb-2">Funeral Service</h3>
//                     {announcement.funeralDate && <p className="text-gray-300 text-sm">Date: {formatDate(announcement.funeralDate)}</p>}
//                     {announcement.funeralTime && <p className="text-gray-300 text-sm">Time: {announcement.funeralTime}</p>}
//                     {announcement.location && <p className="text-gray-300 text-sm">Location: {announcement.location}</p>}
//                   </div>
//                 )}

//                 {/* More Details Section using MAP */}
//                 <div className="mt-4">
//                   <h3 className="text-yellow-400 font-semibold mb-3">Additional Information</h3>
//                   <div className="grid grid-cols-1 gap-3">
//                     {deathDetails.map((detail, index) => (
//                       <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
//                         <detail.icon className="text-yellow-400 text-sm" />
//                         <div>
//                           <p className="text-gray-400 text-xs">{detail.label}</p>
//                           <p className="text-white text-sm">{detail.value}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Funeral Schedule Timeline using MAP */}
//                 <div className="mt-4">
//                   <h3 className="text-yellow-400 font-semibold mb-3">Funeral Schedule</h3>
//                   <div className="space-y-2">
//                     {funeralSchedule.map((item, index) => (
//                       <div key={index} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
//                         <FaClock className="text-yellow-400 text-xs" />
//                         <span className="text-yellow-400 text-sm font-medium w-24">{item.time}</span>
//                         <span className="text-gray-300 text-sm">{item.activity}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Bible Verse */}
//                 <div className="mt-4 p-4 bg-gray-500/10 rounded-lg text-center border border-gray-500/30">
//                   <p className="text-gray-300 text-xs italic">
//                     "Blessed are those who die in the Lord from now on. Yes, says the Spirit, 
//                     they will rest from their labors, for their deeds will follow them." — Revelation 14:13
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {/* Back Button */}
//           <div className="flex justify-center mt-8">
//             <button
//               onClick={() => navigate(-1)}
//               className="flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer"
//             >
//               <FaArrowLeft />
//               <span>Back to Home</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnnouncementDetails;

// import React from "react";
// import { motion } from "framer-motion";
// import { useLocation, useNavigate } from "react-router-dom";
// import { 
//   FaCalendar, 
//   FaClock, 
//   FaUser, 
//   FaCross, 
//   FaChurch, 
//   FaLocationDot,
//   FaArrowLeft,
//   FaBell,
//   FaHeart,
//   FaRegClock,
//   FaCircleCheck,
//   FaCircleInfo
// } from "react-icons/fa6";

// const AnnouncementDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   const { announcement } = location.state || {};

//   if (!announcement) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-gray-400 mb-4">No announcement found</p>
//           <button 
//             onClick={() => navigate(-1)}
//             className="px-4 py-2 bg-yellow-500 text-black rounded-lg cursor-pointer"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   // More details for Service using map - USING CORRECT ICONS
//   const serviceDetails = [
//     { icon: FaUser, label: "Speaker", value: announcement.speaker || "Pastor John" },
//     { icon: FaRegClock, label: "Duration", value: "2 hours" },
//     { icon: FaCircleCheck, label: "Entry", value: "Free for all" },
//     { icon: FaHeart, label: "Refreshments", value: "Will be served after service" }
//   ];

//   // More details for Death using map - USING CORRECT ICONS
//   const deathDetails = [
//     { icon: FaHeart, label: "Prayer Meeting", value: "At family residence, 7 PM daily" },
//     { icon: FaCircleCheck, label: "Condolence Register", value: "Available at the church" },
//     { icon: FaCircleInfo, label: "Donations", value: "To charity in lieu of flowers" }
//   ];

//   // Schedule timeline using map
//   const serviceSchedule = [
//     { time: "9:30 AM", activity: "Prayer" },
//     { time: "10:00 AM", activity: "Worship" },
//     { time: "11:00 AM", activity: "Message" },
//     { time: "12:00 PM", activity: "Fellowship" }
//   ];

//   // Funeral schedule timeline using map
//   const funeralSchedule = [
//     { time: "9:00 AM", activity: "Viewing" },
//     { time: "10:00 AM", activity: "Funeral Service" },
//     { time: "11:30 AM", activity: "Burial" },
//     { time: "12:30 PM", activity: "Memorial Meal" }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <div className="relative h-screen">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url(https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cmNofGVufDB8fDB8fHww)",
//           }}
//         />
//         <div className="absolute inset-0 bg-black/60"></div>

//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//           <motion.h1
//             initial={{ y: -30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 drop-shadow-lg"
//           >
//             Church Announcements
//           </motion.h1>

//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="text-lg md:text-xl text-gray-200 mt-4 max-w-3xl leading-relaxed"
//           >
//             Stay updated with the latest announcements, events, and important
//             news from our church community.
//           </motion.p>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="relative z-10 py-16 px-6 md:px-12 lg:px-20 bg-black">
//         <div className="max-w-4xl mx-auto">
          
//           {/* Service Announcement Card */}
//          {announcement.type === "service" && (
//   <motion.div
//     initial={{ opacity: 0, y: 10 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.4 }}
//     className="mb-6 bg-white/5 rounded-lg border border-gray-700"
//   >
//     <div className="p-5">
//       <div className="flex items-center gap-2 mb-3">
//         <FaChurch className="text-yellow-400 text-base" />
//         <span className="text-yellow-400 text-sm font-medium">
//           Service Announcement
//         </span>
//       </div>

//       <h2 className="text-xl font-semibold text-white mb-2">
//         {announcement.title}
//       </h2>

//       <div className="flex flex-wrap gap-3 text-xs text-gray-400">
//         <div className="flex items-center gap-1">
//           <FaCalendar className="text-yellow-400 text-xs" />
//           <span>{formatDate(announcement.date)}</span>
//         </div>
//         <div className="flex items-center gap-1">
//           <FaClock className="text-yellow-400 text-xs" />
//           <span>{announcement.time}</span>
//         </div>
//         <div className="flex items-center gap-1">
//           <FaLocationDot className="text-yellow-400 text-xs" />
//           <span>{announcement.location}</span>
//         </div>
//         {announcement.speaker && (
//           <div className="flex items-center gap-1">
//             <FaUser className="text-yellow-400 text-xs" />
//             <span>Speaker: {announcement.speaker}</span>
//           </div>
//         )}
//       </div>

//       <div className="mt-3">
//         <p className="text-gray-300 text-sm leading-relaxed">
//           {announcement.description}
//         </p>
//       </div>

//       {/* Split Layout: Left (Additional Details) + Right (Schedule) */}
//       <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        
//         {/* Left Side - Additional Details */}
//         <div>
//           <h3 className="text-yellow-400 text-sm font-medium mb-2">
//             Additional Details
//           </h3>
//           <div className="space-y-2">
//             {serviceDetails.map((detail, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <detail.icon className="text-yellow-400 text-xs" />
//                 <p className="text-gray-300 text-xs">
//                   <span className="text-gray-400">{detail.label}: </span>
//                   {detail.value}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side - Service Schedule */}
//         <div>
//           <h3 className="text-yellow-400 text-sm font-medium mb-2">
//             Service Schedule
//           </h3>
//           <div className="space-y-1">
//             {serviceSchedule.map((item, index) => (
//               <div key={index} className="flex gap-2 text-xs">
//                 <span className="text-yellow-400 w-20">{item.time}</span>
//                 <span className="text-gray-300">{item.activity}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   </motion.div>
// )}

//           {/* Death Announcement Card */}
//          {announcement.type === "death" && (
//   <motion.div
//     initial={{ opacity: 0, y: 10 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.4 }}
//     className="bg-white/5 rounded-2xl border border-gray-500/30 shadow-lg overflow-hidden"
//   >
//     <div className="p-6">
//       <div className="flex items-center gap-2 mb-3">
//         <FaCross className="text-gray-400 text-base" />
//         <span className="text-gray-400 text-sm font-medium">In Loving Memory</span>
//       </div>

//       <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
//         {announcement.name}
//       </h2>

//       <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
//         {announcement.age && <span>Age: {announcement.age} years</span>}
//         {announcement.place && <span>📌 {announcement.place}</span>}
//         {announcement.date && (
//           <span>🕊️ Entered rest: {formatDate(announcement.date)}</span>
//         )}
//       </div>

//       {announcement.description && (
//         <div className="mt-2 mb-4">
//           <p className="text-gray-300 text-sm leading-relaxed">
//             {announcement.description}
//           </p>
//         </div>
//       )}

//       {announcement.family && (
//         <div className="mb-4">
//           <h3 className="text-yellow-400 text-sm font-medium mb-1">Family</h3>
//           <p className="text-gray-300 text-xs">{announcement.family}</p>
//         </div>
//       )}

//       {(announcement.funeralDate || announcement.funeralTime || announcement.location) && (
//         <div className="mb-4">
//           <h3 className="text-yellow-400 text-sm font-medium mb-1">Funeral Service</h3>
//           {announcement.funeralDate && (
//             <p className="text-gray-300 text-xs">📅 {formatDate(announcement.funeralDate)}</p>
//           )}
//           {announcement.funeralTime && (
//             <p className="text-gray-300 text-xs">⏰ {announcement.funeralTime}</p>
//           )}
//           {announcement.location && (
//             <p className="text-gray-300 text-xs">📍 {announcement.location}</p>
//           )}
//         </div>
//       )}

//       {/* SPLIT LAYOUT FOR DEATH - Additional Info (Left) + Schedule (Right) */}
//       <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        
//         {/* LEFT SIDE - Additional Information */}
//         <div>
//           <h3 className="text-yellow-400 text-sm font-medium mb-2">
//             Additional Information
//           </h3>
//           <div className="space-y-2">
//             {deathDetails.map((detail, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <detail.icon className="text-yellow-400 text-xs" />
//                 <p className="text-gray-300 text-xs">
//                   <span className="text-gray-400">{detail.label}: </span>
//                   {detail.value}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE - Funeral Schedule */}
//         <div>
//           <h3 className="text-yellow-400 text-sm font-medium mb-2">
//             Funeral Schedule
//           </h3>
//           <div className="space-y-1">
//             {funeralSchedule.map((item, index) => (
//               <div key={index} className="flex gap-3 text-xs">
//                 <span className="text-yellow-400 w-20">{item.time}</span>
//                 <span className="text-gray-300">→ {item.activity}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

//       {/* Bible Verse - Full Width */}
//       <div className="mt-5 pt-3 text-center border-t border-gray-700">
//         <p className="text-gray-500 text-xs italic">
//           "Blessed are those who die in the Lord... they will rest from their labors." — Revelation 14:13
//         </p>
//       </div>
//     </div>
//   </motion.div>
// )}

//           {/* Back Button */}
//           {/* <div className="flex justify-center mt-8">
//             <button
//               onClick={() => navigate(-1)}
//               className="flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer"
//             >
//               <FaArrowLeft />
//               <span>Back to Home</span>
//             </button>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnnouncementDetails;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  FaCalendar, 
  FaClock, 
  FaUser, 
  FaCross, 
  FaChurch, 
  FaLocationDot,
  FaArrowLeft,
  FaBell,
  FaHeart,
  FaRegClock,
  FaCircleCheck,
  FaCircleInfo,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa6";

const AnnouncementDetails = () => {

const location = useLocation();
const navigate = useNavigate();

const { announcement, allDeathAnnouncements } = location.state || {};

const [allDeaths, setAllDeaths] = useState(allDeathAnnouncements || []);

useEffect(() => {
  if (allDeathAnnouncements && allDeathAnnouncements.length > 0) {
    setAllDeaths(allDeathAnnouncements);
  }
}, [allDeathAnnouncements]);

if (!announcement) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">No announcement found</p>
          <button 
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-yellow-500 text-black rounded-lg cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
  

  // const [currentDeathAnnouncement, setCurrentDeathAnnouncement] = useState(announcement);
  // const [deathIndex, setDeathIndex] = useState(currentIndex || 0);
 
  

 

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Navigation functions for death carousel
  const nextDeath = () => {
    if (deathIndex < allDeaths.length - 1) {
      const newIndex = deathIndex + 1;
      setDeathIndex(newIndex);
      setCurrentDeathAnnouncement(allDeaths[newIndex]);
    }
  };

  const prevDeath = () => {
    if (deathIndex > 0) {
      const newIndex = deathIndex - 1;
      setDeathIndex(newIndex);
      setCurrentDeathAnnouncement(allDeaths[newIndex]);
    }
  };

  // More details for Service using map - USING CORRECT ICONS
  const serviceDetails = [
    { icon: FaUser, label: "Speaker", value: announcement.speaker || "Pastor John" },
    { icon: FaRegClock, label: "Duration", value: "2 hours" },
    { icon: FaCircleCheck, label: "Entry", value: "Free for all" },
    { icon: FaHeart, label: "Refreshments", value: "Will be served after service" }
  ];

  // More details for Death using map - USING CORRECT ICONS
  const deathDetails = [
    { icon: FaHeart, label: "Prayer Meeting", value: "At family residence, 7 PM daily" },
    { icon: FaCircleCheck, label: "Condolence Register", value: "Available at the church" },
    { icon: FaCircleInfo, label: "Donations", value: "To charity in lieu of flowers" }
  ];

  // Schedule timeline using map
  const serviceSchedule = [
    { time: "9:30 AM", activity: "Prayer" },
    { time: "10:00 AM", activity: "Worship" },
    { time: "11:00 AM", activity: "Message" },
    { time: "12:00 PM", activity: "Fellowship" }
  ];

  // Funeral schedule timeline using map
  const funeralSchedule = [
    { time: "9:00 AM", activity: "Viewing" },
    { time: "10:00 AM", activity: "Funeral Service" },
    { time: "11:30 AM", activity: "Burial" },
    { time: "12:30 PM", activity: "Memorial Meal" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cmNofGVufDB8fDB8fHww)",
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 drop-shadow-lg"
          >
            Church Announcements
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-200 mt-4 max-w-3xl leading-relaxed"
          >
            Stay updated with the latest announcements, events, and important
            news from our church community.
          </motion.p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative z-10 py-16 px-6 md:px-12 lg:px-20 bg-black">
        <div className="max-w-4xl mx-auto">
          
          {/* Service Announcement Card */}
          {announcement.type === "service" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 bg-white/5 rounded-lg border border-gray-700"
            >
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <FaChurch className="text-yellow-400 text-base" />
                  <span className="text-yellow-400 text-sm font-medium">
                    Service Announcement
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-white mb-2">
                  {announcement.title}
                </h2>

                <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <FaCalendar className="text-yellow-400 text-xs" />
                    <span>{formatDate(announcement.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="text-yellow-400 text-xs" />
                    <span>{announcement.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaLocationDot className="text-yellow-400 text-xs" />
                    <span>{announcement.location}</span>
                  </div>
                  {announcement.speaker && (
                    <div className="flex items-center gap-1">
                      <FaUser className="text-yellow-400 text-xs" />
                      <span>Speaker: {announcement.speaker}</span>
                    </div>
                  )}
                </div>

                <div className="mt-3">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {announcement.description}
                  </p>
                </div>

                {/* Split Layout: Left (Additional Details) + Right (Schedule) */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Left Side - Additional Details */}
                  <div>
                    <h3 className="text-yellow-400 text-sm font-medium mb-2">
                      Additional Details
                    </h3>
                    <div className="space-y-2">
                      {serviceDetails.map((detail, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <detail.icon className="text-yellow-400 text-xs" />
                          <p className="text-gray-300 text-xs">
                            <span className="text-gray-400">{detail.label}: </span>
                            {detail.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Service Schedule */}
                  <div>
                    <h3 className="text-yellow-400 text-sm font-medium mb-2">
                      Service Schedule
                    </h3>
                    <div className="space-y-1">
                      {serviceSchedule.map((item, index) => (
                        <div key={index} className="flex gap-2 text-xs">
                          <span className="text-yellow-400 w-20">{item.time}</span>
                          <span className="text-gray-300">{item.activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {/* Death Announcement Card with Carousel Navigation */}
          {announcement.type === "death" && allDeaths.length > 0 && (
  <div className="space-y-6">
    {allDeaths.map((death, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/5 rounded-2xl border border-gray-500/30 shadow-lg overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <FaCross className="text-gray-400 text-base" />
            <span className="text-gray-400 text-sm font-medium">
              In Loving Memory
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
            {death?.name}
          </h2>

          <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
            {death?.age && <span>Age: {death.age} years</span>}
            {death?.place && <span>📌 {death.place}</span>}
            {death?.date && (
              <span>🕊️ Entered rest: {formatDate(death.date)}</span>
            )}
          </div>

          {/* {death?.description && (
            <p className="text-gray-300 text-sm mb-3">
              {death.description}
            </p>
          )} */}
          {/* Additional Details */}
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">

  {/* LEFT - Info */}
  <div>
    <h3 className="text-yellow-400 text-sm font-medium mb-2">
      Additional Information
    </h3>
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <FaHeart className="text-yellow-400 text-xs" />
        <p className="text-gray-300 text-xs">
          <span className="text-gray-400">Prayer Meeting: </span>
          At family residence, 7 PM daily
        </p>
      </div>

      <div className="flex items-center gap-2">
        <FaCircleCheck className="text-yellow-400 text-xs" />
        <p className="text-gray-300 text-xs">
          <span className="text-gray-400">Condolence Register: </span>
          Available at the church
        </p>
      </div>

      <div className="flex items-center gap-2">
        <FaCircleInfo className="text-yellow-400 text-xs" />
        <p className="text-gray-300 text-xs">
          <span className="text-gray-400">Donations: </span>
          To charity in lieu of flowers
        </p>
      </div>
    </div>
  </div>

  {/* RIGHT - Schedule */}
  <div>
    <h3 className="text-yellow-400 text-sm font-medium mb-2">
      Funeral Schedule
    </h3>
    <div className="space-y-1">
      <div className="flex gap-2 text-xs">
        <span className="text-yellow-400 w-20">9:00 AM</span>
        <span className="text-gray-300">Viewing</span>
      </div>
      <div className="flex gap-2 text-xs">
        <span className="text-yellow-400 w-20">10:00 AM</span>
        <span className="text-gray-300">Funeral Service</span>
      </div>
      <div className="flex gap-2 text-xs">
        <span className="text-yellow-400 w-20">11:30 AM</span>
        <span className="text-gray-300">Burial</span>
      </div>
    </div>
  </div>

</div>

          {death?.family && (
            <div className="mb-3">
              <h3 className="text-yellow-400 text-sm">Family</h3>
              <p className="text-gray-300 text-xs">{death.family}</p>
            </div>
          )}

          {(death?.funeralDate || death?.funeralTime || death?.location) && (
            <div className="mb-3">
              <h3 className="text-yellow-400 text-sm">Funeral Service</h3>
              {death?.funeralDate && (
                <p className="text-gray-300 text-xs">
                  📅 {formatDate(death.funeralDate)}
                </p>
              )}
              {death?.funeralTime && (
                <p className="text-gray-300 text-xs">
                  ⏰ {death.funeralTime}
                </p>
              )}
              {death?.location && (
                <p className="text-gray-300 text-xs">
                  📍 {death.location}
                </p>
              )}
            </div>
          )}

          {/* Same extra sections (keep your existing if needed) */}

          <div className="mt-5 pt-3 text-center border-t border-gray-700">
            <p className="text-gray-500 text-xs italic">
              "Blessed are those who die in the Lord..." — Revelation 14:13
            </p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
)}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetails;