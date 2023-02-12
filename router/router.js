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

    console.log(
      "emial",
      process.env.EMAIL,
      "password : ",
      process.env.PASSWORD
    );

    res.status(200).send({ message: email });


    // let mailTransporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL,
    //     pass: process.env.PASSWORD,
    //   },
    // });

    // let mailDetails = {
    //   from: "xyz@gmail.com",
    //   to: "abc@gmail.com",
    //   subject: "Test mail",
    //   text: "Node.js testing mail for GeeksforGeeks",
    // };

    // mailTransporter.sendMail(mailDetails, function (err, data) {
    //   if (err) {
    //     console.log("Error Occurs");
    //   } else {
    //     console.log("Email sent successfully");
    //   }
    // });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});
