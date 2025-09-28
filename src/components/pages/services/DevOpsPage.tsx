import {useEffect} from "react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";

const DevOpsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <SEO 
                title="DevOps Excellence | NexGen Technology Solutions"
                description="Our DevOps services streamline your development pipeline, improve collaboration, and accelerate delivery with CI/CD, infrastructure as code, and monitoring solutions."
                keywords="devops, CI/CD, infrastructure as code, monitoring, automation, deployment"
                ogTitle="DevOps Excellence | NexGen"
                ogDescription="Streamline your development pipeline and accelerate delivery with our DevOps solutions"
                ogImage="/images/og-devops.jpg"
                canonicalUrl="https://yourdomain.com/services/devops"
            />
            <JsonLd 
                type="Service"
                data={{
                    name: "DevOps Excellence",
                    provider: {
                        '@type': 'Organization',
                        name: 'NexGen'
                    },
                    description: "Our DevOps services streamline your development pipeline, improve collaboration, and accelerate delivery.",
                    areaServed: "Worldwide",
                    serviceType: "DevOps"
                }}
            />
            <Navigation />
            
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-techblue-900/10 via-tealteal-900/10 to-techblue-800/10 dark:from-techblue-900/20 dark:via-tealteal-900/20 dark:to-techblue-800/20 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-techblue-800 dark:text-techblue-200">
                        DevOps Excellence
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                        Streamline your development pipeline, improve collaboration, and accelerate delivery with our comprehensive DevOps solutions. We help organizations achieve faster, more reliable software delivery through automation, monitoring, and best practices.
                    </p>
                </div>
            </section>

            {/* What Are DevOps Solutions Section */}
            <section className="py-16 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-techblue-700 dark:text-techblue-300 text-center">
                        What Are DevOps Solutions?
                    </h2>
                    <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                        <p className="mb-4">
                            DevOps solutions bridge the gap between development and operations, creating a culture of collaboration and continuous improvement. Our DevOps services combine automation, monitoring, and best practices to enable faster, more reliable software delivery while maintaining high quality and security standards.
                        </p>
                        <p>
                            We implement modern DevOps practices including CI/CD pipelines, infrastructure as code, automated testing, and comprehensive monitoring to help your organization achieve operational excellence and competitive advantage.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-techblue-700 dark:text-techblue-300 text-center">
                        Our DevOps Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* CI/CD Pipelines */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">CI/CD Pipelines</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Automated Builds
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Continuous Testing
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Automated Deployment
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Release Management
                                </li>
                            </ul>
                        </div>

                        {/* Infrastructure as Code */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Infrastructure as Code</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Terraform Implementation
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    CloudFormation
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Ansible Automation
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Configuration Management
                                </li>
                            </ul>
                        </div>

                        {/* Monitoring & Observability */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Monitoring & Observability</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Application Monitoring
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Infrastructure Monitoring
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Log Management
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Alerting Systems
                                </li>
                            </ul>
                        </div>

                        {/* Container Orchestration */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Container Orchestration</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Kubernetes Management
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Docker Implementation
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Service Mesh
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Microservices Architecture
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-16 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-techblue-700 dark:text-techblue-300 text-center">
                        Industries We Serve
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Technology */}
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Technology</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>SaaS Applications</li>
                                <li>Platform Development</li>
                                <li>API Management</li>
                                <li>Cloud Services</li>
                            </ul>
                        </div>

                        {/* Finance */}
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Finance</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Banking Systems</li>
                                <li>Payment Processing</li>
                                <li>Risk Management</li>
                                <li>Compliance Solutions</li>
                            </ul>
                        </div>

                        {/* Healthcare */}
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Healthcare</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>EHR Systems</li>
                                <li>Telemedicine Platforms</li>
                                <li>Medical Devices</li>
                                <li>Patient Portals</li>
                            </ul>
                        </div>

                        {/* E-commerce */}
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">E-commerce</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Online Marketplaces</li>
                                <li>Inventory Systems</li>
                                <li>Order Processing</li>
                                <li>Customer Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-techblue-700 dark:text-techblue-300 text-center">
                        Our DevOps Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                            <div className="text-4xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Assessment & Planning</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Current State Analysis</li>
                                <li>Tool Evaluation</li>
                                <li>Process Mapping</li>
                                <li>Strategy Development</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                            <div className="text-4xl mb-4">⚙️</div>
                            <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Implementation</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Pipeline Setup</li>
                                <li>Infrastructure Automation</li>
                                <li>Monitoring Configuration</li>
                                <li>Security Implementation</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                            <div className="text-4xl mb-4">📈</div>
                            <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Optimization & Support</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Performance Tuning</li>
                                <li>Continuous Improvement</li>
                                <li>Team Training</li>
                                <li>Ongoing Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-techblue-500 to-tealteal-500 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Ready to Transform Your DevOps?</h2>
                    <p className="mb-8 text-lg max-w-2xl mx-auto">
                        Contact us today to discuss your DevOps transformation and start accelerating your software delivery pipeline.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <a
                            href="https://wa.me/9664954421"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 bg-white text-techblue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1"
                        >
                            Get Started
                        </a>
                        <a
                            href="mailto:support@blockrabbits.com"
                            className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            Email Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DevOpsPage;
