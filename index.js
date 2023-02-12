import express from "express";
import dotenv from "dotenv";
import { routes } from "./router/router.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use("/api", routes);

app.get("/", (req,res) => {
    res.status(200).send("/ is working!")
})


app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
