import React from "react";
import { Mic } from "lucide-react";

const VoiceInputCard = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 max-w-5xl">
      
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Voice Input
      </h2>

      <p className="text-gray-500 mb-8">
        Record your data in Bengali
      </p>

      {/* Button */}
      <button
        className="w-full py-4 rounded-xl 
                   bg-gradient-to-r from-orange-400 to-orange-500
                   hover:from-orange-500 hover:to-orange-600
                   text-white font-semibold text-lg
                   shadow-md transition-all duration-300"
      >
        <div className="flex items-center justify-center gap-2">
          <Mic size={20} />
          Start Voice Input
        </div>
      </button>

      {/* Status Text */}
      <p className="text-center text-orange-400 mt-6 font-medium">
        Microphone access denied.
      </p>
    </div>
  );
};

export default VoiceInputCard;
