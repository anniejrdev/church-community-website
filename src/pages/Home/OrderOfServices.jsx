import React from "react";
import { motion } from "framer-motion";
import { FaChurch, FaBookBible, FaPeopleGroup } from "react-icons/fa6";
import gold from "../../assets/svg/gold-gradient-line.svg";

const OrderOfServices = () => {
  const services = [
    {
      time: "07:00 AM",
      title: "Morning Prayer",
      desc: "Start your day with blessings and peace through our daily morning prayer.",
      //   icon: <FaPray className="text-xl" />,
    },
    {
      time: "09:30 AM",
      title: "Sunday Worship",
      desc: "Join us for worship, gospel, and fellowship with the community.",
      //   icon: <FaChurch className="text-xl" />,
    },
    {
      time: "11:00 AM",
      title: "Bible Study",
      desc: "Deep dive into the scriptures and understand the Word of God together.",
      //   icon: <FaBookBible className="text-xl" />,
    },
    {
      time: "12:00 PM",
      title: "Youth Fellowship",
      desc: "Special service for our youth community with contemporary worship.",
      //   icon: <FaPeopleGroup className="text-xl" />,
    },
    {
      time: "03:00 PM",
      title: "Bible Study (Advanced)",
      desc: "In-depth analysis of scripture for those looking to deepen their understanding.",
      //   icon: <FaBookBible className="text-xl" />,
    },
    {
      time: "06:00 PM",
      title: "Evening Service",
      desc: "Conclude the day with soulful hymns, prayers, and inspirational preaching.",
      //   icon: <FaPray className="text-xl" />,
    },
  ];

  return (
    <section className="relative py-16 px-6 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1705627659700-59ec7d5ee3b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGNodXJjaCUyMGltYWdlcyUyMHN0YWdlJTIwc2luZ2luZ3xlbnwwfHwwfHx8MA%3D%3D')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border-white/20 mb-6"
          >
            <FaChurch className="text-4xl text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-1 tracking-wide">
            Order of Services
          </h2>
          <div className="flex justify-center items-center">
            <img src={gold} alt="" className="w-48" />
          </div>
          <p className="mt-10 text-gray-100 max-w-2xl mx-auto text-lg">
            Here's today's schedule for worship, prayer, and fellowship at our
            church.
          </p>
        </motion.div>

        {/* Time Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl bg-white/5 backdrop-blur-lg border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex justify-center items-center w-full md:w-auto">
                <div className="flex-shrink-0  relative">
                  <div className="absolute -inset-2 rounded-full blur  transition-all"></div>
                  <div className="relative flex items-center justify-center w-18 h-18 rounded-full bg-gray-900/80 font-bold shadow-lg">
                    <span className="text-sm font-bold">{service.time}</span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {/* <span className="text-amber-500">{service.icon}</span> */}
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-200 text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          className="text-center mt-12 text-gray-200 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          "For where two or three gather in my name, there am I with them." -
          Matthew 18:20
        </motion.div>
      </div>
    </section>
  );
};

export default OrderOfServices;
