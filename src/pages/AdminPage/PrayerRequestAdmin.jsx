// import { useState } from "react";
// import { FiEdit, FiTrash2, FiRefreshCw } from "react-icons/fi";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function PrayerRequestsAdmin() {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       name: "John Samuel",
//       place: "Chennai",
//       date: "2026-04-27",
//     },
//     {
//       id: 2,
//       name: "Mary",
//       place: "London",
//       date: "2026-04-25",
//     },
//   ]);

//   const [editId, setEditId] = useState(null);
//   const [search, setSearch] = useState("");

//   // 🔄 Refresh (UI only)
//   const handleRefresh = () => {
//     toast.success("Refreshed");
//   };

//   // ✏ Edit change
//   const handleChange = (id, field, value) => {
//     setData((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, [field]: value } : item
//       )
//     );
//   };

//   // 💾 Save
//   const handleSave = () => {
//     setEditId(null);
//     toast.success("Updated successfully");
//   };

//   // 🗑 Delete
//   const handleDelete = (id) => {
//     setData((prev) => prev.filter((item) => item.id !== id));
//     toast.success("Deleted successfully");
//   };

//   // 🔍 Search filter
//   const filtered = data.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="flex flex-col h-full p-4">

//       <ToastContainer position="top-right" autoClose={2000} />

//       {/* 🔹 Top Bar */}
//       <div className="flex justify-between items-center mb-3">

//         <div className="flex items-center gap-3">
//           {/* Refresh */}
//           <button
//             onClick={handleRefresh}
//             className="flex items-center gap-1 text-xs px-3 py-1 border rounded"
//           >
//             <FiRefreshCw size={13} />
//             Refresh
//           </button>

//           {/* Count */}
//           <span className="text-xs text-gray-600">
//             Total: {data.length}
//           </span>
//         </div>

//         {/* Search */}
//         <input
//           type="text"
//           placeholder="Search..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border px-3 py-1 text-xs rounded outline-none"
//         />
//       </div>

//       {/* 🔹 Table */}
//       <div className="bg-white flex-1 overflow-hidden border rounded">

//         <div className="h-[60vh] overflow-y-auto">

//           <table className="w-full text-xs table-fixed">

//             {/* Header */}
//             <thead className="sticky top-0 bg-gray-100 z-10">
//               <tr className="text-gray-600">
//                 <th className="border px-3 py-3 w-[60px]">NO</th>
//                 <th className="border px-3 py-3 w-[180px]">NAME</th>
//                 <th className="border px-3 py-3 w-[160px]">PLACE</th>
//                 <th className="border px-3 py-3 w-[140px]">DATE</th>
//                 <th className="border px-3 py-3 w-[140px]">ACTION</th>
//               </tr>
//             </thead>

//             {/* Body */}
//             <tbody>
//               {filtered.length === 0 ? (
//                 <tr>
//                   <td colSpan="5" className="text-center py-4 text-gray-500">
//                     No data found
//                   </td>
//                 </tr>
//               ) : (
//                 filtered.map((item, index) => {
//                   const isEditing = editId === item.id;

//                   return (
//                     <tr key={item.id} className="hover:bg-gray-50">

//                       <td className="border px-3 py-3 text-center">
//                         {index + 1}
//                       </td>

//                       {/* Name */}
//                       <td className="border px-3 py-3 text-center truncate">
//                         {isEditing ? (
//                           <input
//                             value={item.name}
//                             onChange={(e) =>
//                               handleChange(item.id, "name", e.target.value)
//                             }
//                             className="w-full bg-transparent outline-none border-none text-center"
//                           />
//                         ) : (
//                           item.name
//                         )}
//                       </td>

//                       {/* Place */}
//                       <td className="border px-3 py-3 text-center truncate">
//                         {isEditing ? (
//                           <input
//                             value={item.place}
//                             onChange={(e) =>
//                               handleChange(item.id, "place", e.target.value)
//                             }
//                             className="w-full bg-transparent outline-none border-none text-center"
//                           />
//                         ) : (
//                           item.place
//                         )}
//                       </td>

//                       {/* Date */}
//                       <td className="border px-3 py-3 text-center">
//                         {item.date}
//                       </td>

