import { Document, Schema, model, models } from "mongoose";

export interface ICategory extends Document {
  _id: string;
  name: string;
  image: string;
}

const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true, unique: true },
});

const Category = models.Category || model("Category", CategorySchema);

export default Category;
