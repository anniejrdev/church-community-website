// import { useState } from "react";
// import { FiEdit, FiTrash2, FiRefreshCw, FiSearch } from "react-icons/fi";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ContactEditModal from "../Contact/ContactEdit";

// export default function ContactList() {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@example.com",
//       message: "I would like to know about the church timings",
//       date: "2026-04-27",
//     },
//     {
//       id: 2,
//       name: "Mary Williams",
//       email: "mary@example.com",
//       message: "Need prayer for my family",
//       date: "2026-04-25",
//     },
//     {
//       id: 3,
//       name: "David Raj",
//       email: "david@example.com",
//       message: "Want to volunteer for church activities",
//       date: "2026-04-24",
//     },
//   ]);

//   const [search, setSearch] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleRefresh = () => {
//     toast.success("Refreshed successfully");
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this contact?")) {
//       setData((prev) => prev.filter((item) => item.id !== id));
//       toast.error("Deleted successfully");
//     }
//   };

//   // Open Modal when edit icon is clicked
//   const handleEditClick = (item) => {
//     setSelectedItem(item);
//     setIsModalOpen(true);
//   };

//   // Save edited data from modal
//   const handleSaveEdit = (updatedItem) => {
//     setData((prev) =>
//       prev.map((item) =>
//         item.id === updatedItem.id ? updatedItem : item
//       )
//     );
//     toast.success("Updated successfully");
//     setIsModalOpen(false);
//     setSelectedItem(null);
//   };

//   // Close modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedItem(null);
//   };

//   const filtered = data.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase()) ||
//     item.email.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="flex flex-col h-full p-4">

//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />

//       {/* 🔹 Top Bar */}
//       <div className="flex justify-between items-center mb-4 pb-2">
  
//         {/* LEFT SECTION */}
//         <div className="flex items-center gap-3">
//           <button
//             onClick={handleRefresh}
//             className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//           >
//             <FiRefreshCw size={14} className="text-gray-600" />
//             <span className="text-gray-700 font-medium">Refresh</span>
//           </button>

//           <div className="flex items-center gap-2">
//             <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
//               <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
//               <span className="text-xs font-medium text-yellow-700">Contacts</span>
//               <div className="w-px h-4 bg-yellow-200 mx-1"></div>
//               <span className="text-lg font-bold text-yellow-800">{data.length}</span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SEARCH SECTION */}
//         <div className="relative">
//           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
//           <input
//             type="text"
//             placeholder="Search by name or email..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="pl-9 pr-3 py-1.5 text-sm border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 w-64 placeholder:text-gray-400"
//           />
//           {search && (
//             <button
//               onClick={() => setSearch("")}
//               className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//             >
//               <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           )}
//         </div>

//       </div>

//       {/* 🔹 Table */}
//       <div className="bg-white flex-1 overflow-hidden rounded">
//         <div
//           className="h-[72vh] overflow-y-auto"
//           style={{
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//         >
//           <table className="w-full text-xs table-fixed">

//             {/* Header */}
//             <thead className="sticky top-0 bg-yellow-500 z-10">
//               <tr className="text-white">
//                 <th className="border border-gray-300 px-3 py-3 w-[60px] text-center">NO</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[180px] text-center">NAME</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[220px] text-center">EMAIL</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[300px] text-center">MESSAGE</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[140px] text-center">DATE</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[120px] text-center">ACTION</th>
//               </tr>
//             </thead>

//             {/* Body */}
//             <tbody>
//               {filtered.length === 0 ? (
//                 <tr>
//                   <td colSpan="6" className="text-center py-4 text-gray-500">
//                     No data found
//                   </td>
//                 </tr>
//               ) : (
//                 filtered.map((item, index) => (
//                   <tr key={item.id} className="hover:bg-gray-50">
//                     <td className="border border-gray-200 px-3 py-3 text-center">
//                       {index + 1}
//                     </td>

//                     {/* Name */}
//                     <td
//                       title={item.name}
//                       className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
//                     >
//                       {item.name}
//                     </td>

//                     {/* Email */}
//                     <td
//                       title={item.email}
//                       className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
//                     >
//                       {item.email}
//                     </td>

