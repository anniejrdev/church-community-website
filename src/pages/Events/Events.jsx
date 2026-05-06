// import React from "react";

// const Events = () => {
//   const events = [
//     {
//       img: "https://preview.colorlib.com/theme/byfaith/images/img_1.jpg",
//       date: "15 Jan 2020 • By Pastor Campbell",
//       name: "Living and Sharing The Gospel",
//     },
//     {
//       img: "https://preview.colorlib.com/theme/byfaith/images/img_2.jpg",
//       date: "15 Jan 2020 • By Pastor Campbell",
//       name: "Living and Sharing The Gospel",
//     },
//     {
//       img: "https://preview.colorlib.com/theme/byfaith/images/img_4.jpg",
//       date: "15 Jan 2020 • By Pastor Campbell",
//       name: "Living and Sharing The Gospel",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1596933304642-8305b45767e0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       date: "15 Jan 2020 • By Pastor Campbell",
//       name: "Living and Sharing The Gospel",
//     },
//     {
//       img: "https://plus.unsplash.com/premium_photo-1734014584695-10492f957e2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGNodXJjaCUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
//       date: "15 Jan 2020 • By Pastor Campbell",
//       name: "Living and Sharing The Gospel",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1633706202327-2370b7505745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNodXJjaCUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
//       date: "15 Jan 2020 • By Pastor Campbell",
//       name: "Living and Sharing The Gospel",
//     },
//   ];

//   return (
//     <div>
      // <div className="relative">
      //   <img
      //     src="https://images.unsplash.com/photo-1474814947326-d835369963a5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      //     className="w-full h-screen object-cover"
      //     alt="Scenic view"
      //   />
      //   <div className="absolute inset-0 bg-black/60"></div>

      //   <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
      //     <h1 className="text-5xl font-bold text-white">Upcoming Events</h1>
      //     <p className="mt-5 text-white max-w-2xl">
      //       Join us in fellowship and faith. Explore our upcoming church events
      //       where we worship, serve, and grow together as one family in Christ.
      //     </p>
      //   </div>
      // </div>

//       <div className="py-20">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-5">
//           {events.map((event, index) => (
//             <div key={index} className="relative group">
//               <img
//                 src={event.img}
//                 alt={event.name}
//                 className="rounded-lg w-full"
//               />
//               <div className="mt-4">
//                 <p className="text-gray-600">{event.date}</p>
//                 <p className="font-bold text-lg mt-2">{event.name}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;



// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Eye, X, Calendar, User, FileText, Star } from "lucide-react";

// const Events = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const events = [
//     {
//       img: "https://preview.colorlib.com/theme/byfaith/images/img_1.jpg",
//       date: "15 Jan 2020",
//       author: "Pastor Campbell",
//       name: "Living and Sharing The Gospel",
//       description: "Join us for an inspiring session on living and sharing the gospel of Christ. This event will help you understand how to incorporate faith into your daily life and share it with others effectively.",
//       highlights: [
//         "Interactive Bible study",
//         "Worship and praise session",
//         "Testimony sharing",
//         "Prayer fellowship"
//       ]
//     },
//     {
//       img: "https://preview.colorlib.com/theme/byfaith/images/img_2.jpg",
//       date: "22 Jan 2020",
//       author: "Pastor Sarah Johnson",
//       name: "Women's Faith Conference",
//       description: "A special conference for women to come together, share experiences, and grow in faith. Guest speakers will address topics on family, career, and spiritual growth.",
//       highlights: [
//         "Guest speakers",
//         "Workshop sessions",
//         "Networking lunch",
//         "Prayer circle"
//       ]
//     },
//     {
//       img: "https://preview.colorlib.com/theme/byfaith/images/img_4.jpg",
//       date: "05 Feb 2020",
//       author: "Elder Michael Brown",
//       name: "Youth Revival Night",
//       description: "An energetic night of worship, games, and spiritual growth for the youth. Bring your friends for a life-changing experience.",
//       highlights: [
//         "Live band performance",
//         "Youth testimonies",
//         "Games and activities",
//         "Free refreshments"
//       ]
//     },
//     {
//       img: "https://images.unsplash.com/photo-1596933304642-8305b45767e0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       date: "18 Feb 2020",
//       author: "Pastor David Williams",
//       name: "Healing and Deliverance Service",
//       description: "A special service focused on spiritual healing and deliverance. Come with faith and expect miracles.",
//       highlights: [
//         "Anointing prayer",
//         "Worship session",
//         "Testimonies of healing",
//         "Personal prayer ministry"
//       ]
//     },
//     {
//       img: "https://plus.unsplash.com/premium_photo-1734014584695-10492f957e2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGNodXJjaCUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
//       date: "10 Mar 2020",
//       author: "Evangelist Mark Thompson",
//       name: "Outreach Mission",
//       description: "Join our outreach team as we reach out to the community with love and support. Distribution of food, clothes, and prayer.",
//       highlights: [
//         "Food distribution",
//         "Clothing donation",
//         "Prayer walk",
//         "Community engagement"
//       ]
//     },
//     {
//       img: "https://images.unsplash.com/photo-1633706202327-2370b7505745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNodXJjaCUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
//       date: "25 Mar 2020",
//       author: "Pastor John Matthew",
//       name: "Marriage Enrichment Seminar",
//       description: "A seminar designed to strengthen marriages and family bonds. Learn biblical principles for a successful marriage.",
//       highlights: [
//         "Couples workshop",
//         "Q&A session",
//         "Testimonies from couples",
//         "Prayer for families"
//       ]
//     },
//   ];

//   const openModal = (event) => {
//     setSelectedEvent(event);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedEvent(null);
//   };

//   return (
//     // <div className="min-h-screen bg-gray-50">
//     //   {/* Hero Section */}
//     //   {/* <div className="relative h-[60vh]">
//     //     <img
//     //       src="https://images.unsplash.com/photo-1474814947326-d835369963a5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     //       className="w-full h-full object-cover"
//     //       alt="Church event"
//     //     />
//     //     <div className="absolute inset-0 bg-black/60"></div>
//     //     <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
//     //       <motion.h1
//     //         initial={{ y: -40, opacity: 0 }}
//     //         animate={{ y: 0, opacity: 1 }}
//     //         transition={{ duration: 0.7 }}
//     //         className="text-5xl md:text-6xl font-bold text-white"
//     //       >
//     //         Upcoming Events
//     //       </motion.h1>
//     //       <motion.p
//     //         initial={{ y: 40, opacity: 0 }}
//     //         animate={{ y: 0, opacity: 1 }}
//     //         transition={{ duration: 0.7, delay: 0.2 }}
//     //         className="mt-5 text-white max-w-2xl text-lg"
//     //       >
//     //         Join us in fellowship and faith. Explore our upcoming church events
//     //         where we worship, serve, and grow together as one family in Christ.
//     //       </motion.p>
//     //     </div>
//     //   </div> */}
//     //    <div className="relative">
//     //     <img
//     //       src="https://images.unsplash.com/photo-1474814947326-d835369963a5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     //       className="w-full h-screen object-cover"
//     //       alt="Scenic view"
//     //     />
//     //     <div className="absolute inset-0 bg-black/60"></div>

