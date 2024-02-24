import Categories from "@/components/shared/Categories";
import Featured from "@/components/shared/Featured";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Sales from "@/components/shared/Sales";
import Services from "@/components/shared/Services";
import Testimonials from "@/components/shared/Testimonials";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 bg-hero-banner bg-cover bg-center bg-no-repeat">
        <Header />
        {children}
      </main>
      <Services />
      <Categories />
      <Featured />
      <Sales />
      <Testimonials />
      <Footer />
    </div>
  );
}
