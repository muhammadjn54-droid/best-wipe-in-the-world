import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function AddModal({ open, close, refresh }) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState(null);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("Name", name);
    formData.append("Description", description);

    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append("Images", images[i]);
      }
    }

    const res = await fetch("https://to-dos-api.softclub.tj/api/to-dos", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      refresh();
      close();
      setName("");
      setDescription("");
      setImages(null);
    } else {
      alert("Error!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-[450px]">
        <h2 className="text-2xl font-bold mb-5">Add Property</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-3 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Description"
            className="w-full border p-3 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="file"
            multiple
            onChange={(e) => setImages(e.target.files)}
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={close}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}