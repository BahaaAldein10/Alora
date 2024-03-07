"use client";

import { getAllCategories } from "@/lib/actions/category.actions";
import { ICategory } from "@/lib/database/models/category.model";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";

function SideBar() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();

      categoryList && setCategories(categoryList as ICategory[]);
    };

    getCategories();
  }, []);

  return (
    <aside className="sticky top-5 left-0 p-5 w-1/4 h-fit bg-white rounded-2xl">
      <div className="flex-center gap-2">
        <Image src="/elements/list.png" alt="list" width={28} height={28} />
        <h1 className="sm:block hidden text-1.5 cursor-context-menu">
          Categories
        </h1>
      </div>

      <Separator className="my-4 h-[2px]" />

      <ul className="flex flex-col">
        {categories.map((category) => (
          <li
            key={category._id}
            className="flex categorys-center gap-2 p-3 hover:bg-secondary rounded-2xl cursor-pointer"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={24}
              height={24}
            />
            <h1 className="sm:block hidden text-1.2">{category.name}</h1>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
