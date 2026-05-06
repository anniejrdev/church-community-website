// import React, { useState } from "react";
// import { X, Calendar, User, FileText, Star, Heart, Cross, Users } from "lucide-react";

// export default function EventsAddModal({ isOpen, onClose, onSave }) {
//   const [form, setForm] = useState({
//     id: Date.now(),
//     name: "",
//     date: "",
//     author: "",
//     description: "",
//     highlights: [],
//     img: "https://images.unsplash.com/photo-1474814947326-d835369963a5?q=80&w=1169&auto=format&fit=crop",
//     type: "common",
//   });

//   const [highlightInput, setHighlightInput] = useState("");

//   const handleChange = (field, value) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//   };

//   const addHighlight = () => {
//     if (highlightInput.trim()) {
//       setForm((prev) => ({
//         ...prev,
//         highlights: [...prev.highlights, highlightInput.trim()],
//       }));
//       setHighlightInput("");
//     }
//   };

//   const removeHighlight = (index) => {
//     setForm((prev) => ({
//       ...prev,
//       highlights: prev.highlights.filter((_, i) => i !== index),
//     }));
//   };

//   const handleSubmit = () => {
//     if (!form.name || !form.date || !form.author) {
//       alert("Please fill all required fields");
//       return;
//     }
//     onSave({ ...form, id: Date.now() });
//     setForm({
//       id: Date.now(),
//       name: "",
//       date: "",
//       author: "",
//       description: "",
//       highlights: [],
//       img: "https://images.unsplash.com/photo-1474814947326-d835369963a5?q=80&w=1169&auto=format&fit=crop",
//       type: "common",
//     });
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto">
        
//         {/* Modal Header */}
//         <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4 rounded-t-xl flex justify-between items-center sticky top-0">
//           <h3 className="text-xl font-semibold text-white">Add New Event</h3>
//           <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
//             <X size={24} />
//           </button>
//         </div>
        
//         {/* Modal Body */}
//         <div className="p-6">
//           <div className="grid grid-cols-2 gap-4">
            
//             {/* Event Name */}
//             <div className="col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Event Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter event name"
//                 value={form.name}
//                 onChange={(e) => handleChange("name", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//               />
//             </div>

//             {/* Date */}
//             <div className="col-span-2 sm:col-span-1">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Date <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="date"
//                 value={form.date}
//                 onChange={(e) => handleChange("date", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//               />
//             </div>

//             {/* Author */}
//             <div className="col-span-2 sm:col-span-1">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Author <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter author name"
//                 value={form.author}
//                 onChange={(e) => handleChange("author", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//               />
//             </div>

//             {/* Event Type */}
//             <div className="col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Event Type
//               </label>
//               <select
//                 value={form.type}
//                 onChange={(e) => handleChange("type", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
//               >
//                 <option value="common">Common Events</option>
//                 <option value="marriage">Marriage Events</option>
//                 <option value="deaths">Deaths / Memorials</option>
//               </select>
//             </div>

//             {/* Description */}
//             <div className="col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Description
//               </label>
//               <textarea
//                 placeholder="Enter event description"
//                 value={form.description}
//                 onChange={(e) => handleChange("description", e.target.value)}
//                 rows="3"
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
//               />
//             </div>

//             {/* Highlights */}
//             <div className="col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Event Highlights
//               </label>
//               <div className="flex gap-2 mb-2">
//                 <input
//                   type="text"
//                   placeholder="Add a highlight"
//                   value={highlightInput}
//                   onChange={(e) => setHighlightInput(e.target.value)}
//                   className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                 />
//                 <button
//                   type="button"
//                   onClick={addHighlight}
//                   className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors"
//                 >
//                   Add
//                 </button>
//               </div>
//               {form.highlights.length > 0 && (
//                 <div className="space-y-1 mt-2">
//                   {form.highlights.map((highlight, idx) => (
//                     <div key={idx} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
//                       <span className="text-sm text-gray-700">{highlight}</span>
//                       <button
//                         onClick={() => removeHighlight(idx)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <X size={14} />
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//           </div>
//         </div>

