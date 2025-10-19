import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCountdown({ setCountdowns }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [remainingDays, setRemainingDays] = useState(null);

  const calculateDaysLeft = (date) => {
    const today = new Date();
    const target = new Date(date);
    const diff = target - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  const handlePreview = () => {
    if (eventDate) setRemainingDays(calculateDaysLeft(eventDate));
  };

  const handleSave = () => {
    if (!eventDate || !title) {
      alert("Please enter both title and date!");
      return;
    }

    const newCountdown = {
      id: Date.now(),
      title,
      date: eventDate,
      daysLeft: calculateDaysLeft(eventDate),
    };

    setCountdowns((prev) => [...prev, newCountdown]);
    navigate("/"); // Go back home after saving
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-8 space-y-4">
      <h2 className="text-2xl font-bold">Add Countdown</h2>

      {remainingDays !== null && (
        <p className="text-lg">{remainingDays} Days Remaining</p>
      )}

      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full max-w-xs mb-3 px-3 py-2 rounded-lg text-gray-900"
      />

      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        className="w-full max-w-xs mb-3 px-3 py-2 rounded-lg text-gray-900"
      />

      <div className="flex gap-4">
        <button
          onClick={handlePreview}
          className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg"
        >
          Preview
        </button>
        <button
          onClick={handleSave}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddCountdown;
