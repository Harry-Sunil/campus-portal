const express = require("express");
const router = express.Router();
module.exports = router;
const multer = require("multer");
const path = require("path");

const Student = require("../models/StudentModel");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });


router.put("/approve/:id", async (req, res) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, {
      status: "Approved",
    });

    res.status(200).json({
      message: "Student Approved Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Student Approval Failed",
    });
  }
});

// REGISTER STUDENT
router.post("/register", upload.single("resume"), async (req, res) => {
try {
   const newStudent = new Student({
  ...req.body,
  resume: req.file.filename,
});
    await newStudent.save();

    res.status(200).json({
      message: "Student Registered Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration Failed",
    });
  }
});

// VIEW ALL STUDENTS
router.get("/view", async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch students",
    });
  }
});

// STUDENT LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check student exists
    const student = await Student.findOne({ email: email });

    if (!student) {
      return res.status(404).json({
        message: "Student Not Found",
      });
    }

    // Check password
    if (student.password !== password) {
      return res.status(400).json({
        message: "Incorrect Password",
      });
    }

    // Check admin approval
    if (student.status !== "Approved") {
      return res.status(403).json({
        message: "Your account is pending admin approval",
      });
    }

    // Login success
    res.status(200).json({
      message: "Login Successful",
      student,
    });
  } catch (error) {
    res.status(500).json({
      message: "Login Failed",
    });
  }
});

module.exports = router;