//         {/* Modal Footer */}
//         <div className="px-6 py-4 bg-gray-50 rounded-b-xl flex justify-end gap-3 sticky bottom-0">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors shadow-sm"
//           >
//             Add Event
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { FiX } from "react-icons/fi";

// export default function OrderOfServiceAddModal({ isOpen, onClose, onSave }) {
//   const [form, setForm] = useState({
//     day: "sunday",
//     name: "",
//     startTime: "",
//     endTime: "",
//     location: "",
//     description: "",
//     requiresFather: false,
//     fatherName: "",
//   });

//   // 🔥 Convert 24hr → AM/PM
//   const formatTime = (time) => {
//     if (!time) return "";

//     const [hour, min] = time.split(":");
//     let h = parseInt(hour);
//     const ampm = h >= 12 ? "PM" : "AM";

//     h = h % 12 || 12;

//     return `${h}:${min} ${ampm}`;
//   };

//   const handleChange = (field, value) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = () => {
//     if (!form.name || !form.startTime || !form.endTime) {
//       alert("Fill required fields");
//       return;
//     }

//     const newService = {
//       id: Date.now(),
//       day: form.day.toLowerCase(),
//       name: form.name,
//       time: `${formatTime(form.startTime)} - ${formatTime(form.endTime)}`,
//       location: form.location,
//       description: form.description,
//       requiresFather: form.requiresFather,
//       fatherName: form.fatherName,
//     };

//     onSave(newService);
//     setForm({
//       day: "sunday",
//       name: "",
//       startTime: "",
//       endTime: "",
//       location: "",
//       description: "",
//       requiresFather: false,
//       fatherName: "",
//     });
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg w-full max-w-2xl mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
        
//         {/* Modal Header */}
//         <div className="bg-yellow-500 px-6 py-4 rounded-t-lg flex justify-between items-center sticky top-0">
//           <h3 className="text-lg font-semibold text-white">Add Service</h3>
//           <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
//             <FiX size={20} />
//           </button>
//         </div>
        
//         {/* Modal Body */}
//         <div className="p-6">
//           <div className="grid grid-cols-2 gap-4">
//             {/* DAY */}
//             <div className="col-span-2 sm:col-span-1">
//               <label className="block text-xs font-medium text-gray-700 mb-1">Day</label>
//               <select
//                 value={form.day}
//                 onChange={(e) => handleChange("day", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent bg-white capitalize"
//               >
//                 <option value="sunday">Sunday</option>
//                 <option value="monday">Monday</option>
//                 <option value="tuesday">Tuesday</option>
//                 <option value="wednesday">Wednesday</option>
//                 <option value="thursday">Thursday</option>
//                 <option value="friday">Friday</option>
//                 <option value="saturday">Saturday</option>
//               </select>
//             </div>

//             {/* NAME */}
//             <div className="col-span-2 sm:col-span-1">
//               <label className="block text-xs font-medium text-gray-700 mb-1">Service Name</label>
//               <input
//                 placeholder="Service Name"
//                 value={form.name}
//                 onChange={(e) => handleChange("name", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
//               />
//             </div>

//             {/* TIME PICKERS */}
//             <div className="col-span-2">
//               <label className="block text-xs font-medium text-gray-700 mb-1">Time</label>
//               <div className="flex gap-3">
//                 <div className="flex-1">
//                   <input
//                     type="time"
//                     value={form.startTime}
//                     onChange={(e) => handleChange("startTime", e.target.value)}
//                     className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
//                   />
//                   <p className="text-xs text-gray-400 mt-1">Start Time</p>
//                 </div>
//                 <div className="flex-1">
//                   <input
//                     type="time"
//                     value={form.endTime}
//                     onChange={(e) => handleChange("endTime", e.target.value)}
//                     className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
//                   />
//                   <p className="text-xs text-gray-400 mt-1">End Time</p>
//                 </div>
//               </div>

//               {form.startTime && form.endTime && (
//                 <div className="mt-2 bg-blue-50 rounded-lg px-3 py-2 border border-blue-100">
//                   <span className="text-xs text-blue-700 font-medium">
//                     {formatTime(form.startTime)} - {formatTime(form.endTime)}
//                   </span>
//                 </div>
//               )}
//             </div>

