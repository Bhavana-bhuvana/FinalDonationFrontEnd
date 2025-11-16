// // import Navbar from "./Navbar";
// // import Footer from "./Footer";
// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import config from "../config";

// // export default function DeclarationPage() {
// //   const [data, setData] = useState(null);

// //   useEffect(() => {
// //     axios.get(`${config.API_URL}/declaration`)
// //       .then(res => setData(res.data))
// //       .catch(() => setData({ title: "Declaration", content: "Unable to load declaration." }));
// //   }, []);

// //   // return (
// //   //   <>
// //   //     <div className="min-h-screen bg-[#f5f5f5] py-16 px-4">
// //   //       <div className="bg-white rounded-2xl shadow-md p-10 max-w-4xl mx-auto">
// //   //         <h1 className="text-3xl font-bold mb-4">{data?.title}</h1>
// //   //         <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
// //   //           {data?.content}
// //   //         </p>
// //   //       </div>
// //   //     </div>
// //   //   </>
// //   // );
// //   return (
// //   <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
// //     <div className="bg-white rounded-3xl shadow-xl p-10 max-w-4xl mx-auto border border-gray-200">
      
// //       {/* Title */}
// //       <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800 tracking-tight">
// //         {data?.title}
// //       </h1>

// //       {/* Content */}
// //       <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line px-2">
// //         {data?.content}
// //       </p>

// //       {/* Accept Box */}
// //       <div className="mt-10 flex items-center justify-center gap-4">
// //         <input
// //           type="checkbox"
// //           className="w-6 h-6 rounded accent-green-600"
// //           onChange={(e) =>
// //             navigate(-1, {
// //               state: {
// //                 fromDeclaration: true,
// //                 declarationChecked: e.target.checked,
// //                 formData: location.state?.formData
// //               }
// //             })
// //           }
// //         />
// //         <span className="text-gray-900 text-lg font-medium">
// //           I Accept & Agree
// //         </span>
// //       </div>
// //     </div>
// //   </div>
// // );

// // }
// import { useEffect, useState } from "react";
// import axios from "axios";
// import config from "../config";
// import { useNavigate, useLocation } from "react-router-dom";

// export default function DeclarationPage() {
//   const [data, setData] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     axios
//       .get(`${config.API_URL}/declaration`)
//       .then((res) => setData(res.data))
//       .catch(() =>
//         setData({ title: "Declaration", content: "Unable to load declaration." })
//       );
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
//       <div className="bg-white rounded-3xl shadow-xl p-10 max-w-4xl mx-auto border border-gray-200">
        
//         <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800 tracking-tight">
//           {data?.title}
//         </h1>

//         <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line px-2">
//           {data?.content}
//         </p>

//         <div className="mt-10 flex items-center justify-center gap-4">
//           <input
//             type="checkbox"
//             className="w-6 h-6 rounded accent-green-600"
//             onChange={(e) =>
//               navigate(-1, {
//                 replace: true,   // 🔥 FIX
//                 state: {
//                   fromDeclaration: true,
//                   declarationChecked: e.target.checked,
//                   formData: location.state?.formData,
//                 },
//               })
//             }
//           />
//           <span className="text-gray-900 text-lg font-medium">
//             I Accept & Agree
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import axios from "axios";
// import config from "../config";
// import { useNavigate, useLocation } from "react-router-dom";

// export default function DeclarationPage() {
//   const [data, setData] = useState(null);
//   const [checked, setChecked] = useState(false); // ⭐ user acceptance state
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Fetch declaration content
//   useEffect(() => {
//     axios
//       .get(`${config.API_URL}/declaration`)
//       .then((res) => setData(res.data))
//       .catch(() =>
//         setData({
//           title: "Declaration",
//           content: "Unable to load declaration.",
//         })
//       );
//   }, []);

//   const handleAccept = (value) => {

//     setChecked(value);
// console.log("📤 Sending back to DonationPage:");
// console.log("donationData:", location.state?.donationData);
//     navigate(-1, {
//       state: {
//         // ⭐ return existing donation form data exactly as Donation page expects
//         donationData: location.state?.donationData || {},
//         // ⭐ return declaration acceptance flag
//         declarationChecked: value,
//       },
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
//       <div className="bg-white rounded-3xl shadow-xl p-10 max-w-4xl mx-auto border border-gray-200">
        
//         <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800 tracking-tight">
//           {data?.title}
//         </h1>

//         <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line px-2">
//           {data?.content}
//         </p>

//         {/* Accept & Return */}
//         <div className="mt-10 flex items-center justify-center gap-4">
//           <input
//             type="checkbox"
//             checked={checked}
//             className="w-6 h-6 rounded accent-green-600 cursor-pointer"
//             onChange={(e) => handleAccept(e.target.checked)}
//           />

//           <span className="text-gray-900 text-lg font-medium">
//             I Accept & Agree
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import { useNavigate, useLocation } from "react-router-dom";

export default function DeclarationPage() {
  const [data, setData] = useState(null);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 1️⃣ DEBUG: Log what arrives from Donation Page
  console.log("📥 DeclarationPage received state:", location.state);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/declaration`)
      .then((res) => setData(res.data))
      .catch(() =>
        setData({
          title: "Declaration",
          content: "Unable to load declaration.",
        })
      );
  }, []);

  const handleAccept = (value) => {
    setChecked(value);

    // 2️⃣ DEBUG: Checkbox value
    console.log("✔ Checkbox clicked:", value);

    // 3️⃣ DEBUG: What data we are returning
    console.log("📤 Sending back to DonationPage:");
    console.log("donationData:", location.state?.donationData);

    navigate("/donate",{
      state: {
        donationData: location.state?.donationData || {},
        declarationChecked: value,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-4xl mx-auto border border-gray-200">
        
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800 tracking-tight">
          {data?.title}
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line px-2">
          {data?.content}
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <input
            type="checkbox"
            checked={checked}
            className="w-6 h-6 rounded accent-green-600 cursor-pointer"
            onChange={(e) => handleAccept(e.target.checked)}
          />
          <span className="text-gray-900 text-lg font-medium">
            I Accept & Agree
          </span>
        </div>
      </div>
    </div>
  );
}

