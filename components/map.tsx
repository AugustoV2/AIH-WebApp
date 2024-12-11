"use client";

import React from "react";

const GoogleMap = () => {
  return (
    <div className="py-6 lg:py-16 lg:px-24 flex justify-center">
      <div
        className="mx-3 h-[20rem] w-full lg:h-[25rem]  
                      border-4 border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                      rounded-3xl shadow-lg transition-transform transform hover:shadow-2xl 
                      overflow-hidden"
      >
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "15px" }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao
                &q=9.52866,76.82344&zoom=18&maptype=satellite`}
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
