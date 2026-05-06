// import { useState } from "react";
// import { FiEdit, FiTrash2, FiRefreshCw, FiSearch } from "react-icons/fi";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import SponsorEditModal from "../Sponsor/SponsorEdit";

// export default function SponsorList() {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       name: "John Samuel",
//       upiId: "john@okhdfcbank",
//       reason: "Church Building Fund",
//       amount: "5000",
//       date: "2026-04-27",
//     },
//     {
//       id: 2,
//       name: "Mary Williams",
//       upiId: "mary@okicici",
//       reason: "Youth Ministry",
//       amount: "2500",
//       date: "2026-04-25",
//     },
//     {
//       id: 3,
//       name: "David Raj",
//       upiId: "david@axl",
//       reason: "Charity",
//       amount: "10000",
//       date: "2026-04-24",
//     },
//   ]);

//   const [search, setSearch] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleRefresh = () => {
//     toast.success("Refreshed successfully");
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this sponsor?")) {
//       setData((prev) => prev.filter((item) => item.id !== id));
//       toast.error("Deleted successfully");
//     }
//   };

//   // Open Modal when edit icon is clicked
//   const handleEditClick = (item) => {
//     setSelectedItem(item);
//     setIsModalOpen(true);
//   };

//   // Save edited data from modal
//   const handleSaveEdit = (updatedItem) => {
//     setData((prev) =>
//       prev.map((item) =>
//         item.id === updatedItem.id ? updatedItem : item
//       )
//     );
//     toast.success("Updated successfully");
//     setIsModalOpen(false);
//     setSelectedItem(null);
//   };

//   // Close modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedItem(null);
//   };

//   const filtered = data.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase()) ||
//     item.upiId.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="flex flex-col h-full p-4">

//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />

//       {/* 🔹 Top Bar */}
//       <div className="flex justify-between items-center mb-4 pb-2">
  
//         {/* LEFT SECTION */}
//         <div className="flex items-center gap-3">
//           <button
//             onClick={handleRefresh}
//             className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//           >
//             <FiRefreshCw size={14} className="text-gray-600" />
//             <span className="text-gray-700 font-medium">Refresh</span>
//           </button>

//           <div className="flex items-center gap-2">
//             <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
//               <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
//               <span className="text-xs font-medium text-yellow-700">Sponsors</span>
//               <div className="w-px h-4 bg-yellow-200 mx-1"></div>
//               <span className="text-lg font-bold text-yellow-800">{data.length}</span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SEARCH SECTION */}
//         <div className="relative">
//           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
//           <input
//             type="text"
//             placeholder="Search by name or UPI ID..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="pl-9 pr-3 py-1.5 text-sm border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 w-64 placeholder:text-gray-400"
//           />
//           {search && (
//             <button
//               onClick={() => setSearch("")}
//               className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//             >
//               <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           )}
//         </div>

//       </div>

//       {/* 🔹 Table */}
//       <div className="bg-white flex-1 overflow-hidden rounded">
//         <div
//           className="h-[72vh] overflow-y-auto"
//           style={{
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//         >
//           <table className="w-full text-xs table-fixed">

//             {/* Header */}
//             <thead className="sticky top-0 bg-yellow-500 z-10">
//               <tr className="text-white">
//                 <th className="border border-gray-300 px-3 py-3 w-[60px] text-center">NO</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[180px] text-center">NAME</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[180px] text-center">UPI ID</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[200px] text-center">REASON</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[120px] text-center">AMOUNT (₹)</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[140px] text-center">DATE</th>
//                 <th className="border border-gray-300 px-3 py-3 w-[120px] text-center">ACTION</th>
//               </tr>
//             </thead>

//             {/* Body */}
//             <tbody>
//               {filtered.length === 0 ? (
//                 <tr>
//                   <td colSpan="7" className="text-center py-4 text-gray-500">
//                     No data found
//                   </td>
//                 </tr>
//               ) : (
//                 filtered.map((item, index) => (
//                   <tr key={item.id} className="hover:bg-gray-50">
//                     <td className="border border-gray-200 px-3 py-3 text-center">
//                       {index + 1}
//                     </td>

//                     {/* Name */}
//                     <td
//                       title={item.name}
//                       className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
//                     >
//                       {item.name}
//                     </td>

//                     {/* UPI ID */}
//                     <td
//                       title={item.upiId}
//                       className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
//                     >
//                       {item.upiId}
//                     </td>

//                     {/* Reason */}
//                     <td
//                       title={item.reason}
//                       className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
//                     >
//                       {item.reason || "-"}
//                     </td>

//                     {/* Amount */}
//                     <td className="border border-gray-200 px-3 py-3 text-center">
//                       <span className="font-semibold text-green-600">₹{item.amount}</span>
//                     </td>

//                     {/* Date */}
//                     <td className="border border-gray-200 px-3 py-3 text-center">
//                       {item.date}
//                     </td>

//                     {/* Actions */}
//                     <td className="border border-gray-200 px-3 py-2 text-center">
//                       <div className="flex justify-center gap-3">
//                         <button
//                           onClick={() => handleEditClick(item)}
//                           className="text-yellow-600 hover:text-yellow-700"
//                           title="Edit"
//                         >
//                           <FiEdit size={14} />
//                         </button>

//                         <button
//                           onClick={() => handleDelete(item.id)}
//                           className="text-red-500 hover:text-red-700"
//                           title="Delete"
//                         >
//                           <FiTrash2 size={14} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>

//           </table>
//         </div>
//       </div>

