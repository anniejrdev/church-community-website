// import React from "react";
// import { motion } from "framer-motion";
// import { FaChurch, FaBookBible, FaPeopleGroup } from "react-icons/fa6";
// import gold from "../../assets/svg/gold-gradient-line.svg";

// const OrderOfServices = () => {
//   const services = [
//     {
//       time: "07:00 AM",
//       title: "Morning Prayer",
//       desc: "Start your day with blessings and peace through our daily morning prayer.",
//       //   icon: <FaPray className="text-xl" />,
//     },
//     {
//       time: "09:30 AM",
//       title: "Sunday Worship",
//       desc: "Join us for worship, gospel, and fellowship with the community.",
//       //   icon: <FaChurch className="text-xl" />,
//     },
//     {
//       time: "11:00 AM",
//       title: "Bible Study",
//       desc: "Deep dive into the scriptures and understand the Word of God together.",
//       //   icon: <FaBookBible className="text-xl" />,
//     },
//     {
//       time: "12:00 PM",
//       title: "Youth Fellowship",
//       desc: "Special service for our youth community with contemporary worship.",
//       //   icon: <FaPeopleGroup className="text-xl" />,
//     },
//     {
//       time: "03:00 PM",
//       title: "Bible Study (Advanced)",
//       desc: "In-depth analysis of scripture for those looking to deepen their understanding.",
//       //   icon: <FaBookBible className="text-xl" />,
//     },
//     {
//       time: "06:00 PM",
//       title: "Evening Service",
//       desc: "Conclude the day with soulful hymns, prayers, and inspirational preaching.",
//       //   icon: <FaPray className="text-xl" />,
//     },
//   ];

//   return (
//     <section className="relative py-16 px-6 text-white overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-fixed"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1705627659700-59ec7d5ee3b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGNodXJjaCUyMGltYWdlcyUyMHN0YWdlJTIwc2luZ2luZ3xlbnwwfHwwfHx8MA%3D%3D')",
//           }}
//         ></div>
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <motion.div
//             initial={{ scale: 0.8 }}
//             whileInView={{ scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border-white/20 mb-6"
//           >
//             <FaChurch className="text-4xl text-white" />
//           </motion.div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-1 tracking-wide">
//             Order of Services
//           </h2>
//           <div className="flex justify-center items-center">
//             <img src={gold} alt="" className="w-48" />
//           </div>
//           <p className="mt-10 text-gray-100 max-w-2xl mx-auto text-lg">
//             Here's today's schedule for worship, prayer, and fellowship at our
//             church.
//           </p>
//         </motion.div>

//         {/* Time Table */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="relative flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl bg-white/5 backdrop-blur-lg border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 group"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//             >
//               {/* Decorative corner elements */}
//               <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//               <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//               <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//               <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

//               <div className="flex justify-center items-center w-full md:w-auto">
//                 <div className="flex-shrink-0  relative">
//                   <div className="absolute -inset-2 rounded-full blur  transition-all"></div>
//                   <div className="relative flex items-center justify-center w-18 h-18 rounded-full bg-gray-900/80 font-bold shadow-lg">
//                     <span className="text-sm font-bold">{service.time}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex-1">
//                 <div className="flex items-center gap-3 mb-2">
//                   {/* <span className="text-amber-500">{service.icon}</span> */}
//                   <h3 className="text-xl font-semibold text-white">
//                     {service.title}
//                   </h3>
//                 </div>
//                 <p className="text-gray-200 text-base leading-relaxed">
//                   {service.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Footer Note */}
//         <motion.div
//           className="text-center mt-12 text-gray-200 italic"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           viewport={{ once: true }}
//         >
//           "For where two or three gather in my name, there am I with them." -
//           Matthew 18:20
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default OrderOfServices;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaChurch, FaBookBible, FaPeopleGroup } from "react-icons/fa6";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase"; 
// import gold from "../../assets/svg/gold-gradient-line.svg";

// const OrderOfServices = () => {
//   const [services, setServices] = useState([]);
//   const [events, setEvents] = useState([]);
//   const [todayEvent, setTodayEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [currentDay, setCurrentDay] = useState("");
//   const [currentDate, setCurrentDate] = useState("");

//   // Get current day name and date
//   const getCurrentDay = () => {
//     const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//     const today = new Date();
//     const dayName = days[today.getDay()];
//     const formattedDate = today.toLocaleDateString('en-US', { 
//       weekday: 'long', 
//       year: 'numeric', 
//       month: 'long', 
//       day: 'numeric' 
//     });
    
//     setCurrentDay(dayName);
//     setCurrentDate(formattedDate);
//     return dayName;
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
//       return data;
//     } catch (error) {
//       console.error("Error loading services:", error);
//       return [];
//     }
//   };

