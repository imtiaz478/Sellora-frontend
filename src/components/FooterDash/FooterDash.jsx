import React from "react";

const Footer = () => {
  return (
    <footer className=" border-orange-100 mt-16">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-96">

          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Sellora
            </h2>
            <p className="text-gray-500 mt-3 text-sm">
              Smart business insights powered by AI.  
              Simplify your sales, track trends, and grow faster.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-orange-500 cursor-pointer transition">
                Dashboard
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Transactions
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Analytics
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Market Trends
              </li>
            </ul>
          </div>

          {/* Contact / Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Contact
            </h3>
            <p className="text-gray-500 text-sm">
              support@sellora.ai
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Dhaka, Bangladesh
            </p>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-orange-100 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Sellora. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
