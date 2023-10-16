"use client";

import { services } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  return (
    <section className="w-full">
      <div className="container mx-auto p-4 flex justify-between sm:w-[80%] w-[90%]">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 w-full">
          {services.map((service) => (
            <motion.div
            key={service.title}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="m-auto"
            >
              <div className="flex sm:flex-row flex-col items-center gap-2">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={40}
                  height={40}
                />
                <h1 className="text-base font-semibold">{service.title}</h1>
              </div>

              <h2 className="text-center text-base">{service.desc}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
