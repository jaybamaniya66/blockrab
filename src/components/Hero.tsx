import { useEffect, useState } from "react";

const services = [
  { name: "Web Development"},
  { name: "DevOps Excellence"},
  { name: "Blockchain Service"},
  { name: "Fullstack Development"},
  { name: "AI Agents"},
  { name: "Cloud Infrastructure"},
  // Add more as needed
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on page load
    setTimeout(handleScroll, 100);
    
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % services.length);
        setAnimate(true);
      }, 50);
    }, 2500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (    <section className="relative flex flex-col items-center justify-center overflow-hidden pt-20 md:pt-28 mt-14 md:mt-20">

      {/* Logo */}
      {/* <div className="mb-6">
        <img src="/path/to/logo.png" alt="Logo" className="mx-auto h-12" />
      </div> */}

      {/* Headline */}
      <h1 className="text-4xl md:text-6xl max-w-7xl  font-bold text-center mb-10 flex flex-wrap justify-center items-center gap-3">
        Transform Your Business With Modern Technologies
          <span
            className={`inline-block border-2 border-black-500 rounded-xl px-4 py-2 bg-white/70 dark:bg-black/60 shadow-md text-gradient font-bold text-4xl md:text-6xl mt-6 pb-2 ${animate ? "animate-slide-up" : ""}`}
          >
            {services[index].name}
          </span>
        {/* <br /> */}
      </h1>

      {/* Subheadline */}
      <p className="text-center text-gray-600 text-xl max-w-3xl mx-auto mt-4 mb-6">
        We deliver cutting-edge solutions in DevOps, AI, Cloud Infrastructure, and Full-Stack Development to drive your digital transformation.
      </p>

      {/* Social Buttons */}
      <div className="flex gap-4 mt-10 mb-20">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9664954421"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold shadow-lg hover:bg-[#1ebe5d] transition-all duration-200 focus:ring-2 focus:ring-[#25D366] focus:outline-none"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.824-2.05A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-2.09 0-4.09-.51-5.824-1.41l-.416-.22-4.65 1.22 1.24-4.53-.27-.43A9.96 9.96 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.94 1.13-.17.2-.35.22-.64.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.27 1.23.43 1.65.55.69.22 1.32.19 1.81.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z"/>
          </svg>
          WhatsApp
        </a>
        <a 
            onClick={() => window.open('https://wa.me/9664954421', '_blank', 'noopener,noreferrer')}
            href="#" 
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold shadow-lg hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transition-all duration-200 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          aria-label="Visit Instagram"
          >
            Contact Us
          </a>
        {/* Instagram Button */}
        {/* <a
          href="https://www.instagram.com/blockrabbits?igsh=MXFuOHFzb3J4NTFudA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold shadow-lg hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transition-all duration-200 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          aria-label="Visit Instagram"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.1C388.7 9.9 357.3 1.7 322 0 286.7-1.7 256.3 6.5 231 32.8c-25.3 26.3-33.5 56.7-35.2 92-1.7 35.3 6.5 65.7 32.8 91.1 26.3 25.3 56.7 33.5 92 35.2 35.3 1.7 66.7-6.5 92.1-32.8 25.3-26.3 33.5-56.7 35.2-92zm-48.1 218.7c-7.1 17.8-20.8 31.5-38.6 38.6-26.2 10.5-88.2 8.1-118.8 8.1s-92.6 2.4-118.8-8.1c-17.8-7.1-31.5-20.8-38.6-38.6-10.5-26.2-8.1-88.2-8.1-118.8s-2.4-92.6 8.1-118.8c7.1-17.8 20.8-31.5 38.6-38.6C131.4 9.9 193.4 12.3 224 12.3s92.6-2.4 118.8 8.1c17.8 7.1 31.5 20.8 38.6 38.6 10.5 26.2 8.1 88.2 8.1 118.8s2.4 92.6-8.1 118.8z"/>
          </svg>
          Instagram
        </a> */}
      </div>

      {/* Mobile Screenshots with Decorative Background */}
      {/* <div className="relative flex justify-center items-end mt-2 mb-4">
        <img src="/path/to/screen1.png" alt="App 1" className="h-72 mx-2 rounded-2xl shadow-lg" />
        <img src="/path/to/screen2.png" alt="App 2" className="h-80 mx-2 rounded-2xl shadow-2xl border-4 border-white" />
        <img src="/path/to/screen3.png" alt="App 3" className="h-72 mx-2 rounded-2xl shadow-lg" />
      </div> */}


            {/* Whatup glowing item*/}
            <a href="https://wa.me/9664954421" target="_blank" rel="noreferrer noopener" className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25d366]">
  <div className="absolute z-10 top-0 left-0 w-full h-full rounded-full bg-[#25d366] animate-ping"></div>
  <div className="relative z-20">
    <svg fill="#fff" height="24px" width="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 308.00 308.00" xmlSpace="preserve" stroke="#fff" transform="matrix(1, 0, 0, 1, 0, 0)">
          <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"/> 
          <path d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"/>
    </svg>
  </div>
</a>
    </section>
  );
};

export default Hero;
