const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobTitle: String,
  company: String,
  location: String,
  package: String,
  course: String,
  minCgpa: Number,
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;