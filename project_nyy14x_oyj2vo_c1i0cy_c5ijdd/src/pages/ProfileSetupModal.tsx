import React, { useState } from 'react';

const ProfileSetupModal = ({ initialData, onComplete, onCancel }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder="Year"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          placeholder="Branch"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="gpa"
          value={formData.gpa}
          onChange={handleChange}
          placeholder="GPA"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="Skills"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="resume"
          value={formData.resume}
          onChange={handleChange}
          placeholder="Resume URL"
          className="w-full border px-3 py-2 rounded"
        />

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSetupModal;
