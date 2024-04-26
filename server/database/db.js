import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.4uc8s20.mongodb.net/`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Databse connected Successfully");
  } catch (error) {
    console.log("Not connected to database", error);
  }
};

export default Connection;
