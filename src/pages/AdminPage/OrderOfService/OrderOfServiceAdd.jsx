// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function OrderOfServiceAdd() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     time: "",
//     location: "",
//     requiresFather: false,
//     fatherName: "",
//   });

//   const handleChange = (field, value) => {
//     setForm({ ...form, [field]: value });
//   };

//   const handleSubmit = () => {
//     console.log("ADD:", form);
//     navigate("/admin/services");
//   };

//   return (
//     <div className="p-4 max-w-md">

//       <h2 className="text-sm font-semibold mb-3">Add Service</h2>

//       <div className="space-y-2">

//         <input
//           placeholder="Service Name"
//           value={form.name}
//           onChange={(e) => handleChange("name", e.target.value)}
//           className="w-full border px-2 py-1 text-xs"
//         />

//         <input
//           placeholder="Time"
//           value={form.time}
//           onChange={(e) => handleChange("time", e.target.value)}
//           className="w-full border px-2 py-1 text-xs"
//         />

//         <input
//           placeholder="Location"
//           value={form.location}
//           onChange={(e) => handleChange("location", e.target.value)}
//           className="w-full border px-2 py-1 text-xs"
//         />

//         <label className="text-xs flex items-center gap-1">
//           <input
//             type="checkbox"
//             checked={form.requiresFather}
//             onChange={(e) =>
//               handleChange("requiresFather", e.target.checked)
//             }
//           />
//           Needs Father Name
//         </label>

//         {form.requiresFather && (
//           <input
//             placeholder="Father Name"
//             value={form.fatherName}
//             onChange={(e) =>
//               handleChange("fatherName", e.target.value)
//             }
//             className="w-full border px-2 py-1 text-xs"
//           />
//         )}

//       </div>

//       <div className="flex gap-2 mt-3">
//         <button
//           onClick={() => navigate("/admin/services")}
//           className="text-xs border px-3 py-1 rounded"
//         >
//           Cancel
//         </button>

//         <button
//           onClick={handleSubmit}
//           className="text-xs bg-green-600 text-white px-3 py-1 rounded"
//         >
//           Save
//         </button>
//       </div>

//     </div>
//   );
// }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function OrderOfServiceAdd() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     day: "sunday",
//     name: "",
//     time: "",
//     location: "",
//     description: "",
//     requiresFather: false,
//     fatherName: "",
//   });

//   const handleChange = (field, value) => {
//     setForm({ ...form, [field]: value });
//   };

//   const handleSubmit = () => {
//     if (!form.name || !form.time || !form.location) {
//       alert("Please fill required fields");
//       return;
//     }

//     console.log("ADD:", form);

//     // 👉 later: save to Firebase

//     navigate("/admin/services");
//   };

//   return (
//     <div className="p-4 max-w-md">

//       <h2 className="text-sm font-semibold mb-3">
//         Add Service
//       </h2>

//       <div className="space-y-2">

//         {/* 🔥 DAY SELECT (IMPORTANT) */}
//         <select
//           value={form.day}
//           onChange={(e) => handleChange("day", e.target.value)}
//           className="w-full border px-2 py-1 text-xs"
//         >
//           <option value="sunday">Sunday</option>
//           <option value="monday">Monday</option>
//           <option value="tuesday">Tuesday</option>
//           <option value="wednesday">Wednesday</option>
//           <option value="thursday">Thursday</option>
//           <option value="friday">Friday</option>
//           <option value="saturday">Saturday</option>
//         </select>

//         {/* SERVICE NAME */}
//         <input
//           placeholder="Service Name"
//           value={form.name}
//           onChange={(e) => handleChange("name", e.target.value)}
//           className="w-full border px-2 py-1 text-xs"
//         />

//         {/* TIME */}
//         <input
//           placeholder="Time (08:30 - 10:30)"
//           value={form.time}
//           onChange={(e) => handleChange("time", e.target.value)}
//           className="w-full border px-2 py-1 text-xs"
//         />

//         {/* LOCATION */}
//         <input
//           placeholder="Location"
//           value={form.location}
//           onChange={(e) => handleChange("location", e.target.value)}
//           className="w-full border px-2 py-1 text-xs"
//         />

//         {/* DESCRIPTION */}
//         <input
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) => handleChange("description", e.target.value)}
//           className="w-full border px-2 py-1 text-xs"
//         />

//         {/* FATHER TOGGLE */}
//         <label className="text-xs flex items-center gap-1">
//           <input
//             type="checkbox"
//             checked={form.requiresFather}
//             onChange={(e) =>
//               handleChange("requiresFather", e.target.checked)
//             }
//           />
//           Needs Father Name
//         </label>

