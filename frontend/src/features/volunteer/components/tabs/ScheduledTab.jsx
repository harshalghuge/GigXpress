import React from "react";
import { Calendar } from "lucide-react";

const ScheduledTab = ({ onExplore }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Upcoming Schedule</h1>
      <div className="bg-white rounded-xl shadow-lg p-12 text-center border-2 border-dashed border-gray-200 hover:border-indigo-300 transition-all">
        <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calendar className="text-indigo-600" size={40} />
        </div>
        <h3 className="text-xl font-bold text-gray-900">No gigs scheduled for today</h3>
        <p className="text-gray-500 mt-2">
          Browse the marketplace to find and apply for upcoming opportunities.
        </p>
        <button
          onClick={onExplore}
          className="mt-6 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold"
        >
          Explore Gigs
        </button>
      </div>
    </div>
  );
};

export default ScheduledTab;

