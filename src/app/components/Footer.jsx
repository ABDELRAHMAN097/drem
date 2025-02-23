import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-center gap-2">
        <Link href="/">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8873ff] to-[#412cb8]">
          Dream-Tech
        </span>
        </Link>
        <p className="text-gray-400 text-sm md:text-base text-center md:text-left mt-2 md:mt-0">
          © {new Date().getFullYear()} All rights reserved.
        </p>{" "}
      </div>
    </footer>
  );
};

export default Footer;
