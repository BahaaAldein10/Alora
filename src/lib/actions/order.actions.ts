"use server";

import {
  CheckoutOrderParams,
  CreateOrderParams,
  GetOrdersByProductParams,
  GetOrdersByUserParams,
} from "@/types";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { connectToDatabase } from "../database/connectDB";
import Order from "../database/models/order.model";
import Product from "../database/models/product.model";
import User from "../database/models/user.model";
import { handleError } from "../utils";

export const checkoutOrder = async (order: CheckoutOrderParams) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const price = Number(order.price) * 100;

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: price,
            product_data: {
              name: order.productName,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        productId: order.productId,
        buyerId: order.buyerId,
      },
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
    });

    redirect(session.url!);
  } catch (error) {
    throw error;
  }
};

export const createOrder = async (order: CreateOrderParams) => {
  try {
    await connectToDatabase();

    const newOrder = await Order.create({
      ...order,
      product: order.productId,
      buyer: order.buyerId,
    });

    return JSON.parse(JSON.stringify(newOrder));
  } catch (error) {
    handleError(error);
  }
};

/* =======| GET ORDERS BY PRODUCT |======= */
export async function getOrdersByProduct({
  searchString,
  productId,
}: GetOrdersByProductParams) {
  try {
    await connectToDatabase();

    if (!productId) throw new Error("Product ID is required");

    const productObjectId = new ObjectId(productId);

    const orders = await Order.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "buyer",
          foreignField: "_id",
          as: "buyer",
        },
      },
      {
        $unwind: "$buyer",
      },
      {
        $lookup: {
          from: "products",
          localField: "product",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $unwind: "$product",
      },
      {
        $project: {
          _id: 1,
          totalAmount: 1,
          createdAt: 1,
          productName: "$product.name",
          productId: "$product._id",
          buyer: {
            $concat: ["$buyer.firstName", " ", "$buyer.lastName"],
          },
        },
      },
      {
        $match: {
          $and: [
            { productId: productObjectId },
            { buyer: { $regex: RegExp(searchString, "i") } },
          ],
        },
      },
    ]);

    return JSON.parse(JSON.stringify(orders));
  } catch (error) {
    handleError(error);
  }
}

/* =======| GET ORDERS BY USER |======= */
export async function getOrdersByUser({
  userId,
  limit = 3,
  page,
}: GetOrdersByUserParams) {
  try {
    await connectToDatabase();

    const skipAmount = (Number(page) - 1) * limit;
    const conditions = { buyer: userId };

    const orders = await Order.distinct("product._id")
      .find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit)
      .populate({
        path: "product",
        model: Product,
        populate: {
          path: "user",
          model: User,
          select: "_id firstName lastName",
        },
      });

    const ordersCount = await Order.distinct("product._id").countDocuments(
      conditions
    );

    return {
      data: JSON.parse(JSON.stringify(orders)),
      totalPages: Math.ceil(ordersCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
}
