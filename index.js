import express from "express";
import dotenv from "dotenv";
import { routes } from "./router/router.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = process.env.PORT;

app.use("/api", routes);


app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
