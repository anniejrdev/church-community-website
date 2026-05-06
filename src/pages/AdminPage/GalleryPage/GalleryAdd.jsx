// import { useState, useEffect } from "react";
// import { X, Upload } from "lucide-react";

// export default function GalleryAddModal({ isOpen, onClose, onSave }) {
//   const [sections, setSections] = useState([]);
//   const [formData, setFormData] = useState({
//     section: "",
//     image: "",
//   });
//   const [imagePreview, setImagePreview] = useState("");

//   // LOAD GALLERY SECTIONS
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("gallerySections")) || [];
//     setSections(data);
//   }, []);

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

//     const newData = {
//       id: Date.now(),
//       ...formData,
//       createdAt: new Date().toISOString(),
//     };

//     onSave(newData);
//     resetForm();
//   };

//   const resetForm = () => {
//     setFormData({
//       section: "",
//       image: "",
//     });
//     setImagePreview("");
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg w-full max-w-md mx-4 shadow-xl max-h-[85vh] overflow-y-auto">
        
//         {/* HEADER */}
//         <div className="bg-yellow-500 px-5 py-3 rounded-t-lg flex justify-between items-center sticky top-0">
//           <h3 className="text-sm font-semibold text-white">Add New Gallery</h3>
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
//                   <span className="text-xs text-gray-500">Upload Image</span>
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
//             Save Gallery
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

export default function GalleryAddModal({ isOpen, onClose, onSave }) {
  const [sections, setSections] = useState([]);
  const [formData, setFormData] = useState({
    section: "",
    title: "",
    image: "",
  });
  const [imagePreview, setImagePreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

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

  // UPLOAD TO CLOUDINARY - FIXED FOR YOUR PRESET
  const uploadToCloudinary = async (file) => {
    const CLOUD_NAME = "ddqklsfmc";
    const UPLOAD_PRESET = "gallery_upload";
    
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    
    // Optional: Add folder structure (matches your asset folder: gallery)
    // formData.append("folder", "gallery");
    
    console.log("Uploading to Cloudinary...");
    console.log("File:", file.name, file.type, file.size);
    
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, // Changed endpoint
        {
          method: "POST",
          body: formData,
        }
      );
      
      const data = await response.json();
      
      if (!response.ok) {
        console.error("Cloudinary error:", data);
        throw new Error(data.error?.message || `Upload failed: ${response.status}`);
      }
      
      console.log("Upload successful:", data.secure_url);
      return data.secure_url;
    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      setUploadError("Please upload an image file (JPEG, PNG, etc.)");
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("Image size should be less than 5MB");
      return;
    }
    
    setUploadError("");
    setImagePreview(URL.createObjectURL(file));
    setUploading(true);
    
    try {
      const url = await uploadToCloudinary(file);
      setFormData({ ...formData, image: url });
      console.log("Image URL saved:", url);
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadError(error.message || "Failed to upload image. Please try again.");
      setImagePreview("");
    } finally {
      setUploading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setUploadError("");
  };

  const handleSubmit = () => {
    if (!formData.section) {
      setUploadError("Please select a gallery section");
      return;
    }
    
    if (!formData.title) {
      setUploadError("Please enter a title");
      return;
    }
    
    if (!formData.image) {
      setUploadError("Please upload an image");
      return;
    }
    
    const newData = {
      section: formData.section,
      title: formData.title,
      image: formData.image,
    };
    
    onSave(newData);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      section: "",
      title: "",
      image: "",
    });
    setImagePreview("");
    setUploadError("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4 shadow-xl max-h-[85vh] overflow-y-auto">
        
        {/* HEADER */}
        <div className="bg-yellow-500 px-5 py-3 rounded-t-lg flex justify-between items-center sticky top-0">
          <h3 className="text-sm font-semibold text-white">Add New Gallery</h3>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X size={18} />
          </button>
        </div>
        
        {/* BODY */}
        <div className="p-4">
          {/* ERROR MESSAGE */}
          {uploadError && (
            <div className="mb-4 p-2 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-xs text-red-600">{uploadError}</p>
            </div>
          )}
          
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
            {sections.length === 0 && (
              <p className="text-xs text-red-500 mt-1">
                ⚠️ No gallery sections found. Please add a gallery section first.
              </p>
            )}
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
                    {uploading ? "Uploading..." : "Upload Image"}
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
            <p className="text-xs text-gray-400 mt-2">
              Supported formats: JPG, PNG, GIF (Max 5MB)
            </p>
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
            disabled={uploading || !formData.image}
            className="px-4 py-1.5 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 shadow-sm disabled:bg-gray-400"
          >
            Save Gallery
          </button>
        </div>
      </div>
    </div>
  );
}