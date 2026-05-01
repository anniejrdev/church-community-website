// // import React, { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { Eye, Edit, Trash2, Plus, Calendar, User, FileText, Star } from "lucide-react";
// // import { allEvents } from "../../service/EventService";
// // import EventsAddModal from "../EventPage/EventAdd";
// // import EventsEditModal from "../EventPage/EventEdit";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const Events = () => {
// //   const [events, setEvents] = useState([]);
// //   const [search, setSearch] = useState("");
// //   const [selectedEvent, setSelectedEvent] = useState(null);
// //   const [isViewModalOpen, setIsViewModalOpen] = useState(false);
// //   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
// //   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
// //   const [editingEvent, setEditingEvent] = useState(null);
// //   const [activeTab, setActiveTab] = useState("all");

// //   // Load events from localStorage or use allEvents
// //   useEffect(() => {
// //     const storedEvents = localStorage.getItem("events");
// //     if (storedEvents) {
// //       setEvents(JSON.parse(storedEvents));
// //     } else {
// //       setEvents(allEvents);
// //       localStorage.setItem("events", JSON.stringify(allEvents));
// //     }
// //   }, []);

// //   // Filter events based on search and tab
// //   const filteredEvents = events.filter((event) => {
// //     const matchesSearch = event.name.toLowerCase().includes(search.toLowerCase());
// //     if (activeTab === "all") return matchesSearch;
// //     return matchesSearch && event.type === activeTab;
// //   });

// //   // Stats
// //   const totalEvents = events.length;
// //   const commonEvents = events.filter(e => e.type === "common").length;
// //   const marriageEvents = events.filter(e => e.type === "marriage").length;
// //   const deathsEvents = events.filter(e => e.type === "deaths").length;

// //   // Open View Modal
// //   const openViewModal = (event) => {
// //     setSelectedEvent(event);
// //     setIsViewModalOpen(true);
// //   };

// //   // Open Add Modal
// //   const openAddModal = () => {
// //     setIsAddModalOpen(true);
// //   };

// //   // Open Edit Modal
// //   const openEditModal = (event) => {
// //     setEditingEvent(event);
// //     setIsEditModalOpen(true);
// //   };

// //   // Save New Event
// //   const handleSaveAdd = (newEvent) => {
// //     const updatedEvents = [...events, newEvent];
// //     setEvents(updatedEvents);
// //     localStorage.setItem("events", JSON.stringify(updatedEvents));
// //     toast.success("Event added successfully");
// //     setIsAddModalOpen(false);
// //   };

// //   // Save Edited Event
// //   const handleSaveEdit = (updatedEvent) => {
// //     const updatedEvents = events.map(event => 
// //       event.id === updatedEvent.id ? updatedEvent : event
// //     );
// //     setEvents(updatedEvents);
// //     localStorage.setItem("events", JSON.stringify(updatedEvents));
// //     toast.success("Event updated successfully");
// //     setIsEditModalOpen(false);
// //     setEditingEvent(null);
// //   };

// //   // Delete Event
// //   const handleDelete = (id) => {
// //     if (window.confirm("Are you sure you want to delete this event?")) {
// //       const updatedEvents = events.filter(event => event.id !== id);
// //       setEvents(updatedEvents);
// //       localStorage.setItem("events", JSON.stringify(updatedEvents));
// //       toast.error("Event deleted successfully");
// //     }
// //   };

// //   return (
// //     <motion.div 
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 0.5 }}
// //       className="min-h-screen bg-gray-50 p-6"
// //     >
// //       <ToastContainer position="top-right" autoClose={2000} theme="colored" />

// //       {/* Header */}
// //       <div className="mb-6">
// //         <h1 className="text-2xl font-bold text-gray-800">Events Management</h1>
// //         <p className="text-sm text-gray-500 mt-1">Manage and view all church events</p>
// //       </div>

// //       {/* Stats Cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
// //         <div className="bg-white p-4 rounded-lg border border-gray-200">
// //           <div className="flex items-center justify-between">
// //             <div>
// //               <p className="text-xs text-gray-500 uppercase">Total Events</p>
// //               <h2 className="text-2xl font-bold text-gray-800">{totalEvents}</h2>
// //             </div>
// //             <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
// //               <Calendar size={18} className="text-blue-600" />
// //             </div>
// //           </div>
// //         </div>
// //         <div className="bg-white p-4 rounded-lg border border-gray-200">
// //           <div className="flex items-center justify-between">
// //             <div>
// //               <p className="text-xs text-gray-500 uppercase">Common Events</p>
// //               <h2 className="text-2xl font-bold text-yellow-600">{commonEvents}</h2>
// //             </div>
// //             <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
// //               <Star size={18} className="text-yellow-600" />
// //             </div>
// //           </div>
// //         </div>
// //         <div className="bg-white p-4 rounded-lg border border-gray-200">
// //           <div className="flex items-center justify-between">
// //             <div>
// //               <p className="text-xs text-gray-500 uppercase">Marriage Events</p>
// //               <h2 className="text-2xl font-bold text-pink-600">{marriageEvents}</h2>
// //             </div>
// //             <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
// //               <User size={18} className="text-pink-600" />
// //             </div>
// //           </div>
// //         </div>
// //         <div className="bg-white p-4 rounded-lg border border-gray-200">
// //           <div className="flex items-center justify-between">
// //             <div>
// //               <p className="text-xs text-gray-500 uppercase">Deaths/Memorials</p>
// //               <h2 className="text-2xl font-bold text-gray-600">{deathsEvents}</h2>
// //             </div>
// //             <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
// //               <FileText size={18} className="text-gray-600" />
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Top Bar */}
// //       <div className="bg-white rounded-lg mb-4 p-4 border border-gray-200">
// //         <div className="flex flex-wrap justify-between items-center gap-4">
// //           <div className="flex items-center gap-3">
// //             <button
// //               onClick={openAddModal}
// //               className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
// //             >
// //               <Plus size={16} />
// //               Add Event
// //             </button>
            
// //             {/* Tab Filters */}
// //             <div className="flex gap-2">
// //               <button
// //                 onClick={() => setActiveTab("all")}
// //                 className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
// //                   activeTab === "all" 
// //                     ? "bg-yellow-400 text-gray-900" 
// //                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
// //                 }`}
// //               >
// //                 All
// //               </button>
// //               <button
// //                 onClick={() => setActiveTab("common")}
// //                 className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
// //                   activeTab === "common" 
// //                     ? "bg-yellow-400 text-gray-900" 
// //                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
// //                 }`}
// //               >
// //                 Common
// //               </button>
// //               <button
// //                 onClick={() => setActiveTab("marriage")}
// //                 className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
// //                   activeTab === "marriage" 
// //                     ? "bg-yellow-400 text-gray-900" 
// //                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
// //                 }`}
// //               >
// //                 Marriage
// //               </button>
// //               <button
// //                 onClick={() => setActiveTab("deaths")}
// //                 className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
// //                   activeTab === "deaths" 
// //                     ? "bg-yellow-400 text-gray-900" 
// //                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
// //                 }`}
// //               >
// //                 Deaths
// //               </button>
// //             </div>
// //           </div>

// //           {/* Search */}
// //           <div className="relative">
// //             <input
// //               type="text"
// //               placeholder="Search events..."
// //               value={search}
// //               onChange={(e) => setSearch(e.target.value)}
// //               className="pl-9 pr-4 py-1.5 w-64 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
// //             />
// //             <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //             </svg>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Table */}
// //       <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
// //         <div className="h-[60vh] overflow-y-auto">
// //           <table className="w-full text-sm">
// //             <thead className="sticky top-0 bg-yellow-500 text-white z-10">
// //               <tr>
// //                 <th className="border border-gray-300 px-4 py-3 w-[60px] text-center">NO</th>
// //                 <th className="border border-gray-300 px-4 py-3 w-[100px] text-center">IMAGE</th>
// //                 <th className="border border-gray-300 px-4 py-3 text-left">EVENT NAME</th>
// //                 <th className="border border-gray-300 px-4 py-3 w-[120px] text-left">DATE</th>
// //                 <th className="border border-gray-300 px-4 py-3 w-[150px] text-left">AUTHOR</th>
// //                 <th className="border border-gray-300 px-4 py-3 w-[120px] text-center">ACTION</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {filteredEvents.length === 0 ? (
// //                 <tr>
// //                   <td colSpan="6" className="text-center py-8 text-gray-500">
// //                     No events found
// //                   </td>
// //                 </tr>
// //               ) : (
// //                 filteredEvents.map((event, index) => (
// //                   <tr key={event.id} className="hover:bg-gray-50 transition-colors">
// //                     <td className="border border-gray-200 px-4 py-3 text-center">
// //                       {index + 1}
// //                     </td>
                    
