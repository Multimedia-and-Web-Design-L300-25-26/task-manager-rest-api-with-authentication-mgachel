import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async function globalSetup() {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  const collections = await conn.connection.db.collections();
  for (const collection of collections) {
    await collection.deleteMany({});
  }
  await mongoose.disconnect();
}
