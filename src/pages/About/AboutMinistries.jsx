// AboutMinistries.jsx
import { motion } from "framer-motion";
import gold from "../../assets/svg/gold-gradient-line.svg";

const ministries = [
  {
    date: "5th Nov 2023",
    title: "Children’s Ministry",
    description:
      "Engaging hearts, teaching values, fostering faith, and empowering the next generation in a safe, loving, and inclusive environment.",
  },
  {
    date: "15th Nov 2023",
    title: "Women Ministry",
    description:
      "Empowering, uplifting, and uniting women in faith, promoting spiritual growth, fostering support, and celebrating the strength and diversity of womanhood.",
  },
  {
    date: "18th Nov 2023",
    title: "Father Ministry",
    description:
      "Encouraging, equipping, and nurturing spiritual growth in men, promoting strong values, leadership, and deep connection with faith and family.",
  },
  {
    date: "25th Nov 2023",
    title: "Youth Ministry",
    description:
      "Inspiring young minds, nurturing faith, fostering community, and empowering the next generation to live purposeful, Christ-centered lives.",
  },
];

export default function AboutMinistries() {
  return (
    <section className="bg-[#111] text-white py-16 px-4 md:px-8 lg:px-16">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 text-center space-y-2.5"
      >
        <p>Our Latest Ministries</p>
        <div className="flex justify-center items-center">
          <img src={gold} alt="" className="w-48" />
        </div>
      </motion.h2>

      {/* Ministries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {ministries.map((ministry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#1c1c1c] p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <p className="text-sm text-gray-400 mb-2">{ministry.date}</p>
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              {ministry.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {ministry.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
