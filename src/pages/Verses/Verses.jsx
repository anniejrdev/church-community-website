// import { FiDownload, FiHeart, FiShare2, FiBookmark } from "react-icons/fi";
// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function VersesPage() {
//   const [liked, setLiked] = useState(false);

//   const handleDownload = () => {
//     alert("Download feature coming soon!");
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center p-4">
      
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-5xl grid md:grid-cols-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/15"
//       >
        
//         {/* LEFT SIDE IMAGE */}
//         <motion.div 
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="hidden md:block relative overflow-hidden group"
//         >
//           <img
//             src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=500&fit=crop"
//             alt="Bible"
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="absolute bottom-5 left-5 right-5"
//           >
//             <p className="text-white text-xs italic opacity-80">"Your word is a lamp to my feet"</p>
//             <p className="text-white/60 text-xs mt-1">Psalm 119:105</p>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT SIDE CONTENT */}
//         <motion.div 
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="p-7 text-white"
//         >
          
//           {/* Header */}
//           <div className="flex items-center justify-between mb-10">
//             <div>
//               <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Today's Promise
//               </h2>
//               <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-1"></div>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleDownload}
//               className="flex items-center gap-1.5 text-sm px-4 py-2 
//                          bg-white/10 rounded-xl hover:bg-white/20 
//                          border border-white/20 transition-all duration-200"
//             >
//               <FiDownload size={15} />
//               Save
//             </motion.button>
//           </div>

//           {/* Verse Card */}
//           <motion.div 
//             whileHover={{ y: -2 }}
//             className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20
//                        shadow-lg backdrop-blur-sm"
//           >
//             <div className="flex justify-center mb-3 mt-5">
//               <FiHeart className={`text-2xl transition-all duration-300 ${liked ? 'text-red-400 fill-red-400' : 'text-purple-300'}`} />
//             </div>
            
//             <p className="text-lg md:text-xl italic text-gray-100 leading-relaxed text-center font-light">
//               "I can do all things through Christ who strengthens me."
//             </p>

//             <div className="mt-5 pt-3 border-t border-purple-500/20">
//               <p className="text-right font-medium text-purple-300 text-sm">
//                 — Philippians 4:13
//               </p>
//             </div>
//           </motion.div>

//           {/* Action Buttons */}
//           {/* <div className="flex items-center justify-center gap-4 mt-6">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setLiked(!liked)}
//               className="flex items-center gap-2 text-sm px-4 py-2 
//                          bg-white/5 rounded-lg hover:bg-white/10 
//                          border border-white/10 transition-all"
//             >
//               <FiHeart size={14} className={liked ? "fill-red-400 text-red-400" : ""} />
//               {liked ? "Loved" : "Love"}
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center gap-2 text-sm px-4 py-2 
//                          bg-white/5 rounded-lg hover:bg-white/10 
//                          border border-white/10 transition-all"
//             >
//               <FiShare2 size={14} />
//               Share
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center gap-2 text-sm px-4 py-2 
//                          bg-white/5 rounded-lg hover:bg-white/10 
//                          border border-white/10 transition-all"
//             >
//               <FiBookmark size={14} />
//               Save
//             </motion.button>
//           </div> */}

//           {/* Footer */}
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="text-xs text-gray-400 text-center mt-6"
//           >
//             Daily Bread • Stay blessed 🙏
//           </motion.p>

//         </motion.div>

//       </motion.div>
//     </div>
//   );
// }


// import { FiDownload, FiHeart, FiShare2, FiBookmark } from "react-icons/fi";
// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function VersesPage() {
//   const [liked, setLiked] = useState(false);

//   const handleDownload = () => {
//     alert("Download feature coming soon!");
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center p-4">
      
//       {/* POSTER CARD */}
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-2xl bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 
//                    rounded-2xl overflow-hidden shadow-2xl border border-white/20"
//       >
        
//         {/* Poster Image Section */}
//         <div className="relative h-80 overflow-hidden">
//           <img
//             src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&h=500&fit=crop"
//             alt="Prayer"
//             className="w-full h-full object-cover"
//           />
          
//           {/* Dark Overlay for text readability */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
//           {/* Image Text Overlay */}
//           <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs mb-3">
//                 🙏 Verse of the Day
//               </div>
//               <h2 className="text-2xl md:text-3xl font-bold italic leading-relaxed">
//                 "I can do all things through Christ who strengthens me."
//               </h2>
//               <p className="text-purple-200 mt-2 text-sm">— Philippians 4:13 —</p>
//             </motion.div>
//           </div>
//         </div>

//         {/* Bottom Content Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="p-6 text-white"
//         >
//           {/* Header with Actions */}
//           <div className="flex items-center justify-between mb-4">
//             <div>
//               <h3 className="text-sm font-semibold text-purple-200">Today's Promise</h3>
//               <div className="w-8 h-0.5 bg-purple-400 rounded-full mt-1"></div>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleDownload}
//               className="flex items-center gap-1.5 text-sm px-3 py-1.5 
//                          bg-white/10 rounded-lg hover:bg-white/20 
//                          border border-white/20 transition-all duration-200"
//             >
//               <FiDownload size={14} />
//               Save
//             </motion.button>
//           </div>

         
         

//           {/* Footer */}
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="text-xs text-gray-400 text-center mt-6 pt-3 border-t border-white/10"
//           >
//             Daily Bread • Stay blessed 🙏
//           </motion.p>

//         </motion.div>

//       </motion.div>
//     </div>
//   );
// }

// export default function VersePoster() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black p-4">
      
