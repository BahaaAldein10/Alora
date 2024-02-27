import { navLinks, socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer
      id="footer"
      className="flex justify-center items-end w-full sm:h-[60vh] bg-footer-banner bg-background"
    >
      <div className="container">
        {/* =======| LOGO |======= */}
        <Link href="/" className="flex-center gap-2 m-auto w-fit">
          <Image src="/elements/logo.png" alt="logo" width={40} height={40} />
          <h1 className="text-2 text-white">Alora</h1>
        </Link>

        {/* =======| NAVBAR |======= */}
        <ul className="flex-center max-sm:flex-col gap-2 mt-4">
          {navLinks.map((link, index) => {
            return (
              <li key={`link-${index}`} className="relative sm:p-2">
                <Link
                  href={link.route}
                  className="text-1 text-white hover:text-white duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:rounded-2xl hover:before:w-full before:duration-300"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* =======| SOCIALS |======= */}
        <div className="flex-center gap-4 mt-4">
          {socials.map((social, index) => (
            <Link key={`social-${index}`} href="/">
              <Image
                src={social.image}
                alt={social.name}
                width={32}
                height={32}
              />
            </Link>
          ))}
        </div>

        {/* =======| DESCRIPTION |======= */}
        <h2 className="mt-4 text-center text-1 text-white">
          Shop with ease at Karma Shopping. Find everything you need in one
          place. Fast, secure, and convenient online shopping at your
          fingertips!
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
