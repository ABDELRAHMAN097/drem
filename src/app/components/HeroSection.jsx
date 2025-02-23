"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-[30px] sm:text-[30px] lg:text-[30px] lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8873ff] to-[#412cb8]">
              Welcome to Dream Tech
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Dream Tech",
                1000,
                "Software Development",
                1000,
                "Web Solutions",
                1000,
                "Mobile Applications",
                1000,
                "UI/UX Design",
                1000,
                "Tech Training",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ fontSize: "40px", fontWeight: "bold"}}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            We specialize in building high-quality websites, mobile
            applications, and innovative software solutions that drive business
            success.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#8873ff] to-[#412cb8] hover:bg-slate-200 text-white"
            >
              Get in Touch
            </Link>
            <Link
              href="#projects"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#8873ff] to-[#412cb8] hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Explore Our Work
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