// //                     {/* Image Column */}
// //                     <td className="border border-gray-200 px-4 py-2 text-center">
// //                       <img 
// //                         src={event.img} 
// //                         alt={event.name}
// //                         className="w-12 h-12 object-cover rounded-md mx-auto"
// //                       />
// //                     </td>
                    
// //                     <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">
// //                       {event.name}
// //                     </td>
// //                     <td className="border border-gray-200 px-4 py-3 text-gray-600">
// //                       {event.date}
// //                     </td>
// //                     <td className="border border-gray-200 px-4 py-3 text-gray-600">
// //                       {event.author}
// //                     </td>
// //                     <td className="border border-gray-200 px-4 py-2 text-center">
// //                       <div className="flex justify-center items-center gap-3">
// //                         <button
// //                           onClick={() => openViewModal(event)}
// //                           className="text-blue-600 hover:text-blue-700"
// //                           title="View"
// //                         >
// //                           <Eye size={16} />
// //                         </button>
// //                         <button
// //                           onClick={() => openEditModal(event)}
// //                           className="text-yellow-600 hover:text-yellow-700"
// //                           title="Edit"
// //                         >
// //                           <Edit size={16} />
// //                         </button>
// //                         <button
// //                           onClick={() => handleDelete(event.id)}
// //                           className="text-red-500 hover:text-red-700"
// //                           title="Delete"
// //                         >
// //                           <Trash2 size={16} />
// //                         </button>
// //                       </div>
// //                     </td>
// //                   </tr>
// //                 ))
// //               )}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>

// //       {/* Footer Stats */}
// //       {filteredEvents.length > 0 && (
// //         <div className="mt-4 text-center">
// //           <p className="text-xs text-gray-500">
// //             Showing {filteredEvents.length} of {events.length} events
// //           </p>
// //         </div>
// //       )}

// //       {/* View Modal */}
// //       {isViewModalOpen && selectedEvent && (
// //         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
// //           <div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
// //             <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-5 py-3 rounded-t-lg flex justify-between items-center sticky top-0">
// //               <h3 className="text-lg font-semibold text-white">Event Details</h3>
// //               <button onClick={() => setIsViewModalOpen(false)} className="text-white hover:text-gray-200">
// //                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
// //                 </svg>
// //               </button>
// //             </div>
// //             <div className="p-5">
// //               <div className="mb-4">
// //                 <img src={selectedEvent.img} alt={selectedEvent.name} className="w-full h-48 object-cover rounded-lg" />
// //               </div>
// //               <div className="space-y-3">
// //                 <div>
// //                   <label className="text-xs font-semibold text-gray-500">Event Name</label>
// //                   <p className="text-sm text-gray-800 font-medium">{selectedEvent.name}</p>
// //                 </div>
// //                 <div className="grid grid-cols-2 gap-3">
// //                   <div>
// //                     <label className="text-xs font-semibold text-gray-500">Date</label>
// //                     <p className="text-sm text-gray-800">{selectedEvent.date}</p>
// //                   </div>
// //                   <div>
// //                     <label className="text-xs font-semibold text-gray-500">Author</label>
// //                     <p className="text-sm text-gray-800">{selectedEvent.author}</p>
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <label className="text-xs font-semibold text-gray-500">Description</label>
// //                   <p className="text-sm text-gray-600 leading-relaxed">{selectedEvent.description}</p>
// //                 </div>
// //                 <div>
// //                   <label className="text-xs font-semibold text-gray-500">Highlights</label>
// //                   <ul className="list-disc list-inside mt-1 space-y-1">
// //                     {selectedEvent.highlights.map((highlight, idx) => (
// //                       <li key={idx} className="text-sm text-gray-600">{highlight}</li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="px-5 py-3 bg-gray-50 rounded-b-lg flex justify-end">
// //               <button onClick={() => setIsViewModalOpen(false)} className="px-4 py-1.5 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900">
// //                 Close
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Add Modal */}
// //       <EventsAddModal
// //         isOpen={isAddModalOpen}
// //         onClose={() => setIsAddModalOpen(false)}
// //         onSave={handleSaveAdd}
// //       />

// //       {/* Edit Modal */}
// //       <EventsEditModal
// //         isOpen={isEditModalOpen}
// //         onClose={() => {
// //           setIsEditModalOpen(false);
// //           setEditingEvent(null);
// //         }}
// //         onSave={handleSaveEdit}
// //         data={editingEvent}
// //       />
// //     </motion.div>
// //   );
// // };

// // export default Events;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Eye, Edit, Trash2, Plus, Calendar, User, FileText, Star } from "lucide-react";
// import { getAllEvents, addEvent, updateEvent, deleteEvent } from "../service/EventService";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const EventsAdmin = () => {
//   const [events, setEvents] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [isViewModalOpen, setIsViewModalOpen] = useState(false);
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editingEvent, setEditingEvent] = useState(null);
//   const [activeTab, setActiveTab] = useState("all");
//   const [form, setForm] = useState({
//     name: "",
//     date: "",
//     author: "",
//     description: "",
//     highlights: [],
//     img: "",
//     type: "common",
//   });
//   const [highlightInput, setHighlightInput] = useState("");

//   // Load events
//   useEffect(() => {
//     loadEvents();
//   }, []);

//   const loadEvents = () => {
//     const allEvents = getAllEvents();
//     setEvents(allEvents);
//   };

//   // Filter events
//   const filteredEvents = events.filter((event) => {
//     const matchesSearch = event.name.toLowerCase().includes(search.toLowerCase());
//     if (activeTab === "all") return matchesSearch;
//     return matchesSearch && event.type === activeTab;
//   });

//   // Stats
//   const totalEvents = events.length;
//   const commonEvents = events.filter(e => e.type === "common").length;
//   const marriageEvents = events.filter(e => e.type === "marriage").length;
//   const deathsEvents = events.filter(e => e.type === "deaths").length;

//   // Open View Modal
//   const openViewModal = (event) => {
//     setSelectedEvent(event);
//     setIsViewModalOpen(true);
//   };

//   // Open Add Modal
//   const openAddModal = () => {
//     setForm({
//       name: "",
//       date: "",
//       author: "",
//       description: "",
//       highlights: [],
//       img: "https://images.unsplash.com/photo-1438036680102-d9f07c44e0df?w=400&h=300&fit=crop",
//       type: "common",
//     });
//     setHighlightInput("");
//     setIsAddModalOpen(true);
//   };

//   // Open Edit Modal
//   const openEditModal = (event) => {
//     setEditingEvent(event);
//     setForm({
//       name: event.name,
//       date: event.date,
//       author: event.author,
//       description: event.description,
//       highlights: event.highlights,
//       img: event.img,
//       type: event.type,
//     });
//     setIsEditModalOpen(true);
//   };

//   // Save New Event
//   const handleSaveAdd = () => {
//     if (!form.name || !form.date || !form.author) {
//       toast.error("Please fill all required fields");
//       return;
//     }
//     const newEvent = { ...form, id: Date.now() };
//     addEvent(newEvent);
//     loadEvents();
//     toast.success("Event added successfully");
//     setIsAddModalOpen(false);
//   };

//   // Save Edited Event
//   const handleSaveEdit = () => {
//     if (!form.name || !form.date || !form.author) {
//       toast.error("Please fill all required fields");
//       return;
//     }
//     updateEvent(editingEvent.id, form);
//     loadEvents();
//     toast.success("Event updated successfully");
//     setIsEditModalOpen(false);
//     setEditingEvent(null);
//   };

//   // Delete Event
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this event?")) {
//       deleteEvent(id);
//       loadEvents();
//       toast.error("Event deleted successfully");
//     }
//   };

//   const addHighlight = () => {
//     if (highlightInput.trim()) {
//       setForm({ ...form, highlights: [...form.highlights, highlightInput.trim()] });
//       setHighlightInput("");
//     }
//   };

//   const removeHighlight = (index) => {
//     setForm({ ...form, highlights: form.highlights.filter((_, i) => i !== index) });
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gray-50 p-6"
//     >
//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />

