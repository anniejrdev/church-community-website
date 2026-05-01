import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

export default function SponsorEditModal({ isOpen, onClose, onSave, data }) {
  const [form, setForm] = useState({
    id: null,
    name: "",
    upiId: "",
    reason: "",
    amount: "",
    date: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        id: data.id,
        name: data.name || "",
        upiId: data.upiId || "",
        reason: data.reason || "",
        amount: data.amount || "",
        date: data.date || "",
      });
    }
  }, [data]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.upiId || !form.amount) {
      alert("Please fill Name, UPI ID and Amount");
      return;
    }
    onSave(form);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-xl mx-4 shadow-xl">
        
        {/* Modal Header */}
        <div className="bg-yellow-500 px-6 py-4 rounded-t-lg flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">Edit Sponsor</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            
            {/* NAME */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* UPI ID */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                UPI ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="example@okhdfcbank"
                value={form.upiId}
                onChange={(e) => handleChange("upiId", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* REASON */}
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Sponsor Reason
              </label>
              <textarea
                placeholder="Please describe the sponsor reason..."
                value={form.reason}
                onChange={(e) => handleChange("reason", e.target.value)}
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent resize-none"
              />
            </div>

            {/* AMOUNT */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Sponsor Amount (₹) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                value={form.amount}
                onChange={(e) => handleChange("amount", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* DATE */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => handleChange("date", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors shadow-sm"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}