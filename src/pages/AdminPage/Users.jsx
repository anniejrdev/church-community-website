// import { useState } from "react";
// import { FiEye, FiEdit, FiTrash } from "react-icons/fi";

// export default function Users() {
//   const [selectedUser, setSelectedUser] = useState(null);

//   // Dummy data (replace with Firebase later)
//   const users = [
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "12-05-1998",
//       anniversary: "",
//     },
//     {
//       id: 2,
//       name: "Mary Joseph",
//       email: "mary@gmail.com",
//       phone: "",
//       dob: "",
//       anniversary: "",
//     },
//   ];

//   return (
//     <div className="bg-white rounded-lg p-4">

//       {/* 🔹 Header */}
//       {/* <div className="flex items-center justify-between mb-4">
//         <h2 className="text-sm font-semibold text-gray-800">
//           Users
//         </h2>

//         <input
//           type="text"
//           placeholder="Search user..."
//           className="border px-2 py-1 text-xs rounded outline-none"
//         />
//       </div> */}

//       {/* 🔹 Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">

//           {/* Head */}
//           <thead>
//             <tr className="text-left text-gray-500 border-b">
//               <th className="py-2">Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>DOB</th>
//               <th>Anniversary</th>
//               {/* <th>Status</th> */}
//               <th className="text-right">Actions</th>
//             </tr>
//           </thead>

//           {/* Body */}
//           <tbody>
//             {users.map((user) => {
//               const isComplete =
//                 user.phone && user.dob;

//               return (
//                 <tr
//                   key={user.id}
//                   className="border-b hover:bg-gray-50 transition"
//                 >
//                   <td className="py-2 font-medium text-gray-800">
//                     {user.name}
//                   </td>

//                   <td className="text-gray-600">
//                     {user.email}
//                   </td>

//                   <td>
//                     {user.phone || "-"}
//                   </td>

//                   <td>
//                     {user.dob || "-"}
//                   </td>

//                   <td>
//                     {user.anniversary || "-"}
//                   </td>

//                   {/* Status */}
//                   {/* <td>
//                     <span
//                       className={`text-xs px-2 py-0.5 rounded ${
//                         isComplete
//                           ? "bg-green-100 text-green-700"
//                           : "bg-yellow-100 text-yellow-700"
//                       }`}
//                     >
//                       {isComplete ? "Complete" : "Incomplete"}
//                     </span>
//                   </td> */}

//                   {/* Actions */}
//                   <td className="text-right">
//                     <div className="flex justify-end gap-2">

//                       {/* View */}
//                       <button
//                         onClick={() => setSelectedUser(user)}
//                         className="p-1 hover:bg-gray-100 rounded"
//                       >
//                         <FiEye size={14} />
//                       </button>

//                       {/* Edit */}
//                       <button className="p-1 hover:bg-gray-100 rounded">
//                         <FiEdit size={14} />
//                       </button>

//                       {/* Delete */}
//                       <button className="p-1 hover:bg-red-100 text-red-600 rounded">
//                         <FiTrash size={14} />
//                       </button>

//                     </div>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>

//         </table>
//       </div>

//       {/* 🔹 View Modal */}
//       {selectedUser && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

//           <div className="bg-white w-80 p-4 rounded">

//             <h3 className="text-sm font-semibold mb-3">
//               User Details
//             </h3>

//             <p><b>Name:</b> {selectedUser.name}</p>
//             <p><b>Email:</b> {selectedUser.email}</p>
//             <p><b>Phone:</b> {selectedUser.phone || "-"}</p>
//             <p><b>DOB:</b> {selectedUser.dob || "-"}</p>

//             <button
//               onClick={() => setSelectedUser(null)}
//               className="mt-3 px-3 py-1 bg-gray-800 text-white text-xs rounded"
//             >
//               Close
//             </button>

//           </div>

//         </div>
//       )}

//     </div>
//   );
// }

// import { useState } from "react";
// import { FiEye, FiEdit, FiTrash, FiRefreshCw, FiSave } from "react-icons/fi";

// export default function Users() {
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//   ]);

//   const [editId, setEditId] = useState(null);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [search, setSearch] = useState("");

//   // 🔄 Refresh (dummy)
//   const handleRefresh = () => {
//     console.log("fetch from firebase later");
//   };

