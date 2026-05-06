// import { useState, useEffect } from "react";
// import { X, Upload } from "lucide-react";

// export default function GalleryEditModal({ isOpen, onClose, onSave, data }) {
//   const [sections, setSections] = useState([]);
//   const [formData, setFormData] = useState({
//     id: null,
//     section: "",
//     image: "",
//   });
//   const [imagePreview, setImagePreview] = useState("");

//   // LOAD GALLERY SECTIONS
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("gallerySections")) || [];
//     setSections(data);
//   }, []);

//   // LOAD DATA TO EDIT
//   useEffect(() => {
//     if (data) {
//       setFormData({
//         id: data.id,
//         section: data.section || "",
//         image: data.image || "",
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
//     if (!formData.section || !formData.image) {
//       alert("Please fill all required fields and upload an image");
//       return;
//     }

//     onSave(formData);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg w-full max-w-md mx-4 shadow-xl max-h-[85vh] overflow-y-auto">
        
//         {/* HEADER */}
//         <div className="bg-yellow-500 px-5 py-3 rounded-t-lg flex justify-between items-center sticky top-0">
//           <h3 className="text-sm font-semibold text-white">Edit Gallery</h3>
//           <button onClick={onClose} className="text-white hover:text-gray-200">
//             <X size={18} />
//           </button>
//         </div>
        
//         {/* BODY */}
//         <div className="p-4">
//           {/* GALLERY SECTION DROPDOWN */}
//           <div className="mb-4">
//             <label className="block text-xs font-medium text-gray-700 mb-1.5">
//               Gallery Section <span className="text-red-500">*</span>
//             </label>
//             <select
//               value={formData.section}
//               onChange={(e) => handleChange("section", e.target.value)}
//               className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               required
//             >
//               <option value="">Select Gallery Section</option>
//               {sections.map(section => (
//                 <option key={section.id} value={section.name}>{section.name}</option>
//               ))}
//             </select>
//             {sections.length === 0 && (
//               <p className="text-xs text-red-500 mt-1">
//                 No gallery sections found. Please add a gallery section first.
//               </p>
//             )}
//           </div>

//           {/* TITLE */}
//           {/* <div className="mb-4">
//             <label className="block text-xs font-medium text-gray-700 mb-1.5">
//               Title <span className="text-red-500">*</span>
//             </label>
//             <input
//               placeholder="Enter image title"
//               value={formData.title}
//               onChange={(e) => handleChange("title", e.target.value)}
//               className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               required
//             />
//           </div> */}

//           {/* IMAGE UPLOAD */}
//           <div>
//             <label className="block text-xs font-medium text-gray-700 mb-1.5">
//               Image <span className="text-red-500">*</span>
//             </label>
//             <div className="flex items-center gap-4">
//               <label className="cursor-pointer">
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="hidden"
//                 />
//                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-yellow-500 transition-colors w-32">
//                   <Upload size={24} className="mx-auto text-gray-400 mb-2" />
//                   <span className="text-xs text-gray-500">Change Image</span>
//                 </div>
//               </label>
//               {imagePreview && (
//                 <div className="relative">
//                   <img src={imagePreview} alt="Preview" className="w-20 h-20 object-cover rounded-lg" />
//                   <button
//                     onClick={() => {
//                       setImagePreview("");
//                       handleChange("image", "");
//                     }}
//                     className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
//                   >
//                     <X size={12} />
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className="px-5 py-3 bg-gray-50 rounded-b-lg flex justify-end gap-3 sticky bottom-0">
//           <button
//             onClick={onClose}
//             className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-1.5 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 shadow-sm"
//           >
//             Update Gallery
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { X, Upload, Loader } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

export default function GalleryEditModal({ isOpen, onClose, onSave, data }) {
  const [sections, setSections] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    section: "",
    title: "",
    image: "",
  });
  const [imagePreview, setImagePreview] = useState("");
  const [uploading, setUploading] = useState(false);

  // LOAD GALLERY SECTIONS FROM FIRESTORE
  useEffect(() => {
    const loadSections = async () => {
      try {
        const snapshot = await getDocs(collection(db, "gallerySections"));
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name
        }));
        setSections(data);
      } catch (error) {
        console.error("Error loading sections:", error);
      }
    };
    
    if (isOpen) {
      loadSections();
    }
  }, [isOpen]);

  // LOAD DATA TO EDIT
  useEffect(() => {
    if (data) {
      setFormData({
        id: data.id,
        section: data.section || "",
        title: data.title || "",
        image: data.image || "",
      });
      setImagePreview(data.image || "");
    }
  }, [data]);

  // UPLOAD TO CLOUDINARY
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "gallery_upload");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/ddqklsfmc/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      return data.secure_url;
    } catch (error) {
      console.error("Upload error:", error);
      return "";
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImagePreview(URL.createObjectURL(file));
    setUploading(true);

    const url = await uploadToCloudinary(file);
    
    setFormData({ ...formData, image: url });
    setUploading(false);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.section || !formData.title || !formData.image) {
      alert("Please fill all required fields");
      return;
    }

    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4 shadow-xl max-h-[85vh] overflow-y-auto">
        
        {/* HEADER */}
        <div className="bg-yellow-500 px-5 py-3 rounded-t-lg flex justify-between items-center sticky top-0">
          <h3 className="text-sm font-semibold text-white">Edit Gallery</h3>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X size={18} />
          </button>
        </div>
        
        {/* BODY */}
        <div className="p-4">
          {/* GALLERY SECTION DROPDOWN */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Gallery Section <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.section}
              onChange={(e) => handleChange("section", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            >
              <option value="">Select Gallery Section</option>
              {sections.map(section => (
                <option key={section.id} value={section.name}>
                  {section.name}
                </option>
              ))}
            </select>
          </div>

          {/* TITLE */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Enter image title"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          {/* IMAGE UPLOAD */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Image <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  disabled={uploading}
                />
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-yellow-500 transition-colors w-32">
                  {uploading ? (
                    <Loader size={24} className="mx-auto text-yellow-500 animate-spin mb-2" />
                  ) : (
                    <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                  )}
                  <span className="text-xs text-gray-500">
                    {uploading ? "Uploading..." : "Change Image"}
                  </span>
                </div>
              </label>
              {imagePreview && (
                <div className="relative">
                  <img src={imagePreview} alt="Preview" className="w-20 h-20 object-cover rounded-lg" />
                  <button
                    onClick={() => {
                      setImagePreview("");
                      handleChange("image", "");
                    }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <X size={12} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-5 py-3 bg-gray-50 rounded-b-lg flex justify-end gap-3 sticky bottom-0">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={uploading}
            className="px-4 py-1.5 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 shadow-sm disabled:bg-gray-400"
          >
            Update Gallery
          </button>
        </div>
      </div>
    </div>
  );
}