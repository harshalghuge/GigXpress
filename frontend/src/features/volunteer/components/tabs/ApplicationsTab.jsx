import React from "react";
import { Calendar, Clock, DollarSign, MessageSquare } from "lucide-react";

const ApplicationsTab = ({ applications }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">My Applications</h1>

      <div className="grid gap-6">
        {applications.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-10 text-center text-gray-600">
            No applications yet. Apply from Browse tab.
          </div>
        ) : (
          applications.map((app) => (
            <div
              key={app.id}
              className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{app.jobTitle}</h3>
                      <p className="text-gray-600">{app.organizer}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
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

                  <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{app.date ? new Date(app.date).toLocaleDateString() : "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign size={16} />
                      <span className="font-semibold">{app.pay}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>Applied: {app.appliedDate}</span>
                    </div>
                  </div>
                </div>

                <div className="flex lg:flex-col gap-2">
                  <button className="px-6 py-2 border rounded-lg hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-600 transition-all flex items-center justify-center gap-2">
                    <MessageSquare size={18} />
                    Message
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ApplicationsTab;

