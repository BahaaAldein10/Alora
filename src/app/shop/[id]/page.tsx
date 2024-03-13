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
      <Header />

      <div className="container mt-5">
        {/* =======| GRID |======= */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="w-full h-[500px]">
            <Image
              src={product.imageUrl}
              alt="Product_Image"
              width={1000}
              height={1000}
              className="m-auto w-[80%] h-full rounded-2xl"
            />
          </div>

          <div>
            <h1 className="text-1.5">{product.name}</h1>

            <h2 className="mt-2 text-1">{product.description}</h2>

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

              <Button type="submit" role="link">
                Buy now
              </Button>
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
