import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Calendar, MapPin, Trash2, Users } from "lucide-react";

const JobsTab = ({
  jobs,
  applications,
  onOpenApplicants,
  onUpdateJobFields,
  onMarkJobCompleted,
  onDeleteJob,
}) => {
  const [openedJobId, setOpenedJobId] = useState(null);

  const openedJob = useMemo(
    () => jobs.find((job) => job.id === openedJobId) || null,
    [jobs, openedJobId]
  );
  const openedJobApplications = useMemo(
    () =>
      openedJob
        ? applications.filter((application) => application.jobId === openedJob.id)
        : [],
    [applications, openedJob]
  );

  useEffect(() => {
    if (!openedJobId) return;
    const exists = jobs.some((job) => job.id === openedJobId);
    if (!exists) {
      setOpenedJobId(null);
    }
  }, [jobs, openedJobId]);

  const handleEditLocation = (job) => {
    const nextLocation = window.prompt("Update event location:", job.location || "");
    if (nextLocation === null) return;
    const value = nextLocation.trim();
    if (!value) return;
    onUpdateJobFields(job.id, { location: value });
  };

  const handleEditWorkers = (job) => {
    const nextWorkers = window.prompt(
      "Update volunteer count:",
      String(job.workers || "")
    );
    if (nextWorkers === null) return;
    const value = nextWorkers.trim();
    if (!value) return;
    if (Number.isNaN(Number(value)) || Number(value) <= 0) {
      alert("Please enter a valid volunteer count.");
      return;
    }
    onUpdateJobFields(job.id, { workers: value });
  };

  const handleEditDate = (job) => {
    const nextDate = window.prompt(
      "Update event date (YYYY-MM-DD):",
      job.date || ""
    );
    if (nextDate === null) return;
    const value = nextDate.trim();
    if (!value) return;
    if (Number.isNaN(new Date(value).getTime())) {
      alert("Please enter a valid date in YYYY-MM-DD format.");
      return;
    }
    onUpdateJobFields(job.id, { date: value });
  };

  const handleDeleteJob = (job) => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete "${job.title}"? This will remove all related applications.`
    );
    if (!isConfirmed) return;
    onDeleteJob(job.id);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900">My Jobs</h1>

      {!openedJob ? (
        <div className="grid gap-6">
          {jobs.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm text-center text-gray-600">
              No active jobs posted.
            </div>
          ) : (
            jobs.map((job) => {
              const jobApps = applications.filter((application) => application.jobId === job.id);
              return (
                <article
                  key={job.id}
                  onClick={() => setOpenedJobId(job.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setOpenedJobId(job.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {(job.skills || []).map((skill) => (
                          <span
                            key={`${job.id}-${skill}`}
                            className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-bold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                      {job.status}
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-6 mt-6 text-sm text-gray-500 font-medium">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-indigo-500" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-indigo-500" />
                      <span>{job.date ? new Date(job.date).toLocaleDateString() : "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-indigo-500" />
                      <span>{jobApps.length} Applications</span>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      ) : (
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
          <button
            onClick={() => setOpenedJobId(null)}
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeft size={18} />
            Back to All Jobs
          </button>

          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl font-extrabold text-gray-900">{openedJob.title}</h2>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                {openedJob.status}
              </span>
            </div>

            <p className="text-sm text-gray-600">{openedJob.description || "No description provided."}</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <button
                onClick={() => handleEditLocation(openedJob)}
                className="bg-gray-50 border rounded-xl p-4 text-left hover:bg-gray-100 transition-colors"
              >
                <p className="text-xs font-bold text-gray-500">Location</p>
                <p className="font-bold text-gray-900 mt-1">{openedJob.location || "N/A"}</p>
                <p className="text-xs font-semibold text-indigo-600 mt-2">Click to edit</p>
              </button>
              <button
                onClick={() => handleEditDate(openedJob)}
                className="bg-gray-50 border rounded-xl p-4 text-left hover:bg-gray-100 transition-colors"
              >
                <p className="text-xs font-bold text-gray-500">Event Date</p>
                <p className="font-bold text-gray-900 mt-1">
                  {openedJob.date ? new Date(openedJob.date).toLocaleDateString() : "N/A"}
                </p>
                <p className="text-xs font-semibold text-indigo-600 mt-2">Click to edit</p>
              </button>
              <button
                onClick={() => handleEditWorkers(openedJob)}
                className="bg-gray-50 border rounded-xl p-4 text-left hover:bg-gray-100 transition-colors"
              >
                <p className="text-xs font-bold text-gray-500">Volunteers Needed</p>
                <p className="font-bold text-gray-900 mt-1">{openedJob.workers || "N/A"}</p>
                <p className="text-xs font-semibold text-indigo-600 mt-2">Click to edit</p>
              </button>
              <div className="bg-gray-50 border rounded-xl p-4">
                <p className="text-xs font-bold text-gray-500">Budget / Worker</p>
                <p className="font-bold text-gray-900 mt-1">Rs {openedJob.budget || "N/A"}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {(openedJob.skills || []).map((skill) => (
                <span
                  key={`${openedJob.id}-${skill}`}
                  className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-bold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex items-center justify-between gap-3 mb-4">
              <h3 className="text-xl font-extrabold text-gray-900">Applications</h3>
              <button
                onClick={() => onOpenApplicants(openedJob)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all text-sm"
              >
                View Full Applications
              </button>
            </div>
            <div className="space-y-3">
              {openedJobApplications.length === 0 ? (
                <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center text-gray-600">
                  No applications received yet.
                </div>
              ) : (
                openedJobApplications.map((application) => (
                  <article
                    key={application.id}
                    className="border border-gray-100 rounded-xl p-4 hover:shadow-sm transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h4 className="font-bold text-gray-900">{application.applicantName}</h4>
                        <p className="text-sm text-gray-500">{application.phone}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Skills: {application.skills || "N/A"}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Applied: {application.appliedDate || "N/A"}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-extrabold ${
                          application.status === "Accepted"
                            ? "bg-green-100 text-green-700"
                            : application.status === "Rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {application.status}
                      </span>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-xl font-extrabold text-gray-900 mb-4">Actions</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onMarkJobCompleted(openedJob.id)}
                className="px-6 py-2.5 rounded-xl font-bold bg-green-600 text-white hover:bg-green-700 transition-all"
              >
                Event Completed
              </button>
              <button
                onClick={() => handleDeleteJob(openedJob)}
                className="px-6 py-2.5 border border-red-200 text-red-600 rounded-xl font-bold hover:bg-red-50 transition-all flex items-center justify-center gap-2"
              >
                <Trash2 size={18} /> Delete Event
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default JobsTab;

