// AnnouncementDetails.jsx
import React from "react";
import { motion } from "framer-motion";

const AnnouncementDetails = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cmNofGVufDB8fDB8fHww)",
          }}
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 drop-shadow-lg"
          >
            Church Announcements
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl lg:text-xl text-gray-200 mt-4 max-w-3xl leading-relaxed"
          >
            Stay updated with the latest announcements, events, and important
            news from our church community.
          </motion.p>
        </div>
      </div>

      {/* Announcements Section */}
      <div className="relative z-10 py-16 px-6 md:px-12 lg:px-20 bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-8 text-center">
            Latest Announcements
          </h2>

          <div className="space-y-8">
            {/* Single Announcement */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 p-6 rounded-2xl border border-yellow-400/30 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-yellow-400">
                Sunday Worship Gathering
              </h3>
              <p className="text-gray-300 mt-2">
                Join us this Sunday at 10 AM for a special worship service
                followed by fellowship time. All are welcome.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 p-6 rounded-2xl border border-yellow-400/30 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-yellow-400">
                Youth Fellowship
              </h3>
              <p className="text-gray-300 mt-2">
                Our next youth fellowship will be held on Friday at 6 PM. Don’t
                miss out on an evening of fun, learning, and worship.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 p-6 rounded-2xl border border-yellow-400/30 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-yellow-400">
                Community Outreach
              </h3>
              <p className="text-gray-300 mt-2">
                Be part of our outreach program this month as we extend our
                hands to serve the needy in our local community.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnnouncementDetails;
