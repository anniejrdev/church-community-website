// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { motion } from "framer-motion";
// import { FiSave, FiEdit2, FiPhone, FiCalendar, FiHeart, FiCamera, FiMapPin, FiUser } from "react-icons/fi";

// const ProfilePage = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileData, setProfileData] = useState({
//     fullName: "",
//     gender: "",
//     address: "",
//     whatsappNumber: "",
//     dob: "",
//     anniversaryDate: "",
//     photo: null,
//     photoPreview: null,
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData({
//       ...profileData,
//       [name]: value,
//     });
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: "" });
//     }
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileData({
//           ...profileData,
//           photo: file,
//           photoPreview: reader.result,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!profileData.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//     }
//     if (!profileData.gender) {
//       newErrors.gender = "Gender is required";
//     }
//     if (!profileData.address.trim()) {
//       newErrors.address = "Address is required";
//     }
//     if (!profileData.whatsappNumber.trim()) {
//       newErrors.whatsappNumber = "WhatsApp number is required";
//     } else if (!/^\d{10}$/.test(profileData.whatsappNumber)) {
//       newErrors.whatsappNumber = "Enter valid 10-digit number";
//     }
//     if (!profileData.dob) {
//       newErrors.dob = "Date of birth is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSave = () => {
//     if (validateForm()) {
//       toast.success("Profile saved successfully! 🎉");
//       setIsEditing(false);
//       console.log("Profile Data:", profileData);
//     } else {
//       toast.error("Please fill all required fields");
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex items-center justify-center p-4">
//       <ToastContainer theme="colored" />

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-5xl w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/15 overflow-hidden"
//       >
//         {/* Header with Edit/Save Buttons */}
//         <div className="flex items-center justify-between p-6 border-b border-white/10">
//           <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
//             My Profile
//           </h2>
          
//           <div className="flex gap-3">
//             {!isEditing ? (
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleEdit}
//                 className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all"
//               >
//                 <FiEdit2 size={16} />
//                 Edit Profile
//               </motion.button>
//             ) : (
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleSave}
//                 className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all"
//               >
//                 <FiSave size={16} />
//                 Save Changes
//               </motion.button>
//             )}
//           </div>
//         </div>

//         {/* Two Column Layout */}
//         <div className="grid md:grid-cols-2 gap-6 p-6">
          
//           {/* LEFT SIDE - Profile Pic, Name, Gender, Address */}
//           <div className="space-y-5">
//             {/* Photo Upload - Card Style */}
//             <div className="flex justify-center">
//               <div className="relative">
//                 <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 p-1">
//                   <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden flex items-center justify-center">
//                     {profileData.photoPreview ? (
//                       <img
//                         src={profileData.photoPreview}
//                         alt="Profile"
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <FiUser className="text-5xl text-white/60" />
//                     )}
//                   </div>
//                 </div>
                
//                 {isEditing && (
//                   <label className="absolute bottom-1 right-1 p-1.5 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-600 transition shadow-lg">
//                     <FiCamera size={14} className="text-white" />
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handlePhotoChange}
//                       className="hidden"
//                     />
//                   </label>
//                 )}
//               </div>
//             </div>

//             {/* Full Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 <FiUser className="inline mr-1" size={12} /> Full Name <span className="text-red-400">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="fullName"
//                 value={profileData.fullName}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 placeholder="Enter your full name"
//                 className={`w-full p-2.5 rounded-lg bg-white/10 border ${
//                   errors.fullName ? "border-red-400" : "border-white/20"
//                 } outline-none focus:border-yellow-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all text-white text-sm`}
//               />
//               {errors.fullName && (
//                 <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
//               )}
//             </div>

//             {/* Gender */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Gender <span className="text-red-400">*</span>
//               </label>
//               <div className="flex gap-6">
//                 {["Male", "Female", "Other"].map((option) => (
//                   <label key={option} className="flex items-center gap-2 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="gender"
//                       value={option}
//                       checked={profileData.gender === option}
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                       className="w-4 h-4 text-yellow-500 focus:ring-yellow-500"
//                     />
//                     <span className="text-sm text-white">{option}</span>
//                   </label>
//                 ))}
//               </div>
//               {errors.gender && (
//                 <p className="text-red-400 text-xs mt-1">{errors.gender}</p>
//               )}
//             </div>

//             {/* Address */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 <FiMapPin className="inline mr-1" size={12} /> Address <span className="text-red-400">*</span>
//               </label>
//               <textarea
//                 name="address"
//                 value={profileData.address}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 rows="3"
//                 placeholder="Enter your complete address"
//                 className={`w-full p-2.5 rounded-lg bg-white/10 border ${
//                   errors.address ? "border-red-400" : "border-white/20"
//                 } outline-none focus:border-yellow-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all text-white text-sm resize-none`}
//               />
//               {errors.address && (
//                 <p className="text-red-400 text-xs mt-1">{errors.address}</p>
//               )}
//             </div>
//           </div>

//           {/* RIGHT SIDE - WhatsApp, DOB, Anniversary */}
//           <div className="space-y-5">
//             {/* WhatsApp Number */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 <FiPhone className="inline mr-1" size={12} /> WhatsApp Number <span className="text-red-400">*</span>
//               </label>
//               <input
//                 type="tel"
//                 name="whatsappNumber"
//                 value={profileData.whatsappNumber}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 placeholder="Enter 10-digit number"
//                 maxLength="10"
//                 className={`w-full p-2.5 rounded-lg bg-white/10 border ${
//                   errors.whatsappNumber ? "border-red-400" : "border-white/20"
//                 } outline-none focus:border-yellow-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all text-white text-sm`}
//               />
//               {errors.whatsappNumber && (
//                 <p className="text-red-400 text-xs mt-1">{errors.whatsappNumber}</p>
//               )}
//             </div>

//             {/* Date of Birth */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 <FiCalendar className="inline mr-1" size={12} /> Date of Birth <span className="text-red-400">*</span>
//               </label>
//               <input
//                 type="date"
//                 name="dob"
//                 value={profileData.dob}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className={`w-full p-2.5 rounded-lg bg-white/10 border ${
//                   errors.dob ? "border-red-400" : "border-white/20"
//                 } outline-none focus:border-yellow-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all text-white text-sm`}
//               />
//               {errors.dob && (
//                 <p className="text-red-400 text-xs mt-1">{errors.dob}</p>
//               )}
//             </div>

