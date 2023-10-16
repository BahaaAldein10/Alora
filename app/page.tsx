import Navbar from "@/components/Navbar";
import Categories from "@/components/sections/Categories";
import Featured from "@/components/sections/Featured";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Sales from "@/components/sections/Sales";
import Testimonials from "@/components/sections/Testimonials";
import TopButton from "@/components/sections/TopButton";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <main className="w-full bg-[url('/hero_banner.jpg')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </main>
      <Services />
      <Categories />
      <Featured />
      <Sales />
      <Testimonials />
      <Footer />
      <TopButton />
    </>
  );
}
