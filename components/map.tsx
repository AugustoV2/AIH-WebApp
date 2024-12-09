"use client";

import React from "react";

const GoogleMap = () => {
  return (
    <div className="mb-5 flex justify-center">
      <div className="mx-3 h-[20rem] w-full sm:h-[25rem] sm:w-[600px] lg:h-[30rem] lg:w-[1200px] border-2 border-gray-300 rounded-lg shadow-lg">
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "15px" }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao
                &q=Amal+Jyothi+College+of+Engineering+Autonomous,+9.52866,76.82344&zoom=18`}
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
