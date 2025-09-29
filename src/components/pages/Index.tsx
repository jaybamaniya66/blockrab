import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  // Enhanced scroll animation 
  useEffect(() => {
    // Initial animation for elements in viewport
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('is-visible');
        }
      });
    };

    // Animate elements visible on load with a slight delay for better UX
    setTimeout(() => {
      animateOnScroll();
    }, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navigation />
      <Hero />
      <Services />
      <About />
      {/* Compliance: About this app and data use */}
      <section className="py-16 bg-white dark:bg-black" aria-labelledby="about-app-heading">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 id="about-app-heading" className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            About this app
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            BlockRabbits is a technology services company. This website showcases our services and
            lets prospective clients contact us. If you choose to get in touch, we collect only the
            details you provide so we can respond to your inquiry.
          </p>
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">Why we request user data</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you sign in with a provider or submit a form, we may request your name, email and
            message so we can identify you and provide requested services. We do not sell your data.
            Learn how we use and protect information in our
            <Link to="/privacy-policy" className="ml-1 underline font-medium">Privacy Policy</Link>.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link to="/privacy-policy" className="px-5 py-3 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-black">
              View Privacy Policy
            </Link>
            <Link to="/delete-data" className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
              Request Data Deletion
            </Link>
          </div>
        </div>
      </section>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