//         {/* FATHER NAME */}
//         {form.requiresFather && (
//           <input
//             placeholder="Father Name"
//             value={form.fatherName}
//             onChange={(e) =>
//               handleChange("fatherName", e.target.value)
//             }
//             className="w-full border px-2 py-1 text-xs"
//           />
//         )}

//       </div>

//       {/* ACTION BUTTONS */}
//       <div className="flex gap-2 mt-3">

//         <button
//           onClick={() => navigate("/admin/services")}
//           className="text-xs border px-3 py-1 rounded"
//         >
//           Cancel
//         </button>

//         <button
//           onClick={handleSubmit}
//           className="text-xs bg-green-600 text-white px-3 py-1 rounded"
//         >
//           Save
//         </button>

//       </div>

//     </div>
//   );
// }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function OrderOfServiceAdd() {
//   const navigate = useNavigate();

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

//   const handleChange = (field, value) => {
//     setForm({ ...form, [field]: value });
//   };

//   // 🔥 Convert 24hr → AM/PM
//   const formatTime = (time) => {
//     if (!time) return "";

//     const [hour, min] = time.split(":");
//     let h = parseInt(hour);
//     const ampm = h >= 12 ? "PM" : "AM";

//     h = h % 12 || 12;

//     return `${h}:${min} ${ampm}`;
//   };

//   // const handleSubmit = () => {
//   //   if (!form.name || !form.startTime || !form.endTime) {
//   //     alert("Fill required fields");
//   //     return;
//   //   }

//   //   const finalData = {
//   //     ...form,
//   //     displayTime: `${formatTime(form.startTime)} - ${formatTime(form.endTime)}`
//   //   };

//   //   console.log("SAVE:", finalData);

//   //   navigate("/admin/services");
//   // };


//  const handleSubmit = () => {
//   if (!form.name || !form.startTime || !form.endTime) {
//     alert("Fill required fields");
//     return;
//   }

//   const newService = {
//     id: Date.now(),
//     day: form.day.toLowerCase(), // 🔥 IMPORTANT
//     name: form.name,
//     time: `${formatTime(form.startTime)} - ${formatTime(form.endTime)}`,
//     location: form.location,
//     description: form.description,
//     requiresFather: form.requiresFather,
//     fatherName: form.fatherName,
//   };

//   const existing =
//     JSON.parse(localStorage.getItem("services")) || [];

//   const updated = [...existing, newService];

//   localStorage.setItem("services", JSON.stringify(updated));

//   navigate("/admin/services");
// };

//   return (
//     <div className="p-4 max-w-md">

//       <h2 className="text-sm font-semibold mb-3">
//         Add Service
//       </h2>

//       <div className="space-y-2">

//         {/* DAY */}
//         <select
//           value={form.day}
//           onChange={(e) => handleChange("day", e.target.value)}
//           className="w-full border px-2 py-1 text-xs"
//         >
//           <option>sunday</option>
//           <option>monday</option>
//           <option>tuesday</option>
//           <option>wednesday</option>
//           <option>thursday</option>
//           <option>friday</option>
//           <option>saturday</option>
//         </select>

//         {/* NAME */}
//         <input
//           placeholder="Service Name"
//           value={form.name}
//           onChange={(e) => handleChange("name", e.target.value)}
//           className="w-full border px-2 py-1 text-xs"
//         />

//         {/* 🔥 TIME PICKERS */}
//         <div className="flex gap-2">

//           <input
//             type="time"
//             value={form.startTime}
//             onChange={(e) =>
//               handleChange("startTime", e.target.value)
//             }
//             className="w-full border px-2 py-1 text-xs"
//           />

//           <input
//             type="time"
//             value={form.endTime}
//             onChange={(e) =>
//               handleChange("endTime", e.target.value)
//             }
//             className="w-full border px-2 py-1 text-xs"
//           />

//         </div>

//         {/* 🔥 DISPLAY AM/PM */}
//         {form.startTime && form.endTime && (
//           <div className="text-xs text-gray-500">
//             {formatTime(form.startTime)} - {formatTime(form.endTime)}
//           </div>
//         )}

//         {/* LOCATION */}
//         <input
//           placeholder="Location"
//           value={form.location}
//           onChange={(e) => handleChange("location", e.target.value)}
//           className="w-full border px-2 py-1 text-xs"
//         />

