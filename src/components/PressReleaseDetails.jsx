

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import config from "../config";

// const PressReleaseDetails = () => {
//   const { id } = useParams();
//   const [pressRelease, setPressRelease] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const isAdmin = localStorage.getItem("isAdmin") === "true";

//   useEffect(() => {
//     axios
//       .get(`${config.API_URL}/api/press-releases/${id}`)
//       .then((res) => {
//         setPressRelease(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching press release details:", err);
//         setLoading(false);
//       });
//   }, [id]);

//   const handleDelete = () => {
//     if (!window.confirm("Are you sure you want to delete this press release?")) return;
//     axios
//       .delete(`${config.API_URL}/api/press-releases/${id}`)
//       .then(() => {
//         alert("Press release deleted!");
//         navigate("/admin/press-releases");
//       })
//       .catch((err) => console.error(err));
//   };

//   const handleEdit = () => {
//     navigate(`/admin/press-releases/edit/${id}`);
//   };

//   if (loading) return <p className="p-6 text-center">Loading press release...</p>;
//   if (!pressRelease) return <p className="p-6 text-center">Press release not found.</p>;

//   return (
//     <div className="min-h-screen bg-heroBG py-10 px-6 sm:px-12 lg:px-20">
//       {/* Back + Admin Buttons */}
//       <div className="flex justify-between items-center mb-6">
//         <button
//           onClick={() => navigate(-1)}
//           className="px-4 py-2 bg-button text-text rounded-lg shadow transition"
//         >
//           ← Back
//         </button>
//         {isAdmin && (
//           <div className="space-x-2">
//             <button
//               onClick={handleEdit}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
//             >
//               Edit
//             </button>
//             <button
//               onClick={handleDelete}
//               className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
//             >
//               Delete
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Content */}
//       <div className="max-w-4xl mx-auto">
//         <img
//           src={pressRelease.imageUrl || "https://via.placeholder.com/800x400?text=No+Image"}
//           alt={pressRelease.title}
//           className="w-full h-80 object-cover rounded-lg mb-6"
//         />
//         <h1 className="text-4xl font-bold mb-2">{pressRelease.title}</h1>
//         {pressRelease.excerpt && <p className="text-gray-600 italic mb-4">{pressRelease.excerpt}</p>}
//         <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
//           {pressRelease.content || pressRelease.excerpt}
//         </p>
//         {pressRelease.date && (
//           <p className="mt-4 text-sm text-gray-600">
//             <span className="font-semibold">Published on:</span>{" "}
//             {new Date(pressRelease.date).toLocaleDateString()}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PressReleaseDetails;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";

const PressReleaseDetails = ({ isAdmin = false }) => {
  const { id } = useParams();
  const [pressRelease, setPressRelease] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${config.API_URL}/press-releases/${id}`)
      .then((res) => {
        setPressRelease(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching press release details:", err);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this press release?")) return;
    axios
      .delete(`${config.API_URL}/press-releases/${id}`)
      .then(() => {
        alert("Press release deleted!");
        navigate("/admin/press-releases");
      })
      .catch((err) => console.error(err));
  };

  const handleEdit = () => {
    navigate(`/admin/press-releases/edit/${id}`);
  };

  if (loading) return <p className="p-6 text-center">Loading press release...</p>;
  if (!pressRelease) return <p className="p-6 text-center">Press release not found.</p>;

  // Helper: check for HTML content
  const isHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);

  return (
    <div className="min-h-screen bg-heroBG py-10 px-6 sm:px-12 lg:px-20">
      {/* Back + Admin Buttons */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-button text-white rounded-lg shadow hover:bg-button/80 transition"
        >
          ← Back
        </button>

        {isAdmin && (
          <div className="space-x-2">
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Image */}
        <img
          src={pressRelease.imageUrl || "https://via.placeholder.com/800x400?text=No+Image"}
          alt={pressRelease.title}
          className="w-full h-80 object-cover rounded-lg mb-6"
        />

        {/* Title */}
        <h1 className="text-4xl font-bold mb-3 text-coffee-brown">
          {pressRelease.title || "Untitled Press Release"}
        </h1>

        {/* Summary (Normal text, no box) */}
        {pressRelease.summary && (
          <p className="text-gray-700 text-lg leading-relaxed mb-4 whitespace-pre-wrap">
            {pressRelease.summary}
          </p>
        )}

        {/* Excerpt */}
        {pressRelease.excerpt && (
          <div className="mb-4">
            <p className="text-gray-600 italic text-lg">{pressRelease.excerpt}</p>
          </div>
        )}

        {/* Content */}
        {pressRelease.content ? (
          isHTML(pressRelease.content) ? (
            <div
              className="text-gray-800 text-lg leading-relaxed prose max-w-none"
              dangerouslySetInnerHTML={{ __html: pressRelease.content }}
            />
          ) : (
            <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-wrap">
              {pressRelease.content}
            </p>
          )
        ) : (
          <p className="text-gray-500 text-lg italic mt-6">
            Full content is not available for this press release.
          </p>
        )}

        {/* Date */}
        {pressRelease.date && (
          <p className="mt-6 text-sm text-gray-600">
            <span className="font-semibold">Published on:</span>{" "}
            {new Date(pressRelease.date).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default PressReleaseDetails;
