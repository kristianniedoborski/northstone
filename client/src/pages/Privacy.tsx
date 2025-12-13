import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#ffffff",
              backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
                <span className="w-2 h-2 bg-brand-accent rounded-full mr-2"></span>
                <span className="text-xs font-semibold text-brand-900 uppercase tracking-wide">
                  Privacy Policy
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-brand-900 font-serif font-bold leading-tight mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-gray-600">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    1. General Information
                  </h2>
                  <p className="mb-4">
                    Northstone ("we", "us", or "our") is committed to protecting your privacy and ensuring the confidentiality of your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p>
                    This Privacy Policy is designed to comply with the General Data Protection Regulation (GDPR) (Regulation (EU) 2016/679) and other applicable data protection laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    2. Data Controller
                  </h2>
                  <p className="mb-4">
                    The data controller responsible for the processing of your personal data is:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-sm mb-4">
                    <p className="font-semibold text-brand-900 mb-2">Northstone</p>
                    <p className="mb-1">Copenhagen, Denmark</p>
                    <p className="mb-1">Email: hello@northstone.com</p>
                  </div>
                  <p>
                    If you have any questions about this Privacy Policy or our data processing practices, please contact us at hello@northstone.com.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    3. Types of Personal Data We Collect
                  </h2>
                  <p className="mb-4">We may collect and process the following types of personal data:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Contact Information:</strong> Name, email address, phone number, company name, and job title</li>
                    <li><strong>Communication Data:</strong> Information you provide when contacting us, including messages, inquiries, and feedback</li>
                    <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent on pages</li>
                    <li><strong>Technical Data:</strong> Device information, operating system, browser version, and other technical identifiers</li>
                    <li><strong>Marketing Data:</strong> Your preferences for receiving marketing communications from us</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    4. Legal Basis for Processing
                  </h2>
                  <p className="mb-4">We process your personal data based on the following legal grounds under Article 6 of the GDPR:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Consent (Art. 6(1)(a) GDPR):</strong> When you have given your explicit consent for specific processing activities, such as marketing communications</li>
                    <li><strong>Contract Performance (Art. 6(1)(b) GDPR):</strong> To perform our contractual obligations or take steps at your request before entering into a contract</li>
                    <li><strong>Legal Obligation (Art. 6(1)(c) GDPR):</strong> To comply with legal obligations, such as tax and accounting requirements</li>
                    <li><strong>Legitimate Interests (Art. 6(1)(f) GDPR):</strong> For our legitimate business interests, such as improving our services, website security, and fraud prevention</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    5. How We Use Your Personal Data
                  </h2>
                  <p className="mb-4">We use your personal data for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>To provide and maintain our services</li>
                    <li>To respond to your inquiries and provide customer support</li>
                    <li>To send you marketing communications (with your consent)</li>
                    <li>To improve our website and services</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>To analyze website usage and trends</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    6. Data Retention
                  </h2>
                  <p className="mb-4">
                    We will retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your personal data, we will securely delete or anonymize it.
                  </p>
                  <p>
                    Generally, we retain personal data for the duration of our business relationship plus any additional period required by applicable laws (e.g., tax and accounting requirements).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    7. Your Rights Under GDPR
                  </h2>
                  <p className="mb-4">As a data subject, you have the following rights:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Right of Access (Art. 15 GDPR):</strong> You have the right to obtain confirmation as to whether we process your personal data and to access that data</li>
                    <li><strong>Right to Rectification (Art. 16 GDPR):</strong> You have the right to have inaccurate personal data corrected</li>
                    <li><strong>Right to Erasure (Art. 17 GDPR):</strong> You have the right to request deletion of your personal data under certain circumstances</li>
                    <li><strong>Right to Restrict Processing (Art. 18 GDPR):</strong> You have the right to restrict the processing of your personal data</li>
                    <li><strong>Right to Data Portability (Art. 20 GDPR):</strong> You have the right to receive your personal data in a structured, commonly used format</li>
                    <li><strong>Right to Object (Art. 21 GDPR):</strong> You have the right to object to processing of your personal data based on legitimate interests</li>
                    <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you have the right to withdraw your consent at any time</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us at hello@northstone.com. We will respond to your request within one month.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    8. Data Transfers Outside the EU
                  </h2>
                  <p className="mb-4">
                    Your personal data is primarily processed within the European Economic Area (EEA). If we transfer your personal data outside the EEA, we will ensure appropriate safeguards are in place, such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Standard Contractual Clauses approved by the European Commission</li>
                    <li>Adequacy decisions by the European Commission</li>
                    <li>Other appropriate safeguards as required by GDPR</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    9. Cookies and Tracking Technologies
                  </h2>
                  <p className="mb-4">
                    We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files stored on your device.
                  </p>
                  <p className="mb-4">
                    We use cookies for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Essential cookies: Required for the website to function properly</li>
                    <li>Analytics cookies: To understand how visitors use our website</li>
                    <li>Marketing cookies: To deliver relevant advertisements (with your consent)</li>
                  </ul>
                  <p>
                    You can control cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    10. Data Security
                  </h2>
                  <p className="mb-4">
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Staff training on data protection</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    11. Third-Party Services
                  </h2>
                  <p className="mb-4">
                    We may use third-party service providers to help us operate our website and provide our services. These providers may have access to your personal data only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                  </p>
                  <p>
                    Examples include hosting providers, analytics services, and email service providers. We ensure all third-party providers comply with GDPR requirements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    12. Children's Privacy
                  </h2>
                  <p>
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have collected personal data from a child, please contact us immediately.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    13. Changes to This Privacy Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    14. Supervisory Authority
                  </h2>
                  <p className="mb-4">
                    If you believe that our processing of your personal data violates the GDPR, you have the right to lodge a complaint with a supervisory authority, in particular in the Member State of your habitual residence, place of work, or place of the alleged infringement.
                  </p>
                  <p>
                    In Denmark, the supervisory authority is the Danish Data Protection Agency (Datatilsynet).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    15. Contact Us
                  </h2>
                  <p className="mb-4">
                    If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-sm">
                    <p className="font-semibold text-brand-900 mb-2">Northstone</p>
                    <p className="mb-1">Email: hello@northstone.com</p>
                    <p>Copenhagen, Denmark</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
