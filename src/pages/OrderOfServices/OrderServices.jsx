// import { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const OrderServices = () => {
//   const [activeDay, setActiveDay] = useState("sunday");
//   const [selectedService, setSelectedService] = useState(null);
//   const [month, setMonth] = useState(new Date().getMonth());
//   const [year, setYear] = useState(new Date().getFullYear());
//   const contentRef = useRef(null);

//   // ✅ Sample data for church services
//   const serviceSchedule = {
//    sunday: [
//   {
//     id: 1,
//     name: "First Prayer",
//     time: "8:00 AM - 8:30 AM",
//     location: "Main Sanctuary",
//     description: "Opening prayer service.",
//   },
//   {
//     id: 2,
//     name: "Second Prayer",
//     time: "8:30 AM - 10:30 AM",
//     location: "Main Sanctuary",
//     description: "Main worship service. Speaker: Rev. Father [Add Name]",
//   },
//   {
//     id: 3,
//     name: "Sunday School",
//     time: "10:30 AM - 11:30 AM",
//     location: "Education Hall",
//     description: "Bible teaching session for all age groups.",
//   },
//   {
//     id: 4,
//     name: "Afternoon Service",
//     time: "2:30 PM - 3:00 PM",
//     location: "Chapel",
//     description: "Short afternoon prayer.",
//   },
//   {
//     id: 5,
//     name: "Christian End Hour",
//     time: "3:00 PM - 4:00 PM",
//     location: "Main Hall",
//     description: "Spiritual closing session.",
//   },
//   {
//     id: 6,
//     name: "Home Visiting & Deacons Prayer",
//     time: "4:00 PM onwards",
//     location: "Various Homes",
//     description: "Deacons visit homes for prayer and fellowship.",
//   },
// ],

// monday: [
//   {
//     id: 10,
//     name: "Morning Prayer",
//     time: "6:00 AM - 6:30 AM",
//     location: "Main Sanctuary",
//     description: "Early morning prayer service.",
//   },
//   {
//     id: 11,
//     name: "Morning Prayer",
//     time: "9:00 AM - 10:00 AM",
//     location: "Main Sanctuary",
//     description: "Daily morning prayer gathering.",
//   },
//   {
//     id: 12,
//     name: "Prayer",
//     time: "10:30 AM - 12:30 AM",
//     location: "Main Sanctuary",
//     description: "Daily morning prayer gathering.",
//   },

// ],
// tuesday: [
//   {
//     id: 13,
//     name: "Morning Prayer",
//     time: "6:00 AM - 6:30 AM",
//     location: "Main Sanctuary",
//     description: "Early morning prayer service.",
//   },
  
//   {
//     id: 14,
//     name: "Morning Prayer",
//     time: "9:00 AM - 10:00 AM",
//     location: "Main Sanctuary",
//     description: "Daily morning prayer gathering.",
//   },
//   {
//     id: 15,
//     name: "Morning Prayer",
//     time: "10:30 AM - 12:30 AM",
//     location: "Main Sanctuary",
//     description: "Daily morning prayer gathering.",
//   },
//   {
//     id: 16,
//     name: "Prayer",
//     time: "7:00 PM",
//     location: "Main Sanctuary",
//     description: "Daily morning prayer gathering.",
//   },
 
  
// ],

//    wednesday: [
//   {
//     id: 17,
//     name: "Morning Prayer",
//     time: "6:00 AM - 6:30 AM",
//     location: "Main Sanctuary",
//     description: "Early morning prayer service.",
//   },
  
//   {
//     id: 18,
//     name: "Morning Prayer",
//     time: "9:00 AM - 10:00 AM",
//     location: "Main Sanctuary",
//     description: "Daily morning prayer gathering.",
//   },
//   {
//     id: 19,
//     name: "Morning Prayer",
//     time: "10:30 AM - 12:30 AM",
//     location: "Main Sanctuary",
//     description: "Daily morning prayer gathering.",
//   },
//   {
//     id: 20,
//     name: "Prayer",
//     time: "7:00 PM - 8:00 PM",
//     location: "Main Sanctuary",
//     description: "Daily morning prayer gathering.",
//   },
 
  
// ],
//     Thursday: [
//      {
//     id: 21,
//     name: "Morning Prayer",
//     time: "6:00 AM - 6:30 AM",
//     location: "Main Sanctuary",
//     description: "Early morning prayer service.",
//   },
  
//   {
//     id: 22,
//     name: "Morning Prayer",
//     time: "9:00 AM - 10:00 AM",
//     location: "Main Sanctuary",
//     description: "Daily morning prayer gathering.",
//   },
//   {
//     id: 23,
//     name: "Morning Prayer",
//     time: "10:30 AM - 12:30 AM",
//     location: "Main Sanctuary",
//     description: "Daily morning prayer gathering.",
//   },
//   {
//     id: 24,
//     name: "Prayer",
//     time: "7:00 PM - 8:00 PM",
//     location: "Main Sanctuary",
//     description: "Daily morning prayer gathering.",
//   },
 
//     ],
//     friday: [
//       {
//     id: 25,
//     name: "Fasting Prayer",
//     time: "10:00 AM - 01:00 PM",
//     location: "Main Sanctuary",
//     description: "Early morning prayer service.",
//   },
  
//   {
//     id: 26,
//     name: "Morning Prayer",
//     time: "7:00 AM - 8:30 AM",
//     location: "Main Sanctuary",
//     description: "Friday Prayer",
//   },
  
//     ],
//      saturday: [
//       {
//     id: 27,
//     name: "Fasting Prayer",
//     time: "10:00 AM - 01:00 PM",
//     location: "Main Sanctuary",
//     description: "Early morning prayer service.",
//   },
  
//   {
//     id: 26,
//     name: "Morning Prayer",
//     time: "7:00 AM - 8:30 AM",
//     location: "Main Sanctuary",
//     description: "Friday Prayer",
//   },
  
//     ],
//   };

//   const daysOfWeek = [
//     { id: "sunday", name: "Sunday" },
//     { id: "monday", name: "Monday" },
//     { id: "tuesday", name: "Tuesday" },
//     { id: "wednesday", name: "Wednesday" },
//     { id: "thursday", name: "Thursday" },
//     { id: "friday", name: "Friday" },
//     { id: "saturday", name: "Saturday" },
//   ];

//   // ✅ Calendar generator function
//   const generateCalendar = (month, year) => {
//     const firstDay = new Date(year, month, 1).getDay();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const calendarDays = [];

//     // Empty slots before start
//     for (let i = 0; i < firstDay; i++) {
//       calendarDays.push(null);
//     }
//     // Actual days
//     for (let d = 1; d <= daysInMonth; d++) {
//       calendarDays.push(d);
//     }

//     return calendarDays;
//   };

//   const calendarDays = generateCalendar(month, year);
//   const today = new Date();

//   // ✅ Month navigation
//   const handlePrevMonth = () => {
//     if (month === 0) {
//       setMonth(11);
//       setYear((prev) => prev - 1);
//     } else {
//       setMonth((prev) => prev - 1);
//     }
//   };

//   const handleNextMonth = () => {
//     if (month === 11) {
//       setMonth(0);
//       setYear((prev) => prev + 1);
//     } else {
//       setMonth((prev) => prev + 1);
//     }
//   };

//   // ✅ Scroll to content
//   const handleScroll = () => {
//     contentRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="min-h-screen bg-[#fce9da]">
//       {/* ✅ Hero Section */}
//       <div className="relative h-screen flex flex-col items-center justify-center text-center">
//         <img
//           src="https://plus.unsplash.com/premium_photo-1678197482532-2a58a5ff084d?w=600&auto=format&fit=crop&q=60"
//           alt="Church Background"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative z-10 px-6">
//           <motion.h1
//             initial={{ y: -40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7, type: "spring" }}
//             className="text-5xl md:text-6xl font-bold mb-8 text-white"
//           >
//             Order of Services
//           </motion.h1>
//           <motion.p
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="text-lg md:text-xl max-w-2xl mx-auto text-white mb-6"
//           >
//             Experience worship, fellowship, and spiritual growth throughout the
//             week with us.
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleScroll}
//             className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all"
//           >
//             Learn More
//           </motion.button>
//         </div>
//       </div>

//       {/* ✅ Content Section */}
//       <div
//         ref={contentRef}
//         className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//           {/* Services Section */}
//           <div className="lg:col-span-2">
//             {/* Day Selector */}
//             <motion.div className="flex flex-wrap justify-center gap-2 mb-10">
//               {daysOfWeek.map((day) => (
//                 <motion.button
//                   key={day.id}
//                   onClick={() => setActiveDay(day.id)}
//                   className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
//                     activeDay === day.id
//                       ? "bg-yellow-400 text-black shadow-lg"
//                       : "bg-white text-red-500 hover:bg-gray-100 shadow-md"
//                   }`}
//                 >
//                   {day.name}
//                 </motion.button>
//               ))}
//             </motion.div>

//             {/* Services List */}
//             <AnimatePresence mode="wait">
//               <motion.div key={activeDay} className="grid gap-6">
//                 {serviceSchedule[activeDay].map((service) => (
//                   <motion.div
//                     key={service.id}
//                     className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//                   >
//                     <div className="p-6">
//                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                         <div className="flex-1">
//                           <h3 className="text-xl font-bold text-red-500 mb-2">
//                             {service.name}
//                           </h3>
//                           <div className="flex items-center text-gray-600 mb-2">
//                             <span className="mr-2">🕒</span>
//                             <span>{service.time}</span>
//                           </div>
//                           <div className="flex items-center text-gray-600">
//                             <span className="mr-2">📍</span>
//                             <span>{service.location}</span>
//                           </div>
//                         </div>
//                         <button
//                           onClick={() =>
//                             setSelectedService(
//                               selectedService?.id === service.id
//                                 ? null
//                                 : service
//                             )
//                           }
//                           className="px-4 py-2 bg-yellow-100 text-amber-500 rounded-lg hover:bg-yellow-200 transition-colors duration-300 font-medium"
//                         >
//                           {selectedService?.id === service.id
//                             ? "Hide Details"
//                             : "View Details"}
//                         </button>
//                       </div>

//                       <AnimatePresence>
//                         {selectedService?.id === service.id && (
//                           <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: "auto" }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="mt-4 pt-4 border-t border-gray-100"
//                           >
//                             <p className="text-gray-700">
//                               {service.description}
//                             </p>
//                             <div className="mt-4 flex justify-end">
//                               <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors duration-300 font-medium">
//                                 Add to Calendar
//                               </button>
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* ✅ Calendar Section */}
//           <motion.div
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.7 }}
//             className="bg-white rounded-2xl shadow-xl p-6 h-fit"
//           >
//             <div className="flex items-center justify-between mb-4">
//               <button onClick={handlePrevMonth} className="px-3 py-1 ">
//                 ◀
//               </button>
//               <h2 className="text-xl font-bold text-red-500">
//                 {new Date(year, month).toLocaleString("default", {
//                   month: "long",
//                 })}{" "}
//                 {year}
//               </h2>
//               <button onClick={handleNextMonth} className="px-3 py-1 ">
//                 ▶
//               </button>
//             </div>

