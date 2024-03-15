"use client";

import { checkoutOrder } from "@/lib/actions/order.actions";
import { IProduct } from "@/lib/database/models/product.model";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { Button } from "../ui/button";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

function Checkout({ product, userId }: { product: IProduct; userId: string }) {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const onCheckout = async () => {
    const order = {
      productId: product._id,
      productName: product.name,
      price: product.price,
      buyerId: userId,
    };

    await checkoutOrder(order);
  };

  return (
    <form action={onCheckout} method="POST">
      <Button type="submit" role="link">
        Buy now
      </Button>
    </form>
  );
}

export default Checkout;
