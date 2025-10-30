

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";

const ProgrammeDetail = ({ isAdmin = false }) => { // ✅ prop-based admin control
  const { id } = useParams();
  const navigate = useNavigate();
  const [programme, setProgramme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/programmes/${id}`)
      .then((res) => {
        setProgramme(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching programme:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center py-10 text-white">Loading programme...</p>;
  if (!programme) return <p className="text-center py-10 text-white">Programme not found.</p>;

  return (
    <div className="min-h-screen bg-heroBG py-10 px-6 sm:px-12 lg:px-20">
      {/* Back button + optional admin controls */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(-1)} // ✅ same style as PublicationDetail
          className="px-4 py-2 bg-button text-white rounded-lg shadow hover:bg-button/80 transition"
        >
          ← Back
        </button>

        {isAdmin && (
          <div className="space-x-2">
            <button
              onClick={() => navigate(`/admin/programmes/edit/${id}`)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Edit
            </button>
            <button
              onClick={() => alert("Delete functionality coming soon")}
              className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Programme content */}
      <div className="text-center max-w-4xl mx-auto">
        <img
          src={programme.icon || "https://via.placeholder.com/80"}
          alt={programme.title}
          className="w-20 h-20 mx-auto mb-6 object-contain"
        />
        <h1
          className="text-3xl font-bold mb-4"
          style={{ color: programme.color }}
        >
          {programme.title}
        </h1>
        <p className="mt-4 text-lg text-text max-w-3xl mx-auto break-words whitespace-normal leading-relaxed">
          {programme.description}
        </p>
      </div>
    </div>
  );
};

export default ProgrammeDetail;
