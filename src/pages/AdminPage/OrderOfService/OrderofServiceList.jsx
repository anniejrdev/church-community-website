// import { useState } from "react";
// import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// export default function OrderOfServiceList() {
//   const navigate = useNavigate();

//   const [services, setServices] = useState([
//     {
//       id: 1,
//       name: "Second Prayer",
//       time: "8:30 AM",
//       location: "Main Sanctuary",
//       fatherName: "Rev. John",
//       requiresFather: true,
//     },
//   ]);

//   const handleDelete = (id) => {
//     setServices((prev) => prev.filter((s) => s.id !== id));
//   };

//   return (
//     <div className="p-4">

//       {/* TOP */}
//       <div className="flex justify-between mb-3">
//         <button
//           onClick={() => navigate("/admin/services/add")}
//           className="flex items-center gap-1 text-xs px-3 py-1 border rounded"
//         >
//           <FiPlus size={13} /> Add Service
//         </button>
//       </div>

//       {/* TABLE */}
//       <div className="bg-white border rounded overflow-hidden">
//         <div className="h-[60vh] overflow-y-auto">

//           <table className="w-full text-xs table-fixed">

//             <thead className="bg-gray-100 sticky top-0">
//               <tr>
//                 <th className="border px-2 py-2">NO</th>
//                 <th className="border px-2 py-2">NAME</th>
//                 <th className="border px-2 py-2">TIME</th>
//                 <th className="border px-2 py-2">LOCATION</th>
//                 <th className="border px-2 py-2">FATHER</th>
//                 <th className="border px-2 py-2">ACTION</th>
//               </tr>
//             </thead>

//             <tbody>
//               {services.map((s, i) => (
//                 <tr key={s.id} className="hover:bg-gray-50">

//                   <td className="border text-center">{i + 1}</td>
//                   <td className="border text-center">{s.name}</td>
//                   <td className="border text-center">{s.time}</td>
//                   <td className="border text-center">{s.location}</td>
//                   <td className="border text-center">
//                     {s.requiresFather ? s.fatherName : "-"}
//                   </td>

//                   <td className="border text-center">
//                     <div className="flex justify-center gap-2">

//                       <button
//                         onClick={() => navigate(`/admin/services/edit/${s.id}`)}
//                         className="text-yellow-600"
//                       >
//                         <FiEdit size={14} />
//                       </button>

//                       <button
//                         onClick={() => handleDelete(s.id)}
//                         className="text-red-500"
//                       >
//                         <FiTrash2 size={14} />
//                       </button>

//                     </div>
//                   </td>

//                 </tr>
//               ))}
//             </tbody>

//           </table>

//         </div>
//       </div>

//     </div>
//   );
// }

// import { useState } from "react";
// import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// export default function OrderOfServiceList() {
//   const navigate = useNavigate();

//   const [services, setServices] = useState([
//     {
//       id: 1,
//       day: "sunday",
//       name: "Second Prayer",
//       time: "8:30 AM",
//       location: "Main Hall",
//       fatherName: "Rev. John",
//       requiresFather: true,
//     },
//     {
//       id: 2,
//       day: "wednesday",
//       name: "Night Prayer",
//       time: "7:00 PM",
//       location: "Church",
//       fatherName: "Rev. Peter",
//       requiresFather: true,
//     },
//   ]);

//   const handleDelete = (id) => {
//     setServices((prev) => prev.filter((s) => s.id !== id));
//   };

//   return (
//     <div className="p-4">

//       {/* TOP */}
//       <div className="flex justify-between mb-3">
//         <button
//           onClick={() => navigate("/admin/services/add")}
//           className="flex items-center gap-1 text-xs px-3 py-1 border rounded"
//         >
//           <FiPlus size={13} /> Add Service
//         </button>
//       </div>

//       {/* TABLE */}
//       <div className="bg-white border rounded overflow-hidden">

//         <div className="h-[60vh] overflow-y-auto">

//           <table className="w-full text-xs table-fixed">

//             <thead className="bg-gray-100 sticky top-0">
//               <tr>
//                 <th className="border px-2 py-2">NO</th>
//                 <th className="border px-2 py-2">DAY</th>
//                 <th className="border px-2 py-2">NAME</th>
//                 <th className="border px-2 py-2">TIME</th>
//                 <th className="border px-2 py-2">LOCATION</th>
//                 <th className="border px-2 py-2">FATHER</th>
//                 <th className="border px-2 py-2">ACTION</th>
//               </tr>
//             </thead>

//             <tbody>
//               {services.map((s, i) => (
//                 <tr key={s.id} className="hover:bg-gray-50">

