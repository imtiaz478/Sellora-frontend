import React from "react";

const MarketTrends = () => {
  return (
    <div className="bg-orange-50 rounded-2xl py-12 px-4 md:px-8">
      
      <div className="max-w-5xl my-36 mx-auto bg-white 
                      rounded-2xl p-8 md:p-12 
                      shadow-lg border border-orange-100">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Market Trends
          </h2>
          <p className="text-gray-500 mt-2">
            Top trending products in Bangladesh
          </p>
        </div>

        {/* Message */}
        <div className="text-center my-12">
          <p className="text-gray-600 text-lg">
            Click the button below to fetch the latest market trends
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button
            className="px-10 py-4 rounded-xl
                       bg-gradient-to-r from-orange-400 to-orange-500
                       hover:from-orange-500 hover:to-orange-600
                       text-white font-semibold text-lg
                       shadow-md transition-all duration-300
                       hover:shadow-lg"
          >
            Fetch Market Trends
          </button>
        </div>

      </div>

    </div>
  );
};

export default MarketTrends;
