import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-black font-bold text-sm">br</span>
            </div>
            <span className="text-xl font-bold text-black dark:text-white">
              <span className="bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 text-transparent bg-clip-text">block</span>
              <span className="text-black dark:text-white">rabbits</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                 <div className="relative group">
                   <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black dark:after:bg-white hover:after:w-full after:transition-all after:duration-300 flex items-center gap-1">
                     Home
                     {/* <ChevronDown className="h-3 w-3" /> */}
                   </a>
                   <div className="fixed top-16 left-0 right-0 w-full h-screen bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40 p-8 overflow-y-auto">
                     {/* Close Button */}
                     <div className="flex justify-end mb-6">
                       <button 
                         className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                         onClick={() => {/* Close logic if needed */}}
                       >
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                         </svg>
                       </button>
                     </div>
                     
                     <div className="max-w-7xl mx-auto">
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                       {/* Services Column */}
                       <div>
                         <h3 className="text-lg font-semibold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                           Our Services
                         </h3>
                         <div className="space-y-3">
                           <a href="#services" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                             DevOps Solutions
                           </a>
                           <a href="#services" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                             Cloud Infrastructure
                           </a>
                           <a href="#services" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                             Data Analytics
                           </a>
                           <a href="#services" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                             AI & Machine Learning
                           </a>
                           <a href="#services" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                             Security Solutions
                           </a>
                         </div>
                       </div>

                       {/* Company Column */}
                       <div>
                         <h3 className="text-lg font-semibold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                           Company
                         </h3>
                         <div className="space-y-3">
                           <a href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                             About Us
                           </a>
                           <a href="#team" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                             Our Team
                           </a>
                           <a href="#careers" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                             Careers
                           </a>
                           <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                             Contact
                           </a>
                           <a href="#blog" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                             Blog
                           </a>
                         </div>
                       </div>

                       {/* Resources Column */}
                       <div>
                         <h3 className="text-lg font-semibold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                           Resources
                         </h3>
                         <div className="space-y-3">
                           <a href="#case-studies" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                             Case Studies
                           </a>
                           <a href="#testimonials" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                             Testimonials
                           </a>
                           <a href="#whitepapers" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                             White Papers
                           </a>
                           <a href="#documentation" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                             Documentation
                           </a>
                           <a href="#support" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                             Support
                           </a>
                         </div>
                       </div>
                     </div>

                     {/* Call to Action Section */}
                     <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                       <div className="flex items-center justify-between">
                         <div>
                           <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                             Ready to get started?
                           </h4>
                           <p className="text-gray-600 dark:text-gray-400 text-sm">
                             Let's discuss your project and see how we can help.
                           </p>
                         </div>
                         <a 
                           onClick={() => window.open('https://wa.me/9664954421', '_blank', 'noopener,noreferrer')}
                           href="#"
                           className="bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 hover:from-gray-800 hover:to-gray-600 dark:hover:from-gray-100 dark:hover:to-gray-400 text-white dark:text-black font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                         >
                           Get Started
                         </a>
                       </div>
                       </div>
                     </div>
                   </div>
                 </div>
                {/* Services Dropdown */}
                <div className="relative group">
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black dark:after:bg-white hover:after:w-full after:transition-all after:duration-300 flex items-center gap-1">
                    Services
                    {/* <ChevronDown className="h-3 w-3" /> */}
                  </a>
                  <div className="fixed top-16 left-0 right-0 w-full h-screen bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40 p-8 overflow-y-auto">
                    <div className="flex justify-end mb-6">
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="max-w-7xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                          <h3 className="text-lg font-semibold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                            DevOps Solutions
                          </h3>
                          <div className="space-y-3">
                            <a href="#devops" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              CI/CD Pipeline Setup
                            </a>
                            <a href="#devops" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Infrastructure as Code
                            </a>
                            <a href="#devops" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Container Orchestration
                            </a>
                            <a href="#devops" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Monitoring & Logging
                            </a>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                            Cloud Services
                          </h3>
                          <div className="space-y-3">
                            <a href="#cloud" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              AWS Solutions
                            </a>
                            <a href="#cloud" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Azure Migration
                            </a>
                            <a href="#cloud" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Google Cloud Platform
                            </a>
                            <a href="#cloud" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Multi-Cloud Strategy
                            </a>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                            Data & AI
                          </h3>
                          <div className="space-y-3">
                            <a href="#data" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Data Analytics
                            </a>
                            <a href="#data" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Machine Learning
                            </a>
                            <a href="#data" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              AI Solutions
                            </a>
                            <a href="#data" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Business Intelligence
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Dropdown */}
                <div className="relative group">
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black dark:after:bg-white hover:after:w-full after:transition-all after:duration-300 flex items-center gap-1">
                    Testimonial
                    {/* <ChevronDown className="h-3 w-3" /> */}
                  </a>
                  <div className="fixed top-16 left-0 right-0 w-full h-screen bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40 p-8 overflow-y-auto">
                    <div className="flex justify-end mb-6">
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="max-w-7xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                          <h3 className="text-lg font-semibold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                            Client Success Stories
                          </h3>
                          <div className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                              <p className="text-gray-700 dark:text-gray-300 italic mb-2">"Blockrabbits design and implement AI agents and automation systems that can handle customer queries, analyze complex data, and integrate across your business stack to drive efficiency and insight."</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">- Dax Bamaniya, Cofounder & CEO, TIGI HR</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                              <p className="text-gray-700 dark:text-gray-300 italic mb-2">"DevOps implementation transformed our deployment process. What used to take days now happens in minutes, with greater reliability and fewer errors. Their team's expertise in automation has been a game-changer for our development workflow."</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">- Keyur Patel, Doctor, Devansh HealthTech</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                            Case Studies
                          </h3>
                          <div className="space-y-3">
                            <a href="#case-study-1" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              E-commerce Platform Migration
                            </a>
                            <a href="#case-study-2" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Healthcare Data Analytics
                            </a>
                            <a href="#case-study-3" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Fintech Security Implementation
                            </a>
                            <a href="#case-study-4" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              AI-Powered Customer Service
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About Us Dropdown */}
                <div className="relative group">
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black dark:after:bg-white hover:after:w-full after:transition-all after:duration-300 flex items-center gap-1">
                    About us
                    <ChevronDown className="h-3 w-3" />
                  </a>
                  <div className="fixed top-16 left-0 right-0 w-full h-screen bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40 p-8 overflow-y-auto">
                    <div className="flex justify-end mb-6">
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="max-w-7xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                          <h3 className="text-lg font-semibold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                            Our Company
                          </h3>
                          <div className="space-y-3">
                            <a href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Our Story
                            </a>
                            <a href="#mission" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Mission & Vision
                            </a>
                            <a href="#values" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Core Values
                            </a>
                            <a href="#leadership" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Leadership Team
                            </a>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                            Careers
                          </h3>
                          <div className="space-y-3">
                            <a href="#careers" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Open Positions
                            </a>
                            <a href="#culture" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Company Culture
                            </a>
                            <a href="#benefits" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Benefits & Perks
                            </a>
                            <a href="#apply" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              How to Apply
                            </a>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                            Contact & Support
                          </h3>
                          <div className="space-y-3">
                            <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Get in Touch
                            </a>
                            <a href="#support" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Technical Support
                            </a>
                            <a href="#partnership" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Partnership Opportunities
                            </a>
                            <a href="#newsletter" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2">
                              Newsletter Signup
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
            <>
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black dark:after:bg-white hover:after:w-full after:transition-all after:duration-300">
                Home
              </Link>
              <Link to="/services/devops" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black dark:after:bg-white hover:after:w-full after:transition-all after:duration-300">
                Services
              </Link>
            </>
          )}
          <a 
            onClick={() => window.open('https://wa.me/9664954421', '_blank', 'noopener,noreferrer')}
            href="#" 
            className="primary-button flex items-center gap-2 py-2.5 px-6 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 hover:from-gray-800 hover:to-gray-600 dark:hover:from-gray-100 dark:hover:to-gray-400 text-white dark:text-black font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact Us
          </a>
        </div>

        {/* Theme Toggle Button */}
        <Button
          variant="outline"
          size="icon"
          className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-md shadow-sm border border-gray-100 dark:border-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700 dark:text-gray-300"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {isHomePage ? (
              <>
                <a
                  href="#services"
                  className="block text-gray-700 dark:text-gray-300 font-medium hover:text-black dark:hover:text-white transition-colors py-3 px-2 border-b border-gray-100 dark:border-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#case-studies"
                  className="block text-gray-700 dark:text-gray-300 font-medium hover:text-black dark:hover:text-white transition-colors py-3 px-2 border-b border-gray-100 dark:border-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Testimonial
                </a>
                <a
                  href="#about"
                  className="block text-gray-700 dark:text-gray-300 font-medium hover:text-black dark:hover:text-white transition-colors py-3 px-2 border-b border-gray-100 dark:border-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About us
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="block text-gray-700 dark:text-gray-300 font-medium hover:text-black dark:hover:text-white transition-colors py-3 px-2 border-b border-gray-100 dark:border-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/services/devops"
                  className="block text-gray-700 dark:text-gray-300 font-medium hover:text-black dark:hover:text-white transition-colors py-3 px-2 border-b border-gray-100 dark:border-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </>
            )}
            <a
              onClick={() => {
                window.open('https://wa.me/9664954421', '_blank', 'noopener,noreferrer');
                setIsMobileMenuOpen(false);
              }}
              href="#"
              className="block text-center py-3 px-4 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 text-white dark:text-black font-medium rounded-lg transition-all duration-300 shadow-md mt-4"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;