//     //     <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
//     //       <h1 className="text-5xl font-bold text-white">Upcoming Events</h1>
//     //       <p className="mt-5 text-white max-w-2xl">
//     //         Join us in fellowship and faith. Explore our upcoming church events
//     //         where we worship, serve, and grow together as one family in Christ.
//     //       </p>
//     //     </div>
//     //   </div>

//     //   {/* Events Grid */}
//     //   <div className="py-20 px-4">
//     //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//     //       {events.map((event, index) => (
//     //         <motion.div
//     //           key={index}
//     //           initial={{ opacity: 0, y: 30 }}
//     //           animate={{ opacity: 1, y: 0 }}
//     //           transition={{ duration: 0.5, delay: index * 0.1 }}
//     //           className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
//     //         >
//     //           {/* Image Container with Hover Effect */}
//     //           <div className="relative overflow-hidden h-64">
//     //             <img
//     //               src={event.img}
//     //               alt={event.name}
//     //               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//     //             />
                
//     //             {/* Overlay with View Icon on Hover */}
//     //             <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//     //               <motion.button
//     //                 whileHover={{ scale: 1.1 }}
//     //                 whileTap={{ scale: 0.95 }}
//     //                 onClick={() => openModal(event)}
//     //                 className="bg-yellow-400 text-gray-900 p-3 rounded-full hover:bg-yellow-500 transition-colors duration-300"
//     //               >
//     //                 <Eye size={24} />
//     //               </motion.button>
//     //             </div>
//     //           </div>

//     //           {/* Content */}
//     //           <div className="p-6">
//     //             <p className="text-gray-500 text-sm flex items-center gap-2">
//     //               <Calendar size={14} />
//     //               {event.date}
//     //             </p>
//     //             <h3 className="font-bold text-xl mt-2 text-gray-800 line-clamp-2">
//     //               {event.name}
//     //             </h3>
//     //           </div>
//     //         </motion.div>
//     //       ))}
//     //     </div>
//     //   </div>

//     //   {/* Modal Window */}
//     //   <AnimatePresence>
//     //     {isModalOpen && selectedEvent && (
//     //       <motion.div
//     //         initial={{ opacity: 0 }}
//     //         animate={{ opacity: 1 }}
//     //         exit={{ opacity: 0 }}
//     //         className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
//     //         onClick={closeModal}
//     //       >
//     //         <motion.div
//     //           initial={{ scale: 0.9, opacity: 0, y: 50 }}
//     //           animate={{ scale: 1, opacity: 1, y: 0 }}
//     //           exit={{ scale: 0.9, opacity: 0, y: 50 }}
//     //           transition={{ type: "spring", duration: 0.5 }}
//     //           className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//     //           onClick={(e) => e.stopPropagation()}
//     //         >
//     //           {/* Modal Image */}
//     //           <div className="relative h-80">
//     //             <img
//     //               src={selectedEvent.img}
//     //               alt={selectedEvent.name}
//     //               className="w-full h-full object-cover"
//     //             />
//     //             <button
//     //               onClick={closeModal}
//     //               className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
//     //             >
//     //               <X size={24} />
//     //             </button>
//     //           </div>

//     //           {/* Modal Content */}
//     //           <div className="p-8">
//     //             <h2 className="text-3xl font-bold text-gray-800 mb-4">
//     //               {selectedEvent.name}
//     //             </h2>
                
//     //             <div className="flex items-center gap-6 mb-6 text-gray-600">
//     //               <div className="flex items-center gap-2">
//     //                 <Calendar size={18} className="text-yellow-500" />
//     //                 <span>{selectedEvent.date}</span>
//     //               </div>
//     //               <div className="flex items-center gap-2">
//     //                 <User size={18} className="text-yellow-500" />
//     //                 <span>By {selectedEvent.author}</span>
//     //               </div>
//     //             </div>

//     //             {/* Description */}
//     //             <div className="mb-6">
//     //               <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
//     //                 <FileText size={20} className="text-yellow-500" />
//     //                 Description
//     //               </h3>
//     //               <p className="text-gray-600 leading-relaxed">
//     //                 {selectedEvent.description}
//     //               </p>
//     //             </div>

//     //             {/* Highlights */}
//     //             <div className="mb-6">
//     //               <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
//     //                 <Star size={20} className="text-yellow-500" />
//     //                 Event Highlights
//     //               </h3>
//     //               <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
//     //                 {selectedEvent.highlights.map((highlight, idx) => (
//     //                   <li key={idx} className="flex items-center gap-2 text-gray-600">
//     //                     <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
//     //                     {highlight}
//     //                   </li>
//     //                 ))}
//     //               </ul>
//     //             </div>

//     //             {/* Register Button */}
//     //             <div className="flex justify-end pt-4 border-t border-gray-200">
//     //               <motion.button
//     //                 whileHover={{ scale: 1.05 }}
//     //                 whileTap={{ scale: 0.95 }}
//     //                 className="px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors duration-300 font-semibold"
//     //               >
//     //                 Register Now
//     //               </motion.button>
//     //             </div>
//     //           </div>
//     //         </motion.div>
//     //       </motion.div>
//     //     )}
//     //   </AnimatePresence>
//     // </div>
    
//   );
// };

// export default Events;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Eye, X, Calendar, User, FileText, Star } from "lucide-react";