//                       {/* Actions */}
//                       <td className="border px-3 py-2 text-center">
//                         <div className="flex justify-center gap-3">

//                           {isEditing ? (
//                             <button
//                               onClick={handleSave}
//                               className="text-xs bg-green-600 text-white px-3 py-1 rounded"
//                             >
//                               Save
//                             </button>
//                           ) : (
//                             <button
//                               onClick={() => setEditId(item.id)}
//                               className="text-yellow-600 hover:text-yellow-700"
//                             >
//                               <FiEdit size={14} />
//                             </button>
//                           )}

//                           <button
//                             onClick={() => handleDelete(item.id)}
//                             className="text-red-500 hover:text-red-700"
//                           >
//                             <FiTrash2 size={14} />
//                           </button>

//                         </div>
//                       </td>

//                     </tr>
//                   );
//                 })
//               )}
//             </tbody>

//           </table>

//         </div>
//       </div>

//     </div>
//   );
// }

// import { useState } from "react";
// import { FiEdit, FiTrash2, FiRefreshCw, FiSearch } from "react-icons/fi";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function PrayerRequestsAdmin() {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       name: "John Samuel",
//       place: "Chennai",
//       date: "2026-04-27",
//     },
//     {
//       id: 2,
//       name: "Mary",
//       place: "London",
//       date: "2026-04-25",
//     },
//   ]);

//   const [editId, setEditId] = useState(null);
//   const [search, setSearch] = useState("");

//   // 🔄 Refresh (UI only)
//   const handleRefresh = () => {
//     toast.success("Refreshed successfully");
//   };

//   // ✏ Edit change
//   const handleChange = (id, field, value) => {
//     setData((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, [field]: value } : item
//       )
//     );
//   };

//   // 💾 Save
//   const handleSave = () => {
//     setEditId(null);
//     toast.success("Updated successfully");
//   };

//   // 🗑 Delete
//   const handleDelete = (id) => {
//     setData((prev) => prev.filter((item) => item.id !== id));
//     toast.success("Deleted successfully");
//   };

//   // 🔍 Search filter
//   const filtered = data.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="h-full flex flex-col bg-gray-50">
//       <ToastContainer position="top-right" autoClose={2000} />

//       {/* Header Section */}
//       <div className="bg-white border-b border-gray-200 px-6 py-4">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-2xl font-semibold text-gray-800">Prayer Requests</h1>
//             <p className="text-sm text-gray-500 mt-1">Manage and monitor prayer requests</p>
//           </div>
          
//           <div className="flex items-center gap-3">
//             <button
//               onClick={handleRefresh}
//               className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
//             >
//               <FiRefreshCw size={16} />
//               Refresh
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Search and Filter Bar */}
//       <div className="px-6 py-4 bg-white border-b border-gray-200">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <div className="relative">
//               <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
//               <input
//                 type="text"
//                 placeholder="Search by name..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
//               />
//             </div>
//             <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg">
//               <span className="text-xs font-medium text-gray-600">Total:</span>
//               <span className="text-sm font-semibold text-gray-800">{data.length}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className="flex-1 overflow-hidden px-6 pb-6">
//         <div className="h-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//           <div className="h-full overflow-auto">
//             <table className="w-full">
//               {/* Header */}
//               <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
//                     S.No
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Name
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Place
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
//                     Date
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>

//               {/* Body */}
//               <tbody className="divide-y divide-gray-200">
//                 {filtered.length === 0 ? (
//                   <tr>
//                     <td colSpan="5" className="px-6 py-12 text-center">
//                       <div className="flex flex-col items-center gap-2">
//                         <p className="text-gray-400 text-sm">No prayer requests found</p>
//                         <p className="text-gray-300 text-xs">Try adjusting your search</p>
//                       </div>
//                     </td>
//                   </tr>
//                 ) : (
//                   filtered.map((item, index) => {
//                     const isEditing = editId === item.id;

//                     return (
//                       <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
//                         {/* Serial Number */}
//                         <td className="px-6 py-3 text-sm text-gray-500">
//                           {index + 1}
//                         </td>

