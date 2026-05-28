const express = require("express");
const router = express.Router();


const Application = require("../models/ApplicationModel");

router.post("/apply", async (req, res) => {
  try {
    const newApplication = new Application(req.body);

    await newApplication.save();

    res.status(200).json({
      message: "Application Submitted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Application Failed",
    });
  }
});

router.get("/view", async (req, res) => {
  try {
    const applications = await Application.find();

    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch applications",
    });
  }
});
router.put("/update/:id", async (req, res) => {
  try {
    await Application.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      message: "Application Status Updated",
    });
  } catch (error) {
    res.status(500).json({
      message: "Status Update Failed",
    });
  }
});

module.exports = router;