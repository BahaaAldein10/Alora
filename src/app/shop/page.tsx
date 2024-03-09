import CategoryFilter from "@/components/shared/CategoryFilter";
import Gallery from "@/components/shared/Gallery";
import Header from "@/components/shared/Header";
import Search from "@/components/shared/Search";
import Title from "@/components/shared/Title";
import { getAllProducts } from "@/lib/actions/product.actions";
import { SearchParamProps } from "@/types";

async function Shop({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const products = await getAllProducts({
    query: searchText,
    category,
    page,
    limit: 8,
  });

  return (
    <section className="w-full">
      {/* =======| HEADER |======= */}
      <Header />

      {/* =======| BANNER |======= */}
      <div className="mt-5 w-full h-[400px] bg-products-banner bg-top bg-cover bg-no-repeat bg-transparent" />

      <div className="container">
        {/* =======| TITLE |======= */}
        <Title mainTitle="Explore" subTitle="Products" />

        <main className="w-full">
          {/* =======| FILTERS |======= */}
          <div className="flex gap-4">
            <Search />
            <CategoryFilter />
          </div>

          {/* =======| GALLERY |======= */}
          <Gallery
            loading={products ? false : true}
            data={products?.data}
            emptyTitle="No Products Found"
            emptyStateSubtext="Come back later"
            limit={8}
            page={page}
            totalPages={products?.totalPages}
          />
        </main>
      </div>
    </section>
  );
}

export default Shop;