//                         {/* Name */}
//                         <td className="px-6 py-3">
//                           {isEditing ? (
//                             <input
//                               value={item.name}
//                               onChange={(e) =>
//                                 handleChange(item.id, "name", e.target.value)
//                               }
//                               className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                               autoFocus
//                             />
//                           ) : (
//                             <span className="text-sm font-medium text-gray-900">
//                               {item.name}
//                             </span>
//                           )}
//                         </td>

//                         {/* Place */}
//                         <td className="px-6 py-3">
//                           {isEditing ? (
//                             <input
//                               value={item.place}
//                               onChange={(e) =>
//                                 handleChange(item.id, "place", e.target.value)
//                               }
//                               className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             />
//                           ) : (
//                             <span className="text-sm text-gray-700">
//                               {item.place}
//                             </span>
//                           )}
//                         </td>

//                         {/* Date */}
//                         <td className="px-6 py-3">
//                           <span className="text-sm text-gray-600">
//                             {new Date(item.date).toLocaleDateString('en-US', {
//                               year: 'numeric',
//                               month: 'short',
//                               day: 'numeric'
//                             })}
//                           </span>
//                         </td>

//                         {/* Actions */}
//                         <td className="px-6 py-3">
//                           <div className="flex items-center gap-2">
//                             {isEditing ? (
//                               <button
//                                 onClick={handleSave}
//                                 className="px-3 py-1 text-xs font-medium bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
//                               >
//                                 Save
//                               </button>
//                             ) : (
//                               <button
//                                 onClick={() => setEditId(item.id)}
//                                 className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
//                                 title="Edit"
//                               >
//                                 <FiEdit size={16} />
//                               </button>
//                             )}
                            
//                             <button
//                               onClick={() => handleDelete(item.id)}
//                               className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
//                               title="Delete"
//                             >
//                               <FiTrash2 size={16} />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { FiEdit, FiTrash2, FiRefreshCw, FiSearch } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PrayerRequestsAdmin() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Samuel",
      place: "Chennai",
      reason:"health prayer",
      date: "2026-04-27",
    },
    {
      id: 2,
      name: "Mary",
      place: "London",
      date: "2026-04-25",
    },
    {
      id: 2,
      name: "Mary",
      place: "London",
      date: "2026-04-25",
    },
    {
      id: 2,
      name: "Mary",
      place: "London",
      date: "2026-04-25",
    },
    {
      id: 2,
      name: "Mary",
      place: "London",
      date: "2026-04-25",
    },
    {
      id: 2,
      name: "Mary",
      place: "London",
      date: "2026-04-25",
    },
    {
      id: 2,
      name: "Mary",
      place: "London",
      date: "2026-04-25",
    },
    {
      id: 2,
      name: "Mary",
      place: "London",
      date: "2026-04-25",
    },
    {
      id: 2,
      name: "Mary",
      place: "London",
      date: "2026-04-25",
    },
    {
      id: 2,
      name: "Mary",
      place: "London",
      date: "2026-04-25",
    },
    {
      id: 2,
      name: "Mary",
      place: "London",
      date: "2026-04-25",
    },
    {
      id: 2,
      name: "Mary",
      place: "London",
      date: "2026-04-25",
    },
    {
      id: 2,
      name: "Mary",
      place: "London",
      date: "2026-04-25",
    },
  ]);

  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const handleRefresh = () => {
    toast.success("Refreshed successfully");
  };

  const handleChange = (id, field, value) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleSave = () => {
    setEditId(null);
    toast.success("Updated successfully");
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
    toast.error("Deleted successfully");
  };

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full p-4">

      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      {/* 🔹 Top Bar */}
      {/* <div className="flex justify-between items-center mb-3">

        LEFT
        <div className="flex items-center gap-3">

          <button
            onClick={handleRefresh}
            className="flex items-center gap-1 text-xs px-3 py-1 border rounded hover:bg-gray-100"
          >
            <FiRefreshCw size={13} />
            Refresh
          </button>

          <span className="text-xs text-gray-600">
            Total: {data.length}
          </span>

        </div>

        RIGHT SEARCH
        <div className="relative">
          <FiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-7 pr-3 py-1 text-xs border rounded outline-none w-48"
          />
        </div>

      </div> */}
      <div className="flex justify-between items-center mb-4 pb-2">
  
  {/* LEFT SECTION */}
  <div className="flex items-center gap-3">
    {/* Refresh Button */}
    <button
      onClick={handleRefresh}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
    >
      <FiRefreshCw size={14} className="text-gray-600" />
      <span className="text-gray-700 font-medium">Refresh</span>
    </button>

    {/* Total Count Badge */}
    {/* <div className="flex items-center gap-2">
      <div className="h-4 w-px bg-gray-300"></div>
      <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-100 rounded-md">
        <span className="text-xs text-gray-500">Total:</span>
        <span className="text-sm font-semibold text-gray-800">{data.length}</span>
      </div>
    </div> */}
    <div className="flex items-center gap-2">
  <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
    <span className="text-xs font-medium text-yellow-700">Prayer Requests</span>
    <div className="w-px h-4 bg-yellow-200 mx-1"></div>
    <span className="text-lg font-bold text-yellow-800">{data.length}</span>
  </div>
