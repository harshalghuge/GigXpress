import React from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const CompletedEventsTab = ({ jobs, applications }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900">Completed Events</h1>

      <div className="grid gap-6">
        {jobs.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm text-center text-gray-600">
            No completed events yet.
          </div>
        ) : (
          jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                  <div className="grid sm:grid-cols-3 gap-4 mt-4 text-sm text-gray-500 font-medium">
                    <p className="flex items-center gap-2">
                      <MapPin size={16} className="text-indigo-500" />
                      {job.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <Calendar size={16} className="text-indigo-500" />
                      {job.date ? new Date(job.date).toLocaleDateString() : "N/A"}
                    </p>
                    <p className="flex items-center gap-2">
                      <Users size={16} className="text-indigo-500" />
                      {applications.filter((application) => application.jobId === job.id).length} Applications
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-bold">
                  Completed
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CompletedEventsTab;
