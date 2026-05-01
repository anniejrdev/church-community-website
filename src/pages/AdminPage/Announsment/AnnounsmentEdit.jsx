// import { useState, useEffect } from "react";
// import { X, Upload } from "lucide-react";

// export default function EventEditModal({ isOpen, onClose, onSave, data }) {
//   const [categories, setCategories] = useState([]);
//   const [formData, setFormData] = useState({
//     id: null,
//     section: "",
//     title: "",
//     description: "",
//     highlight: "",
//     date: "",
//     image: ""
//   });
//   const [imagePreview, setImagePreview] = useState("");

//   // LOAD CATEGORIES
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("eventCategories")) || [];
//     setCategories(data);
//   }, []);

//   // LOAD DATA TO EDIT
//   useEffect(() => {
//     if (data) {
//       setFormData({
//         id: data.id,
//         section: data.section || "",
//         title: data.title || "",
//         description: data.description || "",
//         highlight: data.highlight || "",
//         date: data.date || "",
//         image: data.image || ""
//       });
//       setImagePreview(data.image || "");
//     }
//   }, [data]);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//         setFormData({ ...formData, image: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = () => {
//     if (!formData.section || !formData.title || !formData.description) {
//       alert("Please fill all required fields");
//       return;
//     }

//     onSave(formData);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg w-full max-w-xl mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
        
//         {/* Header */}
//         <div className="bg-yellow-500 px-4 py-2.5 rounded-t-lg flex justify-between items-center sticky top-0">
//           <h3 className="text-sm font-semibold text-white">Edit Event</h3>
//           <button onClick={onClose} className="text-white hover:text-gray-200">
//             <X size={16} />
//           </button>
//         </div>
        
//         {/* Body */}
//         <div className="p-3">
//           {/* IMAGE UPLOAD - MOVED TO TOP */}
//           <div className="mb-3">
//             <label className="block text-xs font-medium text-gray-700 mb-1">
//               Event Image
//             </label>
//             <div className="flex items-center gap-3">
//               <label className="cursor-pointer">
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="hidden"
//                 />
//                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-2 text-center hover:border-yellow-500 transition-colors w-24">
//                   <Upload size={18} className="mx-auto text-gray-400 mb-1" />
//                   <span className="text-[10px] text-gray-500">Change</span>
//                 </div>
//               </label>
//               {imagePreview && (
//                 <div className="relative">
//                   <img src={imagePreview} alt="Preview" className="w-14 h-14 object-cover rounded-lg" />
//                   <button
//                     onClick={() => {
//                       setImagePreview("");
//                       handleChange("image", "");
//                     }}
//                     className="absolute -top-1.5 -right-1.5 bg-red-500 text-white rounded-full p-0.5"
//                   >
//                     <X size={10} />
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* SECTION & DATE - ONE ROW */}
//           <div className="grid grid-cols-2 gap-2 mb-2">
//             {/* SECTION DROPDOWN */}
//             <div>
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Event Section <span className="text-red-500">*</span>
//               </label>
//               <select
//                 value={formData.section}
//                 onChange={(e) => handleChange("section", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500"
//                 required
//               >
//                 <option value="">Select Section</option>
//                 {categories.map(cat => (
//                   <option key={cat.id} value={cat.name}>{cat.name}</option>
//                 ))}
//               </select>
//             </div>

//             {/* DATE */}
//             <div>
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Event Date <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="date"
//                 value={formData.date}
//                 onChange={(e) => handleChange("date", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500"
//                 required
//               />
//             </div>
//           </div>

//           {/* TITLE & DESCRIPTION - ONE ROW */}
//           <div className="grid grid-cols-2 gap-2 mb-2">
//             {/* TITLE */}
//             <div>
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Event Title <span className="text-red-500">*</span>
//               </label>
//               <input
//                 placeholder="Enter event title"
//                 value={formData.title}
//                 onChange={(e) => handleChange("title", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500"
//                 required
//               />
//             </div>

//             {/* DESCRIPTION */}
//             <div>
//               <label className="block text-xs font-medium text-gray-700 mb-1">
//                 Description <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 rows="2"
//                 placeholder="Event description"
//                 value={formData.description}
//                 onChange={(e) => handleChange("description", e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500"
//                 required
//               />
//             </div>
//           </div>

//           {/* HIGHLIGHT - FULL WIDTH */}
//           <div className="mb-2">
//             <label className="block text-xs font-medium text-gray-700 mb-1">
//               Highlight / Key Points
//             </label>
//             <textarea
//               rows="3"
//               placeholder="Special highlights or key points about this event"
//               value={formData.highlight}
//               onChange={(e) => handleChange("highlight", e.target.value)}
//               className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500"
//             />
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="px-3 py-2 bg-gray-50 rounded-b-lg flex justify-end gap-2 sticky bottom-0">
//           <button
//             onClick={onClose}
//             className="px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-3 py-1 text-xs font-medium text-white bg-green-600 rounded-md hover:bg-green-700 shadow-sm"
//           >
//             Update Event
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { X } from "lucide-react";

