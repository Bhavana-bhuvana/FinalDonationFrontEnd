import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../src/config";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token"); // get ?token= from URL

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(`${config.API_URL}/admin/reset-password`, {
        token,
        newPassword
      });

      if (res.data.reset) {
        setMessage("Password reset successfully! You can now login.");
        setTimeout(() => navigate("/admin"), 2000);
      } else {
        setMessage("Invalid or expired token.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-2xl shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
          Reset Password
        </h2>
        <form onSubmit={handleReset}>
          {/* Password input with eye button using flex */}
          <div className="mb-3">
            <label className="block mb-2 text-gray-600">New Password</label>
            <div className="flex items-center border rounded px-3 py-2 focus-within:ring focus-within:ring-blue-300">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="flex-1 outline-none border-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 ml-2"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !newPassword}
            className="w-full bg-button text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        {message && <p className="text-center text-sm text-gray-600 mt-4">{message}</p>}
      </div>
    </div>
  );
};
export default ResetPassword;
