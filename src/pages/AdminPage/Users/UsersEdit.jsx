// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// export default function UserEdit() {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     dob: "",
//     anniversary: "",
//     gender: "Male",
//     address: "",
//   });

//   // 🔥 LOAD DATA
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("users")) || [];

//     const found = data.find((u) => u.id === Number(id));

//     if (found) {
//       setForm({
//         name: found.name || "",
//         email: found.email || "",
//         phone: found.phone || "",
//         dob: found.dob || "",
//         anniversary: found.anniversary || "",
//         gender: found.gender || "Male",
//         address: found.address || "",
//       });
//     }
//   }, [id]);

//   const handleChange = (field, value) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//   };

//   // 🔥 UPDATE DATA
//   const handleSubmit = () => {
//     const data = JSON.parse(localStorage.getItem("users")) || [];

//     const updated = data.map((u) =>
//       u.id === Number(id)
//         ? {
//             ...form,
//             id: Number(id),
//           }
//         : u
//     );

//     localStorage.setItem("users", JSON.stringify(updated));

//     navigate("/admin/users");
//   };

//   return (
//     <div className="min-h-screen p-6">
//       <div className="max-w-4xl mx-auto">
        
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          
//           {/* Form Header */}
//           <div className="bg-yellow-100 px-6 py-3 border-b border-gray-200">
//             <h2 className="text-base font-semibold text-gray-800">
//               Edit User
//             </h2>
//           </div>

//           {/* Form Body */}
//           <div className="p-6">
//             <div className="grid grid-cols-2 gap-4">

//               {/* NAME */}
//               <div className="col-span-2 sm:col-span-1">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Full Name
//                 </label>
//                 <input
//                   placeholder="Full Name"
//                   value={form.name}
//                   onChange={(e) => handleChange("name", e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               {/* EMAIL */}
//               <div className="col-span-2 sm:col-span-1">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   value={form.email}
//                   onChange={(e) => handleChange("email", e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               {/* PHONE */}
//               <div className="col-span-2 sm:col-span-1">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Phone Number
//                 </label>
//                 <input
//                   placeholder="Phone Number"
//                   value={form.phone}
//                   onChange={(e) => handleChange("phone", e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               {/* GENDER */}
//               <div className="col-span-2 sm:col-span-1">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Gender
//                 </label>
//                 <select
//                   value={form.gender}
//                   onChange={(e) => handleChange("gender", e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
//                 >
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               {/* DOB */}
//               <div className="col-span-2 sm:col-span-1">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Date of Birth
//                 </label>
//                 <input
//                   type="date"
//                   value={form.dob}
//                   onChange={(e) => handleChange("dob", e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               {/* ANNIVERSARY */}
//               <div className="col-span-2 sm:col-span-1">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Anniversary Date
//                 </label>
//                 <input
//                   type="date"
//                   placeholder="Anniversary Date"
//                   value={form.anniversary}
//                   onChange={(e) => handleChange("anniversary", e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               {/* ADDRESS */}
//               <div className="col-span-2">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Address
//                 </label>
//                 <textarea
//                   placeholder="Address"
//                   value={form.address}
//                   onChange={(e) => handleChange("address", e.target.value)}
//                   rows="3"
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                 />
//               </div>

//             </div>
//           </div>

//           {/* Form Footer - BUTTONS */}
//           <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex justify-end gap-3">
//             <button
//               onClick={() => navigate("/admin/users")}
//               className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSubmit}
//               className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors shadow-sm"
//             >
//               Update
//             </button>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// export default function UserEdit() {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     dob: "",
//     anniversary: "",
//     gender: "Male",
//     address: "",
//   });

//   // 🔥 LOAD DATA FROM LOCALSTORAGE
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("users")) || [];
    
//     // Convert id to number since localStorage stores it as number
//     const found = data.find((u) => u.id === Number(id));

//     if (found) {
//       setForm({
//         name: found.name || "",
//         email: found.email || "",
//         phone: found.phone || "",
//         dob: found.dob || "",
//         anniversary: found.anniversary || "",
//         gender: found.gender || "Male",
//         address: found.address || "",
//       });
//     } else {
//       // If user not found, redirect back to users list
//       alert("User not found");
//       navigate("/admin/users");
//     }
//   }, [id, navigate]);