//             <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium mb-2">
//               {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
//                 (day, i) => (
//                   <div key={i} className="p-2 text-red-500">
//                     {day}
//                   </div>
//                 )
//               )}
//             </div>
//             <div className="grid grid-cols-7 gap-2 text-center">
//               {calendarDays.map((day, i) => (
//                 <div
//                   key={i}
//                   className={`p-2 rounded-lg ${
//                     day === today.getDate() &&
//                     month === today.getMonth() &&
//                     year === today.getFullYear()
//                       ? "bg-yellow-400 text-black font-bold"
//                       : day
//                       ? "bg-gray-100 text-gray-700"
//                       : ""
//                   }`}
//                 >
//                   {day || ""}
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderServices;

// import { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const OrderServices = () => {
//   const [activeDay, setActiveDay] = useState("sunday");
//   const [selectedService, setSelectedService] = useState(null);
//   const [month, setMonth] = useState(new Date().getMonth());
//   const [year, setYear] = useState(new Date().getFullYear());
//   const contentRef = useRef(null);

//   // ✅ Sample data for church services
//   const serviceSchedule = {
//     sunday: [
//       {
//         id: 1,
//         name: "First Prayer",
//         time: "8:00 AM - 8:30 AM",
//         location: "Main Sanctuary",
//         description: "Opening prayer service to start the day with devotion.",
//       },
//       {
//         id: 2,
//         name: "Second Prayer",
//         time: "8:30 AM - 10:30 AM",
//         location: "Main Sanctuary",
//         description: "Main worship service with powerful preaching and worship.",
//       },
//       {
//         id: 3,
//         name: "Sunday School",
//         time: "10:30 AM - 11:30 AM",
//         location: "Education Hall",
//         description: "Bible teaching session for all age groups.",
//       },
//       {
//         id: 4,
//         name: "Afternoon Service",
//         time: "2:30 PM - 3:00 PM",
//         location: "Chapel",
//         description: "Short afternoon prayer and reflection.",
//       },
//       {
//         id: 5,
//         name: "Christian End Hour",
//         time: "3:00 PM - 4:00 PM",
//         location: "Main Hall",
//         description: "Spiritual closing session with prayer and worship.",
//       },
//       {
//         id: 6,
//         name: "Home Visiting & Deacons Prayer",
//         time: "4:00 PM onwards",
//         location: "Various Homes",
//         description: "Deacons visit homes for prayer and fellowship.",
//       },
//     ],
//     monday: [
      
//       {
//         id: 12,
//         name: "Prayer Meeting",
//         time: "10:30 AM - 12:30 PM",
//         location: "Main Sanctuary",
//         description: "Mid-morning prayer and intercession.",
//       },
//     ],
//     tuesday: [
      
//       {
//         id: 15,
//         name: "Prayer Meeting",
//         time: "10:30 AM - 12:30 PM",
//         location: "Main Sanctuary",
//         description: "Daily morning prayer gathering.",
//       },
//       {
//         id: 16,
//         name: "Evening Prayer",
//         time: "7:00 PM",
//         location: "Main Sanctuary",
//         description: "Evening prayer and worship.",
//       },
//     ],
//     wednesday: [
      
//       {
//         id: 19,
//         name: "Prayer Meeting",
//         time: "10:30 AM - 12:30 PM",
//         location: "Main Sanctuary",
//         description: "Daily morning prayer gathering.",
//       },
//       {
//         id: 20,
//         name: "Evening Prayer",
//         time: "7:00 PM - 8:00 PM",
//         location: "Main Sanctuary",
//         description: "Evening prayer and fellowship.",
//       },
//     ],
//     thursday: [
//       {
//         id: 23,
//         name: "Prayer Meeting",
//         time: "10:30 AM - 12:30 PM",
//         location: "Main Sanctuary",
//         description: "Daily morning prayer gathering.",
//       },
      
//     ],
//     friday: [
//       {
//         id: 25,
//         name: "Fasting Prayer",
//         time: "10:00 AM - 1:00 PM",
//         location: "Main Sanctuary",
//         description: "Special fasting prayer service.",
//       },
//       {
//         id: 26,
//         name: "Morning Prayer",
//         time: "7:00 AM - 8:30 AM",
//         location: "Main Sanctuary",
//         description: "Friday morning prayer gathering.",
//       },
//     ],
//     saturday: [
//       {
//         id: 27,
//         name: "Fasting Prayer",
//         time: "10:00 AM - 1:00 PM",
//         location: "Main Sanctuary",
//         description: "Weekend fasting prayer service.",
//       },
//       {
//         id: 28,
//         name: "Evening Prayer",
//         time: "7:00 PM - 8:30 PM",
//         location: "Main Sanctuary",
//         description: "Saturday morning prayer gathering.",
//       },
//       {
//         id: 29,
//         name: "Choir Practice",
//         time: "5:00 PM - 7:00 PM",
//         location: "Youth Hall",
//         description: "Special service for youth and young adults.",
//       },
//     ],
//   };

//   const daysOfWeek = [
//     { id: "sunday", name: "Sunday", icon: "🙏" },
//     { id: "monday", name: "Monday", icon: "📖" },
//     { id: "tuesday", name: "Tuesday", icon: "✝️" },
//     { id: "wednesday", name: "Wednesday", icon: "🕯️" },
//     { id: "thursday", name: "Thursday", icon: "⭐" },
//     { id: "friday", name: "Friday", icon: "🕊️" },
//     { id: "saturday", name: "Saturday", icon: "🎵" },
//   ];

//   // ✅ Calendar generator function
//   const generateCalendar = (month, year) => {
//     const firstDay = new Date(year, month, 1).getDay();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const calendarDays = [];

//     for (let i = 0; i < firstDay; i++) {
//       calendarDays.push(null);
//     }
//     for (let d = 1; d <= daysInMonth; d++) {
//       calendarDays.push(d);
//     }

//     return calendarDays;
//   };

//   const calendarDays = generateCalendar(month, year);
//   const today = new Date();

//   const handlePrevMonth = () => {
//     if (month === 0) {
//       setMonth(11);
//       setYear((prev) => prev - 1);
//     } else {
//       setMonth((prev) => prev - 1);
//     }
//   };

//   const handleNextMonth = () => {
//     if (month === 11) {
//       setMonth(0);
//       setYear((prev) => prev + 1);
//     } else {
//       setMonth((prev) => prev + 1);
//     }
//   };

//   const handleScroll = () => {
//     contentRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#fce9da] to-[#f5e0cc]">
//       {/* Hero Section */}
//       <div className="relative h-screen flex flex-col items-center justify-center text-center">
//         <img
//           src="https://plus.unsplash.com/premium_photo-1678197482532-2a58a5ff084d?w=600&auto=format&fit=crop&q=60"
//           alt="Church Background"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative z-10 px-6">
//           <motion.h1
//             initial={{ y: -40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7, type: "spring" }}
//             className="text-5xl md:text-6xl font-bold mb-8 text-white"
//           >
//             Order of Services
//           </motion.h1>
//           <motion.p
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="text-lg md:text-xl max-w-2xl mx-auto text-white mb-6"
//           >
//             Experience worship, fellowship, and spiritual growth throughout the
//             week with us.
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleScroll}
//             className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300"
//           >
//             Explore Services
//           </motion.button>
//         </div>
//       </div>

//       {/* Content Section */}
//      <div
//   ref={contentRef}
//   className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
// >
//   {/* Days Selector - Top Row */}
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//     className="flex flex-wrap justify-center gap-2 mb-10"
//   >
//     {daysOfWeek.map((day) => (
//       <motion.button
//         key={day.id}
//         onClick={() => setActiveDay(day.id)}
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//         className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
//           activeDay === day.id
//             ? "bg-yellow-400 text-gray-900"
//             : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
//         }`}
//       >
//         <span className="text-lg">{day.icon}</span>
//         <span>{day.name}</span>
//       </motion.button>
//     ))}
//   </motion.div>

//   {/* Services and Calendar Grid */}
//   <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//     {/* Services Cards - Left Side */}
//     <div className="lg:col-span-2">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeDay}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.2 }}
//           className="space-y-3"
//         >
//           {serviceSchedule[activeDay].map((service, index) => (
//             <motion.div
//               key={service.id}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.2, delay: index * 0.03 }}
//               className="bg-white rounded-lg border border-gray-200 group"
//             >
//               <div 
//                 className="p-5 cursor-pointer"
//                 onClick={() =>
//                   setSelectedService(
//                     selectedService?.id === service.id ? null : service
//                   )
//                 }
//               >
//                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
//                   <div className="flex-1">
//                     <div className="flex items-center gap-2 mb-2">
//                       <div className="w-1 h-5 bg-yellow-400 rounded-full"></div>
//                       <h3 className="text-lg font-semibold text-gray-800">
//                         {service.name}
//                       </h3>
//                     </div>
//                     <div className="space-y-1 pl-3">
//                       <div className="flex items-center text-gray-500 text-sm">
//                         <span className="mr-2">🕒</span>
//                         <span>{service.time}</span>
//                       </div>
//                       <div className="flex items-center text-gray-500 text-sm">
//                         <span className="mr-2">📍</span>
//                         <span>{service.location}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="px-4 py-1.5 bg-gray-50 text-gray-600 rounded-md hover:bg-yellow-100 hover:text-gray-900 transition-all duration-200 text-sm font-medium">
//                     {selectedService?.id === service.id ? "Hide" : "View"}
//                   </div>
//                 </div>

//                 <AnimatePresence>
//                   {selectedService?.id === service.id && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="mt-4 pt-4 border-t border-gray-100"
//                     >
//                       <div className="bg-gray-50 rounded-lg p-3">
//                         <p className="text-gray-600 text-sm leading-relaxed">
//                           {service.description}
//                         </p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </AnimatePresence>
//     </div>

//     {/* Calendar Section - Right Side */}
//     <motion.div
//       initial={{ x: 30, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white rounded-lg border border-gray-200 p-5 h-fit sticky top-24"
//     >
//       <div className="flex items-center justify-between mb-5">
//         <button
//           onClick={handlePrevMonth}
//           className="w-8 h-8 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center text-gray-600"
//         >
//           ◀
//         </button>
//         <h2 className="text-lg font-semibold text-gray-800">
//           {new Date(year, month).toLocaleString("default", {
//             month: "long",
//           })}{" "}
//           <span className="text-yellow-500">{year}</span>
//         </h2>
//         <button
//           onClick={handleNextMonth}
//           className="w-8 h-8 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center text-gray-600"
//         >
//           ▶
//         </button>
//       </div>

