import { log } from "console";
import { connect } from "mongoose";

const URL: string = process.env.MONGO || "";

export const connectDatabase = async () => {
  try {
    await connect(URL);
  } catch (err) {
    console.log("Database holbohod aldaa garlaa");
  }
};
