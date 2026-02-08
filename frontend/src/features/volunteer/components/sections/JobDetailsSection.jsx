import React from "react";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  MapPin,
  Star,
  Users,
} from "lucide-react";

const toSkillList = (skills) => {
  if (Array.isArray(skills)) return skills;
  if (typeof skills !== "string") return [];
  return skills
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);
};

const JobDetailsSection = ({
  title,
  subtitle,
  description,
  status,
  location,
  date,
  pay,
  workers,
  skills,
  rating,
  postedText,
  onBack,
  primaryAction,
  secondaryAction,
}) => {
  const skillList = toSkillList(skills);

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-8">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
      >
        <ArrowLeft size={18} />
        Back to list
      </button>

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            {title}
          </h1>
          <p className="text-base text-gray-600">{subtitle}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            {status && (
              <span className="px-3 py-1 rounded-full font-semibold bg-indigo-50 text-indigo-700">
                {status}
              </span>
            )}
            {postedText && <span className="text-gray-500">{postedText}</span>}
            {typeof rating === "number" && (
              <span className="inline-flex items-center gap-1 font-semibold text-gray-700">
                <Star size={15} className="text-yellow-500 fill-current" />
                {rating}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {primaryAction}
          {secondaryAction}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-bold tracking-wide text-gray-500 uppercase">
          Job Description
        </h2>
        <div className="rounded-xl border border-gray-200 bg-slate-50 p-5 sm:p-6">
          <p className="text-gray-700 leading-8 text-[15px]">
            {description || "No description provided by organizer."}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-bold tracking-wide text-gray-500 uppercase">
          Required Skills
        </h2>
        {skillList.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {skillList.map((skill) => (
              <span
                key={`${title}-${skill}`}
                className="px-3 py-1.5 rounded-full text-sm font-semibold bg-indigo-50 text-indigo-700"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-600">No specific skills mentioned.</p>
        )}
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-bold tracking-wide text-gray-500 uppercase">
          Details
        </h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="rounded-xl border border-gray-200 p-4 bg-white">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Location</p>
            <p className="font-semibold text-gray-900 inline-flex items-center gap-2">
              <MapPin size={16} className="text-indigo-600" />
              {location || "N/A"}
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-4 bg-white">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Date</p>
            <p className="font-semibold text-gray-900 inline-flex items-center gap-2">
              <Calendar size={16} className="text-indigo-600" />
              {date ? new Date(date).toLocaleDateString() : "N/A"}
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-4 bg-white">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Volunteers</p>
            <p className="font-semibold text-gray-900 inline-flex items-center gap-2">
              <Users size={16} className="text-indigo-600" />
              {workers || "N/A"}
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-4 bg-white">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Compensation</p>
            <p className="font-semibold text-gray-900 inline-flex items-center gap-2">
              <Briefcase size={16} className="text-indigo-600" />
              {pay || "Volunteer"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetailsSection;