//       <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium mb-2">
//         {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
//           <div key={i} className="p-1.5 text-yellow-600">
//             {day}
//           </div>
//         ))}
//       </div>
      
//       <div className="grid grid-cols-7 gap-1 text-center">
//         {calendarDays.map((day, i) => {
//           const isToday =
//             day === today.getDate() &&
//             month === today.getMonth() &&
//             year === today.getFullYear();
//           return (
//             <div
//               key={i}
//               className={`p-1.5 rounded-md transition-all duration-200 text-sm ${
//                 isToday
//                   ? "bg-yellow-400 text-gray-900 font-semibold"
//                   : day
//                   ? "text-gray-600 hover:bg-gray-50"
//                   : ""
//               }`}
//             >
//               {day || ""}
//             </div>
//           );
//         })}
//       </div>

//       {/* Calendar Legend */}
//       <div className="mt-5 pt-3 border-t border-gray-100">
//         <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
//           <div className="flex items-center gap-1.5">
//             <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
//             <span>Today</span>
//           </div>
//           <div className="flex items-center gap-1.5">
//             <div className="w-2.5 h-2.5 bg-gray-100 rounded-full border border-gray-200"></div>
//             <span>Regular</span>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   </div>
// </div>

//       {/* Footer Section */}
//       {/* <footer className="bg-gray-900 text-white py-12 mt-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h3 className="text-2xl font-bold mb-4">Join Us This Week</h3>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Experience the love of God and fellowship with believers
//             </p>
//             <div className="mt-6">
//               <button 
//                 onClick={handleScroll}
//                 className="px-6 py-2 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-500 transition-all duration-300 font-medium"
//               >
//                 View Schedule ↑
//               </button>
//             </div>
//             <div className="mt-8 pt-6 border-t border-gray-800">
//               <p className="text-gray-500 text-sm">
//                 © 2024 Church Name. All rights reserved.
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer> */}
//     </div>
//   );
// };

// export default OrderServices;


// import { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const OrderServices = () => {
//   const [activeDay, setActiveDay] = useState("sunday");
//   const [selectedService, setSelectedService] = useState(null);
//   const [month, setMonth] = useState(new Date().getMonth());
//   const [year, setYear] = useState(new Date().getFullYear());
//   const contentRef = useRef(null);

//   // Helper function to check if a given date is 2nd Saturday
//   const isSecondSaturday = (date) => {
//     const year = date.getFullYear();
//     const month = date.getMonth();
    
//     // Get all Saturdays in the month
//     const saturdays = [];
//     const lastDay = new Date(year, month + 1, 0);
    
//     for (let d = 1; d <= lastDay.getDate(); d++) {
//       const checkDate = new Date(year, month, d);
//       if (checkDate.getDay() === 6) { // 6 = Saturday
//         saturdays.push(d);
//       }
//     }
    
//     // 2nd Saturday is the second item in the array
//     const secondSaturdayDate = saturdays[1];
//     return date.getDate() === secondSaturdayDate;
//   };

//   // Function to get Saturday schedule based on current date
//   const getSaturdaySchedule = () => {
//     const currentDate = new Date();
//     const isSecondSat = isSecondSaturday(currentDate);
    
//     if (isSecondSat) {
//       return [
//         {
//           id: 27,
//           name: "2nd Saturday Fasting Prayer",
//           time: "10:00 AM - 2:00 PM",
//           location: "Main Sanctuary",
//           description: "Special 2nd Saturday extended fasting prayer service. Join us for powerful prayer and fasting until 2:00 PM.",
//         },
//         {
//           id: 31,
//           name: "Evening Prayer",
//           time: "7:00 PM - 8:30 PM",
//           location: "Main Sanctuary",
//           description: "Special 2nd Saturday extended fasting prayer service. Join us for powerful prayer and fasting until 2:00 PM.",
//         },

       
//       ];
//     } else {
//       return [
//         {
//           id: 27,
//           name: "Morning Prayer",
//           time: "10:30 AM - 12:30 PM",
//           location: "Main Sanctuary",
//           description: "Regular Saturday prayer service.",
//         },
//         {
//           id: 29,
//           name: "Choir Practice",
//           time: "5:00 PM - 7:00 PM",
//           location: "Youth Hall",
//           description: "Special service for youth and young adults.",
//         },
//         {
//           id: 30,
//           name: "Gents Prayer",
//           time: "7:30 PM - 8:30 PM",
//           location: "Youth Hall",
//           description: "Special service for youth and young adults.",
//         },
//       ];
//     }
//   };

//   // ✅ Sample data for church services
//   const serviceSchedule = {
//     sunday: [
//       {
//         id: 1,
//         name: "First Prayer",
//         time: "8:00 AM - 8:30 AM",
//         location: "Main Sanctuary",
//         description: "Opening prayer service to start the day with devotion.",
//       },
//       {
//         id: 2,
//         name: "Second Prayer",
//         time: "8:30 AM - 10:30 AM",
//         location: "Main Sanctuary",
//         description: "Main worship service with powerful preaching and worship.",
//       },
//       {
//         id: 3,
//         name: "Sunday School",
//         time: "10:30 AM - 11:30 AM",
//         location: "Education Hall",
//         description: "Bible teaching session for all age groups.",
//       },
//       {
//         id: 4,
//         name: "Afternoon Service",
//         time: "2:30 PM - 3:00 PM",
//         location: "Chapel",
//         description: "Short afternoon prayer and reflection.",
//       },
//       {
//         id: 5,
//         name: "Christian End Hour",
//         time: "3:00 PM - 4:00 PM",
//         location: "Main Hall",
//         description: "Spiritual closing session with prayer and worship.",
//       },
//       {
//         id: 6,
//         name: "Home Visiting & Deacons Prayer",
//         time: "4:00 PM onwards",
//         location: "Various Homes",
//         description: "Deacons visit homes for prayer and fellowship.",
//       },
//     ],
//     monday: [
//       {
//         id: 12,
//         name: "Prayer Meeting",
//         time: "10:30 AM - 12:30 PM",
//         location: "Main Sanctuary",
//         description: "Mid-morning prayer and intercession.",
//       },
//     ],
//     tuesday: [
//       {
//         id: 15,
//         name: "Prayer Meeting",
//         time: "10:30 AM - 12:30 PM",
//         location: "Main Sanctuary",
//         description: "Daily morning prayer gathering.",
//       },
//       {
//         id: 16,
//         name: "Evening Prayer",
//         time: "7:00 PM",
//         location: "Main Sanctuary",
//         description: "Evening prayer and worship.",
//       },
//     ],
//     wednesday: [
//       {
//         id: 19,
//         name: "Prayer Meeting",
//         time: "10:30 AM - 12:30 PM",
//         location: "Main Sanctuary",
//         description: "Daily morning prayer gathering.",
//       },
//       {
//         id: 20,
//         name: "Evening Prayer",
//         time: "7:00 PM - 8:00 PM",
//         location: "Main Sanctuary",
//         description: "Evening prayer and fellowship.",
//       },
//     ],
//     thursday: [
//       {
//         id: 23,
//         name: "Prayer Meeting",
//         time: "10:30 AM - 12:30 PM",
//         location: "Main Sanctuary",
//         description: "Daily morning prayer gathering.",
//       },
//     ],
//     friday: [
//       {
//         id: 25,
//         name: "Fasting Prayer",
//         time: "10:00 AM - 1:00 PM",
//         location: "Main Sanctuary",
//         description: "Special fasting prayer service.",
//       },
//       {
//         id: 26,
//         name: "Evening Prayer",
//         time: "7:00 PM - 8:30 PM",
//         location: "Main Sanctuary",
//         description: "Friday Evening prayer gathering.",
//       },
//     ],
//     saturday: getSaturdaySchedule(), // Dynamic Saturday schedule
//   };

//   const daysOfWeek = [
//     { id: "sunday", name: "Sunday", icon: "🙏" },
//     { id: "monday", name: "Monday", icon: "📖" },
//     { id: "tuesday", name: "Tuesday", icon: "✝️" },
//     { id: "wednesday", name: "Wednesday", icon: "🕯️" },
//     { id: "thursday", name: "Thursday", icon: "⭐" },
//     { id: "friday", name: "Friday", icon: "🕊️" },
//     { id: "saturday", name: "Saturday", icon: "🎵" },
//   ];

//   // ✅ Calendar generator function
//   const generateCalendar = (month, year) => {
//     const firstDay = new Date(year, month, 1).getDay();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const calendarDays = [];

//     for (let i = 0; i < firstDay; i++) {
//       calendarDays.push(null);
//     }
//     for (let d = 1; d <= daysInMonth; d++) {
//       calendarDays.push(d);
//     }

//     return calendarDays;
//   };

//   const calendarDays = generateCalendar(month, year);
//   const today = new Date();

//   const handlePrevMonth = () => {
//     if (month === 0) {
//       setMonth(11);
//       setYear((prev) => prev - 1);
//     } else {
//       setMonth((prev) => prev - 1);
//     }
//   };

//   const handleNextMonth = () => {
//     if (month === 11) {
//       setMonth(0);
//       setYear((prev) => prev + 1);
//     } else {
//       setMonth((prev) => prev + 1);
//     }
//   };

