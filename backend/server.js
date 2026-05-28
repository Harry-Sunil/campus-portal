const studentRoutes = require("./routes/StudentRoutes");
const adminRoutes = require("./routes/AdminRoutes");
const recruiterRoutes = require("./routes/RecruiterRoutes");
const applicationRoutes = require("./routes/ApplicationRoutes");
const jobRoutes = require("./routes/JobRoutes");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/student", studentRoutes);
app.use("/admin", adminRoutes);
app.use("/recruiter", recruiterRoutes);
app.use("/application", applicationRoutes);
app.use("/job", jobRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Campus Recruitment Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});