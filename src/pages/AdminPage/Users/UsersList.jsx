// import { useState } from "react";
// import { FiEye, FiEdit, FiTrash2, FiRefreshCw } from "react-icons/fi";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// export default function Users() {
//   const navigate = useNavigate();

//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       name: "John Samuelmmmmmmmmmmmmmmm",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "karamana trivandrum",
//     },
//     {
//       id: 2,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "2026-04-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 3,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 4,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "2026-04-29",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 5,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "2026-04-29",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 6,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "2026-04-29",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 7,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-14",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 8,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "2026-04-15",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 9,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 10,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 11,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 12,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 13,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 14,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 15,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 16,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//   ]);

//   const [selectedUser, setSelectedUser] = useState(null);
//   const [search, setSearch] = useState("");

//   // 🔄 Refresh
//   const handleRefresh = () => {
//     window.location.reload();
//   };

//   // 🗑 Delete
//   const handleDelete = (id) => {
//     setUsers((prev) => prev.filter((u) => u.id !== id));
//     toast.error("User deleted successfully");
//   };

//   // ✏ Edit - Navigate to edit page
//   const handleEdit = (user) => {
//     navigate(`/admin/users/edit/${user.id}`);
//   };

//   // 🔍 Filter
//   const filteredUsers = users.filter((u) =>
//     u.name.toLowerCase().includes(search.toLowerCase())
//   );

//   // 📊 Stats
//   const totalUsers = users.length;

//   const currentMonth = new Date().getMonth();

//   const birthdays = users.filter(
//     (u) => u.dob && new Date(u.dob).getMonth() === currentMonth
//   ).length;

//   const anniversaries = users.filter(
//     (u) =>
//       u.anniversary &&
//       new Date(u.anniversary).getMonth() === currentMonth
//   ).length;

//   return (
//     <div className="h-full flex flex-col">

//       {/* 🔔 Toast */}
//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />

//       {/* 🔹 Top Cards - Improved Design */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">

//         <div className="bg-white p-5 rounded-lg border border-gray-200 ">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs text-gray-500 uppercase tracking-wider">Total Users</p>
//               <h2 className="text-2xl font-bold text-gray-800 mt-1">{totalUsers}</h2>
//             </div>
//             <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//               <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-5 rounded-lg border border-gray-200 ">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs text-gray-500 uppercase tracking-wider">Birthdays (This Month)</p>
//               <h2 className="text-2xl font-bold text-yellow-600 mt-1">{birthdays}</h2>
//             </div>
//             <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
//               <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-5 rounded-lg border border-gray-200 ">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs text-gray-500 uppercase tracking-wider">Anniversaries (This Month)</p>
//               <h2 className="text-2xl font-bold text-orange-600 mt-1">{anniversaries}</h2>
//             </div>
//             <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
//               <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
//               </svg>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* 🔹 Top Bar - Improved Design */}
//       <div className="bg-white mb-6">
//         <div className="flex justify-between items-center">
//           <button
//             onClick={handleRefresh}
//             className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//           >
//             <FiRefreshCw size={14} />
//             Refresh
//           </button>

//           <div className="relative">
//             <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search users..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="pl-9 pr-4 py-2 w-64 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-0 focus:ring-yellow-400 transition-all"
//             />
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Table - Only Body Scrolls */}
//       <div className="bg-white flex-1 overflow-hidden">

//         <div
//           className="h-[60vh] overflow-y-auto"
//           style={{
//             scrollbarWidth: "none",       // Firefox
//             msOverflowStyle: "none",      // IE
//           }}
//         >

//           <table className="w-full text-xs table-fixed">

//             {/* 🔹 HEADER */}
//             <thead className="sticky top-0 z-10">
//               <tr className="bg-gray-100 text-gray-600">
//                 <th className="border border-gray-300 px-3 py-3 w-[60px]">NO</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[200px]">NAME</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[220px]">EMAIL</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[140px]">PHONE</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[140px]">DOB</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[140px]">ANNIVERSARY</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[120px]">ACTION</th>
//               </tr>
//             </thead>

