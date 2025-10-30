// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import config from "../config";

// const PublicationDetail = () => {
//   const { id } = useParams();
//   const [publication, setPublication] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const isAdmin = localStorage.getItem("isAdmin") === "true";

//   useEffect(() => {
//     axios
//       .get(`${config.API_URL}/api/publications/${id}`)
//       .then((res) => {
//         setPublication(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching publication:", err);
//         setLoading(false);
//       });
//   }, [id]);

//   const handleDelete = () => {
//     if (!window.confirm("Are you sure you want to delete this publication?")) return;
//     axios
//       .delete(`${config.API_URL}/api/publications/${id}`)
//       .then(() => {
//         alert("Publication deleted!");
//         navigate("/admin/publications");
//       })
//       .catch((err) => console.error(err));
//   };

//   const handleEdit = () => {
//     navigate(`/admin/publications/edit/${id}`);
//   };

//   if (loading) return <div className="text-center py-10">Loading publication...</div>;
//   if (!publication) return <div className="text-center py-10">Publication not found.</div>;

//   // Helper: detect if content contains HTML
//   const isHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);

//   return (
//     <div className="min-h-screen bg-heroBG py-10 px-6 sm:px-12 lg:px-20">
//       {/* Back Button + Admin Controls */}
//       <div className="flex justify-between items-center mb-6">
//         <button
//           onClick={() => navigate(-1)}
//           className="px-4 py-2 bg-button text-white rounded-lg shadow hover:bg-button/80 transition"
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

//       {/* Main Content */}
//       <div className="max-w-4xl mx-auto">
//         {/* Image */}
//         <img
//           src={publication.imageUrl || "https://via.placeholder.com/800x400?text=No+Image"}
//           alt={publication.title}
//           className="w-full h-80 object-cover rounded-lg mb-6"
//         />

//         {/* Title */}
//         <h1 className="text-4xl font-bold mb-4 text-coffee-brown">
//           {publication.title || "Untitled Publication"}
//         </h1>

//         {/* Summary */}
//         {publication.summary && (
//           <p className="text-gray-600 italic mb-4">{publication.summary}</p>
//         )}

//         {/* Description */}
//         {publication.description && (
//           <p className="text-gray-800 text-lg mb-6 whitespace-pre-wrap leading-relaxed">
//             {publication.description}
//           </p>
//         )}

//         {/* Content */}
//         {publication.content && (
//           isHTML(publication.content) ? (
//             <div
//               className="text-gray-800 text-lg leading-relaxed prose max-w-none"
//               dangerouslySetInnerHTML={{ __html: publication.content }}
//             />
//           ) : (
//             <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-wrap">
//               {publication.content}
//             </p>
//           )
//         )}

//         {/* Optional metadata */}
//         {publication.author && (
//           <p className="mt-4 text-sm text-gray-600">
//             <span className="font-semibold">Author:</span> {publication.author}
//           </p>
//         )}
//         {publication.date && (
//           <p className="mt-2 text-sm text-gray-600">
//             <span className="font-semibold">Published on:</span>{" "}
//             {new Date(publication.date).toLocaleDateString()}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PublicationDetail;



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";

const PublicationDetail = ({ isAdmin = false }) => {  // ✅ receive as prop
  const { id } = useParams();
  const [publication, setPublication] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/publications/${id}`)
      .then((res) => {
        setPublication(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching publication:", err);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this publication?")) return;
    axios
      .delete(`${config.API_URL}/api/publications/${id}`)
      .then(() => {
        alert("Publication deleted!");
        navigate("/admin/publications");
      })
      .catch((err) => console.error(err));
  };

  const handleEdit = () => {
    navigate(`/admin/publications/edit/${id}`);
  };

  if (loading) return <div className="text-center py-10">Loading publication...</div>;
  if (!publication) return <div className="text-center py-10">Publication not found.</div>;

  // Helper: detect if content contains HTML
  const isHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);

  return (
    <div className="min-h-screen bg-heroBG py-10 px-6 sm:px-12 lg:px-20">
      {/* Back Button + Admin Controls */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-button text-white rounded-lg shadow hover:bg-button/80 transition"
        >
          ← Back
        </button>

        {isAdmin && (  // ✅ controlled by prop
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
        <img
          src={publication.imageUrl || "https://via.placeholder.com/800x400?text=No+Image"}
          alt={publication.title}
          className="w-full h-80 object-cover rounded-lg mb-6"
        />

        <h1 className="text-4xl font-bold mb-4 text-coffee-brown">
          {publication.title || "Untitled Publication"}
        </h1>

        {publication.summary && (
          <p className="text-gray-600 italic mb-4">{publication.summary}</p>
        )}

        {publication.description && (
          <p className="text-gray-800 text-lg mb-6 whitespace-pre-wrap leading-relaxed">
            {publication.description}
          </p>
        )}

        {publication.content && (
          isHTML(publication.content) ? (
            <div
              className="text-gray-800 text-lg leading-relaxed prose max-w-none"
              dangerouslySetInnerHTML={{ __html: publication.content }}
            />
          ) : (
            <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-wrap">
              {publication.content}
            </p>
          )
        )}

        {publication.author && (
          <p className="mt-4 text-sm text-gray-600">
            <span className="font-semibold">Author:</span> {publication.author}
          </p>
        )}
        {publication.date && (
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-semibold">Published on:</span>{" "}
            {new Date(publication.date).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default PublicationDetail;
