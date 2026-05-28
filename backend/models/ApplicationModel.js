const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  studentName: String,
  email: String,
  company: String,
  jobRole: String,
  location: String,
  package: String,
  resume: String,
  status: {
    type: String,
    default: "Pending",
  },
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;