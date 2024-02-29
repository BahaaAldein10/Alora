"use client";

import { services } from "@/constants";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

interface MediaProps {
  loading?: boolean;
}

function Services(props: MediaProps) {
  const { loading = false } = props;

  return (
    <section className="w-full">
      <div className="container">
        {/* =======| GRID |======= */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={`service-${index}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-5 bg-white rounded-2xl shadow-md hover:shadow-xl"
            >
              <div className="flex-center gap-2">
                {loading ? (
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                ) : (
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={40}
                    height={40}
                  />
                )}

                {loading ? (
                  <Skeleton animation="wave" width="80%" height={16} />
                ) : (
                  <h1 className="text-1.2">{service.name}</h1>
                )}
              </div>

              {loading ? (
                <Skeleton animation="wave" width="100%" height={16} />
              ) : (
                <h2 className="mt-2 text-center text-1">
                  {service.description}
                </h2>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
