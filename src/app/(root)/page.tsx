import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-lg:container m-auto w-[80%]">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {/* =======| TITLE |======= */}
        <div className="sm:pt-20 pt-10">
          <h2 className="text-1.2 text-primary">Trend Fashion</h2>
          <h1 className="sm:text-2.5 text-2">
            Explore Amazing
            <br />
            Fashion Trends for Women
          </h1>
          <h3 className="text-1">
            Discover a world of exceptional products and unrivaled shopping
            experiences. Start exploring now and redefine the way you shop
            online.
          </h3>

          <Button asChild className="mt-4">
            <Link href="/">Shop now</Link>
          </Button>

          <div className="flex justify-end">
            <Image
              src="/elements/arrow.png"
              alt="arrow"
              width={1000}
              height={1000}
              className="sm:w-[400px] w-[300px]"
            />
          </div>
        </div>

        {/* =======| IMAGE |======= */}
        <div className="relative lg:flex hidden justify-center pt-10">
          <Image src="/banners/girl.png" alt="girl" width={485} height={485} />

          <div className="absolute left-0 top-20 p-5 text-center bg-white rounded-2xl rounded-br-none shadow-lg">
            <div className="flex-center">
              <Image
                src="/elements/discount.png"
                alt="discount"
                width={40}
                height={40}
              />
              <h2 className="text-1">Offer</h2>
            </div>

            <h1 className="text-1.2">20% OFF</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