//         {/* DESCRIPTION */}
//         <input
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) => handleChange("description", e.target.value)}
//           className="w-full border px-2 py-1 text-xs"
//         />

//         {/* FATHER */}
//         <label className="text-xs flex items-center gap-1">
//           <input
//             type="checkbox"
//             checked={form.requiresFather}
//             onChange={(e) =>
//               handleChange("requiresFather", e.target.checked)
//             }
//           />
//           Needs Father Name
//         </label>

//         {form.requiresFather && (
//           <input
//             placeholder="Father Name"
//             value={form.fatherName}
//             onChange={(e) =>
//               handleChange("fatherName", e.target.value)
//             }
//             className="w-full border px-2 py-1 text-xs"
//           />
//         )}

//       </div>

//       {/* BUTTONS */}
//       <div className="flex gap-2 mt-3">

//         <button
//           onClick={() => navigate("/admin/services")}
//           className="text-xs border px-3 py-1 rounded"
//         >
//           Cancel
//         </button>

//         <button
//           onClick={handleSubmit}
//           className="text-xs bg-green-600 text-white px-3 py-1 rounded"
//         >
//           Save
//         </button>

//       </div>

//     </div>
//   );
// }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function OrderOfServiceAdd() {
//   const navigate = useNavigate();

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

//   const handleChange = (field, value) => {
//     setForm({ ...form, [field]: value });
//   };

//   // 🔥 Convert 24hr → AM/PM
//   const formatTime = (time) => {
//     if (!time) return "";

//     const [hour, min] = time.split(":");
//     let h = parseInt(hour);
//     const ampm = h >= 12 ? "PM" : "AM";

//     h = h % 12 || 12;

//     return `${h}:${min} ${ampm}`;
//   };

//   const handleSubmit = () => {
//     if (!form.name || !form.startTime || !form.endTime) {
//       alert("Fill required fields");
//       return;
//     }

//     const newService = {
//       id: Date.now(),
//       day: form.day.toLowerCase(), // 🔥 IMPORTANT
//       name: form.name,
//       time: `${formatTime(form.startTime)} - ${formatTime(form.endTime)}`,
//       location: form.location,
//       description: form.description,
//       requiresFather: form.requiresFather,
//       fatherName: form.fatherName,
//     };

//     const existing =
//       JSON.parse(localStorage.getItem("services")) || [];

//     const updated = [...existing, newService];

//     localStorage.setItem("services", JSON.stringify(updated));

//     navigate("/admin/services");
//   };

//   return (
//     <div className="min-h-screen  p-6">
//       <div className="max-w-4xl mx-auto">
        
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          
//           {/* Form Header */}
//           <div className="bg-yellow-100 px-6 py-3 border-b border-gray-200">
//             <h2 className="text-base font-semibold text-gray-800">
//               Add Service
//             </h2>
//           </div>

//           {/* Form Body */}
//           <div className="p-6">
//             <div className="grid grid-cols-2 gap-4">

//               {/* DAY */}
//               <div className="col-span-2 sm:col-span-1">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Day
//                 </label>
//                 <select
//                   value={form.day}
//                   onChange={(e) => handleChange("day", e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white capitalize"
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

//               {/* NAME */}
//               <div className="col-span-2 sm:col-span-1">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Service Name
//                 </label>
//                 <input
//                   placeholder="Service Name"
//                   value={form.name}
//                   onChange={(e) => handleChange("name", e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               {/* 🔥 TIME PICKERS */}
//               <div className="col-span-2">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Time
//                 </label>
//                 <div className="flex gap-3">
//                   <div className="flex-1">
//                     <input
//                       type="time"
//                       value={form.startTime}
//                       onChange={(e) =>
//                         handleChange("startTime", e.target.value)
//                       }
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
//                     />
//                     <p className="text-xs text-gray-400 mt-1">Start Time</p>
//                   </div>
//                   <div className="flex-1">
//                     <input
//                       type="time"
//                       value={form.endTime}
//                       onChange={(e) =>
//                         handleChange("endTime", e.target.value)
//                       }
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
//                     />
//                     <p className="text-xs text-gray-400 mt-1">End Time</p>
//                   </div>
//                 </div>

//                 {/* 🔥 DISPLAY AM/PM */}
//                 {form.startTime && form.endTime && (
//                   <div className="mt-2 bg-blue-50 rounded-lg px-3 py-2 border border-blue-100">
//                     <span className="text-xs text-blue-700 font-medium">
//                       {formatTime(form.startTime)} - {formatTime(form.endTime)}
//                     </span>
//                   </div>
//                 )}
//               </div>

