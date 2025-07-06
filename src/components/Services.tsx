import React from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: "🚀",
      title: "DevOps Excellence",
      description: "Streamline your development and operations with our comprehensive DevOps solutions.",
      link: "/services/devops"
    },
    {
      icon: "🤖",
      title: "AI Agents",
      description: "Leverage the power of artificial intelligence to automate and optimize your business processes.",
      link: "/services/ai-agents"
    },
    {
      icon: "☁️",
      title: "Cloud Infrastructure",
      description: "Build scalable and reliable cloud solutions that grow with your business needs.",
      link: "/services/cloud-infrastructure"
    },
    {
      icon: "💻",
      title: "Full-Stack Development",
      description: "End-to-end web and mobile applications built with modern technologies and best practices.",
      link: "/services/full-stack-development"
    },
    {
      icon: "🌐",
      title: "Web Development",
      description: "Custom websites and web applications that deliver exceptional user experiences.",
      link: "/services/web-development"
    },
    {
      icon: "⛓️",
      title: "Blockchain Solutions",
      description: "Innovative blockchain applications and smart contracts for the decentralized future.",
      link: "/services/blockchain-solutions"
    }
  ];

  return (
    <section id="services" className="section-padding relative">
      {/* Background decorations */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-black/30 dark:bg-white/30 blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gray-600/30 dark:bg-gray-400/30 blur-3xl -z-10"></div>

      <div className="container mx-auto ">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gradient-to-r from-black/10 to-gray-600/10 text-black dark:text-white rounded-full">
            Our Services
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-black dark:text-white">
            Comprehensive <span className="text-black dark:text-white">Technology Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer a complete suite of technology services designed to transform your business and drive digital innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to transform your business with cutting-edge technology?
          </p>
          <Link
            to="/services/devops"
            className="primary-button inline-flex items-center gap-2"
          >
            Explore All Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
