import { useState } from "react";
import { X, Calendar, Repeat, ArrowRight, AlignLeft } from "lucide-react";

export default function AddCountdown() {
    const [date, setDate] = useState("2025-10-16");
    const [allDay, setAllDay] = useState(true);
    const [repeat, setRepeat] = useState("Do not Repeat");
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");

    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <div className="bg-white shadow-xl w-80 p-4 rounded-xl">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <button>
              <X className="text-gray-600" />
            </button>
            <h2 className="font-semibold text-lg">Add Countdown</h2>
            <div className="w-6" />
          </div>
  
          {/* Preview Section */}
          <div className="bg-purple-300 rounded-full flex justify-center items-center text-white font-semibold py-3 mb-4">
            <span className="text-2xl mr-2">9</span> Days
          </div>
          <button className="text-sm text-gray-600 mb-4 underline">Preview</button>
  
          {/* Date and Time */}
          <div className="flex gap-2 mb-3 items-center">
            <Calendar className="text-gray-500" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-full"
            />
            <button
              onClick={() => setAllDay(!allDay)}
              className="text-xs bg-gray-100 border px-2 py-1 rounded"
            >
              {allDay ? "All Day" : "Timed"}
            </button>
          </div>
  
          {/* Repeat */}
          <div className="flex gap-2 mb-3 items-center">
            <Repeat className="text-gray-500" />
            <input
              type="text"
              value={repeat}
              onChange={(e) => setRepeat(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-full"
            />
          </div>
  
          {/* What is on that Day */}
          <div className="flex gap-2 mb-3 items-center">
            <ArrowRight className="text-gray-500" />
            <input
              type="text"
              placeholder="What is on that Day?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-full"
            />
          </div>
  
          {/* Notes */}
          <div className="flex gap-2 mb-4 items-center">
            <AlignLeft className="text-gray-500" />
            <input
              type="text"
              placeholder="Your Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-full"
            />
          </div>
  
          {/* Save Button */}
          <button className="w-full bg-purple-300 text-white font-semibold py-2 rounded">
            SAVE
          </button>
        </div>
      </div>
    );
  }