"use client";

import { sales } from "@/constants";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "./Title";

function Sales() {
  return (
    <section id="sales" className="w-full">
      <div className="container">
        {/* =======| BANNER |======= */}
        <div className="flex justify-center mb-5">
          <Image
            src="/banners/sales_banner.png"
            alt="sales_banner"
            width={1000}
            height={1000}
          />
        </div>

        {/* =======| TITLE |======= */}
        <Title mainTitle="Special" subTitle="Offers" />

        {/* =======| GRID |======= */}
        <Swiper
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
          spaceBetween={16}
          loop={true}
          navigation={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
        >
          {sales.map((sale, index) => (
            <SwiperSlide key={`sale-${index}`} className="relative">
              <div className="w-full h-[400px] rounded-2xl">
                <Image
                  src={sale.image}
                  alt={sale.name}
                  width={1000}
                  height={1000}
                  className="w-full h-full rounded-2xl"
                />
              </div>

              <div>
                <h1 className="mt-4 text-1">{sale.name}</h1>

                <div className="flex gap-1 mt-2">
                  {[...Array(4)].map((_, index) => (
                    <Image
                      key={`star-${index}`}
                      src="/elements/star.png"
                      alt="star"
                      width={16}
                      height={16}
                    />
                  ))}
                  <Image
                    src="/elements/half_star.png"
                    alt="half_star"
                    width={16}
                    height={16}
                  />
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <h1 className="text-1.5">${sale.sale}</h1>
                  <h2 className="text-1.2 line-through">${sale.price}</h2>
                </div>
              </div>

              <div className="absolute left-8 top-8 p-2 text-1 text-white bg-primary rounded-lg">
                {Math.round(((sale.price - sale.sale) / sale.price) * 100)}%
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Sales;
