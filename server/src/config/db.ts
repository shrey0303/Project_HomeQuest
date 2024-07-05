import mongoose from "mongoose";

const connectDb = async () => {
  mongoose
    .connect("mongodb://localhost:27017/property")
    .then(() => console.log("Connected to MongoDB."))
    .catch((error) => console.log(error));
};

export default connectDb;
