"use client";

import { navLinks } from "@/constants";
import { UserButton } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  let pathName: string | boolean = usePathname();

  return (
    <header className="translate-y-4 flex justify-between items-center m-auto px-4 py-2 w-[80%] bg-white rounded-2xl shadow-md z-10">
      {/* =======| LOGO |======= */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/elements/logo.png" alt="logo" width={40} height={1000} />
        <h2 className="text-[2rem] font-medium">Alora</h2>
      </Link>

      {/* =======| NAVBAR |======= */}
      <ul className="lg:flex hidden items-center gap-2">
        {navLinks.map((link) => {
          const isActive = pathName === link.route;

          return (
            <li key={link.route} className="relative p-2">
              <Link
                href={link.route}
                className={`${
                  isActive && "text-[#ff0040]"
                } text-base hover:text-[#ff0040] duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-[#ff0040] before:rounded-2xl hover:before:w-full before:duration-300`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* =======| ICONS |======= */}
      <div className="flex items-center gap-4">
        <Link href="/checkout">
          <ShoppingCart size={28} />
        </Link>

        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}

export default Header;
