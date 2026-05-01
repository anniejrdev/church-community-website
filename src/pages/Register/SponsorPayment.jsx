// import React from "react";
// import logo from "../../assets/images/logo.jpg";

// const SponsorPayment = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
//       <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md border border-white/20">
//         {/* Logo */}
//         <div className="flex justify-center mb-6">
//           <img
//             src={logo}
//             alt="Church Logo"
//             className="w-16 h-16 rounded-full"
//           />
//         </div>

//         {/* Title */}
//         <h2 className="text-xl md:text-3xl font-bold text-center text-white mb-2">
//           Sponsor Payment
//         </h2>
//         <p className="text-center text-gray-300 mb-6 text-sm">
//           Support the mission and make a difference with your generous
//           contribution.
//         </p>

//         {/* Form */}
//         <form className="space-y-5">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full py-3 px-4 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none"
//           />
//           <input
//             type="text"
//             placeholder="Reason for Sponsorship"
//             className="w-full py-3 px-4 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none"
//           />
//           <input
//             type="number"
//             placeholder="Amount to Sponsor (₹)"
//             className="w-full py-3 px-4 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none"
//           />

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-red-500 hover:bg-red-600 transition text-white font-semibold py-3 rounded-full shadow-lg"
//           >
//             Submit Payment
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SponsorPayment;

// import React, { useState } from "react";
// import { QRCodeCanvas } from "qrcode.react";
// import logo from "../../assets/images/logo.jpg";

// const SponsorPayment = () => {
//   const [amount, setAmount] = useState("");

//   // 🔥 Replace with your church UPI ID
//   const upiId = "anniean394-2@okaxis";

//   const upiLink = `upi://pay?pa=${upiId}&pn=CSI Church&am=${amount}&cu=INR`;

//   const handlePay = () => {
//     if (!amount) {
//       alert("Please enter amount");
//       return;
//     }
//     window.location.href = upiLink;
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
//       <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md border border-white/20">

//         {/* Logo */}
//         <div className="flex justify-center mb-6">
//           <img src={logo} alt="Church Logo" className="w-16 h-16 rounded-full" />
//         </div>

//         {/* Title */}
//         <h2 className="text-xl md:text-3xl font-bold text-center text-white mb-2">
//           Sponsor Payment
//         </h2>
//         <p className="text-center text-gray-300 mb-6 text-sm">
//           Support the mission and make a difference.
//         </p>

//         {/* Form */}
//         <div className="space-y-5">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full py-3 px-4 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none"
//           />

//           <input
//             type="text"
//             placeholder="Reason for Sponsorship"
//             className="w-full py-3 px-4 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none"
//           />

//           <input
//             type="number"
//             placeholder="Amount to Sponsor (₹)"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             className="w-full py-3 px-4 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none"
//           />

//           {/* 🔥 QR Code */}
//           {amount && (
//             <div className="flex justify-center mt-4">
//               <div className="bg-white p-3 rounded-lg">
//                 <QRCodeCanvas value={upiLink} size={160} />
//               </div>
//             </div>
//           )}

//           {/* Pay Button */}
//           <button
//             onClick={handlePay}
//             className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-full"
//           >
//             Pay via UPI
//           </button>

//           {/* UPI ID */}
//           <p className="text-center text-gray-400 text-xs">
//             UPI ID: {upiId}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SponsorPayment;


// import React, { useState, useEffect, useRef } from "react";
// import logo from "../../assets/images/logo.jpg";
// import upiImage from "../../assets/images/upi.jpeg"

// const SponsorPayment = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     reason: "",
//   });
//   const [isPaymentVerified, setIsPaymentVerified] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [showTooltip, setShowTooltip] = useState(false);
//   const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
//   const [paymentInitiated, setPaymentInitiated] = useState(false);
//   const buttonRef = useRef(null);

//   // Check if form is filled
//   const isFormFilled = formData.name.trim() !== "" && formData.reason.trim() !== "";

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     // Reset payment verification if form changes
//     if (isPaymentVerified) {
//       setIsPaymentVerified(false);
//     }
//   };

//   // Handle Scan Payment - Opens GPay
//   const handleScanPayment = () => {
//     if (!isFormFilled) {
//       alert("Please fill your Name and Reason for Sponsorship first");
//       return;
//     }

//     // Fixed UPI ID - replace with your actual UPI ID
//     const upiId = "anniean394@okaxis"; // Change this to your church's UPI ID
//     const name = "Church Donation";
//     const amount = ""; // User will enter amount in GPay
//     const note = `Sponsorship Donation - ${formData.name}`;

//     const gpayUrl = `https://pay.google.com/gpay/pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR&tn=${note}`;
    
//     // Store payment initiated flag
//     setPaymentInitiated(true);
    
//     // Open GPay
//     window.location.href = gpayUrl;
    
//     // Set flag to check when user returns
//     sessionStorage.setItem("paymentReturned", "true");
//     sessionStorage.setItem("paymentInitiated", "true");
//   };

//   // Check when user returns from GPay
//   useEffect(() => {
//     const checkPaymentReturn = () => {
//       const returned = sessionStorage.getItem("paymentReturned");
//       const initiated = sessionStorage.getItem("paymentInitiated");
      
//       if (returned === "true" && initiated === "true") {
//         // User returned from payment app
//         setIsPaymentVerified(true);
//         sessionStorage.removeItem("paymentReturned");
//         sessionStorage.removeItem("paymentInitiated");
//         setPaymentInitiated(false);
//       }
//     };
    
//     checkPaymentReturn();
    
//     // Listen for page visibility change (when returning from GPay)
//     const handleVisibilityChange = () => {
//       if (document.visibilityState === "visible") {
//         const returned = sessionStorage.getItem("paymentReturned");
//         const initiated = sessionStorage.getItem("paymentInitiated");
        
//         if (returned === "true" && initiated === "true") {
//           setIsPaymentVerified(true);
//           sessionStorage.removeItem("paymentReturned");
//           sessionStorage.removeItem("paymentInitiated");
//           setPaymentInitiated(false);
//         }
//       }
//     };
    
//     document.addEventListener("visibilitychange", handleVisibilityChange);
    
//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, []);

//   // Handle mouse move for tooltip
//   const handleMouseMove = (e) => {
//     if (!isFormFilled || !isPaymentVerified) {
//       const rect = e.target.getBoundingClientRect();
//       setTooltipPosition({
//         x: e.clientX + 15,
//         y: e.clientY - 30,
//       });
//     }
//   };

//   // Handle final confirmation
//   const handleConfirmPayment = () => {
//     if (!isFormFilled) {
//       alert("Please fill your Name and Reason for Sponsorship");
//       return;
//     }
    
//     if (!isPaymentVerified) {
//       alert("Please scan and pay via GPay first");
//       return;
//     }
    
//     // Show success message
//     setShowSuccess(true);
    
//     // Reset form after 5 seconds
//     setTimeout(() => {
//       setShowSuccess(false);
//       setFormData({ name: "", reason: "" });
//       setIsPaymentVerified(false);
//     }, 5000);
//   };

//   // Get button tooltip message
//   const getButtonTooltipMessage = () => {
//     if (!isFormFilled) return "⚠️ Please fill your Name and Reason first";
//     if (!isPaymentVerified) return "📱 Please scan QR code and pay via GPay first";
//     return "✅ Click to confirm payment";
//   };

//   // Check if button should be disabled
//   const isButtonDisabled = () => {
//     return !isFormFilled || !isPaymentVerified;
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 py-8">
//       {/* Success Toast Message */}
//       {showSuccess && (
//         <div className="fixed top-5 right-5 z-50 animate-slide-down">
//           <div className="bg-green-500 text-white rounded-lg shadow-xl p-4 max-w-md">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center animate-bounce">
//                 <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <div>
//                 <p className="font-bold text-lg">Payment Successful! 🙏</p>
//                 <p className="text-sm">Thank you {formData.name} for your sponsorship!</p>
//                 <p className="text-xs mt-1 italic">"God loves a cheerful giver" - 2 Corinthians 9:7</p>
//                 <p className="text-xs mt-1">May God bless you abundantly! ✝️</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="max-w-6xl w-full">
//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Left Side - Form Card */}
//           <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
//             {/* Logo */}
//             <div className="flex justify-center mb-6">
//               <img
//                 src={logo}
//                 alt="Church Logo"
//                 className="w-16 h-16 rounded-full"
//               />
//             </div>

//             {/* Title */}
//             <h2 className="text-xl md:text-3xl font-bold text-center text-white mb-2">
//               Sponsor Payment
//             </h2>
//             <p className="text-center text-gray-300 mb-6 text-sm">
//               Support the mission and make a difference with your generous
//               contribution.
//             </p>

//             {/* Form */}
//             <div className="space-y-5">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your Full Name *"
//                   required
//                   className="w-full py-3 px-4 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500"
//                 />
//                 {formData.name && <p className="text-green-400 text-xs mt-1">✓ Name added</p>}
//               </div>
              
//               <div>
//                 <input
//                   type="text"
//                   name="reason"
//                   value={formData.reason}
//                   onChange={handleChange}
//                   placeholder="Reason for Sponsorship *"
//                   required
//                   className="w-full py-3 px-4 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500"
//                 />
//                 {formData.reason && <p className="text-green-400 text-xs mt-1">✓ Reason added</p>}
//               </div>

//               {/* Progress indicator */}
//               <div className="mt-4 pt-2 border-t border-white/20">
//                 <p className="text-gray-400 text-xs mb-2">Payment Status:</p>
//                 <div className="flex items-center gap-2">
//                   <div className={`w-3 h-3 rounded-full ${isFormFilled ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//                   <span className="text-xs text-gray-300">Step 1: Fill details</span>
//                 </div>
//                 <div className="flex items-center gap-2 mt-1">
//                   <div className={`w-3 h-3 rounded-full ${isPaymentVerified ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//                   <span className="text-xs text-gray-300">Step 2: Scan & Pay via GPay</span>
//                 </div>
//                 <div className="flex items-center gap-2 mt-1">
//                   <div className={`w-3 h-3 rounded-full ${isFormFilled && isPaymentVerified ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//                   <span className="text-xs text-gray-300">Step 3: Confirm payment</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Scanner Card */}
//           <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 flex flex-col items-center justify-center">
//             <div className="text-center mb-6">
//               <h3 className="text-2xl font-bold text-white mb-2">Scan to Pay</h3>
//               <p className="text-gray-300 text-sm">Quick & Easy Payment via UPI</p>
//             </div>

