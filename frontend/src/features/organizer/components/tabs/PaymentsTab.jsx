import React from "react";
const PaymentsTab = ({ transactions }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900">Payments</h1>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="p-4 font-bold text-gray-600">Transaction</th>
              <th className="p-4 font-bold text-gray-600">User</th>
              <th className="p-4 font-bold text-gray-600">Amount</th>
              <th className="p-4 font-bold text-gray-600">Status</th>
              <th className="p-4 font-bold text-gray-600">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className="border-b border-gray-50 hover:bg-indigo-50/30 transition-colors">
                <td className="p-4 font-bold">{txn.id}</td>
                <td className="p-4">{txn.user}</td>
                <td className="p-4 font-bold">{txn.amount}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-lg text-[10px] font-bold ${
                      txn.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {txn.status}
                  </span>
                </td>
                <td className="p-4 text-sm text-gray-500">{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsTab;

