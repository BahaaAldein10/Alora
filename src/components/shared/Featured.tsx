import { features } from "@/constants";
import { getProductsByIds } from "@/lib/actions/product.actions";
import Gallery from "./Gallery";
import Title from "./Title";

async function Featured() {
  const products = await getProductsByIds(features);

  return (
    <section className="w-full">
      <div className="container">
        <Title mainTitle="Featured" subTitle="Products" />

        <Gallery data={products} page={1} />
      </div>
    </section>
  );
}

export default Featured;
