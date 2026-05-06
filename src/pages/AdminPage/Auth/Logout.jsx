// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../../../assets/images/logo.jpg";

// export default function Logout() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // simulate logout
//     localStorage.clear();

//     setTimeout(() => {
//       navigate("/login");
//     }, 1500);
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black/50">

//       <div className="bg-white rounded-xl shadow-md p-8 w-[320px] text-center">

//         {/* LOGO */}
//         <img
//           src={logo}
//           alt="Logo"
//           className="w-16 h-16 mx-auto mb-4 object-contain"
//         />

//         {/* TEXT */}
//         <h2 className="text-lg font-semibold text-gray-800 mb-1">
//           Logging Out...
//         </h2>

//         <p className="text-sm text-gray-500 mb-4">
//           Please wait
//         </p>

//         {/* LOADER */}
//         <div className="flex justify-center">
//           <div className="w-6 h-6 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
//         </div>

//       </div>

//     </div>
//   );
// }

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import logo from "../../../assets/images/logo.jpg";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await signOut(auth);  // 🔐 Firebase logout

        setTimeout(() => {
          navigate("/login");
        }, 1500);

      } catch (error) {
        console.log(error);
      }
    };

    logoutUser();
    console.log(auth.currentUser);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-md p-8 w-[320px] text-center">

        <img
          src={logo}
          alt="Logo"
          className="w-16 h-16 mx-auto mb-4 object-contain"
        />

        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          Logging Out...
        </h2>

        <p className="text-sm text-gray-500 mb-4">
          Please wait
        </p>

        <div className="flex justify-center">
          <div className="w-6 h-6 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        </div>

      </div>
    </div>
  );
}