//   const handleScroll = () => {
//     contentRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#fce9da] to-[#f5e0cc]">
//       {/* Hero Section */}
//       <div className="relative h-screen flex flex-col items-center justify-center text-center">
//         <img
//           src="https://plus.unsplash.com/premium_photo-1678197482532-2a58a5ff084d?w=600&auto=format&fit=crop&q=60"
//           alt="Church Background"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative z-10 px-6">
//           <motion.h1
//             initial={{ y: -40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7, type: "spring" }}
//             className="text-5xl md:text-6xl font-bold mb-8 text-white"
//           >
//             Order of Services
//           </motion.h1>
//           <motion.p
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="text-lg md:text-xl max-w-2xl mx-auto text-white mb-6"
//           >
//             Experience worship, fellowship, and spiritual growth throughout the
//             week with us.
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleScroll}
//             className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300"
//           >
//             Explore Services
//           </motion.button>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div
//         ref={contentRef}
//         className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
//       >
//         {/* Days Selector - Top Row */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-wrap justify-center gap-2 mb-10"
//         >
//           {daysOfWeek.map((day) => (
//             <motion.button
//               key={day.id}
//               onClick={() => setActiveDay(day.id)}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
//                 activeDay === day.id
//                   ? "bg-yellow-400 text-gray-900"
//                   : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
//               }`}
//             >
//               <span className="text-lg">{day.icon}</span>
//               <span>{day.name}</span>
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Services and Calendar Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Services Cards - Left Side */}
//           <div className="lg:col-span-2">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeDay}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.2 }}
//                 className="space-y-3"
//               >
//                 {serviceSchedule[activeDay].map((service, index) => (
//                   <motion.div
//                     key={service.id}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.2, delay: index * 0.03 }}
//                     className="bg-white rounded-lg border border-gray-200 group"
//                   >
//                     <div 
//                       className="p-5 cursor-pointer"
//                       onClick={() =>
//                         setSelectedService(
//                           selectedService?.id === service.id ? null : service
//                         )
//                       }
//                     >
//                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
//                         <div className="flex-1">
//                           <div className="flex items-center gap-2 mb-2">
//                             <div className="w-1 h-5 bg-yellow-400 rounded-full"></div>
//                             <h3 className="text-lg font-semibold text-gray-800">
//                               {service.name}
//                             </h3>
//                           </div>
//                           <div className="space-y-1 pl-3">
//                             <div className="flex items-center text-gray-500 text-sm">
//                               <span className="mr-2">🕒</span>
//                               <span>{service.time}</span>
//                             </div>
//                             <div className="flex items-center text-gray-500 text-sm">
//                               <span className="mr-2">📍</span>
//                               <span>{service.location}</span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="px-4 py-1.5 bg-gray-50 text-gray-600 rounded-md hover:bg-yellow-100 hover:text-gray-900 transition-all duration-200 text-sm font-medium">
//                           {selectedService?.id === service.id ? "Hide" : "View"}
//                         </div>
//                       </div>

//                       <AnimatePresence>
//                         {selectedService?.id === service.id && (
//                           <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: "auto" }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.2 }}
//                             className="mt-4 pt-4 border-t border-gray-100"
//                           >
//                             <div className="bg-gray-50 rounded-lg p-3">
//                               <p className="text-gray-600 text-sm leading-relaxed">
//                                 {service.description}
//                               </p>
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Calendar Section - Right Side */}
//           <motion.div
//             initial={{ x: 30, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white rounded-lg border border-gray-200 p-5 h-fit sticky top-24"
//           >
//             <div className="flex items-center justify-between mb-5">
//               <button
//                 onClick={handlePrevMonth}
//                 className="w-8 h-8 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center text-gray-600"
//               >
//                 ◀
//               </button>
//               <h2 className="text-lg font-semibold text-gray-800">
//                 {new Date(year, month).toLocaleString("default", {
//                   month: "long",
//                 })}{" "}
//                 <span className="text-yellow-500">{year}</span>
//               </h2>
//               <button
//                 onClick={handleNextMonth}
//                 className="w-8 h-8 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center text-gray-600"
//               >
//                 ▶
//               </button>
//             </div>

//             <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium mb-2">
//               {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
//                 <div key={i} className="p-1.5 text-yellow-600">
//                   {day}
//                 </div>
//               ))}
//             </div>
            
//             <div className="grid grid-cols-7 gap-1 text-center">
//               {calendarDays.map((day, i) => {
//                 const isToday =
//                   day === today.getDate() &&
//                   month === today.getMonth() &&
//                   year === today.getFullYear();
                
//                 // Check if this day is 2nd Saturday for highlighting
//                 let isSecondSat = false;
//                 if (day) {
//                   const checkDate = new Date(year, month, day);
//                   isSecondSat = checkDate.getDay() === 6 && isSecondSaturday(checkDate);
//                 }
                
//                 return (
//                   <div
//                     key={i}
//                     className={`p-1.5 rounded-md transition-all duration-200 text-sm relative ${
//                       isToday
//                         ? "bg-yellow-400 text-gray-900 font-semibold"
//                         : isSecondSat
//                         ? "bg-yellow-100 text-yellow-800 font-medium"
//                         : day
//                         ? "text-gray-600 hover:bg-gray-50"
//                         : ""
//                     }`}
//                   >
//                     {day || ""}
//                     {isSecondSat && (
//                       <div className="text-[9px] text-yellow-700 mt-0.5">2nd Sat</div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Calendar Legend */}
//             <div className="mt-5 pt-3 border-t border-gray-100">
//               <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
//                 <div className="flex items-center gap-1.5">
//                   <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
//                   <span>Today</span>
//                 </div>
//                 <div className="flex items-center gap-1.5">
//                   <div className="w-2.5 h-2.5 bg-yellow-100 rounded-full border border-yellow-200"></div>
//                   <span>2nd Saturday</span>
//                 </div>
//                 <div className="flex items-center gap-1.5">
//                   <div className="w-2.5 h-2.5 bg-gray-100 rounded-full border border-gray-200"></div>
//                   <span>Regular</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderServices;

// import { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {  useEffect } from "react";
// import { getEventOnDate } from "../../services/EventService";

// const OrderServices = () => {
//   const [activeDay, setActiveDay] = useState("sunday");
//   const [selectedService, setSelectedService] = useState(null);
//   const [month, setMonth] = useState(new Date().getMonth());
//   const [year, setYear] = useState(new Date().getFullYear());
//   const contentRef = useRef(null);
//   const [currentEvent, setCurrentEvent] = useState(null);
// const [hasEvent, setHasEvent] = useState(false);

//   // Helper function to check if a given date is 2nd Saturday
//   const isSecondSaturday = (date) => {
//     const year = date.getFullYear();
//     const month = date.getMonth();
    
//     // Get all Saturdays in the month
//     const saturdays = [];
//     const lastDay = new Date(year, month + 1, 0);
    
//     for (let d = 1; d <= lastDay.getDate(); d++) {
//       const checkDate = new Date(year, month, d);
//       if (checkDate.getDay() === 6) { // 6 = Saturday
//         saturdays.push(d);
//       }
//     }
    
//     // 2nd Saturday is the second item in the array
//     const secondSaturdayDate = saturdays[1];
//     return date.getDate() === secondSaturdayDate;
//   };

//   // Add this useEffect after your existing code (around line 170)
// useEffect(() => {
//   const today = new Date();
//   const dayMap = {
//     sunday: 0, monday: 1, tuesday: 2, wednesday: 3, 
//     thursday: 4, friday: 5, saturday: 6
//   };
//   const event = getEventOnDate(today, activeDay);
//   setCurrentEvent(event);
//   setHasEvent(!!event);
// }, [activeDay]);

//   // Function to get Saturday schedule based on current date
//   const getSaturdaySchedule = () => {
//     const currentDate = new Date();
//     const isSecondSat = isSecondSaturday(currentDate);
    
//     if (isSecondSat) {
//       return [
//         {
//           id: 27,
//           name: "2nd Saturday Fasting Prayer",
//           time: "10:00 AM - 2:00 PM",
//           location: "Main Sanctuary",
//           description: "Special 2nd Saturday extended fasting prayer service. Join us for powerful prayer and fasting until 2:00 PM.",
//         },
//         {
//           id: 31,
//           name: "Evening Prayer",
//           time: "7:00 PM - 8:30 PM",
//           location: "Main Sanctuary",
//           description: "Special 2nd Saturday extended fasting prayer service. Join us for powerful prayer and fasting until 2:00 PM.",
//         },
//       ];
//     } else {
//       return [
//         {
//           id: 27,
//           name: "Morning Prayer",
//           time: "10:30 AM - 12:30 PM",
//           location: "Main Sanctuary",
//           description: "Regular Saturday prayer service.",
//         },
//         {
//           id: 29,
//           name: "Choir Practice",
//           time: "5:00 PM - 7:00 PM",
//           location: "Youth Hall",
//           description: "Special service for youth and young adults.",
//         },
//         {
//           id: 30,
//           name: "Gents Prayer",
//           time: "7:30 PM - 8:30 PM",
//           location: "Youth Hall",
//           description: "Special service for youth and young adults.",
//         },
//       ];
//     }
//   };

//   // ✅ Sample data for church services
//   const serviceSchedule = {
//     sunday: [
//       {
//         id: 1,
//         name: "First Prayer",
//         time: "8:00 AM - 8:30 AM",
//         location: "Main Sanctuary",
//         description: "Opening prayer service to start the day with devotion.",
//       },
//      {
//   id: 2,
//   name: "Second Prayer",
//   time: "8:30 AM - 10:30 AM",
//   location: "Main Sanctuary",
//   description: "Main worship service with powerful preaching and worship. 🔴 Message by: Rev. Father Abraham Mathew",  // ← ADDED
// },
//       {
//         id: 3,
//         name: "Sunday School",
//         time: "10:30 AM - 11:30 AM",
//         location: "Education Hall",
//         description: "Bible teaching session for all age groups.",
//       },
//       {
//         id: 4,
//         name: "Afternoon Service",
//         time: "2:30 PM - 3:00 PM",
//         location: "Chapel",
//         description: "Short afternoon prayer and reflection.",
//       },
//       {
//         id: 5,
//         name: "Christian End Hour",
//         time: "3:00 PM - 4:00 PM",
//         location: "Main Hall",
//         description: "Spiritual closing session with prayer and worship.",
//       },
//       {
//         id: 6,
//         name: "Home Visiting & Deacons Prayer",
//         time: "4:00 PM onwards",
//         location: "Various Homes",
//         description: "Deacons visit homes for prayer and fellowship.",
//       },
//     ],
//     monday: [
//       {
//         id: 12,
//         name: "Prayer Meeting",
//         time: "10:30 AM - 12:30 PM",
//         location: "Main Sanctuary",
//         description: "Mid-morning prayer and intercession.",
//       },
//     ],
//     tuesday: [
//       {
//         id: 15,
//         name: "Prayer Meeting",
//         time: "10:30 AM - 12:30 PM",
//         location: "Main Sanctuary",
//         description: "Daily morning prayer gathering.",
//       },
//       {
//         id: 16,
//         name: "Evening Prayer",
//         time: "7:00 PM",
//         location: "Main Sanctuary",
//         description: "Evening prayer and worship.",
//       },
//     ],
//     wednesday: [
//       {
//   id: 19,
//   name: "Prayer Meeting",
//   time: "10:30 AM - 12:30 PM",
//   location: "Main Sanctuary",
//   description: "Daily morning prayer gathering. 🔴 Message by: Rev. Father George Koshy",  // ← ADDED
// },
//       {
//         id: 20,
//         name: "Evening Prayer",
//         time: "7:00 PM - 8:00 PM",
//         location: "Main Sanctuary",
//         description: "Evening prayer and fellowship.",
//       },
//     ],
//     thursday: [
//       {
//         id: 23,
//         name: "Prayer Meeting",
//         time: "10:30 AM - 12:30 PM",
//         location: "Main Sanctuary",
//         description: "Daily morning prayer gathering.",
//       },
//     ],
//     friday: [
//       {
//   id: 25,
//   name: "Fasting Prayer",
//   time: "10:00 AM - 1:00 PM",
//   location: "Main Sanctuary",
//   description: "Special fasting prayer service. 🔴 Message by: Rev. Father Thomas Varghese",  // ← ADDED
// },
//       {
//         id: 26,
//         name: "Evening Prayer",
//         time: "7:00 PM - 8:30 PM",
//         location: "Main Sanctuary",
//         description: "Friday Evening prayer gathering.",
//       },
//     ],
//     saturday: getSaturdaySchedule(), // Dynamic Saturday schedule
//   };

