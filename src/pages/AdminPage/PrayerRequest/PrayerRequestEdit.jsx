// import React, { useEffect } from "react";
// import { FiX } from "react-icons/fi";

// export default function PrayerRequestEditModal({ isOpen, onClose, onSave, data }) {
//   const [form, setForm] = React.useState({
//     name: "",
//     place: "",
//     reason: "",
//     date: "",
//   });

//   useEffect(() => {
//     if (data) {
//       setForm({
//         name: data.name || "",
//         place: data.place || "",
//         reason: data.reason || "",
//         date: data.date || "",
//       });
//     }
//   }, [data]);

//   const handleChange = (field, value) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = () => {
//     if (!form.name || !form.place) {
//       alert("Please fill Name and Place");
//       return;
//     }
//     onSave(form);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg w-full max-w-2xl mx-4 shadow-xl">
        
//         {/* Modal Header */}
//         <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4 rounded-t-lg flex justify-between items-center">
//           <h3 className="text-lg font-semibold text-white">Edit Prayer Request</h3>
//           <button
//             onClick={onClose}
//             className="text-white hover:text-gray-200 transition-colors"
//           >
//             <FiX size={20} />
//           </button>
//         </div>
        
//         {/* Modal Body */}
//         <div className="p-6">
//           <div className="grid grid-cols-2 gap-4">
            
//             {/* NAME */}
//             <div className="col-span-2 sm:col-span-1">
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 value={form.name}
//                 onChange={(e) => handleChange("name", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             {/* PLACE */}
//             <div className="col-span-2 sm:col-span-1">
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Place <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Place/Location"
//                 value={form.place}
//                 onChange={(e) => handleChange("place", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             {/* REASON */}
//             <div className="col-span-2">
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Prayer Reason
//               </label>
//               <textarea
//                 placeholder="Please describe the prayer request..."
//                 value={form.reason}
//                 onChange={(e) => handleChange("reason", e.target.value)}
//                 rows="4"
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//               />
//             </div>

//             {/* DATE */}
//             <div className="col-span-2 sm:col-span-1">
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Date
//               </label>
//               <input
//                 type="date"
//                 value={form.date}
//                 onChange={(e) => handleChange("date", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//           </div>
//         </div>

//         {/* Modal Footer */}
//         <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end gap-3">
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
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";

// export default function PrayerRequestEdit({ data, onClose, onSave }) {
//   const [form, setForm] = useState({
//     name: "",
//     place: "",
//     reason: "",
//   });

//   useEffect(() => {
//     if (data) setForm(data);
//   }, [data]);

//   const handleChange = (field, value) => {
//     setForm({ ...form, [field]: value });
//   };

//   const handleSubmit = () => {
//     onSave(form);
//     onClose();
//   };

//   return (
//     <div>

//       <h2 className="text-sm font-semibold mb-3">
//         Edit Prayer
//       </h2>

//       <div className="space-y-2">

//         <input
//           value={form.name}
//           onChange={(e) => handleChange("name", e.target.value)}
//           className="w-full border px-2 py-1 text-xs"
//         />

//         <input
//           value={form.place}
//           onChange={(e) => handleChange("place", e.target.value)}
//           className="w-full border px-2 py-1 text-xs"
//         />

//         <input
//           value={form.reason || ""}
//           onChange={(e) => handleChange("reason", e.target.value)}
//           className="w-full border px-2 py-1 text-xs"
//         />

//       </div>

//       <div className="flex justify-end gap-2 mt-3">

//         <button
//           onClick={onClose}
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

import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

export default function PrayerRequestEditModal({ isOpen, onClose, onSave, data }) {
  const [form, setForm] = useState({
    id: null,
    name: "",
    place: "",
    reason: "",
    date: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        id: data.id,
        name: data.name || "",
        place: data.place || "",
        reason: data.reason || "",
        date: data.date || "",
      });
    }
  }, [data]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.place) {
      alert("Please fill Name and Place");
      return;
    }
    onSave(form);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-xl mx-4 shadow-xl">
        
        {/* Modal Header */}
        <div className="bg-yellow-500 px-6 py-4 rounded-t-lg flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">Edit Prayer Request</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            
            {/* NAME */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* PLACE */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Place <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Place/Location"
                value={form.place}
                onChange={(e) => handleChange("place", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* REASON */}
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Prayer Reason
              </label>
              <textarea
                placeholder="Please describe the prayer request..."
                value={form.reason}
                onChange={(e) => handleChange("reason", e.target.value)}
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent resize-none"
              />
            </div>

            {/* DATE */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => handleChange("date", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end gap-3">
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
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}