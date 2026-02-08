import React from "react";
import {
  Award,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Search,
  Trophy,
} from "lucide-react";
import { VOLUNTEER_TABS } from "../../constants";

const iconMap = {
  Search,
  Clock,
  Calendar,
  CheckCircle,
  Award,
  DollarSign,
};

const VolunteerSidebar = ({ activeTab, setActiveTab, sidebarOpen }) => {
  return (
    
    <aside
      className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r transition-transform duration-300 ease-in-out shadow-xl lg:shadow-none overflow-hidden`}
    >
      
      <div className="p-6  space-y-6 pt-4">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-4 text-white shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Trophy size={20} className="animate-pulse" />
            <span className="font-semibold">Regular Worker</span>
          </div>
          <div className="text-sm mb-3">12 more gigs to reach Professional level!</div>
          <div className="w-full bg-white/30 rounded-full h-2">
            <div className="bg-white h-2 rounded-full" style={{ width: "60%" }}></div>
          </div>
        </div>

        <nav className="space-y-2">
          {VOLUNTEER_TABS.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 group ${
                  activeTab === item.id
                    ? "bg-indigo-50 text-indigo-600 shadow-sm"
                    : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
              >
                <Icon
                  size={20}
                  className={`transition-transform duration-200 ${
                    activeTab === item.id ? "scale-110" : "group-hover:scale-110"
                  }`}
                />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default VolunteerSidebar;

