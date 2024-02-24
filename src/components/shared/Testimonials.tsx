import { testemonials } from "@/constants";
import Image from "next/image";
import Title from "./Title";

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="m-auto w-[80%]">
        {/* =======| TITLE |======= */}
        <Title mainTitle="Customer" subTitle="Testimonials" />

        {/* =======| CARDS |======= */}
        <div className="grid grid-cols-3 gap-4">
          {testemonials.map((testemonial, index) => (
            <div
              key={`testemonial-${index}`}
              className="relative p-5 bg-white rounded-2xl shadow-md"
            >
              <div className="flex items-center gap-4 w-full">
                <Image
                  src={testemonial.image}
                  alt={testemonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />

                <div>
                  <h1 className="text-[1.5rem]">{testemonial.name}</h1>
                  <h2 className="text-base">{testemonial.occupation}</h2>
                </div>
              </div>

              <h3 className="mt-4 text-base text-[#333333]">
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
