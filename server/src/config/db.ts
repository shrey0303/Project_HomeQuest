import mongoose from "mongoose";

const connectDb = async () => {
  mongoose
    .connect("mongodb+srv://jontywithbond007:BIQHdR1kCUglbECG@cluster0.numd2qo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Connected to MongoDB."))
    .catch((error) => console.log(error));
};

export default connectDb;
