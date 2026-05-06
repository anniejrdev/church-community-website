
// import { useState, useEffect } from "react";
// import { Plus, Edit2, Trash2, Eye, Search, X, Calendar, Tag, FileText, Star } from "lucide-react";
// import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import EventAddModal from "../EventPage/EventAdd";
// import EventEditModal from "../EventPage/EventEdit";

// export default function EventList() {
 
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [isViewModalOpen, setIsViewModalOpen] = useState(false);
//   const [announcements, setAnnouncements] = useState([]);
// const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

//   // LOAD EVENTS - Only from admin added data
 
//   useEffect(() => {
//   const data = JSON.parse(localStorage.getItem("announcements")) || [];
//   setAnnouncements(data);
// }, []);

//  useEffect(() => {
//   const data = JSON.parse(localStorage.getItem("announcements")) || [];
//   setAnnouncements(data);
// }, []);



//   // DELETE EVENT
//   const handleDelete = (id) => {
//   const updated = announcements.filter((item) => item.id !== id);
//   setAnnouncements(updated);
//   localStorage.setItem("announcements", JSON.stringify(updated));
// };



//   // OPEN MODALS
//   const openAddModal = () => {
//     setIsAddModalOpen(true);
//   };

//  const openEditModal = (item) => {
//   setSelectedAnnouncement(item);
//   setIsEditModalOpen(true);
// };

//   const openViewModal = (event) => {
//     setSelectedEvent(event);
//     setIsViewModalOpen(true);
//   };

//   // HANDLE SAVE FROM ADD MODAL
//   const handleSaveAdd = (newEvent) => {
//    const existing = JSON.parse(localStorage.getItem("announcements")) || [];
//     const updated = [...existing, newEvent];
//     localStorage.setItem("announcements", JSON.stringify(updated));
// setAnnouncements(updated);
//    setAnnouncements(updated);

//     toast.success("Event added successfully");
//     setIsAddModalOpen(false);
//   };

//   // HANDLE SAVE FROM EDIT MODAL
//   const handleSaveEdit = (updatedEvent) => {
//    const data = JSON.parse(localStorage.getItem("announcements")) || [];
//     const updated = data.map(event =>
//       event.id === updatedEvent.id ? updatedEvent : event
//     );
//     localStorage.setItem("announcements", JSON.stringify(updated));
//   setAnnouncements(updated);
//     toast.success("Event updated successfully");
//     setIsEditModalOpen(false);
//     setSelectedAnnouncement(null);
//   };

//   return (
//     <div className="min-h-screen py-2 ">
//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />

