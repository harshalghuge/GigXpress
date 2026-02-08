import React from "react";
import { CheckCircle, MessageSquare } from "lucide-react";

const OrganizerApplicationsTab = ({ applications, onUpdateStatus }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900">Applications</h1>

      <div className="grid gap-4">
        {applications.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm text-center text-gray-600">
            No one has applied yet.
          </div>
        ) : (
          applications.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex gap-4">
                  <img
                    src={`https://i.pravatar.cc/150?u=${app.phone}`}
                    alt={app.applicantName}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{app.applicantName}</h3>
                    <p className="text-sm text-gray-500">{app.jobTitle}</p>

                    <div className="mt-2 text-sm text-gray-600 space-y-1">
                      <p><span className="font-bold">Phone:</span> {app.phone}</p>
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

                <div className="flex items-center gap-3">
                  {app.status === "Pending" ? (
                    <>
                      <button
                        onClick={() => onUpdateStatus(app.id, "Accepted")}
                        className="px-5 py-2 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all text-sm flex items-center gap-2"
                      >
                        <CheckCircle size={18} /> Hire Now
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
  );
};

export default OrganizerApplicationsTab;

