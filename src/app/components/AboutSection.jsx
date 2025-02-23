"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Our Services",
    id: "services",
    content: (
      <ul className="list-disc pl-2">
        <li>Web Application Development</li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
        <li>Tech Consulting</li>
        <li>Custom Software Solutions</li>
      </ul>
    ),
  },
  {
    title: "Our Clients",
    id: "clients",
    content: (
      <ul className="list-disc pl-2">
        <li>Startups looking for innovative tech solutions</li>
        <li>Medium & large enterprises needing custom systems</li>
        <li>E-commerce businesses</li>
        <li>Educational and training institutions</li>
      </ul>
    ),
  },
  {
    title: "Client Testimonials",
    id: "testimonials",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Outstanding service and a professional experience! They helped us
          build our app from scratch.
        </li>
        <li>
          The best development company we’ve worked with! Highly recommended
          for tech solutions.
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/images/about-image.png" width={500} height={500} alt="About Dream Tech" />
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Dream Tech is a leading software development company specializing in
            innovative technology solutions. We provide end-to-end services in
            web and mobile application development, ensuring high-quality
            performance and seamless user experiences. Our team leverages the
            latest technologies and global standards to create modern, scalable,
            and efficient digital solutions tailored to our clients&rsquo; needs
            needs.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("services")}
              active={tab === "services"}
            >
              Our Services
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("clients")}
              active={tab === "clients"}
            >
              Our Clients
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("testimonials")}
              active={tab === "testimonials"}
            >
              Client Testimonials
            </TabButton>
          </div>

          <div className="mt-8">
          {TAB_DATA.find((t) => t.id === tab)?.content || TAB_DATA[0]?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