//                     {/* Message */}
//                     <td
//                       title={item.message}
//                       className="border border-gray-200 px-3 py-3 text-left truncate overflow-hidden"
//                     >
//                       {item.message || "-"}
//                     </td>

//                     {/* Date */}
//                     <td className="border border-gray-200 px-3 py-3 text-center">
//                       {item.date}
//                     </td>

//                     {/* Actions */}
//                     <td className="border border-gray-200 px-3 py-2 text-center">
//                       <div className="flex justify-center gap-3">
//                         <button
//                           onClick={() => handleEditClick(item)}
//                           className="text-yellow-600 hover:text-yellow-700"
//                           title="Edit"
//                         >
//                           <FiEdit size={14} />
//                         </button>

//                         <button
//                           onClick={() => handleDelete(item.id)}
//                           className="text-red-500 hover:text-red-700"
//                           title="Delete"
//                         >
//                           <FiTrash2 size={14} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>

//           </table>
//         </div>
//       </div>

//       {/* 🔹 Edit Modal Component */}
//       <ContactEditModal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         onSave={handleSaveEdit}
//         data={selectedItem}
//       />

//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { FiEdit, FiTrash2, FiRefreshCw, FiSearch, FiMail, FiCheckCircle } from "react-icons/fi";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ContactEditModal from "../Contact/ContactEdit";
// import { db } from "../../../firebase";
// import {
//   collection,
//   getDocs,
//   deleteDoc,
//   updateDoc,
//   doc,
//   query,
//   orderBy,
//   where
// } from "firebase/firestore";

// export default function ContactList() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [filterStatus, setFilterStatus] = useState("all"); // all, unread, read

//   // LOAD CONTACTS FROM FIREBASE
//   useEffect(() => {
//     loadContacts();
//   }, []);

//   const loadContacts = async () => {
//     setLoading(true);
//     try {
//       const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
//       const snapshot = await getDocs(q);
//       const contacts = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       console.log("Loaded contacts:", contacts.length);
//       setData(contacts);
//     } catch (error) {
//       console.error("Error loading contacts:", error);
//       toast.error("Failed to load contacts");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRefresh = () => {
//     loadContacts();
//     toast.success("Refreshed successfully");
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this contact?")) {
//       try {
//         await deleteDoc(doc(db, "contacts", String(id)));
//         setData((prev) => prev.filter((item) => item.id !== id));
//         toast.success("Deleted successfully");
//       } catch (error) {
//         console.error("Delete error:", error);
//         toast.error("Failed to delete");
//       }
//     }
//   };

//   const handleMarkAsRead = async (item) => {
//     try {
//       await updateDoc(doc(db, "contacts", String(item.id)), {
//         status: "read"
//       });
//       await loadContacts();
//       toast.success("Marked as read");
//     } catch (error) {
//       console.error("Error marking as read:", error);
//       toast.error("Failed to update status");
//     }
//   };

//   // Open Modal when edit icon is clicked
//   const handleEditClick = (item) => {
//     setSelectedItem(item);
//     setIsModalOpen(true);
//   };

//   // Save edited data from modal
//   const handleSaveEdit = async (updatedItem) => {
//     try {
//       await updateDoc(doc(db, "contacts", String(updatedItem.id)), {
//         name: updatedItem.name,
//         email: updatedItem.email,
//         message: updatedItem.message,
//         date: updatedItem.date,
//         updatedAt: new Date().toISOString()
//       });
      
//       toast.success("Updated successfully");
//       await loadContacts();
//       setIsModalOpen(false);
//       setSelectedItem(null);
//     } catch (error) {
//       console.error("Update error:", error);
//       toast.error("Failed to update");
//     }
//   };

//   // Close modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedItem(null);
//   };

//   // Filter data based on search and status
//   const getFilteredData = () => {
//     let filtered = data;
    
//     // Apply status filter
//     if (filterStatus !== "all") {
//       filtered = filtered.filter(item => item.status === filterStatus);
//     }
    
//     // Apply search filter
//     if (search) {
//       filtered = filtered.filter((item) =>
//         item.name?.toLowerCase().includes(search.toLowerCase()) ||
//         item.email?.toLowerCase().includes(search.toLowerCase())
//       );
//     }
    
//     return filtered;
//   };

