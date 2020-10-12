//auth routes
//import controllers
const express = require("express");

const router = express.Router();
const { login, register, test } = require("../controllers/auth");

router.get("/test", test);
router.post("/login", login);
router.post("/register", register);

module.exports = router;
