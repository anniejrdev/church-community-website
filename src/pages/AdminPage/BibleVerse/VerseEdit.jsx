import { useState, useEffect } from "react";
import { X, Upload } from "lucide-react";

export default function DailyBibleEditModal({ isOpen, onClose, onSave, data }) {
  const [formData, setFormData] = useState({
    id: null,
    date: "",
    image: "",
  });
  const [imagePreview, setImagePreview] = useState("");

  // LOAD DATA TO EDIT
  useEffect(() => {
    if (data) {
      setFormData({
        id: data.id,
        date: data.date || "",
        image: data.image || "",
      });
      setImagePreview(data.image || "");
    }
  }, [data]);

  // COMPRESS IMAGE FUNCTION
  const compressImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          let width = img.width;
          let height = img.height;
          const maxSize = 600;
          
          if (width > height && width > maxSize) {
            height = (height * maxSize) / width;
            width = maxSize;
          } else if (height > maxSize) {
            width = (width * maxSize) / height;
            height = maxSize;
          }
          
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
          
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
          resolve(compressedDataUrl);
        };
        img.onerror = reject;
      };
      reader.onerror = reject;
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        if (file.size > 2 * 1024 * 1024) {
          alert("Image is too large. Please select an image under 2MB.");
          return;
        }
        const compressedImage = await compressImage(file);
        setImagePreview(compressedImage);
        setFormData({ ...formData, image: compressedImage });
      } catch (error) {
        console.error("Error compressing image:", error);
        alert("Error processing image. Please try another image.");
      }
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.date || !formData.image) {
      alert("Please fill all required fields and upload an image");
      return;
    }

    // Check for duplicate date (excluding current item)
    const existing = JSON.parse(localStorage.getItem("dailyBible")) || [];
    const isDuplicate = existing.some(item => 
      item.date === formData.date && item.id !== formData.id
    );
    if (isDuplicate) {
      alert("A Bible image already exists for this date. Please select another date.");
      return;
    }

    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4 shadow-xl max-h-[85vh] overflow-y-auto">
        
        {/* HEADER */}
        <div className="bg-yellow-500 px-5 py-3 rounded-t-lg flex justify-between items-center sticky top-0">
          <h3 className="text-sm font-semibold text-white">Edit Daily Bible</h3>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X size={18} />
          </button>
        </div>
        
        {/* BODY */}
        <div className="p-4">
          {/* DATE */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          {/* IMAGE UPLOAD */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Bible Image <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-yellow-500 transition-colors w-32">
                  <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                  <span className="text-xs text-gray-500">Change Image</span>
                </div>
              </label>
              {imagePreview && (
                <div className="relative">
                  <img src={imagePreview} alt="Preview" className="w-20 h-20 object-cover rounded-lg" />
                  <button
                    onClick={() => {
                      setImagePreview("");
                      handleChange("image", "");
                    }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                  >
                    <X size={12} />
                  </button>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Max 2MB image (will be compressed automatically)
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-5 py-3 bg-gray-50 rounded-b-lg flex justify-end gap-3 sticky bottom-0">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-1.5 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 shadow-sm"
          >
            Update Bible Image
          </button>
        </div>
      </div>
    </div>
  );
}