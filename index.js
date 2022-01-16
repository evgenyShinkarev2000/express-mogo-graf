import express from "express";
import * as router from "./api/back.js";

const app = express();
app.use("/api/back", router.router);

const port = process.env.port || 5050;
app.listen(port, () => console.log(`server started at port ${port}`));