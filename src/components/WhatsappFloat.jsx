import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const whatsappLink = " https://chat.whatsapp.com/Cqby4O1qEsD4yq2Kya3Yeb";

  const handleClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 group">
      
      {/* Tooltip */}
      <div className="absolute bottom-14 left-0 bg-black text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
        Join our WhatsApp community
      </div>

      {/* Button */}
      <button
        onClick={handleClick}
        className="p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
        style={{ backgroundColor: "#25D366" }} // ✅ correct green
      >
        <FaWhatsapp size={26} className="text-white" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;