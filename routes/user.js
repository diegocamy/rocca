const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/login", userController.loginController);

module.exports = router;