//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Events Management - Admin</h1>
//         <p className="text-sm text-gray-500 mt-1">Manage and view all church events</p>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//         <div className="bg-white p-4 rounded-lg border border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs text-gray-500 uppercase">Total Events</p>
//               <h2 className="text-2xl font-bold text-gray-800">{totalEvents}</h2>
//             </div>
//             <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//               <Calendar size={18} className="text-blue-600" />
//             </div>
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-lg border border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs text-gray-500 uppercase">Common Events</p>
//               <h2 className="text-2xl font-bold text-yellow-600">{commonEvents}</h2>
//             </div>
//             <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
//               <Star size={18} className="text-yellow-600" />
//             </div>
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-lg border border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs text-gray-500 uppercase">Marriage Events</p>
//               <h2 className="text-2xl font-bold text-pink-600">{marriageEvents}</h2>
//             </div>
//             <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
//               <User size={18} className="text-pink-600" />
//             </div>
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-lg border border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs text-gray-500 uppercase">Deaths/Memorials</p>
//               <h2 className="text-2xl font-bold text-gray-600">{deathsEvents}</h2>
//             </div>
//             <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
//               <FileText size={18} className="text-gray-600" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Top Bar */}
//       <div className="bg-white rounded-lg mb-4 p-4 border border-gray-200">
//         <div className="flex flex-wrap justify-between items-center gap-4">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={openAddModal}
//               className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
//             >
//               <Plus size={16} />
//               Add Event
//             </button>
            
//             <div className="flex gap-2">
//               {["all", "common", "marriage", "deaths"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`px-3 py-1.5 text-xs rounded-md transition-colors capitalize ${
//                     activeTab === tab 
//                       ? "bg-yellow-400 text-gray-900" 
//                       : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search events..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="pl-9 pr-4 py-1.5 w-64 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
//             />
//             <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//         <div className="h-[60vh] overflow-y-auto">
//           <table className="w-full text-sm">
//             <thead className="sticky top-0 bg-yellow-500 text-white z-10">
//               <tr>
//                 <th className="border border-gray-300 px-4 py-3 w-[60px] text-center">NO</th>
//                 <th className="border border-gray-300 px-4 py-3 w-[100px] text-center">IMAGE</th>
//                 <th className="border border-gray-300 px-4 py-3 text-left">EVENT NAME</th>
//                 <th className="border border-gray-300 px-4 py-3 w-[120px] text-left">DATE</th>
//                 <th className="border border-gray-300 px-4 py-3 w-[150px] text-left">AUTHOR</th>
//                 <th className="border border-gray-300 px-4 py-3 w-[120px] text-center">ACTION</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredEvents.length === 0 ? (
//                 <tr>
//                   <td colSpan="6" className="text-center py-8 text-gray-500">
//                     No events found
//                   </td>
//                 </tr>
//               ) : (
//                 filteredEvents.map((event, index) => (
//                   <tr key={event.id} className="hover:bg-gray-50 transition-colors">
//                     <td className="border border-gray-200 px-4 py-3 text-center">{index + 1}</td>
//                     <td className="border border-gray-200 px-4 py-2 text-center">
//                       <img src={event.img} alt={event.name} className="w-12 h-12 object-cover rounded-md mx-auto" />
//                     </td>
//                     <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{event.name}</td>
//                     <td className="border border-gray-200 px-4 py-3 text-gray-600">{event.date}</td>
//                     <td className="border border-gray-200 px-4 py-3 text-gray-600">{event.author}</td>
//                     <td className="border border-gray-200 px-4 py-2 text-center">
//                       <div className="flex justify-center items-center gap-3">
//                         <button onClick={() => openViewModal(event)} className="text-blue-600 hover:text-blue-700" title="View">
//                           <Eye size={16} />
//                         </button>
//                         <button onClick={() => openEditModal(event)} className="text-yellow-600 hover:text-yellow-700" title="Edit">
//                           <Edit size={16} />
//                         </button>
//                         <button onClick={() => handleDelete(event.id)} className="text-red-500 hover:text-red-700" title="Delete">
//                           <Trash2 size={16} />
//                         </button>
//                       </div>
//                     </td>
//                   </td>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* View Modal */}
//       {isViewModalOpen && selectedEvent && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
//             <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-5 py-3 rounded-t-lg flex justify-between items-center sticky top-0">
//               <h3 className="text-lg font-semibold text-white">Event Details</h3>
//               <button onClick={() => setIsViewModalOpen(false)} className="text-white hover:text-gray-200">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//             <div className="p-5">
//               <img src={selectedEvent.img} alt={selectedEvent.name} className="w-full h-48 object-cover rounded-lg mb-4" />
//               <div className="space-y-3">
//                 <div><label className="text-xs font-semibold text-gray-500">Event Name</label><p className="text-sm text-gray-800 font-medium">{selectedEvent.name}</p></div>
//                 <div className="grid grid-cols-2 gap-3">
//                   <div><label className="text-xs font-semibold text-gray-500">Date</label><p className="text-sm text-gray-800">{selectedEvent.date}</p></div>
//                   <div><label className="text-xs font-semibold text-gray-500">Author</label><p className="text-sm text-gray-800">{selectedEvent.author}</p></div>
//                 </div>
//                 <div><label className="text-xs font-semibold text-gray-500">Description</label><p className="text-sm text-gray-600">{selectedEvent.description}</p></div>
//                 <div><label className="text-xs font-semibold text-gray-500">Highlights</label><ul className="list-disc list-inside mt-1">{selectedEvent.highlights.map((h, i) => (<li key={i} className="text-sm text-gray-600">{h}</li>))}</ul></div>
//               </div>
//             </div>
//             <div className="px-5 py-3 bg-gray-50 rounded-b-lg flex justify-end">
//               <button onClick={() => setIsViewModalOpen(false)} className="px-4 py-1.5 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900">Close</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Add/Edit Modal */}
//       {(isAddModalOpen || isEditModalOpen) && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto">
//             <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-5 py-3 rounded-t-lg flex justify-between items-center sticky top-0">
//               <h3 className="text-lg font-semibold text-white">{isAddModalOpen ? "Add Event" : "Edit Event"}</h3>
//               <button onClick={() => { setIsAddModalOpen(false); setIsEditModalOpen(false); }} className="text-white hover:text-gray-200">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//             <div className="p-5">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Event Name *</label>
//                   <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
//                   <input type="date" value={form.date} onChange={(e) => setForm({...form, date: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Author *</label>
//                   <input type="text" value={form.author} onChange={(e) => setForm({...form, author: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
//                 </div>
//                 <div className="col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
//                   <select value={form.type} onChange={(e) => setForm({...form, type: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
//                     <option value="common">Common Event</option>
//                     <option value="marriage">Marriage Event</option>
//                     <option value="deaths">Deaths / Memorial</option>
//                   </select>
//                 </div>
//                 <div className="col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
//                   <input type="text" value={form.img} onChange={(e) => setForm({...form, img: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
//                 </div>
//                 <div className="col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                   <textarea rows="3" value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none" />
//                 </div>
//                 <div className="col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Highlights</label>
//                   <div className="flex gap-2 mb-2">
//                     <input type="text" value={highlightInput} onChange={(e) => setHighlightInput(e.target.value)} className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm" placeholder="Add highlight" />
//                     <button type="button" onClick={addHighlight} className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500">Add</button>
//                   </div>
//                   {form.highlights.length > 0 && (
//                     <div className="space-y-1">
//                       {form.highlights.map((h, i) => (
//                         <div key={i} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
//                           <span className="text-sm">{h}</span>
//                           <button onClick={() => removeHighlight(i)} className="text-red-500">×</button>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className="px-5 py-3 bg-gray-50 rounded-b-lg flex justify-end gap-3">
//               <button onClick={() => { setIsAddModalOpen(false); setIsEditModalOpen(false); }} className="px-4 py-2 text-sm text-gray-700 bg-white border rounded-lg hover:bg-gray-50">Cancel</button>
//               <button onClick={isAddModalOpen ? handleSaveAdd : handleSaveEdit} className="px-4 py-2 text-sm text-white bg-green-600 rounded-lg hover:bg-green-700">Save</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default EventsAdmin;


// import { useEffect, useState } from "react";
// import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import OrderOfServiceAddModal from "../OrderOfService/OrderOfServiceAdd"
// import OrderOfServiceEditModal from "../OrderOfService/OrderOfServiceEdit";

// export default function OrderOfServiceList() {
//   const [currentDate, setCurrentDate] = useState("");
//   const [currentDay, setCurrentDay] = useState("");
//   const [selectedDay, setSelectedDay] = useState("");
//   const [services, setServices] = useState([]);
  
//   // Modal states
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editingService, setEditingService] = useState(null);