//       <div className="max-w-8xl mx-auto">
//         {/* TOP BAR */}
//         <div className="bg-white mb-5  ">
//           <div className="flex flex-wrap justify-between items-center gap-4">
//             <button
//               onClick={openAddModal}
//               className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-200 shadow-md"
//             >
//               <Plus size={18} />
//               Add New
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
//         {/* <div className="bg-white overflow-hidden">
//           <div className="h-[65vh] overflow-y-auto">
//             <table className="w-full text-sm table-fixed">
//               <thead className="sticky top-0 bg-yellow-500 text-white z-10">
//                 <tr>
//                   <th className="border border-gray-300 px-2 py-3 text-center w-[60px]">NO</th>
//                   <th className="border border-gray-300 px-2 py-3 text-center w-[80px]">IMAGE</th>
//                   <th className="border border-gray-300 px-2 py-3 text-center w-[170px]">EVENT SECTION</th>
//                   <th className="border border-gray-300 px-2 py-3 text-left w-[220px]">TITLE</th>
//                   <th className="border border-gray-300 px-2 py-3 text-center w-[110px]">DATE</th>
//                   <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">ACTION</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredEvents && filteredEvents.length > 0 ? (
//                   filteredEvents.map((event, index) => (
//                     <tr key={event.id} className="hover:bg-gray-50 transition-colors">
//                       <td className="border border-gray-200 text-center py-3 px-2 truncate">
//                         {index + 1}
//                       </td>
//                       <td className="border border-gray-200 text-center py-1 px-2">
//                         {event.image ? (
//                           <img 
//                             src={event.image} 
//                             alt={event.title}
//                             className="w-10 h-10 object-cover rounded mx-auto"
//                           />
//                         ) : (
//                           <div className="w-10 h-10 bg-gray-100 rounded mx-auto flex items-center justify-center">
//                             <span className="text-xs text-gray-400">No img</span>
//                           </div>
//                         )}
//                       </td>
//                       <td className="border border-gray-200 text-center py-1 px-2">
//                         <span className="px-2 py-1 text-yellow-700 rounded text-xs font-medium truncate block">
//                           {event.section}
//                         </span>
//                       </td>
//                       <td className="border border-gray-200 py-2 px-2">
//                         <div className="font-medium text-gray-800 truncate" title={event.title}>
//                           {event.title}
//                         </div>
//                       </td>
//                       <td className="border border-gray-200 text-center py-1 px-2 truncate">
//                         {event.date}
//                       </td>
//                       <td className="border border-gray-200 text-center py-1 px-2">
//                         <div className="flex justify-center gap-1">
//                           <button
//                             onClick={() => openViewModal(event)}
//                             className="p-1 hover:bg-blue-50 rounded transition-colors"
//                             title="View Details"
//                           >
//                             <Eye size={15} className="text-blue-600" />
//                           </button>
//                           <button
//                             onClick={() => openEditModal(event)}
//                             className="p-1 hover:bg-yellow-50 rounded transition-colors"
//                             title="Edit Event"
//                           >
//                             <FiEdit size={15} className="text-yellow-600" />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(event.id)}
//                             className="p-1 hover:bg-red-50 rounded transition-colors"
//                             title="Delete Event"
//                           >
//                             <Trash2 size={15} className="text-red-600" />
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
//         </div> */}
//         <div className="bg-white overflow-hidden">
//   <div className="h-[65vh] overflow-y-auto">
//     <table className="w-full text-sm table-fixed">

//       {/* HEADER */}
//       <thead className="sticky top-0 bg-yellow-500 text-white z-10">
//         <tr>
//           <th className="border border-gray-300 px-2 py-3 text-center w-[60px]">NO</th>
//           <th className="border border-gray-300 px-2 py-3 text-left w-[150px]">NAME</th>
//           <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">DOB</th>
//           <th className="border border-gray-300 px-2 py-3 text-left w-[140px]">PLACE</th>
//           <th className="border border-gray-300 px-2 py-3 text-left w-[220px]">DETAILS</th>
//           <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">DATE</th>
//           <th className="border border-gray-300 px-2 py-3 text-center w-[100px]">ACTION</th>
//         </tr>
//       </thead>

//       {/* BODY */}
//       <tbody>
//         {announcements && announcements.length > 0 ? (
//           announcements.map((item, index) => (
//             <tr key={item.id} className="hover:bg-gray-50 transition-colors">

//               {/* NO */}
//               <td className="border border-gray-200 text-center py-3 px-2">
//                 {index + 1}
//               </td>

//               {/* NAME */}
//               <td className="border border-gray-200 py-2 px-2">
//                 <div className="font-medium text-gray-800 truncate">
//                   {item.name}
//                 </div>
//               </td>

//               {/* DOB */}
//               <td className="border border-gray-200 text-center py-2 px-2">
//                 {item.dob}
//               </td>

//               {/* PLACE */}
//               <td className="border border-gray-200 py-2 px-2">
//                 <div className="truncate">{item.place}</div>
//               </td>

//               {/* DETAILS */}
//               <td className="border border-gray-200 py-2 px-2">
//                 <div className="text-gray-600 text-xs line-clamp-2">
//                   {item.details}
//                 </div>
//               </td>

