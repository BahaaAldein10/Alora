"use client";

import { motion } from "framer-motion";

interface Props {
  spanTitle: string;
  h1Title: string;
}

export const Title = ({ spanTitle, h1Title }: Props) => {
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 0.5,
      }}
      className="m-auto mb-12 w-fit sm:text-[2rem] text-2xl font-semibold cursor-context-menu"
    >
      <span className="text-[#ff0040]">{spanTitle}</span> {h1Title}
      <div className="m-auto sm:w-20 w-10 mt-2 border-t-4 border-[#ff0040] rounded-2xl" />
    </motion.h1>
  );
};
