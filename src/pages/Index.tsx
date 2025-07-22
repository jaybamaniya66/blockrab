import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import JsonLd from "../components/JsonLd";

const Index = () => {
  useEffect(() => {
    // Enhanced scroll animation logic
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.8) {
          element.classList.add('animate-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SEO 
        title="NexGen - Next Generation Technology Solutions"
        description="NexGen provides cutting-edge technology solutions including AI, blockchain, cloud infrastructure, and full-stack development services."
        keywords="AI, blockchain, cloud, devops, web development, full-stack development"
        ogImage="/images/og-home.jpg"
      />
      <JsonLd 
        type="Organization"
        data={{
          name: "NexGen",
          url: "https://yourdomain.com",
          logo: "https://yourdomain.com/logo.png",
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-123-456-7890',
            contactType: 'customer service'
          }
        }}
      />
      <JsonLd 
        type="WebSite"
        data={{
          name: "NexGen - Next Generation Technology Solutions",
          url: "https://yourdomain.com",
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://yourdomain.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }}
      />
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