//   // Load events from Firebase
//   const loadEvents = async () => {
//     try {
//       const snap = await getDocs(collection(db, "events"));
//       const data = snap.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       console.log("✅ Loaded events:", data);
//       return data;
//     } catch (error) {
//       console.error("Error loading events:", error);
//       return [];
//     }
//   };

//   // Check if there's an event today
//   const checkTodayEvent = (allEvents, todayDate, todayDay) => {
//     const todayDateStr = new Date().toISOString().split('T')[0];
    
//     // Find event that matches today's date OR today's day name
//     const event = allEvents.find(event => {
//       // Check by exact date
//       if (event.date === todayDateStr) return true;
      
//       // Check by section (if section matches today's day)
//       const eventSection = event.section?.toLowerCase() || "";
//       if (eventSection === todayDay) return true;
      
//       return false;
//     });
    
//     return event || null;
//   };

//   // Filter services for current day
//   const filterTodayServices = (allServices, day) => {
//     const todayServices = allServices.filter(service => 
//       service.day?.toLowerCase() === day.toLowerCase()
//     );
    
//     // Sort by time if available
//     return todayServices.sort((a, b) => {
//       if (a.time && b.time) {
//         return a.time.localeCompare(b.time);
//       }
//       return 0;
//     });
//   };

//   // Format time for display
//   const formatServiceTime = (time) => {
//     if (!time) return "Time TBA";
//     return time;
//   };

//   // Get icon based on service name
//   const getServiceIcon = (serviceName) => {
//     const name = serviceName?.toLowerCase() || "";
//     if (name.includes("prayer")) return <FaChurch className="text-xl" />;
//     if (name.includes("bible") || name.includes("study")) return <FaBookBible className="text-xl" />;
//     if (name.includes("youth") || name.includes("fellowship")) return <FaPeopleGroup className="text-xl" />;
//     if (name.includes("worship")) return <FaChurch className="text-xl" />;
//     return <FaChurch className="text-xl" />;
//   };

//   // Get event icon based on event type
//   const getEventIcon = (event) => {
//     const section = event.section?.toLowerCase() || "";
//     if (section.includes("marriage")) return "💍";
//     if (section.includes("death") || section.includes("memorial")) return "🕊️";
//     return "🎉";
//   };

//   // Load data on component mount
//   useEffect(() => {
//     const fetchData = async () => {
//       const day = getCurrentDay();
//       const [allServices, allEvents] = await Promise.all([loadServices(), loadEvents()]);
      
//       // Check for today's event
//       const todayDateStr = new Date().toISOString().split('T')[0];
//       const event = checkTodayEvent(allEvents, todayDateStr, day);
//       setTodayEvent(event);
      
//       // If no event, load today's services
//       if (!event) {
//         const todayServices = filterTodayServices(allServices, day);
//         setServices(todayServices);
//       } else {
//         setServices([]);
//       }
      
//       setLoading(false);
//     };
    
//     fetchData();
//   }, []);

//   return (
//     <section className="relative py-16 px-6 text-white overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-fixed"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1705627659700-59ec7d5ee3b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGNodXJjaCUyMGltYWdlcyUyMHN0YWdlJTIwc2luZ2luZ3xlbnwwfHwwfHx8MA%3D%3D')",
//           }}
//         ></div>
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <motion.div
//             initial={{ scale: 0.8 }}
//             whileInView={{ scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border-white/20 mb-6"
//           >
//             <FaChurch className="text-4xl text-white" />
//           </motion.div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-1 tracking-wide">
//             Order of Services
//           </h2>
//           <div className="flex justify-center items-center">
//             <img src={gold} alt="" className="w-48" />
//           </div>
          
//           {/* Current Date Display */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="mt-6 inline-block bg-white/10 backdrop-blur-md rounded-lg px-6 py-2"
//           >
//             <p className="text-gray-100 text-sm">
//               <span className="font-semibold">Today:</span> {currentDate}
//             </p>
//             <p className="text-yellow-300 text-xs capitalize mt-1">
//               {currentDay}'s Schedule
//             </p>
//           </motion.div>
          
//           <p className="mt-6 text-gray-100 max-w-2xl mx-auto text-lg">
//             Here's today's schedule for worship, prayer, and fellowship at our church.
//           </p>
//         </motion.div>