//             {/* QR Code */}
//             <div 
//               onClick={handleScanPayment}
//               className={`cursor-pointer transition-transform hover:scale-105 ${!isFormFilled ? 'opacity-50 pointer-events-none' : ''}`}
//             >
//               <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-xl flex flex-col items-center justify-center shadow-lg">
//                 {/* Replace this with your actual QR code image */}
//                 <svg className="w-32 h-32 text-gray-800" viewBox="0 0 100 100" fill="currentColor">
//                   <rect x="10" y="10" width="20" height="20" fill="black" />
//                   <rect x="40" y="10" width="20" height="20" fill="black" />
//                   <rect x="70" y="10" width="20" height="20" fill="black" />
//                   <rect x="10" y="40" width="20" height="20" fill="black" />
//                   <rect x="70" y="40" width="20" height="20" fill="black" />
//                   <rect x="10" y="70" width="20" height="20" fill="black" />
//                   <rect x="40" y="70" width="20" height="20" fill="black" />
//                   <rect x="70" y="70" width="20" height="20" fill="black" />
//                   <rect x="40" y="40" width="20" height="20" fill="white" stroke="black" strokeWidth="2" />
//                 </svg>
//                 <p className="text-xs text-gray-600 mt-2">Scan QR Code</p>
//               </div>
//             </div>

//             {/* Scan & Pay Text */}
//             <div 
//               onClick={handleScanPayment}
//               className={`mt-6 text-center cursor-pointer group ${!isFormFilled ? 'opacity-50 pointer-events-none' : ''}`}
//             >
//               <p className="text-white font-semibold text-lg group-hover:text-red-400 transition">
//                 📱 Scan & Pay
//               </p>
//               <p className="text-gray-400 text-xs mt-1">
//                 Scan QR code with any UPI app (GPay, PhonePe, Paytm)
//               </p>
//             </div>

//             {/* Payment Verified Badge */}
//             {isPaymentVerified && (
//               <div className="mt-4 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg animate-pulse">
//                 <p className="text-green-400 text-sm font-semibold">
//                   ✓ Payment Verified! Ready to confirm
//                 </p>
//               </div>
//             )}

//             {/* Manual UPI Link */}
//             {!isPaymentVerified && (
//               <div className="mt-4 text-center">
//                 <button
//                   onClick={handleScanPayment}
//                   disabled={!isFormFilled}
//                   className={`text-red-400 hover:text-red-300 text-sm underline transition ${!isFormFilled ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 >
//                   Or click here to pay via GPay →
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Confirm Payment Button - Below both cards */}
//         <div className="mt-8 relative" ref={buttonRef}>
//           <div
//             onMouseMove={handleMouseMove}
//             onMouseEnter={() => setShowTooltip(true)}
//             onMouseLeave={() => setShowTooltip(false)}
//           >
//             <button
//               onClick={handleConfirmPayment}
//               disabled={isButtonDisabled()}
//               className={`
//                 w-full max-w-md mx-auto block font-bold py-4 rounded-full shadow-lg transition-all duration-300
//                 ${isButtonDisabled() 
//                   ? 'bg-gray-600 cursor-not-allowed opacity-60' 
//                   : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white transform hover:scale-105'
//                 }
//               `}
//             >
//               {!isFormFilled && "🔒 Fill Details First"}
//               {isFormFilled && !isPaymentVerified && "🔒 Scan & Pay to Unlock"}
//               {isFormFilled && isPaymentVerified && "✅ Click to Confirm Payment"}
//             </button>
//           </div>

//           {/* Custom Tooltip */}
//           {showTooltip && isButtonDisabled() && (
//             <div 
//               className="fixed z-50 bg-black/90 text-white text-sm px-3 py-2 rounded-lg shadow-xl pointer-events-none whitespace-nowrap border border-red-500/50"
//               style={{
//                 left: tooltipPosition.x,
//                 top: tooltipPosition.y,
//                 transform: 'translateX(-50%)'
//               }}
//             >
//               <div className="flex items-center gap-2">
//                 <span>⚠️</span>
//                 <span>{getButtonTooltipMessage()}</span>
//               </div>
//               <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
//                 <div className="border-8 border-transparent border-t-black/90"></div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Add custom CSS for animation */}
//       <style jsx>{`
//         @keyframes slideDown {
//           from {
//             transform: translateY(-100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-slide-down {
//           animation: slideDown 0.3s ease-out;
//         }
//         .animate-bounce {
//           animation: bounce 0.5s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SponsorPayment;

// import React, { useState, useEffect, useRef } from "react";
// import logo from "../../assets/images/logo.jpg";
// import upiImage from "../../assets/images/upi.jpeg";

// const SponsorPayment = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     reason: "",
//   });
//   const [isPaymentVerified, setIsPaymentVerified] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [showTooltip, setShowTooltip] = useState(false);
//   const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
//   const [paymentInitiated, setPaymentInitiated] = useState(false);
//   const buttonRef = useRef(null);

//   // Check if form is filled
//   const isFormFilled = formData.name.trim() !== "" && formData.reason.trim() !== "";

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     // Reset payment verification if form changes
//     if (isPaymentVerified) {
//       setIsPaymentVerified(false);
//     }
//   };

//   // Handle Scan Payment - Opens GPay/UPI Apps
//   const handleScanPayment = () => {
//     if (!isFormFilled) {
//       alert("Please fill your Name and Reason for Sponsorship first");
//       return;
//     }

//     // Your UPI ID
//     const upiId = "anniean394@okaxis";
//     const payeeName = "Church Donation";
//     const amount = ""; // Empty so user can enter amount
//     const note = `Sponsorship Donation - ${formData.name}`;
    
//     // UPI deep link - works with all UPI apps (GPay, PhonePe, Paytm, etc.)
//     const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
    
//     // Store payment initiated flag
//     setPaymentInitiated(true);
    
//     // Try to open UPI app
//     const openUpiApp = () => {
//       // Method 1: Direct location change
//       window.location.href = upiUrl;
      
//       // Fallback: If UPI app doesn't open, show alert after 1 second
//       setTimeout(() => {
//         if (document.visibilityState === 'visible') {
//           alert("Please install GPay, PhonePe, or any UPI app to make payment.\n\nYou can also manually send to UPI ID: anniean394@okaxis");
//         }
//       }, 1000);
//     };
    
//     openUpiApp();
    
//     // Set flag to check when user returns
//     sessionStorage.setItem("paymentReturned", "true");
//     sessionStorage.setItem("paymentInitiated", "true");
//   };

//   // Alternative method: Copy UPI ID to clipboard
//   const copyUpiId = () => {
//     const upiId = "anniean394@okaxis";
//     navigator.clipboard.writeText(upiId);
//     alert("UPI ID copied! Open your UPI app and paste to pay.");
//   };

//   // Check when user returns from GPay
//   useEffect(() => {
//     const checkPaymentReturn = () => {
//       const returned = sessionStorage.getItem("paymentReturned");
//       const initiated = sessionStorage.getItem("paymentInitiated");
      
//       if (returned === "true" && initiated === "true") {
//         // User returned from payment app
//         setIsPaymentVerified(true);
//         sessionStorage.removeItem("paymentReturned");
//         sessionStorage.removeItem("paymentInitiated");
//         setPaymentInitiated(false);
//       }
//     };
    
//     checkPaymentReturn();
    
//     // Listen for page visibility change (when returning from GPay)
//     const handleVisibilityChange = () => {
//       if (document.visibilityState === "visible") {
//         const returned = sessionStorage.getItem("paymentReturned");
//         const initiated = sessionStorage.getItem("paymentInitiated");
        
//         if (returned === "true" && initiated === "true") {
//           setIsPaymentVerified(true);
//           sessionStorage.removeItem("paymentReturned");
//           sessionStorage.removeItem("paymentInitiated");
//           setPaymentInitiated(false);
//         }
//       }
//     };
    
//     document.addEventListener("visibilitychange", handleVisibilityChange);
    
//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, []);

//   // Handle mouse move for tooltip
//   const handleMouseMove = (e) => {
//     if (!isFormFilled || !isPaymentVerified) {
//       setTooltipPosition({
//         x: e.clientX + 15,
//         y: e.clientY - 30,
//       });
//     }
//   };

//   // Handle final confirmation
//   const handleConfirmPayment = () => {
//     if (!isFormFilled) {
//       alert("Please fill your Name and Reason for Sponsorship");
//       return;
//     }
    
//     if (!isPaymentVerified) {
//       alert("Please scan and pay via GPay first");
//       return;
//     }
    
//     // Show success message
//     setShowSuccess(true);
    
//     // Reset form after 5 seconds
//     setTimeout(() => {
//       setShowSuccess(false);
//       setFormData({ name: "", reason: "" });
//       setIsPaymentVerified(false);
//     }, 5000);
//   };

//   // Get button tooltip message
//   const getButtonTooltipMessage = () => {
//     if (!isFormFilled) return "⚠️ Please fill your Name and Reason first";
//     if (!isPaymentVerified) return "📱 Please scan QR code and pay via UPI first";
//     return "✅ Click to confirm payment";
//   };

//   // Check if button should be disabled
//   const isButtonDisabled = () => {
//     return !isFormFilled || !isPaymentVerified;
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 py-8">
//       {/* Success Toast Message */}
//       {showSuccess && (
//         <div className="fixed top-5 right-5 z-50 animate-slide-down">
//           <div className="bg-green-500 text-white rounded-lg shadow-xl p-4 max-w-md">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center animate-bounce">
//                 <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <div>
//                 <p className="font-bold text-lg">Payment Successful! 🙏</p>
//                 <p className="text-sm">Thank you {formData.name} for your sponsorship!</p>
//                 <p className="text-xs mt-1 italic">"God loves a cheerful giver" - 2 Corinthians 9:7</p>
//                 <p className="text-xs mt-1">May God bless you abundantly! ✝️</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="max-w-6xl w-full">
//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Left Side - Form Card */}
//           <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
//             {/* Logo */}
//             <div className="flex justify-center mb-6">
//               <img
//                 src={logo}
//                 alt="Church Logo"
//                 className="w-16 h-16 rounded-full"
//               />
//             </div>

//             {/* Title */}
//             <h2 className="text-xl md:text-3xl font-bold text-center text-white mb-2">
//               Sponsor Payment
//             </h2>
//             <p className="text-center text-gray-300 mb-6 text-sm">
//               Support the mission and make a difference with your generous
//               contribution.
//             </p>

//             {/* Form */}
//             <div className="space-y-5">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your Full Name *"
//                   required
//                   className="w-full py-3 px-4 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500"
//                 />
//                 {formData.name && <p className="text-green-400 text-xs mt-1">✓ Name added</p>}
//               </div>
              
//               <div>
//                 <input
//                   type="text"
//                   name="reason"
//                   value={formData.reason}
//                   onChange={handleChange}
//                   placeholder="Reason for Sponsorship *"
//                   required
//                   className="w-full py-3 px-4 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500"
//                 />
//                 {formData.reason && <p className="text-green-400 text-xs mt-1">✓ Reason added</p>}
//               </div>

