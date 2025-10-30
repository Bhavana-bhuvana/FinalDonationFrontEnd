
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import config from "../src/config";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); // eye toggle
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(`${config.API_URL}/admin/login`, {
        email,
        password,
      });

      if (res.data.valid) {
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("adminEmail", email);
        navigate("/admin/dashboard", { replace: true });
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-2xl shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-gray-600">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="w-full px-3 py-2 border rounded mb-4 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <div className="mb-3">
  <label className="block mb-2 text-gray-600">Password</label>
  <div className="flex items-center border rounded px-3 py-2 focus-within:ring focus-within:ring-blue-300">
    <input
      type={showPassword ? "text" : "password"}
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter password"
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
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-button text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-4">
          <Link
            to="/admin/forgot-password"
            className="text-blue-500 hover:underline text-sm"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
