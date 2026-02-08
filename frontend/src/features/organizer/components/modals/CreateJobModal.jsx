import React from "react";
import { useState } from "react";
import { AlertCircle, X } from "lucide-react";

const initialForm = {
  title: "",
  location: "",
  date: "",
  workers: "",
  budget: "",
  description: "",
  skills: ["Event Management"],
};

const availableSkills = [
  "Event Management",
  "Hospitality",
  "Marketing",
  "Crowd Handling",
  "Technical",
];

const CreateJobModal = ({ isOpen, onClose, onSubmit }) => {
  const [form, setForm] = useState(initialForm);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSkill = (skill) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((item) => item !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleSubmit = () => {
    if (
      !form.title ||
      !form.location ||
      !form.date ||
      !form.workers ||
      !form.budget ||
      !form.description
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSubmit({
      ...form,
      organizer: "Organizer Name",
      organizerRating: 4.8,
      verified: true,
      urgent: false,
      distance: "Nearby",
      duration: "Full Day",
    });

    onClose();
  };

  const handleClose = () => {
    setForm(initialForm);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Create New Job</h2>
            <p className="text-sm text-gray-500">Post a gig for volunteers</p>
          </div>
          <button onClick={handleClose} className="p-2 rounded-xl hover:bg-gray-100">
            <X size={22} />
          </button>
        </div>

        <div className="p-6 space-y-5 max-h-[70vh] overflow-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Job Title *</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Wedding helpers"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Location *</label>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Pune"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Date *</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Workers Needed *</label>
              <input
                type="number"
                name="workers"
                value={form.workers}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="5"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Budget per Worker *</label>
            <input
              type="number"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="1500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Required Skills</label>
            <div className="flex flex-wrap gap-2">
              {availableSkills.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className={`px-3 py-1 rounded-full text-sm font-bold border transition-colors duration-200 ${
                    form.skills.includes(skill)
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-indigo-50 text-indigo-700 border-indigo-100"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Job Description *</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32"
              placeholder="Describe responsibilities."
            ></textarea>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex gap-3">
            <AlertCircle className="text-yellow-600 flex-shrink-0" size={20} />
            <div className="text-sm text-yellow-800">
              <p className="font-semibold mb-1">Escrow Payment Required</p>
              <p>Deposit total budget to escrow before publishing.</p>
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-gray-50 flex gap-3 justify-end sticky bottom-0">
          <button
            onClick={handleClose}
            className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-white"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold"
          >
            Publish Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateJobModal;

