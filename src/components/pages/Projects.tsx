import React from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A scalable e-commerce platform with integrated payment gateway and real-time analytics.",
    image: "https://via.placeholder.com/300x180?text=E-Commerce",
    link: "#"
  },
  {
    title: "AI Chatbot",
    description: "Custom AI-powered chatbot for customer support automation.",
    image: "https://via.placeholder.com/300x180?text=AI+Chatbot",
    link: "#"
  },
  {
    title: "Blockchain Wallet",
    description: "A secure blockchain wallet app for digital asset management.",
    image: "https://via.placeholder.com/300x180?text=Blockchain+Wallet",
    link: "#"
  }
];

const Projects = () => (
  <section className="container mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-10 text-center">Our Projects & Work</h1>
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-6 flex-1 flex flex-col">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
            <a href={project.link} className="text-blue-600 hover:underline mt-auto">View Details</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;