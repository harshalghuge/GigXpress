import React from "react";
import { Share2, Target, Upload } from "lucide-react";

const PortfolioTab = ({ badges, progressLevels }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Digital Portfolio</h1>
          <p className="text-gray-600 mt-1">Showcase your achievements and skills</p>
        </div>
        <button className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2">
          <Share2 size={20} />
          Share Portfolio
        </button>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative group">
            <img
              src="https://i.pravatar.cc/150?img=5"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white"
            />
            <button className="absolute bottom-0 right-0 p-2 bg-white text-indigo-600 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Upload size={16} />
            </button>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Priya Sharma</h2>
            <p className="text-white/90 mb-4">Event Management Specialist | Pune, Maharashtra</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <p className="text-2xl font-bold">18</p>
                <p className="text-xs text-white/80 uppercase">Completed Gigs</p>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <p className="text-2xl font-bold">4.8</p>
                <p className="text-xs text-white/80 uppercase">Average Rating</p>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <p className="text-2xl font-bold">Rs 25,400</p>
                <p className="text-xs text-white/80 uppercase">Total Earned</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Skill Badges</h3>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold">
            {badges.length} Badges Earned
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className={`group ${badge.color} rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 cursor-pointer border border-transparent hover:border-white/50`}
            >
              <div className="text-3xl mb-3 font-bold">{badge.icon}</div>
              <h4 className="font-bold text-lg mb-1">{badge.name}</h4>
              <p className="text-sm opacity-75">Earned: {new Date(badge.earned).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Progression</h3>
        <div className="space-y-4">
          {progressLevels.map((level, i) => (
            <div
              key={level.level}
              className={`flex items-center gap-4 p-3 rounded-xl transition-all ${
                level.current ? "bg-indigo-50 shadow-sm" : "hover:bg-gray-50"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                  level.current
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                    : "bg-gray-300"
                }`}
              >
                {i + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className={`font-bold ${level.current ? "text-indigo-600" : "text-gray-600"}`}>
                    {level.level}
                  </h4>
                  <span className="text-sm text-gray-500">{level.gigs} gigs</span>
                </div>
                {level.current && (
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                )}
              </div>
              {level.current && <Target className="text-indigo-600" size={24} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioTab;