//   const daysOfWeek = [
//     { id: "sunday", name: "Sunday", icon: "🙏" },
//     { id: "monday", name: "Monday", icon: "📖" },
//     { id: "tuesday", name: "Tuesday", icon: "✝️" },
//     { id: "wednesday", name: "Wednesday", icon: "🕯️" },
//     { id: "thursday", name: "Thursday", icon: "⭐" },
//     { id: "friday", name: "Friday", icon: "🕊️" },
//     { id: "saturday", name: "Saturday", icon: "🎵" },
//   ];

//   // ✅ Calendar generator function
//   const generateCalendar = (month, year) => {
//     const firstDay = new Date(year, month, 1).getDay();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const calendarDays = [];

//     for (let i = 0; i < firstDay; i++) {
//       calendarDays.push(null);
//     }
//     for (let d = 1; d <= daysInMonth; d++) {
//       calendarDays.push(d);
//     }

//     return calendarDays;
//   };

//   const calendarDays = generateCalendar(month, year);
//   const today = new Date();

//   const handlePrevMonth = () => {
//     if (month === 0) {
//       setMonth(11);
//       setYear((prev) => prev - 1);
//     } else {
//       setMonth((prev) => prev - 1);
//     }
//   };

//   const handleNextMonth = () => {
//     if (month === 11) {
//       setMonth(0);
//       setYear((prev) => prev + 1);
//     } else {
//       setMonth((prev) => prev + 1);
//     }
//   };

//   const handleScroll = () => {
//     contentRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#fce9da] to-[#f5e0cc]">
//       {/* Hero Section */}
//       <div className="relative h-screen flex flex-col items-center justify-center text-center">
//         <img
//           src="https://plus.unsplash.com/premium_photo-1678197482532-2a58a5ff084d?w=600&auto=format&fit=crop&q=60"
//           alt="Church Background"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative z-10 px-6">
//           <motion.h1
//             initial={{ y: -40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7, type: "spring" }}
//             className="text-5xl md:text-6xl font-bold mb-8 text-white"
//           >
//             Order of Services
//           </motion.h1>
//           <motion.p
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="text-lg md:text-xl max-w-2xl mx-auto text-white mb-6"
//           >
//             Experience worship, fellowship, and spiritual growth throughout the
//             week with us.
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleScroll}
//             className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300"
//           >
//             Explore Services
//           </motion.button>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div
//         ref={contentRef}
//         className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
//       >
//         {/* Days Selector - Top Row */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-wrap justify-center gap-2 mb-10"
//         >
//           {daysOfWeek.map((day) => (
//             <motion.button
//               key={day.id}
//               onClick={() => setActiveDay(day.id)}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
//                 activeDay === day.id
//                   ? "bg-yellow-400 text-gray-900"
//                   : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
//               }`}
//             >
//               <span className="text-lg">{day.icon}</span>
//               <span>{day.name}</span>
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Services and Calendar Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Services Cards - Left Side */}
//           {/* <div className="lg:col-span-2">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeDay}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.2 }}
//                 className="space-y-3"
//               >
//                 {serviceSchedule[activeDay].map((service, index) => (
//                   <motion.div
//                     key={service.id}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.2, delay: index * 0.03 }}
//                     className="bg-white rounded-lg border border-gray-200 group"
//                   >
//                     <div 
//                       className="p-5 cursor-pointer"
//                       onClick={() =>
//                         setSelectedService(
//                           selectedService?.id === service.id ? null : service
//                         )
//                       }
//                     >
//                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
//                         <div className="flex-1">
//                           <div className="flex items-center gap-2 mb-2">
//                             <div className="w-1 h-5 bg-yellow-400 rounded-full"></div>
//                             <h3 className="text-lg font-semibold text-gray-800">
//                               {service.name}
//                             </h3>
//                           </div>
//                           <div className="space-y-1 pl-3">
//                             <div className="flex items-center text-gray-500 text-sm">
//                               <span className="mr-2">🕒</span>
//                               <span>{service.time}</span>
//                             </div>
//                             <div className="flex items-center text-gray-500 text-sm">
//                               <span className="mr-2">📍</span>
//                               <span>{service.location}</span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="px-4 py-1.5 bg-gray-50 text-gray-600 rounded-md hover:bg-yellow-100 hover:text-gray-900 transition-all duration-200 text-sm font-medium">
//                           {selectedService?.id === service.id ? "Hide" : "View"}
//                         </div>
//                       </div>

//                       <AnimatePresence>
//                         {selectedService?.id === service.id && (
//                           <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: "auto" }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.2 }}
//                             className="mt-4 pt-4 border-t border-gray-100"
//                           >
//                             <div className="bg-gray-50 rounded-lg p-3">
//                               <p className="text-gray-600 text-sm leading-relaxed">
//                                 {service.description}
//                               </p>
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </AnimatePresence>
//           </div> */}
//           {/* Services Cards - Left Side */}
// <div className="lg:col-span-2">
//   <AnimatePresence mode="wait">
//     <motion.div
//       key={activeDay}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.2 }}
//       className="space-y-3"
//     >
//       {/* Show Event Notice if there's an event today */}
//       {hasEvent && currentEvent && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 mb-4"
//         >
//           <div className="flex items-center gap-2 mb-2">
//             <span className="text-2xl">
//               {currentEvent.type === 'marriage' ? '💍' : 
//                currentEvent.type === 'deaths' ? '🕊️' : '🎉'}
//             </span>
//             <h3 className="font-bold text-yellow-800">{currentEvent.name}</h3>
//           </div>
//           <p className="text-gray-700 text-sm">{currentEvent.description}</p>
//           <div className="mt-2 text-xs text-gray-500">
//             <span>📍 {currentEvent.location || 'Main Sanctuary'}</span>
//           </div>
//           <div className="mt-2 p-2 bg-yellow-100 rounded text-xs text-yellow-700">
//             ⚠️ No regular prayers today due to this event
//           </div>
//         </motion.div>
//       )}

//       {/* Show Regular Services or Event Message */}
//       {!hasEvent ? (
//         // Show regular services
//         serviceSchedule[activeDay].map((service, index) => (
//           // ... existing service card code remains the same ...
//           <motion.div
//             key={service.id}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.2, delay: index * 0.03 }}
//             className="bg-white rounded-lg border border-gray-200 group"
//           >
//             {/* Your existing service card content */}
//             <div 
//               className="p-5 cursor-pointer"
//               onClick={() =>
//                 setSelectedService(
//                   selectedService?.id === service.id ? null : service
//                 )
//               }
//             >
//               <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2 mb-2">
//                     <div className="w-1 h-5 bg-yellow-400 rounded-full"></div>
//                     <h3 className="text-lg font-semibold text-gray-800">
//                       {service.name}
//                     </h3>
//                   </div>
//                   <div className="space-y-1 pl-3">
//                     <div className="flex items-center text-gray-500 text-sm">
//                       <span className="mr-2">🕒</span>
//                       <span>{service.time}</span>
//                     </div>
//                     <div className="flex items-center text-gray-500 text-sm">
//                       <span className="mr-2">📍</span>
//                       <span>{service.location}</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="px-4 py-1.5 bg-gray-50 text-gray-600 rounded-md hover:bg-yellow-100 hover:text-gray-900 transition-all duration-200 text-sm font-medium">
//                   {selectedService?.id === service.id ? "Hide" : "View"}
//                 </div>
//               </div>

//               <AnimatePresence>
//                 {selectedService?.id === service.id && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.2 }}
//                     className="mt-4 pt-4 border-t border-gray-100"
//                   >
//                     <div className="bg-gray-50 rounded-lg p-3">
//                       <p className="text-gray-600 text-sm leading-relaxed">
//                         {service.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         ))
//       ) : (
//         // Show message that regular services are replaced
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="bg-white rounded-lg border border-gray-200 p-8 text-center"
//         >
//           <div className="text-6xl mb-4">
//             {currentEvent?.type === 'marriage' ? '💍' : 
//              currentEvent?.type === 'deaths' ? '🕊️' : '🎉'}
//           </div>
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">
//             {currentEvent?.name}
//           </h3>
//           <p className="text-gray-600 mb-4">
//             Regular {activeDay} prayers are cancelled due to this special event.
//           </p>
//           <div className="bg-yellow-50 rounded-lg p-4 inline-block">
//             <p className="text-sm text-gray-600">{currentEvent?.description}</p>
//             <p className="text-xs text-gray-500 mt-2">
//               Please join us in celebrating/remembering this occasion
//             </p>
//           </div>
//         </motion.div>
//       )}
//     </motion.div>
//   </AnimatePresence>
// </div>

//           {/* Calendar Section - Right Side */}
//           <motion.div
//             initial={{ x: 30, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white rounded-lg border border-gray-200 p-5 h-fit sticky top-24"
//           >
//             <div className="flex items-center justify-between mb-5">
//               <button
//                 onClick={handlePrevMonth}
//                 className="w-8 h-8 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center text-gray-600"
//               >
//                 ◀
//               </button>
//               <h2 className="text-lg font-semibold text-gray-800">
//                 {new Date(year, month).toLocaleString("default", {
//                   month: "long",
//                 })}{" "}
//                 <span className="text-yellow-500">{year}</span>
//               </h2>
//               <button
//                 onClick={handleNextMonth}
//                 className="w-8 h-8 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center text-gray-600"
//               >
//                 ▶
//               </button>
//             </div>

//             <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium mb-2">
//               {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
//                 <div key={i} className="p-1.5 text-yellow-600">
//                   {day}
//                 </div>
//               ))}
//             </div>
            
//             <div className="grid grid-cols-7 gap-1 text-center">
//               {calendarDays.map((day, i) => {
//                 const isToday =
//                   day === today.getDate() &&
//                   month === today.getMonth() &&
//                   year === today.getFullYear();
                
