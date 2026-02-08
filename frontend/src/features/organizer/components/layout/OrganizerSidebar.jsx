import React from "react";
import {
  BarChart3,
  Briefcase,
  CheckCircle2,
  DollarSign,
  Plus,
  UserCheck,
  Users,
} from "lucide-react";
import { ORGANIZER_TABS } from "../../constants";

const iconMap = {
  BarChart3,
  Briefcase,
  CheckCircle2,
  Users,
  UserCheck,
  DollarSign,
};

const OrganizerSidebar = ({
  activeTab,
  setActiveTab,
  sidebarOpen,
  onCreateJob,
  onCloseSidebar,
}) => {
  return (
    <aside
      className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 fixed  min-h-screen lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r transition-transform duration-300 ease-in-out overlfow-hidden `}
    >
      <div className="p-6 space-y-6 pt-4">
        <button
          onClick={onCreateJob}
          className="w-full px-4 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
        >
          <Plus size={20} /> Create New Job
        </button>

        <nav className="space-y-1">
          {ORGANIZER_TABS.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  onCloseSidebar();
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === item.id
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon size={20} strokeWidth={activeTab === item.id ? 2.5 : 2} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default OrganizerSidebar;
