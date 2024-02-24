import { services } from "@/constants";
import Image from "next/image";

function Services() {
  return (
    <section>
      <div className="m-auto py-4 w-[80%]">
        <div className="grid grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={`service-${index}`}
              className="p-2 bg-white rounded-2xl shadow-lg"
            >
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={40}
                  height={40}
                />
                <h1 className="text-base">{service.name}</h1>
              </div>

              <h2 className="text-center text-base">{service.description}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
