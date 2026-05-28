const express = require("express");
const router = express.Router();

const Admin = require("../models/AdminModel");

router.post("/register", async (req, res) => {
  try {
    const newAdmin = new Admin(req.body);
    await newAdmin.save();

    res.status(200).json({
      message: "Admin Registered Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Admin Registration Failed",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email: email });

    if (!admin) {
      return res.status(404).json({
        message: "Admin Not Found",
      });
    }

    if (admin.password !== password) {
      return res.status(400).json({
        message: "Incorrect Password",
      });
    }

    res.status(200).json({
      message: "Admin Login Successful",
      admin,
    });
  } catch (error) {
    res.status(500).json({
      message: "Admin Login Failed",
    });
  }
});

module.exports = router;