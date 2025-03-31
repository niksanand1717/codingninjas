const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Auth routes
router.get("/register", userController.register);
router.post("/register", userController.createUser);
router.get("/", userController.login);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logout);

module.exports = router;
