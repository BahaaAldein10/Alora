"use client";

import { categories } from "@/constants";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

interface MediaProps {
  loading?: boolean;
}

function Categories(props: MediaProps) {
  const { loading = false } = props;

  return (
    <section id="categories" className="w-full">
      <div className="container">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={`category-${index}`}
              initial={category.initial}
              whileInView={category.whileInView}
              viewport={{ once: true, amount: index < 4 ? 0.5 : 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`${
                category.colSpan ? "sm:col-span-2" : ""
              } w-full rounded-2xl`}
            >
              {loading ? (
                <Skeleton
                  animation="wave"
                  width="100%"
                  height="400px"
                  style={{ borderRadius: 16 }}
                />
              ) : (
                <Image
                  src={category.image}
                  alt={category.name}
                  width={1000}
                  height={1000}
                  className="rounded-2xl"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
