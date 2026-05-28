const express = require("express");
const router = express.Router();

const Job = require("../models/JobModel");

// Add job
router.post("/add", async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();

    res.status(200).json({
      message: "Job Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Job Adding Failed",
    });
  }
});

// View jobs
router.get("/view", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch jobs",
    });
  }
});

// Delete job
router.delete("/delete/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Job Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Job Delete Failed",
    });
  }
});

// Update job
router.put("/update/:id", async (req, res) => {
  try {
    await Job.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      message: "Job Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Job Update Failed",
    });
  }
});

module.exports = router;