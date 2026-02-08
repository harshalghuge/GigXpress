import { useMemo, useState } from "react";
import { VOLUNTEER_STORAGE_KEYS } from "../constants";

const loadFromStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
};

export const useVolunteerDashboard = () => {
  const [activeTab, setActiveTab] = useState("browse");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [availableJobs] = useState(() =>
    loadFromStorage(VOLUNTEER_STORAGE_KEYS.jobs)
  );
  const [myApplications, setMyApplications] = useState(() =>
    loadFromStorage(VOLUNTEER_STORAGE_KEYS.applications)
  );

  const [applyOpen, setApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const openApplyModal = (job) => {
    setSelectedJob(job);
    setApplyOpen(true);
  };

  const closeApplyModal = () => {
    setApplyOpen(false);
    setSelectedJob(null);
  };

  const submitApplication = (formData) => {
    if (!selectedJob) return { ok: false, message: "No job selected." };

    const apps = loadFromStorage(VOLUNTEER_STORAGE_KEYS.applications);
    const alreadyApplied = apps.some(
      (application) =>
        application.jobId === selectedJob.id &&
        application.phone === formData.phone
    );

    if (alreadyApplied) {
      return {
        ok: false,
        message: "You already applied for this job with this phone number.",
      };
    }

    const newApplication = {
      id: `app-${Date.now()}`,
      jobId: selectedJob.id,
      jobTitle: selectedJob.title,
      title: selectedJob.title,
      organizer: selectedJob.organizer || "Organizer",
      applicantName: formData.name,
      phone: formData.phone,
      skills: formData.skills,
      committed: formData.committed,
      status: "Pending",
      appliedDate: new Date().toLocaleDateString(),
      date: selectedJob.date,
      location: selectedJob.location,
      description: selectedJob.description,
      workers: selectedJob.workers,
      pay: selectedJob.budget || selectedJob.pay || "Volunteer",
    };

    const updated = [newApplication, ...apps];
    localStorage.setItem(
      VOLUNTEER_STORAGE_KEYS.applications,
      JSON.stringify(updated)
    );
    setMyApplications(updated);
    closeApplyModal();

    return { ok: true, message: "Applied successfully." };
  };

  const tabActions = useMemo(
    () => ({
      openApplyModal,
      goToBrowse: () => setActiveTab("browse"),
    }),
    []
  );

  return {
    activeTab,
    setActiveTab,
    sidebarOpen,
    setSidebarOpen,
    availableJobs,
    myApplications,
    applyOpen,
    selectedJob,
    closeApplyModal,
    submitApplication,
    tabActions,
  };
};
