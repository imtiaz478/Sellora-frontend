import React from 'react';
import mobile from "../../assets/mobile.png";
import grocery from "../../assets/grocery.png";
import fashion from "../../assets/fashion.png"; 
import book from "../../assets/book2.png";
import many from "../../assets/many2.png";

const WorksBestWith = () => {

    const items = [
        { id: 1, icon: mobile, label: "Mobile Shop" },
        { id: 2, icon: grocery, label: "Grocery Store" },
        { id: 3, icon: fashion, label: "Fashion Store" },
        { id: 4, icon: book, label: "Book Store" },
        { id: 5, icon: many, label: "& Many More" },
    ];

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-12 bg-white">

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
                Works Best With
            </h2>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid 
                            grid-cols-2 sm:grid-cols-3 md:grid-cols-5 
                            gap-6">

                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center justify-center 
                                   bg-orange-50 rounded-xl p-4 sm:p-6
                                   shadow-sm hover:shadow-md
                                   transition duration-300
                                   hover:scale-105 cursor-pointer"
                    >

                        <img
                            src={item.icon}
                            alt={item.label}
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain mb-3"
                        />

                        <p className="text-sm sm:text-base font-medium text-gray-700 text-center">
                            {item.label}
                        </p>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default WorksBestWith;