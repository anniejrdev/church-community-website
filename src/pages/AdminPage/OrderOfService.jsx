import { useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";

export default function OrderOfServiceAdmin() {
  const [day, setDay] = useState("sunday");
  const [date, setDate] = useState("");
  const [eventOverride, setEventOverride] = useState(false);

  const [services, setServices] = useState([
    {
      id: 1,
      name: "Second Prayer",
      time: "8:30 - 10:30",
      location: "Main Sanctuary",
      fatherName: "",
      requiresFather: true,
    },
    {
      id: 2,
      name: "Sunday School",
      time: "10:30 - 11:30",
      location: "Hall",
      fatherName: "",
      requiresFather: false,
    },
  ]);

  // 🔹 Add Service
  const handleAdd = () => {
    setServices([
      ...services,
      {
        id: Date.now(),
        name: "",
        time: "",
        location: "",
        fatherName: "",
        requiresFather: false,
      },
    ]);
  };

  // 🔹 Change
  const handleChange = (id, field, value) => {
    setServices((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // 🔹 Delete
  const handleDelete = (id) => {
    setServices((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4">

      {/* 🔹 TOP CONTROL */}
      <div className="flex flex-wrap gap-3 items-center mb-3">

        {/* Day */}
        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="text-xs border px-2 py-1 rounded"
        >
          <option>sunday</option>
          <option>monday</option>
          <option>tuesday</option>
          <option>wednesday</option>
          <option>thursday</option>
          <option>friday</option>
          <option>saturday</option>
        </select>

        {/* Date */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="text-xs border px-2 py-1 rounded"
        />

        {/* Event Override */}
        <label className="text-xs flex items-center gap-1">
          <input
            type="checkbox"
            checked={eventOverride}
            onChange={(e) => setEventOverride(e.target.checked)}
          />
          Event Override (No Service)
        </label>

        {/* Add */}
        <button
          onClick={handleAdd}
          className="flex items-center gap-1 text-xs px-3 py-1 border rounded"
        >
          <FiPlus size={13} />
          Add Service
        </button>

        {/* Save */}
        <button className="text-xs bg-green-600 text-white px-3 py-1 rounded">
          Save
        </button>

      </div>

      {/* 🔹 INFO BAR */}
      <div className="text-xs text-gray-600 mb-2">
        Selected: {day.toUpperCase()} {date && `| ${date}`}
      </div>

      {/* 🔹 TABLE */}
      <div className="bg-white border rounded overflow-hidden">

        <div className="h-[60vh] overflow-y-auto">

          <table className="w-full text-xs table-fixed">

            <thead className="sticky top-0 bg-gray-100">
              <tr>
                <th className="border px-2 py-2 w-[50px]">NO</th>
                <th className="border px-2 py-2">NAME</th>
                <th className="border px-2 py-2">TIME</th>
                <th className="border px-2 py-2">LOCATION</th>
                <th className="border px-2 py-2 w-[160px]">FATHER</th>
                <th className="border px-2 py-2 w-[100px]">ACTION</th>
              </tr>
            </thead>

            <tbody>
              {services.map((item, index) => (
                <tr key={item.id}>

                  <td className="border text-center">
                    {index + 1}
                  </td>

                  {/* Name */}
                  <td className="border">
                    <input
                      value={item.name}
                      onChange={(e) =>
                        handleChange(item.id, "name", e.target.value)
                      }
                      className="w-full px-2 py-1 outline-none"
                    />
                  </td>

                  {/* Time */}
                  <td className="border">
                    <input
                      value={item.time}
                      onChange={(e) =>
                        handleChange(item.id, "time", e.target.value)
                      }
                      className="w-full px-2 py-1 outline-none"
                    />
                  </td>

                  {/* Location */}
                  <td className="border">
                    <input
                      value={item.location}
                      onChange={(e) =>
                        handleChange(item.id, "location", e.target.value)
                      }
                      className="w-full px-2 py-1 outline-none"
                    />
                  </td>

                  {/* Father */}
                  <td className="border text-center">
                    {item.requiresFather ? (
                      <input
                        value={item.fatherName}
                        placeholder="Father Name"
                        onChange={(e) =>
                          handleChange(item.id, "fatherName", e.target.value)
                        }
                        className="w-full px-2 py-1 outline-none"
                      />
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>

                  {/* Action */}
                  <td className="border text-center">
                    <button onClick={() => handleDelete(item.id)}>
                      <FiTrash2 className="text-red-500" size={14} />
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
}