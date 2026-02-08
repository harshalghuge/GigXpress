import React from "react";
import { CheckCircle, MessageSquare, X } from "lucide-react";

const JobApplicantsModal = ({
  isOpen,
  onClose,
  job,
  jobApplications,
  onUpdateStatus,
}) => {
  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Job Applications</h2>
            <p className="text-sm text-gray-600">{job.title}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-gray-100">
            <X size={22} />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[70vh] overflow-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 border">
              <p className="text-xs font-bold text-gray-500">Location</p>
              <p className="font-bold text-gray-900 mt-1">{job.location}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border">
              <p className="text-xs font-bold text-gray-500">Date</p>
              <p className="font-bold text-gray-900 mt-1">
                {job.date ? new Date(job.date).toLocaleDateString() : "N/A"}
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border">
              <p className="text-xs font-bold text-gray-500">Workers</p>
              <p className="font-bold text-gray-900 mt-1">{job.workers}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border">
              <p className="text-xs font-bold text-gray-500">Budget</p>
              <p className="font-bold text-indigo-600 mt-1">Rs {job.budget}</p>
            </div>
          </div>

          <div className="space-y-4">
            {jobApplications.length === 0 ? (
              <div className="p-10 text-center text-gray-600 border border-dashed rounded-xl bg-gray-50">
                No applications for this job yet.
              </div>
            ) : (
              jobApplications.map((app) => (
                <div
                  key={app.id}
                  className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex gap-4">
                      <img
                        src={`https://i.pravatar.cc/150?u=${app.phone}`}
                        alt={app.applicantName}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-extrabold text-gray-900">{app.applicantName}</h3>
                        <p className="text-sm text-gray-500">{app.phone}</p>

                        <div className="mt-2 text-sm text-gray-700 space-y-1">
                          <p><span className="font-bold">Skills:</span> {app.skills}</p>
                          <p><span className="font-bold">Applied:</span> {app.appliedDate}</p>
                        </div>

                        <div className="mt-3">
                          <span
                            className={`px-3 py-1 rounded-full text-[11px] font-extrabold ${
                              app.status === "Accepted"
                                ? "bg-green-100 text-green-700"
                                : app.status === "Rejected"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {app.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center">
                      {app.status === "Pending" ? (
                        <>
                          <button
                            onClick={() => onUpdateStatus(app.id, "Accepted")}
                            className="px-5 py-2 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all text-sm flex items-center gap-2"
                          >
                            <CheckCircle size={18} /> Hire
                          </button>
                          <button
                            onClick={() => onUpdateStatus(app.id, "Rejected")}
                            className="px-5 py-2 border border-red-200 text-red-600 rounded-xl font-bold hover:bg-red-50 transition-all text-sm"
                          >
                            Reject
                          </button>
                        </>
                      ) : (
                        <button className="px-5 py-2 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all text-sm flex items-center gap-2">
                          <MessageSquare size={18} /> Message
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="p-6 border-t bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-3 border border-gray-300 rounded-lg font-bold hover:bg-white transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobApplicantsModal;