//               {/* DATE */}
//               <td className="border border-gray-200 text-center py-2 px-2">
//                 {item.date}
//               </td>

//               {/* ACTION */}
//               <td className="border border-gray-200 text-center py-2 px-2">
//                 <div className="flex justify-center gap-1">

//                   {/* EDIT */}
//                   <button
//                     onClick={() => openEditModal(item)}
//                     className="p-1 hover:bg-yellow-50 rounded transition-colors"
//                     title="Edit"
//                   >
//                     <FiEdit size={15} className="text-yellow-600" />
//                   </button>

//                   {/* DELETE */}
//                   <button
//                     onClick={() => handleDelete(item.id)}
//                     className="p-1 hover:bg-red-50 rounded transition-colors"
//                     title="Delete"
//                   >
//                     <Trash2 size={15} className="text-red-600" />
//                   </button>

//                 </div>
//               </td>

//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan="7" className="text-center py-10 text-gray-500">
//               No announcements found
//             </td>
//           </tr>
//         )}
//       </tbody>

//     </table>
//   </div>
// </div>
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
//          setSelectedAnnouncement(null);
//         }}
//         onSave={handleSaveEdit}
//         data={selectedAnnouncement}
//       />

//       {/* VIEW MODAL - SMALLER SIZE */}
//   {isViewModalOpen && selectedAnnouncement && (
//   <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200">
    
//     <div className="bg-white rounded-2xl w-full max-w-md mx-4 shadow-2xl overflow-hidden transform animate-in slide-in-from-bottom-4 duration-300 max-h-[90vh] overflow-y-auto">
      
//       {/* HEADER - Clean design */}
//       <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-5 py-2.5 flex justify-between items-center sticky top-0 z-10">
//         <div className="flex items-center gap-2">
//           <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
//           <h3 className="text-sm font-semibold text-white tracking-wide">Event Details</h3>
//         </div>
//         <button
//           onClick={() => setIsViewModalOpen(false)}
//           className="text-white hover:bg-white/20 rounded-full p-1 transition-all duration-200"
//         >
//           <X size={16} />
//         </button>
//       </div>

//       {/* BODY - Compact spacing */}
//       <div className="p-4 space-y-3">
        
//         {/* SECTION + DATE - Card style */}
//         <div className="grid grid-cols-2 gap-2">
//           <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
//             <div className="flex items-center gap-1.5">
//               <Tag className="text-yellow-500" size={12} />
//               <p className="text-[9px] text-gray-500 font-medium uppercase tracking-wide">Section</p>
//             </div>
//             <p className="text-[11px] font-semibold text-gray-800 mt-0.5 pl-5">
//               {selectedAnnouncement.section}
//             </p>
//           </div>

//           <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
//             <div className="flex items-center gap-1.5">
//               <Calendar className="text-yellow-500" size={12} />
//               <p className="text-[9px] text-gray-500 font-medium uppercase tracking-wide">Date</p>
//             </div>
//             <p className="text-[11px] font-semibold text-gray-800 mt-0.5 pl-5">
//               {selectedAnnouncement.date}
//             </p>
//           </div>
//         </div>

//         {/* TITLE - Highlighted */}
//         <div className="bg-gradient-to-r from-yellow-50 to-transparent rounded-lg p-2 border-l-3 border-yellow-500">
//           <p className="text-[9px] font-semibold text-yellow-600 uppercase tracking-wide mb-0.5">Title</p>
//           <h2 className="text-xs font-bold text-gray-800 leading-snug">
//             {selectedAnnouncement.title}
//           </h2>
//         </div>

//         {/* DESCRIPTION - Clean */}
//         <div>
//           <div className="flex items-center gap-1.5 mb-1 pb-0.5 border-b border-gray-100">
//             <FileText className="text-yellow-500" size={12} />
//             <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wide">Description</p>
//           </div>
//           <p className="text-[11px] text-gray-600 leading-relaxed line-clamp-3">
//             {selectedAnnouncement.description}
//           </p>
//         </div>

