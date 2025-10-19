import React from "react";
import { useNavigate } from "react-router-dom";

function Home({ countdowns }) {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center p-6">
      <h2 className="text-xl font-semibold mb-4">COUNTDOWNS</h2>

      {/* Countdown List */}
      <div className="space-y-4 w-80">
        {countdowns.length === 0 ? (
          <p className="text-gray-500">No countdowns yet.</p>
        ) : (
          countdowns.map((c) => (
            <div
              key={c.id}
              className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
            >
              <div className="text-center">
                <p className="text-2xl font-bold">{c.daysLeft}</p>
                <p className="text-sm">Days</p>
              </div>
              <div>
                <h3 className="font-bold">{c.title}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(c.date).toLocaleDateString("en-GB")}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Countdown Button */}
      <button
        onClick={() => navigate("/add")}
        className="mt-8 bg-purple-400 hover:bg-purple-500 text-black font-bold text-3xl rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
      >
        +
      </button>
    </div>
  );
}

export default Home;