//                   <td className="border text-center">{i + 1}</td>
//                   <td className="border text-center capitalize">{s.day}</td>
//                   <td className="border text-center">{s.name}</td>
//                   <td className="border text-center">{s.time}</td>
//                   <td className="border text-center">{s.location}</td>
//                   <td className="border text-center">
//                     {s.requiresFather ? s.fatherName : "-"}
//                   </td>

//                   <td className="border text-center">
//                     <div className="flex justify-center gap-2">

//                       <button
//                         onClick={() =>
//                           navigate(`/admin/services/edit/${s.id}`)
//                         }
//                         className="text-yellow-600"
//                       >
//                         <FiEdit size={14} />
//                       </button>

//                       <button
//                         onClick={() => handleDelete(s.id)}
//                         className="text-red-500"
//                       >
//                         <FiTrash2 size={14} />
//                       </button>

//                     </div>
//                   </td>

//                 </tr>
//               ))}
//             </tbody>

//           </table>

//         </div>
//       </div>

//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// export default function OrderOfServiceList() {
//   const navigate = useNavigate();

//   const [currentDate, setCurrentDate] = useState("");
//   const [currentDay, setCurrentDay] = useState("");

//   // 🔹 STATIC DATA (replace with Firebase later)
//   const [services, setServices] = useState([
//     {
//       id: 1,
//       day: "sunday",
//       name: "First Prayer",
//       startTime: "08:00",
//       endTime: "08:30",
//       location: "Main Hall",
//       requiresFather: false,
//     },
//     {
//       id: 2,
//       day: "sunday",
//       name: "Second Prayer",
//       startTime: "08:30",
//       endTime: "10:30",
//       location: "Main Hall",
//       requiresFather: true,
//       fatherName: "Rev. John",
//     },
//     {
//       id: 3,
//       day: "wednesday",
//       name: "Night Prayer",
//       startTime: "19:00",
//       endTime: "20:00",
//       location: "Church",
//       requiresFather: true,
//     },
//     {
//       id: 4,
//       day: "friday",
//       name: "Fasting Prayer",
//       startTime: "10:00",
//       endTime: "12:00",
//       location: "Church",
//       requiresFather: true,
//     },
//     {
//       id: 5,
//       day: "saturday",
//       type: "second",
//       name: "2nd Saturday Prayer",
//       startTime: "10:00",
//       endTime: "12:00",
//       location: "Main Hall",
//     },
//   ]);

//   // 🔥 CURRENT DATE + DAY (AUTO)
//   useEffect(() => {
//     const updateDate = () => {
//       const now = new Date();

//       const date = now.toISOString().split("T")[0];

//       const day = now
//         .toLocaleDateString("en-US", { weekday: "long" })
//         .toLowerCase();

//       setCurrentDate(date);
//       setCurrentDay(day);
//     };

//     updateDate();

//     // update every 1 minute (optional)
//     const interval = setInterval(updateDate, 60000);

//     return () => clearInterval(interval);
//   }, []);

//   // 🔹 DELETE
//   const handleDelete = (id) => {
//     setServices((prev) => prev.filter((s) => s.id !== id));
//   };

//   return (
//     <div className="p-4">

//       {/* 🔥 HEADER (DYNAMIC ONLY) */}
//       <div className="flex justify-between items-center mb-3">

//         {/* LEFT */}
//         <div>
//           <h2 className="text-sm font-semibold">
//             Order of Services
//           </h2>
//           <p className="text-xs text-gray-500">
//             Manage weekly service schedule
//           </p>
//         </div>

//         {/* RIGHT (AUTO DATE + DAY) */}
//         <div className="text-right text-xs text-gray-600">
//           <div>Date: {currentDate}</div>
//           <div className="capitalize">Day: {currentDay}</div>
//         </div>

//       </div>

//       {/* 🔹 ADD BUTTON */}
//       <div className="flex justify-end mb-2">
//         <button
//           onClick={() => navigate("/admin/services/add")}
//           className="flex items-center gap-1 text-xs px-3 py-1 border rounded"
//         >
//           <FiPlus size={13} /> Add Service
//         </button>
//       </div>

//       {/* 🔥 TABLE (STATIC DATA – NO CHANGE DAILY) */}
//       <div className="bg-white border rounded overflow-hidden">

//         <div className="h-[65vh] overflow-y-auto">

//           <table className="w-full text-xs table-fixed">