//   // ✏ Edit change
//   const handleChange = (id, field, value) => {
//     setUsers((prev) =>
//       prev.map((u) =>
//         u.id === id ? { ...u, [field]: value } : u
//       )
//     );
//   };

//   // 💾 Save
//   const handleSave = () => {
//     console.log("save to firebase", users);
//     setEditId(null);
//   };

//   // 🔍 Filter
//   const filteredUsers = users.filter((u) =>
//     u.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
    
//     <div className="bg-white rounded-lg border">

//   {/* 🔹 Header Top */}
//   <div className="flex items-center justify-between p-3 border-b">

//     <div className="flex gap-2">
//       <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
//         + Add
//       </button>

//       <button className="bg-green-600 text-white text-xs px-3 py-1 rounded">
//         Save
//       </button>
//     </div>

//     <div className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="border px-3 py-1 text-xs rounded outline-none"
//       />
//     </div>

//   </div>

//   {/* 🔹 Table */}
//   <table className="w-full text-xs border-collapse">

//     {/* Header */}
//     <thead>
//       <tr className="bg-gray-100 text-gray-600">

//         <th className="border px-3 py-2 text-center">NO</th>
//         <th className="border px-3 py-2 text-left">NAME</th>
//         <th className="border px-3 py-2 text-left">EMAIL</th>
//         <th className="border px-3 py-2 text-center">PHONE</th>
//         <th className="border px-3 py-2 text-center">DOB</th>
//         <th className="border px-3 py-2 text-center">ANNIVERSARY</th>
//         <th className="border px-3 py-2 text-center">ACTION</th>

//       </tr>
//     </thead>

//     {/* Body */}
//     <tbody>
//       {users.map((user, index) => {
//         const isEditing = editId === user.id;

//         return (
//           <tr key={user.id} className="text-gray-700">

//             {/* No */}
//             <td className="border px-3 py-2 text-center">
//               {index + 1}
//             </td>

//             {/* Name */}
//             <td className="border px-3 py-2">
//               {isEditing ? (
//                 <input
//                   value={user.name}
//                   onChange={(e) =>
//                     handleChange(user.id, "name", e.target.value)
//                   }
//                   className="w-full border px-2 py-1 text-xs"
//                 />
//               ) : (
//                 user.name
//               )}
//             </td>

//             {/* Email */}
//             <td className="border px-3 py-2">
//               {user.email}
//             </td>

//             {/* Phone */}
//             <td className="border px-3 py-2 text-center">
//               {isEditing ? (
//                 <input
//                   value={user.phone}
//                   onChange={(e) =>
//                     handleChange(user.id, "phone", e.target.value)
//                   }
//                   className="w-full border px-2 py-1 text-xs"
//                 />
//               ) : (
//                 user.phone || "-"
//               )}
//             </td>

//             {/* DOB */}
//             <td className="border px-3 py-2 text-center">
//               {isEditing ? (
//                 <input
//                   type="date"
//                   value={user.dob}
//                   onChange={(e) =>
//                     handleChange(user.id, "dob", e.target.value)
//                   }
//                   className="border px-2 py-1 text-xs"
//                 />
//               ) : (
//                 user.dob || "-"
//               )}
//             </td>

//             {/* Anniversary */}
//             <td className="border px-3 py-2 text-center">
//               {isEditing ? (
//                 <input
//                   type="date"
//                   value={user.anniversary}
//                   onChange={(e) =>
//                     handleChange(user.id, "anniversary", e.target.value)
//                   }
//                   className="border px-2 py-1 text-xs"
//                 />
//               ) : (
//                 user.anniversary || "-"
//               )}
//             </td>

//             {/* Actions */}
//             <td className="border px-3 py-2 text-center">
//               <div className="flex justify-center gap-2">

//                 {/* View */}
//                 <button onClick={() => setSelectedUser(user)}>
//                   <FiEye size={14} />
//                 </button>

//                 {/* Edit / Save */}
//                 <button
//                   onClick={() =>
//                     isEditing ? handleSave() : setEditId(user.id)
//                   }
//                 >
//                   {isEditing ? <FiSave size={14} /> : <FiEdit size={14} />}
//                 </button>

//                 {/* Delete */}
//                 <button className="text-red-500">
//                   <FiTrash size={14} />
//                 </button>

//               </div>
//             </td>