//             {/* 🔹 BODY */}
//             <tbody>
//               {filteredUsers.length === 0 ? (
//                 <tr>
//                   <td colSpan="7" className="text-center py-4 text-gray-500">
//                     No data found
//                   </td>
//                 </tr>
//               ) : (
//                 filteredUsers.map((user, index) => (
//                   <tr key={user.id} className="hover:bg-gray-50">
//                     {/* NO */}
//                     <td className="border border-gray-200 px-3 py-3 text-center">
//                       {index + 1}
//                     </td>

//                     {/* NAME */}
//                     <td
//                       title={user.name}
//                       className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
//                     >
//                       {user.name}
//                     </td>

//                     {/* EMAIL */}
//                     <td
//                       title={user.email}
//                       className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
//                     >
//                       {user.email}
//                     </td>

//                     {/* PHONE */}
//                     <td className="border border-gray-200 px-3 py-3 text-center">
//                       {user.phone || "-"}
//                     </td>

//                     {/* DOB */}
//                     <td className="border border-gray-200 px-3 py-3 text-center">
//                       {user.dob || "-"}
//                     </td>

//                     {/* ANNIVERSARY */}
//                     <td className="border border-gray-200 px-3 py-3 text-center">
//                       {user.anniversary || "-"}
//                     </td>

//                     {/* ACTION */}
//                     <td className="border border-gray-200 px-3 py-2 text-center">
//                       <div className="flex justify-center items-center gap-3">
//                         {/* View */}
//                         <button
//                           onClick={() => setSelectedUser(user)}
//                           className="text-blue-600 hover:text-blue-700"
//                           title="View"
//                         >
//                           <FiEye size={14} />
//                         </button>

//                         {/* Edit - Navigate to edit page */}
//                         <button
//                           onClick={() => handleEdit(user)}
//                           className="text-yellow-600 hover:text-yellow-700"
//                           title="Edit"
//                         >
//                           <FiEdit size={14} />
//                         </button>

//                         {/* Delete */}
//                         <button
//                           onClick={() => handleDelete(user.id)}
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

//       {/* 🔹 View Modal - Improved Design */}
//       {selectedUser && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg w-full max-w-md mx-4 shadow-xl">
//             <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4 rounded-t-lg">
//               <h3 className="text-lg font-semibold text-white">User Details</h3>
//             </div>
            
//             <div className="p-6 space-y-3">
//               <div className="flex py-2 border-b border-gray-100">
//                 <span className="w-28 text-sm font-semibold text-gray-600">Name:</span>
//                 <span className="flex-1 text-gray-800">{selectedUser.name}</span>
//               </div>
//               <div className="flex py-2 border-b border-gray-100">
//                 <span className="w-28 text-sm font-semibold text-gray-600">Email:</span>
//                 <span className="flex-1 text-gray-800">{selectedUser.email}</span>
//               </div>
//               <div className="flex py-2 border-b border-gray-100">
//                 <span className="w-28 text-sm font-semibold text-gray-600">Phone:</span>
//                 <span className="flex-1 text-gray-800">{selectedUser.phone}</span>
//               </div>
//               <div className="flex py-2 border-b border-gray-100">
//                 <span className="w-28 text-sm font-semibold text-gray-600">DOB:</span>
//                 <span className="flex-1 text-gray-800">{selectedUser.dob}</span>
//               </div>
//               <div className="flex py-2 border-b border-gray-100">
//                 <span className="w-28 text-sm font-semibold text-gray-600">Anniversary:</span>
//                 <span className="flex-1 text-gray-800">{selectedUser.anniversary || "-"}</span>
//               </div>
//               <div className="flex py-2 border-b border-gray-100">
//                 <span className="w-28 text-sm font-semibold text-gray-600">Gender:</span>
//                 <span className="flex-1 text-gray-800">{selectedUser.gender}</span>
//               </div>
//               <div className="flex py-2">
//                 <span className="w-28 text-sm font-semibold text-gray-600">Address:</span>
//                 <span className="flex-1 text-gray-800">{selectedUser.address}</span>
//               </div>
//             </div>

//             <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end">
//               <button
//                 onClick={() => setSelectedUser(null)}
//                 className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-lg transition-colors"
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