//               {/* Progress indicator */}
//               <div className="mt-4 pt-2 border-t border-white/20">
//                 <p className="text-gray-400 text-xs mb-2">Payment Status:</p>
//                 <div className="flex items-center gap-2">
//                   <div className={`w-3 h-3 rounded-full ${isFormFilled ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//                   <span className="text-xs text-gray-300">Step 1: Fill details</span>
//                 </div>
//                 <div className="flex items-center gap-2 mt-1">
//                   <div className={`w-3 h-3 rounded-full ${isPaymentVerified ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//                   <span className="text-xs text-gray-300">Step 2: Scan & Pay via UPI</span>
//                 </div>
//                 <div className="flex items-center gap-2 mt-1">
//                   <div className={`w-3 h-3 rounded-full ${isFormFilled && isPaymentVerified ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//                   <span className="text-xs text-gray-300">Step 3: Confirm payment</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Scanner Card */}
//           <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 flex flex-col items-center justify-center">
//             <div className="text-center mb-6">
//               <h3 className="text-2xl font-bold text-white mb-2">Scan to Pay</h3>
//               <p className="text-gray-300 text-sm">Quick & Easy Payment via UPI</p>
//             </div>

//             {/* QR Code - Your actual UPI QR image */}
//             <div 
//               onClick={handleScanPayment}
//               className={`cursor-pointer transition-transform hover:scale-105 ${!isFormFilled ? 'opacity-50 pointer-events-none' : ''}`}
//             >
//               <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-xl flex flex-col items-center justify-center shadow-lg overflow-hidden">
//                 <img 
//                   src={upiImage} 
//                   alt="UPI QR Code" 
//                   className="w-full h-full object-contain p-2"
//                 />
//               </div>
//             </div>

//             {/* Scan & Pay Text */}
//             <div 
//               onClick={handleScanPayment}
//               className={`mt-6 text-center cursor-pointer group ${!isFormFilled ? 'opacity-50 pointer-events-none' : ''}`}
//             >
//               <p className="text-white font-semibold text-lg group-hover:text-red-400 transition">
//                 📱 Scan & Pay
//               </p>
//               <p className="text-gray-400 text-xs mt-1">
//                 Scan QR code with any UPI app (GPay, PhonePe, Paytm)
//               </p>
//             </div>

//             {/* UPI ID Display with Copy Button */}
//             <div className="mt-2 text-center">
//               <p className="text-gray-500 text-xs">UPI ID: anniean394@okaxis</p>
//               <button
//                 onClick={copyUpiId}
//                 className="text-blue-400 hover:text-blue-300 text-xs mt-1 underline"
//               >
//                 📋 Copy UPI ID
//               </button>
//             </div>

//             {/* Payment Verified Badge */}
//             {isPaymentVerified && (
//               <div className="mt-4 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg animate-pulse">
//                 <p className="text-green-400 text-sm font-semibold">
//                   ✓ Payment Verified! Ready to confirm
//                 </p>
//               </div>
//             )}

//             {/* Manual Payment Options */}
//             {!isPaymentVerified && (
//               <div className="mt-4 text-center space-y-2">
//                 <button
//                   onClick={handleScanPayment}
//                   disabled={!isFormFilled}
//                   className={`text-red-400 hover:text-red-300 text-sm underline transition block w-full ${!isFormFilled ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 >
//                   Click here to pay via UPI →
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Confirm Payment Button - Below both cards */}
//         <div className="mt-8 relative" ref={buttonRef}>
//           <div
//             onMouseMove={handleMouseMove}
//             onMouseEnter={() => setShowTooltip(true)}
//             onMouseLeave={() => setShowTooltip(false)}
//           >
//             <button
//               onClick={handleConfirmPayment}
//               disabled={isButtonDisabled()}
//               className={`
//                 w-full max-w-md mx-auto block font-bold py-4 rounded-full shadow-lg transition-all duration-300
//                 ${isButtonDisabled() 
//                   ? 'bg-gray-600 cursor-not-allowed opacity-60' 
//                   : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white transform hover:scale-105'
//                 }
//               `}
//             >
//               {!isFormFilled && "🔒 Fill Details First"}
//               {isFormFilled && !isPaymentVerified && "🔒 Scan & Pay to Unlock"}
//               {isFormFilled && isPaymentVerified && "✅ Click to Confirm Payment"}
//             </button>
//           </div>

//           {/* Custom Tooltip */}
//           {showTooltip && isButtonDisabled() && (
//             <div 
//               className="fixed z-50 bg-black/90 text-white text-sm px-3 py-2 rounded-lg shadow-xl pointer-events-none whitespace-nowrap border border-red-500/50"
//               style={{
//                 left: tooltipPosition.x,
//                 top: tooltipPosition.y,
//                 transform: 'translateX(-50%)'
//               }}
//             >
//               <div className="flex items-center gap-2">
//                 <span>⚠️</span>
//                 <span>{getButtonTooltipMessage()}</span>
//               </div>
//               <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
//                 <div className="border-8 border-transparent border-t-black/90"></div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Add custom CSS for animation */}
//       <style jsx>{`
//         @keyframes slideDown {
//           from {
//             transform: translateY(-100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-slide-down {
//           animation: slideDown 0.3s ease-out;
//         }
//         .animate-bounce {
//           animation: bounce 0.5s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SponsorPayment;

// import React, { useState, useEffect, useRef } from "react";
// import logo from "../../assets/images/logo.jpg";
// // import upiImage from "../../assets/images/upi.jpeg";
// import { QRCodeCanvas } from "qrcode.react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // const upiUrl = `upi://pay?pa=anniean394@okaxis&pn=Church Donation&cu=INR`;
// // const upiUrl = `upi://pay?pa=anniean394@okaxis&pn=Church Donation&am=${formData.amount}&cu=INR&tn=${formData.name}`;

// // <QRCodeCanvas value={upiUrl} size={150} />

// const SponsorPayment = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     reason: "",
//     amount:"",
//   });
//   const upiUrl = `upi://pay?pa=anniean394@okaxis&pn=Church Donation&am=${formData.amount}&cu=INR&tn=${formData.name}`;
//   <QRCodeCanvas
//   value={upiUrl}
//   size={140}
// />
//   const [isPaymentVerified, setIsPaymentVerified] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [showTooltip, setShowTooltip] = useState(false);
//   const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
//   const [paymentInitiated, setPaymentInitiated] = useState(false);
//   const buttonRef = useRef(null);
//   const [isDetailsSubmitted, setIsDetailsSubmitted] = useState(false);

//   const handleDetailsSubmit = () => {
//   if (!isFormFilled) return;

//   setIsDetailsSubmitted(true);

//   toast.success("Sponsor details submitted!");
// };


//   // Check if form is filled
//   const isFormFilled = formData.name.trim() !== "" && 
//   formData.reason.trim() !== "" &&
//    formData.amount.trim() !== "";



//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     if (isPaymentVerified) {
//       setIsPaymentVerified(false);
//     }
//   };

  
//   // Handle Scan Payment - Opens GPay/UPI Apps
//   const handleScanPayment = () => {
//     if (!isFormFilled) {
//       alert("Please fill your Name and Reason for Sponsorship first");
//       return;
//     }

//     const upiId = "anniean394@okaxis";
//     const payeeName = "Church Donation";
//     const amount = "";
//     const note = `Sponsorship Donation - ${formData.name}`;
    
//     const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
    
//     setPaymentInitiated(true);
//     window.location.href = upiUrl;
    
//     setTimeout(() => {
//       if (document.visibilityState === 'visible') {
//         alert("Please install GPay, PhonePe, or any UPI app to make payment.\n\nYou can also manually send to UPI ID: anniean394@okaxis");
//       }
//     }, 1000);
    
//     sessionStorage.setItem("paymentReturned", "true");
//     sessionStorage.setItem("paymentInitiated", "true");
//   };

//   const copyUpiId = () => {
//     navigator.clipboard.writeText("anniean394@okaxis");
//     alert("UPI ID copied! Open your UPI app and paste to pay.");
//   };

//   useEffect(() => {
//     const checkPaymentReturn = () => {
//       const returned = sessionStorage.getItem("paymentReturned");
//       const initiated = sessionStorage.getItem("paymentInitiated");
      
//       if (returned === "true" && initiated === "true") {
//         setIsPaymentVerified(true);
//         sessionStorage.removeItem("paymentReturned");
//         sessionStorage.removeItem("paymentInitiated");
//         setPaymentInitiated(false);
//       }
//     };
    
//     checkPaymentReturn();
    
//     const handleVisibilityChange = () => {
//       if (document.visibilityState === "visible") {
//         const returned = sessionStorage.getItem("paymentReturned");
//         const initiated = sessionStorage.getItem("paymentInitiated");
        
//         if (returned === "true" && initiated === "true") {
//           setIsPaymentVerified(true);
//           sessionStorage.removeItem("paymentReturned");
//           sessionStorage.removeItem("paymentInitiated");
//           setPaymentInitiated(false);
//         }
//       }
//     };
    
//     document.addEventListener("visibilitychange", handleVisibilityChange);
    
//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, []);

//   const handleMouseMove = (e) => {
//     if (!isFormFilled || !isPaymentVerified) {
//       setTooltipPosition({
//         x: e.clientX + 15,
//         y: e.clientY - 30,
//       });
//     }
//   };

//   const handleConfirmPayment = () => {
//     if (!isFormFilled) {
//       alert("Please fill your Name and Reason for Sponsorship");
//       return;
//     }
    
//     if (!isPaymentVerified) {
//       alert("Please scan and pay via GPay first");
//       return;
//     }
    
//     setShowSuccess(true);
    
//     setTimeout(() => {
//       setShowSuccess(false);
//       setFormData({ name: "", reason: "" });
//       setIsPaymentVerified(false);
//     }, 5000);
//   };

//   const getButtonTooltipMessage = () => {
//     if (!isFormFilled) return "⚠️ Please fill your Name and Reason first";
//     if (!isPaymentVerified) return "📱 Please scan QR code and pay via UPI first";
//     return "✅ Click to confirm payment";
//   };

//   const isButtonDisabled = () => {
//     return !isFormFilled || !isPaymentVerified;
//   };

 



//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 py-6">
//       {/* Success Toast Message */}
//       {/* {showSuccess && (
//         <div className="fixed top-5 right-5 z-50 animate-slide-down">
//           <div className="bg-green-500 text-white rounded-lg shadow-xl p-3 max-w-md">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center animate-bounce">
//                 <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <div>
//                 <p className="font-bold text-base">Payment Successful! 🙏</p>
//                 <p className="text-xs">Thank you {formData.name} for your sponsorship!</p>
//                 <p className="text-xs mt-1 italic">"God loves a cheerful giver" - 2 Corinthians 9:7</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )} */}
// <ToastContainer position="top-right" autoClose={3000} theme="colored" />
     

//       {/* Single Card Container - Smaller Size */}
//       <div className="max-w-4xl mt-10 w-full">
//         <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden">
//           {/* Split into two halves */}
//           <div className="flex flex-col md:flex-row">
            
//             {/* Left Side - Form Section (60% width) */}
//             <div className="md:w-3/5 p-6">
//               {/* Logo */}
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={logo}
//                   alt="Church Logo"
//                   className="w-12 h-12 rounded-full"
//                 />
//               </div>

