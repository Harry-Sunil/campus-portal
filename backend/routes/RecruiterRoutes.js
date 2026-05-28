const express = require("express");
const router = express.Router();
module.exports = router;

const Recruiter = require("../models/RecruiterModel");

router.get("/view", async (req, res) => {
  try {
    const recruiters = await Recruiter.find();

    res.status(200).json(recruiters);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch recruiters",
    });
  }
});

router.put("/approve/:id", async (req, res) => {
  try {
    await Recruiter.findByIdAndUpdate(req.params.id, {
      status: "Approved",
    });

    res.status(200).json({
      message: "Recruiter Approved Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Recruiter Approval Failed",
    });
  }
});

// REGISTER RECRUITER
router.post("/register", async (req, res) => {
  try {
    const newRecruiter = new Recruiter(req.body);

    await newRecruiter.save();

    res.status(200).json({
      message: "Recruiter Registered Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Recruiter Registration Failed",
    });
  }
});

// RECRUITER LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check recruiter exists
    const recruiter = await Recruiter.findOne({ email: email });

    if (!recruiter) {
      return res.status(404).json({
        message: "Recruiter Not Found",
      });
    }

    // Check password
    if (recruiter.password !== password) {
      return res.status(400).json({
        message: "Incorrect Password",
      });
    }

    // Check admin approval
    if (recruiter.status !== "Approved") {
      return res.status(403).json({
        message: "Your company account is pending for admin approval",
      });
    }

    // Login success
    res.status(200).json({
      message: "Recruiter Login Successful",
      recruiter,
    });
  } catch (error) {
    res.status(500).json({
      message: "Recruiter Login Failed",
    });
  }
});

module.exports = router;