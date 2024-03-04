import { connectToDatabase } from "../database/connectDB";
import Category from "../database/models/category.model";
import { handleError } from "../utils";

export const getAllCategories = async () => {
  try {
    await connectToDatabase();

    const categories = await Category.find();

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    handleError(error);
  }
};
