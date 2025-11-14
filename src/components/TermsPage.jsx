import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f5f5] py-16 px-4">
        <div className="bg-white rounded-2xl shadow-md p-10 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>

          <ul className="list-disc ml-6 space-y-3 text-gray-800 text-lg">
            <li>Donations accepted only from Indian citizens.</li>
            <li>No donations from corporates or Government bodies.</li>
            <li>Only online payments; no cash allowed.</li>
            <li>Donations help us run programmes and support beneficiaries.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
