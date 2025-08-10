"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://soumyajit.vercel.app/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "An app to shop products online and get them delivered",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.massbeverly.com/",
  },
  {
    id: 4,
    title: "BimoKook Shop",
    description: "E-commerce app with ERP integration, unit-based pricing, online payments, and push notifications.",
    image: "/images/projects/230x0w.webp",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://apps.apple.com/us/app/bimokook/id6737545207",
  },
  {
    id: 488,
    title: "Ratbli B2B",
    description: "Real estate mobile app, akin to OLX, enabling sellers to list properties while providing seamless buying and selling experiences through advanced search and filtering for houses, apartments, villas, and more.",
    image: "/images/projects/fff.webp",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://apps.apple.com/us/app/ratbli-b2b/id6737166330",
  },
  {
    id: 478,
    title: "دليل الطالب | Daleel Al Talib",
    description: "The student guide application is a technical service that enables the user to browse many of the goods displayed within the site. The application provides the ability to add advertisements, search for similar advertisements, and the ability to communicate according to fixed controls and conditions that have been agreed upon by the application user.",
    image: "/images/projects/eer.webp",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://apps.apple.com/us/app/%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D8%B7%D8%A7%D9%84%D8%A8-daleel-al-talib/id6736351602?platform=iphone",
  },
  {
    id: 5,
    title: "T-shirt store",
    description: "Authentication and CRUD operations",
    image: "/images/projects/totostore-Home.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://totostore.vercel.app/",
  },
  {
    id: 6,
    title: "CareBridge",
    description: "doctor services, and easy appointment booking",
    image: "/images/projects/vitalityptlab.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://care-bridge-opal.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
      Our Projects at Dream Tech
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
