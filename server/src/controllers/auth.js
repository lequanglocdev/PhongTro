// dấu âm là lỗi server
// dấu dương  là lỗi client

// import { json } from "sequelize";
// import * as authService from "../services/auth";

const { json } = require("sequelize");
const authService = require("../services/auth");

export const register = async (req, res) => {
  const { name, phone, password } = req.body;
  try {
    if (!name || !phone || !password)
      return res.status(400).json({
        err: 1,
        mes: "Missing input",
      });
    const response = await authService.registerService(req.body);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      err: -1,
      mes: "Fail at auth controller: " + err,
    });
  }
};

export const login = async (req, res) => {
  const { phone, password } = req.body;
  try {
    if ( !phone || !password)
      return res.status(400).json({
        err: 1,
        mes: "Missing input",
      });
    const response = await authService.loginService(req.body);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      err: -1,
      mes: "Fail at auth controller: " + err,
    });
  }
};

