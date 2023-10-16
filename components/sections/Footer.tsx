"use client";

import { links, socials } from "@/constants";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="flex justify-center items-end mt-4 w-full md:h-[60vh] sm:h-[70vh] sm:bg-[url('/footer_banner.png')] bg-[url('/footer_banner_responsive.png')] bg-center bg-cover">
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center gap-2">
          <img src="/elements/logo.png" alt="logo" className="w-10" />
          <h2 className="text-[2rem] font-semibold text-white">Alora</h2>
        </div>

        <ul className="sm:flex block justify-center items-center gap-2 text-center mt-4">
          {links.map((link, index) => (
            <li key={`${link}-${index}`} className="p-2 text-white">
              <a href={link.url} className="text-base font-semibold">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center gap-4 mt-4">
          {socials.map((item, index) => (
            <div key={index} className="w-8 cursor-pointer">
              <motion.img
                whileHover={{ y: [0, -5] }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                src={item.img}
                alt={item.title}
              />
            </div>
          ))}
        </div>

        <h2 className="m-auto mt-4 w-[60%] text-center text-base text-white">
          Shop with ease at Karma Shopping. Find everything you need in one
          place. Fast, secure, and convenient online shopping at your
          fingertips!
        </h2>
      </div>
    </footer>
  );
}