//             {/* Marriage Anniversary Date */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 <FiHeart className="inline mr-1" size={12} /> Marriage Anniversary Date
//                 <span className="text-gray-500 text-xs ml-1">(Optional)</span>
//               </label>
//               <input
//                 type="date"
//                 name="anniversaryDate"
//                 value={profileData.anniversaryDate}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className="w-full p-2.5 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-yellow-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all text-white text-sm"
//               />
//             </div>

//             {/* Info Card */}
//             <div className="mt-6 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
//               <p className="text-xs text-yellow-400 text-center">
//                 ✨ Your profile information helps us serve you better
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Validation Message */}
//         {isEditing && (
//           <div className="px-6 pb-6">
//             <p className="text-xs text-gray-400 text-center">
//               <span className="text-red-400">*</span> Required fields must be filled to save
//             </p>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default ProfilePage;

// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { motion } from "framer-motion";
// import { FiSave, FiEdit2, FiPhone, FiCalendar, FiHeart, FiCamera, FiMapPin, FiUser } from "react-icons/fi";

// const ProfilePage = () => {
//   const [isEditing, setIsEditing] = useState(true); // Start with editing mode true (typable)
//   const [isSaved, setIsSaved] = useState(false);
//   const [profileData, setProfileData] = useState({
//     fullName: "",
//     gender: "",
//     address: "",
//     whatsappNumber: "",
//     dob: "",
//     anniversaryDate: "",
//     photo: null,
//     photoPreview: null,
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData({
//       ...profileData,
//       [name]: value,
//     });
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: "" });
//     }
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileData({
//           ...profileData,
//           photo: file,
//           photoPreview: reader.result,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!profileData.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//     }
//     if (!profileData.gender) {
//       newErrors.gender = "Gender is required";
//     }
//     if (!profileData.address.trim()) {
//       newErrors.address = "Address is required";
//     }
//     if (!profileData.whatsappNumber.trim()) {
//       newErrors.whatsappNumber = "WhatsApp number is required";
//     } else if (!/^\d{10}$/.test(profileData.whatsappNumber)) {
//       newErrors.whatsappNumber = "Enter valid 10-digit number";
//     }
//     if (!profileData.dob) {
//       newErrors.dob = "Date of birth is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSave = () => {
//     if (validateForm()) {
//       toast.success("Profile saved successfully! 🎉");
//       setIsEditing(false); // After save, disable editing (not typable)
//       setIsSaved(true);
//       console.log("Profile Data:", profileData);
//     } else {
//       toast.error("Please fill all required fields");
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true); // Enable editing (typable)
//     setIsSaved(false);
//     toast.info("You can now edit your profile");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex items-center justify-center p-4">
//       <ToastContainer theme="colored" />

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-5xl w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/15 overflow-hidden"
//       >
//         {/* Header with Edit/Save Buttons */}
//         <div className="flex items-center justify-between p-6 border-b border-white/10">
//           <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
//             My Profile
//           </h2>
          
//           <div className="flex gap-3">
//             {/* Save Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleSave}
//               className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all"
//             >
//               <FiSave size={16} />
//               Save
//             </motion.button>

//             {/* Edit Button - Enabled only after save */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleEdit}
//               disabled={!isSaved}
//               className={`flex items-center gap-2 px-5 py-2 rounded-lg text-white text-sm font-medium transition-all ${
//                 !isSaved 
//                   ? "bg-gray-500 cursor-not-allowed opacity-50" 
//                   : "bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg"
//               }`}
//             >
//               <FiEdit2 size={16} />
//               Edit Profile
//             </motion.button>
//           </div>
//         </div>

//         {/* Two Column Layout */}
//         <div className="grid md:grid-cols-2 gap-6 p-6">
          
//           {/* LEFT SIDE - Profile Pic, Name, Gender, Address */}
//           <div className="space-y-5">
//             {/* Photo Upload - Card Style */}
//             <div className="flex justify-center">
//               <div className="relative">
//                 <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 p-1">
//                   <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden flex items-center justify-center">
//                     {profileData.photoPreview ? (
//                       <img
//                         src={profileData.photoPreview}
//                         alt="Profile"
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <FiUser className="text-5xl text-white/60" />
//                     )}
//                   </div>
//                 </div>
                
//                 {/* Photo upload only visible when editing */}
//                 {isEditing && (
//                   <label className="absolute bottom-1 right-1 p-1.5 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-600 transition shadow-lg">
//                     <FiCamera size={14} className="text-white" />
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handlePhotoChange}
//                       className="hidden"
//                     />
//                   </label>
//                 )}
//               </div>
//             </div>

//             {/* Full Name - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 <FiUser className="inline mr-1" size={12} /> Full Name <span className="text-red-400">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="fullName"
//                 value={profileData.fullName}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 placeholder="Enter your full name"
//                 className={`w-full p-2.5 rounded-lg bg-white/10 border ${
//                   errors.fullName ? "border-red-400" : "border-white/20"
//                 } outline-none focus:border-yellow-400 transition-all text-white text-sm ${
//                   !isEditing ? "opacity-60 cursor-not-allowed" : ""
//                 }`}
//               />
//               {errors.fullName && (
//                 <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
//               )}
//             </div>

//             {/* Gender - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Gender <span className="text-red-400">*</span>
//               </label>
//               <div className="flex gap-6">
//                 {["Male", "Female", "Other"].map((option) => (
//                   <label key={option} className="flex items-center gap-2 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="gender"
//                       value={option}
//                       checked={profileData.gender === option}
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                       className="w-4 h-4 text-yellow-500 focus:ring-yellow-500"
//                     />
//                     <span className={`text-sm text-white ${!isEditing ? "opacity-60" : ""}`}>{option}</span>
//                   </label>
//                 ))}
//               </div>
//               {errors.gender && (
//                 <p className="text-red-400 text-xs mt-1">{errors.gender}</p>
//               )}
//             </div>

