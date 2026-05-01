import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function MinistryAddModal({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });

  // SET CURRENT DATE
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setFormData(prev => ({ ...prev, date: today }));
  }, []);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.description) {
      alert("Please fill all required fields");
      return;
    }

    const newData = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString(),
    };

    onSave(newData);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      date: new Date().toISOString().split("T")[0],
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-xl mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
        
        {/* HEADER */}
        <div className="bg-yellow-500 px-5 py-3 rounded-t-lg flex justify-between items-center sticky top-0">
          <h3 className="text-sm font-semibold text-white">Add New Ministry</h3>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X size={16} />
          </button>
        </div>
        
        {/* BODY */}
        <div className="p-4">
          {/* TITLE */}
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Enter title"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          {/* DATE */}
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Enter description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-5 py-3 bg-gray-50 rounded-b-lg flex justify-end gap-3 sticky bottom-0">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-1.5 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 shadow-sm transition-colors"
          >
            Save Ministry
          </button>
        </div>
      </div>
    </div>
  );
}