//   useEffect(() => {
//     const loadData = () => {
//       const saved = JSON.parse(localStorage.getItem("services")) || [];
//       setServices(saved);
//     };

//     loadData();

//     window.addEventListener("focus", loadData);

//     return () => window.removeEventListener("focus", loadData);
//   }, []);
  
//   // 🔥 CURRENT DATE + DAY
//   useEffect(() => {
//     const now = new Date();

//     const date = now.toISOString().split("T")[0];

//     const day = now
//       .toLocaleDateString("en-US", { weekday: "long" })
//       .toLowerCase();

//     setCurrentDate(date);
//     setCurrentDay(day);
//     setSelectedDay(day); // default filter = today
//   }, []);

//   // 🔥 FILTER DATA BASED ON SELECTED DAY
//   const filteredServices = services.filter(
//     (s) => s.day === selectedDay
//   );

//   // 🔹 DELETE
//   const handleDelete = (id) => {
//     const updated = services.filter((s) => s.id !== id);
//     setServices(updated);
//     localStorage.setItem("services", JSON.stringify(updated));
//     toast.error("Service deleted successfully");
//   };

//   // 🔹 Open Add Modal
//   const handleAddClick = () => {
//     setIsAddModalOpen(true);
//   };

//   // 🔹 Save New Service from Modal
//   const handleSaveAdd = (newService) => {
//     const existing = JSON.parse(localStorage.getItem("services")) || [];
//     const updated = [...existing, newService];
//     localStorage.setItem("services", JSON.stringify(updated));
//     setServices(updated);
//     toast.success("Service added successfully");
//     setIsAddModalOpen(false);
//   };

//   // 🔹 Open Edit Modal
//   const handleEditClick = (service) => {
//     setEditingService(service);
//     setIsEditModalOpen(true);
//   };

//   // 🔹 Save Edit from Modal
//   const handleSaveEdit = (updatedService) => {
//     const data = JSON.parse(localStorage.getItem("services")) || [];
//     const updated = data.map((s) =>
//       s.id === updatedService.id ? updatedService : s
//     );
//     localStorage.setItem("services", JSON.stringify(updated));
//     setServices(updated);
//     toast.success("Service updated successfully");
//     setIsEditModalOpen(false);
//     setEditingService(null);
//   };

//   return (
//     <div className="min-h-screen p-6">
//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      
//       <div className="max-w-8xl mx-auto">
//         {/* 🔥 TOP BAR */}
//         <div className="bg-white mb-6 py-4 -mt-8">
//           <div className="flex flex-wrap justify-between items-center gap-4">
//             {/* LEFT */}
//             <div className="flex items-center gap-4 flex-wrap">
//               <button
//                 onClick={handleAddClick}
//                 className="flex items-center gap-2 border border-yellow-500 text-black px-4 py-2 rounded-lg transition-all duration-200  text-sm font-medium"
//               >
//                 <FiPlus size={16} />
//                 Add New Service
//               </button>

           
             
//             </div>
//           </div>
//         </div>

//         {/* 🔥 TABLE */}
//         <div className="bg-white rounded">
//           <div className="h-[65vh] overflow-y-auto">
//             <table className="w-full text-xs">
//               {/* HEADER */}
//               <thead className="sticky top-0 bg-yellow-500 text-white">
//                 <tr>
//                   <th className="border border-gray-300 px-2 py-3 text-center w-[60px]">NO</th>
//                   <th className="border border-gray-300 px-2 py-3 text-center">SERVICE</th>
//                   <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">TIME</th>
//                   <th className="border border-gray-300 px-2 py-3 text-center">LOCATION</th>
//                   <th className="border border-gray-300 px-2 py-3 text-center">DESCRIPTION</th>
//                   <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">FATHER</th>
//                   <th className="border border-gray-300 px-2 py-3 text-center w-[100px]">ACTION</th>
//                 </tr>
//               </thead>

