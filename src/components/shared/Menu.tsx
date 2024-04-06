import { navLinks } from "@/constants";
import { menuSlide } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Curve from "./Curve";

type MenuProps = {
  handleClick: () => void;
};

function Menu({ handleClick }: MenuProps) {
  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed top-0 right-0 sm:w-[60%] w-full h-screen bg-primary z-10"
      >
        <div className="container flex-center mt-20 w-full">
          <ul className="block text-center">
            {navLinks.map((link, index) => (
              <li key={`link-${index}`} className="p-4 text-white">
                <a
                  href={link.route}
                  className="relative p-2 text-1.5 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:rounded-2xl hover:before:w-full before:duration-300"
                  onClick={handleClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Image
          src="/elements/close.png"
          alt="close"
          width={24}
          height={24}
          className="absolute top-8 right-8 cursor-pointer"
          onClick={handleClick}
        />

        <Curve />
      </motion.div>
    </>
  );
}

export default Menu;
