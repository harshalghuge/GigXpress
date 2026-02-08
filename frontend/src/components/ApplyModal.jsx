import { useState } from "react";
import API from "../api/api";
import { X } from "lucide-react";

const ApplyModal = ({ isOpen, onClose, selectedJob, onAppliedSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    skills: "",
    committed: false,
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  if (!isOpen || !selectedJob) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!form.name || !form.phone || !form.skills) {
      return setMsg("Please fill all fields");
    }
    if (!form.committed) {
      return setMsg("Please confirm commitment.");
    }

    try {
      setLoading(true);

      const res = await API.post(`/gigs/${selectedJob._id}/apply`, form);

      setMsg("✅ Applied successfully!");
      if (onAppliedSuccess) onAppliedSuccess(res.data.gig);

      setTimeout(() => {
        onClose();
        setForm({ name: "", phone: "", skills: "", committed: false });
        setMsg("");
      }, 800);
    } catch (err) {
      setMsg(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Apply for Job</h2>
            <p className="text-sm text-gray-600">{selectedJob.title}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 active:scale-95 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-gray-700">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter phone"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700">Skills</label>
            <input
              name="skills"
              value={form.skills}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="ex: Registration, Decoration"
            />
          </div>

          <label className="flex items-start gap-3 text-sm text-gray-700">
            <input
              type="checkbox"
              name="committed"
              checked={form.committed}
              onChange={handleChange}
              className="mt-1"
            />
            <span>
              I confirm that I will be available for this event and I have read all job details.
            </span>
          </label>

          {msg && (
            <div className="text-sm font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 px-4 py-3 rounded-xl">
              {msg}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:brightness-110 hover:shadow-lg transition-all active:scale-95 disabled:opacity-50"
          >
            {loading ? "Applying..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;