// import { useState, useEffect } from "react"; // Add useEffect
// import { FiEye, FiEdit, FiTrash2, FiRefreshCw } from "react-icons/fi";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// export default function Users() {
//   const navigate = useNavigate();

//   const [users, setUsers] = useState([]); // Start with empty array
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [search, setSearch] = useState("");

//   // 🔥 Initialize localStorage with static data on first load
//   useEffect(() => {
//     const storedUsers = localStorage.getItem("users");
    
//     if (!storedUsers) {
//       // If no data in localStorage, save the static data
//       const staticUsers = [
//         {
//           id: 1,
//           name: "John Samuelmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmhhghg",
//           email: "john@gmail.com",
//           phone: "9876543210",
//           dob: "1998-05-12",
//           anniversary: "",
//           gender: "Male",
//           address: "karamana trivandrum",
//         },
//         {
//           id: 2,
//           name: "John Samuel",
//           email: "john@gmail.com",
//           phone: "9876543210",
//           dob: "2026-04-12",
//           anniversary: "",
//           gender: "Male",
//           address: "Chennai",
//         },
//         {
//           id: 3,
//           name: "John Samuel",
//           email: "john@gmail.com",
//           phone: "9876543210",
//           dob: "1998-05-12",
//           anniversary: "",
//           gender: "Male",
//           address: "Chennai",
//         },
//         {
//           id: 4,
//           name: "John Samuel",
//           email: "john@gmail.com",
//           phone: "9876543210",
//           dob: "1998-05-12",
//           anniversary: "2026-04-29",
//           gender: "Male",
//           address: "Chennai",
//         },
//         {
//           id: 5,
//           name: "John Samuel",
//           email: "john@gmail.com",
//           phone: "9876543210",
//           dob: "1998-05-12",
//           anniversary: "2026-04-29",
//           gender: "Male",
//           address: "Chennai",
//         },
//         {
//           id: 6,
//           name: "John Samuel",
//           email: "john@gmail.com",
//           phone: "9876543210",
//           dob: "1998-05-12",
//           anniversary: "2026-04-29",
//           gender: "Male",
//           address: "Chennai",
//         },
//         {
//           id: 7,
//           name: "John Samuel",
//           email: "john@gmail.com",
//           phone: "9876543210",
//           dob: "1998-05-14",
//           anniversary: "",
//           gender: "Male",
//           address: "Chennai",
//         },
//         {
//           id: 8,
//           name: "John Samuel",
//           email: "john@gmail.com",
//           phone: "9876543210",
//           dob: "1998-05-12",
//           anniversary: "2026-04-15",
//           gender: "Male",
//           address: "Chennai",
//         },
//         {
//           id: 9,
//           name: "John Samuel",
//           email: "john@gmail.com",
//           phone: "9876543210",
//           dob: "1998-05-12",
//           anniversary: "",
//           gender: "Male",
//           address: "Chennai",
//         },
//         {
//           id: 10,
//           name: "John Samuel",
//           email: "john@gmail.com",
//           phone: "9876543210",
//           dob: "1998-05-12",
//           anniversary: "",
//           gender: "Male",
//           address: "Chennai",
//         },
//         {
//           id: 11,
//           name: "John Samuel",
//           email: "john@gmail.com",
//           phone: "9876543210",
//           dob: "1998-05-12",
//           anniversary: "",
//           gender: "Male",
//           address: "Chennai",
//         },
//         {
//           id: 12,
//           name: "John Samuel",
//           email: "john@gmail.com",
//           phone: "9876543210",
//           dob: "1998-05-12",
//           anniversary: "",
//           gender: "Male",
//           address: "Chennai",
//         },
//         {
//           id: 13,
//           name: "John Samuel",
//           email: "john@gmail.com",
//           phone: "9876543210",
//           dob: "1998-05-12",
//           anniversary: "",
//           gender: "Male",
//           address: "Chennai",
//         },
//         {
//           id: 14,
//           name: "John Samuel",
//           email: "john@gmail.com",
//           phone: "9876543210",
//           dob: "1998-05-12",
//           anniversary: "",
//           gender: "Male",
//           address: "Chennai",
//         },
//         {
//           id: 15,
//           name: "John Samuel",
//           email: "john@gmail.com",
//           phone: "9876543210",
//           dob: "1998-05-12",
//           anniversary: "",
//           gender: "Male",
//           address: "Chennai",
//         },
//         {
//           id: 16,
//           name: "John Samuel",
//           email: "john@gmail.com",
//           phone: "9876543210",
//           dob: "1998-05-12",
//           anniversary: "",
//           gender: "Male",
//           address: "Chennai",
//         },
//       ];
      