//             <thead className="sticky top-0 bg-gray-100">
//               <tr>
//                 <th className="border px-2 py-2 w-[50px]">NO</th>
//                 <th className="border px-2 py-2">DAY</th>
//                 <th className="border px-2 py-2">SERVICE</th>
//                 <th className="border px-2 py-2">TIME</th>
//                 <th className="border px-2 py-2">LOCATION</th>
//                 <th className="border px-2 py-2">FATHER</th>
//                 <th className="border px-2 py-2">TYPE</th>
//                 <th className="border px-2 py-2">ACTION</th>
//               </tr>
//             </thead>

//             <tbody>
//               {services.map((s, i) => (
//                 <tr key={s.id} className="hover:bg-gray-50">

//                   <td className="border text-center">{i + 1}</td>

//                   <td className="border text-center capitalize">
//                     {s.day}
//                   </td>

//                   <td className="border text-center">{s.name}</td>

//                   <td className="border text-center">
//                     {s.startTime} - {s.endTime}
//                   </td>

//                   <td className="border text-center">
//                     {s.location}
//                   </td>

//                   <td className="border text-center">
//                     {s.requiresFather
//                       ? s.fatherName || "-"
//                       : "-"}
//                   </td>

//                   <td className="border text-center">
//                     {s.type === "second"
//                       ? "2nd Saturday"
//                       : "Normal"}
//                   </td>

//                   <td className="border text-center">
//                     <div className="flex justify-center gap-2">

//                       <button
//                         onClick={() =>
//                           navigate(`/admin/services/edit/${s.id}`)
//                         }
//                         className="text-yellow-600"
//                       >
//                         <FiEdit size={14} />
//                       </button>

//                       <button
//                         onClick={() => handleDelete(s.id)}
//                         className="text-red-500"
//                       >
//                         <FiTrash2 size={14} />
//                       </button>

//                     </div>
//                   </td>

//                 </tr>
//               ))}
//             </tbody>

//           </table>

//         </div>
//       </div>

//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// export default function OrderOfServiceList() {
//   const navigate = useNavigate();

//   const [currentDate, setCurrentDate] = useState("");
//   const [currentDay, setCurrentDay] = useState("");
//   const [selectedDay, setSelectedDay] = useState("");
//   const [services, setServices] = useState([]);



// useEffect(() => {
//   const loadData = () => {
//     const saved =
//       JSON.parse(localStorage.getItem("services")) || [];
//     setServices(saved);
//   };

//   loadData();

//   window.addEventListener("focus", loadData);

//   return () => window.removeEventListener("focus", loadData);
// }, []);
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
//  const handleDelete = (id) => {
//   const updated = services.filter((s) => s.id !== id);
//   setServices(updated);
//   localStorage.setItem("services", JSON.stringify(updated));
// };

//   return (
//     <div className="p-4">

//       {/* 🔥 TOP BAR */}
//       <div className="flex justify-between items-center mb-3">

//         {/* LEFT */}
//         <div className="flex items-center gap-3">

//           <button
//             onClick={() => navigate("/admin/services/add")}
//             className="flex items-center gap-1 text-xs px-3 py-1 border rounded"
//           >
//             <FiPlus size={13} />
//             Add Service
//           </button>

//           {/* CURRENT DATE + DAY */}
//           <div className="text-xs text-gray-600">
//             <div>Date: {currentDate}</div>
//             <div className="capitalize">Day: {currentDay}</div>
//           </div>

//         </div>

//         {/* RIGHT - DAY FILTER */}
//         <select
//           value={selectedDay}
//           onChange={(e) => setSelectedDay(e.target.value)}
//           className="text-xs border px-2 py-1 rounded"
//         >
//           <option value="sunday">Sunday</option>
//           <option value="monday">Monday</option>
//           <option value="tuesday">Tuesday</option>
//           <option value="wednesday">Wednesday</option>
//           <option value="thursday">Thursday</option>
//           <option value="friday">Friday</option>
//           <option value="saturday">Saturday</option>
//         </select>

//       </div>

//       {/* 🔥 TABLE */}
//       <div className="bg-white border rounded overflow-hidden">

//         <div className="h-[65vh] overflow-y-auto">

//           <table className="w-full text-xs table-fixed">

//             <thead className="sticky top-0 bg-gray-100">
//               <tr>
//                 <th className="border px-2 py-2 w-[50px]">NO</th>
//                 <th className="border px-2 py-2">SERVICE</th>
//                 <th className="border px-2 py-2">TIME</th>
//                 <th className="border px-2 py-2">LOCATION</th>
//                 <th className="border px-2 py-2">DESCRIPTION</th>
//                 <th className="border px-2 py-2">FATHER</th>
//                 <th className="border px-2 py-2 w-[100px]">ACTION</th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredServices.length === 0 ? (
//                 <tr>
//                   <td
//                     colSpan="7"
//                     className="text-center py-4 text-gray-500"
//                   >
//                     No data found
//                   </td>
//                 </tr>
//               ) : (
//                 filteredServices.map((s, i) => (
//                   <tr key={s.id} className="hover:bg-gray-50">