//               {/* Title */}
//               <h2 className="text-xl font-bold text-center text-white mb-1">
//                 Sponsor Payment
//               </h2>
//               <p className="text-center text-gray-300 mb-4 text-xs">
//                 Support the mission and make a difference
//               </p>

//               {/* Form */}
//               <div className="space-y-4">
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Your Full Name *"
//                     required
//                     className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
//                   />
//                   {/* {formData.name && <p className="text-green-400 text-xs mt-1">✓ Name added</p>} */}
//                 </div>
                
//                 <div>
//                   <input
//                     type="text"
//                     name="reason"
//                     value={formData.reason}
//                     onChange={handleChange}
//                     placeholder="Reason for Sponsorship *"
//                     required
//                     className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
//                   />
//                   {/* {formData.reason && <p className="text-green-400 text-xs mt-1">✓ Reason added</p>} */}
//                 </div>
//                 <div>
//   <input
//     type="number"
//     name="amount"
//     value={formData.amount}
//     onChange={handleChange}
//     placeholder="Sponsor Amount (₹) *"
//     required
//     className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
//   />
// </div>
// <button
//   onClick={handleDetailsSubmit}
//   disabled={isDetailsSubmitted}
//   className={`w-full mt-3 py-2 rounded-md text-sm font-semibold transition ${
//     !isFormFilled
//       ? "bg-gray-600 cursor-not-allowed"
//       : "bg-blue-500 hover:bg-blue-600 text-white"
//   }`}
// >
//   Submit Sponsor Details
// </button>
//                 {/* Progress indicator - Smaller */}
//                <div className="mt-3 pt-2 border-t border-white/20">
//   <p className="text-gray-400 text-xs mb-2">Payment Status:</p>

//   {/* Step 1 */}
//   <div className="flex items-center gap-2">
//     <div className={`w-2 h-2 rounded-full ${isFormFilled ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//     <span className="text-xs text-gray-300">Step 1: Fill Details</span>
//   </div>

//   {/* Step 2 */}
//   <div className="flex items-center gap-2 mt-1">
//     <div className={`w-2 h-2 rounded-full ${isDetailsSubmitted ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//     <span className="text-xs text-gray-300">Step 2: Submit Details</span>
//   </div>

//   {/* Step 3 */}
//   <div className="flex items-center gap-2 mt-1">
//     <div className={`w-2 h-2 rounded-full ${isDetailsSubmitted ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//     <span className="text-xs text-gray-300">Step 3: Scan & Pay</span>
//   </div>
// </div>
//               </div>
//             </div>

//             {/* Right Side - Scanner Section (40% width) */}
//             <div className="md:w-2/5 bg-white/5 p-6 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/10">
//               <div className="text-center mb-3">
//                 <h3 className="text-lg font-bold text-white mb-1">Scan to Pay</h3>
//                 <p className="text-gray-300 text-xs">Quick & Easy UPI Payment</p>
//               </div>

//               {/* QR Code - Smaller */}
//               <div
//   onClick={handleScanPayment}
//   className={`cursor-pointer transition-transform hover:scale-105 ${
//   !isDetailsSubmitted ? "opacity-50 pointer-events-none" : ""
// }`}
// >
//                 <div className="w-32 h-32 md:w-36 md:h-36 bg-white rounded-xl flex flex-col items-center justify-center shadow-lg overflow-hidden">
//                   <QRCodeCanvas
//   value={upiUrl}
//   size={140}
// />
//                 </div>
//               </div>

//               {!isDetailsSubmitted && (
//   <p className="text-yellow-400 text-xs mt-2 text-center">
//     Submit details to enable payment
//   </p>
// )}

//               {/* Scan & Pay Text */}
//               <div 
//                 onClick={handleScanPayment}
//                 className={`mt-3 text-center cursor-pointer group ${!isDetailsSubmitted ? 'opacity-50 pointer-events-none' : ''}`}
//               >
//                 <p className="text-white font-semibold text-sm group-hover:text-red-400 transition">
//                   📱 Scan & Pay
//                 </p>
//                 <p className="text-gray-400 text-xs mt-1">
//                   Scan with GPay, PhonePe, Paytm
//                 </p>
//               </div>

//               {/* UPI ID Display */}
//               <div className="mt-2 text-center">
//                 <p className="text-gray-500 text-xs">UPI: anniean394@okaxis</p>
//                 <button
//                   onClick={copyUpiId}
//                   className="text-blue-400 hover:text-blue-300 text-xs mt-1 underline"
//                 >
//                   📋 Copy ID
//                 </button>
//               </div>

//               {/* Payment Verified Badge */}
//               {/* {isPaymentVerified && (
//                 <div className="mt-3 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-lg animate-pulse">
//                   <p className="text-green-400 text-xs font-semibold">
//                     ✓ Payment Verified!
//                   </p>
//                 </div>
//               )} */}

//               {/* Manual Payment Link */}
//               {!isPaymentVerified && (
//                 <div className="mt-3 text-center">
//                   <button
//                     onClick={handleScanPayment}
//                     disabled={!isFormFilled}
//                     className={`text-red-400 hover:text-red-300 text-xs underline transition ${!isFormFilled ? 'opacity-50 cursor-not-allowed' : ''}`}
//                   >
//                     Click to pay via UPI →
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Confirm Payment Button - Below card */}
//         {/* <div className="mt-15 relative" ref={buttonRef}>
//           <div
//             onMouseMove={handleMouseMove}
//             onMouseEnter={() => setShowTooltip(true)}
//             onMouseLeave={() => setShowTooltip(false)}
//           >
//             <button
//               onClick={handleConfirmPayment}
//               disabled={isButtonDisabled()}
//               className={`
//                 w-full max-w-sm mx-auto block font-bold py-2.5 rounded-full shadow-lg transition-all duration-300 text-sm
//                 ${isButtonDisabled() 
//                   ? 'bg-gray-600 cursor-not-allowed opacity-60' 
//                   : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white transform hover:scale-105'
//                 }
//               `}
//             >
//               {!isFormFilled && "🔒 Fill Details First"}
//               {isFormFilled && !isPaymentVerified && "🔒 Scan & Pay to Unlock"}
//               {isFormFilled && isPaymentVerified && "✅ Click to Confirm Payment"}
//             </button>
//           </div>

//           Custom Tooltip
//           {showTooltip && isButtonDisabled() && (
//             <div 
//               className="fixed z-50 bg-black/90 text-white text-xs px-2 py-1.5 rounded-lg shadow-xl pointer-events-none whitespace-nowrap border border-red-500/50"
//               style={{
//                 left: tooltipPosition.x,
//                 top: tooltipPosition.y,
//                 transform: 'translateX(-50%)'
//               }}
//             >
//               <div className="flex items-center gap-1">
//                 <span>⚠️</span>
//                 <span>{getButtonTooltipMessage()}</span>
//               </div>
//             </div>
//           )}
//         </div> */}
//       </div>

//       <style jsx>{`
//         @keyframes slideDown {
//           from {
//             transform: translateY(-100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-5px); }
//         }
//         .animate-slide-down {
//           animation: slideDown 0.3s ease-out;
//         }
//         .animate-bounce {
//           animation: bounce 0.5s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SponsorPayment;

// import React, { useState, useEffect, useRef } from "react";
// import logo from "../../assets/images/logo.jpg";
// import { QRCodeCanvas } from "qrcode.react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const SponsorPayment = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     reason: "",
//     amount: "",
//     upiId: "",
//   });
//   const [isPaymentVerified, setIsPaymentVerified] = useState(false);
//   const [showTooltip, setShowTooltip] = useState(false);
//   const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
//   const [paymentInitiated, setPaymentInitiated] = useState(false);
//   const buttonRef = useRef(null);

//   // Check if form is filled (Name, Reason, Amount)
//   const isFormFilled = formData.name.trim() !== "" && 
//     formData.reason.trim() !== "" &&
//     formData.amount.trim() !== "";

//   // Check if submit button should be shown
//   const shouldShowSubmitBtn = formData.upiId.trim() !== "" && isPaymentVerified;

