// import React from 'react'
// import "./loader.css";

export default function Loader() {
  return (
    <div>
      <div className=" flex items-center justify-center">
        {/* Outer spinning ring */}
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-b-transparent rounded-full animate-spin"></div>

        {/* Inner pulsing dot */}
        <div className="absolute w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
      </div>
    </div>
  );
}