//       <div
//         id="poster"
//         className="relative w-full max-w-xl h-[400px] rounded-lg overflow-hidden"
//       >
        
//         {/* Background Image */}
//         <img
//           src="https://images.openai.com/static-rsc-4/HySvV1ZpmXncsKLJOXx_4_2wuAxP5H9qTmsIN7J3-F43cp4Rnapu1MwImvw5MMlz8bkQW5Zr4CfCdZgI6QJPaBCKp4F-qwpvkAE7fDCXYhMIsBI-4bMptY-Ejv5voxZlAxj8-rkZtjvgTe5J8xvRqsMy-5SsB10aA4UrzmGuESIbou0wlqPbHvY0f2kQaC9M?purpose=fullsize"
//           alt="verse"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40"></div>

//         {/* Content */}
//         <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 text-white">
          
//           <p className="text-sm tracking-wide mb-2">
//             IF YOU
//           </p>

//           <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
//             BELIEVE,
//           </h1>

//           <p className="text-sm mt-2">
//             YOU WILL RECEIVE WHATEVER YOU ASK FOR IN
//           </p>

//           <h2 className="text-5xl font-light mt-2">
//             prayer
//           </h2>

//           <p className="mt-4 text-sm tracking-widest">
//             MATTHEW 21:22
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { FiDownload } from "react-icons/fi";

// export default function VersePoster() {
//   // 👉 Admin will change this full text later
//   const verse = "If you believe, you will receive whatever you ask for in prayer.";
//   const reference = "Matthew 21:22";

//   return (
//     <div className="min-h-screen bg-black flex flex-col items-center p-4 ">

//       {/* Top Bar */}
//       <div className="w-full max-w-xl flex items-center justify-between mb-3 mt-30">
//         <div></div>

//         <h2 className="text-white text-sm tracking-widest">
//           TODAY PROMISE
//         </h2>

//         <button className="flex items-center gap-1 text-xs px-3 py-1 border border-white text-white rounded hover:bg-white hover:text-black transition">
//           <FiDownload />
//           Save
//         </button>
//       </div>

//       {/* Poster */}
//       <div
//         id="poster"
//         className="relative w-full max-w-xl h-[400px] rounded-lg overflow-hidden"
//       >
        
//         {/* Background */}
//         <img
//           src="https://images.openai.com/static-rsc-4/HySvV1ZpmXncsKLJOXx_4_2wuAxP5H9qTmsIN7J3-F43cp4Rnapu1MwImvw5MMlz8bkQW5Zr4CfCdZgI6QJPaBCKp4F-qwpvkAE7fDCXYhMIsBI-4bMptY-Ejv5voxZlAxj8-rkZtjvgTe5J8xvRqsMy-5SsB10aA4UrzmGuESIbou0wlqPbHvY0f2kQaC9M?purpose=fullsize"
//           alt="verse"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         <div className="absolute inset-0 bg-black/50"></div>

//         {/* Content */}
//         <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 text-white">
          
//           {/* Verse (single h tag) */}
//           <h1 className="text-2xl md:text-3xl font-semibold leading-relaxed">
//             "{verse}"
//           </h1>

//           {/* Reference */}
//           <h2 className="mt-4 text-sm tracking-widest">
//             — {reference}
//           </h2>

//         </div>
//       </div>
//     </div>
//   );
// }

import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

export default function VersePoster() {
  // 👉 Admin will change this full text later
  const verse = "If you believe, you will receive whatever you ask for in prayer.";
  const reference = "Matthew 21:22";

  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-4">

      {/* Top Bar */}
      <div className="w-full max-w-xl flex items-center justify-between mb-4 mt-35">
        <div>
            
        </div>

        {/* Today's Promise - Improved */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl rounded-full"></div>
          <h2 className="relative text-white text-xs tracking-[0.2em] font-medium px-4 py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            ✨ TODAY'S PROMISE ✨
          </h2>
        </div>

        {/* Save Button - Improved */}
        {/* <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-yellow-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
        >
          <FiDownload size={12} />
          Save
        </motion.button> */}
        <motion.button 
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="relative group flex items-center justify-center text-xs p-1.5  text-white rounded-lg hover:shadow-lg transition-all duration-200 w-8 h-8"
>
  <FiDownload size={14} />
  
  {/* Tooltip */}
  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200
                   bg-gray-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap
                   pointer-events-none">
    Save poster
  </span>
</motion.button>
      </div>

      {/* Poster */}
      <div
        id="poster"
        className="relative w-full mt-5 max-w-xl h-[400px] rounded-lg overflow-hidden shadow-xl"
      >
        
        {/* Background */}
        <img
          src="https://images.openai.com/static-rsc-4/HySvV1ZpmXncsKLJOXx_4_2wuAxP5H9qTmsIN7J3-F43cp4Rnapu1MwImvw5MMlz8bkQW5Zr4CfCdZgI6QJPaBCKp4F-qwpvkAE7fDCXYhMIsBI-4bMptY-Ejv5voxZlAxj8-rkZtjvgTe5J8xvRqsMy-5SsB10aA4UrzmGuESIbou0wlqPbHvY0f2kQaC9M?purpose=fullsize"
          alt="verse"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 text-white">
          
          {/* Verse (single h tag) */}
          <h1 className="text-2xl md:text-3xl font-semibold leading-relaxed">
            "{verse}"
          </h1>

          {/* Reference */}
          <h2 className="mt-4 text-sm tracking-widest">
            — {reference}
          </h2>

        </div>
      </div>
    </div>
  );
}