const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  cgpa: String,
  password: String,
  resume: String,
  status: {
    type: String,
    default: "Pending",
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;