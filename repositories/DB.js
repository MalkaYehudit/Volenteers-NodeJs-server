
import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
configDotenv()

mongoose.set("strictQuery", false);

export default async function connect() {
    await mongoose.connect("mongodb+srv://MalkaYehudit:rpS6LonFv7nDb2wR@yedidim.h5gqxjx.mongodb.net/Ydidim");
};
