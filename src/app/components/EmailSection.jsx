"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  // const [emailSubmitted, setEmailSubmitted] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     email: e.target.email.value,
  //     subject: e.target.subject.value,
  //     message: e.target.message.value,
  //   };
  //   const JSONdata = JSON.stringify(data);
  //   const endpoint = "/api/send";

  //   const options = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSONdata,
  //   };

  //   const response = await fetch(endpoint, options);
  //   if (response.status === 200) {
  //     setEmailSubmitted(true);
  //   }
  // };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
      <div className="absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 blur-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0"></div>

      {/* Contact Info */}
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Get in Touch</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          We are always open to discussing new projects, ideas, or opportunities to be part of your vision.
          If you have any inquiries, feel free to reach out. We will get back to you as soon as possible!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/DreamTech" target="_blank">
            <Image src={GithubIcon} alt="GitHub" />
          </Link>
          <Link href="https://www.facebook.com/share/1ANn4kjfpP/?mibextid=wwXIfr" target="_blank">
            <Image src={LinkedinIcon} alt="LinkedIn" />
          </Link>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            ✅ Thank you! Your message has been sent successfully.
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5 placeholder-[#9CA2A9]"
                placeholder="yourname@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5 placeholder-[#9CA2A9]"
                placeholder="Project Inquiry / Collaboration"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5 placeholder-[#9CA2A9]"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full transition duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
