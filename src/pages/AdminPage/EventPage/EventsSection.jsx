// import { useState, useEffect } from "react";
// import { Plus, Edit2, Trash2, X, Folder, FolderOpen } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function EventCategories() {
//   const [categories, setCategories] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [current, setCurrent] = useState(null);

//   // LOAD
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("eventCategories")) || [];
//     setCategories(data);
//   }, []);

//   // OPEN MODAL
//   const openModal = (cat = null) => {
//     if (cat) {
//       setCurrent(cat);
//     } else {
//       setCurrent({ id: null, name: "" });
//     }
//     setIsModalOpen(true);
//   };

//   // SAVE
//   const handleSave = (e) => {
//     e.preventDefault();

//     if (!current.name.trim()) {
//       toast.warning("Enter category name");
//       return;
//     }

//     let updated;

//     if (current.id) {
//       // EDIT
//       updated = categories.map((c) => (c.id === current.id ? current : c));
//       toast.success("Category updated successfully");
//     } else {
//       // ADD
//       const newCat = {
//         ...current,
//         id: Date.now(),
//       };
//       updated = [...categories, newCat];
//       toast.success("Category added successfully");
//     }

//     setCategories(updated);
//     localStorage.setItem("eventCategories", JSON.stringify(updated));
//     setIsModalOpen(false);
//   };

//   // DELETE
//   const handleDelete = (id) => {
//     const categoryToDelete = categories.find((c) => c.id === id);
//     const updated = categories.filter((c) => c.id !== id);
//     setCategories(updated);
//     localStorage.setItem("eventCategories", JSON.stringify(updated));
//     toast.error(`"${categoryToDelete?.name}" deleted`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
//       <ToastContainer 
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />

//       {/* HEADER */}
//       <div className="mb-8">
//         <div className="flex justify-between items-center">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
//               <FolderOpen className="text-[#2b4a8a]" size={24} />
//               Event Categories
//             </h2>
//             <p className="text-gray-500 text-sm mt-1">
//               Manage your event categories ({categories.length} total)
//             </p>
//           </div>

//           <button
//             onClick={() => openModal()}
//             className="flex items-center gap-2 bg-gradient-to-r from-[#2b4a8a] to-[#1e3564] text-white px-5 py-2.5 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
//           >
//             <Plus size={18} />
//             Add Category
//           </button>
//         </div>
//       </div>

//       {/* CARDS */}
//       {categories.length === 0 ? (
//         <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-300">
//           <Folder size={64} className="text-gray-400 mb-4" />
//           <p className="text-gray-500 text-lg">No categories yet</p>
//           <p className="text-gray-400 text-sm mt-1">Click "Add Category" to create your first one</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
//           {categories.map((cat) => (
//             <div
//               key={cat.id}
//               className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-100"
//             >
//               <div className="p-5">
//                 <div className="flex justify-between items-start mb-3">
//                   <div className="bg-gradient-to-br from-blue-50 to-indigo-50 px-3 py-1.5 rounded-lg">
//                     <span className="text-xs font-medium text-[#2b4a8a]">
//                       {cat.name}
//                     </span>
//                   </div>

