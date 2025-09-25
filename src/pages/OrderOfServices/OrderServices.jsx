import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OrderServices = () => {
  const [activeDay, setActiveDay] = useState("sunday");
  const [selectedService, setSelectedService] = useState(null);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const contentRef = useRef(null);

  // ✅ Sample data for church services
  const serviceSchedule = {
    sunday: [
      {
        id: 1,
        name: "Early Morning Worship",
        time: "7:00 AM - 8:00 AM",
        location: "Main Sanctuary",
        description: "A traditional service with hymns and liturgy.",
      },
      {
        id: 2,
        name: "Sunday School",
        time: "9:30 AM - 10:30 AM",
        location: "Education Building",
        description: "Bible study classes for all ages.",
      },
      {
        id: 3,
        name: "Morning Worship",
        time: "11:00 AM - 12:30 PM",
        location: "Main Sanctuary",
        description: "Contemporary worship service with full choir and band.",
      },
      {
        id: 4,
        name: "Evening Fellowship",
        time: "6:00 PM - 7:00 PM",
        location: "Chapel",
        description: "Informal gathering with prayer and testimony.",
      },
    ],
    wednesday: [
      {
        id: 5,
        name: "Bible Study",
        time: "6:30 PM - 7:30 PM",
        location: "Fellowship Hall",
        description: "Mid-week study and reflection.",
      },
      {
        id: 6,
        name: "Youth Group",
        time: "6:30 PM - 8:00 PM",
        location: "Youth Center",
        description: "Activities and teaching for teens.",
      },
    ],
    friday: [
      {
        id: 7,
        name: "Prayer Meeting",
        time: "7:00 PM - 8:00 PM",
        location: "Prayer Room",
        description: "Corporate prayer and intercession.",
      },
    ],
    saturday: [
      {
        id: 8,
        name: "Men's Breakfast",
        time: "8:00 AM - 9:30 AM",
        location: "Fellowship Hall",
        description: "Fellowship and teaching for men.",
      },
      {
        id: 9,
        name: "Outreach Ministry",
        time: "10:00 AM - 12:00 PM",
        location: "Community Center",
        description: "Serving the local community.",
      },
    ],
  };

  const daysOfWeek = [
    { id: "sunday", name: "Sunday" },
    { id: "wednesday", name: "Wednesday" },
    { id: "friday", name: "Friday" },
    { id: "saturday", name: "Saturday" },
  ];

  // ✅ Calendar generator function
  const generateCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendarDays = [];

    // Empty slots before start
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(null);
    }
    // Actual days
    for (let d = 1; d <= daysInMonth; d++) {
      calendarDays.push(d);
    }

    return calendarDays;
  };

  const calendarDays = generateCalendar(month, year);
  const today = new Date();

  // ✅ Month navigation
  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  // ✅ Scroll to content
  const handleScroll = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#fce9da]">
      {/* ✅ Hero Section */}
      <div className="relative h-screen flex flex-col items-center justify-center text-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1678197482532-2a58a5ff084d?w=600&auto=format&fit=crop&q=60"
          alt="Church Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="text-5xl md:text-6xl font-bold mb-8 text-white"
          >
            Order of Services
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-white mb-6"
          >
            Experience worship, fellowship, and spiritual growth throughout the
            week with us.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScroll}
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all"
          >
            Learn More
          </motion.button>
        </div>
      </div>

      {/* ✅ Content Section */}
      <div
        ref={contentRef}
        className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Services Section */}
          <div className="lg:col-span-2">
            {/* Day Selector */}
            <motion.div className="flex flex-wrap justify-center gap-2 mb-10">
              {daysOfWeek.map((day) => (
                <motion.button
                  key={day.id}
                  onClick={() => setActiveDay(day.id)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeDay === day.id
                      ? "bg-yellow-400 text-black shadow-lg"
                      : "bg-white text-red-500 hover:bg-gray-100 shadow-md"
                  }`}
                >
                  {day.name}
                </motion.button>
              ))}
            </motion.div>

            {/* Services List */}
            <AnimatePresence mode="wait">
              <motion.div key={activeDay} className="grid gap-6">
                {serviceSchedule[activeDay].map((service) => (
                  <motion.div
                    key={service.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-red-500 mb-2">
                            {service.name}
                          </h3>
                          <div className="flex items-center text-gray-600 mb-2">
                            <span className="mr-2">🕒</span>
                            <span>{service.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <span className="mr-2">📍</span>
                            <span>{service.location}</span>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            setSelectedService(
                              selectedService?.id === service.id
                                ? null
                                : service
                            )
                          }
                          className="px-4 py-2 bg-yellow-100 text-amber-500 rounded-lg hover:bg-yellow-200 transition-colors duration-300 font-medium"
                        >
                          {selectedService?.id === service.id
                            ? "Hide Details"
                            : "View Details"}
                        </button>
                      </div>

                      <AnimatePresence>
                        {selectedService?.id === service.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-gray-100"
                          >
                            <p className="text-gray-700">
                              {service.description}
                            </p>
                            <div className="mt-4 flex justify-end">
                              <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors duration-300 font-medium">
                                Add to Calendar
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ✅ Calendar Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-xl p-6 h-fit"
          >
            <div className="flex items-center justify-between mb-4">
              <button onClick={handlePrevMonth} className="px-3 py-1 ">
                ◀
              </button>
              <h2 className="text-xl font-bold text-red-500">
                {new Date(year, month).toLocaleString("default", {
                  month: "long",
                })}{" "}
                {year}
              </h2>
              <button onClick={handleNextMonth} className="px-3 py-1 ">
                ▶
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day, i) => (
                  <div key={i} className="p-2 text-red-500">
                    {day}
                  </div>
                )
              )}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {calendarDays.map((day, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg ${
                    day === today.getDate() &&
                    month === today.getMonth() &&
                    year === today.getFullYear()
                      ? "bg-yellow-400 text-black font-bold"
                      : day
                      ? "bg-gray-100 text-gray-700"
                      : ""
                  }`}
                >
                  {day || ""}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrderServices;
