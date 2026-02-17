import React, { useState } from "react";
import { useEffect } from "react";  
const TransactionData = () => {

  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Future backend data will come here
  const transactions = [];

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/transactions")
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }, []);
  

  return (
    <div className=" py-12 px-4 md:px-8">
      <div className="max-w-10xl mx-auto bg-white rounded-2xl shadow-lg border border-orange-100 p-8">

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Transaction Data
        </h2>

        {/* Table */}
        <div className="overflow-x-auto">

          {transactions.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              No transactions available yet.
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-100 text-gray-700">
                  <th className="p-3">Product</th>
                  <th className="p-3">Total</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr key={t.id} className="border-b">
                    <td className="p-3">{t.product}</td>
                    <td className="p-3">৳ {t.total}</td>
                    <td className="p-3">
                      <button
                        onClick={() => setSelectedTransaction(t)}
                        className="px-4 py-2 rounded-lg
                                   bg-orange-500 hover:bg-orange-600
                                   text-white text-sm font-medium"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

        </div>

        {/* Modal (Future Ready) */}
        {selectedTransaction && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 border border-orange-100">

              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Transaction Details
              </h3>

              <div className="space-y-3 text-gray-700">
                <p><span className="font-semibold">Source:</span> --</p>
                <p><span className="font-semibold">User/Merchant:</span> --</p>
                <p><span className="font-semibold">Product/Items:</span> --</p>
                <p><span className="font-semibold">Price/Total:</span> --</p>
                <p><span className="font-semibold">Buy Date:</span> --</p>
                <p><span className="font-semibold">Sell Date:</span> --</p>
                <p><span className="font-semibold">Date Diff (Days):</span> --</p>
              </div>

              <button
                onClick={() => setSelectedTransaction(null)}
                className="mt-6 w-full py-3 rounded-xl
                           bg-orange-400 hover:bg-orange-500
                           text-white font-medium"
              >
                Close
              </button>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default TransactionData;
