import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            These terms govern your use of our services and website. Please read them carefully.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">1. Acceptance of Terms</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Welcome to BlockRabbits. These Terms of Service ("Terms") govern your use of our website, services, and any related applications (collectively, the "Service") operated by BlockRabbits ("we," "our," or "us").
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
              </p>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">2. Service Description</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                BlockRabbits provides technology consulting and development services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>Web and mobile application development</li>
                <li>DevOps and cloud infrastructure services</li>
                <li>AI and machine learning solutions</li>
                <li>Blockchain development and consulting</li>
                <li>Full-stack development services</li>
                <li>Technical consulting and advisory services</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300">
                We reserve the right to modify, suspend, or discontinue any part of our Service at any time without notice.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">3. User Responsibilities</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                When using our Service, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>Provide accurate and complete information when requested</li>
                <li>Use the Service only for lawful purposes</li>
                <li>Not interfere with or disrupt the Service or servers</li>
                <li>Not attempt to gain unauthorized access to any part of the Service</li>
                <li>Respect intellectual property rights</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use the Service to transmit harmful or malicious code</li>
                <li>Maintain the confidentiality of any account credentials</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">4. Intellectual Property Rights</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive property of BlockRabbits and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You retain ownership of any content you provide to us, but by providing such content, you grant us a non-exclusive, royalty-free, worldwide license to use, modify, and distribute such content for the purpose of providing our services.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Any work product created specifically for you under a service agreement will be owned by you upon full payment, unless otherwise specified in the agreement.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">5. Payment Terms</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Payment terms will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>Payment is due according to the terms specified in your service agreement</li>
                <li>Late payments may incur additional charges</li>
                <li>All prices are exclusive of applicable taxes</li>
                <li>We reserve the right to suspend services for non-payment</li>
                <li>Refunds are subject to our refund policy as outlined in service agreements</li>
              </ul>
            </div>

            {/* Service Level Agreement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">6. Service Level Agreement</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We strive to provide high-quality services and will work diligently to meet project deadlines and specifications. However:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>Project timelines are estimates and may be subject to change</li>
                <li>Delays may occur due to factors beyond our control</li>
                <li>We will communicate any significant delays promptly</li>
                <li>Client cooperation and timely feedback are essential for project success</li>
                <li>Specific service levels will be detailed in individual service agreements</li>
              </ul>
            </div>

            {/* Confidentiality */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">7. Confidentiality</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We understand the importance of confidentiality in our business relationships. We agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                <li>Keep all client information strictly confidential</li>
                <li>Not disclose client information to third parties without consent</li>
                <li>Use client information only for the purpose of providing services</li>
                <li>Implement appropriate security measures to protect confidential information</li>
                <li>Return or destroy confidential information upon request</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">8. Limitation of Liability</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To the maximum extent permitted by law, BlockRabbits shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Our total liability to you for any damages arising from or related to these Terms or the Service shall not exceed the amount you paid us for the services in the twelve (12) months preceding the claim.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">9. Indemnification</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                You agree to defend, indemnify, and hold harmless BlockRabbits and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from your use of the Service or violation of these Terms.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">10. Termination</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Upon termination, your right to use the Service will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive termination.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">11. Governing Law</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                These Terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms or the Service shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">12. Changes to Terms</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">13. Contact Information</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><strong>Company:</strong> BlockRabbits</p>
                  <p><strong>Email:</strong> legal@blockrabbits.com</p>
                  <p><strong>Phone:</strong> +91 9664954421</p>
                  <p><strong>Address:</strong> Ahmedabad, Gujarat, India</p>
                  <p><strong>Website:</strong> https://blockrabbits.com</p>
                </div>
              </div>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">14. Severability</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                <span className="gradient-text">15. Entire Agreement</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                These Terms constitute the sole and entire agreement between you and BlockRabbits with respect to the Service and supersede all prior and contemporaneous understandings, agreements, representations, and warranties.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 text-white dark:text-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Questions About Our Terms?</h2>
          <p className="text-xl mb-8 opacity-90">
            We're here to help. Contact us if you have any questions about our terms of service.
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

export default TermsOfService;
