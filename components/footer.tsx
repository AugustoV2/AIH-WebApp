"use client";

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full bg-white text-black">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* First Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="https://envs.sh/1MA.png" // Replace with the path to your first image
            alt="Footer Image 1"
            width={500} // Adjust as needed
            height={300} // Adjust as needed
            className="w-full h-auto mb-2 md:mb-0 md:mr-2"
          />
        </div>
        
        {/* Second Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="https://envs.sh/1M_.png" // Replace with the path to your second image
            alt="Footer Image 2"
            width={500} // Adjust as needed
            height={300} // Adjust as needed
            className="w-full h-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
