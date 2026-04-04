import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: April 4, 2026</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p> 
          Welcome to Edboline Global. We are committed to protecting your personal information and your right to privacy. This Privacy Policy applies to all information collected through our website, which provides educational guides and career opportunities in Nigeria.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our services. This may include contact information provided via email inquiries. We also automatically collect certain information when you visit our site, such as your IP address and browser characteristics.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
        <p>
          We use information collected via our website for a variety of business purposes, including providing updates on Nigerian educational requirements (JAMB), sharing job listings, and responding to user inquiries.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Third-Party Job Applications</h2>
        <p> 
          Edboline Global aggregates job listings from various employers. When you click on a link to apply for a job or contact an employer via an email address provided in our listings, you are providing your information directly to that third party. We are not responsible for the privacy practices of these external organizations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
        <p>
          If you have questions or comments about this policy, you may email us at:{" "}
          <a href="mailto:Contact@edbolineglobal.com" className="text-blue-600 hover:underline">
            Contact@edbolineglobal.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;