import React from "react";
import {
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  Eye,
  Filter,
  Heart,
  MapPin,
  Search,
  Share2,
  Star,
  Zap,
} from "lucide-react";

const BrowseTab = ({ stats, availableJobs, onApply }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Browse Available Gigs</h1>
        <p className="text-gray-600 mt-1">Find opportunities that match your skills</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center text-white shadow-lg`}
              >
                <stat.icon size={24} />
              </div>
              <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 group">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by title, location, or skills..."
            className="pl-10 pr-4 py-3 border rounded-lg w-full focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
          />
        </div>
        <button className="px-6 py-3 border rounded-lg hover:bg-white hover:text-indigo-600 hover:border-indigo-600 flex items-center gap-2 transition-all duration-200 shadow-sm">
          <Filter size={20} />
          Filters
        </button>
      </div>

      <div className="grid gap-6">
        {availableJobs.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-10 text-center text-gray-600">
            No jobs posted yet. Ask organizer to post jobs.
          </div>
        ) : (
          availableJobs.map((job) => (
            <div
              key={job.id}
              className="group bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition-all duration-300 border-l-4 border-transparent hover:border-indigo-500"
            >
              {job.urgent && (
                <div className="mb-4">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold flex items-center gap-1 w-fit">
                    <Zap size={14} />
                    Urgent Hiring
                  </span>
                </div>
              )}

              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="font-medium">{job.organizer}</span>
                        {job.verified && (
                          <CheckCircle size={16} className="text-green-600" title="Verified" />
                        )}
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-yellow-500 fill-current" />
                          <span className="font-semibold">{job.organizerRating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-indigo-600">{job.budget || job.pay || "Volunteer"}</p>
                      <p className="text-sm text-gray-500">per worker</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {(job.skills || []).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-indigo-600" />
                      <div>
                        <p className="font-medium">{job.location}</p>
                        <p className="text-xs text-gray-500">{job.distance || "Nearby"}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-indigo-600" />
                      <div>
                        <p className="font-medium">
                          {job.date ? new Date(job.date).toLocaleDateString() : "N/A"}
                        </p>
                        <p className="text-xs text-gray-500">{job.duration || "Flexible"}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-indigo-600" />
                      <p className="font-medium">{job.workers || "Workers needed"}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-indigo-600" />
                      <p className="font-medium">Posted recently</p>
                    </div>
                  </div>
                </div>

                <div className="flex lg:flex-col gap-2">
                  <button
                    onClick={() => onApply(job)}
                    className="flex-1 lg:flex-initial px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:brightness-110"
                  >
                    Apply Now
                  </button>

                  <button className="px-4 py-3 border rounded-lg hover:bg-indigo-50 hover:text-indigo-600" title="Preview">
                    <Eye size={20} />
                  </button>
                  <button className="px-4 py-3 border rounded-lg hover:bg-pink-50 hover:text-pink-600" title="Save">
                    <Heart size={20} />
                  </button>
                  <button className="px-4 py-3 border rounded-lg hover:bg-blue-50 hover:text-blue-600" title="Share">
                    <Share2 size={20} />
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

export default BrowseTab;

