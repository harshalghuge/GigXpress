import React from "react";
import { Calendar, Clock3, Eye, MapPin, Users } from "lucide-react";

const OverviewTab = ({ stats, jobs, applications, onOpenApplicants, onGoToTab }) => {
  const liveJobs = jobs.filter((job) => job.status === "Active");
  const newApplications = applications.slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Manage your events and workers efficiently</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
              >
                <stat.icon size={24} />
              </div>
              <span className="text-xs font-bold px-2 py-1 bg-green-50 text-green-600 rounded-lg">
                {stat.change}
              </span>
            </div>
            <p className="text-gray-500 font-medium text-sm">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <section className="lg:col-span-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">My Live Jobs</h2>
              <p className="text-sm text-gray-500 mt-1">Track active gigs and incoming responses.</p>
            </div>
            <button
              onClick={() => onGoToTab("jobs")}
              className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              View All Jobs
            </button>
          </div>

          <div className="space-y-4">
            {liveJobs.length === 0 ? (
              <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center text-gray-600">
                No active jobs yet.
              </div>
            ) : (
              liveJobs.map((job) => {
                const jobApplicationsCount = applications.filter(
                  (application) => application.jobId === job.id
                ).length;

                return (
                  <article
                    key={job.id}
                    className="rounded-2xl border border-gray-100 p-5 hover:border-indigo-100 hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col md:flex-row justify-between gap-5">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                          <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-green-100 text-green-700">
                            Live
                          </span>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-3 text-sm font-medium text-gray-600">
                          <p className="flex items-center gap-2">
                            <MapPin size={16} className="text-indigo-500" /> {job.location}
                          </p>
                          <p className="flex items-center gap-2">
                            <Calendar size={16} className="text-indigo-500" />
                            {job.date ? new Date(job.date).toLocaleDateString() : "Date not set"}
                          </p>
                          <p className="flex items-center gap-2">
                            <Users size={16} className="text-indigo-500" /> {jobApplicationsCount} applicants
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <button
                          onClick={() => onOpenApplicants(job)}
                          className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2"
                        >
                          <Eye size={16} /> View
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </section>

        <section className="lg:col-span-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">New Applications</h2>
              <p className="text-sm text-gray-500 mt-1">Latest volunteers waiting for review.</p>
            </div>
            <button
              onClick={() => onGoToTab("applications")}
              className="text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              See All
            </button>
          </div>

          <div className="space-y-3">
            {newApplications.length === 0 ? (
              <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center text-gray-600">
                No applications yet.
              </div>
            ) : (
              newApplications.map((app) => (
                <article
                  key={app.id}
                  className="rounded-xl border border-gray-100 p-4 hover:border-indigo-100 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-gray-900">{app.applicantName}</h3>
                      <p className="text-sm text-gray-500">{app.jobTitle}</p>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold ${
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

                  <p className="mt-3 text-xs text-gray-500 flex items-center gap-2">
                    <Clock3 size={14} className="text-gray-400" />
                    {app.appliedDate || "Recently"}
                  </p>
                </article>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OverviewTab;

