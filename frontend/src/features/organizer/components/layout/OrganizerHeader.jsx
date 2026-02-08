import React from "react";
import { Bell, Briefcase, Menu } from "lucide-react";

const OrganizerHeader = ({ onToggleSidebar }) => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-40">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Briefcase className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                GigXpress
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l cursor-pointer hover:bg-gray-50 p-1 rounded-xl transition-colors">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Profile"
                className="w-9 h-9 rounded-full ring-2 ring-indigo-100"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-bold">Organizer Name</p>
                <p className="text-xs text-indigo-600 font-medium">Premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default OrganizerHeader;

