"use server";

import Category from "@/lib/database/models/category.model";
import Product from "@/lib/database/models/product.model";
import { handleError } from "@/lib/utils";
import {
  GetAllProductsParams,
  GetOrdersByUserParams,
  GetRelatedProductsByCategoryParams,
} from "@/types";
import { connectToDatabase } from "../database/connectDB";
import Order from "../database/models/order.model";
import User from "../database/models/user.model";

const getCategoryByName = async (name: string) => {
  return Category.findOne({ name: { $regex: name, $options: "i" } });
};

const populateProduct = (query: any) => {
  return query.populate({
    path: "category",
    model: Category,
    select: "_id name",
  });
};

/* =======| GET PRODUCT BY ID |======= */
export async function getProductById(productId: string) {
  try {
    await connectToDatabase();

    const product = await populateProduct(Product.findById(productId));

    if (!product) throw new Error("Product not found!");

    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    handleError(error);
  }
}

/* =======| GET ALL PRODUCTS |======= */
export async function getAllProducts({
  query,
  category,
  limit = 8,
  page,
}: GetAllProductsParams) {
  try {
    await connectToDatabase();

    const titleCondition = query
      ? { name: { $regex: query, $options: "i" } }
      : {};
    const categoryCondition = category
      ? await getCategoryByName(category)
      : null;
    const conditions = {
      $and: [
        titleCondition,
        categoryCondition ? { category: categoryCondition._id } : {},
      ],
    };

    const skipAmount = (Number(page) - 1) * limit;
    const productsQuery = Product.find(conditions)
      .sort({ name: 1 })
      .skip(skipAmount)
      .limit(limit);

    const products = await populateProduct(productsQuery);
    const productsCount = await Product.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(products)),
      totalPages: Math.ceil(productsCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
}

/* =======| GET RELATED PRODUCTS |======= */
export async function getRelatedProductsByCategory({
  categoryId,
  productId,
  limit = 4,
  page = 1,
}: GetRelatedProductsByCategoryParams) {
  try {
    await connectToDatabase();

    const skipAmount = (Number(page) - 1) * limit;
    const conditions = {
      $and: [{ category: categoryId }, { _id: { $ne: productId } }],
    };

    const productsQuery = Product.find(conditions)
      .sort({ name: 1 })
      .skip(skipAmount)
      .limit(limit);

    const products = await populateProduct(productsQuery);
    const productsCount = await Product.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(products)),
      totalPages: Math.ceil(productsCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
}

// GET ORDERS BY USER
export async function getOrdersByUser({
  userId,
  limit = 4,
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
