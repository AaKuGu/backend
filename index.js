import express from 'express';

const app = express();

app.use("/", (req,res) => {
    res.status(200).send("this is working fine!")
})

app.listen(8000, () => {
    console.log(`server running on http://localhost:8000`)
})