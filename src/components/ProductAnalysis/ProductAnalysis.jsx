import React from "react";

const ProductAnalysis = () => {
  return (
    <div className="bg-orange-50 rounded-2xl  py-12 px-4 md:px-8">
      
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Product Analysis
          </h2>
          <p className="text-gray-500 mt-2">
            Revenue and quantity insights
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Total Value Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
            <h3 className="text-lg font-semibold text-gray-700 mb-6">
              TOTAL VALUE BY ITEM
            </h3>

            {/* Dummy Donut Placeholder */}
            <div className="h-80 flex items-center justify-center">
              <div className="w-60 h-60 rounded-full 
                              bg-gradient-to-tr 
                              from-orange-400 to-orange-500 
                              flex items-center justify-center">
                <div className="w-40 h-40 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Total Quantity Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
            <h3 className="text-lg font-semibold text-gray-700 mb-6">
              TOTAL QUANTITY BY ITEM
            </h3>

            <div className="h-80 flex items-center justify-center text-orange-400 font-medium">
              No Data
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductAnalysis;