//                   <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                     <button
//                       onClick={() => openModal(cat)}
//                       className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors"
//                     >
//                       <Edit2 size={16} className="text-blue-600" />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(cat.id)}
//                       className="p-1.5 hover:bg-red-50 rounded-lg transition-colors"
//                     >
//                       <Trash2 size={16} className="text-red-600" />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="mt-4 pt-3 border-t border-gray-100">
//                   <h3 className="font-semibold text-gray-800 text-base">
//                     {cat.name}
//                   </h3>
//                   <p className="text-gray-500 text-xs mt-2 flex items-center gap-1">
//                     <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500"></span>
//                     Active Category
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* MODAL */}
    //   {isModalOpen && (
    //     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200">
    //       <div className="bg-white rounded-2xl w-[400px] shadow-2xl transform animate-in slide-in-from-bottom-4 duration-300">
    //         <div className="p-6">
    //           <div className="flex justify-between items-center mb-5">
    //             <div className="flex items-center gap-2">
    //               <div className="p-2 bg-gradient-to-br from-[#2b4a8a] to-[#1e3564] rounded-lg">
    //                 {current?.id ? (
    //                   <Edit2 size={18} className="text-white" />
    //                 ) : (
    //                   <Plus size={18} className="text-white" />
    //                 )}
    //               </div>
    //               <h2 className="text-xl font-bold text-gray-800">
    //                 {current?.id ? "Edit" : "Add"} Category
    //               </h2>
    //             </div>
    //             <button
    //               onClick={() => setIsModalOpen(false)}
    //               className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
    //             >
    //               <X size={20} className="text-gray-500" />
    //             </button>
    //           </div>

    //           <form onSubmit={handleSave}>
    //             <div className="mb-6">
    //               <label className="block text-sm font-medium text-gray-700 mb-2">
    //                 Category Name
    //               </label>
    //               <input
    //                 placeholder="e.g., Conference, Workshop, Meetup"
    //                 value={current?.name || ""}
    //                 onChange={(e) =>
    //                   setCurrent({ ...current, name: e.target.value })
    //                 }
    //                 className="w-full border border-gray-300 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2b4a8a] focus:border-transparent transition-all"
    //                 autoFocus
    //               />
    //               <p className="text-gray-400 text-xs mt-1">
    //                 Enter a unique name for this category
    //               </p>
    //             </div>

    //             <div className="flex justify-end gap-3">
    //               <button
    //                 type="button"
    //                 onClick={() => setIsModalOpen(false)}
    //                 className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
    //               >
    //                 Cancel
    //               </button>

    //               <button
    //                 type="submit"
    //                 className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#2b4a8a] to-[#1e3564] hover:shadow-lg rounded-lg transition-all"
    //               >
    //                 {current?.id ? "Update" : "Create"} Category
    //               </button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   )}

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
        
//         @keyframes slide-in-from-bottom-4 {
//           from {
//             transform: translateY(1rem);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
        
//         .animate-in {
//           animation-duration: 0.2s;
//           animation-fill-mode: both;
//         }
        
//         .fade-in {
//           animation-name: fade-in;
//         }
        
//         .slide-in-from-bottom-4 {
//           animation-name: slide-in-from-bottom-4;
//         }
//       `}</style>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, X, Calendar, Tag, Folder, MoreVertical } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