//   const filtered = getFilteredData();
//   const unreadCount = data.filter(item => item.status !== "read").length;

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading contacts...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col h-full p-4">

//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />

//       {/* 🔹 Top Bar */}
//       <div className="flex justify-between items-center mb-4 pb-2">
  
//         {/* LEFT SECTION */}
//         <div className="flex items-center gap-3 flex-wrap">
//           <button
//             onClick={handleRefresh}
//             className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//           >
//             <FiRefreshCw size={14} className="text-gray-600" />
//             <span className="text-gray-700 font-medium">Refresh</span>
//           </button>

//           <div className="flex items-center gap-2">
//             <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
//               <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
//               <span className="text-xs font-medium text-yellow-700">Total</span>
//               <div className="w-px h-4 bg-yellow-200 mx-1"></div>
//               <span className="text-lg font-bold text-yellow-800">{data.length}</span>
//             </div>
            
//             {unreadCount > 0 && (
//               <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-100">
//                 <FiMail size={12} className="text-red-500" />
//                 <span className="text-xs font-medium text-red-600">Unread</span>
//                 <span className="text-lg font-bold text-red-700">{unreadCount}</span>
//               </div>
//             )}
//           </div>

//           {/* Status Filter Buttons */}
//           <div className="flex gap-2">
//             <button
//               onClick={() => setFilterStatus("all")}
//               className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
//                 filterStatus === "all"
//                   ? "bg-yellow-500 text-white"
//                   : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//               }`}
//             >
//               All
//             </button>
//             <button
//               onClick={() => setFilterStatus("unread")}
//               className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
//                 filterStatus === "unread"
//                   ? "bg-red-500 text-white"
//                   : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//               }`}
//             >
//               Unread
//             </button>
//             <button
//               onClick={() => setFilterStatus("read")}
//               className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
//                 filterStatus === "read"
//                   ? "bg-green-500 text-white"
//                   : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//               }`}
//             >
//               Read
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SEARCH SECTION */}
//         <div className="relative">
//           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
//           <input
//             type="text"
//             placeholder="Search by name or email..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="pl-9 pr-3 py-1.5 text-sm border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 w-64 placeholder:text-gray-400"
//           />
//           {search && (
//             <button
//               onClick={() => setSearch("")}
//               className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//             >
//               <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           )}
//         </div>

//       </div>

//       {/* 🔹 Table */}
//       <div className="bg-white flex-1 overflow-hidden rounded">
//         <div
//           className="h-[72vh] overflow-y-auto"
//           style={{
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//         >
//           <table className="w-full text-xs table-fixed">

//             {/* Header */}
//             <thead className="sticky top-0 bg-yellow-500 z-10">
//               <tr className="text-white">
//                 <th className="border border-gray-300 px-3 py-3 w-[60px] text-center">NO</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[180px] text-center">NAME</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[220px] text-center">EMAIL</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[300px] text-center">MESSAGE</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[140px] text-center">DATE</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[150px] text-center">STATUS</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[120px] text-center">ACTION</th>
//               </tr>
//             </thead>

//             {/* Body */}
//             <tbody>
//               {filtered.length === 0 ? (
//                 <tr>
//                   <td colSpan="7" className="text-center py-4 text-gray-500">
//                     {search ? "No matching contacts found" : "No contacts found"}
//                    </td>
//                 </tr>
//               ) : (
//                 filtered.map((item, index) => (
//                   <tr key={item.id} className="hover:bg-gray-50">
//                     <td className="border border-gray-200 px-3 py-3 text-center">
//                       {index + 1}
//                     </td>

//                     {/* Name */}
//                     <td
//                       title={item.name}
//                       className={`border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden ${
//                         item.status !== "read" ? "font-semibold" : ""
//                       }`}
//                     >
//                       {item.name}
//                     </td>

//                     {/* Email */}
//                     <td
//                       title={item.email}
//                       className={`border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden ${
//                         item.status !== "read" ? "font-semibold" : ""
//                       }`}
//                     >
//                       {item.email}
//                     </td>

//                     {/* Message */}
//                     <td
//                       title={item.message}
//                       className={`border border-gray-200 px-3 py-3 text-center truncate overflow-hidden ${
//                         item.status !== "read" ? "font-semibold" : ""
//                       }`}
//                     >
//                       {item.message || "-"}
//                     </td>

