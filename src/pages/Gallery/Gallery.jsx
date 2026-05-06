// import React, { useState } from "react";

// const Gallery = () => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const categories = [
//     "All",
//     "Sunday Worship",
//     "Youth Fellowship",
//     "Community Outreach",
//     "Wedding",
//     "Christmas Celebration",
//     "Prayer Gathering",
//   ];

//   const images = {
//     "Sunday Worship": [
//       "https://www.christianitytoday.com/wp-content/uploads/2018/05/82097.jpg?w=1920",
//       "https://images.squarespace-cdn.com/content/v1/5060dc5084ae007dd9842054/bbd2d9db-138a-41ed-94fd-8eb2b72e44e3/church-worship.jpeg",
//       "https://media.istockphoto.com/id/466666730/photo/church-choir-during-worship-service.jpg?s=612x612&w=0&k=20&c=7N-CMuKEAWdGlZfKDNu895z5-vsTtaSjD-4IDCnBp10=",
//       "https://www.sjp.org.uk/wp-content/uploads/2025/03/MG_0375-1024x683.jpg",
//     ],
//     "Youth Fellowship": [
//       "https://c4so.org/wp-content/uploads/2019/09/Youth-Worship_shutterstock_1099454768-e1567820769696.jpg",
//       "https://i0.wp.com/buildingjerusalem.blog/wp-content/uploads/2021/05/home-groups.jpg?fit=700%2C467&ssl=1&w=640",
//       "https://t4.ftcdn.net/jpg/05/83/60/03/360_F_583600311_qTh910Nn4J5EnrdpuZsLJHVFr8yV5bre.jpg",
//     ],
//     "Community Outreach": [
//       "https://www.vancopayments.com/hs-fs/hubfs/Group%20of%20church%20members%20in%20a%20discipleship%20training%20class.png?width=1024&height=768&name=Group%20of%20church%20members%20in%20a%20discipleship%20training%20class.png",
//     ],
//     Wedding: [
//       "https://media.istockphoto.com/id/662882624/photo/photosession-of-stylish-wedding-couple-on-catholic-church.webp?a=1&b=1&s=612x612&w=0&k=20&c=bI9JSxQRluJIZp-fc50J4PRAjDPidOp9IUlWsm4Ykno=",
//       "https://images.unsplash.com/photo-1522143296900-b2c450f80fa7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2h1cmNoJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1726848318414-578f506f752a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNodXJjaCUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
//     ],
//     "Christmas Celebration": [
//       "https://images.unsplash.com/photo-1481709761765-0876c08d7d26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cmNoJTIwY2hyaXN0bWFzfGVufDB8fDB8fHww",
//       "https://images.unsplash.com/photo-1672190097834-0768cbbc2b01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNodXJjaCUyMGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D",
//     ],
//     "Prayer Gathering": [
//       "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cmNoJTIwcHJheWVyfGVufDB8fDB8fHww",
//       "https://images.unsplash.com/photo-1526746323784-6bc814d79273?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2h1cmNoJTIwcHJheWVyfGVufDB8fDB8fHww",
//     ],
//   };

//   // Merge all images when "All" is selected
//   const displayedImages =
//     activeCategory === "All"
//       ? Object.values(images).flat()
//       : images[activeCategory] || [];

//   return (
//     <div className="w-full">
//       {/* Hero Section */}
//       <div className="relative bg-[url('https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1600&auto=format&fit=crop&q=60')] bg-cover bg-center h-screen flex items-center justify-center">
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div className="relative z-10 text-center px-4">
//           <h1 className="text-white text-5xl md:text-6xl font-bold">GALLERY</h1>
//           <p className="text-white text-lg md:text-xl mt-4 max-w-2xl mx-auto">
//             Experience the life of our church through moments of worship,
//             fellowship, and service captured in photos.
//           </p>
//         </div>
//       </div>

