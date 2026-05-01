import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Search, X, Image as ImageIcon, Folder, Upload } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GalleryAddModal from "./GalleryAdd";
import GalleryEditModal from "./GalleryEdit";

export default function GalleryList() {
  const [galleries, setGalleries] = useState([]);
  const [filteredGalleries, setFilteredGalleries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(null);

  // LOAD GALLERIES
  useEffect(() => {
    loadGalleries();
  }, []);

  const loadGalleries = () => {
    const data = JSON.parse(localStorage.getItem("galleries")) || [];
    setGalleries(data);
    setFilteredGalleries(data);
  };

  // SEARCH
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredGalleries(galleries);
    } else {
      const filtered = galleries.filter(item =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.section?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredGalleries(filtered);
    }
  }, [searchTerm, galleries]);

  // DELETE
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this gallery item?")) {
      const updated = galleries.filter(item => item.id !== id);
      setGalleries(updated);
      localStorage.setItem("galleries", JSON.stringify(updated));
      toast.error("Gallery deleted successfully");
    }
  };

  // OPEN MODALS
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const openEditModal = (item) => {
    setSelectedGallery(item);
    setIsEditModalOpen(true);
  };

  // HANDLE SAVE FROM ADD MODAL
  const handleSaveAdd = (newData) => {
    const existing = JSON.parse(localStorage.getItem("galleries")) || [];
    const updated = [...existing, newData];
    localStorage.setItem("galleries", JSON.stringify(updated));
    setGalleries(updated);
    toast.success("Gallery added successfully");
    setIsAddModalOpen(false);
  };

  // HANDLE SAVE FROM EDIT MODAL
  const handleSaveEdit = (updatedData) => {
    const data = JSON.parse(localStorage.getItem("galleries")) || [];
    const updated = data.map(item =>
      item.id === updatedData.id ? updatedData : item
    );
    localStorage.setItem("galleries", JSON.stringify(updated));
    setGalleries(updated);
    toast.success("Gallery updated successfully");
    setIsEditModalOpen(false);
    setSelectedGallery(null);
  };

  return (
    <div className="min-h-screen p-5">
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      {/* TOP BAR */}
      <div className="mb-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-200"
          >
            <Plus size={18} />
            Add Gallery
          </button>

          <div className="flex-1 max-w-xs">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search by title or section..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CARDS GRID - Smaller Cards */}
      {filteredGalleries.length === 0 ? (
        <div className="text-center py-16 rounded-xl border-gray-300">
          <ImageIcon size={48} className="mx-auto text-gray-400 mb-3" />
          <p className="text-gray-500">No gallery items yet</p>
          <button
            onClick={openAddModal}
            className="mt-3 text-yellow-600 hover:text-yellow-700 font-medium"
          >
            + Add your first gallery item
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {filteredGalleries.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-all duration-200"
            >
              {/* Image Section - Smaller height */}
              <div className="relative h-full overflow-hidden bg-gray-100">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon size={24} className="text-gray-400" />
                  </div>
                )}
                
                {/* Section Label - Smaller */}
                <div className="absolute top-1 left-1">
                  <span className="px-1.5 py-0.5 bg-yellow-500 text-white text-[10px] rounded shadow-md line-clamp-1 max-w-[90px]">
                    {item.section}
                  </span>
                </div>

                {/* Action Buttons - Smaller */}
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

              {/* Title - Smaller */}
              <div className="p-1.5">
                <h3 className="font-medium text-gray-800 text-[11px] line-clamp-2 text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ADD MODAL */}
      <GalleryAddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveAdd}
      />

      {/* EDIT MODAL */}
      <GalleryEditModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedGallery(null);
        }}
        onSave={handleSaveEdit}
        data={selectedGallery}
      />
    </div>
  );
}