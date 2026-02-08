import React from "react";
import OrganizerHeader from "./components/layout/OrganizerHeader";
import OrganizerSidebar from "./components/layout/OrganizerSidebar";
import OverviewTab from "./components/tabs/OverviewTab";
import JobsTab from "./components/tabs/JobsTab";
import CompletedEventsTab from "./components/tabs/CompletedEventsTab";
import OrganizerApplicationsTab from "./components/tabs/OrganizerApplicationsTab";
import HiredTab from "./components/tabs/HiredTab";
import PaymentsTab from "./components/tabs/PaymentsTab";
import CreateJobModal from "./components/modals/CreateJobModal";
import JobApplicantsModal from "./components/modals/JobApplicantsModal";
import { hiredWorkers, transactions } from "./data";
import { useOrganizerDashboard } from "./hooks/useOrganizerDashboard";

const OrganizerDashboard = () => {
  const {
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
  } = useOrganizerDashboard();

  const postedJobs = activeJobs.filter((job) => job.status !== "Completed");
  const completedJobs = activeJobs.filter((job) => job.status === "Completed");

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-900">
      <OrganizerHeader onToggleSidebar={() => setSidebarOpen((open) => !open)} />

      <div className="flex h-screen overflow-hidden">
        <OrganizerSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sidebarOpen={sidebarOpen}
          onCreateJob={() => setShowCreateJobModal(true)}
          onCloseSidebar={() => setSidebarOpen(false)}
        />

        <main className="flex-1  overflow-y-auto">
          <div className=" p-4 sm:p-6 lg:p-8">
          {activeTab === "overview" && (
            <OverviewTab
              stats={stats}
              jobs={activeJobs}
              applications={applications}
              onOpenApplicants={openJobApplicantsModal}
              onGoToTab={setActiveTab}
            />
           
          )}
          {activeTab === "jobs" && (
            <JobsTab
              jobs={postedJobs}
              applications={applications}
              onOpenApplicants={openJobApplicantsModal}
              onUpdateJobFields={updateJobFields}
              onMarkJobCompleted={markJobCompleted}
              onDeleteJob={deleteJob}
            />
          )}
          {activeTab === "completed" && (
            <CompletedEventsTab jobs={completedJobs} applications={applications} />
          )}
          {activeTab === "applications" && (
            <OrganizerApplicationsTab
              applications={applications}
              onUpdateStatus={updateApplicationStatus}
            />
          )}
          {activeTab === "hired" && <HiredTab workers={hiredWorkers} />}
          {activeTab === "payments" && <PaymentsTab transactions={transactions} />}

          <CreateJobModal
            key={showCreateJobModal ? "open" : "closed"}
            isOpen={showCreateJobModal}
            onClose={() => setShowCreateJobModal(false)}
            onSubmit={handleCreateJob}
          />

          <JobApplicantsModal
            isOpen={jobModalOpen}
            onClose={closeJobApplicantsModal}
            job={selectedJob}
            jobApplications={selectedJobApplications}
            onUpdateStatus={updateApplicationStatus}
          />
           </div>
        </main>
      </div>
    </div>
  );
};

export default OrganizerDashboard;