//       {/* Category Tabs */}
//       <div className="flex flex-wrap justify-center gap-3 mt-6 pt-4">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setActiveCategory(cat)}
//             className={`px-4 py-2 rounded-full cursor-pointer text-sm shadow font-medium transition ${
//               activeCategory === cat
//                 ? "bg-red-500 text-white"
//                 : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Images Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
//         {displayedImages.map((src, idx) => (
//           <img
//             key={idx}
//             src={src}
//             alt={activeCategory}
//             className="w-full h-64 object-cover rounded-lg shadow hover:scale-105 transition-transform"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Gallery = () => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const categories = [
//     "All",
//     "Sunday Worship",
//     "Youth Fellowship",
//     "Community Outreach",
//     "Wedding",
//     "Christmas Celebration",
//     "Prayer Gathering",
//   ];

//   const images = {
//     "Sunday Worship": [
//       "https://www.christianitytoday.com/wp-content/uploads/2018/05/82097.jpg?w=1920",
//       "https://images.squarespace-cdn.com/content/v1/5060dc5084ae007dd9842054/bbd2d9db-138a-41ed-94fd-8eb2b72e44e3/church-worship.jpeg",
//       "https://media.istockphoto.com/id/466666730/photo/church-choir-during-worship-service.jpg?s=612x612&w=0&k=20&c=7N-CMuKEAWdGlZfKDNu895z5-vsTtaSjD-4IDCnBp10=",
//       "https://www.sjp.org.uk/wp-content/uploads/2025/03/MG_0375-1024x683.jpg",
//     ],
//     "Youth Fellowship": [
//       "https://c4so.org/wp-content/uploads/2019/09/Youth-Worship_shutterstock_1099454768-e1567820769696.jpg",
//       "https://i0.wp.com/buildingjerusalem.blog/wp-content/uploads/2021/05/home-groups.jpg?fit=700%2C467&ssl=1&w=640",
//       "https://t4.ftcdn.net/jpg/05/83/60/03/360_F_583600311_qTh910Nn4J5EnrdpuZsLJHVFr8yV5bre.jpg",
//     ],
//     "Community Outreach": [
//       "https://www.vancopayments.com/hs-fs/hubfs/Group%20of%20church%20members%20in%20a%20discipleship%20training%20class.png?width=1024&height=768&name=Group%20of%20church%20members%20in%20a%20discipleship%20training%20class.png",
//     ],
//     Wedding: [
//       "https://media.istockphoto.com/id/662882624/photo/photosession-of-stylish-wedding-couple-on-catholic-church.webp?a=1&b=1&s=612x612&w=0&k=20&c=bI9JSxQRluJIZp-fc50J4PRAjDPidOp9IUlWsm4Ykno=",
//       "https://images.unsplash.com/photo-1522143296900-b2c450f80fa7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2h1cmNoJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
//       "https://plus.unsplash.com/premium_photo-1726848318414-578f506f752a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNodXJjaCUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
//     ],
//     "Christmas Celebration": [
//       "https://images.unsplash.com/photo-1481709761765-0876c08d7d26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cmNoJTIwY2hyaXN0bWFzfGVufDB8fDB8fHww",
//       "https://images.unsplash.com/photo-1672190097834-0768cbbc2b01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNodXJjaCUyMGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D",
//     ],
//     "Prayer Gathering": [
//       "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cmNoJTIwcHJheWVyfGVufDB8fDB8fHww",
//       "https://images.unsplash.com/photo-1526746323784-6bc814d79273?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2h1cmNoJTIwcHJheWVyfGVufDB8fDB8fHww",
//     ],
//   };

//   // Merge all images when "All" is selected
//   const displayedImages =
//     activeCategory === "All"
//       ? Object.values(images).flat()
//       : images[activeCategory] || [];

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="w-full"
//     >
//       {/* Hero Section */}
//       <div className="relative bg-[url('https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1600&auto=format&fit=crop&q=60')] bg-cover bg-center h-screen flex items-center justify-center">
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div className="relative z-10 text-center px-4">
//           <motion.h1 
//             initial={{ y: -30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="text-white text-5xl md:text-6xl font-bold"
//           >
//             GALLERY
//           </motion.h1>
//           <motion.p 
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7, delay: 0.4 }}
//             className="text-white text-lg md:text-xl mt-4 max-w-2xl mx-auto"
//           >
//             Experience the life of our church through moments of worship,
//             fellowship, and service captured in photos.
//           </motion.p>
//         </div>
//       </div>

