import { categories } from "@/constants";
import Image from "next/image";

function Categories() {
  return (
    <section id="categories" className="w-full">
      <div className="container">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {categories.map((category, index) => (
            <div
              key={`category-${index}`}
              className={`${
                category.colSpan ? "sm:col-span-2" : ""
              } w-full rounded-2xl`}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={1000}
                height={1000}
                className="rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
