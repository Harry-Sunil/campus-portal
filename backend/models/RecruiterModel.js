const mongoose = require("mongoose");

const recruiterSchema = new mongoose.Schema({
  companyName: String,
  email: String,
  password: String,
  status: {
    type: String,
    default: "Pending",
  },
});

const Recruiter = mongoose.model("Recruiter", recruiterSchema);

module.exports = Recruiter;