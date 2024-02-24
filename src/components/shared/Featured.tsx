import { features } from "@/constants";
import Image from "next/image";
import Title from "./Title";

function Featured() {
  return (
    <section id="featured">
      <div className="m-auto w-[80%]">
        {/* =======| TITLE |======= */}
        <Title mainTitle="Featured" subTitle="Products" />

        {/* =======| GRID |======= */}
        <div className="grid grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div key={`feature-${index}`}>
              <div className="h-[400px] rounded-2xl">
                <Image
                  src={feature.image}
                  alt={feature.name}
                  width={1000}
                  height={1000}
                  className="w-full h-full rounded-2xl"
                />
              </div>

              <div>
                <h1 className="mt-4 text-base">{feature.name}</h1>

                <div className="flex gap-1 mt-2">
                  {[...Array(4)].map((_, index) => (
                    <Image
                      key={`star-${index}`}
                      src="/elements/star.png"
                      alt="star"
                      width={16}
                      height={16}
                    />
                  ))}
                  <Image
                    src="/elements/half_star.png"
                    alt="half_star"
                    width={16}
                    height={16}
                  />
                </div>

                <h2 className="mt-2 text-[1.5rem]">${feature.price}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
