import express from "express";
import dotenv from "dotenv";
import { routes } from "./router/router.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.get("/",(req,res) => {
    res.status(200).send("this is all the way working fine!")
})

app.use("/api", routes);


app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
