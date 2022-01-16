import express from "express";
const app = express();
app.get("/", (res, req) => {
    req.status(200).json("server working");
})
const port = process.env.port || 5050;
app.listen(port, () => console.log(`server started at port ${port}`));