"use server";

import mongoose from "mongoose";

let isConnected = false;
export const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("Please provide MongoDB connection string");
  }
  if (isConnected) {
    console.log("Database already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL || "", {
      dbName: "Educamy",
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
    console.log("Error in database connection");
  }
};
