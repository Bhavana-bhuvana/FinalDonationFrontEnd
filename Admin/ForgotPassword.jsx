import React, { useState } from "react";
import axios from "axios";
import config from "../src/config";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(`${config.API_URL}/admin/forgot-password`, { email });
      setMessage(res.data.message || "If this email exists, a reset link was sent.");
    } catch (err) {
      console.error(err);
      setMessage("Error sending reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-2xl shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
          Forgot Password
        </h2>
        <form onSubmit={handleForgotPassword}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded mb-3 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            disabled={loading || !email}
            className="w-full bg-button text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
          
        </form>

        {message && (
          <p className="text-center text-sm text-gray-600 mt-4">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
