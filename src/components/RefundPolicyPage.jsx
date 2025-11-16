// import React from "react";
// import Footer from "../components/Footer";

//  function RefundPolicyPage() {
//   return (
//     <>

//       <div className="min-h-screen bg-[#f5f5f5] py-16 px-4">
//         <div className="bg-white rounded-2xl shadow-md p-10 max-w-4xl mx-auto">

//           <h1 className="text-3xl font-bold mb-6">
//             Refund Policy – Feed The Hunger Seva Sangha
//           </h1>

//           <p className="text-gray-700 mb-6 text-lg leading-relaxed">
//             At Feed The Hunger Seva Sangha, we value the trust you place in us through your generous contributions. 
//             We are committed to maintaining complete transparency in all our operations, including donation handling 
//             and refund practices.
//           </p>

//           <hr className="my-6" />

//           <h2 className="text-xl font-semibold mb-2">1. Donations Are Non-Refundable</h2>
//           <p className="text-gray-700 mb-4 leading-relaxed">
//             All donations made to Feed The Hunger Seva Sangha are voluntary and non-refundable. 
//             Since the funds are used immediately for our charitable initiatives, we cannot cancel or refund donations once processed.
//           </p>

//           <hr className="my-6" />

//           <h2 className="text-xl font-semibold mb-2">2. When Refunds May Be Considered</h2>
//           <p className="text-gray-700 mb-2 leading-relaxed">Refunds will be processed only in the following exceptional cases:</p>
//           <ul className="list-disc ml-6 space-y-2 text-gray-700 leading-relaxed">
//             <li>Duplicate payment (accidental double transaction)</li>
//             <li>Technical error causing incorrect amount deduction</li>
//             <li>Failed transaction where amount was debited</li>
//             <li>Unauthorized / fraudulent transaction, subject to verification</li>
//           </ul>

//           <p className="text-gray-700 mt-2 mb-4">
//             All such requests must include proof and will be reviewed individually.
//           </p>

//           <hr className="my-6" />

//           <h2 className="text-xl font-semibold mb-2">3. Refund Request Timeframe</h2>
//           <p className="text-gray-700 mb-4 leading-relaxed">
//             Refund requests must be raised within <strong>72 hours</strong> of the donation.
//             Requests submitted after this timeframe may not be eligible for review.
//           </p>

//           <hr className="my-6" />

//           <h2 className="text-xl font-semibold mb-2">4. How to Request a Refund</h2>
//           <p className="text-gray-700 mb-4 leading-relaxed">
//             To request a refund, contact us at:
//           </p>

//           <p className="text-gray-800 font-medium">
//             Email: <span className="font-normal">feedthehunger.india2025@gmail.com</span>
//           </p>
//           <p className="text-gray-800 font-medium mb-4">
//             Phone: <span className="font-normal">8884260100</span>
//           </p>

//           <p className="text-gray-700 mb-4 leading-relaxed">Include the following details:</p>
//           <ul className="list-disc ml-6 space-y-2 text-gray-700 leading-relaxed">
//             <li>Full Name</li>
//             <li>Transaction ID / Payment Reference</li>
//             <li>Donation Amount</li>
//             <li>Date of Payment</li>
//             <li>Screenshot or proof of transaction</li>
//             <li>Reason for requesting refund</li>
//           </ul>

//           <hr className="my-6" />

//           <h2 className="text-xl font-semibold mb-2">5. Refund Processing Timeline</h2>
//           <ul className="list-disc ml-6 space-y-2 text-gray-700 leading-relaxed">
//             <li>If approved, refunds will be processed within 7–10 working days.</li>
//             <li>The amount will be credited only to the same payment method/account used during the donation.</li>
//             <li>No cash refunds will be issued under any circumstances.</li>
//           </ul>

//           <hr className="my-6" />

//           <h2 className="text-xl font-semibold mb-2">6. Cancellation of Recurring Donations / e-Mandate</h2>
//           <ul className="list-disc ml-6 space-y-2 text-gray-700 leading-relaxed">
//             <li>You may cancel by emailing us at least 5 days before the next debit date.</li>
//             <li>Once processed, the current month’s debit cannot be reversed.</li>
//           </ul>

//           <hr className="my-6" />

//           <h2 className="text-xl font-semibold mb-2">7. Policy Updates</h2>
//           <p className="text-gray-700 leading-relaxed">
//             Feed The Hunger Seva Sangha reserves the right to modify this policy at any time to comply with legal 
//             requirements or operational needs. Any updates will be posted on our official website.
//           </p>

//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// } 
// export default RefundPolicyPage;

import React from "react";
import Footer from "../components/Footer";

function RefundPolicyPage() {
  return (
    <>
      <div className="min-h-screen bg-[#f5f5f5] py-16 px-4">
        <div className="bg-white rounded-2xl shadow-md p-10 max-w-4xl mx-auto">

          <h1 className="text-3xl font-bold mb-6">
            Donations Cancellation and Refund Policy – Feed The Hunger Seva Sangha
          </h1>

          {/* ---------------- CANCELLATION ---------------- */}
          <h2 className="text-xl font-semibold mb-3">Cancellation</h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            For cancellation of donations, the donor should email us or call us on:
          </p>

          <p className="text-gray-800 font-medium">
            Phone: <span className="font-normal">8884260100</span>
          </p>
          <p className="text-gray-800 font-medium mb-4">
            Timings: <span className="font-normal">Monday–Friday, 10am–6pm</span>
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>(For cancellation of monthly e-mandate payment for donors)</strong>
            <br />
            The cancellation request must be made before the <strong>27th of the month</strong> 
            for it to take effect from the following month. 
            Requests received after the 27th will take effect in the succeeding month.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            An email confirmation will be sent within <strong>24 working hours</strong> to the donor’s registered email ID.
          </p>

          <hr className="my-6" />

          {/* ---------------- REFUND ---------------- */}
          <h2 className="text-xl font-semibold mb-3">Refund</h2>

          <ul className="list-disc ml-6 space-y-3 text-gray-700 leading-relaxed">

            <li>
              No refunds of donations are made if the donations are based on what the donor signed up for.
            </li>

            <li>
              No refund is made of extra bank charges incurred by the donor in case of cheque or ECS bounce.
            </li>

            <li>
              No refund is processed once a tax certificate has been issued in the donor’s name.
            </li>

            <li>
              A refund is issued only in the case of technical or processing errors made by 
              <strong> FEED THE HUNGER SEVA SANGHA</strong>.
            </li>

            <li>
              A refund is issued only via cheque and is dispatched at the end of the month or at the start 
              of the following month.
            </li>

          </ul>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default RefundPolicyPage;