//             {/* LOCATION */}
//             <div className="col-span-2 sm:col-span-1">
//               <label className="block text-xs font-medium text-gray-700 mb-1">Location</label>
//               <input
//                 placeholder="Location"
//                 value={form.location}
//                 onChange={(e) => handleChange("location", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
//               />
//             </div>

//             {/* DESCRIPTION */}
//             <div className="col-span-2 sm:col-span-1">
//               <label className="block text-xs font-medium text-gray-700 mb-1">Description</label>
//               <input
//                 placeholder="Description"
//                 value={form.description}
//                 onChange={(e) => handleChange("description", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
//               />
//             </div>

//             {/* FATHER */}
//             <div className="col-span-2">
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={form.requiresFather}
//                   onChange={(e) => handleChange("requiresFather", e.target.checked)}
//                   className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-yellow-500"
//                 />
//                 <span className="text-sm text-gray-700">Needs Father Name</span>
//               </label>

//               {form.requiresFather && (
//                 <div className="mt-2">
//                   <input
//                     placeholder="Father Name"
//                     value={form.fatherName}
//                     onChange={(e) => handleChange("fatherName", e.target.value)}
//                     className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Modal Footer */}
//         <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end gap-3 sticky bottom-0">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors shadow-sm"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { FiX, Upload } from "react-icons/fi";

// export default function EventAddModal({ isOpen, onClose, onSave }) {
//   const [categories, setCategories] = useState([]);
//   const [form, setForm] = useState({
//     section: "",
//     title: "",
//     description: "",
//     highlight: "",
//     date: "",
//     image: "",
//   });
//   const [imagePreview, setImagePreview] = useState("");

//   // LOAD CATEGORIES
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("eventCategories")) || [];
//     setCategories(data);
//   }, []);

//   // SET CURRENT DATE
//   useEffect(() => {
//     const today = new Date().toISOString().split("T")[0];
//     setForm(prev => ({ ...prev, date: today }));
//   }, []);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//         setForm({ ...form, image: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleChange = (field, value) => {
//     setForm(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = () => {
//     if (!form.section || !form.title || !form.description) {
//       alert("Please fill all required fields");
//       return;
//     }

//     const newEvent = {
//       id: Date.now(),
//       ...form,
//       createdAt: new Date().toISOString(),
//     };

//     onSave(newEvent);
//     setForm({
//       section: "",
//       title: "",
//       description: "",
//       highlight: "",
//       date: new Date().toISOString().split("T")[0],
//       image: "",
//     });
//     setImagePreview("");
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg w-full max-w-2xl mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
        
//         {/* Header */}
//         <div className="bg-yellow-500 px-6 py-4 rounded-t-lg flex justify-between items-center sticky top-0">
//           <h3 className="text-lg font-semibold text-white">Add New Event</h3>
//           <button onClick={onClose} className="text-white hover:text-gray-200">
//             <FiX size={20} />
//           </button>
//         </div>
        
//         {/* Body */}
//         <div className="p-6">
//           <div className="grid grid-cols-2 gap-4">
//             {/* SECTION DROPDOWN */}
//             <div className="col-span-2 sm:col-span-1">
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Event Section <span className="text-red-500">*</span>
//               </label>
//               <select
//                 value={form.section}
//                 onChange={(e) => handleChange("section", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 required
//               >
//                 <option value="">Select Section</option>
//                 {categories.map(cat => (
//                   <option key={cat.id} value={cat.name}>{cat.name}</option>
//                 ))}
//               </select>
//             </div>

//             {/* DATE */}
//             <div className="col-span-2 sm:col-span-1">
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Event Date <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="date"
//                 value={form.date}
//                 onChange={(e) => handleChange("date", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 required
//               />
//             </div>

//             {/* TITLE */}
//             <div className="col-span-2">
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Event Title <span className="text-red-500">*</span>
//               </label>
//               <input
//                 placeholder="Enter event title"
//                 value={form.title}
//                 onChange={(e) => handleChange("title", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 required
//               />
//             </div>