//             {/* Address - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 <FiMapPin className="inline mr-1" size={12} /> Address <span className="text-red-400">*</span>
//               </label>
//               <textarea
//                 name="address"
//                 value={profileData.address}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 rows="3"
//                 placeholder="Enter your complete address"
//                 className={`w-full p-2.5 rounded-lg bg-white/10 border ${
//                   errors.address ? "border-red-400" : "border-white/20"
//                 } outline-none focus:border-yellow-400 transition-all text-white text-sm resize-none ${
//                   !isEditing ? "opacity-60 cursor-not-allowed" : ""
//                 }`}
//               />
//               {errors.address && (
//                 <p className="text-red-400 text-xs mt-1">{errors.address}</p>
//               )}
//             </div>
//           </div>

//           {/* RIGHT SIDE - WhatsApp, DOB, Anniversary */}
//           <div className="space-y-5">
//             {/* WhatsApp Number - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 <FiPhone className="inline mr-1" size={12} /> WhatsApp Number <span className="text-red-400">*</span>
//               </label>
//               <input
//                 type="tel"
//                 name="whatsappNumber"
//                 value={profileData.whatsappNumber}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 placeholder="Enter 10-digit number"
//                 maxLength="10"
//                 className={`w-full p-2.5 rounded-lg bg-white/10 border ${
//                   errors.whatsappNumber ? "border-red-400" : "border-white/20"
//                 } outline-none focus:border-yellow-400 transition-all text-white text-sm ${
//                   !isEditing ? "opacity-60 cursor-not-allowed" : ""
//                 }`}
//               />
//               {errors.whatsappNumber && (
//                 <p className="text-red-400 text-xs mt-1">{errors.whatsappNumber}</p>
//               )}
//             </div>

//             {/* Date of Birth - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 <FiCalendar className="inline mr-1" size={12} /> Date of Birth <span className="text-red-400">*</span>
//               </label>
//               <input
//                 type="date"
//                 name="dob"
//                 value={profileData.dob}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className={`w-full p-2.5 rounded-lg bg-white/10 border ${
//                   errors.dob ? "border-red-400" : "border-white/20"
//                 } outline-none focus:border-yellow-400 transition-all text-white text-sm ${
//                   !isEditing ? "opacity-60 cursor-not-allowed" : ""
//                 }`}
//               />
//               {errors.dob && (
//                 <p className="text-red-400 text-xs mt-1">{errors.dob}</p>
//               )}
//             </div>

//             {/* Marriage Anniversary Date - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 <FiHeart className="inline mr-1" size={12} /> Marriage Anniversary Date
//                 <span className="text-gray-500 text-xs ml-1">(Optional)</span>
//               </label>
//               <input
//                 type="date"
//                 name="anniversaryDate"
//                 value={profileData.anniversaryDate}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className={`w-full p-2.5 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-yellow-400 transition-all text-white text-sm ${
//                   !isEditing ? "opacity-60 cursor-not-allowed" : ""
//                 }`}
//               />
//             </div>

//             {/* Info Card */}
//             <div className="mt-6 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
//               <p className="text-xs text-yellow-400 text-center">
//                 {isEditing && !isSaved 
//                   ? "✏️ Fill all required fields and click Save" 
//                   : !isEditing && isSaved
//                   ? "✅ Profile saved! Click Edit to make changes"
//                   : "📝 Please fill your profile details"}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Validation Message */}
//         <div className="px-6 pb-6">
//           <p className="text-xs text-gray-400 text-center">
//             <span className="text-red-400">*</span> Required fields must be filled to save
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ProfilePage;


// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { motion } from "framer-motion";
// import { FiSave, FiEdit2, FiPhone, FiCalendar, FiHeart, FiCamera, FiMapPin, FiUser, FiUsers } from "react-icons/fi";

// const ProfilePage = () => {
//   const [isEditing, setIsEditing] = useState(true); // Start with editing mode true (typable)
//   const [isSaved, setIsSaved] = useState(false);
//   const [profileData, setProfileData] = useState({
//     fullName: "",
//     gender: "",
//     address: "",
//     whatsappNumber: "",
//     dob: "",
//     anniversaryDate: "",
//     churchFamilyNumber: "",
//     photo: null,
//     photoPreview: null,
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData({
//       ...profileData,
//       [name]: value,
//     });
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: "" });
//     }
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileData({
//           ...profileData,
//           photo: file,
//           photoPreview: reader.result,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!profileData.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//     }
//     if (!profileData.gender) {
//       newErrors.gender = "Gender is required";
//     }
//     if (!profileData.address.trim()) {
//       newErrors.address = "Address is required";
//     }
//     if (!profileData.whatsappNumber.trim()) {
//       newErrors.whatsappNumber = "WhatsApp number is required";
//     } else if (!/^\d{10}$/.test(profileData.whatsappNumber)) {
//       newErrors.whatsappNumber = "Enter valid 10-digit number";
//     }
//     if (!profileData.dob) {
//       newErrors.dob = "Date of birth is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSave = () => {
//     if (validateForm()) {
//       toast.success("Profile saved successfully! 🎉");
//       setIsEditing(false); // After save, disable editing (not typable)
//       setIsSaved(true);
//       console.log("Profile Data:", profileData);
//     } else {
//       toast.error("Please fill all required fields");
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true); // Enable editing (typable)
//     setIsSaved(false);
//     toast.info("You can now edit your profile");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex items-center justify-center p-4">
//       <ToastContainer theme="colored" />

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-5xl w-full mt-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/15 overflow-hidden"
//       >
//         {/* Header with Edit/Save Buttons */}
//         <div className="flex items-center justify-between p-6 border-b border-white/10">
//           <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
//             My Profile
//           </h2>
          
//           <div className="flex gap-3">
//             {/* Save Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleSave}
//               className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all"
//             >
//               <FiSave size={16} />
//               Save
//             </motion.button>

//             {/* Edit Button - Enabled only after save */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleEdit}
//               disabled={!isSaved}
//               className={`flex items-center gap-2 px-5 py-2 rounded-lg text-white text-sm font-medium transition-all ${
//                 !isSaved 
//                   ? "bg-gray-500 cursor-not-allowed opacity-50" 
//                   : "bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg"
//               }`}
//             >
//               <FiEdit2 size={16} />
//               Edit Profile
//             </motion.button>
//           </div>
//         </div>

//         {/* Two Column Layout */}
//         <div className="grid md:grid-cols-2 gap-6 p-6">
          
//           {/* LEFT SIDE - Profile Pic, Name, Gender, Address */}
//           <div className="space-y-5">
//             {/* Photo Upload - Card Style */}
//             <div className="flex justify-center">
//               <div className="relative">
//                 <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 ">
//                   <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden flex items-center justify-center">
//                     {profileData.photoPreview ? (
//                       <img
//                         src={profileData.photoPreview}
//                         alt="Profile"
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <FiUser className="text-5xl text-white/60" />
//                     )}
//                   </div>
//                 </div>
                
//                 {/* Photo upload only visible when editing */}
//                 {isEditing && (
//                   <label className="absolute bottom-1 right-1 p-1.5 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-600 transition shadow-lg">
//                     <FiCamera size={14} className="text-white" />
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handlePhotoChange}
//                       className="hidden"
//                     />
//                   </label>
//                 )}
//               </div>
//             </div>

