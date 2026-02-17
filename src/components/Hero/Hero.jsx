import React from 'react';

const Hero = () => {
    return (
        <div className=' max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 gap-24 items-center bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden p-4 md:p-16'>
            <div className=' mx-52  max-w-7xl '>
                <h1 className=' text-4xl font-bold'>An Intelligent Voice-First <br /> Retail Solution</h1>
                <br />
                <p className=' text-gray-500'>Sellora is a smart, voice-enabled retail management platform built for modern retailers who want to move beyond traditional khata systems. <br />
                It simplifies daily operations by integrating inventory, sales, baki management, and demand prediction into one intelligent system. <br />
                With the power of Voice AI and real-time analytics, retailers can manage their business faster, smarter, and more efficiently.</p>
                <br />
                <div className=' flex'>
                <img className=' w-[40px]' src="/src/assets/aero.png" alt="" />
                <p className=' my-1.5'>Sell Using Voice Commands </p>
                </div>
                <div className=' flex'>
                <img className=' w-[40px]' src="/src/assets/aero.png" alt="" />
                <p className=' my-1.5'>Intelligent Baki Management </p>
                </div>
                <div className=' flex'>
                <img className=' w-[40px]' src="/src/assets/aero.png" alt="" />
                <p className=' my-1.5'>AI-Based Demand Prediction </p>
                </div>
                <div className=' flex'>
                <img className=' w-[40px]' src="/src/assets/aero.png" alt="" />
                <p className=' my-1.5'>Seamless Integration Ready</p>
                </div>


                
              
               
            </div>
            <div>
                <img className=' w-[450px] mx-auto' src="/src/assets/shop.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;