//                     <td className="border text-center">{i + 1}</td>

//                     <td className="border text-center">{s.name}</td>

//                     <td className="border text-center">{s.time}</td>

//                     <td className="border text-center">{s.location}</td>

//                     <td className="border text-center">
//                       {s.description}
//                     </td>

//                     <td className="border text-center">
//                       {s.requiresFather
//                         ? s.fatherName || "-"
//                         : "-"}
//                     </td>

//                     <td className="border text-center">
//                       <div className="flex justify-center gap-2">

//                         <button
//                           onClick={() =>
//                             navigate(`/admin/services/edit/${s.id}`)
//                           }
//                           className="text-yellow-600"
//                         >
//                           <FiEdit size={14} />
//                         </button>

//                         <button
//                           onClick={() => handleDelete(s.id)}
//                           className="text-red-500"
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

//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// export default function OrderOfServiceList() {
//   const navigate = useNavigate();

//   const [currentDate, setCurrentDate] = useState("");
//   const [currentDay, setCurrentDay] = useState("");
//   const [selectedDay, setSelectedDay] = useState("");
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const loadData = () => {
//       const saved =
//         JSON.parse(localStorage.getItem("services")) || [];
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
//   };

//   return (
//     <div className="min-h-screen  p-6">
//       <div className="max-w-8xl mx-auto">
//         {/* 🔥 TOP BAR */}
//         <div className="bg-white mb-6 py-4 -mt-8">
//           <div className="flex flex-wrap justify-between items-center gap-4">
//             {/* LEFT */}
//             <div className="flex items-center gap-4 flex-wrap">
//               <button
//                 onClick={() => navigate("/admin/services/add")}
//                 className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm font-medium"
//               >
//                 <FiPlus size={16} />
//                 Add New Service
//               </button>

//               {/* CURRENT DATE + DAY */}
//               <div className="flex gap-3 bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2 rounded-lg border border-gray-200">
//                 <div className="text-sm">
//                   <span className="font-semibold text-gray-700">📅 Date:</span>
//                   <span className="ml-2 text-gray-600 font-mono">{currentDate}</span>
//                 </div>
//                 <div className="w-px bg-gray-300"></div>
//                 <div className="text-sm">
//                   <span className="font-semibold text-gray-700">📆 Day:</span>
//                   <span className="ml-2 text-gray-600 capitalize font-medium">{currentDay}</span>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT - DAY FILTER */}
//             {/* <div className="flex items-center gap-2">
//               <label className="text-sm font-semibold text-gray-700">Filter by:</label>
//               <select
//                 value={selectedDay}
//                 onChange={(e) => setSelectedDay(e.target.value)}
//                 className="text-sm border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-3 py-2 bg-white cursor-pointer transition-all duration-200"
//               >
//                 <option value="sunday">📆 Sunday</option>
//                 <option value="monday">📆 Monday</option>
//                 <option value="tuesday">📆 Tuesday</option>
//                 <option value="wednesday">📆 Wednesday</option>
//                 <option value="thursday">📆 Thursday</option>
//                 <option value="friday">📆 Friday</option>
//                 <option value="saturday">📆 Saturday</option>
//               </select>
//             </div> */}
//             <div className="flex items-center gap-2">
//   <select
//     value={selectedDay}
//     onChange={(e) => setSelectedDay(e.target.value)}
//     className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent capitalize"
//   >
//     <option value="sunday">Sunday</option>
//     <option value="monday">Monday</option>
//     <option value="tuesday">Tuesday</option>
//     <option value="wednesday">Wednesday</option>
//     <option value="thursday">Thursday</option>
//     <option value="friday">Friday</option>
//     <option value="saturday">Saturday</option>
//   </select>
// </div>
//           </div>
//         </div>

//         {/* 🔥 TABLE */}
//         {/* <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
//           <div className="h-[65vh] overflow-y-auto">
//             <table className="w-full text-sm">
//               <thead className="sticky top-0 bg-gradient-to-r from-gray-100 to-gray-50 z-10">
//                 <tr>
//                   <th className="border-b-2 border-gray-200 px-3 py-3 text-left font-semibold text-gray-700 w-[60px]">#NO</th>
//                   <th className="border-b-2 border-gray-200 px-3 py-3 text-left font-semibold text-gray-700">SERVICE</th>
//                   <th className="border-b-2 border-gray-200 px-3 py-3 text-left font-semibold text-gray-700 w-[100px]">TIME</th>
//                   <th className="border-b-2 border-gray-200 px-3 py-3 text-left font-semibold text-gray-700">LOCATION</th>
//                   <th className="border-b-2 border-gray-200 px-3 py-3 text-left font-semibold text-gray-700">DESCRIPTION</th>
//                   <th className="border-b-2 border-gray-200 px-3 py-3 text-left font-semibold text-gray-700 w-[120px]">FATHER</th>
//                   <th className="border-b-2 border-gray-200 px-3 py-3 text-center font-semibold text-gray-700 w-[100px]">ACTION</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredServices.length === 0 ? (
//                   <tr>
//                     <td colSpan="7" className="text-center py-12">
//                       <div className="flex flex-col items-center justify-center text-gray-400">
//                         <svg className="w-16 h-16 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
//                         </svg>
//                         <p className="text-sm font-medium">No services found for {selectedDay}</p>
//                         <p className="text-xs mt-1">Click "Add New Service" to create one</p>
//                       </div>
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredServices.map((s, i) => (
//                     <tr key={s.id} className="hover:bg-blue-50 transition-colors duration-150 even:bg-gray-50/30">
//                       <td className="border-b border-gray-100 px-3 py-3 text-gray-600 font-mono text-center">
//                         <span className="inline-block w-6 h-6 rounded-full bg-gray-100 text-gray-700 text-center leading-6 text-xs font-semibold">
//                           {i + 1}
//                         </span>
//                       </td>
//                       <td className="border-b border-gray-100 px-3 py-3 font-medium text-gray-800">
//                         {s.name}
//                       </td>
//                       <td className="border-b border-gray-100 px-3 py-3">
//                         <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono">
//                           ⏰ {s.time}
//                         </span>
//                       </td>
//                       <td className="border-b border-gray-100 px-3 py-3 text-gray-600">
//                         <span className="inline-flex items-center gap-1">
//                           📍 {s.location}
//                         </span>
//                       </td>
//                       <td className="border-b border-gray-100 px-3 py-3 text-gray-500 max-w-xs truncate">
//                         {s.description || "—"}
//                       </td>
//                       <td className="border-b border-gray-100 px-3 py-3">
//                         {s.requiresFather ? (
//                           <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-purple-50 text-purple-700 text-xs">
//                             👨‍🦳 {s.fatherName || "-"}
//                           </span>
//                         ) : (
//                           <span className="text-gray-400 text-xs">—</span>
//                         )}
//                       </td>
//                       <td className="border-b border-gray-100 px-3 py-3 text-center">
//                         <div className="flex justify-center gap-2">
//                           <button
//                             onClick={() =>
//                               navigate(`/admin/services/edit/${s.id}`)
//                             }
//                             className="p-1.5 rounded-md bg-yellow-50 hover:bg-yellow-100 text-yellow-700 transition-all duration-200 hover:scale-110"
//                             title="Edit Service"
//                           >
//                             <FiEdit size={15} />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(s.id)}
//                             className="p-1.5 rounded-md bg-red-50 hover:bg-red-100 text-red-600 transition-all duration-200 hover:scale-110"
//                             title="Delete Service"
//                           >
//                             <FiTrash2 size={15} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div> */}
//         <div className="bg-white rounded">

//   <div className="h-[65vh] overflow-y-auto">

//     <table className="w-full text-xs">

//       {/* HEADER */}
//       <thead className="sticky top-0 bg-yellow-500 text-white">
//         <tr>
//           <th className="border border-gray-300 px-2 py-3 text-center w-[60px]">NO</th>
//           <th className="border border-gray-300 px-2 py-3 text-center">SERVICE</th>
//           <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">TIME</th>
//           <th className="border border-gray-300 px-2 py-3 text-center">LOCATION</th>
//           <th className="border border-gray-300 px-2 py-3 text-center">DESCRIPTION</th>
//           <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">FATHER</th>
//           <th className="border border-gray-300 px-2 py-3 text-center w-[100px]">ACTION</th>
//         </tr>
//       </thead>

//       {/* BODY */}
//       <tbody>
//         {filteredServices.length === 0 ? (
//           <tr>
//             <td colSpan="7" className="text-center py-6 text-gray-500">
//               No data found
//             </td>
//           </tr>
//         ) : (
//           filteredServices.map((s, i) => (
//             <tr key={s.id} className="hover:bg-gray-50">

//               {/* NO */}
//               <td className="border border-gray-200 text-center py-3">
//                 {i + 1}
//               </td>

//               {/* SERVICE */}
//               <td className="border border-gray-200 text-center py-2 truncate">
//                 {s.name}
//               </td>

//               {/* TIME */}
//               <td className="border border-gray-200 text-center py-2">
//                 {s.time}
//               </td>

//               {/* LOCATION */}
//               <td className="border border-gray-200 text-center py-2 truncate">
//                 {s.location}
//               </td>

//               {/* DESCRIPTION */}
//               <td className="border border-gray-200 text-center py-2 truncate">
//                 {s.description || "-"}
//               </td>

//               {/* FATHER */}
//               <td className="border border-gray-200 text-center py-2">
//                 {s.requiresFather ? s.fatherName || "-" : "-"}
//               </td>

//               {/* ACTION */}
//               <td className="border border-gray-200 text-center py-2">
//                 <div className="flex justify-center gap-2">

//                   <button
//                     onClick={() =>
//                       navigate(`/admin/services/edit/${s.id}`)
//                     }
//                     className="text-yellow-600 hover:scale-110 transition"
//                   >
//                     <FiEdit size={14} />
//                   </button>

//                   <button
//                     onClick={() => handleDelete(s.id)}
//                     className="text-red-500 hover:scale-110 transition"
//                   >
//                     <FiTrash2 size={14} />
//                   </button>

//                 </div>
//               </td>

//             </tr>
//           ))
//         )}
//       </tbody>

//     </table>

//   </div>
// </div>

//         {/* Optional: Footer stats */}
//         {/* {filteredServices.length > 0 && (
//           <div className="mt-4 text-center">
//             <p className="text-xs text-gray-500">
//               Showing {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} for <span className="font-semibold capitalize">{selectedDay}</span>
//             </p>
//           </div>
//         )} */}
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import OrderOfServiceAddModal from "../OrderOfService/OrderOfServiceAdd"
// import OrderOfServiceEditModal from "../OrderOfService/OrderOfServiceEdit";
// import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";
// import { db } from "../../../firebase";

// export default function OrderOfServiceList() {
//   const [currentDate, setCurrentDate] = useState("");
//   const [currentDay, setCurrentDay] = useState("");
//   const [selectedDay, setSelectedDay] = useState("");
//   const [services, setServices] = useState([]);
  
//   // Modal states
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editingService, setEditingService] = useState(null);

//  useEffect(() => {
//   loadServices();
// }, []);

// const loadServices = async () => {
//   try {
//     const snap = await getDocs(collection(db, "services"));
//     const data = snap.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data()
//     }));

//     setServices(data);
//   } catch (error) {
//     console.log(error);
//     toast.error("Failed to load services");
//   }
// };
  
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
//   // const handleDelete = (id) => {
//   //   const updated = services.filter((s) => s.id !== id);
//   //   setServices(updated);
//   //   localStorage.setItem("services", JSON.stringify(updated));
//   //   toast.error("Service deleted successfully");
//   // };
//  const handleDelete = async (id) => {
//   if (!window.confirm("Are you sure you want to delete this service?")) return;

//   try {
//     await deleteDoc(doc(db, "services", id));

//     toast.success("Deleted successfully");

//     loadServicesByDay(selectedDay);
//   } catch (error) {
//     console.log(error);
//     toast.error("Delete failed");
//   }
// };

//   // 🔹 Open Add Modal
//   const handleAddClick = () => {
//     setIsAddModalOpen(true);
//   };

//   // 🔹 Save New Service from Modal
//   // const handleSaveAdd = (newService) => {
//   //   const existing = JSON.parse(localStorage.getItem("services")) || [];
//   //   const updated = [...existing, newService];
//   //   localStorage.setItem("services", JSON.stringify(updated));
//   //   setServices(updated);
//   //   toast.success("Service added successfully");
//   //   setIsAddModalOpen(false);
//   // };
//  const handleSaveAdd = async (newService) => {
//   try {
//     await addDoc(collection(db, "services"), newService);

//     toast.success("Service added successfully");
//     setIsAddModalOpen(false);

//     loadServicesByDay(selectedDay); // refresh current day
//   } catch (error) {
//     console.log(error);
//     toast.error("Failed to add service");
//   }
// };

//   // 🔹 Open Edit Modal
//   const handleEditClick = (service) => {
//     setEditingService(service);
//     setIsEditModalOpen(true);
//   };

//   // 🔹 Save Edit from Modal
//   // const handleSaveEdit = (updatedService) => {
//   //   const data = JSON.parse(localStorage.getItem("services")) || [];
//   //   const updated = data.map((s) =>
//   //     s.id === updatedService.id ? updatedService : s
//   //   );
//   //   localStorage.setItem("services", JSON.stringify(updated));
//   //   setServices(updated);
//   //   toast.success("Service updated successfully");
//   //   setIsEditModalOpen(false);
//   //   setEditingService(null);
//   // };
//  const handleSaveEdit = async (updatedService) => {
//   try {
//     if (typeof updatedService.id !== "string") {
//       console.error("Wrong ID:", updatedService.id);
//       toast.error("Invalid ID");
//       return;
//     }

//     const { id, ...data } = updatedService;

//     await updateDoc(doc(db, "services", id), data);

//     toast.success("Updated successfully");
//     loadServicesByDay(selectedDay);
//   } catch (error) {
//     console.log(error);
//     toast.error("Update failed");
//   }
// };
// useEffect(() => {
//   if (selectedDay) {
//     loadServicesByDay(selectedDay);
//   }
// }, [selectedDay]);

// // const loadServicesByDay = async (day) => {
// //   try {
// //     const data = await getServicesByDay(day); // your API
// //     setServices(data);
// //   } catch (err) {
// //     console.error(err);
// //   }
// // };
// const loadServicesByDay = async (day) => {
//   try {
//     const q = query(
//       collection(db, "services"),
//       where("day", "==", day)
//     );

//     const snap = await getDocs(q);

//     const data = snap.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data()
//     }));

//     setServices(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
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

//               {/* CURRENT DATE + DAY */}
//               <div className="flex gap-3 bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2 rounded-lg border border-gray-200">
//                 <div className="text-sm">
//                   <span className="font-semibold text-gray-700">📅 Date:</span>
//                   <span className="ml-2 text-gray-600 font-mono">{currentDate}</span>
//                 </div>
//                 <div className="w-px bg-gray-300"></div>
//                 <div className="text-sm">
//                   <span className="font-semibold text-gray-700">📆 Day:</span>
//                   <span className="ml-2 text-gray-600 capitalize font-medium">{currentDay}</span>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT - DAY FILTER */}
//             <div className="flex items-center gap-2">
//               <select
//                 value={selectedDay}
//                 onChange={(e) => setSelectedDay(e.target.value)}
//                 className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent capitalize"
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

import { useEffect, useState } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderOfServiceAddModal from "../OrderOfService/OrderOfServiceAdd";
import OrderOfServiceEditModal from "../OrderOfService/OrderOfServiceEdit";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

export default function OrderOfServiceList() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [services, setServices] = useState([]);
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    loadAllServices();
  }, []);

  const loadAllServices = async () => {
    try {
      const snap = await getDocs(collection(db, "services"));
      const data = snap.docs.map(doc => {
        const docData = doc.data();
        return {
          firestoreId: doc.id,  // ✅ Store the REAL Firestore document ID
          ...docData,
          // Keep the old id field if needed, but don't use it for operations
        };
      });
      console.log("Loaded services:", data);
      setServices(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load services");
    }
  };
  
  // CURRENT DATE + DAY
  useEffect(() => {
    const now = new Date();
    const date = now.toISOString().split("T")[0];
    const day = now.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase();
    setCurrentDate(date);
    setCurrentDay(day);
    setSelectedDay(day);
  }, []);

  // Get Saturday services (handles 2nd Saturday correctly)
// Get Saturday services (handles 2nd Saturday correctly)
const getSaturdayServices = (date) => {
  const isSecondSat = isSecondSaturday(date);
  const allSaturdayServices = getServicesForDay("saturday");
  
  if (isSecondSat) {
    // Show ONLY 2nd Saturday services
    const secondSatServices = allSaturdayServices.filter(s => 
      s.isSecondSaturday === true
    );
    
    console.log("2nd Saturday services:", secondSatServices);
    return secondSatServices;
  } else {
    // Show ONLY regular Saturday services (not 2nd Saturday)
    const regularSatServices = allSaturdayServices.filter(s => 
      !s.isSecondSaturday
    );
    
    console.log("Regular Saturday services:", regularSatServices);
    return regularSatServices;
  }
};

  // FILTER DATA BASED ON SELECTED DAY
  const filteredServices = services.filter((s) => s.day === selectedDay);

  // DELETE SERVICE
  const handleDelete = async (firestoreId) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;

    try {
      console.log("Deleting service with Firestore ID:", firestoreId);
      await deleteDoc(doc(db, "services", firestoreId));
      toast.success("Deleted successfully");
      await loadAllServices(); // Refresh the list
    } catch (error) {
      console.log("Delete error:", error);
      toast.error("Delete failed: " + error.message);
    }
  };

  // Save New Service
  const handleSaveAdd = async (newService) => {
    try {
      // Remove any old id fields - let Firestore generate its own ID
      const { id, firestoreId, ...serviceData } = newService;
      const docRef = await addDoc(collection(db, "services"), serviceData);
      console.log("Added service with Firestore ID:", docRef.id);
      toast.success("Service added successfully");
      setIsAddModalOpen(false);
      await loadAllServices(); // Refresh the list
    } catch (error) {
      console.log("Add error:", error);
      toast.error("Failed to add service: " + error.message);
    }
  };

  // Open Edit Modal
  const handleEditClick = (service) => {
    console.log("Editing service:", service);
    setEditingService(service);
    setIsEditModalOpen(true);
  };

  // Save Edit
  const handleSaveEdit = async (updatedService) => {
    try {
      // Use the Firestore document ID (not the old numeric id)
      const firestoreId = updatedService.firestoreId;
      
      console.log("Updating service with Firestore ID:", firestoreId);
      
      if (!firestoreId) {
        toast.error("Invalid service ID");
        return;
      }

      // Remove the id fields from the update data
      const { id, firestoreId: removedId, ...updateData } = updatedService;
      
      const serviceRef = doc(db, "services", firestoreId);
      await updateDoc(serviceRef, updateData);
      
      toast.success("Updated successfully");
      setIsEditModalOpen(false);
      setEditingService(null);
      await loadAllServices(); // Refresh the list
    } catch (error) {
      console.log("Update error:", error);
      toast.error("Update failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      
      <div className="max-w-8xl mx-auto">
        {/* TOP BAR */}
        <div className="bg-white mb-6 py-4 -mt-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="flex items-center gap-2 border border-yellow-500 text-black px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                <FiPlus size={16} />
                Add New Service
              </button>

              <div className="flex gap-3 bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2 rounded-lg border border-gray-200">
                <div className="text-sm">
                  <span className="font-semibold text-gray-700">📅 Date:</span>
                  <span className="ml-2 text-gray-600 font-mono">{currentDate}</span>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="text-sm">
                  <span className="font-semibold text-gray-700">📆 Day:</span>
                  <span className="ml-2 text-gray-600 capitalize font-medium">{currentDay}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent capitalize"
              >
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
              </select>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded">
          <div className="h-[65vh] overflow-y-auto">
            <table className="w-full text-xs">
              <thead className="sticky top-0 bg-yellow-500 text-white">
                <tr>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[60px]">NO</th>
                  <th className="border border-gray-300 px-2 py-3 text-center">SERVICE</th>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">TIME</th>
                  <th className="border border-gray-300 px-2 py-3 text-center">LOCATION</th>
                  <th className="border border-gray-300 px-2 py-3 text-center">DESCRIPTION</th>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">FATHER</th>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[100px]">ACTION</th>
                </tr>
              </thead>

              <tbody>
                {filteredServices.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-6 text-gray-500">
                      No data found
                    </td>
                  </tr>
                ) : (
                  filteredServices.map((s, i) => (
                    <tr key={s.firestoreId} className="hover:bg-gray-50">
                      <td className="border border-gray-200 text-center py-3">{i + 1}</td>
                      <td className="border border-gray-200 text-center py-2 truncate">{s.name}</td>
                      <td className="border border-gray-200 text-center py-2">{s.time}</td>
                      <td className="border border-gray-200 text-center py-2 truncate">{s.location}</td>
                      <td className="border border-gray-200 text-center py-2 truncate">{s.description || "-"}</td>
                      <td className="border border-gray-200 text-center py-2">{s.requiresFather ? s.fatherName || "-" : "-"}</td>
                      <td className="border border-gray-200 text-center py-2">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleEditClick(s)}
                            className="text-yellow-600 hover:scale-110 transition"
                            title="Edit Service"
                          >
                            <FiEdit size={14} />
                          </button>
                          <button
                            onClick={() => handleDelete(s.firestoreId)}  // ✅ Use firestoreId
                            className="text-red-500 hover:scale-110 transition"
                            title="Delete Service"
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
      </div>

      <OrderOfServiceAddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveAdd}
      />

      <OrderOfServiceEditModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingService(null);
        }}
        onSave={handleSaveEdit}
        data={editingService}
      />
    </div>
  );
}