//             {/* Full Name - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 <FiUser className="inline mr-1" size={12} /> Full Name <span className="text-red-400">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="fullName"
//                 value={profileData.fullName}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 placeholder="Enter your full name"
//                 className={`w-full p-2.5 rounded-lg bg-white/10 border ${
//                   errors.fullName ? "border-red-400" : "border-white/20"
//                 } outline-none focus:border-yellow-400 transition-all text-white text-sm ${
//                   !isEditing ? "opacity-60 cursor-not-allowed" : ""
//                 }`}
//               />
//               {/* {errors.fullName && (
//                 <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
//               )} */}
//             </div>

//             {/* Gender - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Gender <span className="text-red-400">*</span>
//               </label>
//               <div className="flex gap-6">
//                 {["Male", "Female", "Other"].map((option) => (
//                   <label key={option} className="flex items-center gap-2 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="gender"
//                       value={option}
//                       checked={profileData.gender === option}
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                       className="w-4 h-4 text-yellow-500 focus:ring-yellow-500"
//                     />
//                     <span className={`text-sm text-white ${!isEditing ? "opacity-60" : ""}`}>{option}</span>
//                   </label>
//                 ))}
//               </div>
//               {/* {errors.gender && (
//                 <p className="text-red-400 text-xs mt-1">{errors.gender}</p>
//               )} */}
//             </div>

//             {/* Address - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 <FiMapPin className="inline mr-1" size={12} /> Address <span className="text-red-400">*</span>
//               </label>
//               <textarea
//                 name="address"
//                 value={profileData.address}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 rows="3"
//                 placeholder="Enter your complete address"
//                 className={`w-full p-2.5 rounded-lg bg-white/10 border ${
//                   errors.address ? "border-red-400" : "border-white/20"
//                 } outline-none focus:border-yellow-400 transition-all text-white text-sm resize-none ${
//                   !isEditing ? "opacity-60 cursor-not-allowed" : ""
//                 }`}
//               />
//               {/* {errors.address && (
//                 <p className="text-red-400 text-xs mt-1">{errors.address}</p>
//               )} */}
//             </div>
//           </div>

//           {/* RIGHT SIDE - WhatsApp, DOB, Anniversary, Church Family Number */}
//           <div className="space-y-5">
//             {/* WhatsApp Number - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 <FiPhone className="inline mr-1" size={12} /> WhatsApp Number <span className="text-red-400">*</span>
//               </label>
//               <input
//                 type="tel"
//                 name="whatsappNumber"
//                 value={profileData.whatsappNumber}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 placeholder="Enter 10-digit number"
//                 maxLength="10"
//                 className={`w-full p-2.5 rounded-lg bg-white/10 border ${
//                   errors.whatsappNumber ? "border-red-400" : "border-white/20"
//                 } outline-none focus:border-yellow-400 transition-all text-white text-sm ${
//                   !isEditing ? "opacity-60 cursor-not-allowed" : ""
//                 }`}
//               />
//               {/* {errors.whatsappNumber && (
//                 <p className="text-red-400 text-xs mt-1">{errors.whatsappNumber}</p>
//               )} */}
//             </div>

//             {/* Date of Birth - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 <FiCalendar className="inline mr-1" size={12} /> Date of Birth <span className="text-red-400">*</span>
//               </label>
//               <input
//                 type="date"
//                 name="dob"
//                 value={profileData.dob}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className={`w-full p-2.5 rounded-lg bg-white/10 border ${
//                   errors.dob ? "border-red-400" : "border-white/20"
//                 } outline-none focus:border-yellow-400 transition-all text-white text-sm ${
//                   !isEditing ? "opacity-60 cursor-not-allowed" : ""
//                 }`}
//               />
//               {/* {errors.dob && (
//                 <p className="text-red-400 text-xs mt-1">{errors.dob}</p>
//               )} */}
//             </div>

//             {/* Marriage Anniversary Date - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 <FiHeart className="inline mr-1" size={12} /> Marriage Anniversary Date
//                 <span className="text-gray-500 text-xs ml-1">(Optional)</span>
//               </label>
//               <input
//                 type="date"
//                 name="anniversaryDate"
//                 value={profileData.anniversaryDate}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className={`w-full p-2.5 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-yellow-400 transition-all text-white text-sm ${
//                   !isEditing ? "opacity-60 cursor-not-allowed" : ""
//                 }`}
//               />
//             </div>

//             {/* Church Family Number - Optional */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 <FiUsers className="inline mr-1" size={12} /> Church Family Number
//                 <span className="text-gray-500 text-xs ml-1">(Optional)</span>
//               </label>
//               <input
//                 type="text"
//                 name="churchFamilyNumber"
//                 value={profileData.churchFamilyNumber}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 placeholder="Enter your church family number"
//                 className={`w-full p-2.5 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-yellow-400 transition-all text-white text-sm ${
//                   !isEditing ? "opacity-60 cursor-not-allowed" : ""
//                 }`}
//               />
//             </div>

