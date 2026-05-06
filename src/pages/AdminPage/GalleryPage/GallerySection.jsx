import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, X, Calendar, Tag, Folder, Image as ImageIcon } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db } from "../../../firebase";

export default function GallerySection() {
  const [sections, setSections] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  // LOAD
 useEffect(() => {
  loadSections();
}, []);

const loadSections = async () => {
  try {
    const snap = await getDocs(collection(db, "gallerySections"));

    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setSections(data);
  } catch (error) {
    console.log(error);
    toast.error("Failed to load sections");
  }
};

  // OPEN MODAL
  const openModal = (section = null) => {
    if (section) {
      setCurrent(section);
    } else {
      setCurrent({ id: null, name: "" });
    }
    setIsModalOpen(true);
  };

  // SAVE
  // const handleSave = (e) => {
  //   e.preventDefault();

  //   if (!current.name) {
  //     toast.warning("Enter section name");
  //     return;
  //   }

  //   let updated;

  //   if (current.id) {
  //     // EDIT
  //     updated = sections.map((s) =>
  //       s.id === current.id ? current : s
  //     );
  //     toast.success("Updated successfully");
  //   } else {
  //     // ADD
  //     const newSection = {
  //       ...current,
  //       id: Date.now(),
  //     };
  //     updated = [...sections, newSection];
  //     toast.success("Added successfully");
  //   }

  //   setSections(updated);
  //   localStorage.setItem("gallerySections", JSON.stringify(updated));
  //   setIsModalOpen(false);
  // };
  const handleSave = async (e) => {
  e.preventDefault();

  if (!current.name) {
    toast.warning("Enter section name");
    return;
  }

  try {
    if (current.id) {
      // ✏️ UPDATE
      await updateDoc(doc(db, "gallerySections", current.id), {
        name: current.name,
      });

      toast.success("Updated successfully");
    } else {
      // ➕ ADD
      await addDoc(collection(db, "gallerySections"), {
        name: current.name,
        createdAt: new Date(),
      });

      toast.success("Added successfully");
    }

    loadSections();
    setIsModalOpen(false);
  } catch (error) {
    console.log(error);
    toast.error("Failed");
  }
};

  // DELETE
  // const handleDelete = (id) => {
  //   if (window.confirm("Are you sure you want to delete this gallery section?")) {
  //     const updated = sections.filter((s) => s.id !== id);
  //     setSections(updated);
  //     localStorage.setItem("gallerySections", JSON.stringify(updated));
  //     toast.error("Deleted successfully");
  //   }
  // };
  const handleDelete = async (id) => {
  if (!window.confirm("Delete this section?")) return;

  try {
    await deleteDoc(doc(db, "gallerySections", id));
    toast.error("Deleted successfully");
    loadSections();
  } catch (error) {
    console.log(error);
  }
};

  // Generate gradient colors based on section name
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
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg transition-all duration-200"
        >
          <Plus size={18} />
          Add Gallery Section
        </button>
      </div>

      {/* CARDS - Modern Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((section) => (
            <div
              key={section.id}
              className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Gradient Top Bar */}
              <div className={`h-0.5 bg-yellow-500 ${getGradient(section.name)}`}></div>
              
              {/* Card Content */}
              <div className="p-5">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`p-2  ${getGradient(section.name)} bg-opacity-10`}>
                      <Folder size={16} className="text-gray-700" />
                    </div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Gallery Section
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <button
                      onClick={() => openModal(section)}
                      className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit section"
                    >
                      <Edit2 size={15} className="text-blue-600" />
                    </button>
                    <button
                      onClick={() => handleDelete(section.id)}
                      className="p-1.5 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete section"
                    >
                      <Trash2 size={15} className="text-red-600" />
                    </button>
                  </div>
                </div>

                {/* Section Name */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-800 line-clamp-1">
                    {section.name}
                  </h3>
                </div>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
    

      {/* MODAL */}
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
                    {current?.id ? "Edit" : "Add"} Gallery Section
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
                    Section Name
                  </label>
                  <input
                    placeholder="e.g., Worship, Events, Youth"
                    value={current?.name || ""}
                    onChange={(e) =>
                      setCurrent({ ...current, name: e.target.value })
                    }
                    className="w-full border border-yellow-500 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-yellow-500"
                    autoFocus
                  />
                  <p className="text-gray-400 text-xs mt-1">
                    Enter a unique name for this gallery section
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
                    className="px-5 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg transition-all hover:bg-yellow-600"
                  >
                    {current?.id ? "Update" : "Create"} Section
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