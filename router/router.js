import { Router } from "express";
export const routes = Router();
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

routes.get("/serverinfo", (req, res) => {
  res.status(200).json({ message: "/api/serverinfo working fine" });
});

routes.post("/register", (req, res) => {
  try {
    const { email } = req.body;

    // starting nodeMailer code

    let mailTransporter = nodemailer.createTransport({
      service: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    let mailDetails = {
      from: process.env.EMAIL,
      to: email,
      subject: "Test mail",
      text: "Node.js testing mail for GeeksforGeeks",
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log("Error Occurs");
        res.status(404).send({ error: err.message });
      } else {
        console.log("Email sent successfully");
        res.status(200).send({ message: data });
      }
    });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});
