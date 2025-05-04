import React from "react";

// Footer component for the blog
const Footer = () => {
  return (
    // Main footer container with full width, dark background, and light text
    <div className="w-full bg-[#02044A] text-gray-300 p-2">
      {/* Upper section of the footer */}
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 border-b-2 border-gray-600 py-2">
        <div className="">
          {/* Placeholder for categories section */}
          {/* <h6 className="py-2">Categories</h6> */}
        </div>
      </div>
      {/* Lower section of the footer */}
      <div className="flex flex-col max-w-[1240px] m-auto justify-between sm:flex-row text-center text-gray-500">
        {/* Copyright information */}
        <p className="pt-4">Copy, right?</p>
        {/* Powered by section */}
        <div className="pt-4 sm:flex-row">
          Powered by Vite+React, TailwindCSS, and Strapi
        </div>
      </div>
    </div>
  );
};

export default Footer;
