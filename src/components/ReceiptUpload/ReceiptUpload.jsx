import React, { useRef } from "react";
import { Upload } from "lucide-react";

const ReceiptUpload = () => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // Later → send to backend
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
      
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Upload Receipt
      </h2>
      <p className="text-gray-500 mb-6">
        Upload an image or PDF file
      </p>

      {/* Upload Box */}
      <div
        onClick={handleClick}
        className="border-2 border-dashed border-orange-300 rounded-xl 
                   flex flex-col items-center justify-center 
                   h-60 cursor-pointer 
                   hover:bg-orange-50 transition-all duration-300"
      >
        <Upload size={40} className="text-[#EF8411] mb-4" />

        <p className="text-lg font-medium text-gray-700">
          Drop your file here or click to browse
        </p>

        <p className="text-gray-400 text-sm mt-2">
          Supports JPG, PNG, and PDF formats
        </p>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".jpg,.jpeg,.png,.pdf"
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ReceiptUpload;
