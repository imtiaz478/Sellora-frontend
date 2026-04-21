import React from 'react';
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-gradient-to-br from-orange-50 to-white py-12 px-4 sm:px-6 lg:px-12">
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div className="space-y-6 text-center md:text-left">

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-800">
                        Intelligent <br className="hidden sm:block" />
                        <span className="text-[#EF8411]">Retail Solution</span>
                    </h1>

                    <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
                        Manage your shop smarter using AI-powered insights,
                        real-time analytics, and voice-based automation.
                    </p>

                    <button
                        onClick={() => navigate("/dashboard")}
                        className="bg-[#EF8411] hover:bg-[#d6730e] 
                                   text-white px-6 sm:px-8 py-2 sm:py-3 
                                   rounded-full font-medium shadow-md 
                                   transition duration-300"
                    >
                        Get Started 🚀
                    </button>
                </div>

                {/* RIGHT VISUAL */}
                <div className="flex justify-center items-center relative">

                    {/* Background Circle */}
                    <div className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 
                                    border-2 border-orange-300 rounded-full opacity-30 animate-pulse">
                    </div>

                    {/* Main Circle */}
                    <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 
                                    bg-white shadow-xl rounded-full 
                                    flex items-center justify-center border">

                        <div className="grid grid-cols-2 gap-2 text-[#EF8411]">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 sm:border-4 border-[#EF8411] rounded-md"></div>
                            <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 sm:border-4 border-[#EF8411] rounded-md"></div>
                            <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 sm:border-4 border-[#EF8411] rounded-md"></div>
                            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xl sm:text-2xl font-bold">
                                +
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Banner;