//             {/* DESCRIPTION */}
//             <div className="col-span-2">
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Description <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 rows="3"
//                 placeholder="Event description"
//                 value={form.description}
//                 onChange={(e) => handleChange("description", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 required
//               />
//             </div>

//             {/* HIGHLIGHT */}
//             <div className="col-span-2">
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Highlight / Key Points
//               </label>
//               <textarea
//                 rows="2"
//                 placeholder="Special highlights or key points about this event"
//                 value={form.highlight}
//                 onChange={(e) => handleChange("highlight", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>

//             {/* IMAGE UPLOAD */}
//             <div className="col-span-2">
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Event Image
//               </label>
//               <div className="flex items-center gap-4">
//                 <label className="cursor-pointer">
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                     className="hidden"
//                   />
//                   <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-yellow-500 transition-colors">
//                     <Upload size={24} className="mx-auto text-gray-400 mb-2" />
//                     <span className="text-xs text-gray-500">Click to upload</span>
//                   </div>
//                 </label>
//                 {imagePreview && (
//                   <div className="relative">
//                     <img src={imagePreview} alt="Preview" className="w-20 h-20 object-cover rounded-lg" />
//                     <button
//                       onClick={() => {
//                         setImagePreview("");
//                         setForm({ ...form, image: "" });
//                       }}
//                       className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
//                     >
//                       <FiX size={12} />
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end gap-3 sticky bottom-0">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 shadow-sm"
//           >
//             Save Event
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { X, Upload } from "lucide-react";

// export default function EventAddModal({ isOpen, onClose, onSave }) {
//   const [categories, setCategories] = useState([]);
//   const [formData, setFormData] = useState({
//     section: "",
//     title: "",
//     description: "",
//     highlight: "",
//     date: "",
//     image: ""
//   });
//   const [imagePreview, setImagePreview] = useState("");

//   // LOAD CATEGORIES
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("eventCategories")) || [];
//     setCategories(data);
//   }, []);

//   // SET CURRENT DATE
//   useEffect(() => {
//     const today = new Date().toISOString().split("T")[0];
//     setFormData(prev => ({ ...prev, date: today }));
//   }, []);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//         setFormData({ ...formData, image: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = () => {
//     if (!formData.section || !formData.title || !formData.description) {
//       alert("Please fill all required fields");
//       return;
//     }

//     const newEvent = {
//       id: Date.now(),
//       ...formData,
//       createdAt: new Date().toISOString()
//     };

//     onSave(newEvent);
//     resetForm();
//   };

//   const resetForm = () => {
//     setFormData({
//       section: "",
//       title: "",
//       description: "",
//       highlight: "",
//       date: new Date().toISOString().split("T")[0],
//       image: ""
//     });
//     setImagePreview("");
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg w-full max-w-2xl mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
        
//         {/* Header */}
//         <div className="bg-yellow-500 px-6 py-4 rounded-t-lg flex justify-between items-center sticky top-0">
//           <h3 className="text-lg font-semibold text-white">Add New Event</h3>
//           <button onClick={onClose} className="text-white hover:text-gray-200">
//             <X size={20} />
//           </button>
//         </div>
        
//         {/* Body */}
//         <div className="p-6">
//           <div className="grid grid-cols-2 gap-4">
//             {/* SECTION DROPDOWN */}
//             <div className="col-span-2 sm:col-span-1">
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Event Section <span className="text-red-500">*</span>
//               </label>
//               <select
//                 value={formData.section}
//                 onChange={(e) => handleChange("section", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 required
//               >
//                 <option value="">Select Section</option>
//                 {categories.map(cat => (
//                   <option key={cat.id} value={cat.name}>{cat.name}</option>
//                 ))}
//               </select>
//             </div>

//             {/* DATE */}
//             <div className="col-span-2 sm:col-span-1">
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Event Date <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="date"
//                 value={formData.date}
//                 onChange={(e) => handleChange("date", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 required
//               />
//             </div>

//             {/* TITLE */}
//             <div className="col-span-2">
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Event Title <span className="text-red-500">*</span>
//               </label>
//               <input
//                 placeholder="Enter event title"
//                 value={formData.title}
//                 onChange={(e) => handleChange("title", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 required
//               />
//             </div>

