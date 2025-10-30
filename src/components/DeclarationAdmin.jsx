import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

const DeclarationAdmin = () => {
  const [declaration, setDeclaration] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Fetch the declaration on mount
  useEffect(() => {
    const fetchDeclaration = async () => {
      try {
        const res = await axios.get(`${config.API_URL}/declaration`);
        setDeclaration(res.data);
      } catch (err) {
        console.error("Error fetching declaration:", err);
        alert("Failed to load declaration");
      } finally {
        setLoading(false);
      }
    };

    fetchDeclaration();
  }, []);

  // Save handler
  const saveDeclaration = async () => {
    setSaving(true);
    try {
      await axios.put(`${config.API_URL}/declaration`, declaration);
      alert("Declaration updated successfully!");
    } catch (err) {
      console.error("Error updating declaration:", err);
      alert("Failed to save declaration!");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>Loading declaration...</div>;

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Declaration</h2>

      <label className="block mb-2 font-semibold">Title</label>
      <input
        type="text"
        value={declaration.title}
        onChange={(e) => setDeclaration({ ...declaration, title: e.target.value })}
        className="w-full border px-3 py-2 rounded mb-4"
      />

      <label className="block mb-2 font-semibold">Content</label>
      <textarea
        value={declaration.content}
        onChange={(e) => setDeclaration({ ...declaration, content: e.target.value })}
        rows={6}
        className="w-full border px-3 py-2 rounded mb-4"
      />

      <button
        onClick={saveDeclaration}
        disabled={saving}
        className={`px-4 py-2 rounded text-white ${saving ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"}`}
      >
        {saving ? "Saving..." : "Save Declaration"}
      </button>
    </div>
  );
};

export default DeclarationAdmin;