//   // Generate UPI URL for QR code
//   const upiUrl = `upi://pay?pa=anniean394@okaxis&pn=Church%20Donation&am=${formData.amount}&cu=INR&tn=${encodeURIComponent(formData.name)}`;

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     if (isPaymentVerified) {
//       // Don't reset payment verification when user types
//       // Only reset if they change name/reason/amount
//       if (e.target.name === "name" || e.target.name === "reason" || e.target.name === "amount") {
//         setIsPaymentVerified(false);
//       }
//     }
//   };

//   // Handle Scan Payment - Opens GPay/UPI Apps
//   const handleScanPayment = () => {
//     if (!isFormFilled) {
//       toast.warning("⚠️ Please fill Name, Reason, and Amount first!");
//       return;
//     }

//     const payeeName = "Church Donation";
//     const amount = formData.amount;
//     const note = `Sponsorship Donation - ${formData.name}`;
    
//     const upiUrl = `upi://pay?pa=anniean394@okaxis&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
    
//     setPaymentInitiated(true);
//     window.location.href = upiUrl;
    
//     setTimeout(() => {
//       if (document.visibilityState === 'visible') {
//         alert("Please install GPay, PhonePe, or any UPI app to make payment.\n\nYou can also manually send to UPI ID: anniean394@okaxis");
//       }
//     }, 1000);
    
//     sessionStorage.setItem("paymentReturned", "true");
//     sessionStorage.setItem("paymentInitiated", "true");
//   };

//   const copyUpiId = () => {
//     navigator.clipboard.writeText("anniean394@okaxis");
//     toast.info("Church UPI ID copied! Open your UPI app and paste to pay.");
//   };

//   useEffect(() => {
//     const checkPaymentReturn = () => {
//       const returned = sessionStorage.getItem("paymentReturned");
//       const initiated = sessionStorage.getItem("paymentInitiated");
      
//       if (returned === "true" && initiated === "true") {
//         setIsPaymentVerified(true);
//         toast.success("✅ Payment detected! Please enter your UPI ID to submit.", {
//           position: "top-right",
//           autoClose: 4000,
//         });
//         sessionStorage.removeItem("paymentReturned");
//         sessionStorage.removeItem("paymentInitiated");
//         setPaymentInitiated(false);
//       }
//     };
    
//     checkPaymentReturn();
    
//     const handleVisibilityChange = () => {
//       if (document.visibilityState === "visible") {
//         const returned = sessionStorage.getItem("paymentReturned");
//         const initiated = sessionStorage.getItem("paymentInitiated");
        
//         if (returned === "true" && initiated === "true") {
//           setIsPaymentVerified(true);
//           toast.success("✅ Payment detected! Please enter your UPI ID to submit.", {
//             position: "top-right",
//             autoClose: 4000,
//           });
//           sessionStorage.removeItem("paymentReturned");
//           sessionStorage.removeItem("paymentInitiated");
//           setPaymentInitiated(false);
//         }
//       }
//     };
    
//     document.addEventListener("visibilitychange", handleVisibilityChange);
    
//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, []);

//   const handleMouseMove = (e) => {
//     if (!shouldShowSubmitBtn) {
//       setTooltipPosition({
//         x: e.clientX + 15,
//         y: e.clientY - 30,
//       });
//     }
//   };

//   const handleFinalSubmit = () => {
//     if (!isFormFilled) {
//       toast.warning("⚠️ Please fill your Name, Reason, and Amount first!");
//       return;
//     }
    
//     if (!isPaymentVerified) {
//       toast.warning("⚠️ Please scan and pay via UPI first!");
//       return;
//     }
    
//     if (formData.upiId.trim() === "") {
//       toast.warning("⚠️ Please enter your UPI ID!");
//       return;
//     }
    
//     // Show success toast with name and Bible verse
//     toast.success(`🙏 Payment Successful! Thank you ${formData.name} for your ₹${formData.amount} sponsorship!`, {
//       position: "top-right",
//       autoClose: 5000,
//       icon: "🎉",
//     });
    
//     toast.info(`📖 "God loves a cheerful giver" - 2 Corinthians 9:7`, {
//       position: "top-right",
//       autoClose: 6000,
//       icon: "✝️",
//     });
    
//     // Reset form after 5 seconds
//     setTimeout(() => {
//       setFormData({ name: "", reason: "", amount: "", upiId: "" });
//       setIsPaymentVerified(false);
//     }, 5000);
//   };

//   const getButtonTooltipMessage = () => {
//     if (!isFormFilled) return "⚠️ Please fill Name, Reason, and Amount first";
//     if (!isPaymentVerified) return "📱 Please scan QR code and pay via UPI first";
//     if (formData.upiId.trim() === "") return "⚠️ Please enter your UPI ID";
//     return "✅ Click to submit payment";
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 py-6">
//       <ToastContainer position="top-right" autoClose={3000} theme="colored" />
     
//       {/* Single Card Container */}
//       <div className="max-w-4xl mt-10 w-full">
//         <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden">
//           {/* Split into two halves */}
//           <div className="flex flex-col md:flex-row">
            
//             {/* Left Side - Form Section */}
//             <div className="md:w-3/5 p-6">
//               {/* Logo */}
//               <div className="flex justify-center mb-4">
//                 <img src={logo} alt="Church Logo" className="w-12 h-12 rounded-full" />
//               </div>

//               {/* Title */}
//               <h2 className="text-xl font-bold text-center text-white mb-1">
//                 Sponsor Payment
//               </h2>
//               <p className="text-center text-gray-300 mb-4 text-xs">
//                 Support the mission and make a difference
//               </p>

//               {/* Form */}
//               <div className="space-y-4">
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Your Full Name *"
//                     required
//                     className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
//                   />
//                 </div>
                
//                 <div>
//                   <input
//                     type="text"
//                     name="reason"
//                     value={formData.reason}
//                     onChange={handleChange}
//                     placeholder="Reason for Sponsorship *"
//                     required
//                     className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     type="number"
//                     name="amount"
//                     value={formData.amount}
//                     onChange={handleChange}
//                     placeholder="Sponsor Amount (₹) *"
//                     required
//                     className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     type="text"
//                     name="upiId"
//                     value={formData.upiId}
//                     onChange={handleChange}
//                     placeholder="Your UPI ID (e.g., name@okhdfcbank) *"
//                     required
//                     className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
//                   />
//                   {isPaymentVerified && formData.upiId.trim() === "" && (
//                     <p className="text-yellow-400 text-xs mt-1">⚠️ Please enter your UPI ID to submit payment</p>
//                   )}
//                   {isPaymentVerified && formData.upiId.trim() !== "" && (
//                     <p className="text-green-400 text-xs mt-1">✓ UPI ID added! Submit button enabled</p>
//                   )}
//                 </div>

//                 {/* Progress indicator */}
//                 <div className="mt-3 pt-2 border-t border-white/20">
//                   <p className="text-gray-400 text-xs mb-2">Payment Status:</p>

//                   <div className="flex items-center gap-2">
//                     <div className={`w-2 h-2 rounded-full ${isFormFilled ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//                     <span className="text-xs text-gray-300">Step 1: Fill Details (Name, Reason, Amount)</span>
//                   </div>

//                   <div className="flex items-center gap-2 mt-1">
//                     <div className={`w-2 h-2 rounded-full ${isPaymentVerified ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//                     <span className="text-xs text-gray-300">Step 2: Scan & Pay via UPI</span>
//                   </div>

//                   <div className="flex items-center gap-2 mt-1">
//                     <div className={`w-2 h-2 rounded-full ${formData.upiId ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//                     <span className="text-xs text-gray-300">Step 3: Enter UPI ID & Submit</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Scanner Section */}
//             <div className="md:w-2/5 bg-white/5 p-6 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/10">
//               <div className="text-center mb-3">
//                 <h3 className="text-lg font-bold text-white mb-1">Scan to Pay</h3>
//                 <p className="text-gray-300 text-xs">Quick & Easy UPI Payment</p>
//               </div>

//               {/* QR Code - Enabled only after form filled */}
//               <div
//                 onClick={handleScanPayment}
//                 className={`cursor-pointer transition-transform hover:scale-105 ${
//                   !isFormFilled ? "opacity-50 pointer-events-none" : ""
//                 }`}
//               >
//                 <div className="w-32 h-32 md:w-36 md:h-36 bg-white rounded-xl flex flex-col items-center justify-center shadow-lg overflow-hidden p-2">
//                   {isFormFilled ? (
//                     <QRCodeCanvas value={upiUrl} size={130} />
//                   ) : (
//                     <div className="text-gray-400 text-xs text-center">Fill details to generate QR</div>
//                   )}
//                 </div>
//               </div>

//               {!isFormFilled && (
//                 <p className="text-yellow-400 text-xs mt-2 text-center">
//                   Fill Name, Reason & Amount to enable payment
//                 </p>
//               )}

//               {/* Scan & Pay Text */}
//               <div 
//                 onClick={handleScanPayment}
//                 className={`mt-3 text-center cursor-pointer group ${!isFormFilled ? 'opacity-50 pointer-events-none' : ''}`}
//               >
//                 <p className="text-white font-semibold text-sm group-hover:text-red-400 transition">
//                   📱 Scan & Pay
//                 </p>
//                 <p className="text-gray-400 text-xs mt-1">
//                   Scan with GPay, PhonePe, Paytm
//                 </p>
//               </div>

//               {/* Church UPI ID Display */}
//               <div className="mt-2 text-center">
//                 <p className="text-gray-500 text-xs">Church UPI: anniean394@okaxis</p>
//                 <button
//                   onClick={copyUpiId}
//                   className="text-blue-400 hover:text-blue-300 text-xs mt-1 underline"
//                 >
//                   📋 Copy Church UPI ID
//                 </button>
//               </div>

//               {/* Payment Verified Badge */}
//               {isPaymentVerified && (
//                 <div className="mt-3 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-lg animate-pulse">
//                   <p className="text-green-400 text-xs font-semibold">
//                     ✓ Payment Verified! Enter your UPI ID above
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Final Submit Button - Shows based on condition */}
//         {shouldShowSubmitBtn && (
//           <div className="mt-6 relative flex justify-center" ref={buttonRef}>
//             <div
//               onMouseMove={handleMouseMove}
//               onMouseEnter={() => setShowTooltip(true)}
//               onMouseLeave={() => setShowTooltip(false)}
//               className="w-full max-w-sm"
//             >
//               <button
//                 onClick={handleFinalSubmit}
//                 className="w-full font-bold py-3 rounded-full shadow-lg transition-all duration-300 text-sm bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transform hover:scale-105 cursor-pointer"
//               >
//                 ✅ Submit Payment
//               </button>
//             </div>

//             {/* Custom Tooltip */}
//             {showTooltip && !shouldShowSubmitBtn && (
//               <div 
//                 className="fixed z-50 bg-black/90 text-white text-xs px-3 py-2 rounded-lg shadow-xl pointer-events-none whitespace-nowrap border border-red-500/50"
//                 style={{
//                   left: tooltipPosition.x,
//                   top: tooltipPosition.y,
//                   transform: 'translateX(-50%)'
//                 }}
//               >
//                 <div className="flex items-center gap-2">
//                   <span>⚠️</span>
//                   <span>{getButtonTooltipMessage()}</span>
//                 </div>
//                 <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
//                   <div className="border-8 border-transparent border-t-black/90"></div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {/* Debug info - Remove in production */}
//         <div className="text-center text-gray-500 text-xs mt-4">
//           Debug: Form Filled: {isFormFilled ? "✅" : "❌"} | 
//           Payment Verified: {isPaymentVerified ? "✅" : "❌"} | 
//           UPI ID: {formData.upiId || "empty"} |
//           Show Submit: {shouldShowSubmitBtn ? "✅" : "❌"}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slideDown {
//           from {
//             transform: translateY(-100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-5px); }
//         }
//         .animate-slide-down {
//           animation: slideDown 0.3s ease-out;
//         }
//         .animate-bounce {
//           animation: bounce 0.5s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SponsorPayment;

// import React, { useState, useEffect, useRef } from "react";
// import logo from "../../assets/images/logo.jpg";
// import { QRCodeCanvas } from "qrcode.react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const SponsorPayment = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     reason: "",
//     amount: "",
//     upiId: "",
//   });
//   const [isPaymentVerified, setIsPaymentVerified] = useState(false);
//   const [showTooltip, setShowTooltip] = useState(false);
//   const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
//   const [paymentInitiated, setPaymentInitiated] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const buttonRef = useRef(null);

//   // Check if form is filled (Name, Reason, Amount)
//   const isFormFilled = formData.name.trim() !== "" && 
//     formData.reason.trim() !== "" &&
//     formData.amount.trim() !== "";

//   // Check if UPI ID is filled
//   const isUpiFilled = formData.upiId.trim() !== "";

//   // Check if submit button should be enabled
//   const isSubmitEnabled = isFormFilled && isPaymentVerified && isUpiFilled && !isSubmitting;

//   // Generate UPI URL for QR code
//   const upiUrl = `upi://pay?pa=anniean394@okaxis&pn=Church%20Donation&am=${formData.amount}&cu=INR&tn=${encodeURIComponent(formData.name)}`;

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle Scan Payment - Opens GPay/UPI Apps
//   const handleScanPayment = () => {
//     if (!isFormFilled) {
//       toast.warning("⚠️ Please fill Name, Reason, and Amount first!");
//       return;
//     }

//     const payeeName = "Church Donation";
//     const amount = formData.amount;
//     const note = `Sponsorship Donation - ${formData.name}`;
    
//     const upiUrl = `upi://pay?pa=anniean394@okaxis&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
    
//     setPaymentInitiated(true);
//     window.location.href = upiUrl;
    