// const Events = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const events = [
//     {
//       img: "https://preview.colorlib.com/theme/byfaith/images/img_1.jpg",
//       date: "15 Jan 2020",
//       author: "Pastor Campbell",
//       name: "Living and Sharing The Gospel",
//       description: "Join us for an inspiring session on living and sharing the gospel of Christ. This event will help you understand how to incorporate faith into your daily life and share it with others effectively.",
//       highlights: [
//         "Interactive Bible study",
//         "Worship and praise session",
//         "Testimony sharing",
//         "Prayer fellowship"
//       ]
//     },
//     {
//       img: "https://preview.colorlib.com/theme/byfaith/images/img_2.jpg",
//       date: "22 Jan 2020",
//       author: "Pastor Sarah Johnson",
//       name: "Women's Faith Conference",
//       description: "A special conference for women to come together, share experiences, and grow in faith. Guest speakers will address topics on family, career, and spiritual growth.",
//       highlights: [
//         "Guest speakers",
//         "Workshop sessions",
//         "Networking lunch",
//         "Prayer circle"
//       ]
//     },
//     {
//       img: "https://preview.colorlib.com/theme/byfaith/images/img_4.jpg",
//       date: "05 Feb 2020",
//       author: "Elder Michael Brown",
//       name: "Youth Revival Night",
//       description: "An energetic night of worship, games, and spiritual growth for the youth. Bring your friends for a life-changing experience.",
//       highlights: [
//         "Live band performance",
//         "Youth testimonies",
//         "Games and activities",
//         "Free refreshments"
//       ]
//     },
//     {
//       img: "https://images.unsplash.com/photo-1596933304642-8305b45767e0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       date: "18 Feb 2020",
//       author: "Pastor David Williams",
//       name: "Healing and Deliverance Service",
//       description: "A special service focused on spiritual healing and deliverance. Come with faith and expect miracles.",
//       highlights: [
//         "Anointing prayer",
//         "Worship session",
//         "Testimonies of healing",
//         "Personal prayer ministry"
//       ]
//     },
//     {
//       img: "https://plus.unsplash.com/premium_photo-1734014584695-10492f957e2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGNodXJjaCUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
//       date: "10 Mar 2020",
//       author: "Evangelist Mark Thompson",
//       name: "Outreach Mission",
//       description: "Join our outreach team as we reach out to the community with love and support. Distribution of food, clothes, and prayer.",
//       highlights: [
//         "Food distribution",
//         "Clothing donation",
//         "Prayer walk",
//         "Community engagement"
//       ]
//     },
//     {
//       img: "https://images.unsplash.com/photo-1633706202327-2370b7505745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNodXJjaCUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
//       date: "25 Mar 2020",
//       author: "Pastor John Matthew",
//       name: "Marriage Enrichment Seminar",
//       description: "A seminar designed to strengthen marriages and family bonds. Learn biblical principles for a successful marriage.",
//       highlights: [
//         "Couples workshop",
//         "Q&A session",
//         "Testimonies from couples",
//         "Prayer for families"
//       ]
//     },
//     {
//       img: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       date: "08 Apr 2020",
//       author: "Pastor Michael Lee",
//       name: "Easter Celebration",
//       description: "Celebrate the resurrection of Jesus Christ with us. A special service with music, drama, and powerful message.",
//       highlights: [
//         "Drama presentation",
//         "Special music",
//         "Easter egg hunt",
//         "Family lunch"
//       ]
//     },
//     {
//       img: "https://images.unsplash.com/photo-1511795409674-a42516e6cc2b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       date: "20 Apr 2020",
//       author: "Worship Team",
//       name: "Praise and Worship Night",
//       description: "A night dedicated to praising God through music and worship. Come with your voice and instruments to glorify His name.",
//       highlights: [
//         "Live worship band",
//         "Choir performance",
//         "Testimony songs",
//         "Prayer ministry"
//       ]
//     },
//   ];

//   const openModal = (event) => {
//     setSelectedEvent(event);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedEvent(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section - UNTOUCHED */}
//       <div className="relative">
//         <img
//           src="https://images.unsplash.com/photo-1474814947326-d835369963a5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           className="w-full h-screen object-cover"
//           alt="Scenic view"
//         />
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
//           <h1 className="text-5xl font-bold text-white">Upcoming Events</h1>
//           <p className="mt-5 text-white max-w-2xl">
//             Join us in fellowship and faith. Explore our upcoming church events
//             where we worship, serve, and grow together as one family in Christ.
            
//           </p>
//         </div>
//       </div>

//       {/* Events Grid - 4 Cards Grid */}
//       <div className="py-20 px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//           {events.map((event, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.05 }}
//               className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               {/* Image Container with Hover Effect */}
//               <div className="relative overflow-hidden h-48">
//                 <img
//                   src={event.img}
//                   alt={event.name}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
                
//                 {/* Overlay with View Icon on Hover */}
//                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => openModal(event)}
//                     className="bg-yellow-400 text-gray-900 p-2 rounded-full hover:bg-yellow-500 transition-colors duration-300"
//                   >
//                     <Eye size={20} />
//                   </motion.button>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-4">
//                 <p className="text-gray-500 text-xs flex items-center gap-1">
//                   <Calendar size={12} />
//                   {event.date}
//                 </p>
//                 <h3 className="font-bold text-base mt-1 text-gray-800 line-clamp-2">
//                   {event.name}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Modal Window - Smaller Size */}
//      <AnimatePresence>
//   {isModalOpen && selectedEvent && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
//       onClick={closeModal}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0, y: 30 }}
//         animate={{ scale: 1, opacity: 1, y: 0 }}
//         exit={{ scale: 0.9, opacity: 0, y: 30 }}
//         transition={{ type: "spring", duration: 0.4 }}
//         className="bg-white rounded-xl max-w-md w-full"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Modal Image */}
//         <div className="relative h-40">
//           <img
//             src={selectedEvent.img}
//             alt={selectedEvent.name}
//             className="w-full h-full object-cover rounded-t-xl"
//           />
//           <button
//             onClick={closeModal}
//             className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors duration-300"
//           >
//             <X size={16} />
//           </button>
//         </div>

//         {/* Modal Content */}
//         <div className="p-5">
//           <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
//             {selectedEvent.name}
//           </h2>
          
//           <div className="flex items-center gap-3 mb-4 text-gray-600 text-xs">
//             <div className="flex items-center gap-1">
//               <Calendar size={14} className="text-yellow-500" />
//               <span>{selectedEvent.date}</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <User size={14} className="text-yellow-500" />
//               <span>By {selectedEvent.author}</span>
//             </div>
//           </div>

//           {/* Description */}
//           <div className="mb-4">
//             <h3 className="text-sm font-semibold text-gray-800 mb-1.5 flex items-center gap-1.5">
//               <FileText size={14} className="text-yellow-500" />
//               Description
//             </h3>
//             <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
//               {selectedEvent.description}
//             </p>
//           </div>

//           {/* Highlights */}
//           {/* <div className="mb-4">
//             <h3 className="text-sm font-semibold text-gray-800 mb-1.5 flex items-center gap-1.5">
//               <Star size={14} className="text-yellow-500" />
//               Event Highlights
//             </h3>
//             <ul className="grid grid-cols-1 gap-1">
//               {selectedEvent.highlights.slice(0, 3).map((highlight, idx) => (
//                 <li key={idx} className="flex items-center gap-1.5 text-gray-600 text-xs">
//                   <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
//                   {highlight}
//                 </li>
//               ))}
//             </ul>
//           </div> */}

          
//         </div>
//       </motion.div>
//     </motion.div>
//   )}
// </AnimatePresence>
//     </div>
//   );
// };

// export default Events;
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Eye, X, Calendar, User, FileText, Star, Heart, Users, Cross } from "lucide-react";
// import { allEvents } from "../../services/EventService";

// const Events = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("common");

