import React, { useState, useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const TimelineGraph = () => {
  const schedule = [
    {
      date: "2024-12-10",
      events: ["Registration of Teams", "Lunch and Dinner for teams"],
    },
    {
      date: "2024-12-11",
      events: [
        "7:00 AM - 7:30 AM: Breakfast",
        "8:00 AM: Local Inauguration at Nodal Center",
        "9:00 AM - 9:30 AM: Central Inauguration (Tentative)",
        "9:30 AM: Hackathon for Hardware Edition goes Live",
        "10:30 AM - 11:30 AM: Tea and Snacks",
        "11:30 AM - 1:00 PM: First Round of Mentoring Session",
        "1:00 PM - 2:00 PM: Lunch",
        "2:00 PM - 4:30 PM: Hackathon Continues",
        "4:30 PM - 5:00 PM: Tea and Snacks",
        "6:30 PM - 8:00 PM: First Round of Evaluation",
        "9:00 PM - 11:30 PM: Hackathon Continues",
        "11:30 PM - 12:00 AM: Midnight Energy Drink and Snacks",
        "11:30 PM - 12:30 AM: Cultural Program (Karaoke/Dance/Zumba)",
      ],
    },
    {
      date: "2024-12-12",
      events: [
        "12:30 AM - 6:00 AM: Hackathon Continues",
        "6:00 AM - 7:00 AM: Yoga Session",
        "7:00 AM - 8:00 AM: Breakfast",
        "8:00 AM - 11:00 AM: Hackathon Continues",
        "11:00 AM - 11:30 AM: Tea and Snacks",
        "1:00 PM - 2:00 PM: Lunch",
        "2:00 PM - 4:00 PM: Hackathon Continues",
        "4:00 PM - 5:00 PM: Role Play of Entrepreneurship",
        "6:00 PM - 8:00 PM: Second Round of Mentoring Session",
        "8:00 PM - 9:00 PM: Dinner",
        "9:00 PM - 11:00 PM: Hackathon Continues",
        "11:00 PM - 12:00 AM: Cultural Program",
      ],
    },
    {
      date: "2024-12-13",
      events: [
        "12:00 AM - 6:00 AM: Hackathon Continues",
        "6:00 AM - 7:00 AM: Yoga Session",
        "7:00 AM - 8:00 AM: Breakfast",
        "10:00 AM - 11:00 AM: Innovation Talk",
        "11:00 AM - 11:30 AM: Tea and Snacks",
        "11:30 PM - 1:00 PM: Hackathon Continues",
        "1:00 PM - 2:00 PM: Lunch",
        "2:00 PM - 5:00 PM: Hackathon Continues",
        "5:00 PM - 6:00 PM: Tea and Snacks",
        "6:00 PM - 8:00 PM: Second Round of Evaluation",
        "8:00 PM - 9:00 PM: Dinner",
        "9:00 PM - 11:00 PM: Hackathon Continues",
        "11:00 PM - 12:00 AM: Cultural Program",
      ],
    },
    {
      date: "2024-12-14",
      events: [
        "12:00 AM - 6:00 AM: Hackathon Continues",
        "6:00 AM - 7:00 AM: Yoga Session",
        "7:00 AM - 8:00 AM: Breakfast",
        "8:00 AM - 11:00 AM: Hackathon Continues",
        "11:00 AM - 11:30 AM: Tea and Snacks",
        "11:30 AM - 1:00 PM: Hackathon Continues",
        "1:00 PM - 2:00 PM: Lunch",
        "2:00 PM - 4:00 PM: Hackathon Continues",
        "4:00 PM - 5:00 PM: Talk on Designing",
        "5:00 PM - 6:00 PM: Tea and Snacks",
        "6:00 PM - 8:00 PM: Third Round of Mentoring Session",
        "8:00 PM - 9:00 PM: Dinner",
        `9:00 PM - 11:00 PM: Hackathon Continues`,
        "11:00 PM - 12:00 AM: Cultural Program",
      ],
    },
    {
      date: "2024-12-15",
      events: [
        "12:00 AM - 6:00 AM: Hackathon Continues",
        "6:00 AM - 7:00 AM: Yoga Session",
        "7:00 AM - 8:00 AM: Breakfast",
        "8:00 AM - 11:00 AM: Hackathon Continues",
        "11:00 AM - 11:30 AM: Tea and Snacks",
        "11:30 AM - 1:00 PM: Hackathon Continues",
        "1:00 PM - 2:00 PM: Lunch",
        "2:00 PM - 3:00 PM: Hackathon continues",
        "3:00 PM: Hackathon Stops",
        "3:00 PM - 5:00 PM: Final Round of Evaluation",
        "5:00 PM - 6:30 PM: Finalization of Results",
        "6:30 PM - 8:00 PM: Valedictory Session and Prize Distribution",
        "8:00 PM - 9:00 PM: Dinner",
      ],
    },
    {
      date: "2024-12-16",
      events: [
        "Post Hackathon Departures (Breakfast, Tea, and Coffee provided)",
        "Travel arrangements for students/mentors to nearest station",
      ],
    },
  ];
  const setDefault = () => {
    const today = new Date().toISOString().split("T")[0];
    const todayIndex = schedule.findIndex((item) => item.date === today);
    return todayIndex >= 0 ? todayIndex : null;
  };
  
  const [expandedIndex, setExpandedIndex] = useState<number | null>(
    setDefault(),
  );

  // Calculate progress dynamically
  const calculateProgress = () => {
    const startDate = new Date("2024-12-10T00:00:00+05:30").getTime();
    const endDate = new Date("2024-12-16T12:00:00+05:30").getTime();
    const now = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });
    const nowIST = new Date(now).getTime();

    if (nowIST <= startDate) return 0;
    if (nowIST >= endDate) return 100;

    return ((nowIST - startDate) / (endDate - startDate)) * 100;
  };

  const handleExpand = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="py-8 px-6 lg:px-16 flex flex-col items-center ">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
        Timeline
      </h2>

      {/* Progress Bar */}
      <div className="w-full max-w-4xl mb-8">
        <div className="w-full bg-gray-300 rounded-full h-3">
          <div
            className="h-3 bg-gradient-to-br from-blue-400 to-green-500 rounded-full transition-all duration-500"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-700 mt-1">
          <span>Start: Dec 10</span>
          <span>End: Dec 16, 12:00 PM</span>
        </div>
      </div>

      {/* Timeline */}
      <ol className="relative border-s-4 border-blue-200 w-full max-w-4xl">
        {schedule.map((day, index) => (
          <li key={index} className="mb-10 ms-6">
            {/* Circular Icon */}
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
              <FaRegCalendarAlt className="text-blue-600" />
            </span>

            {/* Date Header */}
            <button
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleExpand(index)}
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {new Date(day.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </h3>
              <span className="text-blue-600 text-xl">
                {expandedIndex === index ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </span>
            </button>

            {/* Events */}
            {expandedIndex === index && (
              <ul className="mt-4 space-y-2 transition-all transform ease-in-out">
                {day.events.map((event, i) => (
                  <li key={i} className="text-gray-700 flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-blue-400 rounded-full"></span>
                    {event}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimelineGraph;
