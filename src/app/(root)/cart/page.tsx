"use client";

import Header from "@/components/shared/Header";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { features } from "@/constants";
import Image from "next/image";
import { useState } from "react";

function Cart() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <section className="w-full">
      {/* =======| HEADER |======= */}
      <Header />

      <div className="container mt-10">
        {/* =======| TITLE |======= */}
        <Title mainTitle="Shopping" subTitle="Cart" />

        <div className="relative grid grid-cols-3 gap-4 mt-10">
          {/* =======| ITEMS |======= */}
          <div className="col-span-2 space-y-4">
            {features.map((item, index) => (
              <div
                key={`item-${index}`}
                className="flex gap-4 p-5 w-full bg-secondary rounded-lg"
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

                <div className="w-3/4">
                  <div className="flex justify-between">
                    <h1 className="text-1.2">{item.name}</h1>

                    <div className="cursor-pointer">
                      <Image
                        src="/elements/close-item.png"
                        alt="close"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>

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

                  <div className="flex items-center gap-10 mt-4">
                    <h2 className="text-1.5">${item.price}</h2>

                    <div className="flex items-center gap-4 text-1.5 border-b-2 border-solid border-primary">
                      <Image
                        src="/elements/minus.png"
                        alt="minus"
                        width={16}
                        height={16}
                        className="cursor-pointer"
                        onClick={() => handleDecrement()}
                      />
                      <h3 className="text-1.2 cursor-context-menu select-none">
                        {quantity}
                      </h3>
                      <Image
                        src="/elements/plus.png"
                        alt="plus"
                        width={16}
                        height={16}
                        className="cursor-pointer"
                        onClick={() => handleIncrement()}
                      />
                    </div>

                    <h4 className="text-1.5 text-primary">
                      ${quantity * item.price}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* =======| ORDER SUMMARY |======= */}
          <div className="sticky top-10 left-0 p-5 h-[396px] bg-secondary rounded-lg">
            <h1 className="mb-5 text-1.5">Order Summary</h1>
            <Separator className="mb-5 bg-black h-[2px]" />
            <div className="flex-between py-2 text-1.2">
              <h2>Sub Total</h2>
              <h2>{quantity}</h2>
            </div>
            <div className="flex-between py-2 text-1.2">
              <h2>Shipping</h2>
              <h2>Free</h2>
            </div>
            <div className="flex-between py-2 text-1.2">
              <h2>Total</h2>
              <h2>{quantity}</h2>
            </div>
            <Button className="mt-5 w-full text-1.2 text-white rounded-lg">
              CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
