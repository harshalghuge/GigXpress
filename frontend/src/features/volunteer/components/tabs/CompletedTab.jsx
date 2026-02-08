import React from "react";
import { Download, Star } from "lucide-react";

const CompletedTab = ({ completedGigs }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Completed Gigs</h1>

      <div className="grid gap-6">
        {completedGigs.map((gig) => (
          <div
            key={gig.id}
            className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-green-500"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{gig.title}</h3>
                    <p className="text-gray-600">{gig.organizer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">{gig.earned}</p>
                    <p className="text-sm text-gray-500">Earned</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={`${gig.id}-${i}`}
                        size={18}
                        className={
                          i < Math.floor(gig.rating)
                            ? "text-yellow-500 fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{gig.rating}/5</span>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border">
                  <p className="text-sm text-gray-600 italic">"{gig.review}"</p>
                </div>

                <p className="text-sm text-gray-500 mt-3">
                  Completed on {new Date(gig.date).toLocaleDateString()}
                </p>
              </div>

              <div className="flex lg:flex-col gap-2">
                <button className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center gap-2">
                  <Download size={18} />
                  Certificate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedTab;

