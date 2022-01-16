import express from "express";
const app = express();
app.get("/", (res, req) => {
    req.status(200).json("server working");
})
app.listen(5000, () => console.log("started"));