//   // Common Events Data
//   const commonEvents = [
//     {
//       img: "https://preview.colorlib.com/theme/byfaith/images/img_1.jpg",
//       date: "15 Jan 2020",
//       author: "Pastor Campbell",
//       name: "Living and Sharing The Gospel",
//       description: "Join us for an inspiring session on living and sharing the gospel of Christ. This event will help you understand how to incorporate faith into your daily life and share it with others effectively.",
//       highlights: [
//         "Interactive Bible study",
//         "Worship and praise session",
//         "Testimony sharing",
//         "Prayer fellowship"
//       ]
//     },
//     {
//       img: "https://preview.colorlib.com/theme/byfaith/images/img_2.jpg",
//       date: "23 April 2026",
//       author: "Pastor Sarah Johnson",
//       name: "Women's Faith Conference",
//       description: "A special conference for women to come together, share experiences, and grow in faith. Guest speakers will address topics on family, career, and spiritual growth.",
//       highlights: [
//         "Guest speakers",
//         "Workshop sessions",
//         "Networking lunch",
//         "Prayer circle"
//       ]
//     },
//     {
//       img: "https://preview.colorlib.com/theme/byfaith/images/img_4.jpg",
//       date: "05 Feb 2020",
//       author: "Elder Michael Brown",
//       name: "Youth Revival Night",
//       description: "An energetic night of worship, games, and spiritual growth for the youth. Bring your friends for a life-changing experience.",
//       highlights: [
//         "Live band performance",
//         "Youth testimonies",
//         "Games and activities",
//         "Free refreshments"
//       ]
//     },
//     {
//       img: "https://images.unsplash.com/photo-1596933304642-8305b45767e0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       date: "18 Feb 2020",
//       author: "Pastor David Williams",
//       name: "Healing and Deliverance Service",
//       description: "A special service focused on spiritual healing and deliverance. Come with faith and expect miracles.",
//       highlights: [
//         "Anointing prayer",
//         "Worship session",
//         "Testimonies of healing",
//         "Personal prayer ministry"
//       ]
//     },
//     {
//       img: "https://plus.unsplash.com/premium_photo-1734014584695-10492f957e2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGNodXJjaCUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
//       date: "10 Mar 2020",
//       author: "Evangelist Mark Thompson",
//       name: "Outreach Mission",
//       description: "Join our outreach team as we reach out to the community with love and support. Distribution of food, clothes, and prayer.",
//       highlights: [
//         "Food distribution",
//         "Clothing donation",
//         "Prayer walk",
//         "Community engagement"
//       ]
//     },
//     {
//       img: "https://images.unsplash.com/photo-1633706202327-2370b7505745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNodXJjaCUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
//       date: "25 Mar 2020",
//       author: "Pastor John Matthew",
//       name: "Marriage Enrichment Seminar",
//       description: "A seminar designed to strengthen marriages and family bonds. Learn biblical principles for a successful marriage.",
//       highlights: [
//         "Couples workshop",
//         "Q&A session",
//         "Testimonies from couples",
//         "Prayer for families"
//       ]
//     },
//     {
//       img: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       date: "08 Apr 2020",
//       author: "Pastor Michael Lee",
//       name: "Easter Celebration",
//       description: "Celebrate the resurrection of Jesus Christ with us. A special service with music, drama, and powerful message.",
//       highlights: [
//         "Drama presentation",
//         "Special music",
//         "Easter egg hunt",
//         "Family lunch"
//       ]
//     },
//     {
//       img: "https://images.unsplash.com/photo-1511795409674-a42516e6cc2b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       date: "20 Apr 2020",
//       author: "Worship Team",
//       name: "Praise and Worship Night",
//       description: "A night dedicated to praising God through music and worship. Come with your voice and instruments to glorify His name.",
//       highlights: [
//         "Live worship band",
//         "Choir performance",
//         "Testimony songs",
//         "Prayer ministry"
//       ]
//     },
//   ];

//   // Marriage Events Data
//   const marriageEvents = [
//     {
//       img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=60",
//       date: "10 Feb 2020",
//       author: "Pastor John & Sarah",
//       name: "John & Sarah's Wedding Ceremony",
//       description: "Join us as we celebrate the holy union of John and Sarah in matrimony. A beautiful ceremony filled with joy and blessings.",
//       highlights: [
//         "Wedding Ceremony",
//         "Exchange of Vows",
//         "Blessing by Pastor",
//         "Wedding Reception",
//         "Family Prayers"
//       ]
//     },
//     {
//       img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&auto=format&fit=crop&q=60",
//       date: "15 Mar 2020",
//       author: "Pastor David & Mary",
//       name: "David & Mary's Wedding",
//       description: "A beautiful wedding ceremony uniting David and Mary in holy matrimony. All are invited to celebrate with them.",
//       highlights: [
//         "Wedding Ceremony",
//         "Scripture Reading",
//         "Musical Performance",
//         "Wedding Feast",
//         "Prayer Blessings"
//       ]
//     },
//     {
//       img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&auto=format&fit=crop&q=60",
//       date: "20 Apr 2020",
//       author: "Pastor Michael & Emma",
//       name: "Michael & Emma's Wedding",
//       description: "Celebrate the marriage of Michael and Emma as they begin their journey together in Christ.",
//       highlights: [
//         "Holy Matrimony",
//         "Worship Session",
//         "Testimonies",
//         "Wedding Reception",
//         "Family Dinner"
//       ]
//     },
//   ];

//   // Deaths/Memorial Events Data
//   const deathEvents = [
//     {
//       img: "https://images.unsplash.com/photo-1507692049790-5822c9a8f7c3?w=600&auto=format&fit=crop&q=60",
//       date: "05 Jan 2020",
//       author: "Family of John Doe",
//       name: "Memorial Service - John Doe",
//       description: "A service to celebrate the life and legacy of our beloved brother John Doe. Join us as we honor his memory.",
//       highlights: [
//         "Tribute Speeches",
//         "Prayer Session",
//         "Worship Music",
//         "Fellowship Lunch",
//         "Family Condolences"
//       ]
//     },
//     {
//       img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&auto=format&fit=crop&q=60",
//       date: "12 Mar 2020",
//       author: "Family of Mary Smith",
//       name: "Funeral Service - Mary Smith",
//       description: "A solemn service to honor and remember Mary Smith, a faithful servant of God.",
//       highlights: [
//         "Funeral Service",
//         "Scripture Reading",
//         "Tributes",
//         "Final Blessing",
//         "Family Gathering"
//       ]
//     },
//     {
//       img: "https://images.unsplash.com/photo-1554931670-4eb2e6c41e0a?w=600&auto=format&fit=crop&q=60",
//       date: "25 Apr 2020",
//       author: "Church Family",
//       name: "Remembrance Day Service",
//       description: "A special service remembering all our departed loved ones who have gone to be with the Lord.",
//       highlights: [
//         "Candle Lighting",
//         "Prayer for Departed",
//         "Memorial Tribute",
//         "Worship Session",
//         "Fellowship Tea"
//       ]
//     },
//   ];

//   const openModal = (event) => {
//     setSelectedEvent(event);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedEvent(null);
//   };

//   // Get current events based on active category
//   // const getCurrentEvents = () => {
//   //   if (activeCategory === "common") return commonEvents;
//   //   if (activeCategory === "marriage") return marriageEvents;
//   //   return deathEvents;
//   // };

//   const getCurrentEvents = () => {
//   if (activeCategory === "common") {
//     return allEvents.filter(event => event.type === "common");
//   }
//   if (activeCategory === "marriage") {
//     return allEvents.filter(event => event.type === "marriage");
//   }
//   return allEvents.filter(event => event.type === "deaths");
// };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section - UNTOUCHED */}
//       <div className="relative">
//         <img
//           src="https://images.unsplash.com/photo-1474814947326-d835369963a5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           className="w-full h-screen object-cover"
//           alt="Scenic view"
//         />
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
//           <h1 className="text-5xl font-bold text-white">Order of Services</h1>
//           <p className="mt-5 text-white max-w-2xl">
//             Join us in fellowship and faith. Explore our church services, marriage celebrations, and memorial services as we worship, serve, and grow together as one family in Christ.
//           </p>
//         </div>
//       </div>

