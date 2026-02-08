import React from "react";
const EarningsTab = ({ earningCards }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Earnings and Payments</h1>

      <div className="grid sm:grid-cols-3 gap-6">
        {earningCards.map((item) => (
          <div
            key={item.label}
            className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white`}
              >
                <item.icon size={24} />
              </div>
              <h3 className="font-semibold text-gray-600">{item.label}</h3>
            </div>
            <p className="text-4xl font-bold text-gray-900">{item.val}</p>
            <p className="text-sm mt-2 text-gray-500">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningsTab;

