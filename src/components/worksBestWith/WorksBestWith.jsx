import React from 'react';
import mobile from "../../assets/mobile.png";
import grocery from "../../assets/grocery.png";
import fashion from "../../assets/fashion.png"; 
import book from "../../assets/book2.png";
import many from "../../assets/many2.png";
import "./workBest.css"
const WorksBestWith = () => {
    const items = [
        { id: 1, icon: mobile, label: "Mobile Shop" },
        { id: 2, icon: grocery, label: "Grocery Store" },
        { id: 3, icon: fashion, label: "Fashion Store" },
        { id: 4, icon: book, label: "Book Store" },
        { id: 5, icon: many, label: "& Many More" },
      ];
    return (
        <div className="works-container">
            <h1 className="works-title">Works best with</h1>
            <div className='works-grid'>
            {items.map((item) => (
          <div key={item.id} className="works-item">
            <img src={item.icon} alt={item.label} className="works-icon" />
            <p>{item.label}</p>
          </div>
        ))}
            </div>

        </div>
    );
};

export default WorksBestWith;