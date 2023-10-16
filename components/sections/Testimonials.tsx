"use client";

import { testemonials } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Title } from "./Title";
export default function Testimonials() {
  return (
    <section className="mt-4 w-full" id="testimonials">
      <div className="container mx-auto p-4 sm:w-[80%] w-[90%]">
        <Title spanTitle="Customer" h1Title="Testimonials" />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full">
          {testemonials.map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative p-8 text-left bg-[#c0c0c0] rounded-2xl shadow-lg"
            >
              <div className="flex justify-between items-center gap-4">
                <div className="w-full text-center">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="m-auto h-full rounded-full select-none"
                  />
                  <h1 className="mt-2 text-2xl font-semibold text-[#ff0040]">
                    {item.name}
                  </h1>
                </div>
                <Image
                  src="/elements/quote.png"
                  alt="quote"
                  width={40}
                  height={40}
                  className="absolute top-8 right-8 select-none"
                />
              </div>

              <h2 className="mt-4 text-center text-base text-black">
                {item.desc}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
