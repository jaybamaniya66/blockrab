import React from "react";

const InfiniteSlider = () => {
  const technologies = [
    "React", "Node.js", "Python", "AWS", "Docker", "Kubernetes", 
    "TypeScript", "MongoDB", "PostgreSQL", "Redis", "GraphQL", "Next.js",
    "Vue.js", "Angular", "Django", "Flask", "FastAPI", "Terraform",
    "Jenkins", "GitLab CI", "Ansible", "Prometheus", "Grafana", "Elasticsearch"
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 py-8">
      <div className="flex animate-scroll">
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 px-6 py-3 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full border border-white/20 dark:border-black/20"
          >
            <span className="text-white dark:text-black font-medium text-lg whitespace-nowrap">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;