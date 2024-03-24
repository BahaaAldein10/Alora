"use client";

import { testimonials } from "@/constants";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "./Title";

interface MediaProps {
  loading?: boolean;
}

function Testimonials(props: MediaProps) {
  const { loading = false } = props;

  return (
    <section>
      <div className="container">
        {/* =======| TITLE |======= */}
        <Title mainTitle="Customer" subTitle="Testimonials" />

        {/* =======| CARDS |======= */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`testimonial-${index}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative p-5 bg-white rounded-2xl shadow-lg hover:shadow-2xl"
            >
              <div className="flex items-center gap-4 w-full">
                {loading ? (
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={80}
                    height={80}
                  />
                ) : (
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                )}

                <div className="w-screen">
                  {loading ? (
                    <Skeleton animation="wave" width="60%" height={16} />
                  ) : (
                    <h1 className="text-1.5">{testimonial.name}</h1>
                  )}

                  {loading ? (
                    <Skeleton animation="wave" width="60%" height={16} />
                  ) : (
                    <h2 className="text-1">{testimonial.occupation}</h2>
                  )}
                </div>
              </div>

              {loading ? (
                <>
                  <Skeleton animation="wave" width="100%" height={16} />
                  <Skeleton animation="wave" width="80%" height={16} />
                </>
              ) : (
                <h3 className="mt-4 text-1 text-[#333333]">
                  {testimonial.comment}
                </h3>
              )}

              <Image
                src="/elements/quote.png"
                alt="quote"
                width={40}
                height={40}
                className="absolute top-5 right-5"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
