import React, { useEffect, useState } from "react";
import { Typography, Grid, Paper, Button } from "@mui/material";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [showEligibleOnly, setShowEligibleOnly] = useState(false);

  const student = JSON.parse(localStorage.getItem("student"));

  const studentCourse = student?.department;
  const studentCgpa = Number(student?.cgpa);

  useEffect(() => {
    axios
      .get("https://campus-portal-0pxd.onrender.com/job/view")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const applyJob = (value) => {
    axios
      .post("https://campus-portal-0pxd.onrender.com/application/apply", {
        studentName: student?.name,
        email: student?.email,
        company: value.company,
        jobRole: value.jobTitle,
        location: value.location,
        package: value.package,
        resume: student?.resume,
      })
      .then((res) => {
        alert(res.data.message);

        setAppliedJobs([...appliedJobs, value._id]);

        window.location.href = `https://www.google.com/search?q=${value.company}+careers`;
      })
      .catch((err) => {
        alert("Application Failed");
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
        Available Jobs
      </Typography>

      <div style={{ textAlign: "center" }}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#0077b6",
            marginBottom: "30px",
          }}
          onClick={() => setShowEligibleOnly(!showEligibleOnly)}
        >
          {showEligibleOnly
            ? "Show All Jobs"
            : "Show Eligible Jobs Only"}
        </Button>
      </div>

      <Grid container spacing={5} justifyContent="center">
        {jobs
          .filter((value) => {
            if (!showEligibleOnly) {
              return true;
            }

            return (
              value.course === studentCourse &&
              studentCgpa >= Number(value.minCgpa)
            );
          })
          .map((value, index) => {
            const isEligible =
              value.course === studentCourse &&
              studentCgpa >= Number(value.minCgpa);

            const alreadyApplied = appliedJobs.includes(value._id);

            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={5}
                  style={{
                    padding: "25px",
                    borderRadius: "15px",
                    minHeight: "320px",
                  }}
                >
                  <Typography
                    variant="h5"
                    style={{
                      color: "#0077b6",
                      fontWeight: "bold",
                    }}
                  >
                    {value.jobTitle}
                  </Typography>

                  <Typography style={{ marginTop: "15px" }}>
                    Company: {value.company}
                  </Typography>

                  <Typography>
                    Location: {value.location}
                  </Typography>

                  <Typography>
                    Package: {value.package}
                  </Typography>

                  <Typography>
                    Eligible Course: {value.course}
                  </Typography>

                  <Typography>
                    Minimum CGPA: {value.minCgpa}
                  </Typography>

                  {isEligible ? (
                    <Typography
                      style={{
                        color: "green",
                        fontWeight: "bold",
                        marginTop: "15px",
                      }}
                    >
                      You are eligible
                    </Typography>
                  ) : (
                    <Typography
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        marginTop: "15px",
                      }}
                    >
                      Not eligible
                    </Typography>
                  )}

                  <Button
                    variant="contained"
                    disabled={!isEligible || alreadyApplied}
                    style={{
                      marginTop: "20px",
                      backgroundColor: alreadyApplied
                        ? "green"
                        : isEligible
                        ? "#0077b6"
                        : "gray",
                    }}
                    onClick={() => applyJob(value)}
                  >
                    {alreadyApplied
                      ? "Applied"
                      : "Apply Now"}
                  </Button>
                </Paper>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Jobs;