//             {/* Info Card */}
//             <div className="mt-6 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
//               <p className="text-xs text-yellow-400 text-center">
//                 {isEditing && !isSaved 
//                   ? "✏️ Fill all required fields and click Save" 
//                   : !isEditing && isSaved
//                   ? "✅ Profile saved! Click Edit to make changes"
//                   : "📝 Please fill your profile details"}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Validation Message */}
//         <div className="px-6 pb-6">
//           <p className="text-xs text-gray-400 text-center">
//             <span className="text-red-400">*</span> Required fields must be filled to save
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ProfilePage;

// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { motion } from "framer-motion";
// import { FiSave, FiEdit2, FiPhone, FiCalendar, FiHeart, FiCamera, FiMapPin, FiUser, FiUsers } from "react-icons/fi";

// const ProfilePage = () => {
//   const [isEditing, setIsEditing] = useState(true); // Start with editing mode true (typable)
//   const [isSaved, setIsSaved] = useState(false);
//   const [profileData, setProfileData] = useState({
//     fullName: "",
//     gender: "",
//     address: "",
//     whatsappNumber: "",
//     dob: "",
//     anniversaryDate: "",
//     churchFamilyNumber: "",
//     photo: null,
//     photoPreview: null,
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData({
//       ...profileData,
//       [name]: value,
//     });
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: "" });
//     }
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileData({
//           ...profileData,
//           photo: file,
//           photoPreview: reader.result,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!profileData.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//     }
//     if (!profileData.gender) {
//       newErrors.gender = "Gender is required";
//     }
//     if (!profileData.address.trim()) {
//       newErrors.address = "Address is required";
//     }
//     if (!profileData.whatsappNumber.trim()) {
//       newErrors.whatsappNumber = "WhatsApp number is required";
//     } else if (!/^\d{10}$/.test(profileData.whatsappNumber)) {
//       newErrors.whatsappNumber = "Enter valid 10-digit number";
//     }
//     if (!profileData.dob) {
//       newErrors.dob = "Date of birth is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSave = () => {
//     if (validateForm()) {
//       toast.success("Profile saved successfully! 🎉");
//       setIsEditing(false); // After save, disable editing (not typable)
//       setIsSaved(true);
//       console.log("Profile Data:", profileData);
//     } else {
//       toast.error("Please fill all required fields");
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true); // Enable editing (typable)
//     setIsSaved(false);
//     toast.info("You can now edit your profile");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
//       <ToastContainer theme="light" />

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-5xl w-full mt-12 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
//       >
//         {/* Header with Edit/Save Buttons */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
//           <h2 className="text-2xl font-bold text-gray-800">
//             My Profile
//           </h2>
          
//           <div className="flex gap-3">
//             {/* Save Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleSave}
//               className="flex items-center gap-2 px-5 py-2 bg-green-600 rounded-lg text-white text-sm font-medium hover:bg-green-700 transition-all shadow-sm"
//             >
//               <FiSave size={16} />
//               Save
//             </motion.button>

//             {/* Edit Button - Enabled only after save */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleEdit}
//               disabled={!isSaved}
//               className={`flex items-center gap-2 px-5 py-2 rounded-lg text-white text-sm font-medium transition-all shadow-sm ${
//                 !isSaved 
//                   ? "bg-gray-400 cursor-not-allowed opacity-50" 
//                   : "bg-blue-600 hover:bg-blue-700"
//               }`}
//             >
//               <FiEdit2 size={16} />
//               Edit Profile
//             </motion.button>
//           </div>
//         </div>

//         {/* Two Column Layout */}
//         <div className="grid md:grid-cols-2 gap-6 p-6">
          
//           {/* LEFT SIDE - Profile Pic, Name, Gender, Address */}
//           <div className="space-y-5">
//             {/* Photo Upload - Card Style */}
//             <div className="flex justify-center">
//               <div className="relative">
//                 <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
//                   <div className="w-full h-full rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
//                     {profileData.photoPreview ? (
//                       <img
//                         src={profileData.photoPreview}
//                         alt="Profile"
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <FiUser className="text-5xl text-white" />
//                     )}
//                   </div>
//                 </div>
                
//                 {/* Photo upload only visible when editing */}
//                 {isEditing && (
//                   <label className="absolute bottom-1 right-1 p-1.5 bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 transition shadow-md">
//                     <FiCamera size={14} className="text-white" />
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handlePhotoChange}
//                       className="hidden"
//                     />
//                   </label>
//                 )}
//               </div>
//             </div>

//             {/* Full Name - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 <FiUser className="inline mr-1" size={14} /> Full Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="fullName"
//                 value={profileData.fullName}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 placeholder="Enter your full name"
//                 className={`w-full p-2.5 rounded-lg bg-gray-50 border ${
//                   errors.fullName ? "border-red-400" : "border-gray-300"
//                 } outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800 text-sm ${
//                   !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : "hover:border-gray-400"
//                 }`}
//               />
//               {errors.fullName && (
//                 <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
//               )}
//             </div>

//             {/* Gender - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Gender <span className="text-red-500">*</span>
//               </label>
//               <div className="flex gap-6">
//                 {["Male", "Female", "Other"].map((option) => (
//                   <label key={option} className="flex items-center gap-2 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="gender"
//                       value={option}
//                       checked={profileData.gender === option}
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                       className="w-4 h-4 text-blue-600 focus:ring-blue-500"
//                     />
//                     <span className={`text-sm text-gray-700 ${!isEditing ? "text-gray-400" : ""}`}>{option}</span>
//                   </label>
//                 ))}
//               </div>
//               {errors.gender && (
//                 <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
//               )}
//             </div>

//             {/* Address - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 <FiMapPin className="inline mr-1" size={14} /> Address <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 name="address"
//                 value={profileData.address}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 rows="3"
//                 placeholder="Enter your complete address"
//                 className={`w-full p-2.5 rounded-lg bg-gray-50 border ${
//                   errors.address ? "border-red-400" : "border-gray-300"
//                 } outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800 text-sm resize-none ${
//                   !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : "hover:border-gray-400"
//                 }`}
//               />
//               {errors.address && (
//                 <p className="text-red-500 text-xs mt-1">{errors.address}</p>
//               )}
//             </div>
//           </div>