//     setTimeout(() => {
//       if (document.visibilityState === 'visible') {
//         alert("Please install GPay, PhonePe, or any UPI app to make payment.\n\nYou can also manually send to UPI ID: anniean394@okaxis");
//       }
//     }, 1000);
    
//     sessionStorage.setItem("paymentReturned", "true");
//     sessionStorage.setItem("paymentInitiated", "true");
//   };

//   const copyUpiId = () => {
//     navigator.clipboard.writeText("anniean394@okaxis");
//     toast.info("Church UPI ID copied! Open your UPI app and paste to pay.");
//   };

//   useEffect(() => {
//     const checkPaymentReturn = () => {
//       const returned = sessionStorage.getItem("paymentReturned");
//       const initiated = sessionStorage.getItem("paymentInitiated");
      
//       if (returned === "true" && initiated === "true") {
//         setIsPaymentVerified(true);
//         toast.success("✅ Payment detected! Please enter your UPI ID to submit.", {
//           position: "top-right",
//           autoClose: 4000,
//         });
//         sessionStorage.removeItem("paymentReturned");
//         sessionStorage.removeItem("paymentInitiated");
//         setPaymentInitiated(false);
//       }
//     };
    
//     checkPaymentReturn();
    
//     const handleVisibilityChange = () => {
//       if (document.visibilityState === "visible") {
//         const returned = sessionStorage.getItem("paymentReturned");
//         const initiated = sessionStorage.getItem("paymentInitiated");
        
//         if (returned === "true" && initiated === "true") {
//           setIsPaymentVerified(true);
//           toast.success("✅ Payment detected! Please enter your UPI ID to submit.", {
//             position: "top-right",
//             autoClose: 4000,
//           });
//           sessionStorage.removeItem("paymentReturned");
//           sessionStorage.removeItem("paymentInitiated");
//           setPaymentInitiated(false);
//         }
//       }
//     };
    
//     document.addEventListener("visibilitychange", handleVisibilityChange);
    
//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, []);

//   const handleMouseMove = (e) => {
//     if (!isSubmitEnabled && !isSubmitting) {
//       setTooltipPosition({
//         x: e.clientX + 15,
//         y: e.clientY - 30,
//       });
//     }
//   };

//   const handleFinalSubmit = () => {
//     if (!isFormFilled) {
//       toast.warning("⚠️ Please fill your Name, Reason, and Amount first!");
//       return;
//     }
    
//     if (!isPaymentVerified) {
//       toast.warning("⚠️ Please scan and pay via UPI first!");
//       return;
//     }
    
//     if (!isUpiFilled) {
//       toast.warning("⚠️ Please enter your UPI ID!");
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     // Show success toast with name and Bible verse
//     toast.success(`🙏 Payment Successful! Thank you ${formData.name} for your ₹${formData.amount} sponsorship!`, {
//       position: "top-right",
//       autoClose: 5000,
//       icon: "🎉",
//     });
    
//     toast.info(`📖 "God loves a cheerful giver" - 2 Corinthians 9:7`, {
//       position: "top-right",
//       autoClose: 6000,
//       icon: "✝️",
//     });
    
//     // Reset form after 5 seconds
//     setTimeout(() => {
//       setFormData({ name: "", reason: "", amount: "", upiId: "" });
//       setIsPaymentVerified(false);
//       setIsSubmitting(false);
//     }, 5000);
//   };

//   const getButtonTooltipMessage = () => {
//     if (!isFormFilled) return "⚠️ Please fill Name, Reason, and Amount first";
//     if (!isPaymentVerified) return "📱 Please scan QR code and pay via UPI first";
//     if (!isUpiFilled) return "⚠️ Please enter your UPI ID";
//     return "✅ Click to submit payment";
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 py-6">
//       <ToastContainer position="top-right" autoClose={3000} theme="colored" />
     
//       {/* Single Card Container */}
//       <div className="max-w-4xl mt-10 w-full">
//         <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden">
//           {/* Split into two halves */}
//           <div className="flex flex-col md:flex-row">
            
//             {/* Left Side - Form Section */}
//             <div className="md:w-3/5 p-6">
//               {/* Logo */}
//               <div className="flex justify-center mb-4">
//                 <img src={logo} alt="Church Logo" className="w-12 h-12 rounded-full" />
//               </div>

//               {/* Title */}
//               <h2 className="text-xl font-bold text-center text-white mb-1">
//                 Sponsor Payment
//               </h2>
//               <p className="text-center text-gray-300 mb-4 text-xs">
//                 Support the mission and make a difference
//               </p>

//               {/* Form */}
//               <div className="space-y-4">
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Your Full Name *"
//                     required
//                     className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
//                   />
//                 </div>
                
//                 <div>
//                   <input
//                     type="text"
//                     name="reason"
//                     value={formData.reason}
//                     onChange={handleChange}
//                     placeholder="Reason for Sponsorship *"
//                     required
//                     className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     type="number"
//                     name="amount"
//                     value={formData.amount}
//                     onChange={handleChange}
//                     placeholder="Sponsor Amount (₹) *"
//                     required
//                     className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     type="text"
//                     name="upiId"
//                     value={formData.upiId}
//                     onChange={handleChange}
//                     placeholder="Your UPI ID (e.g., name@okhdfcbank) *"
//                     required
//                     className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
//                     disabled={!isPaymentVerified}
//                   />
//                   {!isPaymentVerified && isFormFilled && (
//                     <p className="text-yellow-400 text-xs mt-1">⚠️ Please scan & pay first, then enter UPI ID</p>
//                   )}
//                   {isPaymentVerified && !isUpiFilled && (
//                     <p className="text-yellow-400 text-xs mt-1">⚠️ Please enter your UPI ID to submit payment</p>
//                   )}
//                   {isPaymentVerified && isUpiFilled && (
//                     <p className="text-green-400 text-xs mt-1">✓ UPI ID added! Click Submit Payment below</p>
//                   )}
//                 </div>

//                 {/* Progress indicator */}
//                 <div className="mt-3 pt-2 border-t border-white/20">
//                   <p className="text-gray-400 text-xs mb-2">Payment Status:</p>

//                   <div className="flex items-center gap-2">
//                     <div className={`w-2 h-2 rounded-full ${isFormFilled ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//                     <span className="text-xs text-gray-300">Step 1: Fill Details (Name, Reason, Amount)</span>
//                   </div>

//                   <div className="flex items-center gap-2 mt-1">
//                     <div className={`w-2 h-2 rounded-full ${isPaymentVerified ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//                     <span className="text-xs text-gray-300">Step 2: Scan & Pay via UPI</span>
//                   </div>

//                   <div className="flex items-center gap-2 mt-1">
//                     <div className={`w-2 h-2 rounded-full ${isUpiFilled ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//                     <span className="text-xs text-gray-300">Step 3: Enter UPI ID & Submit</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Scanner Section */}
//             <div className="md:w-2/5 bg-white/5 p-6 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/10">
//               <div className="text-center mb-3">
//                 <h3 className="text-lg font-bold text-white mb-1">Scan to Pay</h3>
//                 <p className="text-gray-300 text-xs">Quick & Easy UPI Payment</p>
//               </div>

//               {/* QR Code - Disabled until form filled */}
//               <div
//                 onClick={handleScanPayment}
//                 className={`cursor-pointer transition-transform hover:scale-105 ${
//                   !isFormFilled ? "opacity-50 pointer-events-none" : ""
//                 }`}
//               >
//                 <div className="w-32 h-32 md:w-36 md:h-36 bg-white rounded-xl flex flex-col items-center justify-center shadow-lg overflow-hidden p-2">
//                   {isFormFilled ? (
//                     <QRCodeCanvas value={upiUrl} size={130} />
//                   ) : (
//                     <div className="text-gray-400 text-xs text-center">Fill details to generate QR</div>
//                   )}
//                 </div>
//               </div>

//               {!isFormFilled && (
//                 <p className="text-yellow-400 text-xs mt-2 text-center">
//                   Fill Name, Reason & Amount to enable payment
//                 </p>
//               )}

//               {isFormFilled && !isPaymentVerified && (
//                 <p className="text-yellow-400 text-xs mt-2 text-center">
//                   🔴 After payment, enter your UPI ID and submit
//                 </p>
//               )}

//               {/* Scan & Pay Text */}
//               <div 
//                 onClick={handleScanPayment}
//                 className={`mt-3 text-center cursor-pointer group ${!isFormFilled ? 'opacity-50 pointer-events-none' : ''}`}
//               >
//                 <p className="text-white font-semibold text-sm group-hover:text-red-400 transition">
//                   📱 Scan & Pay
//                 </p>
//                 <p className="text-gray-400 text-xs mt-1">
//                   Scan with GPay, PhonePe, Paytm
//                 </p>
//               </div>

//               {/* Church UPI ID Display */}
//               <div className="mt-2 text-center">
//                 <p className="text-gray-500 text-xs">Church UPI: anniean394@okaxis</p>
//                 <button
//                   onClick={copyUpiId}
//                   className="text-blue-400 hover:text-blue-300 text-xs mt-1 underline"
//                 >
//                   📋 Copy Church UPI ID
//                 </button>
//               </div>

//               {/* Payment Verified Badge */}
//               {isPaymentVerified && (
//                 <div className="mt-3 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-lg animate-pulse">
//                   <p className="text-green-400 text-xs font-semibold">
//                     ✓ Payment Verified! Now enter your UPI ID above
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Submit Button - Always visible, but disabled until conditions met */}
//         <div className="mt-6 relative flex justify-center" ref={buttonRef}>
//           <div
//             onMouseMove={handleMouseMove}
//             onMouseEnter={() => setShowTooltip(true)}
//             onMouseLeave={() => setShowTooltip(false)}
//             className="w-full max-w-sm"
//           >
//             <button
//               onClick={handleFinalSubmit}
//               disabled={!isSubmitEnabled}
//               className={`w-full font-bold py-3 rounded-full shadow-lg transition-all duration-300 text-sm ${
//                 isSubmitEnabled 
//                   ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transform hover:scale-105 cursor-pointer" 
//                   : "bg-gray-600 cursor-not-allowed opacity-60"
//               }`}
//             >
//               {isSubmitting ? "⏳ Processing..." : "✅ Submit Payment"}
//             </button>
//           </div>

//           {/* Custom Tooltip */}
//           {showTooltip && !isSubmitEnabled && !isSubmitting && (
//             <div 
//               className="fixed z-50 bg-black/90 text-white text-xs px-3 py-2 rounded-lg shadow-xl pointer-events-none whitespace-nowrap border border-red-500/50"
//               style={{
//                 left: tooltipPosition.x,
//                 top: tooltipPosition.y,
//                 transform: 'translateX(-50%)'
//               }}
//             >
//               <div className="flex items-center gap-2">
//                 <span>⚠️</span>
//                 <span>{getButtonTooltipMessage()}</span>
//               </div>
//               <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
//                 <div className="border-8 border-transparent border-t-black/90"></div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slideDown {
//           from {
//             transform: translateY(-100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-5px); }
//         }
//         .animate-slide-down {
//           animation: slideDown 0.3s ease-out;
//         }
//         .animate-bounce {
//           animation: bounce 0.5s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SponsorPayment;

