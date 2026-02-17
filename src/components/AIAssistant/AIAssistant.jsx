import React from "react";

const AIAssistant = () => {
  return (
    <div className="py-12 px-4 md:px-8">
      
      <div className="max-w-10xl mx-auto bg-white 
                      rounded-2xl p-8 md:p-10 
                      shadow-lg border border-orange-100">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            AI Assistant
          </h2>
          <p className="text-gray-500 mt-2">
            Ask questions about your business data
          </p>
        </div>

        {/* Input Area */}
        <textarea
          placeholder="Ask a question about your data..."
          className="w-full h-32 p-4 rounded-xl
                     border border-orange-200
                     focus:outline-none focus:ring-2 focus:ring-orange-400
                     text-gray-700 placeholder-gray-400
                     resize-none transition"
        />

        {/* Button */}
        <button
          className="w-full mt-6 py-4 rounded-xl
                     bg-gradient-to-r from-orange-400 to-orange-500
                     hover:from-orange-500 hover:to-orange-600
                     text-white font-semibold text-lg
                     shadow-md transition-all duration-300
                     hover:shadow-lg"
        >
          Ask Question
        </button>

        {/* Answer Box */}
        <div className="mt-8 p-6 rounded-xl
                        bg-orange-50
                        border border-orange-100
                        text-gray-700 min-h-[100px]">
          Your strategic answer will appear here...
        </div>

      </div>

    </div>
  );
};

export default AIAssistant;
