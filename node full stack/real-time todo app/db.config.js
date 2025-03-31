import mongoose from "mongoose";

const baseUrl = process.env.MONGODBI || "127.0.0.1:27017";

export const connectToDatabase = async () => {
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