// import React, { useState, useEffect, useRef } from "react";
// import logo from "../../assets/images/logo.jpg";
// import { QRCodeCanvas } from "qrcode.react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const SponsorPayment = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     reason: "",
//     amount: "",
//     upiId: "",
//   });
//   const [isPaymentVerified, setIsPaymentVerified] = useState(false);
//   const [showTooltip, setShowTooltip] = useState(false);
//   const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
//   const [paymentInitiated, setPaymentInitiated] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const buttonRef = useRef(null);

//   // Check if form is filled (Name, Reason, Amount)
//   const isFormFilled = formData.name.trim() !== "" && 
//     formData.reason.trim() !== "" &&
//     formData.amount.trim() !== "";

//   // Check if UPI ID is filled
//   const isUpiFilled = formData.upiId.trim() !== "";

//   // Check if submit button should be enabled (enabled when UPI ID is entered)
//   const isSubmitEnabled = isFormFilled && isPaymentVerified && isUpiFilled && !isSubmitting;

//   // Generate UPI URL for QR code
//   const upiUrl = `upi://pay?pa=anniean394@okaxis&pn=Church%20Donation&am=${formData.amount}&cu=INR&tn=${encodeURIComponent(formData.name)}`;

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle Scan Payment - Opens GPay/UPI Apps
//   const handleScanPayment = () => {
//     if (!isFormFilled) {
//       toast.warning("⚠️ Please fill Name, Reason, and Amount first!");
//       return;
//     }

//     const payeeName = "Church Donation";
//     const amount = formData.amount;
//     const note = `Sponsorship Donation - ${formData.name}`;
    
//     const upiUrl = `upi://pay?pa=anniean394@okaxis&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
    
//     setPaymentInitiated(true);
//     window.location.href = upiUrl;
    
//     setTimeout(() => {
//       if (document.visibilityState === 'visible') {
//         alert("Please install GPay, PhonePe, or any UPI app to make payment.\n\nYou can also manually send to UPI ID: anniean394@okaxis");
//       }
//     }, 1000);
    
//     sessionStorage.setItem("paymentReturned", "true");
//     sessionStorage.setItem("paymentInitiated", "true");
//   };

//   const copyUpiId = () => {
//     navigator.clipboard.writeText("anniean394@okaxis");
//     toast.info("Church UPI ID copied! Open your UPI app and paste to pay.");
//   };

//   useEffect(() => {
//     const checkPaymentReturn = () => {
//       const returned = sessionStorage.getItem("paymentReturned");
//       const initiated = sessionStorage.getItem("paymentInitiated");
      
//       if (returned === "true" && initiated === "true") {
//         setIsPaymentVerified(true);
//         toast.success("✅ Payment detected! Please enter your UPI ID to submit.", {
//           position: "top-right",
//           autoClose: 4000,
//         });
//         sessionStorage.removeItem("paymentReturned");
//         sessionStorage.removeItem("paymentInitiated");
//         setPaymentInitiated(false);
//       }
//     };
    
//     checkPaymentReturn();
    
//     const handleVisibilityChange = () => {
//       if (document.visibilityState === "visible") {
//         const returned = sessionStorage.getItem("paymentReturned");
//         const initiated = sessionStorage.getItem("paymentInitiated");
        
//         if (returned === "true" && initiated === "true") {
//           setIsPaymentVerified(true);
//           toast.success("✅ Payment detected! Please enter your UPI ID to submit.", {
//             position: "top-right",
//             autoClose: 4000,
//           });
//           sessionStorage.removeItem("paymentReturned");
//           sessionStorage.removeItem("paymentInitiated");
//           setPaymentInitiated(false);
//         }
//       }
//     };
    
//     document.addEventListener("visibilitychange", handleVisibilityChange);
    
//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, []);

//   const handleMouseMove = (e) => {
//     if (!isSubmitEnabled && !isSubmitting) {
//       setTooltipPosition({
//         x: e.clientX + 15,
//         y: e.clientY - 30,
//       });
//     }
//   };

//   const handleFinalSubmit = () => {
//     if (!isFormFilled) {
//       toast.warning("⚠️ Please fill your Name, Reason, and Amount first!");
//       return;
//     }
    
//     if (!isPaymentVerified) {
//       toast.warning("⚠️ Please scan and pay via UPI first!");
//       return;
//     }
    
//     if (!isUpiFilled) {
//       toast.warning("⚠️ Please enter your UPI ID!");
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     // Show success toast with name and Bible verse
//     toast.success(`🙏 Payment Successful! Thank you ${formData.name} for your ₹${formData.amount} sponsorship!`, {
//       position: "top-right",
//       autoClose: 5000,
//       icon: "🎉",
//     });
    
//     toast.info(`📖 "God loves a cheerful giver" - 2 Corinthians 9:7`, {
//       position: "top-right",
//       autoClose: 6000,
//       icon: "✝️",
//     });
    
//     // Reset form after 5 seconds
//     setTimeout(() => {
//       setFormData({ name: "", reason: "", amount: "", upiId: "" });
//       setIsPaymentVerified(false);
//       setIsSubmitting(false);
//     }, 5000);
//   };

//   const getButtonTooltipMessage = () => {
//     if (!isFormFilled) return "⚠️ Please fill Name, Reason, and Amount first";
//     if (!isPaymentVerified) return "📱 Please scan QR code and pay via UPI first";
//     if (!isUpiFilled) return "⚠️ Please enter your UPI ID";
//     return "✅ Click to submit payment";
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 py-6">
//       <ToastContainer position="top-right" autoClose={3000} theme="colored" />
     
//       {/* Single Card Container */}
//       <div className="max-w-4xl mt-10 w-full">
//         <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden">
//           {/* Split into two halves */}
//           <div className="flex flex-col md:flex-row">
            
//             {/* Left Side - Form Section */}
//             <div className="md:w-3/5 p-6">
//               {/* Logo */}
//               <div className="flex justify-center mb-4">
//                 <img src={logo} alt="Church Logo" className="w-12 h-12 rounded-full" />
//               </div>

//               {/* Title */}
//               <h2 className="text-xl font-bold text-center text-white mb-1">
//                 Sponsor Payment
//               </h2>
//               <p className="text-center text-gray-300 mb-4 text-xs">
//                 Support the mission and make a difference
//               </p>

//               {/* Form */}
//               <div className="space-y-4">
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Your Full Name *"
//                     required
//                     className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
//                   />
//                 </div>
                
//                 <div>
//                   <input
//                     type="text"
//                     name="reason"
//                     value={formData.reason}
//                     onChange={handleChange}
//                     placeholder="Reason for Sponsorship *"
//                     required
//                     className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     type="number"
//                     name="amount"
//                     value={formData.amount}
//                     onChange={handleChange}
//                     placeholder="Sponsor Amount (₹) *"
//                     required
//                     className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     type="text"
//                     name="upiId"
//                     value={formData.upiId}
//                     onChange={handleChange}
//                     placeholder="Your UPI ID (e.g., name@okhdfcbank) *"
//                     required
//                     className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
//                   />
//                   {!isPaymentVerified && isFormFilled && (
//                     <p className="text-yellow-400 text-xs mt-1">⚠️ Please scan & pay first</p>
//                   )}
//                   {isPaymentVerified && !isUpiFilled && (
//                     <p className="text-yellow-400 text-xs mt-1">⚠️ Please enter your UPI ID to submit payment</p>
//                   )}
//                   {isPaymentVerified && isUpiFilled && (
//                     <p className="text-green-400 text-xs mt-1">✓ UPI ID added! Click Submit Payment below</p>
//                   )}
//                 </div>

//                 {/* Progress indicator */}
//                 <div className="mt-3 pt-2 border-t border-white/20">
//                   <p className="text-gray-400 text-xs mb-2">Payment Status:</p>

//                   <div className="flex items-center gap-2">
//                     <div className={`w-2 h-2 rounded-full ${isFormFilled ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//                     <span className="text-xs text-gray-300">Step 1: Fill Details (Name, Reason, Amount)</span>
//                   </div>

//                   <div className="flex items-center gap-2 mt-1">
//                     <div className={`w-2 h-2 rounded-full ${isPaymentVerified ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//                     <span className="text-xs text-gray-300">Step 2: Scan & Pay via UPI</span>
//                   </div>

//                   <div className="flex items-center gap-2 mt-1">
//                     <div className={`w-2 h-2 rounded-full ${isUpiFilled ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//                     <span className="text-xs text-gray-300">Step 3: Enter UPI ID & Submit</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Scanner Section */}
//             <div className="md:w-2/5 bg-white/5 p-6 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/10">
//               <div className="text-center mb-3">
//                 <h3 className="text-lg font-bold text-white mb-1">Scan to Pay</h3>
//                 <p className="text-gray-300 text-xs">Quick & Easy UPI Payment</p>
//               </div>

//               {/* QR Code - Disabled until form filled */}
//               <div
//                 onClick={handleScanPayment}
//                 className={`cursor-pointer transition-transform hover:scale-105 ${
//                   !isFormFilled ? "opacity-50 pointer-events-none" : ""
//                 }`}
//               >
//                 <div className="w-32 h-32 md:w-36 md:h-36 bg-white rounded-xl flex flex-col items-center justify-center shadow-lg overflow-hidden p-2">
//                   {isFormFilled ? (
//                     <QRCodeCanvas value={upiUrl} size={130} />
//                   ) : (
//                     <div className="text-gray-400 text-xs text-center">Fill details to generate QR</div>
//                   )}
//                 </div>
//               </div>

//               {!isFormFilled && (
//                 <p className="text-yellow-400 text-xs mt-2 text-center">
//                   Fill Name, Reason & Amount to enable payment
//                 </p>
//               )}

//               {isFormFilled && !isPaymentVerified && (
//                 <p className="text-yellow-400 text-xs mt-2 text-center">
//                   🔴 After payment, enter your UPI ID and submit
//                 </p>
//               )}

//               {/* Scan & Pay Text */}
//               <div 
//                 onClick={handleScanPayment}
//                 className={`mt-3 text-center cursor-pointer group ${!isFormFilled ? 'opacity-50 pointer-events-none' : ''}`}
//               >
//                 <p className="text-white font-semibold text-sm group-hover:text-red-400 transition">
//                   📱 Scan & Pay
//                 </p>
//                 <p className="text-gray-400 text-xs mt-1">
//                   Scan with GPay, PhonePe, Paytm
//                 </p>
//               </div>

