"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative mt-4 w-full md:h-[88vh]">
      <div className="container mx-auto p-4 pb-0 sm:w-[80%] w-[90%] h-full">
        <div className="grid md:grid-cols-2 w-full h-full">
          {/* Title */}
          <motion.div
            whileInView={{ x: [-200, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-[10%]"
          >
            <h2 className="text-base font-semibold text-[#ff0040]">
              Trend Fashion
            </h2>
            <h1 className="text-[2rem] font-semibold">Explore Amazing</h1>
            <h1 className="text-[2rem] font-semibold">
              Fashion Trends for Women
            </h1>
            <h2 className="mt-2 text-base">
              Discover a world of exceptional products and unrivaled shopping
              experiences. Start exploring now and redefine the way you shop
              online.
            </h2>

            {/* Title */}
            <Link href="">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="mt-6 px-4 py-2.5 text-white font-semibold bg-[#ff0040] rounded-lg rounded-tl-2xl rounded-br-2xl glow_shadow"
              >
                Shop Now
              </motion.button>
            </Link>
            <Image
              src="/elements/arrow.png"
              alt="arrow"
              width={1000}
              height={1000}
              className="md:block hidden mt-8 float-right w-[50%]"
            />
          </motion.div>

          {/* Image */}
          <div className="md:block hidden select-none relative">
            <Image
              src="/girl.png"
              alt="girl"
              width={1000}
              height={1000}
              className="m-auto w-[90%] h-full"
            />

            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              className="lg:block hidden absolute top-[10%] -left-[10%] p-4 bg-white rounded-2xl rounded-br-none shadow-lg"
            >
              <div className="flex items-center">
                <Image
                  src="/elements/discount.png"
                  alt="discount"
                  width={1000}
                  height={1000}
                  className="w-10"
                />
                <h2 className="text-base font-semibold">Offer</h2>
              </div>
              <h1 className="text-2xl font-semibold">20% OFF</h1>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
