import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter your email and password!");
      return;
    }

    // You can add authentication logic here
    setIsLoggedIn(true);
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="bg-gray-100 p-8 rounded-xl shadow-md w-80 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-black rounded-full flex items-center justify-center">
            <div className="w-8 h-8 border-t-4 border-white rounded-full animate-spin"></div>
          </div>
          <h1 className="text-lg font-semibold mt-3">Countdown Timer App</h1>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Email or Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded-md"
          />
          <button
            type="submit"
            className="bg-purple-400 hover:bg-purple-500 text-white font-semibold py-2 rounded-md"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
