"use client";

import { features } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { Title } from "./Title";

async function Featured() {
  return (
    <section className="mt-4 w-full" id="featured">
      <div className="container mx-auto p-4 sm:w-[80%] w-[90%]">
        <Title spanTitle="Featured" h1Title="Products" />

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {features.map((feature) => (
            <Link key={feature.title} href="">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full"
              >
                <div className="w-full h-[400px] rounded-2xl cursor-pointer overflow-hidden">
                  <motion.img
                    whileHover={{ scale: [1, 1.2] }}
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full rounded-2xl"
                  />
                </div>

                <h1 className="mt-4 text-base font-semibold">
                  {feature.title}
                </h1>
                <span className="flex gap-[2px] mt-2">
                  <img src="/elements/star.png" className="w-4" />
                  <img src="/elements/star.png" className="w-4" />
                  <img src="/elements/star.png" className="w-4" />
                  <img src="/elements/star.png" className="w-4" />
                  <img src="/elements/half_star.png" className="w-4" />
                </span>
                <h2 className="mt-2 text-xl font-semibold">${feature.price}</h2>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
