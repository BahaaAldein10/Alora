import { connectToDatabase } from "../database/connectDB";
import User from "../database/models/user.model";
import { handleError } from "../utils";

type UserParams = {
  id: string;
  email_addresses: { email_address: string }[];
  username: string | null;
  first_name: string;
  last_name: string;
  image_url: string;
};

export async function createOrUpdateUser({
  id,
  email_addresses,
  username,
  first_name,
  last_name,
  image_url,
}: UserParams) {
  try {
    await connectToDatabase();

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          email: email_addresses[0].email_address,
          username: username,
          firstName: first_name,
          lastName: last_name,
          imageUrl: image_url,
        },
      },
      { upsert: true, new: true }
    );

    await user.save();
    return user;
  } catch (error) {
    handleError(error);
  }
}

export async function deleteUser(id: string | undefined) {
  try {
    await connectToDatabase();

    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    handleError(error);
  }
}