//         {/* Loading State */}
//         {loading ? (
//           <div className="flex justify-center items-center py-20">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
//             <p className="ml-4 text-white">Loading services...</p>
//           </div>
//         ) : todayEvent ? (
//           /* SHOW EVENT INSTEAD OF SERVICES */
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="bg-gradient-to-br from-yellow-50/20 to-orange-50/20 backdrop-blur-lg rounded-2xl border border-yellow-400/30 overflow-hidden"
//           >
//             {/* Event Header */}
//             <div className="relative h-64 overflow-hidden">
//               {todayEvent.image ? (
//                 <img 
//                   src={todayEvent.image} 
//                   alt={todayEvent.title || todayEvent.name}
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <div className="w-full h-full bg-gradient-to-r from-yellow-600 to-orange-600 flex items-center justify-center">
//                   <span className="text-8xl">{getEventIcon(todayEvent)}</span>
//                 </div>
//               )}
//               <div className="absolute inset-0 bg-black/50"></div>
//               <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
//                 <div className="text-5xl mb-2">{getEventIcon(todayEvent)}</div>
//                 <h3 className="text-2xl md:text-3xl font-bold text-white">
//                   {todayEvent.title || todayEvent.name}
//                 </h3>
//               </div>
//             </div>

//             {/* Event Details */}
//             <div className="p-8 text-center">
//               <div className="inline-block bg-yellow-500/20 rounded-full px-4 py-1 mb-4">
//                 <p className="text-yellow-300 text-sm font-medium">
//                   📅 {todayEvent.date}
//                 </p>
//               </div>
              
//               <p className="text-gray-200 text-lg leading-relaxed mb-6">
//                 {todayEvent.description}
//               </p>
              
//               {/* Event Highlights */}
//               {todayEvent.highlight && (
//                 <div className="mt-6 p-4 bg-white/10 rounded-lg">
//                   <h4 className="text-yellow-300 font-semibold mb-2">✨ Event Highlights</h4>
//                   <p className="text-gray-200 text-sm">{todayEvent.highlight}</p>
//                 </div>
//               )}
              
//               {/* Notice */}
//               <div className="mt-8 p-4 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
//                 <p className="text-yellow-300 text-sm font-medium">
//                   ⚠️ Regular {currentDay} services are cancelled due to this special event
//                 </p>
//                 <p className="text-gray-300 text-xs mt-2">
//                   Please join us in celebrating this occasion
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         ) : services.length > 0 ? (
//           /* SHOW TODAY'S SERVICES */
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.id || index}
//                 className="relative flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl bg-white/5 backdrop-blur-lg border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 group"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 {/* Decorative corner elements */}
//                 <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

//                 {/* Time */}
//                 <div className="flex justify-center items-center w-full md:w-auto">
//                   <div className="flex-shrink-0 relative">
//                     <div className="relative flex items-center justify-center rounded-full bg-gray-900/80 font-bold shadow-lg px-4 py-3 min-w-[100px]">
//                       <span className="text-sm font-bold">{formatServiceTime(service.time)}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Service Details */}
//                 <div className="flex-1">
//                   <div className="flex items-center gap-3 mb-2">
//                     <span className="text-amber-500">{getServiceIcon(service.name)}</span>
//                     <h3 className="text-xl font-semibold text-white">
//                       {service.name}
//                     </h3>
//                   </div>
//                   <p className="text-gray-200 text-base leading-relaxed">
//                     {service.description || "Join us for this service"}
//                   </p>
                  
//                   {/* Location */}
//                   {service.location && (
//                     <div className="mt-3 flex items-center gap-2 text-sm text-gray-300">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                       </svg>
//                       <span>{service.location}</span>
//                     </div>
//                   )}
                  
//                   {/* Father Name if needed */}
//                   {service.requiresFather && service.fatherName && (
//                     <div className="mt-2 flex items-center gap-2 text-sm text-yellow-300">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                       </svg>
//                       <span>Led by: {service.fatherName}</span>
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           /* NO SERVICES AND NO EVENT */
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-20 bg-white/5 backdrop-blur-lg rounded-xl"
//           >
//             <div className="text-6xl mb-4">📅</div>
//             <h3 className="text-xl font-semibold text-white mb-2">
//               No Services Scheduled
//             </h3>
//             <p className="text-gray-300">
//               There are no services scheduled for today.
//             </p>
//             <p className="text-gray-400 text-sm mt-2">
//               Please check back later or contact the church office.
//             </p>
//           </motion.div>
//         )}

//         {/* Footer Note - Only show if no event */}
//         {!todayEvent && (
//           <motion.div
//             className="text-center mt-12 text-gray-200 italic"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             viewport={{ once: true }}
//           >
//             "For where two or three gather in my name, there am I with them." -
//             Matthew 18:20
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default OrderOfServices;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChurch, FaBookBible, FaPeopleGroup } from "react-icons/fa6";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import gold from "../../assets/svg/gold-gradient-line.svg";

const OrderOfServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentDay, setCurrentDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  // Get current day name and date
  const getCurrentDay = () => {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const today = new Date();
    const dayName = days[today.getDay()];
    const formattedDate = today.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    setCurrentDay(dayName);
    setCurrentDate(formattedDate);
    return dayName;
  };

  // Load services from Firebase
  const loadServices = async () => {
    try {
      const snap = await getDocs(collection(db, "services"));
      const data = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("✅ Loaded services:", data);
      return data;
    } catch (error) {
      console.error("Error loading services:", error);
      return [];
    }
  };

  // Filter services for current day
  const filterTodayServices = (allServices, day) => {
    const todayServices = allServices.filter(service => 
      service.day?.toLowerCase() === day.toLowerCase()
    );
    
    // Sort by time if available
    return todayServices.sort((a, b) => {
      if (a.time && b.time) {
        return a.time.localeCompare(b.time);
      }
      return 0;
    });
  };

  // Format time for display
  const formatServiceTime = (time) => {
    if (!time) return "Time TBA";
    return time;
  };

  // Load data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const day = getCurrentDay();
      const allServices = await loadServices();
      const todayServices = filterTodayServices(allServices, day);
      setServices(todayServices);
      setLoading(false);
    };
    
    fetchData();
  }, []);

  // Icon mapping based on service name
  const getIconForService = (serviceName) => {
    const name = serviceName?.toLowerCase() || "";
    if (name.includes("prayer")) return <FaChurch className="text-amber-500 text-xl" />;
    if (name.includes("bible") || name.includes("study")) return <FaBookBible className="text-amber-500 text-xl" />;
    if (name.includes("youth") || name.includes("fellowship")) return <FaPeopleGroup className="text-amber-500 text-xl" />;
    if (name.includes("worship")) return <FaChurch className="text-amber-500 text-xl" />;
    return <FaChurch className="text-amber-500 text-xl" />;
  };

  // Get location icon
  const getLocationIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  // Get father icon
  const getFatherIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );

  return (
    <section className="relative py-16 px-6 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1705627659700-59ec7d5ee3b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGNodXJjaCUyMGltYWdlcyUyMHN0YWdlJTIwc2luZ2luZ3xlbnwwfHwwfHx8MA%3D%3D')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border-white/20 mb-6"
          >
            <FaChurch className="text-4xl text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-1 tracking-wide">
            Order of Services
          </h2>
          <div className="flex justify-center items-center">
            <img src={gold} alt="" className="w-48" />
          </div>
          
          {/* Current Date Display */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 inline-block bg-white/10 backdrop-blur-md rounded-lg px-6 py-2"
          >
            <p className="text-gray-100 text-sm">
              <span className="font-semibold">Today:</span> {currentDate}
            </p>
            <p className="text-yellow-300 text-xs capitalize mt-1">
              {currentDay}'s Schedule
            </p>
          </motion.div> */}
          
          <p className="mt-6 text-gray-100 max-w-2xl mx-auto text-lg">
            Here's today's schedule for worship, prayer, and fellowship at our church.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
            <p className="ml-4 text-white">Loading services...</p>
          </div>
        ) : services.length > 0 ? (
          /* Time Table */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id || index}
                className="relative flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl bg-white/5 backdrop-blur-lg border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Time - Centered properly */}
                {/* <div className="flex justify-start md:justify-center items-center w-full md:w-24 flex-shrink-0">
                  <div className="relative">
                    <div className="relative flex items-center justify-center min-w-[90px] px-3 py-2 rounded-full bg-gray-900/80 font-bold shadow-lg border border-gray-700">
                      <span className="text-sm font-bold text-white">{formatServiceTime(service.time)}</span>
                    </div>
                  </div>
                </div> */}
                <div className="flex justify-start md:justify-center items-center w-full md:w-auto flex-shrink-0">
  <div className="relative">
    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gray-900/80 font-bold shadow-lg border border-gray-700">
      <span className="text-sm font-bold text-white text-center leading-tight">
        {formatServiceTime(service.time)}
      </span>
    </div>
  </div>
</div>

                {/* Service Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-amber-500">{getIconForService(service.name)}</span>
                    <h3 className="text-xl font-semibold text-white">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    {service.description || "Join us for this service"}
                  </p>
                  
                  {/* Location */}
                  {service.location && (
                    <div className="mt-3 flex items-center gap-2 text-sm text-gray-300">
                      {getLocationIcon()}
                      <span>{service.location}</span>
                    </div>
                  )}
                  
                  {/* Father Name if needed */}
                  {service.requiresFather && service.fatherName && (
                    <div className="mt-2 flex items-center gap-2 text-sm text-yellow-300">
                      {getFatherIcon()}
                      <span>Led by: {service.fatherName}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* NO SERVICES */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white/5 backdrop-blur-lg rounded-xl"
          >
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No Services Scheduled
            </h3>
            <p className="text-gray-300">
              There are no services scheduled for {currentDay}.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Please check back later or contact the church office.
            </p>
          </motion.div>
        )}

        {/* Footer Note */}
        <motion.div
          className="text-center mt-12 text-gray-200 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          "For where two or three gather in my name, there am I with them." -
          Matthew 18:20
        </motion.div>
      </div>
    </section>
  );
};

export default OrderOfServices;