//                 // Check if this day is 2nd Saturday for highlighting
//                 let isSecondSat = false;
//                 if (day) {
//                   const checkDate = new Date(year, month, day);
//                   isSecondSat = checkDate.getDay() === 6 && isSecondSaturday(checkDate);
//                 }
                
//                 return (
//                   <div
//                     key={i}
//                     className={`p-1.5 rounded-md transition-all duration-200 text-sm relative ${
//                       isToday
//                         ? "bg-yellow-400 text-gray-900 font-semibold"
//                         : isSecondSat
//                         ? "bg-yellow-100 text-yellow-800 font-medium"
//                         : day
//                         ? "text-gray-600 hover:bg-gray-50"
//                         : ""
//                     }`}
//                   >
//                     {day || ""}
//                     {isSecondSat && (
//                       <div className="text-[9px] text-yellow-700 mt-0.5">2nd Sat</div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Calendar Legend */}
//             <div className="mt-5 pt-3 border-t border-gray-100">
//               <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
//                 <div className="flex items-center gap-1.5">
//                   <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
//                   <span>Today</span>
//                 </div>
//                 <div className="flex items-center gap-1.5">
//                   <div className="w-2.5 h-2.5 bg-yellow-100 rounded-full border border-yellow-200"></div>
//                   <span>2nd Saturday</span>
//                 </div>
//                 <div className="flex items-center gap-1.5">
//                   <div className="w-2.5 h-2.5 bg-gray-100 rounded-full border border-gray-200"></div>
//                   <span>Regular</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderServices;

// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { getEventOnDate } from "../service/EventService";

// const OrderServices = () => {
//   const [activeDay, setActiveDay] = useState("sunday");
//   const [selectedService, setSelectedService] = useState(null);
//   const [month, setMonth] = useState(new Date().getMonth());
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [selectedDate, setSelectedDate] = useState(new Date()); // Track selected date
//   const contentRef = useRef(null);
//   const [currentEvent, setCurrentEvent] = useState(null);
//   const [hasEvent, setHasEvent] = useState(false);
 

//   // Helper function to check if a given date is 2nd Saturday
//   const isSecondSaturday = (date) => {
//     const year = date.getFullYear();
//     const month = date.getMonth();
    
//     const saturdays = [];
//     const lastDay = new Date(year, month + 1, 0);
    
//     for (let d = 1; d <= lastDay.getDate(); d++) {
//       const checkDate = new Date(year, month, d);
//       if (checkDate.getDay() === 6) {
//         saturdays.push(d);
//       }
//     }
    
//     const secondSaturdayDate = saturdays[1];
//     return date.getDate() === secondSaturdayDate;
//   };

//   // Function to get day name from date
//   const getDayNameFromDate = (date) => {
//     const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//     return days[date.getDay()];
//   };

//   // Function to get Saturday schedule based on selected date
//   const getSaturdayScheduleForDate = (date) => {
//     const isSecondSat = isSecondSaturday(date);
    
//     if (isSecondSat) {
//       return [
//         {
//           id: 27,
//           name: "2nd Saturday Fasting Prayer",
//           time: "10:00 AM - 2:00 PM",
//           location: "Main Sanctuary",
//           description: "Special 2nd Saturday extended fasting prayer service. Join us for powerful prayer and fasting until 2:00 PM.",
//         },
//         {
//           id: 31,
//           name: "Evening Prayer",
//           time: "7:00 PM - 8:30 PM",
//           location: "Main Sanctuary",
//           description: "Special 2nd Saturday extended fasting prayer service.",
//         },
//       ];
//     } else {
//       return [
//         {
//           id: 27,
//           name: "Morning Prayer",
//           time: "10:30 AM - 12:30 PM",
//           location: "Main Sanctuary",
//           description: "Regular Saturday prayer service.",
//         },
//         {
//           id: 29,
//           name: "Choir Practice",
//           time: "5:00 PM - 7:00 PM",
//           location: "Youth Hall",
//           description: "Special service for youth and young adults.",
//         },
//         {
//           id: 30,
//           name: "Gents Prayer",
//           time: "7:30 PM - 8:30 PM",
//           location: "Youth Hall",
//           description: "Special service for youth and young adults.",
//         },
//       ];
//     }
//   };

//   // Dynamic service schedule based on selected date
//   const getServiceSchedule = (date) => {
//     const dayName = getDayNameFromDate(date);
    
//     const baseSchedule = {
//       sunday: [
//         {
//           id: 1,
//           name: "First Prayer",
//           time: "8:00 AM - 8:30 AM",
//           location: "Main Sanctuary",
//           description: "Opening prayer service to start the day with devotion.",
//         },
//         {
//           id: 2,
//           name: "Second Prayer",
//           time: "8:30 AM - 10:30 AM",
//           location: "Main Sanctuary",
//           description: "Main worship service with powerful preaching and worship. Message by: Rev. Father Abraham Mathew",
//         },
//         {
//           id: 3,
//           name: "Sunday School",
//           time: "10:30 AM - 11:30 AM",
//           location: "Education Hall",
//           description: "Bible teaching session for all age groups.",
//         },
//         {
//           id: 4,
//           name: "Afternoon Service",
//           time: "2:30 PM - 3:00 PM",
//           location: "Chapel",
//           description: "Short afternoon prayer and reflection.",
//         },
//         {
//           id: 5,
//           name: "Christian End Hour",
//           time: "3:00 PM - 4:00 PM",
//           location: "Main Hall",
//           description: "Spiritual closing session with prayer and worship.",
//         },
//         {
//           id: 6,
//           name: "Home Visiting & Deacons Prayer",
//           time: "4:00 PM onwards",
//           location: "Various Homes",
//           description: "Deacons visit homes for prayer and fellowship.",
//         },
//       ],
//       monday: [
//         {
//           id: 12,
//           name: "Prayer Meeting",
//           time: "10:30 AM - 12:30 PM",
//           location: "Main Sanctuary",
//           description: "Mid-morning prayer and intercession.",
//         },
//       ],
//       tuesday: [
//         {
//           id: 15,
//           name: "Prayer Meeting",
//           time: "10:30 AM - 12:30 PM",
//           location: "Main Sanctuary",
//           description: "Daily morning prayer gathering.",
//         },
//         {
//           id: 16,
//           name: "Evening Prayer",
//           time: "7:00 PM",
//           location: "Main Sanctuary",
//           description: "Evening prayer and worship.",
//         },
//       ],
//       wednesday: [
//         {
//           id: 19,
//           name: "Prayer Meeting",
//           time: "10:30 AM - 12:30 PM",
//           location: "Main Sanctuary",
//           description: "Daily morning prayer gathering. Message by: Rev. Father George Koshy",
//         },
//         {
//           id: 20,
//           name: "Evening Prayer",
//           time: "7:00 PM - 8:00 PM",
//           location: "Main Sanctuary",
//           description: "Evening prayer and fellowship.",
//         },
//       ],
//       thursday: [
//         {
//           id: 23,
//           name: "Prayer Meeting",
//           time: "10:30 AM - 12:30 PM",
//           location: "Main Sanctuary",
//           description: "Daily morning prayer gathering.",
//         },
//       ],
//       friday: [
//         {
//           id: 25,
//           name: "Fasting Prayer",
//           time: "10:00 AM - 1:00 PM",
//           location: "Main Sanctuary",
//           description: "Special fasting prayer service. Message by: Rev. Father Thomas Varghese",
//         },
//         {
//           id: 26,
//           name: "Evening Prayer",
//           time: "7:00 PM - 8:30 PM",
//           location: "Main Sanctuary",
//           description: "Friday Evening prayer gathering.",
//         },
//       ],
//       saturday: getSaturdayScheduleForDate(date),
//     };
    
//     return baseSchedule[dayName] || [];
//   };

//   const [currentServices, setCurrentServices] = useState([]);

//   // Update everything when selected date or active day changes
//   useEffect(() => {
//     const dayName = getDayNameFromDate(selectedDate);
//     setActiveDay(dayName);
    
//     // Get services for the selected date
//     const services = getServiceSchedule(selectedDate);
//     setCurrentServices(services);
    
//     // Check for events on the selected date
//     const event = getEventOnDate(selectedDate, dayName);
//     setCurrentEvent(event);
//     setHasEvent(!!event);
//   }, [selectedDate]);

//   const daysOfWeek = [
//     { id: "sunday", name: "Sunday", icon: "🙏" },
//     { id: "monday", name: "Monday", icon: "📖" },
//     { id: "tuesday", name: "Tuesday", icon: "✝️" },
//     { id: "wednesday", name: "Wednesday", icon: "🕯️" },
//     { id: "thursday", name: "Thursday", icon: "⭐" },
//     { id: "friday", name: "Friday", icon: "🕊️" },
//     { id: "saturday", name: "Saturday", icon: "🎵" },
//   ];

//   // Calendar generator function
//   const generateCalendar = (month, year) => {
//     const firstDay = new Date(year, month, 1).getDay();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const calendarDays = [];

//     for (let i = 0; i < firstDay; i++) {
//       calendarDays.push(null);
//     }
//     for (let d = 1; d <= daysInMonth; d++) {
//       calendarDays.push(d);
//     }

//     return calendarDays;
//   };

//   const calendarDays = generateCalendar(month, year);
//   const today = new Date();

//   const handlePrevMonth = () => {
//     if (month === 0) {
//       setMonth(11);
//       setYear((prev) => prev - 1);
//     } else {
//       setMonth((prev) => prev - 1);
//     }
//   };

//   const handleNextMonth = () => {
//     if (month === 11) {
//       setMonth(0);
//       setYear((prev) => prev + 1);
//     } else {
//       setMonth((prev) => prev + 1);
//     }
//   };

//   // Handle date selection from calendar
//   const handleDateSelect = (day) => {
//     if (day) {
//       const newDate = new Date(year, month, day);
//       setSelectedDate(newDate);
//     }
//   };

//   const handleScroll = () => {
//     contentRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Format date for display
//   const formatSelectedDate = () => {
//     return selectedDate.toLocaleDateString('en-US', { 
//       weekday: 'long', 
//       year: 'numeric', 
//       month: 'long', 
//       day: 'numeric' 
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#fce9da] to-[#f5e0cc]">
//       {/* Hero Section */}
//       <div className="relative h-screen flex flex-col items-center justify-center text-center">
//         <img
//           src="https://plus.unsplash.com/premium_photo-1678197482532-2a58a5ff084d?w=600&auto=format&fit=crop&q=60"
//           alt="Church Background"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative z-10 px-6">
//           <motion.h1
//             initial={{ y: -40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7, type: "spring" }}
//             className="text-5xl md:text-6xl font-bold mb-8 text-white"
//           >
//             Order of Services
//           </motion.h1>
//           <motion.p
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="text-lg md:text-xl max-w-2xl mx-auto text-white mb-6"
//           >
//             Experience worship, fellowship, and spiritual growth throughout the
//             week with us.
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleScroll}
//             className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300"
//           >
//             Explore Services
//           </motion.button>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div
//         ref={contentRef}
//         className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
//       >
//         {/* Selected Date Display */}
//         {/* <div className="text-center mb-6">
//           <p className="text-gray-600 text-sm">Showing services for:</p>
//           <p className="text-xl font-semibold text-gray-800">{formatSelectedDate()}</p>
//         </div> */}

