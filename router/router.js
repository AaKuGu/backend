import { Router } from "express";
export const routes = Router();

routes.get("/hallo", (req, res) => {
  res.status(200).send({ message: "/api/get working fine" });
});
