import React from "react";
import { completedGigs, earningCards, portfolioBadges, progressLevels, volunteerStats } from "./data";
import VolunteerHeader from "./components/layout/VolunteerHeader";
import VolunteerSidebar from "./components/layout/VolunteerSidebar";
import BrowseTab from "./components/tabs/BrowseTab";
import ApplicationsTab from "./components/tabs/ApplicationsTab";
import CompletedTab from "./components/tabs/CompletedTab";
import PortfolioTab from "./components/tabs/PortfolioTab";
import EarningsTab from "./components/tabs/EarningsTab";
import ScheduledTab from "./components/tabs/ScheduledTab";
import ApplyJobModal from "./components/modals/ApplyJobModal";
import { useVolunteerDashboard } from "./hooks/useVolunteerDashboard";

const VolunteerDashboard = () => {
  const {
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
  } = useVolunteerDashboard();

  return (
    <div className="min-h-screen bg-gray-50">
      <VolunteerHeader onToggleSidebar={() => setSidebarOpen((open) => !open)} />

      <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
        <VolunteerSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sidebarOpen={sidebarOpen}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {activeTab === "browse" && (
            <BrowseTab
              stats={volunteerStats}
              availableJobs={availableJobs}
              onApply={tabActions.openApplyModal}
            />
          )}
          {activeTab === "applications" && <ApplicationsTab applications={myApplications} />}
          {activeTab === "completed" && <CompletedTab completedGigs={completedGigs} />}
          {activeTab === "portfolio" && (
            <PortfolioTab badges={portfolioBadges} progressLevels={progressLevels} />
          )}
          {activeTab === "earnings" && <EarningsTab earningCards={earningCards} />}
          {activeTab === "scheduled" && (
            <ScheduledTab onExplore={tabActions.goToBrowse} />
          )}

          <ApplyJobModal
            key={applyOpen ? selectedJob?.id ?? "open" : "closed"}
            isOpen={applyOpen}
            onClose={closeApplyModal}
            selectedJob={selectedJob}
            onSubmit={submitApplication}
          />
        </main>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
