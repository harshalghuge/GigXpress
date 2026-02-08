import { useEffect, useMemo, useState } from "react";
import { Briefcase, DollarSign, UserCheck, Users } from "lucide-react";
import { demoJobs } from "../data";
import { ORGANIZER_STORAGE_KEYS } from "../constants";

const loadFromStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
};

export const useOrganizerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showCreateJobModal, setShowCreateJobModal] = useState(false);

  const [activeJobs, setActiveJobs] = useState(() => {
    const savedJobs = loadFromStorage(ORGANIZER_STORAGE_KEYS.jobs);
    return [...demoJobs, ...savedJobs];
  });
  const [applications, setApplications] = useState(() =>
    loadFromStorage(ORGANIZER_STORAGE_KEYS.applications)
  );

  const [jobModalOpen, setJobModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const realJobs = activeJobs.filter((job) => !String(job.id).startsWith("demo-"));
    localStorage.setItem(ORGANIZER_STORAGE_KEYS.jobs, JSON.stringify(realJobs));
  }, [activeJobs]);

  useEffect(() => {
    const handler = () => {
      setApplications(loadFromStorage(ORGANIZER_STORAGE_KEYS.applications));
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const handleCreateJob = (newJob) => {
    setActiveJobs((prev) => [
      {
        ...newJob,
        id: Date.now(),
        applied: 0,
        status: "Active",
      },
      ...prev,
    ]);
  };

  const updateApplicationStatus = (appId, status) => {
    const stored = loadFromStorage(ORGANIZER_STORAGE_KEYS.applications);
    const updated = stored.map((application) =>
      application.id === appId ? { ...application, status } : application
    );

    localStorage.setItem(
      ORGANIZER_STORAGE_KEYS.applications,
      JSON.stringify(updated)
    );
    setApplications(updated);
  };

  const openJobApplicantsModal = (job) => {
    setSelectedJob(job);
    setJobModalOpen(true);
  };

  const closeJobApplicantsModal = () => {
    setSelectedJob(null);
    setJobModalOpen(false);
  };

  const updateJobFields = (jobId, updates) => {
    setActiveJobs((prev) =>
      prev.map((job) => (job.id === jobId ? { ...job, ...updates } : job))
    );

    if (selectedJob?.id === jobId) {
      setSelectedJob((prev) => (prev ? { ...prev, ...updates } : prev));
    }
  };

  const markJobCompleted = (jobId) => {
    updateJobFields(jobId, { status: "Completed" });
  };

  const deleteJob = (jobId) => {
    setActiveJobs((prev) => prev.filter((job) => job.id !== jobId));
    setApplications((prev) => prev.filter((application) => application.jobId !== jobId));

    const stored = loadFromStorage(ORGANIZER_STORAGE_KEYS.applications);
    const updated = stored.filter((application) => application.jobId !== jobId);
    localStorage.setItem(
      ORGANIZER_STORAGE_KEYS.applications,
      JSON.stringify(updated)
    );

    if (selectedJob?.id === jobId) {
      closeJobApplicantsModal();
    }
  };

  const selectedJobApplications = useMemo(() => {
    if (!selectedJob) return [];
    return applications.filter((application) => application.jobId === selectedJob.id);
  }, [applications, selectedJob]);

  const totalApplications = applications.length;
  const hiredCount = applications.filter(
    (application) => application.status === "Accepted"
  ).length;

  const stats = useMemo(
    () => [
      {
        label: "Active Jobs",
        value: String(activeJobs.filter((job) => job.status === "Active").length),
        icon: Briefcase,
        color: "from-blue-500 to-blue-600",
        change: "+3",
      },
      {
        label: "Total Applications",
        value: String(totalApplications),
        icon: Users,
        color: "from-purple-500 to-purple-600",
        change: "+12",
      },
      {
        label: "Hired Workers",
        value: String(hiredCount),
        icon: UserCheck,
        color: "from-green-500 to-green-600",
        change: "+8",
      },
      {
        label: "Escrow Balance",
        value: "Rs 45,000",
        icon: DollarSign,
        color: "from-indigo-500 to-indigo-600",
        change: "-Rs 15k",
      },
    ],
    [activeJobs, hiredCount, totalApplications]
  );

  return {
    activeTab,
    setActiveTab,
    sidebarOpen,
    setSidebarOpen,
    showCreateJobModal,
    setShowCreateJobModal,
    activeJobs,
    applications,
    stats,
    jobModalOpen,
    selectedJob,
    selectedJobApplications,
    handleCreateJob,
    updateApplicationStatus,
    openJobApplicantsModal,
    closeJobApplicantsModal,
    updateJobFields,
    markJobCompleted,
    deleteJob,
  };
};
