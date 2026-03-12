import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";

const COLORS = ["#EF8411", "#F97316", "#FDBA74", "#FB923C"];

const ProductAnalysis = () => {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:5000/api/transactions", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(transactions => {

        const productTotals = {};

        transactions.forEach(t => {
          if (!productTotals[t.product]) {
            productTotals[t.product] = 0;
          }
          productTotals[t.product] += t.total_price;
        });

        const chartData = Object.keys(productTotals).map(product => ({
          name: product,
          value: productTotals[product]
        }));

        setData(chartData);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:5000/api/product-stats", {
      headers:{
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => res.json())
    .then(stats => {
      setStats(stats);
    });

  }, []); // important

  return (
    <div className="bg-orange-50 rounded-2xl py-12 px-4 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Product Analysis
          </h2>
          <p className="text-gray-500 mt-2">
            Revenue insights by product
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* TOTAL VALUE PIE CHART */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
            <h3 className="text-lg font-semibold text-gray-700 mb-6">
              TOTAL VALUE BY ITEM
            </h3>

            {data.length === 0 ? (
              <div className="h-80 flex items-center justify-center text-gray-400">
                No Data
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={120}
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* TOTAL QUANTITY BAR CHART */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
            <h3 className="text-lg font-semibold text-gray-700 mb-6">
              TOTAL QUANTITY BY ITEM
            </h3>

            {stats.length === 0 ? (
              <div className="h-80 flex items-center justify-center text-gray-400">
                No Data
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stats}>
                  <XAxis dataKey="product" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales_count" fill="#EF8411" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductAnalysis;