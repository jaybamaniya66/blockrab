import React from "react";

const blogs = [
  {
    title: "How AI is Transforming Businesses",
    excerpt: "Explore the impact of artificial intelligence on modern businesses and how to leverage it for growth.",
    image: "https://via.placeholder.com/300x180?text=AI+Blog",
    link: "#"
  },
  {
    title: "DevOps Best Practices in 2024",
    excerpt: "A guide to the latest DevOps strategies and tools for efficient software delivery.",
    image: "https://via.placeholder.com/300x180?text=DevOps+Blog",
    link: "#"
  },
  {
    title: "Getting Started with Blockchain",
    excerpt: "An introduction to blockchain technology and its real-world applications.",
    image: "https://via.placeholder.com/300x180?text=Blockchain+Blog",
    link: "#"
  }
];

const Blogs = () => (
  <section className="container mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-10 text-center">Our Blogs</h1>
    <div className="grid md:grid-cols-3 gap-8">
      {blogs.map((blog, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
          <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
          <div className="p-6 flex-1 flex flex-col">
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4 flex-1">{blog.excerpt}</p>
            <a href={blog.link} className="text-blue-600 hover:underline mt-auto">Read More</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Blogs;