//           </tr>
//         );
//       })}
//     </tbody>

//   </table>

//   {/* 🔹 Footer (optional like your UI) */}
//   <div className="flex justify-end p-3 border-t text-xs font-medium">
//     Total Users: {users.length}
//   </div>

// </div>
//   );
// }

// import { useState } from "react";
// import { FiEye, FiEdit, FiTrash, FiRefreshCw } from "react-icons/fi";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Users() {
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//   ]);

//   const [editId, setEditId] = useState(null);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [search, setSearch] = useState("");

//   // 🔄 Refresh
//   const handleRefresh = () => {
//     window.location.reload();
//   };

//   // ✏ Change
//   const handleChange = (id, field, value) => {
//     setUsers((prev) =>
//       prev.map((u) => (u.id === id ? { ...u, [field]: value } : u))
//     );
//   };

//   // 💾 Save
//   const handleSave = () => {
//     setEditId(null);
//     toast.success("User updated successfully");
//   };

//   // 🗑 Delete
//   const handleDelete = (id) => {
//     setUsers((prev) => prev.filter((u) => u.id !== id));
//     toast.success("User deleted");
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
//     <div className="p-4">

//       {/* 🔔 Toast */}
//       <ToastContainer position="top-right" autoClose={2000} />

//       {/* 🔹 Top Cards */}
//       <div className="grid grid-cols-3 gap-4 mb-4">

//         <div className="bg-white p-3 rounded border text-center">
//           <p className="text-xs text-gray-500">Total Users</p>
//           <h2 className="text-lg font-semibold">{totalUsers}</h2>
//         </div>

//         <div className="bg-white p-3 rounded border text-center">
//           <p className="text-xs text-gray-500">Birthdays (This Month)</p>
//           <h2 className="text-lg font-semibold">{birthdays}</h2>
//         </div>

//         <div className="bg-white p-3 rounded border text-center">
//           <p className="text-xs text-gray-500">Anniversaries (This Month)</p>
//           <h2 className="text-lg font-semibold">{anniversaries}</h2>
//         </div>

//       </div>

//       {/* 🔹 Top Bar */}
//       <div className="flex justify-between items-center mb-3">

//         <button
//           onClick={handleRefresh}
//           className="flex items-center gap-1 text-xs px-3 py-1 border rounded"
//         >
//           <FiRefreshCw size={13} />
//           Refresh
//         </button>

//         <input
//           type="text"
//           placeholder="Search..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border px-3 py-1 text-xs rounded outline-none"
//         />
//       </div>

//       {/* 🔹 Table */}
//       <div className="bg-white border rounded">

//         <table className="w-full text-xs">
//           <thead>
//             <tr className="bg-gray-100 text-gray-600">
//               <th className="border px-3 py-2">NO</th>
//               <th className="border px-3 py-2 text-left">NAME</th>
//               <th className="border px-3 py-2 text-left">EMAIL</th>
//               <th className="border px-3 py-2">PHONE</th>
//               <th className="border px-3 py-2">DOB</th>
//               <th className="border px-3 py-2">ANNIVERSARY</th>
//               <th className="border px-3 py-2">ACTION</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredUsers.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center py-4 text-gray-500">
//                   No data found
//                 </td>
//               </tr>
//             ) : (
//               filteredUsers.map((user, index) => {
//                 const isEditing = editId === user.id;

//                 return (
//                   <tr key={user.id}>
//                     <td className="border px-3 py-2 text-center">
//                       {index + 1}
//                     </td>

//                     <td className="border px-3 py-2">
//                       {isEditing ? (
//                         <input
//                           value={user.name}
//                           onChange={(e) =>
//                             handleChange(user.id, "name", e.target.value)
//                           }
//                           className="w-full border px-1"
//                         />
//                       ) : (
//                         user.name
//                       )}
//                     </td>

//                     <td className="border px-3 py-2">{user.email}</td>

//                     <td className="border px-3 py-2 text-center">
//                       {isEditing ? (
//                         <input
//                           value={user.phone}
//                           onChange={(e) =>
//                             handleChange(user.id, "phone", e.target.value)
//                           }
//                           className="border px-1"
//                         />
//                       ) : (
//                         user.phone || "-"
//                       )}
//                     </td>

