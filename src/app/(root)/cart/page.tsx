import Header from "@/components/shared/Header";
import Title from "@/components/shared/Title";
import { features } from "@/constants";
import Image from "next/image";

function Page() {
  return (
    <section className="w-full">
      {/* =======| HEADER |======= */}
      <Header />

      <div className="container mt-10">
        {/* =======| TITLE |======= */}
        <Title mainTitle="Shopping" subTitle="Cart" />

        <div className="grid grid-cols-3 gap-4 mt-10">
          {/* =======| ITEMS |======= */}
          <div className="col-span-2 space-y-4">
            {features.map((item, index) => (
              <div
                key={`item-${index}`}
                className="p-5 w-full bg-secondary rounded-lg"
              >
                <div className="w-1/4 h-[150px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={1000}
                    height={1000}
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
