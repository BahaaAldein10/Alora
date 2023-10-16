"use client";

import { sales } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Title } from "./Title";

export default function Sales() {
  return (
    <section className="mt-4 w-full" id="sales">
      <div className="container mx-auto p-4 sm:w-[80%] w-[90%]">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          src="/sales_banner.png"
          className="mb-12"
        />

        <Title spanTitle="Special" h1Title="Offers" />

        <Swiper
          spaceBetween={16}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="w-full h-[550px]"
          id="swiper"
        >
          {sales.map((item) => (
            <SwiperSlide key={item.title}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="w-full h-[400px] rounded-2xl cursor-pointer overflow-hidden">
                  <motion.img
                    whileHover={{ scale: [1, 1.2] }}
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full rounded-2xl"
                  />
                  <div className="absolute left-8 top-8 p-2 text-base font-semibold text-white bg-[#ff0040] rounded-lg">
                    {item.sale}%
                  </div>
                </div>

                <div className="w-full h-fit">
                  <h1 className="mt-4 text-base font-semibold">{item.title}</h1>
                  <span className="flex gap-[2px] mt-2">
                    <Image
                      src="/elements/star.png"
                      alt="star"
                      width={16}
                      height={16}
                    />
                    <Image
                      src="/elements/star.png"
                      alt="star"
                      width={16}
                      height={16}
                    />
                    <Image
                      src="/elements/star.png"
                      alt="star"
                      width={16}
                      height={16}
                    />
                    <Image
                      src="/elements/star.png"
                      alt="star"
                      width={16}
                      height={16}
                    />
                    <Image
                      src="/elements/half_star.png"
                      alt="star"
                      width={16}
                      height={16}
                    />
                  </span>
                  <div className="flex items-center gap-4">
                    <h2 className="mt-2 text-xl font-semibold">
                      ${item.price - item.sale}
                    </h2>
                    <h2 className="mt-2 text-base line-through">
                      ${item.price}
                    </h2>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
