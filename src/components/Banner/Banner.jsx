import React from 'react';
import { LayoutGrid, Plus } from 'lucide-react';
import { useNavigate } from "react-router-dom";
const Banner = () => {
    const navigate = useNavigate();
    return (
        <div  >
            <div className="w-full min-h-[400px] bg-slate-50 flex items-center justify-center">
      <div className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 gap-2 items-center bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden p-8 md:p-16">
        
        {/* Left Side: Content */}
        <div className="space-y-6 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            An Intelligent <span className="text-[#EF8411]">Voice-First</span> <br />
            Retail Solution
          </h1>
          
          <p className="text-lg text-slate-600 max-w-md leading-relaxed">
            With the power of Voice AI and real-time analytics, retailers can 
            manage their business faster, smarter, and more efficiently.
          </p>
          
          <button  onClick={() => navigate("/dashboard")} className="bg-[#EF8411] hover:bg-[#d6730e] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-orange-200">
            Get Started
          </button>
        </div>

        {/* Right Side: Visual Element */}
        <div className="relative flex justify-center items-center">
          {/* Decorative Circle */}
          <div className="absolute w-64 h-64 md:w-80 md:h-80 border-2 border-[#EF8411] rounded-full opacity-20 animate-pulse"></div>
          
          {/* Icon Box */}
          <div className="relative bg-white p-10 rounded-2xl shadow-2xl border border-slate-50">
            <div className="relative flex items-center justify-center">
               {/* Custom Grid Plus Icon using Lucide */}
               <div className="grid grid-cols-2 gap-2 text-[#EF8411]">
                  <div className="w-8 h-8 border-4 border-[#EF8411] rounded-md"></div>
                  <div className="w-8 h-8 border-4 border-[#EF8411] rounded-md"></div>
                  <div className="w-8 h-8 border-4 border-[#EF8411] rounded-md"></div>
                  <div className="w-8 h-8 flex items-center justify-center font-bold text-4xl">
                    <Plus size={32} strokeWidth={4} />
                  </div>
               </div>
            </div>
          </div>
          
          {/* Floating Dots for extra design flair */}
          <div className="absolute top-0 right-10 w-4 h-4 bg-[#EF8411] rounded-full blur-[2px]"></div>
          <div className="absolute bottom-10 left-10 w-3 h-3 bg-orange-300 rounded-full blur-[1px]"></div>
        </div>

      </div>
    </div>
        </div>
    );
};

export default Banner;