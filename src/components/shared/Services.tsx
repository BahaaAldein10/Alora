import { services } from "@/constants";
import Image from "next/image";

function Services() {
  return (
    <section className="w-full">
      <div className="container">
        {/* =======| GRID |======= */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {services.map((service, index) => (
            <div
              key={`service-${index}`}
              className="p-5 bg-white rounded-2xl shadow-lg"
            >
              <div className="flex-center gap-2">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={40}
                  height={40}
                />
                <h1 className="text-1.2">{service.name}</h1>
              </div>

              <h2 className="mt-2 text-center text-1">{service.description}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
