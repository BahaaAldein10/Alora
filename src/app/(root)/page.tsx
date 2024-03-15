import Categories from "@/components/shared/Categories";
import Featured from "@/components/shared/Featured";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Sales from "@/components/shared/Sales";
import Services from "@/components/shared/Services";
import Testimonials from "@/components/shared/Testimonials";

export default function Home() {
  return (
    <>
      <main className="flex-1 lg:bg-hero-banner bg-background">
        <Header headerStyles="bg-white shadow-lg" />
        <Hero />
      </main>

      <Services />
      <Categories />
      <Featured />
      <Sales />
      <Testimonials />
    </>
  );
}
