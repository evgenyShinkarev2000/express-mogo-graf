import express from "express";
export const router = express.Router();
router.get("/", (req, res) => {
    res.status(200).json("servew working");
});
//# sourceMappingURL=back.js.map