</div>
  </div>

  {/* RIGHT SEARCH SECTION */}
  <div className="relative">
    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
    <input
      type="text"
      placeholder="Search by name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="pl-9 pr-3 py-1.5 text-sm border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 w-64 placeholder:text-gray-400"
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
      <div className="bg-white flex-1 overflow-hidden  rounded">

        {/* <div className="h-[72vh] overflow-y-auto hide-scrollbar"> */}
         <div
  className="h-[72vh] overflow-y-auto"
  style={{
    scrollbarWidth: "none",       // Firefox
    msOverflowStyle: "none",      // IE
  }}
>
            

          <table className="w-full text-xs table-fixed">

            {/* Header */}
            <thead className="sticky top-0 bg-gray-100 z-10">
              <tr className="text-gray-600">
                <th className="border border-gray-300 px-3 py-3 w-[60px] text-center">NO</th>
                <th className="border border-gray-300 px-3 py-3 w-[180px] text-center">NAME</th>
                <th className="border border-gray-300 px-3 py-3 w-[160px] text-center">PLACE</th>
                <th className="border border-gray-300 px-3 py-3 w-[200px] text-center">REASON</th>
                <th className="border border-gray-300 px-3 py-3 w-[140px] text-center">DATE</th>
                <th className="border border-gray-300 px-3 py-3 w-[120px] text-center">ACTION</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    No data found
                  </td>
                </tr>
              ) : (
                filtered.map((item, index) => {
                  const isEditing = editId === item.id;

                  return (
                    <tr key={item.id} className="hover:bg-gray-50">

                      <td className="border border-gray-200 px-3 py-3 text-center">
                        {index + 1}
                      </td>

                      {/* Name */}
                      <td
                        title={item.name}
                        className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
                      >
                        {isEditing ? (
                          <input
                            value={item.name}
                            onChange={(e) =>
                              handleChange(item.id, "name", e.target.value)
                            }
                            className="w-full bg-transparent outline-none border-none text-center"
                          />
                        ) : (
                          item.name
                        )}
                      </td>

                      {/* Place */}
                      <td
                        title={item.place}
                        className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
                      >
                        {isEditing ? (
                          <input
                            value={item.place}
                            onChange={(e) =>
                              handleChange(item.id, "place", e.target.value)
                            }
                            className="w-full bg-transparent outline-none border-none text-center"
                          />
                        ) : (
                          item.place
                        )}
                      </td>
                      <td
  title={item.reason}
  className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
>
  {isEditing ? (
    <input
      value={item.reason}
      onChange={(e) =>
        handleChange(item.id, "reason", e.target.value)
      }
      className="w-full bg-transparent outline-none border-none text-center"
    />
  ) : (
    item.reason
  )}
</td>

                      {/* Date */}
                      <td className="border border-gray-200 px-3 py-3 text-center">
                        {item.date}
                      </td>

                      {/* Actions */}
                      <td className="border border-gray-200 px-3 py-2 text-center">
                        <div className="flex justify-center gap-3">

                          {isEditing ? (
                            <button
                              onClick={handleSave}
                              className="text-xs bg-green-600 text-white px-3 py-1 rounded"
                            >
                              Save
                            </button>
                          ) : (
                            <button
                              onClick={() => setEditId(item.id)}
                              className="text-yellow-600"
                            >
                              <FiEdit size={14} />
                            </button>
                          )}

                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-500"
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

    </div>
  );
}