//             {/* DESCRIPTION */}
//             <div className="col-span-2">
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Description <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 rows="3"
//                 placeholder="Event description"
//                 value={formData.description}
//                 onChange={(e) => handleChange("description", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 required
//               />
//             </div>

//             {/* HIGHLIGHT */}
//             <div className="col-span-2">
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Highlight / Key Points
//               </label>
//               <textarea
//                 rows="2"
//                 placeholder="Special highlights or key points about this event"
//                 value={formData.highlight}
//                 onChange={(e) => handleChange("highlight", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>

//             {/* IMAGE UPLOAD */}
//             <div className="col-span-2">
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Event Image
//               </label>
//               <div className="flex items-center gap-4">
//                 <label className="cursor-pointer">
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                     className="hidden"
//                   />
//                   <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-yellow-500 transition-colors w-32">
//                     <Upload size={24} className="mx-auto text-gray-400 mb-2" />
//                     <span className="text-xs text-gray-500">Upload</span>
//                   </div>
//                 </label>
//                 {imagePreview && (
//                   <div className="relative">
//                     <img src={imagePreview} alt="Preview" className="w-20 h-20 object-cover rounded-lg" />
//                     <button
//                       onClick={() => {
//                         setImagePreview("");
//                         handleChange("image", "");
//                       }}
//                       className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
//                     >
//                       <X size={12} />
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end gap-3 sticky bottom-0">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 shadow-sm"
//           >
//             Save Event
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { X, Upload } from "lucide-react";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { db } from "../../../firebase";
// // import { collection, addDoc } from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";

// export default function EventAddModal({ isOpen, onClose, onSave,categories }) {
  
//   const [formData, setFormData] = useState({
//     section: "",
//     title: "",
//     description: "",
//     highlight: "",
//     date: "",
//     image: ""
//   });
//   const [imagePreview, setImagePreview] = useState("");

//   // LOAD CATEGORIES
 

//   // SET CURRENT DATE
//   useEffect(() => {
//     const today = new Date().toISOString().split("T")[0];
//     setFormData(prev => ({ ...prev, date: today }));
//   }, []);

//   // const handleImageUpload = (e) => {
//   //   const file = e.target.files[0];
//   //   if (file) {
//   //     const reader = new FileReader();
//   //     reader.onloadend = () => {
//   //       setImagePreview(reader.result);
//   //       setFormData({ ...formData, image: reader.result });
//   //     };
//   //     reader.readAsDataURL(file);
//   //   }
//   // };
// const handleImageUpload = async (file) => {
//   try {
//     const storage = getStorage();

//     const fileRef = ref(storage, `events/${Date.now()}_${file.name}`);

//     await uploadBytes(fileRef, file);

//     const url = await getDownloadURL(fileRef);

//     return url;

//   } catch (error) {
//     console.log(error);
//     return "";
//   }
// };

// const uploadToCloudinary = async (file) => {
//   const formData = new FormData();
//   formData.append("file", file);
//   formData.append("upload_preset", "event_upload");

//   try {
//     const res = await fetch(
//       "https://api.cloudinary.com/v1_1/ddqklsfmc/image/upload",
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     const data = await res.json();

//     return data.secure_url; // ✅ image URL

//   } catch (error) {
//     console.log(error);
//     return "";
//   }
// };

// // const onFileChange = async (e) => {
// //   const file = e.target.files[0];

// //   if (file) {
// //     const url = await handleImageUpload(file);

// //     setFormData(prev => ({
// //       ...prev,
// //       image: url   // 🔥 STORE URL NOT BASE64
// //     }));

// //     setImagePreview(URL.createObjectURL(file)); // preview only
// //   }
// // };

// const handleImageChange = async (e) => {
//   const file = e.target.files[0];
//   if (!file) return;

//   // preview
//   setImagePreview(URL.createObjectURL(file));

//   // upload to cloudinary
//   const url = await uploadToCloudinary(file);

//   setFormData((prev) => ({
//     ...prev,
//     image: url,   // 🔥 store URL
//   }));
// };

//   const handleChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = () => {
//     if (!formData.section || !formData.title || !formData.description) {
//       alert("Please fill all required fields");
//       return;
//     }