//                     <td className="border px-3 py-2 text-center">
//                       {isEditing ? (
//                         <input
//                           type="date"
//                           value={user.dob}
//                           onChange={(e) =>
//                             handleChange(user.id, "dob", e.target.value)
//                           }
//                         />
//                       ) : (
//                         user.dob || "-"
//                       )}
//                     </td>

//                     <td className="border px-3 py-2 text-center">
//                       {isEditing ? (
//                         <input
//                           type="date"
//                           value={user.anniversary}
//                           onChange={(e) =>
//                             handleChange(user.id, "anniversary", e.target.value)
//                           }
//                         />
//                       ) : (
//                         user.anniversary || "-"
//                       )}
//                     </td>

//                     {/* Actions */}
//                     <td className="border px-3 py-2 text-center">
//                       <div className="flex justify-center gap-2">

//                         <button onClick={() => setSelectedUser(user)}>
//                           <FiEye />
//                         </button>

//                         {isEditing ? (
//                           <button
//                             onClick={handleSave}
//                             className="text-xs bg-green-600 text-white px-2 py-0.5 rounded"
//                           >
//                             Save
//                           </button>
//                         ) : (
//                           <button onClick={() => setEditId(user.id)}>
//                             <FiEdit />
//                           </button>
//                         )}

//                         <button
//                           onClick={() => handleDelete(user.id)}
//                           className="text-red-500"
//                         >
//                           <FiTrash />
//                         </button>

//                       </div>
//                     </td>

//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>

//       </div>

//       {/* 🔹 View Modal */}
//       {selectedUser && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

//           <div className="bg-white w-80 p-4 rounded">

//             <h3 className="text-sm font-semibold mb-3">User Details</h3>

//             <p><b>Name:</b> {selectedUser.name}</p>
//             <p><b>Email:</b> {selectedUser.email}</p>
//             <p><b>Phone:</b> {selectedUser.phone}</p>
//             <p><b>DOB:</b> {selectedUser.dob}</p>
//             <p><b>Anniversary:</b> {selectedUser.anniversary || "-"}</p>
//             <p><b>Gender:</b> {selectedUser.gender}</p>
//             <p><b>Address:</b> {selectedUser.address}</p>

//             <button
//               onClick={() => setSelectedUser(null)}
//               className="mt-3 px-3 py-1 bg-gray-800 text-white text-xs rounded"
//             >
//               Close
//             </button>

//           </div>

//         </div>
//       )}

//     </div>
//   );
// }

// import { useState } from "react";
// import { FiEye, FiEdit, FiTrash, FiRefreshCw } from "react-icons/fi";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Users() {
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//     {
//       id: 1,
//       name: "John Samuel",
//       email: "john@gmail.com",
//       phone: "9876543210",
//       dob: "1998-05-12",
//       anniversary: "",
//       gender: "Male",
//       address: "Chennai",
//     },
//   ]);

//   const [editId, setEditId] = useState(null);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [search, setSearch] = useState("");

//   // 🔄 Refresh
//   const handleRefresh = () => {
//     window.location.reload();
//   };

//   // ✏ Change
//   const handleChange = (id, field, value) => {
//     setUsers((prev) =>
//       prev.map((u) => (u.id === id ? { ...u, [field]: value } : u))
//     );
//   };

//   // 💾 Save
//   const handleSave = () => {
//     setEditId(null);
//     toast.success("User updated successfully");
//   };

//   // 🗑 Delete
//   const handleDelete = (id) => {
//     setUsers((prev) => prev.filter((u) => u.id !== id));
//     toast.success("User deleted");
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

//       {/* Header Title */}
//       {/* <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Users Management</h1>
//         <p className="text-sm text-gray-500 mt-1">Manage and view all registered users</p>
//       </div> */}

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
//       <div className="bg-white  mb-6">
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

//       {/* 🔹 Table - UNCHANGED */}
//       <div className="bg-white h-full overflow-y-auto">

//         <table className="w-full text-xs">
//           <thead>
//             <tr className="bg-gray-100 text-gray-600">
//               <th className="border border-gray-300 px-3 py-3">NO</th>
//               <th className="border  border-gray-300 px-3 py-3 ">NAME</th>
//               <th className="border  border-gray-300 px-3 py-3 ">EMAIL</th>
//               <th className="border  border-gray-300 px-3 py-3">PHONE</th>
//               <th className="border  border-gray-300 px-3 py-3">DOB</th>
//               <th className="border  border-gray-300 px-3 py-3">ANNIVERSARY</th>
//               <th className="border  border-gray-300 px-3 py-3">ACTION</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredUsers.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center py-4 text-gray-500">
//                   No data found
//                 </td>
//               </tr>
//             ) : (
//               filteredUsers.map((user, index) => {
//                 const isEditing = editId === user.id;

