import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Eye, Search, X, Calendar, Tag, FileText, Star } from "lucide-react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MinistryAddModal from "../Ministries/MinistriesAdd";
import MinistryEditModal from "../Ministries/MinistriesEdit";

export default function MinistryList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [ministries, setMinistries] = useState([]);
  const [selectedMinistry, setSelectedMinistry] = useState(null);

  // LOAD MINISTRIES
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("ministries")) || [];
    setMinistries(data);
  }, []);

  // FILTERED MINISTRIES
  const filteredMinistries = ministries.filter((item) =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // DELETE MINISTRY
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this ministry?")) {
      const updated = ministries.filter((item) => item.id !== id);
      setMinistries(updated);
      localStorage.setItem("ministries", JSON.stringify(updated));
      toast.error("Ministry deleted successfully");
    }
  };

  // OPEN MODALS
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const openEditModal = (item) => {
    setSelectedMinistry(item);
    setIsEditModalOpen(true);
  };

  const openViewModal = (item) => {
    setSelectedMinistry(item);
    setIsViewModalOpen(true);
  };

  // HANDLE SAVE FROM ADD MODAL
  const handleSaveAdd = (newData) => {
    const existing = JSON.parse(localStorage.getItem("ministries")) || [];
    const updated = [...existing, newData];
    localStorage.setItem("ministries", JSON.stringify(updated));
    setMinistries(updated);
    toast.success("Ministry added successfully");
    setIsAddModalOpen(false);
  };

  // HANDLE SAVE FROM EDIT MODAL
  const handleSaveEdit = (updatedData) => {
    const data = JSON.parse(localStorage.getItem("ministries")) || [];
    const updated = data.map(item =>
      item.id === updatedData.id ? updatedData : item
    );
    localStorage.setItem("ministries", JSON.stringify(updated));
    setMinistries(updated);
    toast.success("Ministry updated successfully");
    setIsEditModalOpen(false);
    setSelectedMinistry(null);
  };

  return (
    <div className="min-h-screen py-2">
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      <div className="max-w-8xl mx-auto">
        {/* TOP BAR */}
        <div className="bg-white mb-5">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <button
              onClick={openAddModal}
              className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-200 shadow-md"
            >
              <Plus size={18} />
              Add New
            </button>

            <div className="flex-1 max-w-xs">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search by title..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white overflow-hidden">
          <div className="h-[65vh] overflow-y-auto">
            <table className="w-full text-sm table-fixed">
              <thead className="sticky top-0 bg-yellow-500 text-white z-10">
                <tr>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[60px]">NO</th>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[130px]">TITLE</th>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[130px]">DESCRIPTION</th>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[80px]">DATE</th>
                  <th className="border border-gray-300 px-2 py-3 text-center w-[80px]">ACTION</th>
                </tr>
              </thead>

              <tbody>
                {filteredMinistries && filteredMinistries.length > 0 ? (
                  filteredMinistries.map((item, index) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-200 text-center py-3 px-2">
                        {index + 1}
                      </td>
                      <td className="border border-gray-200 py-2 px-2">
                        <div className="font-medium text-gray-800 text-center truncate">
                          {item.title}
                        </div>
                      </td>
                      <td className="border border-gray-200 py-2 px-2">
                        <div className="text-gray-600 text-center text-xs line-clamp-2">
                          {item.description}
                        </div>
                      </td>
                      <td className="border border-gray-200 text-center py-2 px-2">
                        {item.date}
                      </td>
                      <td className="border border-gray-200 text-center py-2 px-2">
                        <div className="flex justify-center gap-1">
                          <button
                            onClick={() => openEditModal(item)}
                            className="p-1 hover:bg-yellow-50 rounded transition-colors"
                            title="Edit"
                          >
                            <FiEdit size={15} className="text-yellow-600" />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="p-1 hover:bg-red-50 rounded transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={15} className="text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-10 text-gray-500">
                      No ministries found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ADD MODAL */}
      <MinistryAddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveAdd}
      />

      {/* EDIT MODAL */}
      <MinistryEditModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedMinistry(null);
        }}
        onSave={handleSaveEdit}
        data={selectedMinistry}
      />

      {/* VIEW MODAL */}
      {isViewModalOpen && selectedMinistry && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-md mx-4 shadow-2xl overflow-hidden transform animate-in slide-in-from-bottom-4 duration-300 max-h-[90vh] overflow-y-auto">
            
            {/* HEADER */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-5 py-2.5 flex justify-between items-center sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                <h3 className="text-sm font-semibold text-white tracking-wide">Ministry Details</h3>
              </div>
              <button onClick={() => setIsViewModalOpen(false)} className="text-white hover:bg-white/20 rounded-full p-1">
                <X size={16} />
              </button>
            </div>

            {/* BODY */}
            <div className="p-4 space-y-3">
              <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                <div className="flex items-center gap-1.5">
                  <Tag className="text-yellow-500" size={12} />
                  <p className="text-[9px] text-gray-500 font-medium uppercase">Title</p>
                </div>
                <p className="text-[11px] font-semibold text-gray-800 mt-0.5 pl-5">
                  {selectedMinistry.title}
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                <div className="flex items-center gap-1.5">
                  <Calendar className="text-yellow-500" size={12} />
                  <p className="text-[9px] text-gray-500 font-medium uppercase">Date</p>
                </div>
                <p className="text-[11px] font-semibold text-gray-800 mt-0.5 pl-5">
                  {selectedMinistry.date}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-1 pb-0.5 border-b border-gray-100">
                  <FileText className="text-yellow-500" size={12} />
                  <p className="text-[10px] font-semibold text-gray-600 uppercase">Description</p>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  {selectedMinistry.description || "-"}
                </p>
              </div>
            </div>

            {/* FOOTER */}
            <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 flex justify-end sticky bottom-0">
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="px-3 py-1 text-[11px] font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}