//               {/* LOCATION */}
//               <div className="col-span-2 sm:col-span-1">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Location
//                 </label>
//                 <input
//                   placeholder="Location"
//                   value={form.location}
//                   onChange={(e) => handleChange("location", e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               {/* DESCRIPTION */}
//               <div className="col-span-2 sm:col-span-1">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Description
//                 </label>
//                 <input
//                   placeholder="Description"
//                   value={form.description}
//                   onChange={(e) => handleChange("description", e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               {/* FATHER */}
//               <div className="col-span-2">
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={form.requiresFather}
//                     onChange={(e) =>
//                       handleChange("requiresFather", e.target.checked)
//                     }
//                     className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                   />
//                   <span className="text-sm text-gray-700">Needs Father Name</span>
//                 </label>

//                 {form.requiresFather && (
//                   <div className="mt-2">
//                     <input
//                       placeholder="Father Name"
//                       value={form.fatherName}
//                       onChange={(e) =>
//                         handleChange("fatherName", e.target.value)
//                       }
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </div>
//                 )}
//               </div>

//             </div>
//           </div>

//           {/* Form Footer - BUTTONS */}
//           <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex justify-end gap-3">
//             <button
//               onClick={() => navigate("/admin/services")}
//               className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSubmit}
//               className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors shadow-sm"
//             >
//               Save
//             </button>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { FiX } from "react-icons/fi";

export default function OrderOfServiceAddModal({ isOpen, onClose, onSave }) {
  const [form, setForm] = useState({
    day: "sunday",
    name: "",
    startTime: "",
    endTime: "",
    location: "",
    description: "",
    requiresFather: false,
    fatherName: "",
  });

  // 🔥 Convert 24hr → AM/PM
  const formatTime = (time) => {
    if (!time) return "";

    const [hour, min] = time.split(":");
    let h = parseInt(hour);
    const ampm = h >= 12 ? "PM" : "AM";

    h = h % 12 || 12;

    return `${h}:${min} ${ampm}`;
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.startTime || !form.endTime) {
      alert("Fill required fields");
      return;
    }

    const newService = {
      id: Date.now(),
      day: form.day.toLowerCase(),
      name: form.name,
      time: `${formatTime(form.startTime)} - ${formatTime(form.endTime)}`,
      location: form.location,
      description: form.description,
      requiresFather: form.requiresFather,
      fatherName: form.fatherName,
    };

    onSave(newService);
    setForm({
      day: "sunday",
      name: "",
      startTime: "",
      endTime: "",
      location: "",
      description: "",
      requiresFather: false,
      fatherName: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="bg-yellow-500 px-6 py-4 rounded-t-lg flex justify-between items-center sticky top-0">
          <h3 className="text-lg font-semibold text-white">Add Service</h3>
          <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
            <FiX size={20} />
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            {/* DAY */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">Day</label>
              <select
                value={form.day}
                onChange={(e) => handleChange("day", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent bg-white capitalize"
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

            {/* NAME */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">Service Name</label>
              <input
                placeholder="Service Name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* TIME PICKERS */}
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Time</label>
              <div className="flex gap-3">
                <div className="flex-1">
                  <input
                    type="time"
                    value={form.startTime}
                    onChange={(e) => handleChange("startTime", e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-400 mt-1">Start Time</p>
                </div>
                <div className="flex-1">
                  <input
                    type="time"
                    value={form.endTime}
                    onChange={(e) => handleChange("endTime", e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-400 mt-1">End Time</p>
                </div>
              </div>

              {form.startTime && form.endTime && (
                <div className="mt-2 bg-blue-50 rounded-lg px-3 py-2 border border-blue-100">
                  <span className="text-xs text-blue-700 font-medium">
                    {formatTime(form.startTime)} - {formatTime(form.endTime)}
                  </span>
                </div>
              )}
            </div>

            {/* LOCATION */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">Location</label>
              <input
                placeholder="Location"
                value={form.location}
                onChange={(e) => handleChange("location", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* DESCRIPTION */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">Description</label>
              <input
                placeholder="Description"
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* FATHER */}
            <div className="col-span-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.requiresFather}
                  onChange={(e) => handleChange("requiresFather", e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-yellow-500"
                />
                <span className="text-sm text-gray-700">Needs Father Name</span>
              </label>

              {form.requiresFather && (
                <div className="mt-2">
                  <input
                    placeholder="Father Name"
                    value={form.fatherName}
                    onChange={(e) => handleChange("fatherName", e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end gap-3 sticky bottom-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors shadow-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}