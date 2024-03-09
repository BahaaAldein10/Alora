import { Schema, model, models } from "mongoose";

export interface IProduct extends Document {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: { _id: string; name: string };
  imageUrl: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    imageUrl: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", ProductSchema);

export default Product;
