import React from 'react';
import inventory from "../../assets/inventory.png";
import voice from "../../assets/voice.png";
import credit from "../../assets/credit.png";
import demand from "../../assets/demand.png";

const CoreFeatures = () => {

    const features = [
        {
            id: 1,
            img: inventory,
            title: "Manage Inventory",
            desc: "Complete inventory management with low stock alerts."
        },
        {
            id: 2,
            img: voice,
            title: "Voice-based Sales",
            desc: "Add sales using voice commands instantly."
        },
        {
            id: 3,
            img: credit,
            title: "Credit Management",
            desc: "Track dues and manage payments easily."
        },
        {
            id: 4,
            img: demand,
            title: "Demand Prediction",
            desc: "Predict future sales using AI insights."
        }
    ];

    return (
        <section className="bg-gradient-to-b from-orange-50 to-white py-14 px-4 sm:px-6 lg:px-12">

            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                    Core Features
                </h2>
                <p className="text-gray-500 mt-3 text-sm sm:text-base">
                    Powerful tools to manage your business smarter
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid 
                            grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                            gap-6">

                {features.map((feature) => (
                    <div
                        key={feature.id}
                        className="bg-white rounded-2xl p-6 shadow-md 
                                   border border-orange-100
                                   hover:shadow-xl hover:-translate-y-2
                                   transition duration-300 group"
                    >

                        {/* Icon */}
                        <div className="flex justify-center mb-4">
                            <img
                                src={feature.img}
                                alt={feature.title}
                                className="w-12 h-12 sm:w-14 sm:h-14 
                                           group-hover:scale-110 
                                           transition duration-300"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
                            {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-500 text-sm text-center leading-relaxed">
                            {feature.desc}
                        </p>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default CoreFeatures;