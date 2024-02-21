import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-auto w-[80%]">
      <div className="grid grid-cols-2">
        {/* =======| TITLE |======= */}
        <div className="pt-20">
          <h2 className="text-[1.2rem] text-primary">Trend Fashion</h2>
          <h1 className="text-[2.5rem]">
            Explore Amazing
            <br />
            Fashion Trends for Women
          </h1>
          <h3 className="text-base">
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
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* =======| IMAGE |======= */}
        <div className="relative flex justify-center pt-10">
          <Image src="/banners/girl.png" alt="girl" width={485} height={485} />

          <div className="absolute left-0 top-20 p-4 text-center bg-white rounded-2xl rounded-br-none shadow-md">
            <div className="flex justify-center items-center">
              <Image
                src="/elements/discount.png"
                alt="discount"
                width={40}
                height={40}
              />
              <h2 className="text-base">Offer</h2>
            </div>

            <h1 className="text-[1.2rem]">20% OFF</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