//               {/* BODY */}
//               <tbody>
//                 {filteredServices.length === 0 ? (
//                   <tr>
//                     <td colSpan="7" className="text-center py-6 text-gray-500">
//                       No data found
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredServices.map((s, i) => (
//                     <tr key={s.id} className="hover:bg-gray-50">
//                       <td className="border border-gray-200 text-center py-3">
//                         {i + 1}
//                       </td>
//                       <td className="border border-gray-200 text-center py-2 truncate">
//                         {s.name}
//                       </td>
//                       <td className="border border-gray-200 text-center py-2">
//                         {s.time}
//                       </td>
//                       <td className="border border-gray-200 text-center py-2 truncate">
//                         {s.location}
//                       </td>
//                       <td className="border border-gray-200 text-center py-2 truncate">
//                         {s.description || "-"}
//                       </td>
//                       <td className="border border-gray-200 text-center py-2">
//                         {s.requiresFather ? s.fatherName || "-" : "-"}
//                       </td>
//                       <td className="border border-gray-200 text-center py-2">
//                         <div className="flex justify-center gap-2">
//                           <button
//                             onClick={() => handleEditClick(s)}
//                             className="text-yellow-600 hover:scale-110 transition"
//                             title="Edit Service"
//                           >
//                             <FiEdit size={14} />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(s.id)}
//                             className="text-red-500 hover:scale-110 transition"
//                             title="Delete Service"
//                           >
//                             <FiTrash2 size={14} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* Add Modal */}
//       <OrderOfServiceAddModal
//         isOpen={isAddModalOpen}
//         onClose={() => setIsAddModalOpen(false)}
//         onSave={handleSaveAdd}
//       />

//       {/* Edit Modal */}
//       <OrderOfServiceEditModal
//         isOpen={isEditModalOpen}
//         onClose={() => {
//           setIsEditModalOpen(false);
//           setEditingService(null);
//         }}
//         onSave={handleSaveEdit}
//         data={editingService}
//       />
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { Plus, Edit2, Trash2, Eye, Search, X, Calendar, Tag, FileText, Star } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import EventAddModal from "../EventPage/EventAdd";
// import EventEditModal from "../EventPage/EventEdit";

// export default function EventList() {
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [isViewModalOpen, setIsViewModalOpen] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   // LOAD EVENTS
//   useEffect(() => {
//     loadEvents();
//   }, []);

//   const loadEvents = () => {
//     const data = JSON.parse(localStorage.getItem("events")) || [];
//     setEvents(data);
//     setFilteredEvents(data);
//   };

//   // SEARCH
//   useEffect(() => {
//     if (searchTerm === "") {
//       setFilteredEvents(events);
//     } else {
//       const filtered = events.filter(event =>
//         event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         event.section?.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredEvents(filtered);
//     }
//   }, [searchTerm, events]);

//   // DELETE EVENT
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this event?")) {
//       const updated = events.filter(event => event.id !== id);
//       localStorage.setItem("events", JSON.stringify(updated));
//       setEvents(updated);
//       toast.error("Event deleted successfully");
//     }
//   };

//   // OPEN MODALS
//   const openAddModal = () => {
//     setIsAddModalOpen(true);
//   };

//   const openEditModal = (event) => {
//     setSelectedEvent(event);
//     setIsEditModalOpen(true);
//   };

//   const openViewModal = (event) => {
//     setSelectedEvent(event);
//     setIsViewModalOpen(true);
//   };

//   // HANDLE SAVE FROM ADD MODAL
//   const handleSaveAdd = (newEvent) => {
//     const existing = JSON.parse(localStorage.getItem("events")) || [];
//     const updated = [...existing, newEvent];
//     localStorage.setItem("events", JSON.stringify(updated));
//     setEvents(updated);
//     toast.success("Event added successfully");
//     setIsAddModalOpen(false);
//   };

//   // HANDLE SAVE FROM EDIT MODAL
//   const handleSaveEdit = (updatedEvent) => {
//     const data = JSON.parse(localStorage.getItem("events")) || [];
//     const updated = data.map(event =>
//       event.id === updatedEvent.id ? updatedEvent : event
//     );
//     localStorage.setItem("events", JSON.stringify(updated));
//     setEvents(updated);
//     toast.success("Event updated successfully");
//     setIsEditModalOpen(false);
//     setSelectedEvent(null);
//   };

//   return (
//     <div className="min-h-screen p-6 bg-gray-50">
//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />

//       <div className="max-w-8xl mx-auto">
//         {/* TOP BAR */}
//         <div className="bg-white mb-6 py-4 px-6 rounded-lg shadow-sm">
//           <div className="flex flex-wrap justify-between items-center gap-4">
//             <div className="flex-1 max-w-md">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Search events by title or section..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             <button
//               onClick={openAddModal}
//               className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-200 shadow-md"
//             >
//               <Plus size={18} />
//               Add New Event
//             </button>
//           </div>
//         </div>

//         {/* TABLE */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//           <div className="h-[65vh] overflow-y-auto">
//             <table className="w-full text-sm">
//               <thead className="sticky top-0 bg-yellow-500 text-white z-10">
//                 <tr>
//                   <th className="border border-gray-300 px-4 py-3 text-center w-[60px]">NO</th>
//                   <th className="border border-gray-300 px-4 py-3 text-center w-[80px]">IMAGE</th>
//                   <th className="border border-gray-300 px-4 py-3 text-center">EVENT SECTION</th>
//                   <th className="border border-gray-300 px-4 py-3 text-center">TITLE</th>
//                   <th className="border border-gray-300 px-4 py-3 text-center w-[120px]">DATE</th>
//                   <th className="border border-gray-300 px-4 py-3 text-center w-[130px]">ACTION</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredEvents.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="text-center py-10 text-gray-500">
//                       No events found
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredEvents.map((event, index) => (
//                     <tr key={event.id} className="hover:bg-gray-50 transition-colors">
//                       <td className="border border-gray-200 text-center py-3">
//                         {index + 1}
//                       </td>
//                       <td className="border border-gray-200 text-center py-2">
//                         {event.image ? (
//                           <img 
//                             src={event.image} 
//                             alt={event.title}
//                             className="w-12 h-12 object-cover rounded mx-auto"
//                           />
//                         ) : (
//                           <div className="w-12 h-12 bg-gray-100 rounded mx-auto flex items-center justify-center">
//                             <span className="text-xs text-gray-400">No img</span>
//                           </div>
//                         )}
//                       </td>
//                       <td className="border border-gray-200 text-center py-2">
//                         <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
//                           {event.section}
//                         </span>
//                       </td>
//                       <td className="border border-gray-200 py-2 px-3">
//                         <div className="font-medium text-gray-800">{event.title}</div>
//                         <div className="text-xs text-gray-500 mt-1 line-clamp-1">{event.description}</div>
//                       </td>
//                       <td className="border border-gray-200 text-center py-2">
//                         {event.date}
//                       </td>
//                       <td className="border border-gray-200 text-center py-2">
//                         <div className="flex justify-center gap-2">
//                           <button
//                             onClick={() => openViewModal(event)}
//                             className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors"
//                             title="View Details"
//                           >
//                             <Eye size={16} className="text-blue-600" />
//                           </button>
//                           <button
//                             onClick={() => openEditModal(event)}
//                             className="p-1.5 hover:bg-yellow-50 rounded-lg transition-colors"
//                             title="Edit Event"
//                           >
//                             <Edit2 size={16} className="text-yellow-600" />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(event.id)}
//                             className="p-1.5 hover:bg-red-50 rounded-lg transition-colors"
//                             title="Delete Event"
//                           >
//                             <Trash2 size={16} className="text-red-600" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* ADD MODAL */}
//       <EventAddModal
//         isOpen={isAddModalOpen}
//         onClose={() => setIsAddModalOpen(false)}
//         onSave={handleSaveAdd}
//       />

//       {/* EDIT MODAL */}
//       <EventEditModal
//         isOpen={isEditModalOpen}
//         onClose={() => {
//           setIsEditModalOpen(false);
//           setSelectedEvent(null);
//         }}
//         onSave={handleSaveEdit}
//         data={selectedEvent}
//       />

//       {/* VIEW MODAL - EMBEDDED INSIDE LIST PAGE */}
//       {isViewModalOpen && selectedEvent && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg w-full max-w-3xl mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
            
//             {/* Header */}
//             <div className="bg-yellow-500 px-6 py-4 rounded-t-lg flex justify-between items-center sticky top-0">
//               <h3 className="text-lg font-semibold text-white">Event Details</h3>
//               <button onClick={() => setIsViewModalOpen(false)} className="text-white hover:text-gray-200">
//                 <X size={20} />
//               </button>
//             </div>
            
//             {/* Body */}
//             <div className="p-6">
//               {/* Image Section */}
//               {selectedEvent.image && (
//                 <div className="mb-6">
//                   <img 
//                     src={selectedEvent.image} 
//                     alt={selectedEvent.title}
//                     className="w-full h-64 object-cover rounded-lg shadow-md"
//                   />
//                 </div>
//               )}

//               {/* Details Grid */}
//               <div className="space-y-4">
//                 {/* Section & Date */}
//                 <div className="grid grid-cols-2 gap-4 pb-4 border-b">
//                   <div className="flex items-center gap-2">
//                     <Tag className="text-yellow-500" size={18} />
//                     <div>
//                       <p className="text-xs text-gray-500">Event Section</p>
//                       <p className="font-medium text-gray-800">{selectedEvent.section}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Calendar className="text-yellow-500" size={18} />
//                     <div>
//                       <p className="text-xs text-gray-500">Event Date</p>
//                       <p className="font-medium text-gray-800">{selectedEvent.date}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Title */}
//                 <div className="pb-4 border-b">
//                   <h2 className="text-xl font-bold text-gray-800 mb-2">{selectedEvent.title}</h2>
//                 </div>

//                 {/* Description */}
//                 <div className="pb-4 border-b">
//                   <div className="flex items-center gap-2 mb-2">
//                     <FileText className="text-yellow-500" size={18} />
//                     <p className="font-semibold text-gray-700">Description</p>
//                   </div>
//                   <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
//                 </div>

//                 {/* Highlight */}
//                 {selectedEvent.highlight && (
//                   <div className="pb-4 border-b">
//                     <div className="flex items-center gap-2 mb-2">
//                       <Star className="text-yellow-500" size={18} />
//                       <p className="font-semibold text-gray-700">Highlights</p>
//                     </div>
//                     <div className="bg-yellow-50 p-3 rounded-lg">
//                       <p className="text-gray-700 whitespace-pre-wrap">{selectedEvent.highlight}</p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Meta Info */}
//                 <div className="text-xs text-gray-400 pt-2">
//                   <p>Event ID: #{selectedEvent.id}</p>
//                   {selectedEvent.createdAt && <p>Created: {new Date(selectedEvent.createdAt).toLocaleString()}</p>}
//                 </div>
//               </div>
//             </div>

//             {/* Footer */}
//             <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end sticky bottom-0">
//               <button
//                 onClick={() => setIsViewModalOpen(false)}
//                 className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { Plus, Edit2, Trash2, Eye, Search, X, Calendar, Tag, FileText, Star } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import EventAddModal from "../Dashboard";
// import EventEditModal from "./EventEditModal";

// export default function EventList() {
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [isViewModalOpen, setIsViewModalOpen] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   // LOAD EVENTS
//   useEffect(() => {
//     loadEvents();
//   }, []);

//   const loadEvents = () => {
//     const data = JSON.parse(localStorage.getItem("events")) || [];
//     setEvents(data);
//     setFilteredEvents(data);
//   };

//   // SEARCH
//   useEffect(() => {
//     if (searchTerm === "") {
//       setFilteredEvents(events);
//     } else {
//       const filtered = events.filter(event =>
//         event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         event.section?.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredEvents(filtered);
//     }
//   }, [searchTerm, events]);

//   // DELETE EVENT
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this event?")) {
//       const updated = events.filter(event => event.id !== id);
//       localStorage.setItem("events", JSON.stringify(updated));
//       setEvents(updated);
//       toast.error("Event deleted successfully");
//     }
//   };

//   // OPEN MODALS
//   const openAddModal = () => {
//     setIsAddModalOpen(true);
//   };

//   const openEditModal = (event) => {
//     setSelectedEvent(event);
//     setIsEditModalOpen(true);
//   };

//   const openViewModal = (event) => {
//     setSelectedEvent(event);
//     setIsViewModalOpen(true);
//   };

//   // HANDLE SAVE FROM ADD MODAL
//   const handleSaveAdd = (newEvent) => {
//     const existing = JSON.parse(localStorage.getItem("events")) || [];
//     const updated = [...existing, newEvent];
//     localStorage.setItem("events", JSON.stringify(updated));
//     setEvents(updated);
//     toast.success("Event added successfully");
//     setIsAddModalOpen(false);
//   };

//   // HANDLE SAVE FROM EDIT MODAL
//   const handleSaveEdit = (updatedEvent) => {
//     const data = JSON.parse(localStorage.getItem("events")) || [];
//     const updated = data.map(event =>
//       event.id === updatedEvent.id ? updatedEvent : event
//     );
//     localStorage.setItem("events", JSON.stringify(updated));
//     setEvents(updated);
//     toast.success("Event updated successfully");
//     setIsEditModalOpen(false);
//     setSelectedEvent(null);
//   };

//   return (
//     <div className="min-h-screen p-6 bg-gray-50">
//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />

//       <div className="max-w-8xl mx-auto">
//         {/* TOP BAR */}
//         <div className="bg-white mb-6 py-4 px-6 rounded-lg shadow-sm">
//           <div className="flex flex-wrap justify-between items-center gap-4">
//             <div className="flex-1 max-w-md">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Search events by title or section..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             <button
//               onClick={openAddModal}
//               className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-200 shadow-md"
//             >
//               <Plus size={18} />
//               Add New Event
//             </button>
//           </div>
//         </div>

//         {/* TABLE */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//           <div className="h-[65vh] overflow-y-auto">
//             <table className="w-full text-sm">
//               <thead className="sticky top-0 bg-yellow-500 text-white z-10">
//                 <tr>
//                   <th className="border border-gray-300 px-4 py-3 text-center w-[60px]">NO</th>
//                   <th className="border border-gray-300 px-4 py-3 text-center w-[80px]">IMAGE</th>
//                   <th className="border border-gray-300 px-4 py-3 text-center">EVENT SECTION</th>
//                   <th className="border border-gray-300 px-4 py-3 text-center">TITLE</th>
//                   <th className="border border-gray-300 px-4 py-3 text-center w-[120px]">DATE</th>
//                   <th className="border border-gray-300 px-4 py-3 text-center w-[130px]">ACTION</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredEvents && filteredEvents.length > 0 ? (
//                   filteredEvents.map((event, index) => (
//                     <tr key={event.id} className="hover:bg-gray-50 transition-colors">
//                       <td className="border border-gray-200 text-center py-3">
//                         {index + 1}
//                       </td>
//                       <td className="border border-gray-200 text-center py-2">
//                         {event.image ? (
//                           <img 
//                             src={event.image} 
//                             alt={event.title}
//                             className="w-12 h-12 object-cover rounded mx-auto"
//                           />
//                         ) : (
//                           <div className="w-12 h-12 bg-gray-100 rounded mx-auto flex items-center justify-center">
//                             <span className="text-xs text-gray-400">No img</span>
//                           </div>
//                         )}
//                       </td>
//                       <td className="border border-gray-200 text-center py-2">
//                         <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
//                           {event.section}
//                         </span>
//                       </td>
//                       <td className="border border-gray-200 py-2 px-3">
//                         <div className="font-medium text-gray-800">{event.title}</div>
//                         <div className="text-xs text-gray-500 mt-1 line-clamp-1">{event.description}</div>
//                       </td>
//                       <td className="border border-gray-200 text-center py-2">
//                         {event.date}
//                       </td>
//                       <td className="border border-gray-200 text-center py-2">
//                         <div className="flex justify-center gap-2">
//                           <button
//                             onClick={() => openViewModal(event)}
//                             className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors"
//                             title="View Details"
//                           >
//                             <Eye size={16} className="text-blue-600" />
//                           </button>
//                           <button
//                             onClick={() => openEditModal(event)}
//                             className="p-1.5 hover:bg-yellow-50 rounded-lg transition-colors"
//                             title="Edit Event"
//                           >
//                             <Edit2 size={16} className="text-yellow-600" />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(event.id)}
//                             className="p-1.5 hover:bg-red-50 rounded-lg transition-colors"
//                             title="Delete Event"
//                           >
//                             <Trash2 size={16} className="text-red-600" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="6" className="text-center py-10 text-gray-500">
//                       No events found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* ADD MODAL */}
//       <EventAddModal
//         isOpen={isAddModalOpen}
//         onClose={() => setIsAddModalOpen(false)}
//         onSave={handleSaveAdd}
//       />

//       {/* EDIT MODAL */}
//       <EventEditModal
//         isOpen={isEditModalOpen}
//         onClose={() => {
//           setIsEditModalOpen(false);
//           setSelectedEvent(null);
//         }}
//         onSave={handleSaveEdit}
//         data={selectedEvent}
//       />

//       {/* VIEW MODAL - EMBEDDED INSIDE LIST PAGE */}
//       {isViewModalOpen && selectedEvent && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg w-full max-w-3xl mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
            
//             {/* Header */}
//             <div className="bg-yellow-500 px-6 py-4 rounded-t-lg flex justify-between items-center sticky top-0">
//               <h3 className="text-lg font-semibold text-white">Event Details</h3>
//               <button onClick={() => setIsViewModalOpen(false)} className="text-white hover:text-gray-200">
//                 <X size={20} />
//               </button>
//             </div>
            
//             {/* Body */}
//             <div className="p-6">
//               {/* Image Section */}
//               {selectedEvent.image && (
//                 <div className="mb-6">
//                   <img 
//                     src={selectedEvent.image} 
//                     alt={selectedEvent.title}
//                     className="w-full h-64 object-cover rounded-lg shadow-md"
//                   />
//                 </div>
//               )}

//               {/* Details Grid */}
//               <div className="space-y-4">
//                 {/* Section & Date */}
//                 <div className="grid grid-cols-2 gap-4 pb-4 border-b">
//                   <div className="flex items-center gap-2">
//                     <Tag className="text-yellow-500" size={18} />
//                     <div>
//                       <p className="text-xs text-gray-500">Event Section</p>
//                       <p className="font-medium text-gray-800">{selectedEvent.section}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Calendar className="text-yellow-500" size={18} />
//                     <div>
//                       <p className="text-xs text-gray-500">Event Date</p>
//                       <p className="font-medium text-gray-800">{selectedEvent.date}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Title */}
//                 <div className="pb-4 border-b">
//                   <h2 className="text-xl font-bold text-gray-800 mb-2">{selectedEvent.title}</h2>
//                 </div>

//                 {/* Description */}
//                 <div className="pb-4 border-b">
//                   <div className="flex items-center gap-2 mb-2">
//                     <FileText className="text-yellow-500" size={18} />
//                     <p className="font-semibold text-gray-700">Description</p>
//                   </div>
//                   <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
//                 </div>

//                 {/* Highlight */}
//                 {selectedEvent.highlight && (
//                   <div className="pb-4 border-b">
//                     <div className="flex items-center gap-2 mb-2">
//                       <Star className="text-yellow-500" size={18} />
//                       <p className="font-semibold text-gray-700">Highlights</p>
//                     </div>
//                     <div className="bg-yellow-50 p-3 rounded-lg">
//                       <p className="text-gray-700 whitespace-pre-wrap">{selectedEvent.highlight}</p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Meta Info */}
//                 <div className="text-xs text-gray-400 pt-2">
//                   <p>Event ID: #{selectedEvent.id}</p>
//                   {selectedEvent.createdAt && <p>Created: {new Date(selectedEvent.createdAt).toLocaleString()}</p>}
//                 </div>
//               </div>
//             </div>

//             {/* Footer */}
//             <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end sticky bottom-0">
//               <button
//                 onClick={() => setIsViewModalOpen(false)}
//                 className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { Plus, Edit2, Trash2, Eye, Search, X, Calendar, Tag, FileText, Star } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import EventAddModal from "../EventPage/EventAdd";
// import EventEditModal from "../EventPage/EventEdit";

// export default function EventList() {
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [isViewModalOpen, setIsViewModalOpen] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   // LOAD EVENTS - Only from admin added data
//   useEffect(() => {
//     loadEvents();
//   }, []);

//   const loadEvents = () => {
//     // Only get events from localStorage (admin added data)
//     const data = JSON.parse(localStorage.getItem("adminEvents")) || [];
//     setEvents(data);
//     setFilteredEvents(data);
//   };

//   // SEARCH
//   useEffect(() => {
//     if (searchTerm === "") {
//       setFilteredEvents(events);
//     } else {
//       const filtered = events.filter(event =>
//         event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         event.section?.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredEvents(filtered);
//     }
//   }, [searchTerm, events]);

//   // DELETE EVENT
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this event?")) {
//       const updated = events.filter(event => event.id !== id);
//       localStorage.setItem("adminEvents", JSON.stringify(updated));
//       setEvents(updated);
//       toast.error("Event deleted successfully");
//     }
//   };

//   // OPEN MODALS
//   const openAddModal = () => {
//     setIsAddModalOpen(true);
//   };

//   const openEditModal = (event) => {
//     setSelectedEvent(event);
//     setIsEditModalOpen(true);
//   };

//   const openViewModal = (event) => {
//     setSelectedEvent(event);
//     setIsViewModalOpen(true);
//   };

//   // HANDLE SAVE FROM ADD MODAL
//   const handleSaveAdd = (newEvent) => {
//     const existing = JSON.parse(localStorage.getItem("adminEvents")) || [];
//     const updated = [...existing, newEvent];
//     localStorage.setItem("adminEvents", JSON.stringify(updated));
//     setEvents(updated);
//     toast.success("Event added successfully");
//     setIsAddModalOpen(false);
//   };

//   // HANDLE SAVE FROM EDIT MODAL
//   const handleSaveEdit = (updatedEvent) => {
//     const data = JSON.parse(localStorage.getItem("adminEvents")) || [];
//     const updated = data.map(event =>
//       event.id === updatedEvent.id ? updatedEvent : event
//     );
//     localStorage.setItem("adminEvents", JSON.stringify(updated));
//     setEvents(updated);
//     toast.success("Event updated successfully");
//     setIsEditModalOpen(false);
//     setSelectedEvent(null);
//   };

//   return (
//     <div className="min-h-screen py-2 ">
//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />

//       <div className="max-w-8xl mx-auto">
//         {/* TOP BAR */}
//         <div className="bg-white mb-5  ">
//           <div className="flex flex-wrap justify-between items-center gap-4">
//             {/* <div className="flex-1 max-w-md">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Search events by title or section..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                 />
//               </div>
//             </div> */}

//             <button
//               onClick={openAddModal}
//               className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-200 shadow-md"
//             >
//               <Plus size={18} />
//               Add New Event
//             </button>

//             <div className="flex-1 max-w-xs">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Search events by section..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* TABLE - Only shows admin added data */}
//         <div className="bg-white overflow-hidden">
//           <div className="h-[65vh] overflow-y-auto">
//             <table className="w-full text-sm table-fixed">
//   <thead className="sticky top-0 bg-yellow-500 text-white z-10">
//     <tr>
//       <th className="border border-gray-300 px-2 py-3 text-center w-[60px]">NO</th>
//       <th className="border border-gray-300 px-2 py-3 text-center w-[80px]">IMAGE</th>
//       <th className="border border-gray-300 px-2 py-3 text-center w-[170px]">EVENT SECTION</th>
//       <th className="border border-gray-300 px-2 py-3 text-left w-[220px]">TITLE</th>
//       <th className="border border-gray-300 px-2 py-3 text-center w-[110px]">DATE</th>
//       <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">ACTION</th>
//     </tr>
//   </thead>

//   <tbody>
//     {filteredEvents && filteredEvents.length > 0 ? (
//       filteredEvents.map((event, index) => (
//         <tr key={event.id} className="hover:bg-gray-50 transition-colors">
//           <td className="border border-gray-200 text-center py-3 px-2 truncate">
//             {index + 1}
//            </td>
//           <td className="border border-gray-200 text-center py-1 px-2">
//             {event.image ? (
//               <img 
//                 src={event.image} 
//                 alt={event.title}
//                 className="w-10 h-10 object-cover rounded mx-auto"
//               />
//             ) : (
//               <div className="w-10 h-10 bg-gray-100 rounded mx-auto flex items-center justify-center">
//                 <span className="text-xs text-gray-400">No img</span>
//               </div>
//             )}
//            </td>
//           <td className="border border-gray-200 text-center py-1 px-2">
//             <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium truncate block">
//               {event.section}
//             </span>
//            </td>
//           <td className="border border-gray-200 py-2 px-2">
//             <div className="font-medium text-gray-800 truncate" title={event.title}>
//               {event.title}
//             </div>
//            </td>
//           <td className="border border-gray-200 text-center py-1 px-2 truncate">
//             {event.date}
//            </td>
//           <td className="border border-gray-200 text-center py-1 px-2">
//             <div className="flex justify-center gap-1">
//               <button
//                 onClick={() => openViewModal(event)}
//                 className="p-1 hover:bg-blue-50 rounded transition-colors"
//                 title="View Details"
//               >
//                 <Eye size={15} className="text-blue-600" />
//               </button>
//               <button
//                 onClick={() => openEditModal(event)}
//                 className="p-1 hover:bg-yellow-50 rounded transition-colors"
//                 title="Edit Event"
//               >
//                 <Edit2 size={15} className="text-yellow-600" />
//               </button>
//               <button
//                 onClick={() => handleDelete(event.id)}
//                 className="p-1 hover:bg-red-50 rounded transition-colors"
//                 title="Delete Event"
//               >
//                 <Trash2 size={15} className="text-red-600" />
//               </button>
//             </div>
//            </td>
//          </tr>
//       ))
//     ) : (
//       <tr>
//         <td colSpan="6" className="text-center py-10 text-gray-500">
//           No events found
//          </td>
//       </tr>
//     )}
//   </tbody>
// </table>
//           </div>
//         </div>
//       </div>

//       {/* ADD MODAL */}
//       <EventAddModal
//         isOpen={isAddModalOpen}
//         onClose={() => setIsAddModalOpen(false)}
//         onSave={handleSaveAdd}
//       />

//       {/* EDIT MODAL */}
//       <EventEditModal
//         isOpen={isEditModalOpen}
//         onClose={() => {
//           setIsEditModalOpen(false);
//           setSelectedEvent(null);
//         }}
//         onSave={handleSaveEdit}
//         data={selectedEvent}
//       />

//       {/* VIEW MODAL */}
//       {isViewModalOpen && selectedEvent && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg w-full max-w-3xl mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
            
//             {/* Header */}
//             <div className="bg-yellow-500 px-6 py-4 rounded-t-lg flex justify-between items-center sticky top-0">
//               <h3 className="text-lg font-semibold text-white">Event Details</h3>
//               <button onClick={() => setIsViewModalOpen(false)} className="text-white hover:text-gray-200">
//                 <X size={20} />
//               </button>
//             </div>
            
//             {/* Body */}
//             <div className="p-6">
//               {selectedEvent.image && (
//                 <div className="mb-6">
//                   <img 
//                     src={selectedEvent.image} 
//                     alt={selectedEvent.title}
//                     className="w-full h-64 object-cover rounded-lg shadow-md"
//                   />
//                 </div>
//               )}

//               <div className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4 pb-4 border-b">
//                   <div className="flex items-center gap-2">
//                     <Tag className="text-yellow-500" size={18} />
//                     <div>
//                       <p className="text-xs text-gray-500">Event Section</p>
//                       <p className="font-medium text-gray-800">{selectedEvent.section}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Calendar className="text-yellow-500" size={18} />
//                     <div>
//                       <p className="text-xs text-gray-500">Event Date</p>
//                       <p className="font-medium text-gray-800">{selectedEvent.date}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="pb-4 border-b">
//                   <h2 className="text-xl font-bold text-gray-800 mb-2">{selectedEvent.title}</h2>
//                 </div>

//                 <div className="pb-4 border-b">
//                   <div className="flex items-center gap-2 mb-2">
//                     <FileText className="text-yellow-500" size={18} />
//                     <p className="font-semibold text-gray-700">Description</p>
//                   </div>
//                   <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
//                 </div>

//                 {selectedEvent.highlight && (
//                   <div className="pb-4 border-b">
//                     <div className="flex items-center gap-2 mb-2">
//                       <Star className="text-yellow-500" size={18} />
//                       <p className="font-semibold text-gray-700">Highlights</p>
//                     </div>
//                     <div className="bg-yellow-50 p-3 rounded-lg">
//                       <p className="text-gray-700 whitespace-pre-wrap">{selectedEvent.highlight}</p>
//                     </div>
//                   </div>
//                 )}

//                 <div className="text-xs text-gray-400 pt-2">
//                   <p>Event ID: #{selectedEvent.id}</p>
//                   {selectedEvent.createdAt && <p>Created: {new Date(selectedEvent.createdAt).toLocaleString()}</p>}
//                 </div>
//               </div>
//             </div>

//             {/* Footer */}
//             <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end sticky bottom-0">
//               <button
//                 onClick={() => setIsViewModalOpen(false)}
//                 className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Eye, Search, X, Calendar, Tag, FileText, Star } from "lucide-react";
import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EventAddModal from "../EventPage/EventAdd";
import EventEditModal from "../EventPage/EventEdit";

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // LOAD EVENTS - Only from admin added data
  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = () => {
    // Only get events from localStorage (admin added data)
    const data = JSON.parse(localStorage.getItem("adminEvents")) || [];
    setEvents(data);
    setFilteredEvents(data);
  };

  // SEARCH
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter(event =>
        event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.section?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEvents(filtered);
    }
  }, [searchTerm, events]);

  // DELETE EVENT
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      const updated = events.filter(event => event.id !== id);
      localStorage.setItem("adminEvents", JSON.stringify(updated));
      setEvents(updated);
      toast.error("Event deleted successfully");
    }
  };

  // OPEN MODALS
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const openEditModal = (event) => {
    setSelectedEvent(event);
    setIsEditModalOpen(true);
  };

  const openViewModal = (event) => {
    setSelectedEvent(event);
    setIsViewModalOpen(true);
  };

  // HANDLE SAVE FROM ADD MODAL
  const handleSaveAdd = (newEvent) => {
    const existing = JSON.parse(localStorage.getItem("adminEvents")) || [];
    const updated = [...existing, newEvent];
    localStorage.setItem("adminEvents", JSON.stringify(updated));
    setEvents(updated);
    toast.success("Event added successfully");
    setIsAddModalOpen(false);
  };

  // HANDLE SAVE FROM EDIT MODAL
  const handleSaveEdit = (updatedEvent) => {
    const data = JSON.parse(localStorage.getItem("adminEvents")) || [];
    const updated = data.map(event =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    localStorage.setItem("adminEvents", JSON.stringify(updated));
    setEvents(updated);
    toast.success("Event updated successfully");
    setIsEditModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen py-2 ">
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      <div className="max-w-8xl mx-auto">
        {/* TOP BAR */}
        <div className="bg-white mb-5  ">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <button
              onClick={openAddModal}
              className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-200 shadow-md"
            >
              <Plus size={18} />
              Add New Event
            </button>

            <div className="flex-1 max-w-xs">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search events by section..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* TABLE - Only shows admin added data */}
        <div className="bg-white overflow-hidden">
          <div className="h-[65vh] overflow-y-auto">
            <table className="w-full text-sm table-fixed">
              <thead className="sticky top-0 bg-yellow-500 text-white z-10">
                <tr>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[60px]">NO</th>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[80px]">IMAGE</th>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[170px]">EVENT SECTION</th>
                  <th className="border border-gray-300 px-2 py-3 text-left w-[220px]">TITLE</th>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[110px]">DATE</th>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">ACTION</th>
                </tr>
              </thead>

              <tbody>
                {filteredEvents && filteredEvents.length > 0 ? (
                  filteredEvents.map((event, index) => (
                    <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-200 text-center py-3 px-2 truncate">
                        {index + 1}
                      </td>
                      <td className="border border-gray-200 text-center py-1 px-2">
                        {event.image ? (
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-10 h-10 object-cover rounded mx-auto"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gray-100 rounded mx-auto flex items-center justify-center">
                            <span className="text-xs text-gray-400">No img</span>
                          </div>
                        )}
                      </td>
                      <td className="border border-gray-200 text-center py-1 px-2">
                        <span className="px-2 py-1 text-yellow-700 rounded text-xs font-medium truncate block">
                          {event.section}
                        </span>
                      </td>
                      <td className="border border-gray-200 py-2 px-2">
                        <div className="font-medium text-gray-800 truncate" title={event.title}>
                          {event.title}
                        </div>
                      </td>
                      <td className="border border-gray-200 text-center py-1 px-2 truncate">
                        {event.date}
                      </td>
                      <td className="border border-gray-200 text-center py-1 px-2">
                        <div className="flex justify-center gap-1">
                          <button
                            onClick={() => openViewModal(event)}
                            className="p-1 hover:bg-blue-50 rounded transition-colors"
                            title="View Details"
                          >
                            <Eye size={15} className="text-blue-600" />
                          </button>
                          <button
                            onClick={() => openEditModal(event)}
                            className="p-1 hover:bg-yellow-50 rounded transition-colors"
                            title="Edit Event"
                          >
                            <FiEdit size={15} className="text-yellow-600" />
                          </button>
                          <button
                            onClick={() => handleDelete(event.id)}
                            className="p-1 hover:bg-red-50 rounded transition-colors"
                            title="Delete Event"
                          >
                            <Trash2 size={15} className="text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-10 text-gray-500">
                      No events found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ADD MODAL */}
      <EventAddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveAdd}
      />

      {/* EDIT MODAL */}
      <EventEditModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedEvent(null);
        }}
        onSave={handleSaveEdit}
        data={selectedEvent}
      />

      {/* VIEW MODAL - SMALLER SIZE */}
  {isViewModalOpen && selectedEvent && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200">
    
    <div className="bg-white rounded-2xl w-full max-w-md mx-4 shadow-2xl overflow-hidden transform animate-in slide-in-from-bottom-4 duration-300 max-h-[90vh] overflow-y-auto">
      
      {/* HEADER - Clean design */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-5 py-2.5 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          <h3 className="text-sm font-semibold text-white tracking-wide">Event Details</h3>
        </div>
        <button
          onClick={() => setIsViewModalOpen(false)}
          className="text-white hover:bg-white/20 rounded-full p-1 transition-all duration-200"
        >
          <X size={16} />
        </button>
      </div>

      {/* IMAGE - Smaller height */}
      {selectedEvent.image && (
        <div className="relative w-full h-32 overflow-hidden bg-gray-100">
          <img
            src={selectedEvent.image}
            alt={selectedEvent.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}

      {/* BODY - Compact spacing */}
      <div className="p-4 space-y-3">
        
        {/* SECTION + DATE - Card style */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
            <div className="flex items-center gap-1.5">
              <Tag className="text-yellow-500" size={12} />
              <p className="text-[9px] text-gray-500 font-medium uppercase tracking-wide">Section</p>
            </div>
            <p className="text-[11px] font-semibold text-gray-800 mt-0.5 pl-5">
              {selectedEvent.section}
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
            <div className="flex items-center gap-1.5">
              <Calendar className="text-yellow-500" size={12} />
              <p className="text-[9px] text-gray-500 font-medium uppercase tracking-wide">Date</p>
            </div>
            <p className="text-[11px] font-semibold text-gray-800 mt-0.5 pl-5">
              {selectedEvent.date}
            </p>
          </div>
        </div>

        {/* TITLE - Highlighted */}
        <div className="bg-gradient-to-r from-yellow-50 to-transparent rounded-lg p-2 border-l-3 border-yellow-500">
          <p className="text-[9px] font-semibold text-yellow-600 uppercase tracking-wide mb-0.5">Title</p>
          <h2 className="text-xs font-bold text-gray-800 leading-snug">
            {selectedEvent.title}
          </h2>
        </div>

        {/* DESCRIPTION - Clean */}
        <div>
          <div className="flex items-center gap-1.5 mb-1 pb-0.5 border-b border-gray-100">
            <FileText className="text-yellow-500" size={12} />
            <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wide">Description</p>
          </div>
          <p className="text-[11px] text-gray-600 leading-relaxed line-clamp-3">
            {selectedEvent.description}
          </p>
        </div>

        {/* HIGHLIGHTS - Compact */}
        {selectedEvent.highlight && selectedEvent.highlight.trim() !== "" && (
          <div className="bg-amber-50 rounded-lg p-2 border border-amber-100">
            <div className="flex items-center gap-1.5 mb-1">
              <Star className="text-yellow-500 fill-yellow-500" size={12} />
              <p className="text-[10px] font-semibold text-gray-700 uppercase tracking-wide">Highlights</p>
            </div>
            <div className="space-y-1">
              {selectedEvent.highlight.split("\n").slice(0, 3).map((item, i) => (
                item.trim() && (
                  <div key={i} className="flex items-start gap-1.5">
                    <span className="w-1 h-1 bg-yellow-500 rounded-full mt-1"></span>
                    <p className="text-[10px] text-gray-700 leading-relaxed line-clamp-1">{item}</p>
                  </div>
                )
              ))}
              {selectedEvent.highlight.split("\n").filter(item => item.trim()).length > 3 && (
                <p className="text-[9px] text-gray-400 pl-3">+{selectedEvent.highlight.split("\n").filter(item => item.trim()).length - 3} more</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* FOOTER - Smaller */}
      <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 flex justify-end sticky bottom-0">
        <button
          onClick={() => setIsViewModalOpen(false)}
          className="px-3 py-1 text-[11px] font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
        >
          Close
        </button>
      </div>

    </div>
  </div>
)}
    </div>
  );
}