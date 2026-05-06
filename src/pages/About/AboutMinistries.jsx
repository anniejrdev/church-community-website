// // AboutMinistries.jsx
// import { motion } from "framer-motion";
// import gold from "../../assets/svg/gold-gradient-line.svg";

// const ministries = [
//   {
//     date: "5th Nov 2023",
//     title: "Children’s Ministry",
//     description:
//       "Engaging hearts, teaching values, fostering faith, and empowering the next generation in a safe, loving, and inclusive environment.",
//   },
//   {
//     date: "15th Nov 2023",
//     title: "Women Ministry",
//     description:
//       "Empowering, uplifting, and uniting women in faith, promoting spiritual growth, fostering support, and celebrating the strength and diversity of womanhood.",
//   },
//   {
//     date: "18th Nov 2023",
//     title: "Father Ministry",
//     description:
//       "Encouraging, equipping, and nurturing spiritual growth in men, promoting strong values, leadership, and deep connection with faith and family.",
//   },
//   {
//     date: "25th Nov 2023",
//     title: "Youth Ministry",
//     description:
//       "Inspiring young minds, nurturing faith, fostering community, and empowering the next generation to live purposeful, Christ-centered lives.",
//   },
// ];

// export default function AboutMinistries() {
//   return (
//     <section className="bg-[#111] text-white py-16 px-4 md:px-8 lg:px-16">
//       {/* Section Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 text-center space-y-2.5"
//       >
//         <p>Our Latest Ministries</p>
//         <div className="flex justify-center items-center">
//           <img src={gold} alt="" className="w-48" />
//         </div>
//       </motion.h2>

//       {/* Ministries Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//         {ministries.map((ministry, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             className="bg-[#1c1c1c] p-6 rounded-lg shadow-md hover:shadow-lg transition"
//           >
//             <p className="text-sm text-gray-400 mb-2">{ministry.date}</p>
//             <h3 className="text-lg md:text-xl font-semibold mb-3">
//               {ministry.title}
//             </h3>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               {ministry.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import gold from "../../assets/svg/gold-gradient-line.svg";
import { db } from "../../firebase"; // adjust path to your firebase config
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export default function AboutMinistries() {
  const [ministries, setMinistries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // FETCH MINISTRIES FROM FIRESTORE
  useEffect(() => {
    const fetchMinistries = async () => {
      try {
        setLoading(true);
        // Create a query to order by date (newest first) or createdAt
        const ministriesRef = collection(db, "ministries");
        const q = query(ministriesRef, orderBy("date", "desc")); // or orderBy("createdAt", "desc")
        const snapshot = await getDocs(q);
        
        const ministriesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setMinistries(ministriesData);
        setError(null);
      } catch (err) {
        console.error("Error fetching ministries:", err);
        setError("Failed to load ministries. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMinistries();
  }, []);

  // FORMAT DATE FOR DISPLAY (FIXED)
  const formatDate = (dateString) => {
    if (!dateString) return "Date not specified";
    
    // If date is in YYYY-MM-DD format
    if (dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
      const [year, month, day] = dateString.split('-');
      const date = new Date(year, month - 1, day);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
    
    // If already formatted, return as is
    return dateString;
  };

  // LOADING STATE
  if (loading) {
    return (
      <section className="bg-[#111] text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mb-4"></div>
          <p className="text-gray-400">Loading ministries...</p>
        </div>
      </section>
    );
  }

  // ERROR STATE
  if (error) {
    return (
      <section className="bg-[#111] text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#111] text-white py-16 px-4 md:px-8 lg:px-16">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 text-center space-y-2.5"
      >
        <p>Our Latest Ministries</p>
        <div className="flex justify-center items-center">
          <img src={gold} alt="Gold gradient line" className="w-48" />
        </div>
      </motion.h2>

      {/* Ministries Grid */}
      {ministries.length === 0 ? (
        <div className="text-center text-gray-400 py-12">
          <p>No ministries available at the moment. Please check back later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.id || index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1c1c1c] p-6 rounded-lg shadow-md hover:shadow-lg transition hover:transform hover:scale-[1.02] duration-300"
            >
              <p className="text-sm text-gray-400 mb-2">
                {formatDate(ministry.date)}
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-yellow-500">
                {ministry.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {ministry.description}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