//         {/* HIGHLIGHTS - Compact */}
//         {selectedEvent.highlight && selectedEvent.highlight.trim() !== "" && (
//           <div className="bg-amber-50 rounded-lg p-2 border border-amber-100">
//             <div className="flex items-center gap-1.5 mb-1">
//               <Star className="text-yellow-500 fill-yellow-500" size={12} />
//               <p className="text-[10px] font-semibold text-gray-700 uppercase tracking-wide">Highlights</p>
//             </div>
//             <div className="space-y-1">
//               {selectedAnnouncement.highlight.split("\n").slice(0, 3).map((item, i) => (
//                 item.trim() && (
//                   <div key={i} className="flex items-start gap-1.5">
//                     <span className="w-1 h-1 bg-yellow-500 rounded-full mt-1"></span>
//                     <p className="text-[10px] text-gray-700 leading-relaxed line-clamp-1">{item}</p>
//                   </div>
//                 )
//               ))}
//               {selectedAnnouncement.highlight.split("\n").filter(item => item.trim()).length > 3 && (
//                 <p className="text-[9px] text-gray-400 pl-3">+{selectedEvent.highlight.split("\n").filter(item => item.trim()).length - 3} more</p>
//               )}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* FOOTER - Smaller */}
//       <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 flex justify-end sticky bottom-0">
//         <button
//           onClick={() => setIsViewModalOpen(false)}
//           className="px-3 py-1 text-[11px] font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
//         >
//           Close
//         </button>
//       </div>

//     </div>
//   </div>
// )}
//     </div>
//   );
// }


// import { useState, useEffect } from "react";
// import { Plus, Edit2, Trash2, Eye, Search, X, Calendar, Tag, FileText, Star } from "lucide-react";
// import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import AnnouncementAddModal from "../Announsment/AnnounsmentAdd";
// import AnnouncementEditModal from "../Announsment/AnnounsmentEdit";

// export default function AnnouncementList() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [isViewModalOpen, setIsViewModalOpen] = useState(false);
//   const [announcements, setAnnouncements] = useState([]);
//   const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

//   // LOAD ANNOUNCEMENTS
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("announcements")) || [];
//     setAnnouncements(data);
//   }, []);

//   // FILTERED ANNOUNCEMENTS
//   const filteredAnnouncements = announcements.filter((item) =>
//     item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.place?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // DELETE ANNOUNCEMENT
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this announcement?")) {
//       const updated = announcements.filter((item) => item.id !== id);
//       setAnnouncements(updated);
//       localStorage.setItem("announcements", JSON.stringify(updated));
//       toast.error("deleted successfully");
//     }
//   };

//   // OPEN MODALS
//   const openAddModal = () => {
//     setIsAddModalOpen(true);
//   };

//   const openEditModal = (item) => {
//     setSelectedAnnouncement(item);
//     setIsEditModalOpen(true);
//   };

//   const openViewModal = (item) => {
//     setSelectedAnnouncement(item);
//     setIsViewModalOpen(true);
//   };

//   // HANDLE SAVE FROM ADD MODAL
//   const handleSaveAdd = (newData) => {
//     const existing = JSON.parse(localStorage.getItem("announcements")) || [];
//     const updated = [...existing, newData];
//     localStorage.setItem("announcements", JSON.stringify(updated));
//     setAnnouncements(updated);
//     toast.success("Added successfully");
//     setIsAddModalOpen(false);
//   };

//   // HANDLE SAVE FROM EDIT MODAL
//   const handleSaveEdit = (updatedData) => {
//     const data = JSON.parse(localStorage.getItem("announcements")) || [];
//     const updated = data.map(item =>
//       item.id === updatedData.id ? updatedData : item
//     );
//     localStorage.setItem("announcements", JSON.stringify(updated));
//     setAnnouncements(updated);
//     toast.success("Updated successfully");
//     setIsEditModalOpen(false);
//     setSelectedAnnouncement(null);
//   };

