"use client";

import { sideBar } from "@/constants";
import Image from "next/image";
import { Separator } from "../ui/separator";

function SideBar() {
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
        {sideBar.map((item, index) => (
          <li
            key={`item-${index}`}
            className="flex items-center gap-2 p-3 hover:bg-secondary rounded-2xl cursor-pointer"
          >
            <Image src={item.image} alt={item.name} width={24} height={24} />
            <h1 className="sm:block hidden text-1.2">{item.name}</h1>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
