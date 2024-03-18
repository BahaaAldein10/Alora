"use client";

import { IProduct } from "@/lib/database/models/product.model";
import { useUser } from "@clerk/nextjs";
import Checkout from "./Checkout";

function CheckoutButton({ product }: { product: IProduct }) {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;

  return <Checkout product={product} userId={userId} />;
}

export default CheckoutButton;
