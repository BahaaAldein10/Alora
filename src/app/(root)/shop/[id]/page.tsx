import CheckoutButton from "@/components/shared/CheckoutButton";
import Gallery from "@/components/shared/Gallery";
import Header from "@/components/shared/Header";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import {
  getProductById,
  getRelatedProductsByCategory,
} from "@/lib/actions/product.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

async function productPage({ params: { id }, searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page || 1);

  const product = await getProductById(id);

  const relatedProducts = await getRelatedProductsByCategory({
    categoryId: product.category._id,
    productId: product._id,
    page,
  });

  return (
    <section>
      {/* =======| HEADER |======= */}
      <Header />

      <div className="container mt-5">
        {/* =======| GRID |======= */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="w-full h-[500px]">
            <Image
              src={product.imageUrl}
              alt="Product_Image"
              width={1000}
              height={1000}
              className="m-auto lg:w-[90%] h-full rounded-2xl"
            />
          </div>

          <div>
            <h1 className="text-1.5">{product.name}</h1>

            <div className="flex gap-1 mt-1">
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

            <h2 className="mt-4 text-1">{product.description}</h2>

            <h3 className="mt-4 text-1.5">${product.price}</h3>

            {/* =======| CHECKOUT |======= */}
            <div className="flex gap-4 mt-4">
              <Button
                asChild
                variant="outline"
                className="text-primary border-2 border-primary hover:text-white hover:bg-primary"
              >
                <Link href="/">Add to chart</Link>
              </Button>

              <CheckoutButton product={product} />
            </div>
          </div>
        </div>

        {/* =======| RELATED PRODUCTS |======= */}
        <div className="mt-10">
          <Title mainTitle="Related" subTitle="Products" />

          <Gallery
            data={relatedProducts?.data}
            emptyTitle="No Products Found"
            emptyStateSubtext="Come back later"
            limit={4}
            page={page}
            totalPages={relatedProducts?.totalPages}
          />
        </div>
      </div>
    </section>
  );
}

export default productPage;