//       localStorage.setItem("users", JSON.stringify(staticUsers));
//       setUsers(staticUsers);
//     } else {
//       // Load from localStorage
//       setUsers(JSON.parse(storedUsers));
//     }
//   }, []);

//   // 🔄 Refresh - reload from localStorage
//   const handleRefresh = () => {
//     const storedUsers = localStorage.getItem("users");
//     if (storedUsers) {
//       setUsers(JSON.parse(storedUsers));
//       toast.info("Data refreshed");
//     }
//   };

//   // 🗑 Delete
//   const handleDelete = (id) => {
//     const updated = users.filter((u) => u.id !== id);
//     setUsers(updated);
//     localStorage.setItem("users", JSON.stringify(updated));
//     toast.error("User deleted successfully");
//   };

//   // ✏ Edit - Navigate to edit page
//   const handleEdit = (user) => {
//     navigate(`/admin/users/edit/${user.id}`);
//   };

//   // 🔍 Filter
//   const filteredUsers = users.filter((u) =>
//     u.name.toLowerCase().includes(search.toLowerCase())
//   );

//   // 📊 Stats
//   const totalUsers = users.length;

//   const currentMonth = new Date().getMonth();

//   const birthdays = users.filter(
//     (u) => u.dob && new Date(u.dob).getMonth() === currentMonth
//   ).length;

//   const anniversaries = users.filter(
//     (u) =>
//       u.anniversary &&
//       u.anniversary !== "" &&
//       new Date(u.anniversary).getMonth() === currentMonth
//   ).length;

//   return (
//     <div className="h-full flex flex-col">

//       {/* 🔔 Toast */}
//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />

//       {/* 🔹 Top Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">

//         <div className="bg-white p-5 rounded-lg border border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs text-gray-500 uppercase tracking-wider">Total Users</p>
//               <h2 className="text-2xl font-bold text-gray-800 mt-1">{totalUsers}</h2>
//             </div>
//             <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//               <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-5 rounded-lg border border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs text-gray-500 uppercase tracking-wider">Birthdays (This Month)</p>
//               <h2 className="text-2xl font-bold text-yellow-600 mt-1">{birthdays}</h2>
//             </div>
//             <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
//               <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-5 rounded-lg border border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs text-gray-500 uppercase tracking-wider">Anniversaries (This Month)</p>
//               <h2 className="text-2xl font-bold text-orange-600 mt-1">{anniversaries}</h2>
//             </div>
//             <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
//               <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
//               </svg>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* 🔹 Top Bar */}
//       <div className="bg-white mb-6">
//         <div className="flex justify-between items-center">
//           <button
//             onClick={handleRefresh}
//             className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//           >
//             <FiRefreshCw size={14} />
//             Refresh
//           </button>