//   return (
//     <div className="min-h-screen py-2">
//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />

//       <div className="max-w-8xl mx-auto">
//         {/* TOP BAR */}
//         <div className="bg-white mb-5">
//           <div className="flex flex-wrap justify-between items-center gap-4">
//             <button
//               onClick={openAddModal}
//               className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-200 shadow-md"
//             >
//               <Plus size={18} />
//               Add New
//             </button>

//             <div className="flex-1 max-w-xs">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Search by name..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* TABLE */}
//         <div className="bg-white overflow-hidden">
//           <div className="h-[65vh] overflow-y-auto">
//             <table className="w-full text-sm table-fixed">
//               <thead className="sticky top-0 bg-yellow-500 text-white z-10">
//                 <tr>
//                   <th className="border border-gray-300 px-2 py-3 text-center w-[60px]">NO</th>
//                   <th className="border border-gray-300 px-2 py-3 text-center w-[150px]">NAME</th>
//                   <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">DOB</th>
//                   <th className="border border-gray-300 px-2 py-3 text-center w-[150px]">PLACE</th>
//                   <th className="border border-gray-300 px-2 py-3 text-center w-[210px]">DETAILS</th>
//                   <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">DATE</th>
//                   <th className="border border-gray-300 px-2 py-3 text-center w-[100px]">ACTION</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredAnnouncements && filteredAnnouncements.length > 0 ? (
//                   filteredAnnouncements.map((item, index) => (
//                     <tr key={item.id} className="hover:bg-gray-50 transition-colors">
//                       <td className="border border-gray-200 text-center py-3 px-2">
//                         {index + 1}
//                       </td>
//                       <td className="border border-gray-200 py-2 px-2">
//                         <div className="font-medium text-gray-800 text-center truncate">
//                           {item.name}
//                         </div>
//                       </td>
//                       <td className="border border-gray-200 text-center py-2 px-2">
//                         {item.dob}
//                       </td>
//                       <td className="border border-gray-200 text-center py-2 px-2">
//                         <div className="truncate">{item.place}</div>
//                       </td>
//                       <td className="border border-gray-200 py-2 px-2">
//                         <div className="text-gray-600 text-center text-xs line-clamp-2">
//                           {item.details}
//                         </div>
//                       </td>
//                       <td className="border border-gray-200 text-center py-2 px-2">
//                         {item.date}
//                       </td>
//                       <td className="border border-gray-200 text-center py-2 px-2">
//                         <div className="flex justify-center gap-1">
//                           {/* <button
//                             onClick={() => openViewModal(item)}
//                             className="p-1 hover:bg-blue-50 rounded transition-colors"
//                             title="View Details"
//                           >
//                             <Eye size={15} className="text-blue-600" />
//                           </button> */}
//                           <button
//                             onClick={() => openEditModal(item)}
//                             className="p-1 hover:bg-yellow-50 rounded transition-colors"
//                             title="Edit"
//                           >
//                             <FiEdit size={15} className="text-yellow-600" />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(item.id)}
//                             className="p-1 hover:bg-red-50 rounded transition-colors"
//                             title="Delete"
//                           >
//                             <Trash2 size={15} className="text-red-600" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="7" className="text-center py-10 text-gray-500">
//                       No announcements found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* ADD MODAL */}
//       <AnnouncementAddModal
//         isOpen={isAddModalOpen}
//         onClose={() => setIsAddModalOpen(false)}
//         onSave={handleSaveAdd}
//       />

//       {/* EDIT MODAL */}
//       <AnnouncementEditModal
//         isOpen={isEditModalOpen}
//         onClose={() => {
//           setIsEditModalOpen(false);
//           setSelectedAnnouncement(null);
//         }}
//         onSave={handleSaveEdit}
//         data={selectedAnnouncement}
//       />

