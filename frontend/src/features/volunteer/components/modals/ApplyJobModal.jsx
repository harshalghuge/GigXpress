import React from "react";
import { useState } from "react";
import { X } from "lucide-react";

const initialForm = {
  name: "",
  phone: "",
  skills: "",
  committed: false,
};

const ApplyJobModal = ({ isOpen, onClose, selectedJob, onSubmit }) => {
  const [form, setForm] = useState(initialForm);

  if (!isOpen || !selectedJob) return null;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.phone || !form.skills) {
      alert("Please fill all details.");
      return;
    }

    if (!form.committed) {
      alert("Please confirm commitment checkbox.");
      return;
    }

    const result = onSubmit(form);
    if (!result?.ok) {
      alert(result?.message || "Unable to apply.");
      return;
    }

    alert("Applied successfully.");
  };

  const handleClose = () => {
    setForm(initialForm);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Apply for Job</h2>
            <p className="text-sm text-gray-600">{selectedJob.title}</p>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-gray-100 active:scale-95 transition"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-3 border rounded-xl"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-3 border rounded-xl"
          />
          <input
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="Skills (Registration, Crowd Handling...)"
            className="w-full px-4 py-3 border rounded-xl"
          />

          <label className="flex items-start gap-3 text-sm text-gray-700">
            <input
              type="checkbox"
              name="committed"
              checked={form.committed}
              onChange={handleChange}
              className="mt-1"
            />
            <span>I confirm I am available on this day and I read all job details.</span>
          </label>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobModal;