//         {/* Days Selector - Top Row */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-wrap justify-center gap-2 mb-10"
//         >
//           {daysOfWeek.map((day) => (
//             <motion.button
//               key={day.id}
//               onClick={() => {
//                 // When clicking a day button, find the next occurrence of that day
//                 const currentDate = new Date(selectedDate);
//                 const currentDay = currentDate.getDay();
//                 const targetDay = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].indexOf(day.id);
//                 let daysToAdd = targetDay - currentDay;
//                 if (daysToAdd <= 0) daysToAdd += 7;
//                 currentDate.setDate(currentDate.getDate() + daysToAdd);
//                 setSelectedDate(currentDate);
//               }}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
//                 activeDay === day.id
//                   ? "bg-yellow-400 text-gray-900"
//                   : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
//               }`}
//             >
//               <span className="text-lg">{day.icon}</span>
//               <span>{day.name}</span>
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Services and Calendar Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Services Cards - Left Side */}
//           <div className="lg:col-span-2">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={selectedDate.toISOString()}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.2 }}
//                 className="space-y-3"
//               >
//                 {/* Show Event Notice if there's an event on selected date */}
//                 {hasEvent && currentEvent && (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 mb-4"
//                   >
//                     <div className="flex items-center gap-2 mb-2">
//                       <span className="text-2xl">
//                         {currentEvent.type === 'marriage' ? '💍' : 
//                          currentEvent.type === 'deaths' ? '🕊️' : '🎉'}
//                       </span>
//                       <h3 className="font-bold text-yellow-800">{currentEvent.name}</h3>
//                     </div>
//                     <p className="text-gray-700 text-sm">{currentEvent.description}</p>
//                     <div className="mt-2 text-xs text-gray-500">
//                       <span>📍 {currentEvent.location || 'Main Sanctuary'}</span>
//                     </div>
//                     <div className="mt-2 p-2 bg-yellow-100 rounded text-xs text-yellow-700">
//                       ⚠️ No regular prayers on this day due to this event
//                     </div>
//                   </motion.div>
//                 )}

//                 {/* Show Regular Services or Event Message */}
//                 {!hasEvent ? (
//                   currentServices.map((service, index) => (
//                     <motion.div
//                       key={service.id}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.2, delay: index * 0.03 }}
//                       className="bg-white rounded-lg border border-gray-200 group"
//                     >
//                       <div 
//                         className="p-5 cursor-pointer"
//                         onClick={() =>
//                           setSelectedService(
//                             selectedService?.id === service.id ? null : service
//                           )
//                         }
//                       >
//                         <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
//                           <div className="flex-1">
//                             <div className="flex items-center gap-2 mb-2">
//                               <div className="w-1 h-5 bg-yellow-400 rounded-full"></div>
//                               <h3 className="text-lg font-semibold text-gray-800">
//                                 {service.name}
//                               </h3>
//                             </div>
//                             <div className="space-y-1 pl-3">
//                               <div className="flex items-center text-gray-500 text-sm">
//                                 <span className="mr-2">🕒</span>
//                                 <span>{service.time}</span>
//                               </div>
//                               <div className="flex items-center text-gray-500 text-sm">
//                                 <span className="mr-2">📍</span>
//                                 <span>{service.location}</span>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="px-4 py-1.5 bg-gray-50 text-gray-600 rounded-md hover:bg-yellow-100 hover:text-gray-900 transition-all duration-200 text-sm font-medium">
//                             {selectedService?.id === service.id ? "Hide" : "View"}
//                           </div>
//                         </div>

//                         <AnimatePresence>
//                           {selectedService?.id === service.id && (
//                             <motion.div
//                               initial={{ opacity: 0, height: 0 }}
//                               animate={{ opacity: 1, height: "auto" }}
//                               exit={{ opacity: 0, height: 0 }}
//                               transition={{ duration: 0.2 }}
//                               className="mt-4 pt-4 border-t border-gray-100"
//                             >
//                               <div className="bg-gray-50 rounded-lg p-3">
//                                 <p className="text-gray-600 text-sm leading-relaxed">
//                                   {service.description}
//                                 </p>
//                               </div>
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     </motion.div>
//                   ))
//                 ) : (
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="bg-white rounded-lg border border-gray-200 p-8 text-center"
//                   >
//                     <div className="text-6xl mb-4">
//                       {currentEvent?.type === 'marriage' ? '💍' : 
//                        currentEvent?.type === 'deaths' ? '🕊️' : '🎉'}
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                       {currentEvent?.name}
//                     </h3>
//                     <p className="text-gray-600 mb-4">
//                       Regular {activeDay} prayers are cancelled due to this special event.
//                     </p>
//                     <div className="bg-yellow-50 rounded-lg p-4 inline-block">
//                       <p className="text-sm text-gray-600">{currentEvent?.description}</p>
//                       <p className="text-xs text-gray-500 mt-2">
//                         Please join us in celebrating/remembering this occasion
//                       </p>
//                     </div>
//                   </motion.div>
//                 )}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Calendar Section - Right Side - Interactive */}
//           <motion.div
//             initial={{ x: 30, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white rounded-lg border border-gray-200 p-5 h-fit sticky top-24"
//           >
//             <div className="flex items-center justify-between mb-5">
//               <button
//                 onClick={handlePrevMonth}
//                 className="w-8 h-8 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center text-gray-600"
//               >
//                 ◀
//               </button>
//               <h2 className="text-lg font-semibold text-gray-800">
//                 {new Date(year, month).toLocaleString("default", {
//                   month: "long",
//                 })}{" "}
//                 <span className="text-yellow-500">{year}</span>
//               </h2>
//               <button
//                 onClick={handleNextMonth}
//                 className="w-8 h-8 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center text-gray-600"
//               >
//                 ▶
//               </button>
//             </div>

//             <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium mb-2">
//               {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
//                 <div key={i} className="p-1.5 text-yellow-600">
//                   {day}
//                 </div>
//               ))}
//             </div>
            
//             <div className="grid grid-cols-7 gap-1 text-center">
//               {calendarDays.map((day, i) => {
//                 const isSelected = day === selectedDate.getDate() && 
//                                   month === selectedDate.getMonth() && 
//                                   year === selectedDate.getFullYear();
//                 const isToday = day === today.getDate() &&
//                   month === today.getMonth() &&
//                   year === today.getFullYear();
                
//                 let isSecondSat = false;
//                 if (day) {
//                   const checkDate = new Date(year, month, day);
//                   isSecondSat = checkDate.getDay() === 6 && isSecondSaturday(checkDate);
//                 }
                
//                 return (
//                   <button
//                     key={i}
//                     onClick={() => handleDateSelect(day)}
//                     className={`p-1.5 rounded-md transition-all duration-200 text-sm relative cursor-pointer hover:scale-105 ${
//                       isSelected
//                         ? "bg-yellow-200 text-white font-semibold shadow-md"
//                         : isToday
//                         ? "bg-yellow-400 text-gray-900 font-semibold"
//                         : isSecondSat
//                         ? "bg-yellow-100 text-yellow-800 font-medium"
//                         : day
//                         ? "text-gray-600 hover:bg-gray-50"
//                         : ""
//                     }`}
//                   >
//                     {day || ""}
//                     {isSecondSat && !isSelected && (
//                       <div className="text-[9px] text-yellow-700 mt-0.5">2nd Sat</div>
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Calendar Legend */}
//             <div className="mt-5 pt-3 border-t border-gray-100">
//               <div className="flex items-center justify-center gap-4 text-xs text-gray-500 flex-wrap">
//                 <div className="flex items-center gap-1.5">
//                   <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
//                   <span>Selected</span>
//                 </div>
//                 <div className="flex items-center gap-1.5">
//                   <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
//                   <span>Today</span>
//                 </div>
//                 <div className="flex items-center gap-1.5">
//                   <div className="w-2.5 h-2.5 bg-yellow-100 rounded-full border border-yellow-200"></div>
//                   <span>2nd Saturday</span>
//                 </div>
//                 <div className="flex items-center gap-1.5">
//                   <div className="w-2.5 h-2.5 bg-gray-100 rounded-full border border-gray-200"></div>
//                   <span>Regular</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderServices;

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; // Adjust path as needed

