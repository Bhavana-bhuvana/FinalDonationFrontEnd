import React from "react";

const AdminInstructions = () => {
  return (
    <div className="min-h-screen bg-heroBG text-text py-10 px-6 sm:px-12 lg:px-20">
      <h1 className="text-3xl font-bold text-coffee-brown mb-8">Admin Panel Instructions</h1>

      <div className="space-y-10 max-w-5xl">
        {/* Section 1: About the Admin Panel */}
        <section className="bg-white/10 p-6 rounded-2xl shadow-md border border-gray-700">
          <h2 className="text-2xl font-semibold text-coffee-brown mb-3"> About the Admin Panel</h2>
          <p>
            The admin has access to four main pages within the dashboard:
            <b> Home Page, Filter Donors, Privacy Policy, and Declaration.</b>
          </p>
        </section>

        {/* Section 2: Home Page */}
        <section className="bg-white/10 p-6 rounded-2xl shadow-md border border-gray-700">
          <h2 className="text-2xl font-semibold text-coffee-brown mb-3"> Home Page</h2>
          <p>
            The Home Page gives the admin full control over the website’s displayed content.
            The first section is the <b>Hero Section</b>, where the admin can:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Change the background image.</li>
            <li>Edit the main title, subtitle, and the small message box text.</li>
          </ul>
          <p className="mt-4">
            Below that is the <b>Publications Component</b>:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Edit any publication’s image, title, text, and information.</li>
            <li>Delete existing publications.</li>
            <li>Add entirely new publication cards.</li>
            <li>Save changes — updates appear instantly to users.</li>
            <li>
              Only a few publications are shown on the homepage; click “View All” or use the
              navigation bar to open the full Publications page.
            </li>
            <li>
              Clicking a publication opens a <b>detail page</b> displaying its complete
              information.
            </li>
          </ul>

          <p className="mt-4 italic">
             The same behavior applies to the <b>Press Releases</b> and <b>Programmes</b> components.
          </p>
        </section>

        {/* Section 3: Filter Donors */}
        <section className="bg-white/10 p-6 rounded-2xl shadow-md border border-gray-700">
          <h2 className="text-2xl font-semibold text-coffee-brown mb-3"> Filter Donors</h2>
          <p>
            This page shows all donor information. The admin can search or filter donor data by:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Donor name or ID</li>
            <li>Field or category</li>
            <li>ID type</li>
            <li>Donation frequency</li>
            <li>Payment mode</li>
            <li>Date range</li>
            <li>Amount type</li>
            <li>Or simply view all donors at once.</li>
          </ul>
        </section>

        {/* Section 4: Privacy Policy */}
        <section className="bg-white/10 p-6 rounded-2xl shadow-md border border-gray-700">
          <h2 className="text-2xl font-semibold text-coffee-brown mb-3"> Privacy Policy</h2>
          <p>
            On this page, the admin can scroll through the full Privacy Policy text, make edits
            directly, and <b>save the updated policy</b>. These changes will immediately reflect
            on the live website.
          </p>
        </section>

        {/* Section 5: Declaration */}
        <section className="bg-white/10 p-6 rounded-2xl shadow-md border border-gray-700">
          <h2 className="text-2xl font-semibold text-coffee-brown mb-3"> Declaration</h2>
          <p>
            The Declaration section allows the admin to edit both the <b>title</b> and the{" "}
            <b>content</b> of the declaration. Once saved, these updates will appear on the
            user-facing website instantly.
          </p>
        </section>

        {/* Section 6: Notes */}
        <section className="bg-white/10 p-6 rounded-2xl shadow-md border border-gray-700">
          <h2 className="text-2xl font-semibold text-coffee-brown mb-3"> Additional Notes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Always save your work after editing.</li>
            <li>Preview changes on the main website after saving.</li>
            <li>Use consistent images and color themes for visual balance.</li>
            <li>Log out after use for security.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AdminInstructions;
