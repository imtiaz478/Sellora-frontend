import React from 'react';

const Faq = () => {
    return (
        <div className=' my-10'>
            <h1 className=' text-4xl font-bold text-center'>Frequently Asked Questions (FAQ) </h1>
            <div className=' w-full max-w-7xl mx-auto mt-8 space-y-4'>  
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold text-2xl">How does the voice system work?</div>
  <div className="collapse-content text-sm">Our system converts spoken sales entries into text using Speech-to-Text technology and automatically updates inventory and sales records.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold text-2xl">Do I need technical knowledge to use this?</div>
  <div className="collapse-content text-sm">No. Retailers can operate the system using simple voice commands or an easy dashboard interface.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold text-2xl">What happens if the internet is slow?</div>
  <div className="collapse-content text-sm">The system can store entries locally and sync when internet becomes stable MVP demo version may require internet for voice processing.</div>
</div>
            </div>
        </div>
    );
};

export default Faq;