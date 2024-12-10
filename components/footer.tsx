"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-white text-black">
      <div className="flex flex-col items-center">
        {/* Images */}
        <div className="w-full">
          <img
            src="https://envs.sh/1MA.png" // Replace with the path to your first image
            alt="Footer Image 1"
            className="w-full h-auto mb-2"
          />
        </div>
        <div className="w-full">
          <img
            src="https://envs.sh/1M_.png" // Replace with the path to your second image
            alt="Footer Image 2"
            className="w-full h-auto mb-2"
          />
        </div>

        {/* Footer Text */}
        <div className="text-center py-4">
          <p className="text-sm font-light">
            © {new Date().getFullYear()} IEDC MakerHub AJCE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
