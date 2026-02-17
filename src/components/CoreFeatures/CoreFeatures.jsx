import React from 'react';
import inventory from "../../assets/inventory.png";
import voice from "../../assets/voice.png";
import credit from "../../assets/credit.png";
import demand from "../../assets/demand.png";
import "./coreFeatures.css"
const coreFeatures = () => {
    const features = [
        {
          id: 1,
          img: inventory,
          title: "Manage Inventory",
          desc: "Complete inventory management functionality with low stock warning in email.",
        },
        {
          id: 2,
          img: voice,
          title: "Voice-based Sales Entry",
          desc: "Record customer credit instantly, track dues in real-time, and manage repayments—without the khata hassle.",
        },
        {
          id: 3,
          img: credit,
          title: "Credit Management",
          desc: "Track customer dues, record payments, and manage credit effortlessly in one place.",
        },
        {
          id: 4,
          img: demand,
          title: "Demand Prediction",
          desc: "Forecast upcoming product demand using past sales data to avoid stockouts and overstocking.",
        },
      ];
    return (
        <section className="core-section">
        <h2 className="core-title">Core Features</h2>
  
        <div className="core-grid">
          {features.map((feature) => (
            <div key={feature.id} className="core-card">
              <img
                src={feature.img}
                alt={feature.title}
                className="core-icon"
              />
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
};

export default coreFeatures;