//           {/* RIGHT SIDE - WhatsApp, DOB, Anniversary, Church Family Number */}
//           <div className="space-y-5">
//             {/* WhatsApp Number - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 <FiPhone className="inline mr-1" size={14} /> WhatsApp Number <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="tel"
//                 name="whatsappNumber"
//                 value={profileData.whatsappNumber}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 placeholder="Enter 10-digit number"
//                 maxLength="10"
//                 className={`w-full p-2.5 rounded-lg bg-gray-50 border ${
//                   errors.whatsappNumber ? "border-red-400" : "border-gray-300"
//                 } outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800 text-sm ${
//                   !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : "hover:border-gray-400"
//                 }`}
//               />
//               {errors.whatsappNumber && (
//                 <p className="text-red-500 text-xs mt-1">{errors.whatsappNumber}</p>
//               )}
//             </div>

//             {/* Date of Birth - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 <FiCalendar className="inline mr-1" size={14} /> Date of Birth <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="date"
//                 name="dob"
//                 value={profileData.dob}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className={`w-full p-2.5 rounded-lg bg-gray-50 border ${
//                   errors.dob ? "border-red-400" : "border-gray-300"
//                 } outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800 text-sm ${
//                   !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : "hover:border-gray-400"
//                 }`}
//               />
//               {errors.dob && (
//                 <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
//               )}
//             </div>

//             {/* Marriage Anniversary Date - Typable only when editing */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 <FiHeart className="inline mr-1" size={14} /> Marriage Anniversary Date
//                 <span className="text-gray-500 text-xs ml-1">(Optional)</span>
//               </label>
//               <input
//                 type="date"
//                 name="anniversaryDate"
//                 value={profileData.anniversaryDate}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className={`w-full p-2.5 rounded-lg bg-gray-50 border border-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800 text-sm ${
//                   !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : "hover:border-gray-400"
//                 }`}
//               />
//             </div>

//             {/* Church Family Number - Optional */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 <FiUsers className="inline mr-1" size={14} /> Church Family Number
//                 <span className="text-gray-500 text-xs ml-1">(Optional)</span>
//               </label>
//               <input
//                 type="text"
//                 name="churchFamilyNumber"
//                 value={profileData.churchFamilyNumber}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 placeholder="Enter your church family number"
//                 className={`w-full p-2.5 rounded-lg bg-gray-50 border border-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800 text-sm ${
//                   !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : "hover:border-gray-400"
//                 }`}
//               />
//             </div>

//             {/* Info Card */}
//             <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200">
//               <p className="text-xs text-blue-700 text-center">
//                 {isEditing && !isSaved 
//                   ? "✏️ Fill all required fields and click Save" 
//                   : !isEditing && isSaved
//                   ? "✅ Profile saved! Click Edit to make changes"
//                   : "📝 Please fill your profile details"}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Validation Message */}
//         <div className="px-6 pb-6">
//           <p className="text-xs text-gray-500 text-center">
//             <span className="text-red-500">*</span> Required fields must be filled to save
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ProfilePage;

// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { motion } from "framer-motion";
// import { FiSave, FiEdit2, FiPhone, FiCalendar, FiHeart, FiCamera, FiMapPin, FiUser, FiUsers } from "react-icons/fi";

