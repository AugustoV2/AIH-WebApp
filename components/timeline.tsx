import React, { useState, useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const TimelineGraph = () => {
  const [selectedDateIndex, setSelectedDateIndex] = useState<number | null>(null);

  const pastelColors = [
    "bg-pastel-blue",
    "bg-pastel-green",
    "bg-pastel-yellow",
    "bg-pastel-pink",
    "bg-pastel-purple",
    "bg-pastel-orange",
  ];

  const schedule = [
    {
      date: "2024-12-10",
      events: [
        "Registration of Teams",
        "Equipment and consumable rechecks",
        "Audio/Video setup testing",
      ],
    },
    {
      date: "2024-12-11",
      events: [
        "8:00 AM: Inauguration of Grand Finale SIH 2024",
        "9:30 AM: Hackathon for Hardware Edition goes Live",
        "11:30 AM - 1:00 PM: First Round of Mentoring Session",
        "6:30 PM - 8:00 PM: First Round of Evaluation",
      ],
    },
    {
      date: "2024-12-12",
      events: [
        "6:00 AM - 7:00 AM: Yoga Session",
        "8:00 AM - 11:00 AM: Hackathon continues",
        "6:00 PM - 8:00 PM: Second Round of Mentoring Session",
      ],
    },
    {
      date: "2024-12-13",
      events: [
        "10:00 AM - 11:00 AM: Innovation Talk",
        "6:00 PM - 8:00 PM: Second Round of Evaluation",
      ],
    },
    {
      date: "2024-12-14",
      events: [
        "4:00 PM - 5:00 PM: Talk on Designing",
        "6:00 PM - 8:00 PM: Third Round of Mentoring Session",
      ],
    },
    {
      date: "2024-12-15",
      events: [
        "8:00 AM - 3:00 PM: Hackathon continues",
        "3:00 PM - 5:00 PM: Final Round of Evaluation",
        "6:30 PM - 8:00 PM: Valedictory Session and Prize Distribution",
      ],
    },
  ];

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const index = schedule.findIndex((event) => event.date === today);

    if (index >= 0 && selectedDateIndex === null) {
      setSelectedDateIndex(index);
    }
  }, [schedule, selectedDateIndex]);

  const handleSelectDate = (index: number) => {
    setSelectedDateIndex(index);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-4xl font-bold mt-8 mb-8 text-gray-900">Programme Schedules</h2>
      <div className="relative w-full max-w-4xl">
        {/* Vertical Timeline */}
        <div className="border-l-4 border-gray-300 relative">
          {schedule.map((day, index) => (
            <div
              key={index}
              className={`mb-6 pl-1 relative flex items-start ${selectedDateIndex === index ? `rounded-md ${pastelColors[index % pastelColors.length]}` : ""}`}
            >
              {/* Date Label */}
              <div className="flex items-center mb-2">
                <FaRegCalendarAlt
                  className={`text-2xl ${selectedDateIndex === index ? "text-blue-600" : "text-gray-500"}`}
                />
                <button
                  type="button"
                  className="h-4 w-4 cursor-pointer"
                  onClick={() => handleSelectDate(index)}
                  aria-label={`Select date ${new Date(day.date).toLocaleDateString()}`}
                />
                <button
                  className={`ml-3 font-bold text-gray-800 text-lg ${selectedDateIndex === index ? "text-blue-600" : ""}`}
                  onClick={() => handleSelectDate(index)}
                  aria-label={`View events for ${new Date(day.date).toLocaleDateString()}`}
                >
                  {new Date(day.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </button>
              </div>

              {/* Display Schedule when selected */}
              {selectedDateIndex === index && (
                <div className="ml-6">
                  <ul className="text-gray-700">
                    {day.events.map((event, idx) => (
                      <li key={idx} className="mb-2">
                        - {event}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineGraph;
