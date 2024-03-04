import Footer from "@/components/shared/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "../fonts/BalooBhaijaan2-Bold.ttf",
  variable: "--font-variable",
});

export const metadata: Metadata = {
  title: "Alora",
  description:
    "Alora is an innovative e-commerce web application that seamlessly connects buyers and sellers, offering a diverse range of products and a user-friendly experience.",
  icons: {
    icon: "/elements/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={myFont.className}>
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