//     const newEvent = {
//       id: Date.now(),
//       ...formData,
//       createdAt: new Date().toISOString()
//     };

//     onSave(newEvent);
//     resetForm();
//   };

//   const resetForm = () => {
//     setFormData({
//       section: "",
//       title: "",
//       description: "",
//       highlight: "",
//       date: new Date().toISOString().split("T")[0],
//       image: ""
//     });
//     setImagePreview("");
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg w-full max-w-xl mx-4 shadow-xl max-h-[85vh] overflow-y-auto">
        
//         {/* Header */}
//         <div className="bg-yellow-500 px-4 py-2.5 rounded-t-lg flex justify-between items-center sticky top-0">
//           <h3 className="text-sm font-semibold text-white">Add New Event</h3>
//           <button onClick={onClose} className="text-white hover:text-gray-200">
//             <X size={16} />
//           </button>
//         </div>
        
//         {/* Body */}
//         <div className="mb-3 mt-2 px-3">
//   <label className="block text-xs font-medium text-gray-700 mb-1">
//     Event Image
//   </label>
//   <div className="flex items-center gap-3">
//     {/* Dotted Circle - Image shows INSIDE */}
//     <label className="cursor-pointer group">
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageChange}
//         className="hidden"
//       />
//       <div className="relative">
//         <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center overflow-hidden group-hover:border-yellow-500 group-hover:bg-yellow-50 transition-all duration-200">
//           {imagePreview ? (
//             // Show image INSIDE the circle
//             <img 
//               src={imagePreview} 
//               alt="Preview" 
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             // Show camera icon when no image
//             <svg className="w-7 h-7 text-gray-400 group-hover:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//           )}
//         </div>
//         {/* Small camera icon overlay on the circle when image exists */}
//         {imagePreview && (
//           <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
//             <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
//             </svg>
//           </div>
//         )}
//       </div>
//       <p className="text-[9px] text-center text-gray-400 mt-1 group-hover:text-yellow-600">
//         {imagePreview ? "Change" : "Add Photo"}
//       </p>
//     </label>
//   </div>


//           {/* SECTION & DATE - ONE ROW */}
//           <div className="grid grid-cols-2 gap-2 mb-2">
//             {/* SECTION DROPDOWN */}
//             <div>
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Event Section <span className="text-red-500">*</span>
//               </label>
//               <select
//                 value={formData.section}
//                 onChange={(e) => handleChange("section", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500"
//                 required
//               >
//                 <option value="">Select Section</option>
//                 {categories.map(cat => (
//                   <option key={cat.id} value={cat.name}>{cat.name}</option>
//                 ))}
//               </select>
//             </div>

//             {/* DATE */}
//             <div>
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Event Date <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="date"
//                 value={formData.date}
//                 onChange={(e) => handleChange("date", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500"
//                 required
//               />
//             </div>
//           </div>

//           {/* TITLE & DESCRIPTION - ONE ROW */}
//           <div className="grid grid-cols-2 gap-2 mb-2">
//             {/* TITLE */}
//             <div>
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Event Title <span className="text-red-500">*</span>
//               </label>
//               <input
//                 placeholder="Enter event title"
//                 value={formData.title}
//                 onChange={(e) => handleChange("title", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500"
//                 required
//               />
//             </div>

//             {/* DESCRIPTION */}
//             <div>
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Description <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 rows="2"
//                 placeholder="Event description"
//                 value={formData.description}
//                 onChange={(e) => handleChange("description", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500"
//                 required
//               />
//             </div>
//           </div>