// export default function AnnouncementEditModal({ isOpen, onClose, onSave, data }) {
//   const [formData, setFormData] = useState({
//     id: null,
//     name: "",
//     dob: "",
//     place: "",
//     details: "",
//     date: "",
//   });

//   // LOAD DATA TO EDIT
//   useEffect(() => {
//     if (data) {
//       setFormData({
//         id: data.id,
//         name: data.name || "",
//         dob: data.dob || "",
//         place: data.place || "",
//         details: data.details || "",
//         date: data.date || "",
//       });
//     }
//   }, [data]);

//   const handleChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = () => {
//     if (!formData.name || !formData.dob || !formData.place) {
//       alert("Fill required fields");
//       return;
//     }

//     onSave(formData);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg w-full max-w-xl mx-4 shadow-xl max-h-[85vh] overflow-y-auto">
//         {/* HEADER */}
//         <div className="bg-yellow-500 px-4 py-2.5 rounded-t-lg flex justify-between items-center sticky top-0">
//           <h3 className="text-sm font-semibold text-white">Edit Announcement</h3>
//           <button onClick={onClose} className="text-white hover:text-gray-200">
//             <X size={16} />
//           </button>
//         </div>

//         {/* BODY */}
//         <div className="p-3">
//           {/* NAME + DOB */}
//           <div className="grid grid-cols-2 gap-2 mb-2">
//             <div>
//               <label className="text-xs font-medium">Name *</label>
//               <input
//                 value={formData.name}
//                 onChange={(e) => handleChange("name", e.target.value)}
//                 className="w-full border px-2 py-1.5 text-xs rounded"
//               />
//             </div>
//             <div>
//               <label className="text-xs font-medium">DOB *</label>
//               <input
//                 type="date"
//                 value={formData.dob}
//                 onChange={(e) => handleChange("dob", e.target.value)}
//                 className="w-full border px-2 py-1.5 text-xs rounded"
//               />
//             </div>
//           </div>

//           {/* PLACE + DATE */}
//           <div className="grid grid-cols-2 gap-2 mb-2">
//             <div>
//               <label className="text-xs font-medium">Place *</label>
//               <input
//                 value={formData.place}
//                 onChange={(e) => handleChange("place", e.target.value)}
//                 className="w-full border px-2 py-1.5 text-xs rounded"
//               />
//             </div>
//             <div>
//               <label className="text-xs font-medium">Date *</label>
//               <input
//                 type="date"
//                 value={formData.date}
//                 onChange={(e) => handleChange("date", e.target.value)}
//                 className="w-full border px-2 py-1.5 text-xs rounded"
//               />
//             </div>
//           </div>

//           {/* DETAILS */}
//           <div>
//             <label className="text-xs font-medium">Details</label>
//             <textarea
//               rows="3"
//               value={formData.details}
//               onChange={(e) => handleChange("details", e.target.value)}
//               className="w-full border px-2 py-1.5 text-xs rounded"
//             />
//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className="px-3 py-2 bg-gray-50 rounded-b-lg flex justify-end gap-2 sticky bottom-0">
//           <button
//             onClick={onClose}
//             className="px-3 py-1 text-xs font-medium text-gray-700 bg-white border rounded-md"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-3 py-1 text-xs font-medium text-white bg-green-600 rounded-md"
//           >
//             Update Announcement
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function AnnouncementEditModal({ isOpen, onClose, onSave, data }) {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    dob: "",
    place: "",
    details: "",
    date: "",
  });

  // LOAD DATA TO EDIT
  useEffect(() => {
    if (data) {
      setFormData({
        id: data.id,
        name: data.name || "",
        dob: data.dob || "",
        place: data.place || "",
        details: data.details || "",
        date: data.date || "",
      });
    }
  }, [data]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.dob || !formData.place) {
      alert("Please fill all required fields");
      return;
    }

    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-xl mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
        
        {/* HEADER */}
        <div className="bg-yellow-500 px-5 py-3 rounded-t-lg flex justify-between items-center sticky top-0">
          <h3 className="text-sm font-semibold text-white">Edit Announcement</h3>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X size={16} />
          </button>
        </div>

        {/* BODY */}
        <div className="p-4">
          {/* NAME + DOB */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Enter name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                DOB <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.dob}
                onChange={(e) => handleChange("dob", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                required
              />
            </div>
          </div>

          {/* PLACE + DATE */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Place <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Enter place"
                value={formData.place}
                onChange={(e) => handleChange("place", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                required
              />
            </div>
          </div>

          {/* DETAILS */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Details
            </label>
            <textarea
              rows="3"
              placeholder="Enter details"
              value={formData.details}
              onChange={(e) => handleChange("details", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-5 py-3 bg-gray-50 rounded-b-lg flex justify-end gap-3 sticky bottom-0">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-1.5 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 shadow-sm transition-colors"
          >
            Update Announcement
          </button>
        </div>
      </div>
    </div>
  );
}