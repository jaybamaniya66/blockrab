import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";

const BlockchainSolutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black/10 via-gray-800/10 to-black/10 dark:from-white/10 dark:via-gray-200/10 dark:to-white/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white">
            Blockchain <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We develop innovative blockchain applications and smart contracts that provide secure, transparent, and decentralized solutions for modern businesses.
          </p>
        </div>
      </section>

      {/* What is Blockchain Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            What is Blockchain Technology?
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            <p className="mb-4">
              Blockchain is a distributed ledger technology that enables secure, transparent, and tamper-proof record-keeping. Our blockchain solutions leverage this technology to create decentralized applications that eliminate intermediaries and provide unprecedented levels of security and trust.
            </p>
            <p>
              We help businesses harness the power of blockchain to streamline operations, reduce costs, and create new revenue streams through innovative decentralized applications.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-black dark:text-white text-center">
            Our Blockchain Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Contract Development */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Smart Contract Development</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Solidity & Vyper Contracts
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  DeFi Protocols
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  NFT Marketplaces
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  DAO Governance
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Security Audits
                </li>
              </ul>
            </div>

            {/* DApp Development */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">DApp Development</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Web3 Integration
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Wallet Connectivity
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Decentralized Storage
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Cross-chain Solutions
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  User Experience Design
                </li>
              </ul>
            </div>

            {/* Token Development */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Token Development</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  ERC-20 Tokens
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  ERC-721 NFTs
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  ERC-1155 Multi-tokens
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Token Economics
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Token Launch Strategy
                </li>
              </ul>
            </div>

            {/* Blockchain Infrastructure */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Blockchain Infrastructure</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Private Blockchain Networks
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Consortium Networks
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Node Management
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Network Security
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Performance Optimization
                </li>
              </ul>
            </div>

            {/* DeFi Solutions */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">DeFi Solutions</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Lending Platforms
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  DEX Development
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Yield Farming Protocols
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Liquidity Pools
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Automated Market Makers
                </li>
              </ul>
            </div>

            {/* Consulting & Strategy */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Consulting & Strategy</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Blockchain Strategy
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Use Case Analysis
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Technology Selection
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Regulatory Compliance
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Implementation Roadmap
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-black dark:text-white text-center">
            Industries We Transform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Finance */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Finance</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Cross-border Payments</li>
                <li>Asset Tokenization</li>
                <li>Trade Finance</li>
                <li>Insurance Claims</li>
              </ul>
            </div>

            {/* Supply Chain */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Supply Chain</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Product Tracking</li>
                <li>Authenticity Verification</li>
                <li>Inventory Management</li>
                <li>Supplier Compliance</li>
              </ul>
            </div>

            {/* Healthcare */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Healthcare</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Medical Records</li>
                <li>Drug Traceability</li>
                <li>Clinical Trials</li>
                <li>Patient Data Security</li>
              </ul>
            </div>

            {/* Real Estate */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Real Estate</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Property Tokenization</li>
                <li>Title Management</li>
                <li>Rental Agreements</li>
                <li>Fractional Ownership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-black dark:text-white text-center">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-black rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Discovery</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Use Case Analysis</li>
                <li>Technology Selection</li>
                <li>Architecture Planning</li>
                <li>Regulatory Review</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-black rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Development</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Smart Contract Development</li>
                <li>Frontend Integration</li>
                <li>Backend Services</li>
                <li>Testing & QA</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-black rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Security</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Security Audits</li>
                <li>Penetration Testing</li>
                <li>Code Review</li>
                <li>Vulnerability Assessment</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-black rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Deployment</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Mainnet Deployment</li>
                <li>User Training</li>
                <li>Documentation</li>
                <li>Ongoing Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 text-white dark:text-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Blockchain Solutions?</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Contact us today to discuss how blockchain technology can transform your business and create new opportunities for growth and innovation.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="https://wa.me/9664954421"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-semibold rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1"
            >
              Get Started
            </a>
            <a
              href="mailto:support@blockrabbits.com"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white dark:border-black text-white dark:text-black font-semibold rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300 hover:-translate-y-1"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainSolutions; 