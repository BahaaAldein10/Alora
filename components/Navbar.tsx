"use client";

import { links } from "@/constants";
import { navVariants } from "@/utils/motion";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleMenu = () => {
    setIsActive(true);
  };

  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="translate-y-4 flex justify-between items-center m-auto px-4 py-2 w-[80%] bg-white rounded-2xl shadow-lg z-10"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/elements/logo.png" alt="logo" className="w-10" />
          <h2 className="text-[2rem] font-semibold text-black">Alora</h2>
        </Link>

        {/* Links */}
        <ul className="lg:flex hidden items-center gap-2">
          {links.map((link, index) => (
            <li key={`${link}-${index}`} className="relative p-2 text-black">
              <Link
                href={link.url}
                className="text-base font-semibold hover:text-[#ff0040] duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-[#ff0040] before:rounded-2xl hover:before:w-full before:duration-300"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Link href="">
            <img src="/elements/heart.png" alt="heart" className="w-6" />
          </Link>
          <Link href="">
            <img src="/elements/cart.png" alt="cart" className="w-6" />
          </Link>
          <Link href="//" onClick={handleMenu} className="lg:hidden block">
            <img src="/elements/menu.png" alt="menu" className="w-6" />
          </Link>
        </div>
      </motion.nav>

      {/* Menu */}
      <AnimatePresence mode="wait">
        {isActive && <Menu handleClick={handleClick} />}
      </AnimatePresence>
    </>
  );
}