//       {/* Category Tabs */}
//       <div className="max-w-7xl mx-auto px-4 pt-12">
//         <div className="flex justify-center gap-4 mb-8">
//           <button
//             onClick={() => setActiveCategory("common")}
//             className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
//               activeCategory === "common"
//                 ? "bg-yellow-400 text-gray-900 shadow-lg"
//                 : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
//             }`}
//           >
//             <Users size={18} />
//             Common Events
//           </button>
//           <button
//             onClick={() => setActiveCategory("marriage")}
//             className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
//               activeCategory === "marriage"
//                 ? "bg-yellow-400 text-gray-900 shadow-lg"
//                 : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
//             }`}
//           >
//             <Heart size={18} />
//             Marriage Events
//           </button>
//           <button
//             onClick={() => setActiveCategory("deaths")}
//             className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
//               activeCategory === "deaths"
//                 ? "bg-yellow-400 text-gray-900 shadow-lg"
//                 : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
//             }`}
//           >
//             <Cross size={18} />
//             Deaths / Memorials
//           </button>
//         </div>
//       </div>

//       {/* Events Grid - 4 Cards Grid */}
//       <div className="py-12 px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//           {getCurrentEvents().map((event, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.05 }}
//               className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
//               onClick={() => openModal(event)}
//             >
//               {/* Image Container with Hover Effect */}
//               <div className="relative overflow-hidden h-48">
//                 <img
//                   src={event.img}
//                   alt={event.name}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
                
//                 {/* Overlay with View Icon on Hover */}
//                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-yellow-400 text-gray-900 p-2 rounded-full hover:bg-yellow-500 transition-colors duration-300"
//                   >
//                     <Eye size={20} />
//                   </motion.button>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-4">
//                 <p className="text-gray-500 text-xs flex items-center gap-1">
//                   <Calendar size={12} />
//                   {event.date}
//                 </p>
//                 <h3 className="font-bold text-base mt-1 text-gray-800 line-clamp-2">
//                   {event.name}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Modal Window */}
//       <AnimatePresence>
//         {isModalOpen && selectedEvent && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 30 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 30 }}
//               transition={{ type: "spring", duration: 0.4 }}
//               className="bg-white rounded-xl max-w-md w-full max-h-[85vh] overflow-y-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Modal Image */}
//               <div className="relative h-40 sticky top-0">
//                 <img
//                   src={selectedEvent.img}
//                   alt={selectedEvent.name}
//                   className="w-full h-full object-cover rounded-t-xl"
//                 />
//                 <button
//                   onClick={closeModal}
//                   className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors duration-300"
//                 >
//                   <X size={16} />
//                 </button>
//               </div>

//               {/* Modal Content */}
//               <div className="p-5">
//                 <h2 className="text-xl font-bold text-gray-800 mb-2">
//                   {selectedEvent.name}
//                 </h2>
                
//                 <div className="flex items-center gap-3 mb-4 text-gray-600 text-xs">
//                   <div className="flex items-center gap-1">
//                     <Calendar size={14} className="text-yellow-500" />
//                     <span>{selectedEvent.date}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <User size={14} className="text-yellow-500" />
//                     <span>By {selectedEvent.author}</span>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <div className="mb-4">
//                   <h3 className="text-sm font-semibold text-gray-800 mb-1.5 flex items-center gap-1.5">
//                     <FileText size={14} className="text-yellow-500" />
//                     Description
//                   </h3>
//                   <p className="text-gray-600 text-xs leading-relaxed">
//                     {selectedEvent.description}
//                   </p>
//                 </div>

//                 {/* Highlights */}
//                 <div className="mb-4">
//                   <h3 className="text-sm font-semibold text-gray-800 mb-1.5 flex items-center gap-1.5">
//                     <Star size={14} className="text-yellow-500" />
//                     Event Highlights
//                   </h3>
//                   <ul className="grid grid-cols-1 gap-1">
//                     {selectedEvent.highlights.map((highlight, idx) => (
//                       <li key={idx} className="flex items-center gap-1.5 text-gray-600 text-xs">
//                         <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
//                         {highlight}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Events;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Eye, X, Calendar, User, FileText, Star, Heart, Users, Cross } from "lucide-react";
// import { allEvents } from "../../services/EventService";

// const Events = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("common");

//   // Get events based on active category from shared allEvents
//   const getCurrentEvents = () => {
//     if (activeCategory === "common") {
//       return allEvents.filter(event => event.type === "common");
//     }
//     if (activeCategory === "marriage") {
//       return allEvents.filter(event => event.type === "marriage");
//     }
//     return allEvents.filter(event => event.type === "deaths");
//   };

//   const openModal = (event) => {
//     setSelectedEvent(event);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedEvent(null);
//   };

//   const currentEvents = getCurrentEvents();

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="relative">
//         <img
//           src="https://images.unsplash.com/photo-1474814947326-d835369963a5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           className="w-full h-screen object-cover"
//           alt="Scenic view"
//         />
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
//           <h1 className="text-5xl font-bold text-white">Order of Services</h1>
//           <p className="mt-5 text-white max-w-2xl">
//             Join us in fellowship and faith. Explore our church services, marriage celebrations, and memorial services as we worship, serve, and grow together as one family in Christ.
//           </p>
//         </div>
//       </div>

//       {/* Category Tabs */}
//       <div className="max-w-7xl mx-auto px-4 pt-12">
//         <div className="flex justify-center gap-4 mb-8">
//           <button
//             onClick={() => setActiveCategory("common")}
//             className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
//               activeCategory === "common"
//                 ? "bg-yellow-400 text-gray-900 shadow-lg"
//                 : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
//             }`}
//           >
//             <Users size={18} />
//             Common Events
//             {/* Common Events ({allEvents.filter(e => e.type === "common").length}) */}
//           </button>
//           <button
//             onClick={() => setActiveCategory("marriage")}
//             className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
//               activeCategory === "marriage"
//                 ? "bg-yellow-400 text-gray-900 shadow-lg"
//                 : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
//             }`}
//           >
//             <Heart size={18} />
//              Marriage Events
//             {/* Marriage Events ({allEvents.filter(e => e.type === "marriage").length}) */}
//           </button>
//           <button
//             onClick={() => setActiveCategory("deaths")}
//             className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
//               activeCategory === "deaths"
//                 ? "bg-yellow-400 text-gray-900 shadow-lg"
//                 : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
//             }`}
//           >
//             <Cross size={18} />
//              Deaths / Memorials
//             {/* Deaths / Memorials ({allEvents.filter(e => e.type === "deaths").length}) */}
//           </button>
//         </div>
//       </div>

//       {/* Events Grid */}
//       <div className="py-12 px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//           {currentEvents.length > 0 ? (
//             currentEvents.map((event, index) => (
//               <motion.div
//                 key={event.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
//                 onClick={() => openModal(event)}
//               >
//                 {/* Image Container */}
//                 <div className="relative overflow-hidden h-48">
//                   <img
//                     src={event.img}
//                     alt={event.name}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
                  