export default function EventCategories() {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  // LOAD
  useEffect(() => {
  loadCategories();
}, []);

const loadCategories = async () => {
  try {
    const snap = await getDocs(collection(db, "eventCategories"));

    const data = snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setCategories(data);
  } catch (error) {
    console.log(error);
  }
};

  // OPEN MODAL
  const openModal = (cat = null) => {
    if (cat) {
      setCurrent(cat);
    } else {
      setCurrent({ id: null, name: "" });
    }
    setIsModalOpen(true);
  };

  // SAVE
  // const handleSave = (e) => {
  //   e.preventDefault();

  //   if (!current.name) {
  //     toast.warning("Enter category name");
  //     return;
  //   }

  //   let updated;

  //   if (current.id) {
  //     // EDIT
  //     updated = categories.map((c) =>
  //       c.id === current.id ? current : c
  //     );
  //     toast.success("Updated successfully");
  //   } else {
  //     // ADD
  //     const newCat = {
  //       ...current,
  //       id: Date.now(),
  //     };
  //     updated = [...categories, newCat];
  //     toast.success("Added successfully");
  //   }

  //   setCategories(updated);
  //   localStorage.setItem(
  //     "eventCategories",
  //     JSON.stringify(updated)
  //   );
  //   setIsModalOpen(false);
  // };
  const handleSave = async (e) => {
  e.preventDefault();

  if (!current.name) {
    toast.warning("Enter category name");
    return;
  }

  try {
    if (current.id) {
      // 🔥 UPDATE
      await updateDoc(doc(db, "eventCategories", current.id), {
        name: current.name,
      });

      toast.success("Updated successfully");
    } else {
      // 🔥 ADD
      await addDoc(collection(db, "eventCategories"), {
        name: current.name,
      });

      toast.success("Added successfully");
    }

    loadCategories();
    setIsModalOpen(false);

  } catch (error) {
    console.log(error);
    toast.error("Failed");
  }
};

  // DELETE
  // const handleDelete = (id) => {
  //   const updated = categories.filter((c) => c.id !== id);
  //   setCategories(updated);
  //   localStorage.setItem(
  //     "eventCategories",
  //     JSON.stringify(updated)
  //   );
  //   toast.error("Deleted successfully");
  // };
  const handleDelete = async (id) => {
  try {
    await deleteDoc(doc(db, "eventCategories", id));
    toast.error("Deleted successfully");
    loadCategories();
  } catch (error) {
    console.log(error);
  }
};

  // Generate gradient colors based on category name
  const getGradient = (name) => {
    const gradients = [
      "from-purple-500 to-indigo-600",
      "from-pink-500 to-rose-600",
      "from-green-500 to-emerald-600",
      "from-blue-500 to-cyan-600",
      "from-orange-500 to-red-600",
      "from-teal-500 to-green-600",
    ];
    const index = name?.length % gradients.length || 0;
    return gradients[index];
  };

  return (
    <div className="p-5 min-h-screen">
      <ToastContainer theme="colored"/>

      {/* HEADER */}
      <div className="flex justify-end items-center mb-6">
        {/* <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Folder className="text-[#2b4a8a]" size={24} />
            Event Categories
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {categories.length} {categories.length === 1 ? 'category' : 'categories'} total
          </p>
        </div> */}

        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-yellow-500  text-white px-4 py-2 rounded-lg transition-all duration-200  "
        >
          <Plus size={18} />
          Add Category
        </button>
      </div>

      {/* CARDS - Modern Design */}
      {categories.length === 0 ? (
        <div className="text-center py-16 bg-white ">
          <Calendar size={48} className="mx-auto text-gray-400 mb-3" />
          <p className="text-gray-500">No categories yet</p>
          <button
            onClick={() => openModal()}
            className="mt-3 text-[#2b4a8a] hover:text-[#1e3564] font-medium"
          >
            + Create your first category
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Gradient Top Bar */}
              <div className={`h-0.5 bg-yellow-500 ${getGradient(cat.name)}`}></div>
              
              {/* Card Content */}
              <div className="p-5">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg  ${getGradient(cat.name)} bg-opacity-10`}>
                      <Tag size={16} className="text-gray-700" />
                    </div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Category
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <button
                      onClick={() => openModal(cat)}
                      className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit category"
                    >
                      <Edit2 size={15} className="text-blue-600" />
                    </button>
                    <button
                      onClick={() => handleDelete(cat.id)}
                      className="p-1.5 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete category"
                    >
                      <Trash2 size={15} className="text-red-600" />
                    </button>
                  </div>
                </div>

                {/* Category Name */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-800 line-clamp-1">
                    {cat.name}
                  </h3>
                  {/* <div className="flex items-center gap-2 mt-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    <span className="text-xs text-gray-500">Active</span>
                  </div> */}
                </div>

                {/* Stats Section */}
                {/* <div className="pt-3 border-t border-gray-100 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Category ID</span>
                    <span className="text-xs font-mono text-gray-500">#{cat.id.toString().slice(-6)}</span>
                  </div>
                </div> */}

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL - Keep exactly as original */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-[400px] shadow-2xl transform animate-in slide-in-from-bottom-4 duration-300">
            <div className="p-6">
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-yellow-500 rounded-lg">
                    {current?.id ? (
                      <Edit2 size={18} className="text-white" />
                    ) : (
                      <Plus size={18} className="text-white" />
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {current?.id ? "Edit" : "Add"} Category
                  </h2>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleSave}>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category Name
                  </label>
                  <input
                    placeholder="e.g., Conference, Workshop, Meetup"
                    value={current?.name || ""}
                    onChange={(e) =>
                      setCurrent({ ...current, name: e.target.value })
                    }
                    className="w-full border border-yellow-500 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-yellow-500 "
                    autoFocus
                  />
                  <p className="text-gray-400 text-xs mt-1">
                    Enter a unique name for this category
                  </p>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg transition-all"
                  >
                    {current?.id ? "Update" : "Create"} Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}