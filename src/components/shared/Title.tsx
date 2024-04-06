"use client";

import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

type TitleProps = {
  mainTitle: string;
  subTitle: string;
};

function Title({ mainTitle, subTitle }: TitleProps) {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return (
    <motion.div
      initial={{ opacity: 0, scale: isDesktop ? 2.5 : 2.195 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="mb-5 text-center"
    >
      <h1 className="text-2">
        <span className="text-primary">{mainTitle}</span> {subTitle}
      </h1>
    </motion.div>
  );
}

export default Title;
