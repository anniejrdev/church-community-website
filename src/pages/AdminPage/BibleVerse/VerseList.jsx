// import { useState, useEffect } from "react";
// import { Plus, Edit2, Trash2, Search, Image as ImageIcon, Calendar } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import DailyBibleAddModal from "../BibleVerse/VerseAdd";
// import DailyBibleEditModal from "../BibleVerse/VerseEdit";

// export default function DailyBibleList() {
//   const [bibles, setBibles] = useState([]);
//   const [filteredBibles, setFilteredBibles] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [selectedBible, setSelectedBible] = useState(null);

//   // LOAD BIBLE IMAGES
//   useEffect(() => {
//     loadBibles();
//   }, []);

//   const loadBibles = () => {
//     const data = JSON.parse(localStorage.getItem("dailyBible")) || [];
//     setBibles(data);
//     setFilteredBibles(data);
//   };

//   // SEARCH
//   useEffect(() => {
//     if (searchTerm === "") {
//       setFilteredBibles(bibles);
//     } else {
//       const filtered = bibles.filter(item =>
//         item.date?.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredBibles(filtered);
//     }
//   }, [searchTerm, bibles]);

//   // DELETE
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this Bible image?")) {
//       const updated = bibles.filter(item => item.id !== id);
//       setBibles(updated);
//       localStorage.setItem("dailyBible", JSON.stringify(updated));
//       toast.error("Deleted successfully");
//     }
//   };

//   // OPEN MODALS
//   const openAddModal = () => {
//     setIsAddModalOpen(true);
//   };

//   const openEditModal = (item) => {
//     setSelectedBible(item);
//     setIsEditModalOpen(true);
//   };

//   // HANDLE SAVE FROM ADD MODAL
//   const handleSaveAdd = (newData) => {
//     const existing = JSON.parse(localStorage.getItem("dailyBible")) || [];
//     const updated = [...existing, newData];
//     localStorage.setItem("dailyBible", JSON.stringify(updated));
//     setBibles(updated);
//     toast.success("Added successfully");
//     setIsAddModalOpen(false);
//   };

//   // HANDLE SAVE FROM EDIT MODAL
//   const handleSaveEdit = (updatedData) => {
//     const data = JSON.parse(localStorage.getItem("dailyBible")) || [];
//     const updated = data.map(item =>
//       item.id === updatedData.id ? updatedData : item
//     );
//     localStorage.setItem("dailyBible", JSON.stringify(updated));
//     setBibles(updated);
//     toast.success("Updated successfully");
//     setIsEditModalOpen(false);
//     setSelectedBible(null);
//   };

//   return (
//     <div className="min-h-screen p-5">
//       <ToastContainer position="top-right" autoClose={2000} theme="colored" />

//       {/* TOP BAR */}
//       <div className="mb-6">
//         <div className="flex flex-wrap justify-between items-center gap-4">
//           <button
//             onClick={openAddModal}
//             className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-200"
//           >
//             <Plus size={18} />
//             Add Bible Image
//           </button>

//           <div className="flex-1 max-w-xs">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//               <input
//                 type="text"
//                 placeholder="Search by date..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CARDS GRID */}
//       {filteredBibles.length === 0 ? (
//         <div className="text-center py-16 rounded-xl border-gray-300">
//           <ImageIcon size={48} className="mx-auto text-gray-400 mb-3" />
//           <p className="text-gray-500">No Bible images yet</p>
//           <button
//             onClick={openAddModal}
//             className="mt-3 text-yellow-600 hover:text-yellow-700 font-medium"
//           >
//             + Add your first Bible image
//           </button>
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
//           {filteredBibles.map((item) => (
//             <div
//               key={item.id}
//               className="group relative bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-all duration-200"
//             >
//               {/* Image Section */}
//               <div className="relative h-40 overflow-hidden bg-gray-100">
//                 {item.image ? (
//                   <img
//                     src={item.image}
//                     alt={`Bible for ${item.date}`}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center">
//                     <ImageIcon size={32} className="text-gray-400" />
//                   </div>
//                 )}
                
//                 {/* Date Label */}
//                 <div className="absolute top-1 left-1">
//                   <span className="px-1.5 py-0.5 bg-yellow-500 text-white text-[10px] rounded shadow-md flex items-center gap-1">
//                     <Calendar size={8} />
//                     {item.date}
//                   </span>
//                 </div>

//                 {/* Action Buttons - Visible on Hover */}
//                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center gap-2">
//                   <button
//                     onClick={() => openEditModal(item)}
//                     className="p-1.5 bg-yellow-500 rounded hover:bg-yellow-600 transition-colors"
//                     title="Edit"
//                   >
//                     <Edit2 size={14} className="text-white" />
//                   </button>
//                   <button
//                     onClick={() => handleDelete(item.id)}
//                     className="p-1.5 bg-red-500 rounded hover:bg-red-600 transition-colors"
//                     title="Delete"
//                   >
//                     <Trash2 size={14} className="text-white" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ADD MODAL */}
//       <DailyBibleAddModal
//         isOpen={isAddModalOpen}
//         onClose={() => setIsAddModalOpen(false)}
//         onSave={handleSaveAdd}
//       />

