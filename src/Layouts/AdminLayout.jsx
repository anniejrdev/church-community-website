// src/layouts/AdminLayout.jsx

import Sidebar from "../components/Admin/Sidebar";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/Admin/AdminHeader";

// export default function AdminLayout() {
//   return (
//     <div className="flex min-h-screen">
      
//       {/* Sidebar */}
//       <Sidebar/>

//       <div className="flex-1 ml-64 bg-white min-h-screen">

//         {/* Header */}
//         <AdminHeader/>

//       {/* Content */}
//       <div className="flex-1 p-4 bg-gray-100">
//         <Outlet />
//       </div>
//     </div>
//     </div>
//   );
// }

// export default function AdminLayout() {
//   return (
//     <div className="flex min-h-screen">

//       {/* Sidebar */}
//       <Sidebar />

//       {/* Right Side */}
//       <div className="flex-1 flex flex-col px-3 bg-white">

//         {/* Header */}
//         <AdminHeader />

//         {/* Content */}
//         <div className="flex-1 p-4 ">
//           <Outlet />
//         </div>

//       </div>

//     </div>
//   );
// }

export default function AdminLayout() {
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <div className="px-4 py-1 bg-white">
  <AdminHeader />
</div>

        {/* Content */}
       <div className="flex-1 p-4 overflow-hidden">
  <Outlet />
</div>

      </div>

    </div>
  );
}