//       {/* VIEW MODAL */}
//       {isViewModalOpen && selectedAnnouncement && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200">
//           <div className="bg-white rounded-2xl w-full max-w-md mx-4 shadow-2xl overflow-hidden transform animate-in slide-in-from-bottom-4 duration-300 max-h-[90vh] overflow-y-auto">
            
//             {/* HEADER */}
//             <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-5 py-2.5 flex justify-between items-center sticky top-0 z-10">
//               <div className="flex items-center gap-2">
//                 <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
//                 <h3 className="text-sm font-semibold text-white tracking-wide">Announcement Details</h3>
//               </div>
//               <button onClick={() => setIsViewModalOpen(false)} className="text-white hover:bg-white/20 rounded-full p-1">
//                 <X size={16} />
//               </button>
//             </div>

//             {/* BODY */}
//             <div className="p-4 space-y-3">
//               <div className="grid grid-cols-2 gap-2">
//                 <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
//                   <div className="flex items-center gap-1.5">
//                     <Tag className="text-yellow-500" size={12} />
//                     <p className="text-[9px] text-gray-500 font-medium uppercase">Name</p>
//                   </div>
//                   <p className="text-[11px] font-semibold text-gray-800 mt-0.5 pl-5">
//                     {selectedAnnouncement.name}
//                   </p>
//                 </div>

//                 <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
//                   <div className="flex items-center gap-1.5">
//                     <Calendar className="text-yellow-500" size={12} />
//                     <p className="text-[9px] text-gray-500 font-medium uppercase">DOB</p>
//                   </div>
//                   <p className="text-[11px] font-semibold text-gray-800 mt-0.5 pl-5">
//                     {selectedAnnouncement.dob}
//                   </p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-2">
//                 <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
//                   <div className="flex items-center gap-1.5">
//                     <Tag className="text-yellow-500" size={12} />
//                     <p className="text-[9px] text-gray-500 font-medium uppercase">Place</p>
//                   </div>
//                   <p className="text-[11px] font-semibold text-gray-800 mt-0.5 pl-5">
//                     {selectedAnnouncement.place}
//                   </p>
//                 </div>

//                 <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
//                   <div className="flex items-center gap-1.5">
//                     <Calendar className="text-yellow-500" size={12} />
//                     <p className="text-[9px] text-gray-500 font-medium uppercase">Date</p>
//                   </div>
//                   <p className="text-[11px] font-semibold text-gray-800 mt-0.5 pl-5">
//                     {selectedAnnouncement.date}
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex items-center gap-1.5 mb-1 pb-0.5 border-b border-gray-100">
//                   <FileText className="text-yellow-500" size={12} />
//                   <p className="text-[10px] font-semibold text-gray-600 uppercase">Details</p>
//                 </div>
//                 <p className="text-[11px] text-gray-600 leading-relaxed">
//                   {selectedAnnouncement.details || "-"}
//                 </p>
//               </div>
//             </div>

//             {/* FOOTER */}
//             <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 flex justify-end sticky bottom-0">
//               <button
//                 onClick={() => setIsViewModalOpen(false)}
//                 className="px-3 py-1 text-[11px] font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
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
import AnnouncementAddModal from "../Announsment/AnnounsmentAdd";
import AnnouncementEditModal from "../Announsment/AnnounsmentEdit";
import { db } from "../../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";

