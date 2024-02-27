import { testemonials } from "@/constants";
import Image from "next/image";
import Title from "./Title";

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        {/* =======| TITLE |======= */}
        <Title mainTitle="Customer" subTitle="Testimonials" />

        {/* =======| CARDS |======= */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {testemonials.map((testemonial, index) => (
            <div
              key={`testemonial-${index}`}
              className="relative p-5 bg-white rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 w-full">
                <Image
                  src={testemonial.image}
                  alt={testemonial.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />

                <div>
                  <h1 className="text-1.5">{testemonial.name}</h1>
                  <h2 className="text-1">{testemonial.occupation}</h2>
                </div>
              </div>

              <h3 className="mt-4 text-1 text-[#333333]">
                {testemonial.comment}
              </h3>

              <Image
                src="/elements/quote.png"
                alt="quote"
                width={40}
                height={40}
                className="absolute top-5 right-5"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
