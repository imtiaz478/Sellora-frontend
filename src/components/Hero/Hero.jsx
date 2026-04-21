import React from 'react';

const Hero = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-12">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* TEXT SIDE */}
                <div className="text-center md:text-left space-y-5">

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Smart <span className="text-[#EF8411]">Retail System</span>
                    </h1>

                    <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
                        Manage inventory, sales, and demand prediction easily with a modern AI-powered system.
                    </p>

                    {/* FEATURES LIST */}
                    <ul className="space-y-3 text-gray-700 text-sm sm:text-base">

                        <li className="flex items-center justify-center md:justify-start gap-2">
                            <span className="text-[#EF8411] text-lg">✔</span>
                            Voice-Based Sales Entry
                        </li>

                        <li className="flex items-center justify-center md:justify-start gap-2">
                            <span className="text-[#EF8411] text-lg">✔</span>
                            Smart Inventory Tracking
                        </li>

                        <li className="flex items-center justify-center md:justify-start gap-2">
                            <span className="text-[#EF8411] text-lg">✔</span>
                            AI Demand Prediction
                        </li>

                    </ul>

                </div>

                {/* IMAGE SIDE */}
                <div className="flex justify-center">

                    <img
                        className="w-52 sm:w-64 md:w-80 lg:w-96 object-contain"
                        src="/src/assets/shop.png"
                        alt="Retail Illustration"
                    />

                </div>

            </div>

        </section>
    );
};

export default Hero;