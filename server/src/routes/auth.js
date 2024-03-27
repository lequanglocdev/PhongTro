// import express from "express"
// import * as authController from "../controllers/auth"
const router = require("express").Router()
const authController = require("../controllers/auth");


router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
