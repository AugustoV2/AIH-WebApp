"use client";

import React from "react";

const GoogleMap = () => {
  return (
    <div className="mb-5 flex justify-center">
      <div className="h-96 w-[900px] border-2 border-gray-300 rounded-lg shadow-lg">
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "15px" }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao
                &q=9.52866,76.82344&zoom=16`}
          ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
