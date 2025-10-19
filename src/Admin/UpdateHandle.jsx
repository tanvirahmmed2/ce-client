import React, { useContext, useState } from "react";
import { ThemeContext } from "../components/Context";
import axios from "axios";
import { toast } from "react-toastify";
import { api } from "../components/api";
import { MdDeleteOutline, MdEdit } from "react-icons/md";

const UpdateHandle = () => {
  const { update } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [editData, setEditData] = useState({
    editId: null,
    title: "",
    description: "",
  });

  // Handle new upload form changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  // Add new update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newData = new FormData();
      newData.append("title", formData.title);
      newData.append("description", formData.description);
      newData.append("image", formData.image);

      const response = await axios.post(`${api}/update/add`, newData, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      setFormData({ title: "", description: "", image: null });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add update");
    }
  };

  // Delete update
  const removeUpdate = async (id) => {
    try {
      const response = await axios.delete(`${api}/update/remove`, {
        data: { id },
        withCredentials: true,
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete update");
    }
  };

  const editUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${api}/update/update`, editData, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      setEditData({ editId: null, title: "", description: "" });
      window.location.replace("/admin/update");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update item");
    }
  };

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-10 px-4">
      {/* Add New Update Form */}
      <div className="w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Latest Updates
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-medium">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              required
              onChange={handleChange}
              value={formData.title}
              className="w-full border rounded-lg p-2 px-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="image" className="font-medium">
              Image{" "}
              <span className="italic text-xs font-normal text-red-400">
                (can't change later)
              </span>
            </label>
            <input
              type="file"
              name="image"
              id="image"
              required
              accept="image/*"
              onChange={handleChange}
              className="w-full border rounded-lg p-2 px-3 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-600 file:text-white hover:file:bg-emerald-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="font-medium">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="4"
              required
              onChange={handleChange}
              value={formData.description}
              className="w-full border rounded-lg p-2 px-3 resize-none outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 transition text-white font-semibold py-2 rounded-lg shadow-md"
          >
            Publish
          </button>
        </form>
      </div>

      <div className="w-full bg-white rounded-2xl shadow-lg p-8 max-w-5xl">
        <h1 className="text-2xl text-center font-bold text-gray-800 mb-6">
          Uploaded Updates
        </h1>
        {update && update.length > 0 ? (
          <div className="flex flex-col gap-4">
            {update.map(({ _id, title, description }) => (
              <div
                key={_id}
                className="border rounded-xl shadow-sm hover:shadow-md transition-all p-4 bg-white flex flex-col gap-3"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                  <p className="text-lg font-semibold text-emerald-700">
                    {title}
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => removeUpdate(_id)}
                      className="text-red-500 hover:text-red-700 hover:scale-110 transition"
                    >
                      <MdDeleteOutline size={20} />
                    </button>
                    <button
                      onClick={() =>
                        setEditData((prev) =>
                          prev.editId === _id
                            ? { editId: null, title: "", description: "" }
                            : { editId: _id, title, description }
                        )
                      }
                      className="text-blue-500 hover:text-blue-700 hover:scale-110 transition"
                    >
                      <MdEdit size={20} />
                    </button>
                  </div>
                </div>

                <p className="text-gray-600">{description.slice(0, 60)}...</p>

                {editData.editId === _id && (
                  <div className="mt-3 border-t pt-3 flex flex-col gap-3">
                    <h2 className="font-semibold text-gray-700">
                      Edit Update
                    </h2>
                    <input
                      type="text"
                      name="title"
                      placeholder="Edit title"
                      value={editData.title}
                      onChange={handleEdit}
                      className="border rounded-lg p-2 outline-none"
                    />
                    <textarea
                      name="description"
                      placeholder="Edit description"
                      value={editData.description}
                      onChange={handleEdit}
                      className="border rounded-lg p-2 outline-none"
                    ></textarea>
                    <div className="flex gap-3">
                      <button
                        onClick={editUpdate}
                        className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setEditData({ editId: null, title: "", description: "" })
                        }
                        className="bg-gray-300 px-4 py-1 rounded-lg hover:bg-gray-400 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="p-4 text-center text-gray-500">
            No update uploaded yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default UpdateHandle;
