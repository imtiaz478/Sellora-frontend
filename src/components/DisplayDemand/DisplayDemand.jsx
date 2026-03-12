import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const DisplayDemand = ({ trends }) => {
  if (!trends || trends.length === 0) return null;

  return (
    <div className="max-w-10xl mx-auto mt-16 px-4">

      <div className="bg-white shadow-md rounded-xl border border-orange-100 p-6">

        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Predicted Products for Next Month
        </h3>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Table */}
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-sm">

              <thead className="bg-orange-500 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Product</th>
                  <th className="px-4 py-2 text-right">Quantity</th>
                </tr>
              </thead>

              <tbody>
                {trends.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-none hover:bg-orange-50 transition"
                  >
                    <td className="px-4 py-2 font-medium text-gray-700">
                      {item.product}
                    </td>

                    <td className="px-4 py-2 text-right">
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-md text-xs font-semibold">
                        {item.predicted_demand}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Graph */}
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trends}>
                <XAxis dataKey="product" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="predicted_demand" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>

    </div>
  );
};

export default DisplayDemand;