//               {/* Church UPI ID Display */}
//               <div className="mt-2 text-center">
//                 <p className="text-gray-500 text-xs">Church UPI: anniean394@okaxis</p>
//                 <button
//                   onClick={copyUpiId}
//                   className="text-blue-400 hover:text-blue-300 text-xs mt-1 underline"
//                 >
//                   📋 Copy Church UPI ID
//                 </button>
//               </div>

//               {/* Payment Verified Badge */}
//               {isPaymentVerified && (
//                 <div className="mt-3 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-lg animate-pulse">
//                   <p className="text-green-400 text-xs font-semibold">
//                     ✓ Payment Verified! Enter your UPI ID above
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Submit Button - Enabled when UPI ID is entered */}
//         <div className="mt-6 relative flex justify-center" ref={buttonRef}>
//           <div
//             onMouseMove={handleMouseMove}
//             onMouseEnter={() => setShowTooltip(true)}
//             onMouseLeave={() => setShowTooltip(false)}
//             className="w-full max-w-sm"
//           >
//             <button
//               onClick={handleFinalSubmit}
//               disabled={!isSubmitEnabled}
//               className={`w-full font-bold py-3 rounded-full shadow-lg transition-all duration-300 text-sm ${
//                 isSubmitEnabled 
//                   ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transform hover:scale-105 cursor-pointer" 
//                   : "bg-gray-600 cursor-not-allowed opacity-60"
//               }`}
//             >
//               {isSubmitting ? "⏳ Processing..." : "✅ Submit Payment"}
//             </button>
//           </div>

//           {/* Custom Tooltip - Only shows when button is disabled */}
//           {showTooltip && !isSubmitEnabled && !isSubmitting && (
//             <div 
//               className="fixed z-50 bg-black/90 text-white text-xs px-3 py-2 rounded-lg shadow-xl pointer-events-none whitespace-nowrap border border-red-500/50"
//               style={{
//                 left: tooltipPosition.x,
//                 top: tooltipPosition.y,
//                 transform: 'translateX(-50%)'
//               }}
//             >
//               <div className="flex items-center gap-2">
//                 <span>⚠️</span>
//                 <span>{getButtonTooltipMessage()}</span>
//               </div>
//               <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
//                 <div className="border-8 border-transparent border-t-black/90"></div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slideDown {
//           from {
//             transform: translateY(-100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-5px); }
//         }
//         .animate-slide-down {
//           animation: slideDown 0.3s ease-out;
//         }
//         .animate-bounce {
//           animation: bounce 0.5s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SponsorPayment;
import React, { useState, useRef } from "react";
import logo from "../../assets/images/logo.jpg";
import { QRCodeCanvas } from "qrcode.react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SponsorPayment = () => {
  const [formData, setFormData] = useState({
    name: "",
    reason: "",
    amount: "",
    upiId: "",
  });
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const buttonRef = useRef(null);

  // Check if form is filled (Name, Reason, Amount)
  const isFormFilled = formData.name.trim() !== "" && 
    formData.reason.trim() !== "" &&
    formData.amount.trim() !== "";

  // Check if UPI ID is filled
  const isUpiFilled = formData.upiId.trim() !== "";

  // Check if submit button should be enabled (only needs form filled + UPI ID)
  const isSubmitEnabled = isFormFilled && isUpiFilled && !isSubmitting;

  // Generate UPI URL for QR code
  const upiUrl = `upi://pay?pa=anniean394@okaxis&pn=Church%20Donation&am=${formData.amount}&cu=INR&tn=${encodeURIComponent(formData.name)}`;

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Scan Payment - Opens GPay/UPI Apps
  const handleScanPayment = () => {
    if (!isFormFilled) {
      toast.warning("⚠️ Please fill Name, Reason, and Amount first!");
      return;
    }

    const payeeName = "Church Donation";
    const amount = formData.amount;
    const note = `Sponsorship Donation - ${formData.name}`;
    
    const upiUrl = `upi://pay?pa=anniean394@okaxis&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
    
    window.location.href = upiUrl;
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText("anniean394@okaxis");
    toast.info("Church UPI ID copied! Open your UPI app and paste to pay.");
  };

  const handleMouseMove = (e) => {
    if (!isSubmitEnabled) {
      setTooltipPosition({
        x: e.clientX + 15,
        y: e.clientY - 30,
      });
    }
  };

  const handleFinalSubmit = () => {
    if (!isFormFilled) {
      toast.warning("⚠️ Please fill your Name, Reason, and Amount first!");
      return;
    }
    
    if (!isUpiFilled) {
      toast.warning("⚠️ Please enter your UPI ID!");
      return;
    }
    
    setIsSubmitting(true);
    
    // Show success toast with name and Bible verse
    // toast.success(`🙏 Thank you ${formData.name} for your ₹${formData.amount} sponsorship!`, {
    //   position: "top-right",
    //   autoClose: 5000,
    //   icon: "🎉",
    // });
    
    // toast.info(`📖 "God loves a cheerful giver" - 2 Corinthians 9:7`, {
    //   position: "top-right",
    //   autoClose: 6000,
    //   icon: "✝️",
    // });

//     toast.success(
//   `🙏 Thank you ${formData.name} for your sponsorship!\n📖 
//    "God loves a cheerful giver" - 2 Corinthians 9:7`,
//   {
//     position: "top-right",
//     autoClose: 6000,
//     icon: "🎉",
//   }
// );
toast.success(
  `🙏 Thank you for your sponsorship!\n📖 "God loves a cheerful giver" - 2 Corinthians 9:7`,
  {
    position: "top-right",
    autoClose: 6000,
    icon: "🎉",
    style: {
      width: "420px",
      maxWidth: "90vw",
      whiteSpace: "pre-line",
    },
  }
);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({ name: "", reason: "", amount: "", upiId: "" });
      setIsSubmitting(false);
    }, 5000);
  };

  const getButtonTooltipMessage = () => {
    if (!isFormFilled) return "⚠️ Please fill Name, Reason, and Amount first";
    if (!isUpiFilled) return "⚠️ Please enter your UPI ID";
    return "✅ Click to submit payment";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 py-6">
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
     
      {/* Single Card Container */}
      <div className="max-w-4xl mt-15 w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          {/* Split into two halves */}
          <div className="flex flex-col md:flex-row">
            
            {/* Left Side - Form Section */}
            <div className="md:w-3/5 p-6">
              {/* Logo */}
              <div className="flex justify-center mb-4">
                <img src={logo} alt="Church Logo" className="w-12 h-12 rounded-full" />
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-center text-white mb-1">
                Sponsor Payment
              </h2>
              <p className="text-center text-gray-300 mb-4 text-xs">
                Support the mission and make a difference
              </p>

              {/* Form */}
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name *"
                    required
                    className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Reason for Sponsorship *"
                    required
                    className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  />
                </div>

                <div>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Sponsor Amount (₹) *"
                    required
                    className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  />
                </div>

                <div>
  <input
    type="text"
    name="upiId"
    value={formData.upiId}
    onChange={handleChange}
    placeholder="Your UPI ID (e.g., name@okhdfcbank) *"
    required
    className="w-full py-2.5 px-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 text-sm"
  />

  {/* ✅ ADD THIS MESSAGE ONLY */}
  {isFormFilled && (
    <p className="text-yellow-400 text-xs mt-1">
      ⚠️ First scan to pay, then enter your UPI ID
    </p>
  )}

  {/* {isUpiFilled && (
    <p className="text-green-400 text-xs mt-1">
      ✓ UPI ID added! Ready to submit
    </p>
  )} */}
</div>

                {/* Progress indicator */}
                <div className="mt-3 pt-2 border-t border-white/20">
                  <p className="text-gray-400 text-xs mb-2">Payment Status:</p>

                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isFormFilled ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                    <span className="text-xs text-gray-300">Step 1: Fill Details (Name, Reason, Amount)</span>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <div className={`w-2 h-2 rounded-full ${isUpiFilled ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                    <span className="text-xs text-gray-300">Step 2: Enter UPI ID & Submit</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Scanner Section */}
            <div className="md:w-2/5 bg-white/5 p-6 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/10">
              <div className="text-center mb-3">
                <h3 className="text-lg font-bold text-white mb-1">Scan to Pay</h3>
                <p className="text-gray-300 text-xs">Quick & Easy UPI Payment</p>
              </div>

              {/* QR Code */}
              <div
                onClick={handleScanPayment}
                className={`cursor-pointer transition-transform hover:scale-105 ${
                  !isFormFilled ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                <div className="w-32 h-32 md:w-36 md:h-36 bg-white rounded-xl flex flex-col items-center justify-center shadow-lg overflow-hidden p-2">
                  {isFormFilled ? (
                    <QRCodeCanvas value={upiUrl} size={130} />
                  ) : (
                    <div className="text-gray-400 text-xs text-center">Fill details to generate QR</div>
                  )}
                </div>
              </div>

              {!isFormFilled && (
                <p className="text-yellow-400 text-xs mt-2 text-center">
                  Fill Name, Reason & Amount to enable payment
                </p>
              )}

              {/* Scan & Pay Text */}
              <div 
                onClick={handleScanPayment}
                className={`mt-3 text-center cursor-pointer group ${!isFormFilled ? 'opacity-50 pointer-events-none' : ''}`}
              >
                <p className="text-white font-semibold text-sm group-hover:text-red-400 transition">
                  📱 Scan & Pay
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Scan with GPay, PhonePe, Paytm
                </p>
              </div>

              {/* Church UPI ID Display */}
              <div className="mt-2 text-center">
                <p className="text-gray-500 text-xs">Church UPI: anniean394@okaxis</p>
                <button
                  onClick={copyUpiId}
                  className="text-blue-400 hover:text-blue-300 text-xs mt-1 underline"
                >
                  📋 Copy Church UPI ID
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10 relative flex justify-center" ref={buttonRef}>
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="w-full max-w-sm"
          >
            <button
              onClick={handleFinalSubmit}
              disabled={!isSubmitEnabled}
              className={`w-full font-bold py-3 rounded-full shadow-lg transition-all duration-300 text-sm ${
                isSubmitEnabled 
                  ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transform hover:scale-105 cursor-pointer" 
                  : "bg-gray-600 cursor-not-allowed opacity-60"
              }`}
            >
              {isSubmitting ? "⏳ Processing..." : "✅ Submit Payment"}
            </button>
          </div>

          {/* Custom Tooltip - Only shows when button is disabled */}
          {showTooltip && !isSubmitEnabled && !isSubmitting && (
            <div 
              className="fixed z-50 bg-black/90 text-white text-xs px-3 py-2 rounded-lg shadow-xl pointer-events-none whitespace-nowrap border border-red-500/50"
              style={{
                left: tooltipPosition.x,
                top: tooltipPosition.y,
                transform: 'translateX(-50%)'
              }}
            >
              <div className="flex items-center gap-2">
                <span>⚠️</span>
                <span>{getButtonTooltipMessage()}</span>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                <div className="border-8 border-transparent border-t-black/90"></div>
              </div>
            </div>
          )}
        </div>
      </div>

     
    </div>
  );
};

export default SponsorPayment;