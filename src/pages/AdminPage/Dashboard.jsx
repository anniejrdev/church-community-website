// import { useState, useEffect } from "react";
// import { FiUsers } from "react-icons/fi";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Dashboard() {
//   const [totalUsers, setTotalUsers] = useState(0);

//   // Function to get users from localStorage and calculate total count
//   const loadUserStats = () => {
//     try {
//       const storedUsers = localStorage.getItem("users");
//       let users = [];
      
//       if (storedUsers) {
//         users = JSON.parse(storedUsers);
//       } else {
//         // Default data if no users in localStorage
//         users = [
//           {
//             id: 1,
//             name: "John Samuel",
//             email: "john@gmail.com",
//             phone: "9876543210",
//             dob: "1998-05-12",
//             anniversary: "",
//             gender: "Male",
//             address: "Trivandrum",
//           },
//           {
//             id: 2,
//             name: "Annie",
//             email: "annie@gmail.com",
//             phone: "9999999999",
//             dob: "2000-01-01",
//             anniversary: "",
//             gender: "Female",
//             address: "Kochi",
//           }
//         ];
//       }
      
//       setTotalUsers(users.length);
      
//     } catch (error) {
//       console.error("Error loading user stats:", error);
//     }
//   };

//   // Load stats when component mounts
//   useEffect(() => {
//     loadUserStats();
    
//     // Listen for changes in localStorage (when users are updated from Users page)
//     const handleStorageChange = (e) => {
//       if (e.key === "users") {
//         loadUserStats();
//       }
//     };
    
//     // Custom event for updates within the same tab
//     const handleUserUpdate = () => {
//       loadUserStats();
//     };
    
//     window.addEventListener("storage", handleStorageChange);
//     window.addEventListener("userDataUpdated", handleUserUpdate);
    
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//       window.removeEventListener("userDataUpdated", handleUserUpdate);
//     };
//   }, []);

//   return (
//     <div className="h-full flex flex-col">
//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      
//       {/* Total Users Card */}
//       <div className="bg-white p-5 rounded-lg border border-gray-200">
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-xs text-gray-500 uppercase tracking-wider">Total Users</p>
//             <h2 className="text-2xl font-bold text-gray-800 mt-1">{totalUsers}</h2>
//           </div>
//           <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//             <FiUsers className="w-5 h-5 text-blue-600" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";
// import { FiUsers } from "react-icons/fi";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Dashboard() {
//   const [totalUsers, setTotalUsers] = useState(0);
//   const [currentDate, setCurrentDate] = useState("");
//   const [currentDay, setCurrentDay] = useState("");
//   const [selectedDay, setSelectedDay] = useState("");
//   const [services, setServices] = useState([]);

//   // Load users count
//   const loadUserStats = () => {
//     try {
//       const storedUsers = localStorage.getItem("users");
//       let users = [];
      
//       if (storedUsers) {
//         users = JSON.parse(storedUsers);
//       } else {
//         users = [
//           {
//             id: 1,
//             name: "John Samuel",
//             email: "john@gmail.com",
//             phone: "9876543210",
//             dob: "1998-05-12",
//             anniversary: "",
//             gender: "Male",
//             address: "Trivandrum",
//           },
//           {
//             id: 2,
//             name: "Annie",
//             email: "annie@gmail.com",
//             phone: "9999999999",
//             dob: "2000-01-01",
//             anniversary: "",
//             gender: "Female",
//             address: "Kochi",
//           }
//         ];
//       }
      
//       setTotalUsers(users.length);
//     } catch (error) {
//       console.error("Error loading user stats:", error);
//     }
//   };

//   // Load services
//   const loadServices = () => {
//     const saved = JSON.parse(localStorage.getItem("services")) || [];
//     setServices(saved);
//   };

//   // Set current date and day
//   useEffect(() => {
//     const now = new Date();
//     const date = now.toISOString().split("T")[0];
//     const day = now
//       .toLocaleDateString("en-US", { weekday: "long" })
//       .toLowerCase();