//                     {/* Date */}
//                     <td className="border border-gray-200 px-3 py-3 text-center">
//                       {item.date}
//                     </td>

//                     {/* Status */}
//                     <td className="border border-gray-200 px-3 py-2 text-center">
//                       <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full ${
//                         item.status === "read"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}>
//                         {item.status === "read" ? (
//                           <>
//                             <FiCheckCircle size={10} />
//                             Read
//                           </>
//                         ) : (
//                           <>
//                             <FiMail size={10} />
//                             Unread
//                           </>
//                         )}
//                       </span>
//                     </td>

//                     {/* Actions */}
//                     <td className="border border-gray-200 px-3 py-2 text-center">
//                       <div className="flex justify-center gap-3">
//                         {item.status !== "read" && (
//                           <button
//                             onClick={() => handleMarkAsRead(item)}
//                             className="text-green-600 hover:text-green-700"
//                             title="Mark as read"
//                           >
//                             <FiCheckCircle size={14} />
//                           </button>
//                         )}
//                         <button
//                           onClick={() => handleEditClick(item)}
//                           className="text-yellow-600 hover:text-yellow-700"
//                           title="Edit"
//                         >
//                           <FiEdit size={14} />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(item.id)}
//                           className="text-red-500 hover:text-red-700"
//                           title="Delete"
//                         >
//                           <FiTrash2 size={14} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>

//            </table>
//         </div>
//       </div>

//       {/* 🔹 Edit Modal Component */}
//       <ContactEditModal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         onSave={handleSaveEdit}
//         data={selectedItem}
//       />

//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { FiEdit, FiTrash2, FiRefreshCw, FiSearch, FiMail, FiCheckCircle } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactEditModal from "../Contact/ContactEdit";
import { db } from "../../../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";