// const ProfilePage = () => {
//   const [isEditing, setIsEditing] = useState(true);
//   const [isSaved, setIsSaved] = useState(false);
//   const [profileData, setProfileData] = useState({
//     fullName: "",
//     gender: "",
//     address: "",
//     whatsappNumber: "",
//     dob: "",
//     anniversaryDate: "",
//     churchFamilyNumber: "",
//     photo: null,
//     photoPreview: null,
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData({
//       ...profileData,
//       [name]: value,
//     });
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: "" });
//     }
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileData({
//           ...profileData,
//           photo: file,
//           photoPreview: reader.result,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!profileData.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//     }
//     if (!profileData.gender) {
//       newErrors.gender = "Gender is required";
//     }
//     if (!profileData.address.trim()) {
//       newErrors.address = "Address is required";
//     }
//     if (!profileData.whatsappNumber.trim()) {
//       newErrors.whatsappNumber = "WhatsApp number is required";
//     } else if (!/^\d{10}$/.test(profileData.whatsappNumber)) {
//       newErrors.whatsappNumber = "Enter valid 10-digit number";
//     }
//     if (!profileData.dob) {
//       newErrors.dob = "Date of birth is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSave = () => {
//     if (validateForm()) {
//       toast.success("Profile saved successfully! 🎉");
//       setIsEditing(false);
//       setIsSaved(true);
//       console.log("Profile Data:", profileData);
//     } else {
//       toast.error("Please fill all required fields");
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//     setIsSaved(false);
//     toast.info("You can now edit your profile");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
//       <ToastContainer theme="colored" />

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-5xl w-full mt-12 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
//       >
//         {/* Header with Edit/Save Buttons */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-yellow-50 to-orange-50">
//           <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
//             My Profile
//           </h2>
          
//           <div className="flex gap-3">
//             {/* Save Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleSave}
//               className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all"
//             >
//               <FiSave size={16} />
//               Save
//             </motion.button>

//             {/* Edit Button - Enabled only after save */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleEdit}
//               disabled={!isSaved}
//               className={`flex items-center gap-2 px-5 py-2 rounded-lg text-white text-sm font-medium transition-all ${
//                 !isSaved 
//                   ? "bg-gray-400 cursor-not-allowed opacity-50" 
//                   : "bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg"
//               }`}
//             >
//               <FiEdit2 size={16} />
//               Edit Profile
//             </motion.button>
//           </div>
//         </div>

//         {/* Two Column Layout */}
//         <div className="grid md:grid-cols-2 gap-6 p-6">
          
//           {/* LEFT SIDE - Profile Pic, Name, Gender, Address */}
//           <div className="space-y-5">
//             {/* Photo Upload - Card Style */}
//             <div className="flex justify-center">
//               <div className="relative">
//                 <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 p-0.5">
//                   <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
//                     {profileData.photoPreview ? (
//                       <img
//                         src={profileData.photoPreview}
//                         alt="Profile"
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <FiUser className="text-5xl text-gray-400" />
//                     )}
//                   </div>
//                 </div>
                
//                 {/* Photo upload only visible when editing */}
//                 {isEditing && (
//                   <label className="absolute bottom-1 right-1 p-1.5 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-600 transition shadow-lg">
//                     <FiCamera size={14} className="text-white" />
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handlePhotoChange}
//                       className="hidden"
//                     />
//                   </label>
//                 )}
//               </div>
//             </div>

//             {/* Full Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 <FiUser className="inline mr-1" size={12} /> Full Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="fullName"
//                 value={profileData.fullName}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 placeholder="Enter your full name"
//                 className={`w-full p-2.5 rounded-lg border ${
//                   errors.fullName ? "border-red-400 bg-red-50" : "border-gray-300 bg-gray-50"
//                 } outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-gray-800 text-sm ${
//                   !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
//                 }`}
//               />
//             </div>

//             {/* Gender */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Gender <span className="text-red-500">*</span>
//               </label>
//               <div className="flex gap-6">
//                 {["Male", "Female", "Other"].map((option) => (
//                   <label key={option} className="flex items-center gap-2 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="gender"
//                       value={option}
//                       checked={profileData.gender === option}
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                       className="w-4 h-4 text-yellow-500 focus:ring-yellow-500"
//                     />
//                     <span className={`text-sm text-gray-700 ${!isEditing ? "opacity-60" : ""}`}>{option}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Address */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 <FiMapPin className="inline mr-1" size={12} /> Address <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 name="address"
//                 value={profileData.address}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 rows="3"
//                 placeholder="Enter your complete address"
//                 className={`w-full p-2.5 rounded-lg border ${
//                   errors.address ? "border-red-400 bg-red-50" : "border-gray-300 bg-gray-50"
//                 } outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-gray-800 text-sm resize-none ${
//                   !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
//                 }`}
//               />
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="space-y-5">
//             {/* WhatsApp Number */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 <FiPhone className="inline mr-1" size={12} /> WhatsApp Number <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="tel"
//                 name="whatsappNumber"
//                 value={profileData.whatsappNumber}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 placeholder="Enter 10-digit number"
//                 maxLength="10"
//                 className={`w-full p-2.5 rounded-lg border ${
//                   errors.whatsappNumber ? "border-red-400 bg-red-50" : "border-gray-300 bg-gray-50"
//                 } outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-gray-800 text-sm ${
//                   !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
//                 }`}
//               />
//             </div>

//             {/* Date of Birth */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 <FiCalendar className="inline mr-1" size={12} /> Date of Birth <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="date"
//                 name="dob"
//                 value={profileData.dob}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className={`w-full p-2.5 rounded-lg border ${
//                   errors.dob ? "border-red-400 bg-red-50" : "border-gray-300 bg-gray-50"
//                 } outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-gray-800 text-sm ${
//                   !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
//                 }`}
//               />
//             </div>

//             {/* Marriage Anniversary Date */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 <FiHeart className="inline mr-1" size={12} /> Marriage Anniversary Date
//                 <span className="text-gray-400 text-xs ml-1">(Optional)</span>
//               </label>
//               <input
//                 type="date"
//                 name="anniversaryDate"
//                 value={profileData.anniversaryDate}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className={`w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-gray-800 text-sm ${
//                   !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
//                 }`}
//               />
//             </div>

//             {/* Church Family Number */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 <FiUsers className="inline mr-1" size={12} /> Church Family Number
//                 <span className="text-gray-400 text-xs ml-1">(Optional)</span>
//               </label>
//               <input
//                 type="text"
//                 name="churchFamilyNumber"
//                 value={profileData.churchFamilyNumber}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 placeholder="Enter your church family number"
//                 className={`w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-gray-800 text-sm ${
//                   !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
//                 }`}
//               />
//             </div>

//             {/* Info Card */}
//             <div className="mt-6 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
//               <p className="text-xs text-yellow-700 text-center font-medium">
//                 {isEditing && !isSaved 
//                   ? "✏️ Fill all required fields and click Save" 
//                   : !isEditing && isSaved
//                   ? "✅ Profile saved! Click Edit to make changes"
//                   : "📝 Please fill your profile details"}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Validation Message */}
//         <div className="px-6 pb-6">
//           <p className="text-xs text-gray-500 text-center">
//             <span className="text-red-500">*</span> Required fields must be filled to save
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ProfilePage;

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FiSave, FiEdit2, FiPhone, FiCalendar, FiHeart, FiCamera, FiMapPin, FiUser, FiUsers } from "react-icons/fi";
import { auth, db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { useEffect } from "react";



const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "",
    gender: "",
    address: "",
    whatsappNumber: "",
    dob: "",
    anniversaryDate: "",
    churchFamilyNumber: "",
    photo: null,
    photoPreview: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  useEffect(() => {
  const loadProfile = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const snap = await getDoc(doc(db, "users", user.uid));

    // if (snap.exists()) {
    //   const data = snap.data();

    //   setProfileData({
    //     fullName: data.name || "",
    //     gender: data.gender || "",
    //     address: data.address || "",
    //     whatsappNumber: data.phone || "",
    //     dob: data.dob || "",
    //     anniversaryDate: data.anniversary || "",
    //     churchFamilyNumber: data.churchFamilyNumber || "",
    //     photo: null,
    //     photoPreview: null,
    //   });
    // }
    if (snap.exists()) {
  const data = snap.data();

  setProfileData({
    fullName: data.name || "",
    gender: data.gender || "",
    address: data.address || "",
    whatsappNumber: data.phone || "",
    dob: data.dob || "",
    anniversaryDate: data.anniversary || "",
    churchFamilyNumber: data.churchFamilyNumber || "",
    photo: null,
    photoPreview: null,
  });

  // ✅ ONLY mark saved if FULL DATA exists
  if (data.name && data.phone && data.dob) {
    setIsEditing(false);
    setIsSaved(true);
  } else {
    setIsEditing(true);
    setIsSaved(false);
  }
}
  };

  loadProfile();
}, []);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({
          ...profileData,
          photo: file,
          photoPreview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!profileData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!profileData.gender) {
      newErrors.gender = "Gender is required";
    }
    if (!profileData.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!profileData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = "WhatsApp number is required";
    } else if (!/^\d{10}$/.test(profileData.whatsappNumber)) {
      newErrors.whatsappNumber = "Enter valid 10-digit number";
    }
    if (!profileData.dob) {
      newErrors.dob = "Date of birth is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
  if (!validateForm()) {
    toast.error("Please fill all required fields");
    return;
  }

  try {
    const user = auth.currentUser;

    if (!user) {
      toast.error("User not logged in");
      return;
    }

    await updateDoc(doc(db, "users", user.uid), {
      name: profileData.fullName,
      gender: profileData.gender,
      address: profileData.address,
      phone: profileData.whatsappNumber,
      dob: profileData.dob,
      anniversary: profileData.anniversaryDate,
      churchFamilyNumber: profileData.churchFamilyNumber,
    });

    toast.success("Profile saved successfully 🎉");

    setIsEditing(false);
    setIsSaved(true);

  } catch (error) {
    console.log(error);
    toast.error("Failed to save profile");
  }
};

  const handleEdit = () => {
    setIsEditing(true);
    setIsSaved(false);
    toast.info("You can now edit your profile");
  };

  return (
    <div className="w-full">
      <ToastContainer theme="colored" />

      {/* Hero Section - Same style as Gallery page */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="relative bg-[url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1600&auto=format&fit=crop&q=60')] bg-cover bg-center h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center px-4">
            <motion.h1 
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white text-5xl md:text-6xl font-bold"
            >
              MY PROFILE
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white text-lg md:text-xl mt-4 max-w-2xl mx-auto"
            >
              Manage your personal information and keep your profile up to date
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Profile Form Section - No changes */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full mt-12 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
      >
        {/* Header with Edit/Save Buttons */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-yellow-50 to-orange-50">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            My Profile
          </h2>
          
          <div className="flex gap-3">
            {/* Save Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSave}
              className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all"
            >
              <FiSave size={16} />
              Save
            </motion.button>

            {/* Edit Button - Enabled only after save */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEdit}
              disabled={!isSaved}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-white text-sm font-medium transition-all ${
                !isSaved 
                  ? "bg-gray-400 cursor-not-allowed opacity-50" 
                  : "bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg"
              }`}
            >
              <FiEdit2 size={16} />
              Edit Profile
            </motion.button>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6 p-6">
          
          {/* LEFT SIDE - Profile Pic, Name, Gender, Address */}
          <div className="space-y-5">
            {/* Photo Upload - Card Style */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 p-0.5">
                  <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
                    {profileData.photoPreview ? (
                      <img
                        src={profileData.photoPreview}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FiUser className="text-5xl text-gray-400" />
                    )}
                  </div>
                </div>
                
                {/* Photo upload only visible when editing */}
                {isEditing && (
                  <label className="absolute bottom-1 right-1 p-1.5 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-600 transition shadow-lg">
                    <FiCamera size={14} className="text-white" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiUser className="inline mr-1" size={12} /> Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={profileData.fullName}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Enter your full name"
                className={`w-full p-2.5 rounded-lg border ${
                  errors.fullName ? "border-red-400 bg-red-50" : "border-gray-300 bg-gray-50"
                } outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-gray-800 text-sm ${
                  !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
                }`}
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-6">
                {["Male", "Female", "Other"].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value={option}
                      checked={profileData.gender === option}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-4 h-4 text-yellow-500 focus:ring-yellow-500"
                    />
                    <span className={`text-sm text-gray-700 ${!isEditing ? "opacity-60" : ""}`}>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiMapPin className="inline mr-1" size={12} /> Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                value={profileData.address}
                onChange={handleChange}
                disabled={!isEditing}
                rows="3"
                placeholder="Enter your complete address"
                className={`w-full p-2.5 rounded-lg border ${
                  errors.address ? "border-red-400 bg-red-50" : "border-gray-300 bg-gray-50"
                } outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-gray-800 text-sm resize-none ${
                  !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
                }`}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-5">
            {/* WhatsApp Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiPhone className="inline mr-1" size={12} /> WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="whatsappNumber"
                value={profileData.whatsappNumber}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Enter 10-digit number"
                maxLength="10"
                className={`w-full p-2.5 rounded-lg border ${
                  errors.whatsappNumber ? "border-red-400 bg-red-50" : "border-gray-300 bg-gray-50"
                } outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-gray-800 text-sm ${
                  !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
                }`}
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiCalendar className="inline mr-1" size={12} /> Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="dob"
                value={profileData.dob}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full p-2.5 rounded-lg border ${
                  errors.dob ? "border-red-400 bg-red-50" : "border-gray-300 bg-gray-50"
                } outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-gray-800 text-sm ${
                  !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
                }`}
              />
            </div>

            {/* Marriage Anniversary Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiHeart className="inline mr-1" size={12} /> Marriage Anniversary Date
                <span className="text-gray-400 text-xs ml-1">(Optional)</span>
              </label>
              <input
                type="date"
                name="anniversaryDate"
                value={profileData.anniversaryDate}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-gray-800 text-sm ${
                  !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
                }`}
              />
            </div>

            {/* Church Family Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiUsers className="inline mr-1" size={12} /> Church Family Number
                <span className="text-gray-400 text-xs ml-1">(Optional)</span>
              </label>
              <input
                type="text"
                name="churchFamilyNumber"
                value={profileData.churchFamilyNumber}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Enter your church family number"
                className={`w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-gray-800 text-sm ${
                  !isEditing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
                }`}
              />
            </div>

            {/* Info Card */}
            <div className="mt-6 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
              <p className="text-xs text-yellow-700 text-center font-medium">
                {isEditing && !isSaved 
                  ? "✏️ Fill all required fields and click Save" 
                  : !isEditing && isSaved
                  ? "✅ Profile saved! Click Edit to make changes"
                  : "📝 Please fill your profile details"}
              </p>
            </div>
          </div>
        </div>

        {/* Validation Message */}
        <div className="px-6 pb-6">
          <p className="text-xs text-gray-500 text-center">
            <span className="text-red-500">*</span> Required fields must be filled to save
          </p>
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;

