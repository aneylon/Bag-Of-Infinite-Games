const express = require("express");
const { loginUser, signupUser } = require("../Controllers/userController");
const router = express.Router();

router.post("/signin", loginUser);

router.post("/signup", signupUser);

module.exports = router;
