const express = require("express");
const router = express.Router();
const { getTopSellingPackages } = require("../controllers/packageController");

router.get("/", getTopSellingPackages);

module.exports = router;
