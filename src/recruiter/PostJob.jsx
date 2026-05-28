import React, { useState } from "react";
import { Typography, TextField, Button, Paper } from "@mui/material";
import axios from "axios";

const PostJob = () => {
  const recruiter = JSON.parse(localStorage.getItem("recruiter"));

  const [job, setJob] = useState({
    jobTitle: "",
    company: recruiter?.companyName || "",
    location: "",
    package: "",
    description: "",
    course: "",
    minCgpa: "",
  });

  const inputHandler = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const postJob = () => {
    axios
      .post("http://localhost:5000/job/add", job)
      .then((res) => {
        alert(res.data.message);

        setJob({
          jobTitle: "",
          company: recruiter?.companyName || "",
          location: "",
          package: "",
          description: "",
          course: "",
          minCgpa: "",
        });
      })
      .catch((err) => {
        alert("Job Posting Failed");
        console.log(err);
      });
  };

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f4fbff",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h3"
        style={{
          textAlign: "center",
          color: "#0077b6",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        Post New Job
      </Typography>

      <Paper
        elevation={5}
        style={{
          padding: "35px",
          maxWidth: "700px",
          margin: "auto",
          borderRadius: "15px",
        }}
      >
        <TextField
          name="jobTitle"
          label="Job Title"
          fullWidth
          value={job.jobTitle}
          onChange={inputHandler}
          style={{ marginBottom: "20px" }}
        />

        <TextField
          name="company"
          label="Company Name"
          fullWidth
          value={job.company}
          disabled
          style={{ marginBottom: "20px" }}
        />

        <TextField
          name="location"
          label="Location"
          fullWidth
          value={job.location}
          onChange={inputHandler}
          style={{ marginBottom: "20px" }}
        />

        <TextField
          name="package"
          label="Package / Stipend"
          fullWidth
          value={job.package}
          onChange={inputHandler}
          style={{ marginBottom: "20px" }}
        />

        <TextField
          name="course"
          label="Eligible Course"
          fullWidth
          value={job.course}
          onChange={inputHandler}
          style={{ marginBottom: "20px" }}
        />

        <TextField
          name="minCgpa"
          label="Minimum CGPA"
          fullWidth
          value={job.minCgpa}
          onChange={inputHandler}
          style={{ marginBottom: "20px" }}
        />

        <TextField
          name="description"
          label="Job Description"
          fullWidth
          multiline
          rows={4}
          value={job.description}
          onChange={inputHandler}
          style={{ marginBottom: "20px" }}
        />

        <Button
          variant="contained"
          style={{ backgroundColor: "#0077b6" }}
          onClick={postJob}
        >
          Post Job
        </Button>
      </Paper>
    </div>
  );
};

export default PostJob;