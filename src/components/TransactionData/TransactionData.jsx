import React, { useState, useEffect } from "react";

const TransactionData = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // 🔥 Fetch Transactions
  const fetchTransactions = () => {
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:5000/api/transactions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unauthorized");
        }
        return res.json();
      })
      .then((data) => {
        setTransactions(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // 🔥 Delete Transaction
  const handleDelete = (id) => {
    const token = localStorage.getItem("token");

    fetch(`http://127.0.0.1:5000/api/transactions/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        fetchTransactions(); // refresh after delete
      });
  };

  return (
    <div className="py-12 px-4 md:px-8">
      <div className="max-w-10xl mx-auto bg-white rounded-2xl shadow-lg border border-orange-100 p-8">

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Transaction Data
        </h2>

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
                  <th className="p-3">Hold (Days)</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr key={t.id} className="border-b">
                    <td className="p-3">{t.product}</td>
                    <td className="p-3">৳ {t.total_price}</td>
                    <td className="p-3">{t.date_diff_days || 0}</td>
                    <td className="p-3 flex gap-2">
                      
                      <button
                        onClick={() => setSelectedTransaction(t)}
                        className="px-4 py-2 rounded-lg
                                   bg-orange-500 hover:bg-orange-600
                                   text-white text-sm font-medium"
                      >
                        View
                      </button>

                      <button
                        onClick={() => handleDelete(t.id)}
                        className="px-4 py-2 rounded-lg
                                   bg-red-500 hover:bg-red-600
                                   text-white text-sm font-medium"
                      >
                        Delete
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

        </div>

        {/* 🔥 Modal */}
        {selectedTransaction && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 border border-orange-100">

              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Transaction Details
              </h3>

              <div className="space-y-3 text-gray-700">
                <p><span className="font-semibold">Source:</span> {selectedTransaction.source}</p>
                <p><span className="font-semibold">User/Merchant:</span> {selectedTransaction.user_or_merchant}</p>
                <p><span className="font-semibold">Product:</span> {selectedTransaction.product}</p>
                <p><span className="font-semibold">Total:</span> ৳ {selectedTransaction.total_price}</p>
                <p><span className="font-semibold">Buy Date:</span> {selectedTransaction.buy_date}</p>
                <p><span className="font-semibold">Sell Date:</span> {selectedTransaction.sell_date || "N/A"}</p>
                <p><span className="font-semibold">Hold (Days):</span> {selectedTransaction.date_diff_days || 0}</p>
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