//                   {/* Overlay with View Icon */}
//                   <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="bg-yellow-400 text-gray-900 p-2 rounded-full hover:bg-yellow-500 transition-colors duration-300"
//                     >
//                       <Eye size={20} />
//                     </motion.button>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-4">
//                   <p className="text-gray-500 text-xs flex items-center gap-1">
//                     <Calendar size={12} />
//                     {event.date}
//                   </p>
//                   <h3 className="font-bold text-base mt-1 text-gray-800 line-clamp-2">
//                     {event.name}
//                   </h3>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <div className="col-span-full text-center py-20">
//               <p className="text-gray-500">No events found in this category.</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Modal Window */}
//       <AnimatePresence>
//         {isModalOpen && selectedEvent && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 30 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 30 }}
//               transition={{ type: "spring", duration: 0.4 }}
//               className="bg-white rounded-xl max-w-md w-full max-h-[85vh] overflow-y-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Modal Image */}
//               <div className="relative h-40 sticky top-0">
//                 <img
//                   src={selectedEvent.img}
//                   alt={selectedEvent.name}
//                   className="w-full h-full object-cover rounded-t-xl"
//                 />
//                 <button
//                   onClick={closeModal}
//                   className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors duration-300"
//                 >
//                   <X size={16} />
//                 </button>
//               </div>

//               {/* Modal Content */}
//               <div className="p-5">
//                 <h2 className="text-xl font-bold text-gray-800 mb-2">
//                   {selectedEvent.name}
//                 </h2>
                
//                 <div className="flex items-center gap-3 mb-4 text-gray-600 text-xs">
//                   <div className="flex items-center gap-1">
//                     <Calendar size={14} className="text-yellow-500" />
//                     <span>{selectedEvent.date}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <User size={14} className="text-yellow-500" />
//                     <span>By {selectedEvent.author}</span>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <div className="mb-4">
//                   <h3 className="text-sm font-semibold text-gray-800 mb-1.5 flex items-center gap-1.5">
//                     <FileText size={14} className="text-yellow-500" />
//                     Description
//                   </h3>
//                   <p className="text-gray-600 text-xs leading-relaxed">
//                     {selectedEvent.description}
//                   </p>
//                 </div>

//                 {/* Highlights */}
//                 <div className="mb-4">
//                   <h3 className="text-sm font-semibold text-gray-800 mb-1.5 flex items-center gap-1.5">
//                     <Star size={14} className="text-yellow-500" />
//                     Event Highlights
//                   </h3>
//                   <ul className="grid grid-cols-1 gap-1">
//                     {selectedEvent.highlights.map((highlight, idx) => (
//                       <li key={idx} className="flex items-center gap-1.5 text-gray-600 text-xs">
//                         <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
//                         {highlight}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Events;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Eye, X, Calendar, User, FileText, Star, Heart, Users, Cross } from "lucide-react";
// import { useEffect } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase"; // adjust path

// const Events = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("common");
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//   loadEvents();
// }, []);

// const loadEvents = async () => {
//   try {
//     const snap = await getDocs(collection(db, "events"));

//     const data = snap.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data()
//     }));

//     setEvents(data);

//   } catch (error) {
//     console.log(error);
//   }
// };

//   // Get events based on active category from shared allEvents
//   // const getCurrentEvents = () => {
//   //   if (activeCategory === "common") {
//   //     return allEvents.filter(event => event.type === "common");
//   //   }
//   //   if (activeCategory === "marriage") {
//   //     return allEvents.filter(event => event.type === "marriage");
//   //   }
//   //   return allEvents.filter(event => event.type === "deaths");
//   // };
//   const getCurrentEvents = () => {
//   return events.filter(event => event.section === activeCategory);
// };

//   const openModal = (event) => {
//     setSelectedEvent(event);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedEvent(null);
//   };

//   const currentEvents = getCurrentEvents();

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gray-50"
//     >
//       {/* Hero Section */}
//       <div className="relative">
//         <img
//           src="https://images.unsplash.com/photo-1474814947326-d835369963a5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           className="w-full h-screen object-cover"
//           alt="Scenic view"
//         />
//         <div className="absolute inset-0 bg-black/60"></div>
//         <motion.div 
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
//         >
//           <motion.h1 
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="text-5xl font-bold text-white"
//           >
//             Our Events
//           </motion.h1>
//           <motion.p 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="mt-5 text-white max-w-2xl"
//           >
//             Join us in fellowship and faith. Explore our church services, marriage celebrations, and memorial services as we worship, serve, and grow together as one family in Christ.
//           </motion.p>
//         </motion.div>
//       </div>

//       {/* Category Tabs */}
//       <motion.div 
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="max-w-7xl mx-auto px-4 pt-12"
//       >
//         <div className="flex justify-center gap-4 mb-8 flex-wrap">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setActiveCategory("common")}
//             className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
//               activeCategory === "common"
//                 ? "bg-yellow-400 text-gray-900 shadow-lg"
//                 : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
//             }`}
//           >
//             <Users size={18} />
//             Common Events
//           </motion.button>
          
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setActiveCategory("marriage")}
//             className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
//               activeCategory === "marriage"
//                 ? "bg-yellow-400 text-gray-900 shadow-lg"
//                 : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
//             }`}
//           >
//             <Heart size={18} />
//             Marriage Events
//           </motion.button>
          
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setActiveCategory("deaths")}
//             className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
//               activeCategory === "deaths"
//                 ? "bg-yellow-400 text-gray-900 shadow-lg"
//                 : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
//             }`}
//           >
//             <Cross size={18} />
//             Deaths / Memorials
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Events Grid */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//         className="py-12 px-4"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//           {currentEvents.length > 0 ? (
//             currentEvents.map((event, index) => (
//               <motion.div
//                 key={event.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 whileHover={{ y: -5 }}
//                 className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
//                 onClick={() => openModal(event)}
//               >
//                 {/* Image Container */}
//                 <div className="relative overflow-hidden h-48">
//                   <motion.img
//                     src={event.img}
//                     alt={event.name}
//                     className="w-full h-full object-cover"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.4 }}
//                   />
                  
//                   {/* Overlay with View Icon */}
//                   <motion.div 
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                     className="absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center"
//                   >
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="bg-yellow-400 text-gray-900 p-2 rounded-full hover:bg-yellow-500 transition-colors duration-300"
//                     >
//                       <Eye size={20} />
//                     </motion.button>
//                   </motion.div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-4">
//                   <p className="text-gray-500 text-xs flex items-center gap-1">
//                     <Calendar size={12} />
//                     {event.date}
//                   </p>
//                   <h3 className="font-bold text-base mt-1 text-gray-800 line-clamp-2">
//                     {event.name}
//                   </h3>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="col-span-full text-center py-20"
//             >
//               <p className="text-gray-500">No events found in this category.</p>
//             </motion.div>
//           )}
//         </div>
//       </motion.div>

//       {/* Modal Window */}
//       <AnimatePresence>
//         {isModalOpen && selectedEvent && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 30 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 30 }}
//               transition={{ type: "spring", duration: 0.4 }}
//               className="bg-white rounded-xl max-w-md w-full max-h-[85vh] overflow-y-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Modal Image */}
//               <div className="relative h-40 sticky top-0">
//                 <img
//                   src={selectedEvent.img}
//                   alt={selectedEvent.name}
//                   className="w-full h-full object-cover rounded-t-xl"
//                 />
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={closeModal}
//                   className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors duration-300"
//                 >
//                   <X size={16} />
//                 </motion.button>
//               </div>

