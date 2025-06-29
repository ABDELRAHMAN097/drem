"use client";
import { useState } from "react";
import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.email.value.split("@")[0],
      email: form.email.value,
      message: `${form.subject.value} - ${form.message.value}`,
    };

    const res = await fetch("https://bodymagdy-api.lovestoblog.com/contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      setEmailSubmitted(true);
      form.reset();
      alert("Message sent successfully!");
    } else {
      alert(result.message || "Something went wrong.");
    }
  };

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
          <Link href="https://www.facebook.com/share/1ANn4kjfpP/?mibextid=wwXIfr" target="_blank">
            <FaSquareFacebook className="text-2xl" />
          </Link>
          <Link href="https://www.linkedin.com/in/dream-tech-2046b7352/" target="_blank">
            <FaLinkedin className="text-2xl" />
          </Link>
        </div>
      </div>

      {/* Contact Form */}
      <div>
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
      </div>
    </section>
  );
};

export default EmailSection;