//       {/* 🔹 Edit Modal Component */}
//       <SponsorEditModal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         onSave={handleSaveEdit}
//         data={selectedItem}
//       />

//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { FiEdit, FiTrash2, FiRefreshCw, FiSearch, FiEye } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SponsorEditModal from "../Sponsor/SponsorEdit";
import { db } from "../../../firebase";
import { collection, getDocs, deleteDoc, updateDoc, doc, query, orderBy } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";

export default function SponsorList() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewingScreenshot, setViewingScreenshot] = useState(null);
  const [loading, setLoading] = useState(true);

  // LOAD SPONSORS FROM FIREBASE
  useEffect(() => {
    loadSponsors();
  }, []);

  const loadSponsors = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "sponsors"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const sponsors = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("Loaded sponsors:", sponsors.length);
      setData(sponsors);
    } catch (error) {
      console.error("Error loading sponsors:", error);
      toast.error("Failed to load sponsors");
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    loadSponsors();
    toast.success("Refreshed successfully");
  };

  const handleDelete = async (id, screenshotUrl) => {
    if (!window.confirm("Are you sure you want to delete this sponsor?")) return;
    
    try {
      // Delete screenshot from Storage if exists
      if (screenshotUrl) {
        const storage = getStorage();
        const imageRef = ref(storage, screenshotUrl);
        try {
          await deleteObject(imageRef);
        } catch (error) {
          console.log("Error deleting screenshot:", error);
        }
      }
      
      // Delete document from Firestore
      await deleteDoc(doc(db, "sponsors", String(id)));
      toast.success("Deleted successfully");
      await loadSponsors();
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete");
    }
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleViewScreenshot = (screenshotUrl) => {
    setViewingScreenshot(screenshotUrl);
    setIsViewModalOpen(true);
  };

  const handleSaveEdit = async (updatedItem) => {
    try {
      await updateDoc(doc(db, "sponsors", String(updatedItem.id)), {
        name: updatedItem.name,
        upiId: updatedItem.upiId,
        reason: updatedItem.reason,
        amount: parseInt(updatedItem.amount),
        date: updatedItem.date,
        updatedAt: new Date().toISOString()
      });
      
      toast.success("Updated successfully");
      await loadSponsors();
      setIsModalOpen(false);
      setSelectedItem(null);
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const filtered = data.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase()) ||
    item.upiId?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading sponsors...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full p-4">
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4 pb-2">
        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <FiRefreshCw size={14} className="text-gray-600" />
            <span>Refresh</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-yellow-700">Sponsors</span>
              <div className="w-px h-4 bg-yellow-200 mx-1"></div>
              <span className="text-lg font-bold text-yellow-800">{data.length}</span>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
          <input
            type="text"
            placeholder="Search by name or UPI ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-3 py-1.5 text-sm border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-yellow-400 w-64"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white flex-1 overflow-hidden rounded">
        <div className="h-[72vh] overflow-y-auto">
          <table className="w-full text-xs table-fixed">
            <thead className="sticky top-0 bg-yellow-500 z-10">
              <tr className="text-white">
                <th className="border border-gray-300 px-3 py-3 w-[50px] text-center">NO</th>
                <th className="border border-gray-300 px-3 py-3 w-[150px] text-center">NAME</th>
                <th className="border border-gray-300 px-3 py-3 w-[150px] text-center">UPI ID</th>
                <th className="border border-gray-300 px-3 py-3 w-[180px] text-center">REASON</th>
                <th className="border border-gray-300 px-3 py-3 w-[100px] text-center">AMOUNT</th>
                <th className="border border-gray-300 px-3 py-3 w-[100px] text-center">SCREENSHOT</th>
                <th className="border border-gray-300 px-3 py-3 w-[120px] text-center">DATE</th>
                <th className="border border-gray-300 px-3 py-3 w-[120px] text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-gray-500">
                    No data found
                  </td>
                </tr>
              ) : (
                filtered.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-3 py-3 text-center">{index + 1}</td>
                    <td className="border border-gray-200 px-3 py-3 text-center truncate">{item.name}</td>
                    <td className="border border-gray-200 px-3 py-3 text-center truncate">{item.upiId}</td>
                    <td className="border border-gray-200 px-3 py-3 text-center truncate">{item.reason || "-"}</td>
                    <td className="border border-gray-200 px-3 py-3 text-center font-semibold text-green-600">₹{item.amount}</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">
                      {item.screenshot ? (
                        <button
                          onClick={() => handleViewScreenshot(item.screenshot)}
                          className="text-blue-600 hover:text-blue-800"
                          title="View Screenshot"
                        >
                          <FiEye size={16} />
                        </button>
                      ) : (
                        <span className="text-gray-400 text-xs">No image</span>
                      )}
                    </td>
                    <td className="border border-gray-200 px-3 py-3 text-center">{item.date}</td>
                    <td className="border border-gray-200 px-3 py-2 text-center">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => handleEditClick(item)}
                          className="text-yellow-600 hover:text-yellow-700"
                          title="Edit"
                        >
                          <FiEdit size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id, item.screenshot)}
                          className="text-red-500 hover:text-red-700"
                          title="Delete"
                        >
                          <FiTrash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      <SponsorEditModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveEdit}
        data={selectedItem}
      />

      {/* Screenshot View Modal */}
      {isViewModalOpen && viewingScreenshot && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl max-h-[90vh] overflow-auto p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Payment Screenshot</h3>
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <img src={viewingScreenshot} alt="Screenshot" className="w-full h-auto rounded" />
          </div>
        </div>
      )}
    </div>
  );
}