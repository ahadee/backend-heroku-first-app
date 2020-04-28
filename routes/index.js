const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "Hello to My First API" });
});

module.exports = router;
