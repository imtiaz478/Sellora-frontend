import React from "react";

const NavBarForDash = () => {
  return (
    <div className="w-full my-2 bg-white shadow-sm border-b border-orange-100">
      <div className="relative flex items-center justify-between px-4 md:px-8 h-16">

        {/* Left - Logo */}
        <div>
          <img
            className="w-24 md:w-28"
            src="/src/assets/logo.png"
            alt="Sellora Logo"
          />
        </div>

        {/* Center - Truly Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-2xl text-center md:text-3xl font-bold">
            Sellora
          </h1>
          <p className=" text-center my-1.5">Business Intelligence Dashboard</p>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search */}
          <button className="btn btn-ghost btn-circle hover:bg-orange-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-7 md:w-7 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Notification */}
          <button className="btn btn-ghost btn-circle hover:bg-orange-50">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-7 md:w-7 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs bg-[#EF8411] indicator-item"></span>
            </div>
          </button>
        </div>

      </div>
    </div>
  );
};

export default NavBarForDash;
