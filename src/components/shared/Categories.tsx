import { categories } from "@/constants";
import Image from "next/image";

function Categories() {
  return (
    <section id="categories">
      <div className="m-auto py-4 w-[80%]">
        <div className="grid grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={`category-${index}`}
              className={`${
                category.colSpan ? "col-span-2" : ""
              } w-full h-[300px] rounded-2xl`}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={1000}
                height={1000}
                className="w-full h-full rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
