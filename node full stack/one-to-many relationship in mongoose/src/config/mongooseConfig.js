import mongoose from "mongoose";

const baseUrl = process.env.MONGODB || "0.0.0.0:27017";
// const baseUrl = "0.0.0.0:27017";

export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(`mongodb://${baseUrl}/book`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected using mongoose");
  } catch (err) {
    console.log(err);
  }
};
