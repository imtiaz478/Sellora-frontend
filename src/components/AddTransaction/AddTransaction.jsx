import React, { useState } from "react";

const AddTransaction = () => {
  const [formData, setFormData] = useState({
    source: "",
    user_or_merchant: "",
    product: "",
    total_price: "",
    buy_date: "",
    sell_date: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const response = await fetch("https://sellora-backend-aafy.onrender.com/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (response.ok) {
      alert("Transaction added ✅");
      window.location.reload();
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 max-w-7xl ">

      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Add Transaction
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Source */}
        <div>
          <label className="block text-gray-600 mb-1">Source</label>
          <input
            name="source"
            placeholder="e.g. Facebook, Shop"
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* User */}
        <div>
          <label className="block text-gray-600 mb-1">User / Merchant</label>
          <input
            name="user_or_merchant"
            placeholder="e.g. Rahim Store"
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Product */}
        <div>
          <label className="block text-gray-600 mb-1">Product</label>
          <input
            name="product"
            placeholder="e.g. iPhone 13"
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-600 mb-1">Total Price (৳)</label>
          <input
            name="total_price"
            type="number"
            placeholder="Enter price"
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Dates Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Buy Date */}
          <div>
            <label className="block text-gray-600 mb-1">Buy Date</label>
            <input
              name="buy_date"
              type="date"
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
          </div>

          {/* Sell Date */}
          <div>
            <label className="block text-gray-600 mb-1">Sell Date</label>
            <input
              name="sell_date"
              type="date"
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
          </div>

        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium"
        >
          Add Transaction
        </button>

      </form>
    </div>
  );
};

export default AddTransaction;