//           {/* HIGHLIGHT - FULL WIDTH */}
//           <div className="mb-2">
//             <label className="block text-xs font-medium text-gray-700 mb-1">
//               Highlight / Key Points
//             </label>
//             <textarea
//               rows="3"
//               placeholder="Special highlights or key points about this event"
//               value={formData.highlight}
//               onChange={(e) => handleChange("highlight", e.target.value)}
//               className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500"
//             />
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="px-3 py-2 bg-gray-50 rounded-b-lg flex justify-end gap-2 sticky bottom-0">
//           <button
//             onClick={onClose}
//             className="px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-3 py-1 text-xs font-medium text-white bg-green-600 rounded-md hover:bg-green-700 shadow-sm"
//           >
//             Save Event
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function EventAddModal({ isOpen, onClose, onSave, categories }) {
  
  const [formData, setFormData] = useState({
    section: "",
    title: "",
    description: "",
    highlight: "",
    date: "",
    image: ""
  });
  const [imagePreview, setImagePreview] = useState("");
  const [uploading, setUploading] = useState(false);

  // SET CURRENT DATE
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setFormData(prev => ({ ...prev, date: today }));
  }, []);

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "event_upload");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/ddqklsfmc/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      return data.secure_url;
    } catch (error) {
      console.log(error);
      return "";
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // preview
    setImagePreview(URL.createObjectURL(file));
    setUploading(true);

    // upload to cloudinary
    const url = await uploadToCloudinary(file);
    
    setFormData((prev) => ({
      ...prev,
      image: url,
    }));
    setUploading(false);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.section || !formData.title || !formData.description) {
      alert("Please fill all required fields");
      return;
    }

    if (!formData.image) {
      alert("Please upload an event image");
      return;
    }

    console.log("Submitting event:", formData);

    // ✅ Create event object (section already has the category name)
    const newEvent = {
      section: formData.section,  // This is "Youth Events", "Marriage Event", etc.
      title: formData.title,
      description: formData.description,
      highlight: formData.highlight,
      date: formData.date,
      image: formData.image,
      createdAt: new Date().toISOString()
    };

    onSave(newEvent);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      section: "",
      title: "",
      description: "",
      highlight: "",
      date: new Date().toISOString().split("T")[0],
      image: ""
    });
    setImagePreview("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-xl mx-4 shadow-xl max-h-[85vh] overflow-y-auto">
        
        {/* Header */}
        <div className="bg-yellow-500 px-4 py-2.5 rounded-t-lg flex justify-between items-center sticky top-0">
          <h3 className="text-sm font-semibold text-white">Add New Event</h3>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X size={16} />
          </button>
        </div>
        
        {/* Body */}
        <div className="p-3">
          {/* IMAGE UPLOAD */}
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Event Image <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3">
              <label className="cursor-pointer group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  disabled={uploading}
                />
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center overflow-hidden group-hover:border-yellow-500 group-hover:bg-yellow-50 transition-all duration-200">
                    {imagePreview ? (
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg className="w-7 h-7 text-gray-400 group-hover:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </div>
                  {imagePreview && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-[9px] text-center text-gray-400 mt-1 group-hover:text-yellow-600">
                  {uploading ? "Uploading..." : (imagePreview ? "Change" : "Add Photo")}
                </p>
              </label>
            </div>
          </div>

          {/* SECTION & DATE - ONE ROW */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            {/* SECTION DROPDOWN */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Event Section <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.section}
                onChange={(e) => handleChange("section", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500"
                required
              >
                <option value="">Select Section</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.name}>  {/* ✅ Use cat.name */}
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* DATE */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Event Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500"
                required
              />
            </div>
          </div>

          {/* TITLE & DESCRIPTION - ONE ROW */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            {/* TITLE */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Event Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter event title"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500"
                required
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="2"
                placeholder="Event description"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500"
                required
              />
            </div>
          </div>

          {/* HIGHLIGHT - FULL WIDTH */}
          <div className="mb-2">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Highlight / Key Points
            </label>
            <textarea
              rows="3"
              placeholder="Special highlights or key points about this event (one per line)"
              value={formData.highlight}
              onChange={(e) => handleChange("highlight", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
            <p className="text-[9px] text-gray-400 mt-1">
              Tip: Enter each highlight on a new line
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-3 py-2 bg-gray-50 rounded-b-lg flex justify-end gap-2 sticky bottom-0">
          <button
            onClick={onClose}
            className="px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={uploading}
            className="px-3 py-1 text-xs font-medium text-white bg-green-600 rounded-md hover:bg-green-700 shadow-sm disabled:bg-gray-400"
          >
            {uploading ? "Uploading..." : "Save Event"}
          </button>
        </div>
      </div>
    </div>
  );
}