//               {/* Modal Content */}
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="p-5"
//               >
//                 <h2 className="text-xl font-bold text-gray-800 mb-2">
//                   {selectedEvent.name}
//                 </h2>
                
//                 <div className="flex items-center gap-3 mb-4 text-gray-600 text-xs">
//                   <div className="flex items-center gap-1">
//                     <Calendar size={14} className="text-yellow-500" />
//                     <span>{selectedEvent.date}</span>
//                   </div>
//                   {/* <div className="flex items-center gap-1">
//                     <User size={14} className="text-yellow-500" />
//                     <span>By {selectedEvent.author}</span>
//                   </div> */}
//                 </div>

//                 {/* Description */}
//                 <div className="mb-4">
//                   <h3 className="text-sm font-semibold text-gray-800 mb-1.5 flex items-center gap-1.5">
//                     <FileText size={14} className="text-yellow-500" />
//                     Description
//                   </h3>
//                   <p className="text-gray-600 text-xs leading-relaxed">
//                     {selectedEvent.description}
//                   </p>
//                 </div>

//                 {/* Highlights */}
//                 <div className="mb-4">
//                   <h3 className="text-sm font-semibold text-gray-800 mb-1.5 flex items-center gap-1.5">
//                     <Star size={14} className="text-yellow-500" />
//                     Event Highlights
//                   </h3>
//                   <ul className="grid grid-cols-1 gap-1">
//                     {selectedEvent.highlights.map((highlight, idx) => (
//                       <motion.li 
//                         key={idx} 
//                         initial={{ opacity: 0, x: -10 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.1 * idx }}
//                         className="flex items-center gap-1.5 text-gray-600 text-xs"
//                       >
//                         <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
//                         {highlight}
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default Events;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Eye, X, Calendar, User, FileText, Star, Heart, Users, Cross } from "lucide-react";
// import { useEffect } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase"; // adjust path

// const Events = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(null); // Start with null
//   const [events, setEvents] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     setLoading(true);
//     await Promise.all([loadCategories(), loadEvents()]);
//     setLoading(false);
//   };

//   // Load categories from Firebase (eventCategories collection)
//   const loadCategories = async () => {
//     try {
//       const snap = await getDocs(collection(db, "eventCategories"));
//       const data = snap.docs.map(doc => ({
//         id: doc.id,
//         name: doc.data().name,
//         type: doc.data().type,
//       }));
//       setCategories(data);
//       // Set first category as active only if no category is set
//       if (data.length > 0 && !activeCategory) {
//         setActiveCategory(data[0].type);
//       }
//     } catch (error) {
//       console.log(error);
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
//       setEvents(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Get events based on active category
//   const getCurrentEvents = () => {
//     if (!activeCategory) return [];
//     return events.filter(event => event.section === activeCategory);
//   };

//   // Get icon for category
//   const getCategoryIcon = (type, size = 18) => {
//     switch(type) {
//       case "common":
//         return <Users size={size} />;
//       case "marriage":
//         return <Heart size={size} />;
//       case "deaths":
//         return <Cross size={size} />;
//       default:
//         return <Users size={size} />;
//     }
//   };

//   const openModal = (event) => {
//     setSelectedEvent(event);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedEvent(null);
//   };

//   const currentEvents = getCurrentEvents();

//   // Get highlight/special points - handle both string and array
//   const getHighlights = (event) => {
//     if (event.highlight) {
//       if (Array.isArray(event.highlight)) return event.highlight;
//       if (typeof event.highlight === 'string') return event.highlight.split('\n').filter(h => h.trim());
//     }
//     return [];
//   };

//   if (loading && categories.length === 0) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading events...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gray-50"
//     >
//       {/* Hero Section */}
//       <div className="relative">
//         <img
//           src="https://images.unsplash.com/photo-1474814947326-d835369963a5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           className="w-full h-screen object-cover"
//           alt="Scenic view"
//         />
//         <div className="absolute inset-0 bg-black/60"></div>
//         <motion.div 
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
//         >
//           <motion.h1 
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="text-5xl font-bold text-white"
//           >
//             Our Events
//           </motion.h1>
//           <motion.p 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="mt-5 text-white max-w-2xl"
//           >
//             Join us in fellowship and faith. Explore our church services, marriage celebrations, and memorial services as we worship, serve, and grow together as one family in Christ.
//           </motion.p>
//         </motion.div>
//       </div>

//       {/* Category Tabs - ONLY from Admin added categories (No default) */}
//       <motion.div 
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="max-w-7xl mx-auto px-4 pt-12"
//       >
//         <div className="flex justify-center gap-4 mb-8 flex-wrap">
//           {categories.length > 0 ? (
//             categories.map((category) => (
//               <motion.button
//                 key={category.id}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setActiveCategory(category.type)}
//                 className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
//                   activeCategory === category.type
//                     ? "bg-yellow-400 text-gray-900 shadow-lg"
//                     : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
//                 }`}
//               >
//                 {getCategoryIcon(category.type, 18)}
//                 {category.name}
//               </motion.button>
//             ))
//           ) : (
//             <div className="text-center py-4">
//               <p className="text-gray-500">No categories added yet. Please add categories from admin panel.</p>
//             </div>
//           )}
//         </div>
//       </motion.div>

//       {/* Events Grid */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//         className="py-12 px-4"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//           {currentEvents.length > 0 ? (
//             currentEvents.map((event, index) => (
//               <motion.div
//                 key={event.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 whileHover={{ y: -5 }}
//                 className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
//                 onClick={() => openModal(event)}
//               >
//                 {/* Image Container */}
//                 <div className="relative overflow-hidden h-48">
//                   <motion.img
//                     src={event.image || event.img || "https://via.placeholder.com/400x300?text=No+Image"}
//                     alt={event.title || event.name}
//                     className="w-full h-full object-cover"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.4 }}
//                     onError={(e) => {
//                       e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
//                     }}
//                   />
                  
//                   {/* Overlay with View Icon */}
//                   <motion.div 
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                     className="absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center"
//                   >
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="bg-yellow-400 text-gray-900 p-2 rounded-full hover:bg-yellow-500 transition-colors duration-300"
//                     >
//                       <Eye size={20} />
//                     </motion.button>
//                   </motion.div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-4">
//                   <p className="text-gray-500 text-xs flex items-center gap-1">
//                     <Calendar size={12} />
//                     {event.date}
//                   </p>
//                   <h3 className="font-bold text-base mt-1 text-gray-800 line-clamp-2">
//                     {event.title || event.name}
//                   </h3>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="col-span-full text-center py-20"
//             >
//               <p className="text-gray-500">
//                 {activeCategory ? `No events found in "${categories.find(c => c.type === activeCategory)?.name || activeCategory}" category.` : "No events found."}
//               </p>
//             </motion.div>
//           )}
//         </div>
//       </motion.div>

//       {/* Modal Window */}
//       <AnimatePresence>
//         {isModalOpen && selectedEvent && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 30 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 30 }}
//               transition={{ type: "spring", duration: 0.4 }}
//               className="bg-white rounded-xl max-w-md w-full max-h-[85vh] overflow-y-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Modal Image */}
//               <div className="relative h-48 sticky top-0">
//                 <img
//                   src={selectedEvent.image || selectedEvent.img || "https://via.placeholder.com/400x300?text=No+Image"}
//                   alt={selectedEvent.title || selectedEvent.name}
//                   className="w-full h-full object-cover rounded-t-xl"
//                   onError={(e) => {
//                     e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
//                   }}
//                 />
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={closeModal}
//                   className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors duration-300"
//                 >
//                   <X size={16} />
//                 </motion.button>
//               </div>

//               {/* Modal Content */}
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="p-5"
//               >
//                 <h2 className="text-xl font-bold text-gray-800 mb-2">
//                   {selectedEvent.title || selectedEvent.name}
//                 </h2>
                
//                 <div className="flex items-center gap-3 mb-4 text-gray-600 text-xs">
//                   <div className="flex items-center gap-1">
//                     <Calendar size={14} className="text-yellow-500" />
//                     <span>{selectedEvent.date}</span>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <div className="mb-4">
//                   <h3 className="text-sm font-semibold text-gray-800 mb-1.5 flex items-center gap-1.5">
//                     <FileText size={14} className="text-yellow-500" />
//                     Description
//                   </h3>
//                   <p className="text-gray-600 text-xs leading-relaxed">
//                     {selectedEvent.description}
//                   </p>
//                 </div>

//                 {/* Highlights */}
//                 {getHighlights(selectedEvent).length > 0 && (
//                   <div className="mb-4">
//                     <h3 className="text-sm font-semibold text-gray-800 mb-1.5 flex items-center gap-1.5">
//                       <Star size={14} className="text-yellow-500" />
//                       Event Highlights
//                     </h3>
//                     <ul className="grid grid-cols-1 gap-1">
//                       {getHighlights(selectedEvent).map((highlight, idx) => (
//                         <motion.li 
//                           key={idx} 
//                           initial={{ opacity: 0, x: -10 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: 0.1 * idx }}
//                           className="flex items-center gap-1.5 text-gray-600 text-xs"
//                         >
//                           <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
//                           {highlight}
//                         </motion.li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default Events;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, Calendar, FileText, Star, Heart, Users, Cross } from "lucide-react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(null); // Changed to store ID
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    await Promise.all([loadCategories(), loadEvents()]);
    setLoading(false);
  };

  const loadCategories = async () => {
    try {
      const snap = await getDocs(collection(db, "eventCategories"));
      const data = snap.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        type: doc.data().type || doc.id, // Use id as fallback if type doesn't exist
      }));
      console.log("📁 Loaded categories:", data);
      setCategories(data);
      if (data.length > 0 && !activeCategoryId) {
        setActiveCategoryId(data[0].id); // Store the ID instead of type
      }
    } catch (error) {
      console.error("Error loading categories:", error);
    }
  };

  const loadEvents = async () => {
    try {
      const snap = await getDocs(collection(db, "events"));
      const data = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("📊 Loaded events:", data);
      setEvents(data);
    } catch (error) {
      console.error("Error loading events:", error);
    }
  };

  // Get events based on active category ID
  const getCurrentEvents = () => {
    if (!activeCategoryId || events.length === 0 || categories.length === 0) {
      return [];
    }
    
    // Find the selected category
    const selectedCategory = categories.find(c => c.id === activeCategoryId);
    
    if (!selectedCategory) {
      return [];
    }
    
    console.log("🔍 Selected Category Name:", selectedCategory.name);
    
    // Filter events where section matches the category NAME
    const filtered = events.filter(event => {
      return event.section === selectedCategory.name;
    });
    
    console.log(`📊 Found ${filtered.length} events for ${selectedCategory.name}`);
    return filtered;
  };

  const getCategoryIcon = (categoryName, size = 18) => {
    const nameLower = categoryName?.toLowerCase() || "";
    if (nameLower.includes("common")) return <Users size={size} />;
    if (nameLower.includes("marriage")) return <Heart size={size} />;
    if (nameLower.includes("death") || nameLower.includes("memorial")) return <Cross size={size} />;
    return <Users size={size} />;
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const currentEvents = getCurrentEvents();

  const getHighlights = (event) => {
    if (event.highlight) {
      if (Array.isArray(event.highlight)) return event.highlight;
      if (typeof event.highlight === 'string') return event.highlight.split('\n').filter(h => h.trim());
    }
    return [];
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1474814947326-d835369963a5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-screen object-cover"
          alt="Scenic view"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl font-bold text-white"
          >
            Our Events
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 text-white max-w-2xl"
          >
            Join us in fellowship and faith. Explore our church services, marriage celebrations, and memorial services as we worship, serve, and grow together as one family in Christ.
          </motion.p>
        </motion.div>
      </div>

      {/* Category Tabs */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-7xl mx-auto px-4 pt-12"
      >
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.length > 0 ? (
            categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  console.log("Clicked category:", category);
                  setActiveCategoryId(category.id);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategoryId === category.id
                    ? "bg-yellow-400 text-gray-900 shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
                }`}
              >
                {getCategoryIcon(category.name, 18)}
                {category.name}
              </motion.button>
            ))
          ) : (
            <div className="text-center py-4">
              <p className="text-gray-500">No categories added yet.</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Events Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="py-12 px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {currentEvents.length > 0 ? (
            currentEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(event)}
              >
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={event.image || "https://via.placeholder.com/400x300?text=No+Image"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
                    }}
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-yellow-400 text-gray-900 p-2 rounded-full hover:bg-yellow-500 transition-colors duration-300"
                    >
                      <Eye size={20} />
                    </motion.button>
                  </motion.div>
                </div>
                <div className="p-4">
                  <p className="text-gray-500 text-xs flex items-center gap-1">
                    <Calendar size={12} />
                    {event.date}
                  </p>
                  <h3 className="font-bold text-base mt-1 text-gray-800 line-clamp-2">
                    {event.title}
                  </h3>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-20"
            >
              <p className="text-gray-500">
                No events found in "{categories.find(c => c.id === activeCategoryId)?.name || 'selected'}" category.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Available events: {events.map(e => `${e.title} (${e.section})`).join(', ')}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Modal Window */}
      <AnimatePresence>
        {isModalOpen && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white rounded-xl max-w-md w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 sticky top-0">
                <img
                  src={selectedEvent.image || "https://via.placeholder.com/400x300?text=No+Image"}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover rounded-t-xl"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeModal}
                  className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors duration-300"
                >
                  <X size={16} />
                </motion.button>
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="p-5"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {selectedEvent.title}
                </h2>
                <div className="flex items-center gap-3 mb-4 text-gray-600 text-xs">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-yellow-500" />
                    <span>{selectedEvent.date}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1.5 flex items-center gap-1.5">
                    <FileText size={14} className="text-yellow-500" />
                    Description
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {selectedEvent.description}
                  </p>
                </div>
                {getHighlights(selectedEvent).length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1.5 flex items-center gap-1.5">
                      <Star size={14} className="text-yellow-500" />
                      Event Highlights
                    </h3>
                    <ul className="grid grid-cols-1 gap-1">
                      {getHighlights(selectedEvent).map((highlight, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          className="flex items-center gap-1.5 text-gray-600 text-xs"
                        >
                          <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Events;

