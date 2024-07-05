import mongoose from "mongoose";

const connectDb = async () => {
  mongoose
    .connect("mongodb://0.0.0.0:27017/property")
    .then(() => console.log("Connected to MongoDB."))
    .catch((error) => console.log(error));
};

export default connectDb;
