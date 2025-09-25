// UpcomingEvents.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const events = [
  {
    id: 1,
    title: "Calendar of Blessings",
    description: "Stay Connected with Chapel TNC’s Vibrant Community",
    date: "April 12, 2024",
    day: "Sunday",
    image:
      "https://images.unsplash.com/photo-1561749748-fe2869ba7da4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2h1cmNoJTIwZXZlbnRzJTIwaW1hZ2VzfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Harvest of Hope Festival",
    description:
      "Celebrating Faith, Family, Fellowship. Together in Love and Belief.",
    date: "April 12, 2024",
    day: "Sunday",
    image:
      "https://media.istockphoto.com/id/2189794943/photo/aerial-night-view-of-notre-dame-cathedral-or-duc-ba-church-special-worship-place-in-central.webp?a=1&b=1&s=612x612&w=0&k=20&c=ml6LlztF_vMSVMi7UzJ9a-vUwKIiSRPxkZBIzqjJBl4=",
  },
  {
    id: 3,
    title: "Grace Concert Series",
    description:
      "Music, Inspiration, Joy. Nourishing the Soul with Melodies and Spirit.",
    date: "April 12, 2024",
    day: "Sunday",
    image:
      "https://plus.unsplash.com/premium_photo-1713720663988-783e4903adb2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNodXJjaCUyMGV2ZW50cyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-56 bg-white">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-2xl border hover:shadow-xl transition-shadow flex flex-col items-center p-6 overflow-hidden"
            >
              {/* Diamond Image */}
              <div className="relative w-48 h-48 mb-6">
                <div className="absolute -left-25 -top-24 w-72 h-72 rotate-45 overflow-hidden rounded-lg border-2 border-gray-200 shadow-md">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover -rotate-45 scale-150"
                  />
                </div>

                {/* Small Date Diamond */}
                <div className="absolute -bottom-24 left-40 md:left-48 -translate-x-1/2 w-32 h-32">
                  <div className="w-full h-full rotate-45 overflow-hidden   flex items-center justify-center">
                    <p className="text-sm text-gray-600 -rotate-45 text-center font-medium">
                      {event.day}
                      <br />
                      {event.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <h3 className="text-lg font-semibold text-gray-800 mt-16 mb-2 text-center">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm text-center mb-4">
                {event.description}
              </p>

              {/* Discover More Button */}
              <button className="flex items-center gap-2 text-red-600 font-medium hover:underline">
                Discover More <FaArrowRightLong />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
