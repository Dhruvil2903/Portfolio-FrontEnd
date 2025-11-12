import React from "react";
import { motion } from "framer-motion";
import NclexImage from "../assets/NCLEX.png"
import portfolioImage from "../assets/Portfolio.png"
// Example project data — you can customize this easily
const projects = [
  {
    id: 1,
    title: "NCLEX Website",
    description:
      "A full-stack e-commerce platform built using React, Spring Boot, and MySQL. Includes authentication and product management.",
    tech: ["React", "Spring Boot", "MySQL"],
    img: NclexImage,
    link: "https://github.com/Dhruvil2903/NCLEX-Website",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing skills, tech stack, and projects using React and Framer Motion.",
    tech: ["React", "TailwindCSS", "Framer Motion","Spring Boot"],
    img: portfolioImage,
    link: "#",
  },
  {
    id: 3,
    title: "E-Commerce System",
    description:
      "Full-stack CRUD application using Spring Boot and React for managing employee data.",
    tech: ["Spring Boot", "REST API", "Microservices Architecture"],
    img: "https://cdn.dribbble.com/users/1708816/screenshots/15637256/media/31f9b3a3cfaa4f3b94b9b4b623b7f528.gif",
    link: "https://github.com/Dhruvil2903/E-Commerce-Backend",
  },
  
];

const MyProjects = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent font-bold text-4xl md:text-2xl mb-12"
      >
        My Projects
      </motion.h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 
                       shadow-lg hover:shadow-pink-500/20 transition-all duration-500 
                       hover:-translate-y-2 hover:border-pink-500/50 group"
          >
            {/* Project Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-44 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Project Info */}
            <div className="mt-4 text-left">
              <h3 className="text-xl font-semibold text-pink-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-white bg-gradient-to-r 
                           from-pink-600 to-purple-500 px-4 py-2 rounded-lg 
                           hover:from-pink-500 hover:to-purple-400 transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