//           <div className="relative">
//             <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search users..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="pl-9 pr-4 py-2 w-64 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-0 transition-all"
//             />
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Table */}
//       <div className="bg-white flex-1 overflow-hidden">
//         <div
//           className="h-[60vh] overflow-y-auto"
//           style={{
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//         >
//           <table className="w-full text-xs table-fixed">
//             <thead className="sticky top-0 z-10">
//               <tr className="bg-yellow-500 text-white">
//                 <th className="border border-gray-300 px-3 py-3 w-[60px]">NO</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[200px]">NAME</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[220px]">EMAIL</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[140px]">PHONE</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[140px]">DOB</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[140px]">ANNIVERSARY</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[120px]">ACTION</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredUsers.length === 0 ? (
//                 <tr>
//                   <td colSpan="7" className="text-center py-4 text-gray-500">
//                     No data found
//                    </td>
//                  </tr>
//               ) : (
//                 filteredUsers.map((user, index) => (
//                   <tr key={user.id} className="hover:bg-gray-50">
//                     <td className="border border-gray-200 px-3 py-3 text-center">
//                       {index + 1}
//                     </td>
//                     <td
//                       title={user.name}
//                       className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
//                     >
//                       {user.name}
//                     </td>
//                     <td
//                       title={user.email}
//                       className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
//                     >
//                       {user.email}
//                     </td>
//                     <td className="border border-gray-200 px-3 py-3 text-center">
//                       {user.phone || "-"}
//                     </td>
//                     <td className="border border-gray-200 px-3 py-3 text-center">
//                       {user.dob || "-"}
//                     </td>
//                     <td className="border border-gray-200 px-3 py-3 text-center">
//                       {user.anniversary || "-"}
//                     </td>
//                     <td className="border border-gray-200 px-3 py-2 text-center">
//                       <div className="flex justify-center items-center gap-3">
//                         <button
//                           onClick={() => setSelectedUser(user)}
//                           className="text-blue-600 hover:text-blue-700"
//                           title="View"
//                         >
//                           <FiEye size={14} />
//                         </button>
//                         <button
//                           onClick={() => handleEdit(user)}
//                           className="text-yellow-600 hover:text-yellow-700"
//                           title="Edit"
//                         >
//                           <FiEdit size={14} />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(user.id)}
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

//       {/* 🔹 View Modal */}
//       {selectedUser && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg w-full max-w-md mx-4 shadow-xl">
//             <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4 rounded-t-lg">
//               <h3 className="text-lg font-semibold text-white">User Details</h3>
//             </div>
            
//             <div className="p-6 space-y-3">
//               <div className="flex py-2 border-b border-gray-100">
//                 <span className="w-28 text-sm font-semibold text-gray-600">Name:</span>
//                 <span className="flex-1 text-gray-800">{selectedUser.name}</span>
//               </div>
//               <div className="flex py-2 border-b border-gray-100">
//                 <span className="w-28 text-sm font-semibold text-gray-600">Email:</span>
//                 <span className="flex-1 text-gray-800">{selectedUser.email}</span>
//               </div>
//               <div className="flex py-2 border-b border-gray-100">
//                 <span className="w-28 text-sm font-semibold text-gray-600">Phone:</span>
//                 <span className="flex-1 text-gray-800">{selectedUser.phone}</span>
//               </div>
//               <div className="flex py-2 border-b border-gray-100">
//                 <span className="w-28 text-sm font-semibold text-gray-600">DOB:</span>
//                 <span className="flex-1 text-gray-800">{selectedUser.dob}</span>
//               </div>
//               <div className="flex py-2 border-b border-gray-100">
//                 <span className="w-28 text-sm font-semibold text-gray-600">Anniversary:</span>
//                 <span className="flex-1 text-gray-800">{selectedUser.anniversary || "-"}</span>
//               </div>
//               <div className="flex py-2 border-b border-gray-100">
//                 <span className="w-28 text-sm font-semibold text-gray-600">Gender:</span>
//                 <span className="flex-1 text-gray-800">{selectedUser.gender}</span>
//               </div>
//               <div className="flex py-2">
//                 <span className="w-28 text-sm font-semibold text-gray-600">Address:</span>
//                 <span className="flex-1 text-gray-800">{selectedUser.address}</span>
//               </div>
//             </div>

//             <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end">
//               <button
//                 onClick={() => setSelectedUser(null)}
//                 className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-lg transition-colors"
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
import { FiEye, FiEdit, FiTrash2, FiRefreshCw } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserEditModal from "../Users/UsersEdit"

