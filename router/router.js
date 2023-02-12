import { Router } from "express";
export const routes = Router();

routes.get("/serverinfo", (req, res) => {
  res.status(200).json({ message: "/api/get working fine" });
});