//       {/* Category Tabs */}
//       <motion.div 
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//         className="flex flex-wrap justify-center gap-3 mt-6 pt-4"
//       >
//         {categories.map((cat, index) => (
//           <motion.button
//             key={cat}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3, delay: 0.1 * index }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setActiveCategory(cat)}
//             className={`px-4 py-2 rounded-full cursor-pointer text-sm shadow font-medium transition ${
//               activeCategory === cat
//                 ? "bg-red-500 text-white"
//                 : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
//             }`}
//           >
//             {cat}
//           </motion.button>
//         ))}
//       </motion.div>

//       {/* Images Grid */}
//       <motion.div 
//         key={activeCategory}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.4 }}
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6"
//       >
//         <AnimatePresence mode="wait">
//           {displayedImages.map((src, idx) => (
//             <motion.div
//               key={src + idx}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4, delay: idx * 0.05 }}
//               whileHover={{ scale: 1.05 }}
//               className="overflow-hidden rounded-lg shadow"
//             >
//               <img
//                 src={src}
//                 alt={activeCategory}
//                 className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
//               />
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Gallery;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X } from "lucide-react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gallerySections, setGallerySections] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load data from Firebase
  useEffect(() => {
    loadGalleryData();
  }, []);

  const loadGalleryData = async () => {
    setLoading(true);
    await Promise.all([loadSections(), loadImages()]);
    setLoading(false);
  };

  const loadSections = async () => {
    try {
      const snapshot = await getDocs(collection(db, "gallerySections"));
      const sections = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name
      }));
      console.log("Loaded sections:", sections);
      setGallerySections(sections);
    } catch (error) {
      console.error("Error loading sections:", error);
    }
  };

  const loadImages = async () => {
    try {
      const q = query(collection(db, "galleries"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const images = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("Loaded images:", images.length);
      setGalleryImages(images);
    } catch (error) {
      console.error("Error loading images:", error);
    }
  };

  // Build categories array from gallerySections
  const categories = ["All", ...gallerySections.map(section => section.name)];

  // Build images object grouped by category
  const images = {};
  
  // Initialize empty arrays for each category
  categories.forEach(cat => {
    if (cat !== "All") {
      images[cat] = [];
    }
  });
  
  // Group images by section
  galleryImages.forEach(image => {
    if (images[image.section]) {
      images[image.section].push(image.image);
    }
  });

  // Merge all images when "All" is selected
  const displayedImages =
    activeCategory === "All"
      ? galleryImages.map(img => img.image)
      : images[activeCategory] || [];

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* Hero Section */}
      <div className="relative bg-[url('https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1600&auto=format&fit=crop&q=60')] bg-cover bg-center h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white text-5xl md:text-6xl font-bold"
          >
            GALLERY
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white text-lg md:text-xl mt-4 max-w-2xl mx-auto"
          >
            Experience the life of our church through moments of worship,
            fellowship, and service captured in photos.
          </motion.p>
        </div>
      </div>

      {/* Category Tabs */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-wrap justify-center gap-3 mt-6 pt-4"
      >
        {categories.map((cat, index) => (
          <motion.button
            key={cat}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full cursor-pointer text-sm shadow font-medium transition ${
              activeCategory === cat
                ? "bg-red-500 text-white"
                : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Images Grid */}
      <motion.div 
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6"
      >
        <AnimatePresence mode="wait">
          {displayedImages.map((src, idx) => (
            <motion.div
              key={src + idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-lg shadow cursor-pointer"
              onClick={() => openModal(src)}
            >
              <img
                src={src}
                alt={activeCategory}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Gallery"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
