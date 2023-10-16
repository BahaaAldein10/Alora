"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Categories() {
  return (
    <section className="w-full overflow-x-hidden" id="categories">
      <div className="container mx-auto p-4 sm:w-[80%] w-[90%]">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/categories/makeup.png"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-[300px] rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/categories/bottoms.png"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-[300px] rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 200 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="sm:col-span-2"
          >
            <Image
              src="/categories/dresses.png"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-[300px] rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -200 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="sm:col-span-2"
          >
            <Image
              src="/categories/accessories.png"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-[300px] rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/categories/shoes.png"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-[300px] rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/categories/sales.png"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-[300px] rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