//   const handleChange = (field, value) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//   };

//   // 🔥 UPDATE DATA
//   const handleSubmit = () => {
//     // Validate required fields
//     if (!form.name || !form.email) {
//       alert("Please fill all required fields (Name and Email)");
//       return;
//     }

//     const data = JSON.parse(localStorage.getItem("users")) || [];

//     const updated = data.map((u) =>
//       u.id === Number(id)
//         ? {
//             ...form,
//             id: Number(id),
//           }
//         : u
//     );

//     localStorage.setItem("users", JSON.stringify(updated));

//     // Show success message
//     alert("User updated successfully");
    
//     // Navigate back to users list
//     navigate("/admin/users");
//   };

//   return (
//     <div className="min-h-screen p-6">
//       <div className="max-w-4xl mx-auto">
        
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          
//           {/* Form Header */}
//           <div className="bg-yellow-100 px-6 py-3 border-b border-gray-200">
//             <h2 className="text-base font-semibold text-gray-800">
//               Edit User
//             </h2>
//           </div>

//           {/* Form Body */}
//           <div className="p-6">
//             <div className="grid grid-cols-2 gap-4">

//               {/* NAME */}
//               <div className="col-span-2 sm:col-span-1">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Full Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   placeholder="Full Name"
//                   value={form.name}
//                   onChange={(e) => handleChange("name", e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               {/* EMAIL */}
//               <div className="col-span-2 sm:col-span-1">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Email Address <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   value={form.email}
//                   onChange={(e) => handleChange("email", e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               {/* PHONE */}
//               <div className="col-span-2 sm:col-span-1">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Phone Number
//                 </label>
//                 <input
//                   placeholder="Phone Number"
//                   value={form.phone}
//                   onChange={(e) => handleChange("phone", e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               {/* GENDER */}
//               <div className="col-span-2 sm:col-span-1">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Gender
//                 </label>
//                 <select
//                   value={form.gender}
//                   onChange={(e) => handleChange("gender", e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
//                 >
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               {/* DOB */}
//               <div className="col-span-2 sm:col-span-1">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Date of Birth
//                 </label>
//                 <input
//                   type="date"
//                   value={form.dob}
//                   onChange={(e) => handleChange("dob", e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               {/* ANNIVERSARY */}
//               <div className="col-span-2 sm:col-span-1">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Anniversary Date
//                 </label>
//                 <input
//                   type="date"
//                   value={form.anniversary}
//                   onChange={(e) => handleChange("anniversary", e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               {/* ADDRESS */}
//               <div className="col-span-2">
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Address
//                 </label>
//                 <textarea
//                   placeholder="Address"
//                   value={form.address}
//                   onChange={(e) => handleChange("address", e.target.value)}
//                   rows="3"
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                 />
//               </div>

//             </div>
//           </div>

//           {/* Form Footer - BUTTONS */}
//           <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex justify-end gap-3">
//             <button
//               onClick={() => navigate("/admin/users")}
//               className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSubmit}
//               className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors shadow-sm"
//             >
//               Update User
//             </button>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

export default function UserEditModal({ isOpen, onClose, onSave, data }) {
  const [form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    dob: "",
    anniversary: "",
    gender: "Male",
    address: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        id: data.id,
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        dob: data.dob || "",
        anniversary: data.anniversary || "",
        gender: data.gender || "Male",
        address: data.address || "",
      });
    }
  }, [data]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email) {
      alert("Please fill Name and Email");
      return;
    }
    onSave(form);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 shadow-xl">
        
        {/* Modal Header */}
        <div className="bg-yellow-500 px-6 py-4 rounded-t-lg flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">Edit User</h3>
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
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* EMAIL */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* PHONE */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* GENDER */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                value={form.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent bg-white"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* DOB */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                value={form.dob}
                onChange={(e) => handleChange("dob", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* ANNIVERSARY */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Anniversary Date
              </label>
              <input
                type="date"
                value={form.anniversary}
                onChange={(e) => handleChange("anniversary", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* ADDRESS */}
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Address
              </label>
              <textarea
                placeholder="Address"
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent resize-none"
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
            Update User
          </button>
        </div>
      </div>
    </div>
  );
}