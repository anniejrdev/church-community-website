import React from "react";
import logo from "../../assets/images/logo.jpg";

const SponsorPayment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md border border-white/20">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Church Logo"
            className="w-16 h-16 rounded-full"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-3xl font-bold text-center text-white mb-2">
          Sponsor Payment
        </h2>
        <p className="text-center text-gray-300 mb-6 text-sm">
          Support the mission and make a difference with your generous
          contribution.
        </p>

        {/* Form */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full py-3 px-4 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none"
          />
          <input
            type="text"
            placeholder="Reason for Sponsorship"
            className="w-full py-3 px-4 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none"
          />
          <input
            type="number"
            placeholder="Amount to Sponsor (₹)"
            className="w-full py-3 px-4 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 transition text-white font-semibold py-3 rounded-full shadow-lg"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default SponsorPayment;
