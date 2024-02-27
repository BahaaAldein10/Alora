"use client";

import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import Menu from "./Menu";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleMenu = () => {
    setIsActive(true);
  };

  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <header className="lg:translate-y-4 w-full">
      <div className="max-lg:container flex-between m-auto w-[80%] px-4 py-2 bg-white lg:rounded-2xl shadow-lg z-10">
        {/* =======| LOGO |======= */}
        <Link href="/" className="flex items-center gap-2 w-fit">
          <Image src="/elements/logo.png" alt="logo" width={40} height={40} />
          <h1 className="text-2">Alora</h1>
        </Link>

        {/* =======| NAVBAR |======= */}
        <SignedIn>
          <ul className="lg:flex hidden items-center gap-2">
            {navLinks.map((link, index) => (
              <li key={`link-${index}`} className="relative p-2">
                <Link
                  href={link.route}
                  className={`${
                    isActive && "text-primary"
                  } text-1 hover:text-primary duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-pritext-primary before:rounded-2xl hover:before:w-full before:duration-300`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </SignedIn>

        {/* =======| ICONS |======= */}
        <SignedIn>
          <div className="flex items-center gap-4">
            <Link href="/checkout">
              <ShoppingCart size={28} />
            </Link>

            <UserButton afterSignOutUrl="/" />

            <div onClick={handleMenu} className="lg:hidden block">
              <Image
                src="/elements/menu.png"
                alt="menu"
                width={28}
                height={28}
              />
            </div>
          </div>
        </SignedIn>

        <SignedOut>
          <Button asChild>
            <Link href="/sign-in">Login</Link>
          </Button>

          <div onClick={handleMenu} className="lg:hidden block">
            <Image src="/elements/menu.png" alt="menu" width={28} height={28} />
          </div>
        </SignedOut>
      </div>

      {/* =======| MOBILE NAV |======= */}

      <AnimatePresence mode="wait">
        {isActive && <Menu handleClick={handleClick} />}
      </AnimatePresence>
    </header>
  );
}

export default Header;
