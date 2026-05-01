import { useState } from "react";
import { FiEdit, FiTrash2, FiRefreshCw, FiSearch } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrayerRequestEditModal from "../PrayerRequest/PrayerRequestEdit"

export default function PrayerRequestsAdmin() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Samuel",
      place: "Chennai",
      reason: "health prayer",
      date: "2026-04-27",
    },
    {
      id: 2,
      name: "Mary",
      place: "London",
      date: "2026-04-25",
    },
  
  ]);

  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleRefresh = () => {
    toast.success("Refreshed successfully");
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
    toast.error("Deleted successfully");
  };

  // Open Modal when edit icon is clicked
  const handleEditClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Save edited data from modal
  const handleSaveEdit = (updatedItem) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
    toast.success("Updated successfully");
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full p-4">

      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      {/* 🔹 Top Bar */}
      <div className="flex justify-between items-center mb-4 pb-2">
  
        {/* LEFT SECTION */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <FiRefreshCw size={14} className="text-gray-600" />
            <span className="text-gray-700 font-medium">Refresh</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-yellow-700">Prayer Requests</span>
              <div className="w-px h-4 bg-yellow-200 mx-1"></div>
              <span className="text-lg font-bold text-yellow-800">{data.length}</span>
            </div>
          </div>
        </div>

        {/* RIGHT SEARCH SECTION */}
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-3 py-1.5 text-sm border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 w-64 placeholder:text-gray-400"
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

      {/* 🔹 Table */}
      <div className="bg-white flex-1 overflow-hidden rounded">
        <div
          className="h-[72vh] overflow-y-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <table className="w-full text-xs table-fixed">

            {/* Header */}
            <thead className="sticky top-0 bg-yellow-500 z-10">
              <tr className="text-white">
                <th className="border border-gray-300 px-3 py-3 w-[60px] text-center">NO</th>
                <th className="border border-gray-300 px-3 py-3 w-[180px] text-center">NAME</th>
                <th className="border border-gray-300 px-3 py-3 w-[160px] text-center">PLACE</th>
                <th className="border border-gray-300 px-3 py-3 w-[200px] text-center">REASON</th>
                <th className="border border-gray-300 px-3 py-3 w-[140px] text-center">DATE</th>
                <th className="border border-gray-300 px-3 py-3 w-[120px] text-center">ACTION</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    No data found
                  </td>
                </tr>
              ) : (
                filtered.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-3 py-3 text-center">
                      {index + 1}
                    </td>

                    {/* Name */}
                    <td
                      title={item.name}
                      className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
                    >
                      {item.name}
                    </td>

                    {/* Place */}
                    <td
                      title={item.place}
                      className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
                    >
                      {item.place}
                    </td>

                    {/* Reason */}
                    <td
                      title={item.reason}
                      className="border border-gray-200 px-3 py-3 text-center truncate whitespace-nowrap overflow-hidden"
                    >
                      {item.reason || "-"}
                    </td>

                    {/* Date */}
                    <td className="border border-gray-200 px-3 py-3 text-center">
                      {item.date}
                    </td>

                    {/* Actions */}
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
                          onClick={() => handleDelete(item.id)}
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

      {/* 🔹 Edit Modal Component */}
      <PrayerRequestEditModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveEdit}
        data={selectedItem}
      />

    </div>
  );
}