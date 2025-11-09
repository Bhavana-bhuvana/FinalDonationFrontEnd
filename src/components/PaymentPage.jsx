import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";

function PaymentPage() {
  const { state: donationData } = useLocation();
  const navigate = useNavigate();
  const API_BASE = `${config.API_URL}`;

  useEffect(() => {
    if (!donationData) {
      navigate("/");
      return;
    }

    const loadRazorpayScript = () =>
      new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });

    const startPayment = async () => {
      const res = await loadRazorpayScript();
      if (!res) {
        alert("Failed to load Razorpay SDK ❌");
        return;
      }

      try {
        // ✅ Create order on backend
        const orderResponse = await axios.post(`${API_BASE}/payment/order`, {
          amount: donationData.amount,
          currency: "INR",
        });

        const order = orderResponse.data;

        // ✅ Configure Razorpay
        const options = {
          key: config.Razor_Pay, // ✅ Correct key from .env
          amount: order.amount,
          currency: order.currency,
          name: "Feed The Hunger Foundation",
          description: "Donation Payment",
          order_id: order.id,
          prefill: {
            name: `${donationData.firstName} ${donationData.lastName}`,
            email: donationData.email,
            contact: donationData.mobile,
          },
          theme: { color: "#3399cc" },
          handler: async function (response) {
            try {
              const verifyRes = await axios.post(`${API_BASE}/payment/verify`, {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                donorData: donationData,
              });

              if (verifyRes.data.status === "success") {
                alert("Payment successful ✅ Thank you for your donation!");
                navigate("/thankyou", {
                  state: {
                    ...donationData,
                    paymentId: response.razorpay_payment_id,
                  },
                });
              } else {
                alert("Payment verification failed ❌");
              }
            } catch (err) {
              console.error("Payment verification error:", err);
              alert("Verification failed ❌");
            }
          },
          modal: {
            ondismiss: function () {
              alert("Payment cancelled");
              navigate("/");
            },
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } catch (err) {
        console.error("Error starting payment:", err);
        alert("Unable to start payment ❌");
      }
    };

    startPayment();
  }, [donationData, navigate, API_BASE]);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-2">Processing Payment...</h2>
        <p className="text-gray-600">
          Please wait, redirecting you to Razorpay checkout.
        </p>
      </div>
    </div>
  );
}

export default PaymentPage;
