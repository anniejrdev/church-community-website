// import React from "react";
// import { FaCross, FaBullseye, FaHeart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

  

// const Ministries = () => {
//   const navigate = useNavigate();
//   const items = [
//     {
//       icon: <FaCross className="text-4xl text-gray-700" />,
//       title: "GET CONNECTED",
//       desc: "It doesn't matter how long you've been on this journey with Christ, we are here to help you take the next step.",
//       btn: "LEARN MORE",
//     },
//     {
//       icon: <FaBullseye className="text-4xl text-gray-700" />,
//       title: "VOLUNTEER",
//       desc: "At Life Center UMC, we’re not just looking for volunteers. We’re looking to help people discover their purpose.",
//       btn: "LEARN MORE",
//     },
//     {
//       icon: <FaHeart className="text-4xl text-gray-700" />,
//       title: "PRAYER",
//       desc: "Our pastors, ministers, and prayer team are here to stand with you in prayer, and will be praying for your specific needs this week.",
//       btn: "SUBMIT PRAYER REQUEST",
//     },
//   ];

//   return (
//     <section className="py-16 px-6 bg-white">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center space-y-6"
//           >
//             {item.icon}
//             <h3 className="text-xl font-semibold tracking-wide">
//               {item.title}
//             </h3>
//             <p className="text-gray-600 text-sm md:text-base leading-relaxed">
//               {item.desc}
//             </p>
//             <button className="px-6 py-2 rounded-full border border-gray-400 hover:bg-gray-800 hover:text-white transition">
//               {item.btn}
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Ministries;


import React from "react";
import { FaCross, FaBullseye, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Ministries = () => {
  const navigate = useNavigate();

  const items = [
    {
      icon: <FaCross className="text-4xl text-gray-700" />,
      title: "GET CONNECTED",
      desc: "It doesn't matter how long you've been on this journey with Christ, we are here to help you take the next step.",
      btn: "LEARN MORE",
    },
    {
      icon: <FaBullseye className="text-4xl text-gray-700" />,
      title: "VOLUNTEER",
      desc: "At Life Center UMC, we’re not just looking for volunteers. We’re looking to help people discover their purpose.",
      btn: "LEARN MORE",
    },
    {
      icon: <FaHeart className="text-4xl text-gray-700" />,
      title: "PRAYER",
      desc: "Our pastors, ministers, and prayer team are here to stand with you in prayer, and will be praying for your specific needs this week.",
      btn: "SUBMIT PRAYER REQUEST",
    },
  ];

  const handleClick = (title) => {
    if (title === "PRAYER") {
      navigate("/prayer-request");
    }
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-6"
          >
            {item.icon}

            <h3 className="text-xl font-semibold tracking-wide">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>

            <button
              onClick={() => handleClick(item.title)}
              className="px-6 py-2 rounded-full border border-gray-400 hover:bg-gray-800 hover:text-white transition"
            >
              {item.btn}
            </button>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Ministries;
