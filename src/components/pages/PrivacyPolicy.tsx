import { useEffect } from "react";
import Navigation from "@/components/Navigation";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black/10 via-gray-800/10 to-black/10 dark:from-white/10 dark:via-gray-200/10 dark:to-white/10 py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white animate-fade-in">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">1. Introduction</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                BlockRabbits ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">2. Information We Collect</span>
              </h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Personal Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and job title</li>
                <li>Project requirements and specifications</li>
                <li>Communication preferences</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Automatically Collected Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                When you visit our website, we automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Cookies and Tracking Technologies</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve our website functionality</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">3. How We Use Your Information</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Communicating with you about our services</li>
                <li>Processing payments and transactions</li>
                <li>Improving our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
                <li>Marketing and promotional activities (with your consent)</li>
              </ul>
            </div>

            {/* Information Sharing and Disclosure */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">4. Information Sharing and Disclosure</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">5. Data Security</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </div>

            {/* Your Rights and Choices */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">6. Your Rights and Choices</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">7. Third-Party Services</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We use the following third-party services:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Facebook Pixel for advertising tracking</li>
                <li>WhatsApp Business API for customer communication</li>
                <li>Payment processors for secure transactions</li>
              </ul>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">8. Children's Privacy</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">9. International Data Transfers</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">10. Changes to This Policy</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">11. Contact Information</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><strong>Company:</strong> BlockRabbits</p>
                  <p><strong>Email:</strong> privacy@blockrabbits.com</p>
                  <p><strong>Phone:</strong> +91 9664954421</p>
                  <p><strong>Address:</strong> [Your Business Address]</p>
                  <p><strong>Website:</strong> https://blockrabbits.com</p>
                </div>
              </div>
            </div>

            {/* GDPR Compliance */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">12. GDPR Compliance</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you are a resident of the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>Right to be informed about data processing</li>
                <li>Right of access to personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Rights related to automated decision making</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To exercise your GDPR rights, please contact us using the information provided above.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
                  🗑️ Request Data Deletion
                </h3>
                <p className="text-blue-700 dark:text-blue-300 mb-4">
                  If you wish to delete your data collected by this app, you can:
                </p>
                <div className="space-y-3">
                  <p className="text-blue-700 dark:text-blue-300">
                    <strong>Option 1:</strong> Use our dedicated deletion request form
                  </p>
                  <a
                    href="/delete-data"
                    className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Request Data Deletion
                  </a>
                  <p className="text-blue-700 dark:text-blue-300">
                    <strong>Option 2:</strong> Email us at support@blockrabbits.com with your Facebook ID
                  </p>
                </div>
              </div>
            </div>

            {/* California Privacy Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">13. California Privacy Rights</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                California residents have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>Right to know what personal information is collected</li>
                <li>Right to know whether personal information is sold or disclosed</li>
                <li>Right to say no to the sale of personal information</li>
                <li>Right to access personal information</li>
                <li>Right to equal service and price</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300">
                To exercise your CCPA rights, please contact us using the information provided above.
              </p>
            </div>

            {/* Facebook Page Verification Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">14. Facebook Page Verification</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For Facebook page verification purposes, we confirm the following:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><strong>Business Name:</strong> BlockRabbits</p>
                  <p><strong>Business Type:</strong> Technology Services Company</p>
                  <p><strong>Services Offered:</strong> Web Development, Mobile Development, DevOps, Cloud Services, AI Solutions, Blockchain Development</p>
                  <p><strong>Contact Information:</strong> +91 9664954421</p>
                  <p><strong>Website:</strong> https://blockrabbits.com</p>
                  <p><strong>Email:</strong> contact@blockrabbits.com</p>
                  <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST</p>
                  <p><strong>Service Areas:</strong> Worldwide</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 text-white dark:text-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Questions About Our Privacy Policy?</h2>
          <p className="text-xl mb-8 opacity-90">
            We're here to help. Contact us if you have any questions about how we protect your privacy.
          </p>
          <a
            href="https://wa.me/9664954421"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-semibold rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 