export default function AnnouncementList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  // LOAD ANNOUNCEMENTS
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "announcements"));
        const list = snapshot.docs.map(doc => ({
          id: doc.id, // Firestore document ID (string like "abc123")
          ...doc.data()
        }));
        console.log("Loaded announcements:", list);
        setAnnouncements(list);
      } catch (error) {
        console.error("Error loading:", error);
        toast.error("Failed to load announcements");
      }
    };
    fetchData();
  }, []);

  // FILTERED ANNOUNCEMENTS
  const filteredAnnouncements = announcements.filter((item) =>
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.place?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // DELETE ANNOUNCEMENT
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this announcement?")) return;

    try {
      await deleteDoc(doc(db, "announcements", id));
      setAnnouncements(prev => prev.filter(item => item.id !== id));
      toast.error("Deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error("Error deleting: " + err.message);
    }
  };

  // OPEN MODALS
  const openAddModal = () => setIsAddModalOpen(true);
  const openEditModal = (item) => {
    setSelectedAnnouncement(item);
    setIsEditModalOpen(true);
  };
  const openViewModal = (item) => {
    setSelectedAnnouncement(item);
    setIsViewModalOpen(true);
  };

  // HANDLE SAVE FROM ADD MODAL
  const handleSaveAdd = async (newData) => {
    try {
      const docRef = await addDoc(collection(db, "announcements"), {
        ...newData,
        createdAt: new Date().toISOString()
      });

      setAnnouncements(prev => [
        ...prev,
        { id: docRef.id, ...newData }
      ]);

      toast.success("Added successfully");
      setIsAddModalOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Error adding: " + err.message);
    }
  };

  // HANDLE SAVE FROM EDIT MODAL
  const handleSaveEdit = async (updatedData) => {
    try {
      const { id, ...updateFields } = updatedData;
      
      // Update Firestore
      await updateDoc(doc(db, "announcements", id), updateFields);

      // Update local state
      setAnnouncements(prev =>
        prev.map(item =>
          item.id === id ? { ...item, ...updateFields } : item
        )
      );

      toast.success("Updated successfully");
      setIsEditModalOpen(false);
      setSelectedAnnouncement(null);
    } catch (err) {
      console.error(err);
      toast.error("Error updating: " + err.message);
    }
  };

  return (
    <div className="min-h-screen py-2">
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      <div className="max-w-8xl mx-auto">
        {/* TOP BAR */}
        <div className="bg-white mb-5">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <button
              onClick={openAddModal}
              className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-200 shadow-md"
            >
              <Plus size={18} />
              Add New
            </button>

            <div className="flex-1 max-w-xs">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white overflow-hidden">
          <div className="h-[65vh] overflow-y-auto">
            <table className="w-full text-sm table-fixed">
              <thead className="sticky top-0 bg-yellow-500 text-white z-10">
                <tr>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[60px]">NO</th>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[150px]">NAME</th>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">DOB</th>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[150px]">PLACE</th>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[210px]">DETAILS</th>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">DATE</th>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[100px]">ACTION</th>
                </tr>
              </thead>

              <tbody>
                {filteredAnnouncements.length > 0 ? (
                  filteredAnnouncements.map((item, index) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-200 text-center py-3 px-2">{index + 1}</td>
                      <td className="border border-gray-200 py-2 px-2">
                        <div className="font-medium text-gray-800 text-center truncate">{item.name}</div>
                      </td>
                      <td className="border border-gray-200 text-center py-2 px-2">{item.dob}</td>
                      <td className="border border-gray-200 text-center py-2 px-2">
                        <div className="truncate">{item.place}</div>
                      </td>
                      <td className="border border-gray-200 py-2 px-2">
                        <div className="text-gray-600 text-center text-xs line-clamp-2">{item.details}</div>
                      </td>
                      <td className="border border-gray-200 text-center py-2 px-2">{item.date}</td>
                      <td className="border border-gray-200 text-center py-2 px-2">
                        <div className="flex justify-center gap-1">
                          <button
                            onClick={() => openEditModal(item)}
                            className="p-1 hover:bg-yellow-50 rounded transition-colors"
                            title="Edit"
                          >
                            <FiEdit size={15} className="text-yellow-600" />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="p-1 hover:bg-red-50 rounded transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={15} className="text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-10 text-gray-500">
                      No announcements found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ADD MODAL */}
      <AnnouncementAddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveAdd}
      />

      {/* EDIT MODAL */}
      <AnnouncementEditModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedAnnouncement(null);
        }}
        onSave={handleSaveEdit}
        data={selectedAnnouncement}
      />
    </div>
  );
}