//                 return (
//                   <tr key={user.id}>
//                     <td className="border  border-gray-300 px-3 py-3 text-center">
//                       {index + 1}
//                     </td>

//                     <td className="border  border-gray-300 px-3 py-3 text-center">
//                       {isEditing ? (
//                         <input
//                           value={user.name}
//                           onChange={(e) =>
//                             handleChange(user.id, "name", e.target.value)
//                           }
//                           className=""
//                         />
//                       ) : (
//                         user.name
//                       )}
//                     </td>

//                     <td className="border  border-gray-300 text-center px-3 py-3">{user.email}</td>

//                     <td className="border  border-gray-300 px-3 py-3 text-center">
//                       {isEditing ? (
//                         <input
//                           value={user.phone}
//                           onChange={(e) =>
//                             handleChange(user.id, "phone", e.target.value)
//                           }
//                           className=""
//                         />
//                       ) : (
//                         user.phone || "-"
//                       )}
//                     </td>

//                     <td className="border  border-gray-300 px-3 py-3 text-center">
//                       {isEditing ? (
//                         <input
//                           type="date"
//                           value={user.dob}
//                           onChange={(e) =>
//                             handleChange(user.id, "dob", e.target.value)
//                           }
//                         />
//                       ) : (
//                         user.dob || "-"
//                       )}
//                     </td>

//                     <td className="border  border-gray-300 px-3 py-3 text-center">
//                       {isEditing ? (
//                         <input
//                           type="date"
//                           value={user.anniversary}
//                           onChange={(e) =>
//                             handleChange(user.id, "anniversary", e.target.value)
//                           }
//                         />
//                       ) : (
//                         user.anniversary || "-"
//                       )}
//                     </td>

                  
//                     <td className="border border-gray-300 px-3 py-2 text-center">
//   <div className="flex justify-center gap-3">

//     {/* View Button */}
//     <button 
//       onClick={() => setSelectedUser(user)}
//       className="text-blue-600 hover:text-blue-700 transition-colors"
//       title="View Details"
//     >
//       <FiEye size={16} />
//     </button>

//     {/* Edit/Save Button */}
//     {isEditing ? (
//       <button
//         onClick={handleSave}
//         className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition-colors"
//         title="Save Changes"
//       >
//         Save
//       </button>
//     ) : (
//       <button 
//         onClick={() => setEditId(user.id)}
//         className="text-yellow-600 hover:text-yellow-700 transition-colors"
//         title="Edit User"
//       >
//         <FiEdit size={16} />
//       </button>
//     )}

//     {/* Delete Button */}
//     <button
//       onClick={() => handleDelete(user.id)}
//       className="text-red-500 hover:text-red-700 transition-colors"
//       title="Delete User"
//     >
//       <FiTrash size={16} />
//     </button>

//   </div>
// </td>

//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>

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

