"use client";

import { navLinks, socials } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer
      id="footer"
      className="flex justify-center items-end w-full sm:h-[60vh] bg-footer-banner bg-background"
    >
      <div className="container">
        {/* =======| LOGO |======= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link href="/" className="flex-center gap-2 m-auto w-fit">
            <Image src="/elements/logo.png" alt="logo" width={40} height={40} />
            <h1 className="text-2 text-white">Alora</h1>
          </Link>
        </motion.div>

        {/* =======| NAVBAR |======= */}
        <ul className="flex-center max-sm:flex-col gap-2 mt-4">
          {navLinks.map((link, index) => {
            return (
              <motion.li
                key={`link-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative sm:p-2"
              >
                <Link
                  href={link.route}
                  className="text-1 text-white hover:text-white duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:rounded-2xl hover:before:w-full before:duration-300"
                >
                  {link.label}
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* =======| SOCIALS |======= */}
        <div className="flex-center gap-4 mt-4">
          {socials.map((social, index) => (
            <div key={`social-${index}`}>
              <Link href="/">
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  src={social.image}
                  alt={social.name}
                  className="w-8 h-8"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* =======| DESCRIPTION |======= */}
        <motion.h2
          className="mt-4 text-center text-1 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Shop with ease at Karma Shopping. Find everything you need in one
          place. Fast, secure, and convenient online shopping at your
          fingertips!
        </motion.h2>
      </div>
    </footer>
  );
}

export default Footer;