//     setCurrentDate(date);
//     setCurrentDay(day);
//     setSelectedDay(day);
//   }, []);

//   // Load users and services
//   useEffect(() => {
//     loadUserStats();
//     loadServices();

//     // Listen for storage changes
//     const handleStorageChange = (e) => {
//       if (e.key === "users") {
//         loadUserStats();
//       }
//       if (e.key === "services") {
//         loadServices();
//       }
//     };
    
//     // Custom event for updates within the same tab
//     const handleDataUpdate = () => {
//       loadUserStats();
//       loadServices();
//     };
    
//     window.addEventListener("storage", handleStorageChange);
//     window.addEventListener("userDataUpdated", handleDataUpdate);
//     window.addEventListener("serviceDataUpdated", handleDataUpdate);
    
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//       window.removeEventListener("userDataUpdated", handleDataUpdate);
//       window.removeEventListener("serviceDataUpdated", handleDataUpdate);
//     };
//   }, []);

//   // Filter services based on selected day
//   const filteredServices = services.filter(
//     (s) => s.day === selectedDay
//   );

//   return (
//     <div className="min-h-screen p-6 bg-gray-50">
//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      
//       <div className="max-w-8xl mx-auto">
        
//         {/* Users Count Card */}
//         <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm mb-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs text-gray-500 uppercase tracking-wider">Total Users</p>
//               <h2 className="text-2xl font-bold text-gray-800 mt-1">{totalUsers}</h2>
//             </div>
//             <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//               <FiUsers className="w-5 h-5 text-blue-600" />
//             </div>
//           </div>
//         </div>

//         {/* Order of Service Section */}
//         <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          
//           {/* Top Bar - Date and Filter */}
//           <div className="bg-white mb-6 py-4 border-b border-gray-200">
//             <div className="flex flex-wrap justify-between items-center gap-4 px-6">
              
//               {/* Current Date + Day */}
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

//               {/* Day Filter */}
//               <div className="flex items-center gap-2">
//                 <select
//                   value={selectedDay}
//                   onChange={(e) => setSelectedDay(e.target.value)}
//                   className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent capitalize"
//                 >
//                   <option value="sunday">Sunday</option>
//                   <option value="monday">Monday</option>
//                   <option value="tuesday">Tuesday</option>
//                   <option value="wednesday">Wednesday</option>
//                   <option value="thursday">Thursday</option>
//                   <option value="friday">Friday</option>
//                   <option value="saturday">Saturday</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Services Table */}
//           <div className="px-6 pb-6">
//             <div className="h-[60vh] overflow-y-auto border border-gray-200 rounded-lg">
//               <table className="w-full text-xs">
//                 {/* Header */}
//                 <thead className="sticky top-0 bg-yellow-500 text-white z-10">
//                   <tr>
//                     <th className="border border-gray-300 px-2 py-3 text-center w-[60px]">NO</th>
//                     <th className="border border-gray-300 px-2 py-3 text-center">SERVICE</th>
//                     <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">TIME</th>
//                     <th className="border border-gray-300 px-2 py-3 text-center">LOCATION</th>
//                     <th className="border border-gray-300 px-2 py-3 text-center">DESCRIPTION</th>
//                     <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">FATHER</th>
//                   </tr>
//                 </thead>

