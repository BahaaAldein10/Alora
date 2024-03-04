"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-lg:container m-auto w-[80%]">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {/* =======| TITLE |======= */}
        <div className="sm:pt-20 pt-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-fit text-1.2 text-primary"
          >
            Trend Fashion
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="sm:text-2.5 text-2"
          >
            Explore Amazing
            <br />
            Fashion Trends for Women
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="text-1"
          >
            Discover a world of exceptional products and unrivaled shopping
            experiences. Start exploring now and redefine the way you shop
            online.
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="w-fit"
          >
            <Button asChild className="mt-4">
              <Link href="/shop">Shop now</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100, rotate: 120 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 1.8,
              delay: 1.5,
            }}
            className="flex justify-end"
          >
            <Image
              src="/elements/arrow.png"
              alt="arrow"
              width={1000}
              height={1000}
              className="sm:w-[400px] w-[300px]"
            />
          </motion.div>
        </div>

        {/* =======| IMAGE |======= */}
        <div className="relative lg:flex hidden justify-center pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Image
              src="/banners/girl.png"
              alt="girl"
              width={485}
              height={485}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute left-0 top-20 p-5 text-center bg-white rounded-2xl rounded-br-none shadow-lg"
          >
            <div className="flex-center">
              <Image
                src="/elements/discount.png"
                alt="discount"
                width={40}
                height={40}
              />
              <h2 className="text-1">Offer</h2>
            </div>

            <h1 className="text-1.2">20% OFF</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
