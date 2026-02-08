import React from "react";
import { Bell, Briefcase, Menu } from "lucide-react";

const VolunteerHeader = ({ onToggleSidebar }) => {
  return (
    <nav className="bg-white border-b sticky top-0 z-40 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                GigXpress
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-all hover:scale-110">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l hover:bg-gray-50 p-1 rounded-lg cursor-pointer transition-colors">
              <img
                src="https://i.pravatar.cc/150?img=5"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-transparent hover:border-indigo-500 transition-all"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-semibold">Priya Sharma</p>
                <p className="text-xs text-gray-500">Volunteer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default VolunteerHeader;

