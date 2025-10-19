import React, { useState, useEffect } from "react";

function AddCountdown() {
  const [countdowns, setCountdowns] = useState([]);
  const [eventDate, setEventDate] = useState("");
  const [title, setTitle] = useState("");
  const [remainingDays, setRemainingDays] = useState(null);

  const calculateDaysLeft = (date) => {
    const today = new Date();
    const target = new Date(date);
    const diffTime = target - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const handlePreview = () => {
    if (!eventDate) return;
    const days = calculateDaysLeft(eventDate);
    setRemainingDays(days);
  };

  const handleSave = () => {
    if (!eventDate || !title) {
      alert("Please enter both event title and date.");
      return;
    }
    const newCountdown = {
      id: Date.now(),
      title,
      date: eventDate,
      daysLeft: calculateDaysLeft(eventDate),
    };
    setCountdowns([...countdowns, newCountdown]);
    setEventDate("");
    setTitle("");
    setRemainingDays(null);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center space-y-8 p-8">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80 text-center">
        <h2 className="text-2xl font-bold mb-4">Add Countdown</h2>

        {remainingDays !== null && (
          <p className="text-lg mb-4">{remainingDays} Days Remaining</p>
        )}

        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 px-3 py-2 rounded-lg text-gray-900"
        />

        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="w-full mb-3 px-3 py-2 rounded-lg text-gray-900"
        />

        <div className="flex justify-between">
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

      {/* Show all saved countdowns */}
      <div className="space-y-4 w-80">
        {countdowns.map((c) => (
          <div
            key={c.id}
            className="bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center"
          >
            <h3 className="font-bold text-lg">{c.title}</h3>
            <p>{c.daysLeft} Days Left</p>
            <p className="text-sm text-gray-400">
              Event Date: {new Date(c.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddCountdown;