export default function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  
  // Modal states for edit
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // 🔥 Initialize localStorage with static data on first load
 useEffect(() => {
  const staticUsers = [
    {
      id: 1,
      name: "John Samuel",
      email: "john@gmail.com",
      phone: "9876543210",
      dob: "1998-05-12",
      anniversary: "",
      gender: "Male",
      address: "Trivandrum",
    },
    {
      id: 2,
      name: "Annie",
      email: "annie@gmail.com",
      phone: "9999999999",
      dob: "2000-01-01",
      anniversary: "",
      gender: "Female",
      address: "Kochi",
    }
  ];

  setUsers(staticUsers);
}, []);
  // 🔄 Refresh - reload from localStorage
  const handleRefresh = () => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
      toast.info("Data refreshed");
    }
  };

  // 🗑 Delete
  const handleDelete = (id) => {
    const updated = users.filter((u) => u.id !== id);
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
    toast.error("User deleted successfully");
  };

  // ✏ Open Edit Modal
  const handleEditClick = (user) => {
    setEditingUser(user);
    setIsEditModalOpen(true);
  };

  // 💾 Save Edit from Modal
  const handleSaveEdit = (updatedUser) => {
    const updated = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
    toast.success("User updated successfully");
    setIsEditModalOpen(false);
    setEditingUser(null);
  };

  // Close modal
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditingUser(null);
  };

  // 🔍 Filter
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  // 📊 Stats
  const totalUsers = users.length;
  const currentMonth = new Date().getMonth();
  const birthdays = users.filter(
    (u) => u.dob && new Date(u.dob).getMonth() === currentMonth
  ).length;
  const anniversaries = users.filter(
    (u) =>
      u.anniversary &&
      u.anniversary !== "" &&
      new Date(u.anniversary).getMonth() === currentMonth
  ).length;

  return (
    <div className="h-full flex flex-col">

      {/* 🔔 Toast */}
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      {/* 🔹 Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <div className="bg-white p-5 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Total Users</p>
              <h2 className="text-2xl font-bold text-gray-800 mt-1">{totalUsers}</h2>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Birthdays (This Month)</p>
              <h2 className="text-2xl font-bold text-yellow-600 mt-1">{birthdays}</h2>
            </div>
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Anniversaries (This Month)</p>
              <h2 className="text-2xl font-bold text-orange-600 mt-1">{anniversaries}</h2>
            </div>
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Top Bar */}
      <div className="bg-white mb-6">
        <div className="flex justify-between items-center">
          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <FiRefreshCw size={14} />
            Refresh
          </button>

          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 w-64 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-0 transition-all"
            />
          </div>
        </div>
      </div>

      {/* 🔹 Table */}
      <div className="bg-white flex-1 overflow-hidden">
        <div
          className="h-[60vh] overflow-y-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <table className="w-full text-xs table-fixed">
            <thead className="sticky top-0 z-10">
              <tr className="bg-yellow-500 text-white">
                <th className="border border-gray-300 px-3 py-3 w-[60px]">NO</th>
                <th className="border border-gray-300 px-3 py-3 w-[200px]">NAME</th>
                <th className="border border-gray-300 px-3 py-3 w-[220px]">EMAIL</th>
                <th className="border border-gray-300 px-3 py-3 w-[140px]">PHONE</th>
                <th className="border border-gray-300 px-3 py-3 w-[140px]">DOB</th>
                <th className="border border-gray-300 px-3 py-3 w-[140px]">ANNIVERSARY</th>
                <th className="border border-gray-300 px-3 py-3 w-[120px]">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-500">
                    No data found
                   </td>
                 </tr>
              ) : (
                filteredUsers.map((user, index) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-3 py-3 text-center">
                      {index + 1}
                    </td>
                    <td
                      title={user.name}
                      className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
                    >
                      {user.name}
                    </td>
                    <td
                      title={user.email}
                      className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
                    >
                      {user.email}
                    </td>
                    <td className="border border-gray-200 px-3 py-3 text-center">
                      {user.phone || "-"}
                    </td>
                    <td className="border border-gray-200 px-3 py-3 text-center">
                      {user.dob || "-"}
                    </td>
                    <td className="border border-gray-200 px-3 py-3 text-center">
                      {user.anniversary || "-"}
                    </td>
                    <td className="border border-gray-200 px-3 py-2 text-center">
                      <div className="flex justify-center items-center gap-3">
                        <button
                          onClick={() => setSelectedUser(user)}
                          className="text-blue-600 hover:text-blue-700"
                          title="View"
                        >
                          <FiEye size={14} />
                        </button>
                        <button
                          onClick={() => handleEditClick(user)}
                          className="text-yellow-600 hover:text-yellow-700"
                          title="Edit"
                        >
                          <FiEdit size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
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

      {/* 🔹 View Modal */}
      {/* {selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md mx-4 shadow-xl">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4 rounded-t-lg">
              <h3 className="text-lg font-semibold text-white">User Details</h3>
            </div>
            
            <div className="p-6 space-y-3">
              <div className="flex py-2 border-b border-gray-100">
                <span className="w-28 text-sm font-semibold text-gray-600">Name:</span>
                <span className="flex-1 text-gray-800">{selectedUser.name}</span>
              </div>
              <div className="flex py-2 border-b border-gray-100">
                <span className="w-28 text-sm font-semibold text-gray-600">Email:</span>
                <span className="flex-1 text-gray-800">{selectedUser.email}</span>
              </div>
              <div className="flex py-2 border-b border-gray-100">
                <span className="w-28 text-sm font-semibold text-gray-600">Phone:</span>
                <span className="flex-1 text-gray-800">{selectedUser.phone}</span>
              </div>
              <div className="flex py-2 border-b border-gray-100">
                <span className="w-28 text-sm font-semibold text-gray-600">DOB:</span>
                <span className="flex-1 text-gray-800">{selectedUser.dob}</span>
              </div>
              <div className="flex py-2 border-b border-gray-100">
                <span className="w-28 text-sm font-semibold text-gray-600">Anniversary:</span>
                <span className="flex-1 text-gray-800">{selectedUser.anniversary || "-"}</span>
              </div>
              <div className="flex py-2 border-b border-gray-100">
                <span className="w-28 text-sm font-semibold text-gray-600">Gender:</span>
                <span className="flex-1 text-gray-800">{selectedUser.gender}</span>
              </div>
              <div className="flex py-2">
                <span className="w-28 text-sm font-semibold text-gray-600">Address:</span>
                <span className="flex-1 text-gray-800">{selectedUser.address}</span>
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end">
              <button
                onClick={() => setSelectedUser(null)}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )} */}
      {selectedUser && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg w-full max-w-md mx-auto shadow-xl">
      
      {/* Modal Header */}
      <div className="bg-yellow-500 px-5 py-3 rounded-t-lg">
        <h3 className="text-md font-semibold text-white">User Details</h3>
      </div>
      
      {/* Modal Body */}
      <div className="p-5">
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-gray-100">
            <span className="text-xs font-semibold text-gray-600">Name:</span>
            <span className="col-span-2 text-xs text-gray-800 break-words">{selectedUser.name}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-gray-100">
            <span className="text-xs font-semibold text-gray-600">Email:</span>
            <span className="col-span-2 text-xs text-gray-800 break-words">{selectedUser.email}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-gray-100">
            <span className="text-xs font-semibold text-gray-600">Phone:</span>
            <span className="col-span-2 text-xs text-gray-800 break-words">{selectedUser.phone || "-"}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-gray-100">
            <span className="text-xs font-semibold text-gray-600">DOB:</span>
            <span className="col-span-2 text-xs text-gray-800 break-words">{selectedUser.dob || "-"}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-gray-100">
            <span className="text-xs font-semibold text-gray-600">Anniversary:</span>
            <span className="col-span-2 text-xs text-gray-800 break-words">{selectedUser.anniversary || "-"}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-gray-100">
            <span className="text-xs font-semibold text-gray-600">Gender:</span>
            <span className="col-span-2 text-xs text-gray-800 break-words">{selectedUser.gender}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 py-1.5">
            <span className="text-xs font-semibold text-gray-600">Address:</span>
            <span className="col-span-2 text-xs text-gray-800 break-words whitespace-pre-wrap">{selectedUser.address || "-"}</span>
          </div>
        </div>
      </div>

      {/* Modal Footer */}
      <div className="px-5 py-3 bg-gray-50 rounded-b-lg flex justify-end">
        <button
          onClick={() => setSelectedUser(null)}
          className="px-4 py-1.5 bg-gray-800 hover:bg-gray-900 text-white text-xs rounded-md transition-colors"
        >
          Close
        </button>
      </div>
      
    </div>
  </div>
)}

      {/* 🔹 Edit Modal Component */}
      <UserEditModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        onSave={handleSaveEdit}
        data={editingUser}
      />

    </div>
  );
}