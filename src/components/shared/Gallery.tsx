"use client";

import { IProduct } from "@/lib/database/models/product.model";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Pagination from "./Pagination";

interface GalleryProps {
  loading?: boolean;
  data: IProduct[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
}

function Gallery({
  loading = false,
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  urlParamName,
}: GalleryProps) {
  const galleryRef = useRef(null);

  return (
    <section ref={galleryRef} id="gallery" className="pt-5 w-full">
      {/* =======| GRID |======= */}
      {data.length > 0 ? (
        <div>
          <div className="grid lg:grid-cols-4 md:grid-col-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {data.map((product, index) => (
              <motion.div
                key={`product-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: index < 4 ? 0.5 : 0.2 }}
                transition={{ duration: 0.5 }}
              >
                {loading ? (
                  <Skeleton
                    animation="wave"
                    width="100%"
                    height="400px"
                    style={{ borderRadius: 16 }}
                  />
                ) : (
                  <div className="w-full h-[400px] rounded-2xl cursor-pointer overflow-hidden">
                    <Link href={`/shop/${product._id}`}>
                      <motion.img
                        whileHover={{ scale: 1.2 }}
                        transition={{ ease: "easeInOut" }}
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full rounded-2xl"
                      />
                    </Link>
                  </div>
                )}

                <div>
                  {loading ? (
                    <Skeleton animation="wave" width="80%" height={16} />
                  ) : (
                    <h1 className="mt-4 text-1 line-clamp-1">{product.name}</h1>
                  )}

                  {loading ? (
                    <Skeleton animation="wave" width="40%" height={16} />
                  ) : (
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
                  )}

                  {loading ? (
                    <Skeleton animation="wave" width="80%" height={16} />
                  ) : (
                    <h2 className="mt-2 text-1.5">${product.price}</h2>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              page={page}
              totalPages={totalPages}
              urlParamName={urlParamName}
              galleryRef={galleryRef}
            />
          )}
        </div>
      ) : (
        <div className="p-20 w-full text-center bg-secondary rounded-2xl">
          <h1 className="text-1.5">{emptyTitle}</h1>
          <h1 className="text-1.2">{emptyStateSubtext}</h1>
        </div>
      )}
    </section>
  );
}

export default Gallery;
