import { motion } from "framer-motion";
import { menuSlide } from "@/utils/motion";
import { links } from "@/constants";
import Curve from "./Curve";
import Image from "next/image";

interface props {
  handleClick: () => void;
}

export default function Menu({ handleClick }: props) {
  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed top-0 right-0 sm:w-[60%] w-full h-screen bg-[#ff0040] z-10"
      >
        <div className="container flex justify-center items-center mt-20 w-full">
          <ul className="block text-center">
            {links.map((link, index) => (
              <li key={`link-${index}`} className="p-4 text-white">
                <a
                  href={link.url}
                  className="relative p-2 text-[1.5rem] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:rounded-2xl hover:before:w-full before:duration-300"
                  onClick={handleClick}
                >
                  {link.title}
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