//       {/* EDIT MODAL */}
//       <DailyBibleEditModal
//         isOpen={isEditModalOpen}
//         onClose={() => {
//           setIsEditModalOpen(false);
//           setSelectedBible(null);
//         }}
//         onSave={handleSaveEdit}
//         data={selectedBible}
//       />
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Search, Image as ImageIcon, Calendar } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DailyBibleAddModal from "../BibleVerse/VerseAdd";
import DailyBibleEditModal from "../BibleVerse/VerseEdit";
import { db } from "../../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  where
} from "firebase/firestore";

export default function DailyBibleList() {
  const [bibles, setBibles] = useState([]);
  const [filteredBibles, setFilteredBibles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBible, setSelectedBible] = useState(null);
  const [loading, setLoading] = useState(true);

  // LOAD BIBLE IMAGES FROM FIREBASE
  useEffect(() => {
    loadBibles();
  }, []);

  const loadBibles = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "dailyBible"), orderBy("date", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("Loaded Bible images:", data.length);
      setBibles(data);
      setFilteredBibles(data);
    } catch (error) {
      console.error("Error loading Bible images:", error);
      toast.error("Failed to load Bible images");
    } finally {
      setLoading(false);
    }
  };

  // SEARCH
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredBibles(bibles);
    } else {
      const filtered = bibles.filter(item =>
        item.date?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBibles(filtered);
    }
  }, [searchTerm, bibles]);

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this Bible image?")) return;
    
    try {
      await deleteDoc(doc(db, "dailyBible", String(id)));
      toast.error("Deleted successfully");
      await loadBibles();
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete");
    }
  };

  // OPEN MODALS
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const openEditModal = (item) => {
    setSelectedBible(item);
    setIsEditModalOpen(true);
  };

  // HANDLE SAVE FROM ADD MODAL
  const handleSaveAdd = async (newData) => {
    try {
      // Check for duplicate date
      const q = query(collection(db, "dailyBible"), where("date", "==", newData.date));
      const snapshot = await getDocs(q);
      
      if (!snapshot.empty) {
        toast.error("A Bible image already exists for this date. Please select another date.");
        return;
      }
      
      await addDoc(collection(db, "dailyBible"), {
        date: newData.date,
        image: newData.image,
        createdAt: new Date().toISOString()
      });
      
      toast.success("Added successfully");
      await loadBibles();
      setIsAddModalOpen(false);
    } catch (error) {
      console.error("Add error:", error);
      toast.error("Failed to add Bible image");
    }
  };

  // HANDLE SAVE FROM EDIT MODAL
  const handleSaveEdit = async (updatedData) => {
    try {
      // Check for duplicate date (excluding current item)
      const q = query(
        collection(db, "dailyBible"), 
        where("date", "==", updatedData.date)
      );
      const snapshot = await getDocs(q);
      
      const isDuplicate = !snapshot.empty && snapshot.docs[0].id !== updatedData.id;
      
      if (isDuplicate) {
        toast.error("A Bible image already exists for this date. Please select another date.");
        return;
      }
      
      await updateDoc(doc(db, "dailyBible", String(updatedData.id)), {
        date: updatedData.date,
        image: updatedData.image,
        updatedAt: new Date().toISOString()
      });
      
      toast.success("Updated successfully");
      await loadBibles();
      setIsEditModalOpen(false);
      setSelectedBible(null);
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update Bible image");
    }
  };

  if (loading && bibles.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Bible images...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-5">
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      {/* TOP BAR */}
      <div className="mb-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={openAddModal}
              className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-200"
            >
              <Plus size={18} />
              Add Bible Image
            </button>
            
            <button
              onClick={loadBibles}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
              title="Refresh from Firebase"
            >
              🔄 Refresh
            </button>
          </div>

          <div className="flex-1 max-w-xs">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search by date..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CARDS GRID */}
      {filteredBibles.length === 0 ? (
        <div className="text-center py-16 rounded-xl border-gray-300">
          <ImageIcon size={48} className="mx-auto text-gray-400 mb-3" />
          <p className="text-gray-500">No Bible images yet</p>
          <button
            onClick={openAddModal}
            className="mt-3 text-yellow-600 hover:text-yellow-700 font-medium"
          >
            + Add your first Bible image
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {filteredBibles.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-all duration-200"
            >
              {/* Image Section */}
              <div className="relative h-40 overflow-hidden bg-gray-100">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={`Bible for ${item.date}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon size={32} className="text-gray-400" />
                  </div>
                )}
                
                {/* Date Label */}
                <div className="absolute top-1 left-1">
                  <span className="px-1.5 py-0.5 bg-yellow-500 text-white text-[10px] rounded shadow-md flex items-center gap-1">
                    <Calendar size={8} />
                    {item.date}
                  </span>
                </div>

                {/* Action Buttons - Visible on Hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center gap-2">
                  <button
                    onClick={() => openEditModal(item)}
                    className="p-1.5 bg-yellow-500 rounded hover:bg-yellow-600 transition-colors"
                    title="Edit"
                  >
                    <Edit2 size={14} className="text-white" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-1.5 bg-red-500 rounded hover:bg-red-600 transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={14} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ADD MODAL */}
      <DailyBibleAddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveAdd}
      />

      {/* EDIT MODAL */}
      <DailyBibleEditModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedBible(null);
        }}
        onSave={handleSaveEdit}
        data={selectedBible}
      />
    </div>
  );
}