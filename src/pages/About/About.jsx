// import { motion } from "framer-motion";

// const images = [
//   "https://plus.unsplash.com/premium_photo-1733688153005-aab854d11e81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNodXJjaCUyMGltYWdlcyUyMHN0YWdlJTIwc2luZ2luZ3xlbnwwfHwwfHx8MA%3D%3D",
//   "https://plus.unsplash.com/premium_photo-1676576742250-1293c94c1a65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNodXJjaCUyMGltYWdlcyUyMHdpdGglMjB0aGUlMjBtYW55JTIwcGVvcGxlfGVufDB8fDB8fHww", // Top right image
//   "https://images.unsplash.com/photo-1578516849528-9e6152b777ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNodXJjaCUyMGltYWdlcyUyMHdpdGglMjB0aGUlMjBtYW55JTIwcGVvcGxlfGVufDB8fDB8fHww", // Bottom right image
// ];

// const About = () => {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-6 md:px-16 py-12 overflow-hidden">
//       {/* Background with black overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://plus.unsplash.com/premium_photo-1678229915729-7e75d14a6b00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNodXJjaCUyMGltYWdlcyUyMHN0YWdlfGVufDB8fDB8fHww')",
//         }}
//       ></div>
//       <div className="absolute inset-0 bg-black/80"></div>

//       {/* Content */}
//       <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-7xl text-white z-10">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="space-y-8 order-2 md:order-1"
//         >
//           <p className="text-4xl md:text-5xl font-bold leading-snug">
//             Discover the Heart of Church LMS
//           </p>
//           <p className="text-gray-300 leading-relaxed">
//             Background lit layout star italic duplicate device image auto ipsum.
//             Font share arrange flatten ipsum edit draft. Flows shadow figma
//             style invite prototype stroke.
//           </p>
//           <div>
//             <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-md font-semibold transition-colors shadow-lg">
//               Discover more &rarr;
//             </button>
//           </div>
//         </motion.div>

//         {/* Right Side Images - Diamond Shape */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="order-1 md:order-2 relative w-full flex justify-center items-center h-[420px] md:h-[500px]"
//         >
//           {/* Upper Diamond */}
//           <div className="absolute top-32 md:top-60 left-5 md:left-20 z-20">
//             <div className="relative w-32 h-32 md:w-64 md:h-64">
//               <div className="w-full h-full rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-white">
//                 <img
//                   src={images[0]}
//                   alt="about1"
//                   className="w-full h-full object-cover -rotate-45 scale-150 transition-transform duration-500"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="absolute -top-52 md:-top-91 left-10 md:left-10 z-20">
//             <div className="relative w-80 h-80 md:w-[42rem] md:h-[35rem]">
//               <div className="w-full h-full rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-white">
//                 <img
//                   src={images[1]}
//                   alt="about1"
//                   className="w-full h-full object-cover -rotate-45 scale-150 transition-transform duration-500"
//                 />
//               </div>
//             </div>
//             <div className="absolute inset-0 bg-black/45 overflow-hidden rotate-45"></div>
//           </div>
//           <div className="absolute top-52 left-40 md:top-48 md:left-[31rem] z-20">
//             <div className="relative w-96 md:w-[34rem] md:h-[30rem]">
//               <div className="w-full h-full rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-white">
//                 <img
//                   src={images[2]}
//                   alt="about1"
//                   className="w-full h-full object-cover -rotate-45 scale-150 transition-transform duration-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default About;

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const images = [
  "https://plus.unsplash.com/premium_photo-1733688153005-aab854d11e81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNodXJjaCUyMGltYWdlcyUyMHN0YWdlJTIwc2luZ2luZ3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1676576742250-1293c94c1a65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNodXJjaCUyMGltYWdlcyUyMHdpdGglMjB0aGUlMjBtYW55JTIwcGVvcGxlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1578516849528-9e6152b777ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNodXJjaCUyMGltYWdlcyUyMHdpdGglMjB0aGUlMjBtYW55JTIwcGVvcGxlfGVufDB8fDB8fHww",
];

const About = () => {
  const navigate = useNavigate();

  const handleDiscoverMore = () => {
    navigate("/gallery");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 md:px-16 py-12 overflow-hidden">
      {/* Background with black overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1678229915729-7e75d14a6b00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNodXJjaCUyMGltYWdlcyUyMHN0YWdlfGVufDB8fDB8fHww')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-7xl text-white z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8 order-2 md:order-1"
        >
          <p className="text-4xl md:text-5xl font-bold leading-snug">
            Discover the Heart of Church LMS
          </p>
          <p className="text-gray-300 leading-relaxed">
            Background lit layout star italic duplicate device image auto ipsum.
            Font share arrange flatten ipsum edit draft. Flows shadow figma
            style invite prototype stroke.
          </p>
          <div>
            <button 
              onClick={handleDiscoverMore}
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-md font-semibold transition-colors shadow-lg group"
            >
              Discover more 
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </div>
        </motion.div>

        {/* Right Side Images - Diamond Shape */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 relative w-full flex justify-center items-center h-[420px] md:h-[500px]"
        >
          {/* Upper Diamond */}
          <div className="absolute top-32 md:top-60 left-5 md:left-20 z-20">
            <div className="relative w-32 h-32 md:w-64 md:h-64">
              <div className="w-full h-full rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-white">
                <img
                  src={images[0]}
                  alt="about1"
                  className="w-full h-full object-cover -rotate-45 scale-150 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          <div className="absolute -top-52 md:-top-91 left-10 md:left-10 z-20">
            <div className="relative w-80 h-80 md:w-[42rem] md:h-[35rem]">
              <div className="w-full h-full rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-white">
                <img
                  src={images[1]}
                  alt="about1"
                  className="w-full h-full object-cover -rotate-45 scale-150 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-black/45 overflow-hidden rotate-45"></div>
          </div>
          <div className="absolute top-52 left-40 md:top-48 md:left-[31rem] z-20">
            <div className="relative w-96 md:w-[34rem] md:h-[30rem]">
              <div className="w-full h-full rotate-45 overflow-hidden rounded-xl shadow-lg border-4 border-white">
                <img
                  src={images[2]}
                  alt="about1"
                  className="w-full h-full object-cover -rotate-45 scale-150 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
