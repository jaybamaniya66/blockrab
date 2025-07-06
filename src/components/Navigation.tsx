import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

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
                <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black dark:after:bg-white hover:after:w-full after:transition-all after:duration-300">
                Home
              </Link>
                <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black dark:after:bg-white hover:after:w-full after:transition-all after:duration-300">
                  Services
                </a>

                <a href="#case-studies" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black dark:after:bg-white hover:after:w-full after:transition-all after:duration-300">
                 Testimonial
                </a>
                <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black dark:after:bg-white hover:after:w-full after:transition-all after:duration-300">
                  About us
                </a>
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
