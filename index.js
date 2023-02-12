import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use("/", (req, res) => {
  res.status(200).send("this is working fine!");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
