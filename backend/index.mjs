import express from "express";
import "dotenv/config";
import connectToDatabase from "./configs/db.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    return res.status(200).send({ msg: "HOMEPAGE" });
  } catch (error) {
    return res.status(400).send({ error });
  }
});

app.use("/user", userRoutes);

app.listen(process.env.PORT, async () => {
  try {
    await connectToDatabase();
    console.log("PORT is listening on" + " " + process.env.PORT);
  } catch (error) {
    console.log(error);
  }
});