export default function ContactList() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all"); // all, unread, read

  // LOAD CONTACTS FROM FIREBASE
  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const contacts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("Loaded contacts:", contacts.length);
      setData(contacts);
    } catch (error) {
      console.error("Error loading contacts:", error);
      toast.error("Failed to load contacts");
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    loadContacts();
    toast.success("Refreshed successfully");
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await deleteDoc(doc(db, "contacts", String(id)));
        setData((prev) => prev.filter((item) => item.id !== id));
        toast.success("Deleted successfully");
      } catch (error) {
        console.error("Delete error:", error);
        toast.error("Failed to delete");
      }
    }
  };

  const handleMarkAsRead = async (item) => {
    try {
      await updateDoc(doc(db, "contacts", String(item.id)), {
        status: "read"
      });
      await loadContacts();
      toast.success("Marked as read");
    } catch (error) {
      console.error("Error marking as read:", error);
      toast.error("Failed to update status");
    }
  };

  // Open Modal when edit icon is clicked
  const handleEditClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Save edited data from modal
  const handleSaveEdit = async (updatedItem) => {
    try {
      await updateDoc(doc(db, "contacts", String(updatedItem.id)), {
        name: updatedItem.name,
        email: updatedItem.email,
        message: updatedItem.message,
        date: updatedItem.date,
        updatedAt: new Date().toISOString()
      });
      
      toast.success("Updated successfully");
      await loadContacts();
      setIsModalOpen(false);
      setSelectedItem(null);
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update");
    }
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Filter data based on search and status
  const getFilteredData = () => {
    let filtered = data;
    
    // Apply status filter
    if (filterStatus !== "all") {
      filtered = filtered.filter(item => item.status === filterStatus);
    }
    
    // Apply search filter
    if (search) {
      filtered = filtered.filter((item) =>
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.email?.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    return filtered;
  };

  const filtered = getFilteredData();
  const unreadCount = data.filter(item => item.status !== "read").length;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading contacts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full p-4">

      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      {/* 🔹 Top Bar */}
      <div className="flex justify-between items-center mb-4 pb-2">
  
        {/* LEFT SECTION - All buttons same height */}
        <div className="flex items-center gap-3">
          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            className="h-9 flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <FiRefreshCw size={14} className="text-gray-600" />
            <span>Refresh</span>
          </button>

          {/* Total Contacts Badge */}
          <div className="h-9 flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-yellow-700">Contacts</span>
            <div className="w-px h-4 bg-yellow-200 mx-1"></div>
            <span className="text-sm font-bold text-yellow-800">{data.length}</span>
          </div>
          
          {/* Unread Badge */}
          {unreadCount > 0 && (
            <div className="h-9 flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-100">
              <FiMail size={12} className="text-red-500" />
              <span className="text-xs font-medium text-red-600">Unread</span>
              <span className="text-sm font-bold text-red-700">{unreadCount}</span>
            </div>
          )}

          {/* Status Filter Buttons - Same height */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilterStatus("all")}
              className={`h-9 px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
                filterStatus === "all"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterStatus("unread")}
              className={`h-9 px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
                filterStatus === "unread"
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Unread
            </button>
            <button
              onClick={() => setFilterStatus("read")}
              className={`h-9 px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
                filterStatus === "read"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Read
            </button>
          </div>
        </div>

        {/* RIGHT SEARCH SECTION */}
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 w-64 placeholder:text-gray-400"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

      </div>

      {/* 🔹 Table */}
      <div className="bg-white flex-1 overflow-hidden rounded">
        <div
          className="h-[72vh] overflow-y-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <table className="w-full text-xs table-fixed">

            {/* Header */}
            <thead className="sticky top-0 bg-yellow-500 z-10">
              <tr className="text-white">
                <th className="border border-gray-300 px-3 py-3 w-[60px] text-center">NO</th>
                <th className="border border-gray-300 px-3 py-3 w-[180px] text-center">NAME</th>
                <th className="border border-gray-300 px-3 py-3 w-[220px] text-center">EMAIL</th>
                <th className="border border-gray-300 px-3 py-3 w-[300px] text-center">MESSAGE</th>
                <th className="border border-gray-300 px-3 py-3 w-[140px] text-center">DATE</th>
                <th className="border border-gray-300 px-3 py-3 w-[150px] text-center">STATUS</th>
                <th className="border border-gray-300 px-3 py-3 w-[120px] text-center">ACTION</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-500">
                    {search ? "No matching contacts found" : "No contacts found"}
                   </td>
                </tr>
              ) : (
                filtered.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-3 py-3 text-center">
                      {index + 1}
                    </td>

                    {/* Name */}
                    <td
                      title={item.name}
                      className={`border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden ${
                        item.status !== "read" ? "font-semibold" : ""
                      }`}
                    >
                      {item.name}
                    </td>

                    {/* Email */}
                    <td
                      title={item.email}
                      className={`border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden ${
                        item.status !== "read" ? "font-semibold" : ""
                      }`}
                    >
                      {item.email}
                    </td>

                    {/* Message */}
                    <td
                      title={item.message}
                      className={`border border-gray-200 px-3 py-3 text-left truncate overflow-hidden ${
                        item.status !== "read" ? "font-semibold" : ""
                      }`}
                    >
                      {item.message || "-"}
                    </td>

                    {/* Date */}
                    <td className="border border-gray-200 px-3 py-3 text-center">
                      {item.date}
                    </td>

                    {/* Status */}
                    <td className="border border-gray-200 px-3 py-2 text-center">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full ${
                        item.status === "read"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}>
                        {item.status === "read" ? (
                          <>
                            <FiCheckCircle size={10} />
                            Read
                          </>
                        ) : (
                          <>
                            <FiMail size={10} />
                            Unread
                          </>
                        )}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="border border-gray-200 px-3 py-2 text-center">
                      <div className="flex justify-center gap-3">
                        {item.status !== "read" && (
                          <button
                            onClick={() => handleMarkAsRead(item)}
                            className="text-green-600 hover:text-green-700"
                            title="Mark as read"
                          >
                            <FiCheckCircle size={14} />
                          </button>
                        )}
                        <button
                          onClick={() => handleEditClick(item)}
                          className="text-yellow-600 hover:text-yellow-700"
                          title="Edit"
                        >
                          <FiEdit size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-500 hover:text-red-700"
                          title="Delete"
                        >
                          <FiTrash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

           </table>
        </div>
      </div>

      {/* 🔹 Edit Modal Component */}
      <ContactEditModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveEdit}
        data={selectedItem}
      />

    </div>
  );
}