//                 {/* Body */}
//                 <tbody>
//                   {filteredServices.length === 0 ? (
//                     <tr>
//                       <td colSpan="6" className="text-center py-8 text-gray-500">
//                         No services found for {selectedDay}
//                       </td>
//                     </tr>
//                   ) : (
//                     filteredServices.map((s, i) => (
//                       <tr key={s.id} className="hover:bg-gray-50">
//                         <td className="border border-gray-200 text-center py-3">
//                           {i + 1}
//                         </td>
//                         <td className="border border-gray-200 text-center py-2 truncate px-2">
//                           {s.name}
//                         </td>
//                         <td className="border border-gray-200 text-center py-2">
//                           {s.time}
//                         </td>
//                         <td className="border border-gray-200 text-center py-2 truncate px-2">
//                           {s.location}
//                         </td>
//                         <td className="border border-gray-200 text-center py-2 truncate px-2">
//                           {s.description || "-"}
//                         </td>
//                         <td className="border border-gray-200 text-center py-2">
//                           {s.requiresFather ? s.fatherName || "-" : "-"}
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { FiUsers } from "react-icons/fi";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Dashboard() {
//   const [totalUsers, setTotalUsers] = useState(0);
//   const [currentDate, setCurrentDate] = useState("");
//   const [currentDay, setCurrentDay] = useState("");
//   const [selectedDay, setSelectedDay] = useState("");
//   const [services, setServices] = useState([]);

//   // Load users count
//   const loadUserStats = () => {
//     try {
//       const storedUsers = localStorage.getItem("users");
//       let users = [];
      
//       if (storedUsers) {
//         users = JSON.parse(storedUsers);
//       } else {
//         users = [
//           {
//             id: 1,
//             name: "John Samuel",
//             email: "john@gmail.com",
//             phone: "9876543210",
//             dob: "1998-05-12",
//             anniversary: "",
//             gender: "Male",
//             address: "Trivandrum",
//           },
//           {
//             id: 2,
//             name: "Annie",
//             email: "annie@gmail.com",
//             phone: "9999999999",
//             dob: "2000-01-01",
//             anniversary: "",
//             gender: "Female",
//             address: "Kochi",
//           }
//         ];
//       }
      
//       setTotalUsers(users.length);
//     } catch (error) {
//       console.error("Error loading user stats:", error);
//     }
//   };

//   // Load services
//   const loadServices = () => {
//     const saved = JSON.parse(localStorage.getItem("services")) || [];
//     setServices(saved);
//   };

//   // Set current date and day
//   useEffect(() => {
//     const now = new Date();
//     const date = now.toISOString().split("T")[0];
//     const day = now
//       .toLocaleDateString("en-US", { weekday: "long" })
//       .toLowerCase();

//     setCurrentDate(date);
//     setCurrentDay(day);
//     setSelectedDay(day);
//   }, []);

//   // Load users and services
//   useEffect(() => {
//     loadUserStats();
//     loadServices();

//     // Listen for storage changes
//     const handleStorageChange = (e) => {
//       if (e.key === "users") {
//         loadUserStats();
//       }
//       if (e.key === "services") {
//         loadServices();
//       }
//     };
    
//     // Custom event for updates within the same tab
//     const handleDataUpdate = () => {
//       loadUserStats();
//       loadServices();
//     };
    
//     window.addEventListener("storage", handleStorageChange);
//     window.addEventListener("userDataUpdated", handleDataUpdate);
//     window.addEventListener("serviceDataUpdated", handleDataUpdate);
    
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//       window.removeEventListener("userDataUpdated", handleDataUpdate);
//       window.removeEventListener("serviceDataUpdated", handleDataUpdate);
//     };
//   }, []);

//   // Filter services based on selected day
//   const filteredServices = services.filter(
//     (s) => s.day === selectedDay
//   );

//   return (
//     <div className="min-h-screen p-6">
//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      
//       <div className="max-w-8xl mx-auto">
        
//         {/* Users Count Card - Limited Width */}
//         <div className="max-w-md mb-6">
//           <div className=" p-5 rounded-lg border border-gray-200 shadow-sm">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-xs text-gray-500 uppercase tracking-wider">Total Users</p>
//                 <h2 className="text-2xl font-bold text-gray-800 mt-1">{totalUsers}</h2>
//               </div>
//               <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                 <FiUsers className="w-5 h-5 text-blue-600" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Order of Service Section */}
//         <div className="bg-white">
          
//           {/* Top Bar - Date and Filter */}
//           <div className="bg-white mb-6 py-4">
//             <div className="flex flex-wrap justify-between items-center gap-4 px-6">
              
//               {/* Current Date + Day */}
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

//               {/* Day Filter */}
//               <div className="flex items-center gap-2">
//                 <select
//                   value={selectedDay}
//                   onChange={(e) => setSelectedDay(e.target.value)}
//                   className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent capitalize"
//                 >
//                   <option value="sunday">Sunday</option>
//                   <option value="monday">Monday</option>
//                   <option value="tuesday">Tuesday</option>
//                   <option value="wednesday">Wednesday</option>
//                   <option value="thursday">Thursday</option>
//                   <option value="friday">Friday</option>
//                   <option value="saturday">Saturday</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Services Table */}
//           <div className="px-6 pb-6">
//             <div className="h-[60vh] overflow-y-auto border border-gray-200 rounded-lg">
//               <table className="w-full text-xs">
//                 {/* Header */}
//                 <thead className="sticky top-0 bg-yellow-500 text-white z-10">
//                   <tr>
//                     <th className="border border-gray-300 px-2 py-3 text-center w-[60px]">NO</th>
//                     <th className="border border-gray-300 px-2 py-3 text-center">SERVICE</th>
//                     <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">TIME</th>
//                     <th className="border border-gray-300 px-2 py-3 text-center">LOCATION</th>
//                     <th className="border border-gray-300 px-2 py-3 text-center">DESCRIPTION</th>
//                     <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">FATHER</th>
//                   </tr>
//                 </thead>

//                 {/* Body */}
//                 <tbody>
//                   {filteredServices.length === 0 ? (
//                     <tr>
//                       <td colSpan="6" className="text-center py-8 text-gray-500">
//                         No services found for {selectedDay}
//                       </td>
//                     </tr>
//                   ) : (
//                     filteredServices.map((s, i) => (
//                       <tr key={s.id} className="hover:bg-gray-50">
//                         <td className="border border-gray-200 text-center py-3">
//                           {i + 1}
//                         </td>
//                         <td className="border border-gray-200 text-center py-2 truncate px-2">
//                           {s.name}
//                         </td>
//                         <td className="border border-gray-200 text-center py-2">
//                           {s.time}
//                         </td>
//                         <td className="border border-gray-200 text-center py-2 truncate px-2">
//                           {s.location}
//                         </td>
//                         <td className="border border-gray-200 text-center py-2 truncate px-2">
//                           {s.description || "-"}
//                         </td>
//                         <td className="border border-gray-200 text-center py-2">
//                           {s.requiresFather ? s.fatherName || "-" : "-"}
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { FiUsers } from "react-icons/fi";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Dashboard() {
//   const [totalUsers, setTotalUsers] = useState(0);
//   const [currentDate, setCurrentDate] = useState("");
//   const [currentDay, setCurrentDay] = useState("");
//   const [services, setServices] = useState([]);

//   // Load users count
//   const loadUserStats = () => {
//     try {
//       const storedUsers = localStorage.getItem("users");
//       let users = [];
      
//       if (storedUsers) {
//         users = JSON.parse(storedUsers);
//       } else {
//         users = [
//           {
//             id: 1,
//             name: "John Samuel",
//             email: "john@gmail.com",
//             phone: "9876543210",
//             dob: "1998-05-12",
//             anniversary: "",
//             gender: "Male",
//             address: "Trivandrum",
//           },
//           {
//             id: 2,
//             name: "Annie",
//             email: "annie@gmail.com",
//             phone: "9999999999",
//             dob: "2000-01-01",
//             anniversary: "",
//             gender: "Female",
//             address: "Kochi",
//           }
//         ];
//       }
      
//       setTotalUsers(users.length);
//     } catch (error) {
//       console.error("Error loading user stats:", error);
//     }
//   };

//   // Load services
//   const loadServices = () => {
//     const saved = JSON.parse(localStorage.getItem("services")) || [];
//     setServices(saved);
//   };

//   // Set current date and day
//   useEffect(() => {
//     const now = new Date();
//     const date = now.toISOString().split("T")[0];
//     const day = now
//       .toLocaleDateString("en-US", { weekday: "long" })
//       .toLowerCase();

//     setCurrentDate(date);
//     setCurrentDay(day);
//   }, []);

//   // Load users and services
//   useEffect(() => {
//     loadUserStats();
//     loadServices();

//     // Listen for storage changes
//     const handleStorageChange = (e) => {
//       if (e.key === "users") {
//         loadUserStats();
//       }
//       if (e.key === "services") {
//         loadServices();
//       }
//     };
    
//     // Custom event for updates within the same tab
//     const handleDataUpdate = () => {
//       loadUserStats();
//       loadServices();
//     };
    
//     window.addEventListener("storage", handleStorageChange);
//     window.addEventListener("userDataUpdated", handleDataUpdate);
//     window.addEventListener("serviceDataUpdated", handleDataUpdate);
    
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//       window.removeEventListener("userDataUpdated", handleDataUpdate);
//       window.removeEventListener("serviceDataUpdated", handleDataUpdate);
//     };
//   }, []);

//   // Filter services based on current day only
//   const filteredServices = services.filter(
//     (s) => s.day === currentDay
//   );

//   return (
//     <div className="min-h-screen px-2 py-2">
//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      
//       <div className="max-w-8xl mx-auto">
        
//         {/* Top Bar - Count Card Left, Date/Day Right */}
//         <div className="flex justify-between items-start mb-6">
//           {/* Users Count Card - Left Side */}
//           <div className="w-64">
//             <div className="p-5 rounded-lg border border-gray-200 ">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-xs text-gray-500 uppercase tracking-wider">Total Users</p>
//                   <h2 className="text-2xl font-bold text-gray-800 mt-1">{totalUsers}</h2>
//                 </div>
//                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                   <FiUsers className="w-5 h-5 text-blue-600" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Current Date + Day - Right Side */}
//           <div className="flex gap-3 bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2 rounded-lg border border-gray-200">
//             <div className="text-sm">
//               <span className="font-semibold text-gray-700">📅 Date:</span>
//               <span className="ml-2 text-gray-600 font-mono">{currentDate}</span>
//             </div>
//             <div className="w-px bg-gray-300"></div>
//             <div className="text-sm">
//               <span className="font-semibold text-gray-700">📆 Day:</span>
//               <span className="ml-2 text-gray-600 capitalize font-medium">{currentDay}</span>
//             </div>
//           </div>
//         </div>

//         {/* Order of Service Section */}
//         <div className="bg-white">
//           {/* Services Table */}
//           <div className="px-1 pb-6">
//             <div className="h-[60vh] overflow-y-auto  rounded-lg">
//               <table className="w-full text-xs">
//                 {/* Header */}
//                 <thead className="sticky top-0 bg-yellow-500 text-white z-10">
//                   <tr>
//                     <th className="border border-gray-300 px-2 py-3 text-center w-[60px]">NO</th>
//                     <th className="border border-gray-300 px-2 py-3 text-center">SERVICE</th>
//                     <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">TIME</th>
//                     <th className="border border-gray-300 px-2 py-3 text-center">LOCATION</th>
//                     <th className="border border-gray-300 px-2 py-3 text-center">DESCRIPTION</th>
//                     <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">FATHER</th>
//                   </tr>
//                 </thead>

//                 {/* Body */}
//                 <tbody>
//                   {filteredServices.length === 0 ? (
//                     <tr>
//                       <td colSpan="6" className="text-center py-8 text-gray-500">
//                         No services available for {currentDay}
//                       </td>
//                     </tr>
//                   ) : (
//                     filteredServices.map((s, i) => (
//                       <tr key={s.id} className="hover:bg-gray-50">
//                         <td className="border border-gray-200 text-center py-3">
//                           {i + 1}
//                         </td>
//                         <td className="border border-gray-200 text-center py-2 truncate px-2">
//                           {s.name}
//                         </td>
//                         <td className="border border-gray-200 text-center py-2">
//                           {s.time}
//                         </td>
//                         <td className="border border-gray-200 text-center py-2 truncate px-2">
//                           {s.location}
//                         </td>
//                         <td className="border border-gray-200 text-center py-2 truncate px-2">
//                           {s.description || "-"}
//                         </td>
//                         <td className="border border-gray-200 text-center py-2">
//                           {s.requiresFather ? s.fatherName || "-" : "-"}
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { FiUsers } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function Dashboard() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [currentDate, setCurrentDate] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  const [services, setServices] = useState([]);

  // Load users from Firebase
  const loadUserStats = async () => {
    try {
      const usersSnap = await getDocs(collection(db, "users"));
      let userCount = 0;
      
      usersSnap.forEach(doc => {
        const data = doc.data();
        // Skip admin users
        if (data.email && data.email.toLowerCase().includes('admin')) return;
        if (data.name === 'Admin') return;
        if (data.role === 'admin') return;
        if (typeof data.name !== 'string') return;
        userCount++;
      });
      
      setTotalUsers(userCount);
    } catch (error) {
      console.error("Error loading user stats:", error);
    }
  };

  // Load services from Firebase
  const loadServices = async () => {
    try {
      const snap = await getDocs(collection(db, "services"));
      const data = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setServices(data);
    } catch (error) {
      console.error("Error loading services:", error);
    }
  };

  // Set current date and day
  useEffect(() => {
    const now = new Date();
    const date = now.toISOString().split("T")[0];
    const day = now
      .toLocaleDateString("en-US", { weekday: "long" })
      .toLowerCase();

    setCurrentDate(date);
    setCurrentDay(day);
  }, []);

  // Load all data from Firebase
  useEffect(() => {
    loadUserStats();
    loadServices();
  }, []);

  // Filter services based on current day only
  const filteredServices = services.filter(
    (s) => s.day === currentDay
  );

  return (
    <div className="min-h-screen px-4 py-4">
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      
      <div className="max-w-8xl mx-auto">
        
        {/* Top Bar - Users Card Left, Date/Day Right */}
        <div className="flex justify-between items-center mb-6">
          {/* Users Count Card - Left Side */}
          <div className="w-64">
            <div className="bg-white p-5 rounded-lg border border-gray-200 ">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Total Users</p>
                  <h2 className="text-2xl font-bold text-gray-800 mt-1">{totalUsers}</h2>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiUsers className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Current Date + Day - Right Side */}
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

        {/* Order of Service Table - Below */}
        <div className="bg-white ">
          <div className="px-1 pb-6">
            <div className="h-[65vh] overflow-y-auto rounded-lg">
              <table className="w-full text-xs">
                {/* Header */}
                <thead className="sticky top-0 bg-yellow-500 text-white z-10">
                  <tr>
                    <th className="border border-gray-300 px-2 py-3 text-center w-[60px]">NO</th>
                    <th className="border border-gray-300 px-2 py-3 text-center">SERVICE</th>
                    <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">TIME</th>
                    <th className="border border-gray-300 px-2 py-3 text-center">LOCATION</th>
                    <th className="border border-gray-300 px-2 py-3 text-center">DESCRIPTION</th>
                    <th className="border border-gray-300 px-2 py-3 text-center w-[120px]">FATHER</th>
                  </tr>
                </thead>

                {/* Body */}
                <tbody>
                  {filteredServices.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center py-8 text-gray-500">
                        No services available for {currentDay}
                      </td>
                    </tr>
                  ) : (
                    filteredServices.map((s, i) => (
                      <tr key={s.id} className="hover:bg-gray-50">
                        <td className="border border-gray-200 text-center py-3">
                          {i + 1}
                        </td>
                        <td className="border border-gray-200 text-center py-2 truncate px-2">
                          {s.name}
                        </td>
                        <td className="border border-gray-200 text-center py-2">
                          {s.time}
                        </td>
                        <td className="border border-gray-200 text-center py-2 truncate px-2">
                          {s.location}
                        </td>
                        <td className="border border-gray-200 text-center py-2 truncate px-2">
                          {s.description || "-"}
                        </td>
                        <td className="border border-gray-200 text-center py-2">
                          {s.requiresFather ? s.fatherName || "-" : "-"}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}