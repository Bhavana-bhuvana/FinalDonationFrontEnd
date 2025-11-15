import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

export default function DeclarationPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${config.API_URL}/declaration`)
      .then(res => setData(res.data))
      .catch(() => setData({ title: "Declaration", content: "Unable to load declaration." }));
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#f5f5f5] py-16 px-4">
        <div className="bg-white rounded-2xl shadow-md p-10 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{data?.title}</h1>
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {data?.content}
          </p>
        </div>
      </div>
    </>
  );
}
