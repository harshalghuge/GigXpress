import React from "react";
const HiredTab = ({ workers }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900">Hired Workers</h1>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="p-4 font-bold text-gray-600">Worker</th>
              <th className="p-4 font-bold text-gray-600">Role</th>
              <th className="p-4 font-bold text-gray-600">Status</th>
              <th className="p-4 font-bold text-gray-600">Earnings</th>
              <th className="p-4 font-bold text-gray-600 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((worker) => (
              <tr key={worker.id} className="border-b border-gray-50 hover:bg-indigo-50/30 transition-colors">
                <td className="p-4 font-semibold">{worker.name}</td>
                <td className="p-4 text-sm text-gray-500">{worker.role}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-lg text-[10px] font-bold ${
                      worker.status === "On-Site"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {worker.status}
                  </span>
                </td>
                <td className="p-4 font-bold text-gray-900">{worker.earnings}</td>
                <td className="p-4 text-right">
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-all">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HiredTab;

