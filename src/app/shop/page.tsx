"use client";

import Gallery from "@/components/shared/Gallery";
import Menu from "@/components/shared/Menu";
import SideBar from "@/components/shared/SideBar";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";
import { navVariantsMobile } from "@/lib/utils";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Badge } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Shop() {
  const [isActive, setIsActive] = useState(false);
  const pathName = usePathname();

  const handleMenu = () => {
    setIsActive(true);
  };
  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <section className="w-full">
      {/* =======| HEADER |======= */}
      <motion.header
        variants={navVariantsMobile}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full"
      >
        <div className="container flex-between m-auto px-4 py-2">
          {/* =======| LOGO |======= */}
          <Link href="/" className="flex items-center gap-2 w-fit">
            <Image src="/elements/logo.png" alt="logo" width={40} height={40} />
            <h1 className="text-2">Alora</h1>
          </Link>

          {/* =======| NAVBAR |======= */}
          <SignedIn>
            <ul className="lg:flex hidden items-center gap-2">
              {navLinks.map((link, index) => {
                const isActive = pathName === link.route;

                return (
                  <li key={`link-${index}`} className="relative p-2">
                    <Link
                      href={link.route}
                      className={`${
                        isActive ? "text-primary" : "text-black"
                      } text-1 hover:text-primary duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-primary before:rounded-2xl hover:before:w-full before:duration-300`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SignedIn>

          {/* =======| ICONS |======= */}
          <SignedIn>
            <div className="flex items-center gap-4">
              <Link href="/checkout">
                <Badge badgeContent={4}>
                  <ShoppingCart size={28} />
                </Badge>
              </Link>

              <UserButton afterSignOutUrl="/" />

              <div onClick={handleMenu} className="lg:hidden block">
                <Image
                  src="/elements/menu.png"
                  alt="menu"
                  width={28}
                  height={28}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </SignedIn>

          <SignedOut>
            <div className="flex items-center gap-4">
              <Button asChild>
                <Link href="/sign-in">Login</Link>
              </Button>

              <div onClick={handleMenu} className="lg:hidden block">
                <Image
                  src="/elements/menu.png"
                  alt="menu"
                  width={28}
                  height={28}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </SignedOut>
        </div>

        {/* =======| MOBILE NAV |======= */}

        <AnimatePresence mode="wait">
          {isActive && <Menu handleClick={handleClick} />}
        </AnimatePresence>
      </motion.header>

      <div className="w-full h-[400px] bg-products-banner bg-top bg-cover bg-no-repeat bg-transparent" />

      <div className="container">
        {/* =======| TITLE |======= */}
        <Title mainTitle="Explore" subTitle="Products" />

        <main className="relative flex gap-4 w-full h-full">
          {/* =======| SIDEBAR |======= */}
          <SideBar />

          {/* =======| GALLERY |======= */}
          <Gallery />
        </main>
      </div>
    </section>
  );
}

export default Shop;
