import { Router } from "express";
export const routes = Router();

routes.get("/serverinfo", (req, res) => {
  res.status(200).json({ message: "/api/serverinfo working fine" });
});

routes.post("/register", (req, res) => {
  try {
    const { email } = req.body;
    res.status(200).send({ message: email });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});
