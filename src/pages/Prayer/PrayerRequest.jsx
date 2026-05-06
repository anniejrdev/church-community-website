// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const PrayerRequest = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     place: "",
//     reason: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     if (!formData.name || !formData.place || !formData.reason) {
//       toast.warning("Please fill all fields");
//       return;
//     }

//     // WhatsApp message
//     const message = `🙏 Prayer Request\n\nName: ${formData.name}\nPlace: ${formData.place}\nReason: ${formData.reason}`;

//     const phoneNumber = "916235628283"; // 👉 Father's number (with country code)

//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//     // open WhatsApp
//     window.open(whatsappUrl, "_blank");

//     toast.success("Prayer request sent successfully 🙏");

//     setFormData({ name: "", place: "", reason: "" });
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center px-4">
//       <ToastContainer theme="colored" />

//       <div className="max-w-5xl w-full  rounded-xl overflow-hidden grid md:grid-cols-2">
        
//         {/* LEFT IMAGE */}
//         <div className="hidden md:block">
//           <img
//             src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65"
//             alt="Prayer"
//             className="h-full w-full object-cover"
//           />
//         </div>

//         {/* RIGHT FORM */}
//        <div className="p-6 text-white">
//   <h2 className="text-2xl font-bold mb-1">Prayer Request</h2>
//   <p className="text-sm text-purple-200 mb-6">Share your heart with us</p>

//   <div className="space-y-4">
//     <input
//       type="text"
//       name="name"
//       placeholder="✨ Your Name"
//       value={formData.name}
//       onChange={handleChange}
//       className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-200"
//     />

//     <input
//       type="text"
//       name="place"
//       placeholder="📍 Your Place"
//       value={formData.place}
//       onChange={handleChange}
//       className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-200"
//     />

//     <textarea
//       name="reason"
//       placeholder="🙏 Prayer Reason"
//       value={formData.reason}
//       onChange={handleChange}
//       rows="3"
//       className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-200 resize-none"
//     />

//     <button
//       onClick={handleSubmit}
//       className="w-full bg-yellow-400 hover:from-yellow-600 hover:to-yellow-800 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
//     >
//       🙏 Submit Prayer Request
//     </button>
//   </div>
// </div>
//       </div>
//     </div>
//   );
// };

// export default PrayerRequest;

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase"; 

const PrayerRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = () => {
  //   if (!formData.name || !formData.place || !formData.reason) {
  //     toast.warning("Please fill all fields");
  //     return;
  //   }

  //   // WhatsApp message
  //   const message = `🙏 Prayer Request\n\nName: ${formData.name}\nPlace: ${formData.place}\nReason: ${formData.reason}`;

  //   const phoneNumber = "916235628283"; // 👉 Father's number (with country code)

  //   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  //   // open WhatsApp
  //   window.open(whatsappUrl, "_blank");

  //   toast.success("Prayer request sent successfully 🙏");

  //   setFormData({ name: "", place: "", reason: "" });
  // };

  const handleSubmit = async () => {
  if (!formData.name || !formData.place || !formData.reason) {
    toast.warning("Please fill all fields");
    return;
  }

  try {
    // 🔥 1. SAVE TO FIREBASE
    await addDoc(collection(db, "prayerRequests"), {
      name: formData.name,
      place: formData.place,
      reason: formData.reason,
      createdAt: Timestamp.now(), // 🔥 important
    });

    // 🔥 2. WHATSAPP
    const message = `🙏 Prayer Request\n\nName: ${formData.name}\nPlace: ${formData.place}\nReason: ${formData.reason}`;

    const phoneNumber = "916235628283";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    toast.success("Prayer request sent 🙏");

    setFormData({ name: "", place: "", reason: "" });

  } catch (error) {
    console.log(error);
    toast.error("Failed to send request");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex items-center justify-center px-4">
      <ToastContainer theme="colored" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full rounded-xl overflow-hidden grid md:grid-cols-2 shadow-xl border border-white/10"
      >
        
        {/* LEFT IMAGE */}
        <div className="hidden md:block relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=350&fit=crop"
            alt="Prayer"
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT FORM - Smaller size */}
        <div className="p-5 text-white bg-gradient-to-br from-white/5 to-white/0">
          <div className="mb-4">
            <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Prayer Request
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mt-1"></div>
            <p className="text-xs text-gray-300 mt-2">Share your heart with us</p>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="✨ Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-yellow-400 focus:bg-white/20 transition-all duration-200 text-white placeholder:text-gray-400 text-sm"
            />

            <input
              type="text"
              name="place"
              placeholder="📍 Your Place"
              value={formData.place}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-yellow-400 focus:bg-white/20 transition-all duration-200 text-white placeholder:text-gray-400 text-sm"
            />

            <textarea
              name="reason"
              placeholder="🙏 Prayer Reason"
              value={formData.reason}
              onChange={handleChange}
              rows="2"
              className="w-full p-2 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-yellow-400 focus:bg-white/20 transition-all duration-200 resize-none text-white placeholder:text-gray-400 text-sm"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 py-2 rounded-lg font-medium transition-all duration-200 shadow-md text-sm"
            >
              🙏 Submit Prayer Request
            </motion.button>
          </div>

          {/* Footer text */}
          <p className="text-center text-[10px] text-gray-500 mt-4">
            Your prayer request will be sent privately
          </p>
        </div>

      </motion.div>
    </div>
  );
};

export default PrayerRequest;