import { useState } from "react";
import { FiEye, FiEdit, FiTrash2, FiRefreshCw } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Samuelmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmhhghg",
      email: "john@gmail.com",
      phone: "9876543210",
      dob: "1998-05-12",
      anniversary: "",
      gender: "Male",
      address: "karamana trivandrum",
    },
    {
      id: 2,
      name: "John Samuel",
      email: "john@gmail.com",
      phone: "9876543210",
      dob: "2026-04-12",
      anniversary: "",
      gender: "Male",
      address: "Chennai",
    },
    {
      id: 3,
      name: "John Samuel",
      email: "john@gmail.com",
      phone: "9876543210",
      dob: "1998-05-12",
      anniversary: "",
      gender: "Male",
      address: "Chennai",
    },
    {
      id: 4,
      name: "John Samuel",
      email: "john@gmail.com",
      phone: "9876543210",
      dob: "1998-05-12",
      anniversary: "2026-04-29",
      gender: "Male",
      address: "Chennai",
    },
    {
      id: 5,
      name: "John Samuel",
      email: "john@gmail.com",
      phone: "9876543210",
      dob: "1998-05-12",
      anniversary: "2026-04-29",
      gender: "Male",
      address: "Chennai",
    },
    {
      id: 6,
      name: "John Samuel",
      email: "john@gmail.com",
      phone: "9876543210",
      dob: "1998-05-12",
      anniversary: "2026-04-29",
      gender: "Male",
      address: "Chennai",
    },
    {
      id: 7,
      name: "John Samuel",
      email: "john@gmail.com",
      phone: "9876543210",
      dob: "1998-05-14",
      anniversary: "",
      gender: "Male",
      address: "Chennai",
    },
    {
      id: 8,
      name: "John Samuel",
      email: "john@gmail.com",
      phone: "9876543210",
      dob: "1998-05-12",
      anniversary: "2026-04-15",
      gender: "Male",
      address: "Chennai",
    },
    {
      id: 9,
      name: "John Samuel",
      email: "john@gmail.com",
      phone: "9876543210",
      dob: "1998-05-12",
      anniversary: "",
      gender: "Male",
      address: "Chennai",
    },
    {
      id: 10,
      name: "John Samuel",
      email: "john@gmail.com",
      phone: "9876543210",
      dob: "1998-05-12",
      anniversary: "",
      gender: "Male",
      address: "Chennai",
    },
    {
      id: 11,
      name: "John Samuel",
      email: "john@gmail.com",
      phone: "9876543210",
      dob: "1998-05-12",
      anniversary: "",
      gender: "Male",
      address: "Chennai",
    },
    {
      id: 12,
      name: "John Samuel",
      email: "john@gmail.com",
      phone: "9876543210",
      dob: "1998-05-12",
      anniversary: "",
      gender: "Male",
      address: "Chennai",
    },
    {
      id: 13,
      name: "John Samuel",
      email: "john@gmail.com",
      phone: "9876543210",
      dob: "1998-05-12",
      anniversary: "",
      gender: "Male",
      address: "Chennai",
    },
    {
      id: 14,
      name: "John Samuel",
      email: "john@gmail.com",
      phone: "9876543210",
      dob: "1998-05-12",
      anniversary: "",
      gender: "Male",
      address: "Chennai",
    },
    {
      id: 15,
      name: "John Samuel",
      email: "john@gmail.com",
      phone: "9876543210",
      dob: "1998-05-12",
      anniversary: "",
      gender: "Male",
      address: "Chennai",
    },
    {
      id: 16,
      name: "John Samuel",
      email: "john@gmail.com",
      phone: "9876543210",
      dob: "1998-05-12",
      anniversary: "",
      gender: "Male",
      address: "Chennai",
    },
  ]);

  const [editId, setEditId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");

  // 🔄 Refresh
  const handleRefresh = () => {
    window.location.reload();
  };

  // ✏ Change
  const handleChange = (id, field, value) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, [field]: value } : u))
    );
  };

  // 💾 Save
  const handleSave = () => {
    setEditId(null);
    toast.success("User updated successfully");
  };

  // 🗑 Delete
  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
    toast.error("User deleted successfully");
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
      new Date(u.anniversary).getMonth() === currentMonth
  ).length;

  return (
    <div className="h-full flex flex-col">

      {/* 🔔 Toast */}
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      {/* Header Title */}
      {/* <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Users Management</h1>
        <p className="text-sm text-gray-500 mt-1">Manage and view all registered users</p>
      </div> */}

      {/* 🔹 Top Cards - Improved Design */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">

        <div className="bg-white p-5 rounded-lg border border-gray-200 ">
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

        <div className="bg-white p-5 rounded-lg border border-gray-200 ">
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

        <div className="bg-white p-5 rounded-lg border border-gray-200 ">
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

      {/* 🔹 Top Bar - Improved Design */}
      <div className="bg-white  mb-6">
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
              className="pl-9 pr-4 py-2 w-64 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-0 focus:ring-yellow-400 transition-all"
            />
          </div>
        </div>
      </div>

      {/* 🔹 Table - Only Body Scrolls */}
      <div className="bg-white flex-1 overflow-hidden">

  <div
  className="h-[60vh] overflow-y-auto"
  style={{
    scrollbarWidth: "none",       // Firefox
    msOverflowStyle: "none",      // IE
  }}
>

    <table className="w-full text-xs table-fixed">

      {/* 🔹 HEADER */}
      <thead className="sticky top-0 z-10">
        <tr className="bg-gray-100 text-gray-600">

          <th className="border border-gray-300 px-3 py-3 w-[60px]">NO</th>

          {/* 👇 NAME bigger */}
          <th className="border border-gray-300 px-3 py-3 w-[200px]">NAME</th>

          <th className="border border-gray-300 px-3 py-3 w-[220px]">EMAIL</th>

          <th className="border border-gray-300 px-3 py-3 w-[140px]">PHONE</th>

          {/* 👇 SAME WIDTH */}
          <th className="border border-gray-300 px-3 py-3 w-[140px]">DOB</th>
          <th className="border border-gray-300 px-3 py-3 w-[140px]">ANNIVERSARY</th>

          <th className="border border-gray-300 px-3 py-3 w-[120px]">ACTION</th>

        </tr>
      </thead>

      {/* 🔹 BODY */}
      <tbody>
        {filteredUsers.length === 0 ? (
          <tr>
            <td colSpan="7" className="text-center py-4 text-gray-500">
              No data found
            </td>
          </tr>
        ) : (
          filteredUsers.map((user, index) => {
            const isEditing = editId === user.id;

            return (
              <tr key={user.id} className="hover:bg-gray-50">

                {/* NO */}
                <td className="border border-gray-200 px-3 py-3 text-center">
                  {index + 1}
                </td>

                {/* NAME */}
                <td
                  title={user.name}
                  className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
                >
                  {isEditing ? (
                    <input
                      value={user.name}
                      onChange={(e) =>
                        handleChange(user.id, "name", e.target.value)
                      }
                      className="w-full bg-transparent outline-none border-none text-center"
                    />
                  ) : (
                    user.name
                  )}
                </td>

                {/* EMAIL */}
                <td
  title={user.email}
  className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
>
  {isEditing ? (
    <input
      value={user.email}
      onChange={(e) =>
        handleChange(user.id, "email", e.target.value)
      }
      className="w-full bg-transparent outline-none border-none text-center"
    />
  ) : (
    user.email
  )}
</td>

                {/* PHONE */}
                <td className="border border-gray-200 px-3 py-3 text-center">
                  {isEditing ? (
                    <input
                      value={user.phone}
                      onChange={(e) =>
                        handleChange(user.id, "phone", e.target.value)
                      }
                      className="w-full bg-transparent outline-none border-none text-center"
                    />
                  ) : (
                    user.phone || "-"
                  )}
                </td>

                {/* DOB */}
                <td className="border border-gray-200 px-3 py-3 text-center">
                  {isEditing ? (
                    <input
                      type="date"
                      value={user.dob}
                      onChange={(e) =>
                        handleChange(user.id, "dob", e.target.value)
                      }
                      className="bg-transparent outline-none border-none text-center"
                    />
                  ) : (
                    user.dob || "-"
                  )}
                </td>

                {/* ANNIVERSARY */}
                <td className="border border-gray-200 px-3 py-3 text-center">
                  {isEditing ? (
                    <input
                      type="date"
                      value={user.anniversary}
                      onChange={(e) =>
                        handleChange(user.id, "anniversary", e.target.value)
                      }
                      className="bg-transparent outline-none border-none text-center"
                    />
                  ) : (
                    user.anniversary || "-"
                  )}
                </td>

                {/* ACTION */}
                <td className="border border-gray-200 px-3 py-2 text-center">
                  <div className="flex justify-center items-center gap-3">

                    {/* View */}
                    <button
                      onClick={() => setSelectedUser(user)}
                      className="text-blue-600 hover:text-blue-700"
                      title="View"
                    >
                      <FiEye size={14} />
                    </button>

                    {/* Edit / Save */}
                    {isEditing ? (
                      <button
                        onClick={handleSave}
                        className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => setEditId(user.id)}
                        className="text-yellow-600 hover:text-yellow-700"
                        title="Edit"
                      >
                        <FiEdit size={14} />
                      </button>
                    )}

                    {/* Delete */}
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
            );
          })
        )}
      </tbody>

    </table>

  </div>
</div>

      {/* 🔹 View Modal - Improved Design */}
      {selectedUser && (
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
      )}

    </div>
  );
}