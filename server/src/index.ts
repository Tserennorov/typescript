import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import { UsersModel } from "./database/models/users.models";
import { connectDatabase } from "./database/config";

const app = express();
app.use(express.json());
app.use(cors());
connectDatabase();

app.get("/", async (req, res) => {
  await UsersModel.create({});
  res.send("success");
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