const OrderServices = () => {
  const [activeDay, setActiveDay] = useState("sunday");
  const [selectedService, setSelectedService] = useState(null);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const contentRef = useRef(null);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [hasEvent, setHasEvent] = useState(false);
  const [services, setServices] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load services and events from Firebase
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    await Promise.all([loadServices(), loadEvents()]);
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
    } catch (error) {
      console.error("Error loading services:", error);
    }
  };

  const loadEvents = async () => {
    try {
      const snap = await getDocs(collection(db, "events"));
      const data = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("✅ Loaded events:", data);
      setEvents(data);
    } catch (error) {
      console.error("Error loading events:", error);
    }
  };

  // Helper function to check if a given date is 2nd Saturday
  const isSecondSaturday = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    const saturdays = [];
    const lastDay = new Date(year, month + 1, 0);
    
    for (let d = 1; d <= lastDay.getDate(); d++) {
      const checkDate = new Date(year, month, d);
      if (checkDate.getDay() === 6) {
        saturdays.push(d);
      }
    }
    
    const secondSaturdayDate = saturdays[1];
    return date.getDate() === secondSaturdayDate;
  };

  // Function to get day name from date
  const getDayNameFromDate = (date) => {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return days[date.getDay()];
  };

  // Check if there's an event on a specific date
  const checkEventOnDate = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    const dayName = getDayNameFromDate(date);
    
    // Find event that matches either exact date OR section matches day
    const event = events.find(event => {
      // Check if event date matches
      if (event.date === dateStr) return true;
      
      // Check if event section matches the day (for recurring events)
      const eventSection = event.section?.toLowerCase() || "";
      if (eventSection === dayName) return true;
      
      return false;
    });
    
    return event || null;
  };

  // Get services for a specific day from Firebase
  const getServicesForDay = (day) => {
    const dayServices = services.filter(service => 
      service.day?.toLowerCase() === day.toLowerCase()
    );
    
    // Sort services by time if available
    return dayServices.sort((a, b) => {
      if (a.time && b.time) {
        return a.time.localeCompare(b.time);
      }
      return 0;
    });
  };

  // Get Saturday services (handles 2nd Saturday)
  const getSaturdayServices = (date) => {
    const isSecondSat = isSecondSaturday(date);
    const allSaturdayServices = getServicesForDay("saturday");
    
    if (isSecondSat) {
      // Filter services marked for 2nd Saturday
      const secondSatServices = allSaturdayServices.filter(s => 
        s.isSecondSaturday === true || 
        s.name?.toLowerCase().includes("2nd") ||
        s.name?.toLowerCase().includes("second")
      );
      
      return secondSatServices;
    }
    
    // Regular Saturday services (not 2nd Saturday)
    const regularSatServices = allSaturdayServices.filter(s => 
      s.isSecondSaturday !== true && 
      !s.name?.toLowerCase().includes("2nd") &&
      !s.name?.toLowerCase().includes("second")
    );
    
    return regularSatServices;
  };

  // Main function to get services for selected date
  const getCurrentServices = () => {
    const dayName = getDayNameFromDate(selectedDate);
    
    // Check for event first
    const event = checkEventOnDate(selectedDate);
    if (event) {
      setHasEvent(true);
      setCurrentEvent(event);
      return []; // No services when there's an event
    }
    
    setHasEvent(false);
    setCurrentEvent(null);
    
    // Get services from Firebase
    if (dayName === "saturday") {
      return getSaturdayServices(selectedDate);
    }
    
    return getServicesForDay(dayName);
  };

  const [currentServices, setCurrentServices] = useState([]);

  // Update everything when selected date changes
  useEffect(() => {
    if (!loading) {
      const dayName = getDayNameFromDate(selectedDate);
      setActiveDay(dayName);
      
      const services = getCurrentServices();
      setCurrentServices(services);
    }
  }, [selectedDate, loading, services, events]);

  const daysOfWeek = [
    { id: "sunday", name: "Sunday", icon: "🙏" },
    { id: "monday", name: "Monday", icon: "📖" },
    { id: "tuesday", name: "Tuesday", icon: "✝️" },
    { id: "wednesday", name: "Wednesday", icon: "🕯️" },
    { id: "thursday", name: "Thursday", icon: "⭐" },
    { id: "friday", name: "Friday", icon: "🕊️" },
    { id: "saturday", name: "Saturday", icon: "🎵" },
  ];

  // Calendar generator function
  const generateCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      calendarDays.push(d);
    }

    return calendarDays;
  };

  const calendarDays = generateCalendar(month, year);
  const today = new Date();

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  // Handle date selection from calendar
  const handleDateSelect = (day) => {
    if (day) {
      const newDate = new Date(year, month, day);
      setSelectedDate(newDate);
    }
  };

  const handleScroll = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Check if a date has an event (for calendar highlighting)
  const hasEventOnDate = (day) => {
    if (!day) return false;
    const checkDate = new Date(year, month, day);
    const dateStr = checkDate.toISOString().split('T')[0];
    const dayName = getDayNameFromDate(checkDate);
    
    return events.some(event => 
      event.date === dateStr || 
      event.section?.toLowerCase() === dayName
    );
  };

  // Check if a date has services
  const hasServicesOnDate = (day) => {
    if (!day) return false;
    const checkDate = new Date(year, month, day);
    const dayName = getDayNameFromDate(checkDate);
    
    if (dayName === "saturday") {
      const isSecondSat = isSecondSaturday(checkDate);
      const satServices = getServicesForDay("saturday");
      
      if (isSecondSat) {
        return satServices.some(s => 
          s.isSecondSaturday === true || 
          s.name?.toLowerCase().includes("2nd")
        );
      }
      return satServices.some(s => 
        s.isSecondSaturday !== true && 
        !s.name?.toLowerCase().includes("2nd")
      );
    }
    
    return getServicesForDay(dayName).length > 0;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fce9da] to-[#f5e0cc]">
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col items-center justify-center text-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1678197482532-2a58a5ff084d?w=600&auto=format&fit=crop&q=60"
          alt="Church Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="text-5xl md:text-6xl font-bold mb-8 text-white"
          >
            Order of Services
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-white mb-6"
          >
            Experience worship, fellowship, and spiritual growth throughout the
            week with us.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScroll}
            className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300"
          >
            Explore Services
          </motion.button>
        </div>
      </div>

      {/* Content Section */}
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      >
        {/* Days Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {daysOfWeek.map((day) => (
            <motion.button
              key={day.id}
              onClick={() => {
                const currentDate = new Date(selectedDate);
                const currentDay = currentDate.getDay();
                const targetDay = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].indexOf(day.id);
                let daysToAdd = targetDay - currentDay;
                if (daysToAdd <= 0) daysToAdd += 7;
                currentDate.setDate(currentDate.getDate() + daysToAdd);
                setSelectedDate(currentDate);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
                activeDay === day.id
                  ? "bg-yellow-400 text-gray-900"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <span className="text-lg">{day.icon}</span>
              <span>{day.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Services and Calendar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services Cards - Left Side */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDate.toISOString()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {/* Show Event Notice if there's an event on selected date */}
                {hasEvent && currentEvent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 mb-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">
                        {currentEvent.section?.toLowerCase().includes("marriage") ? '💍' : 
                         currentEvent.section?.toLowerCase().includes("death") ? '🕊️' : '🎉'}
                      </span>
                      <h3 className="font-bold text-yellow-800">{currentEvent.title || currentEvent.name}</h3>
                    </div>
                    <p className="text-gray-700 text-sm">{currentEvent.description}</p>
                    <div className="mt-2 text-xs text-gray-500">
                      <span>📅 Date: {currentEvent.date}</span>
                    </div>
                    {currentEvent.image && (
                      <div className="mt-3">
                        <img 
                          src={currentEvent.image} 
                          alt={currentEvent.title}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                      </div>
                    )}
                    <div className="mt-3 p-2 bg-yellow-100 rounded text-xs text-yellow-700">
                      ⚠️ No regular services on this day due to this event
                    </div>
                  </motion.div>
                )}

                {/* Show Services */}
                {!hasEvent && currentServices.length > 0 && (
                  currentServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.03 }}
                      className="bg-white rounded-lg border border-gray-200 group"
                    >
                      <div 
                        className="p-5 cursor-pointer"
                        onClick={() =>
                          setSelectedService(
                            selectedService?.id === service.id ? null : service
                          )
                        }
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-1 h-5 bg-yellow-400 rounded-full"></div>
                              <h3 className="text-lg font-semibold text-gray-800">
                                {service.name}
                              </h3>
                            </div>
                            <div className="space-y-1 pl-3">
                              <div className="flex items-center text-gray-500 text-sm">
                                <span className="mr-2">🕒</span>
                                <span>{service.time}</span>
                              </div>
                              <div className="flex items-center text-gray-500 text-sm">
                                <span className="mr-2">📍</span>
                                <span>{service.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="px-4 py-1.5 bg-gray-50 text-gray-600 rounded-md hover:bg-yellow-100 hover:text-gray-900 transition-all duration-200 text-sm font-medium">
                            {selectedService?.id === service.id ? "Hide" : "View Details"}
                          </div>
                        </div>

                        <AnimatePresence>
                          {selectedService?.id === service.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-4 pt-4 border-t border-gray-100"
                            >
                              <div className="bg-gray-50 rounded-lg p-3">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {service.description || "No description available"}
                                </p>
                                {service.requiresFather && service.fatherName && (
                                  <p className="text-gray-600 text-sm mt-2">
                                    <strong>Father:</strong> {service.fatherName}
                                  </p>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))
                )}

                {/* No Services and No Event Message */}
                {!hasEvent && currentServices.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-lg border border-gray-200 p-8 text-center"
                  >
                    <div className="text-6xl mb-4">📅</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      No Services Scheduled
                    </h3>
                    <p className="text-gray-600">
                      There are no services scheduled for {getDayNameFromDate(selectedDate)} on this date.
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Please check back later or select another day.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Calendar Section - Right Side */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg border border-gray-200 p-5 h-fit sticky top-24"
          >
            <div className="flex items-center justify-between mb-5">
              <button
                onClick={handlePrevMonth}
                className="w-8 h-8 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center text-gray-600"
              >
                ◀
              </button>
              <h2 className="text-lg font-semibold text-gray-800">
                {new Date(year, month).toLocaleString("default", {
                  month: "long",
                })}{" "}
                <span className="text-yellow-500">{year}</span>
              </h2>
              <button
                onClick={handleNextMonth}
                className="w-8 h-8 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center text-gray-600"
              >
                ▶
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium mb-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                <div key={i} className="p-1.5 text-yellow-600">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center">
              {calendarDays.map((day, i) => {
                const isSelected = day === selectedDate.getDate() && 
                                  month === selectedDate.getMonth() && 
                                  year === selectedDate.getFullYear();
                const isToday = day === today.getDate() &&
                  month === today.getMonth() &&
                  year === today.getFullYear();
                const hasEvent = day ? hasEventOnDate(day) : false;
                const hasService = day ? hasServicesOnDate(day) : false;
                
                let isSecondSat = false;
                if (day) {
                  const checkDate = new Date(year, month, day);
                  isSecondSat = checkDate.getDay() === 6 && isSecondSaturday(checkDate);
                }
                
                return (
                  <button
                    key={i}
                    onClick={() => handleDateSelect(day)}
                    className={`p-1.5 rounded-md transition-all duration-200 text-sm relative cursor-pointer hover:scale-105 ${
                      isSelected
                        ? "bg-yellow-500 text-white font-semibold shadow-md"
                        : isToday
                        ? "bg-yellow-400 text-gray-900 font-semibold"
                        : hasEvent
                        ? "bg-purple-100 text-purple-800 font-medium"
                        : hasService
                        ? "bg-green-50 text-green-700"
                        : day
                        ? "text-gray-600 hover:bg-gray-50"
                        : ""
                    }`}
                  >
                    {day || ""}
                    {hasEvent && !isSelected && (
                      <div className="text-[8px] text-purple-600 mt-0.5">Event</div>
                    )}
                    {isSecondSat && !hasEvent && !isSelected && (
                      <div className="text-[8px] text-yellow-600 mt-0.5">2nd Sat</div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Calendar Legend */}
            <div className="mt-5 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-center gap-4 text-xs text-gray-500 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                  <span>Selected</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                  <span>Today</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 bg-green-50 rounded-full border border-green-300"></div>
                  <span>Has Services</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 bg-purple-100 rounded-full border border-purple-300"></div>
                  <span>Has Event</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrderServices;