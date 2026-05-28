import React from "react";
import { Typography, Grid, Paper, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const RecruiterDashboard = () => {
  const navigate = useNavigate();

  const recruiter = JSON.parse(localStorage.getItem("recruiter"));

  const logout = () => {
    localStorage.removeItem("recruiter");
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f4fbff",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30px",
          right: "40px",
        }}
      >
        <Button
          variant="contained"
          onClick={logout}
          style={{
            backgroundColor: "#0077b6",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Logout
        </Button>
      </div>

      <Typography
        variant="h3"
        style={{
          color: "#0077b6",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Recruiter Dashboard
      </Typography>

      <Typography
        variant="h4"
        style={{
          color: "#0077b6",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Welcome {recruiter?.companyName}
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={5}
            style={{
              padding: "30px",
              textAlign: "center",
              borderRadius: "15px",
              minHeight: "220px",
            }}
          >
            <Typography
              variant="h5"
              style={{ color: "#0077b6", fontWeight: "bold" }}
            >
              Post Job
            </Typography>

            <Typography style={{ marginTop: "20px" }}>
              Create new job openings with eligibility criteria.
            </Typography>

            <Button
              variant="contained"
              style={{ marginTop: "30px", backgroundColor: "#0077b6" }}
            >
              <Link
                to="/post-job"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Post
              </Link>
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={5}
            style={{
              padding: "30px",
              textAlign: "center",
              borderRadius: "15px",
              minHeight: "220px",
            }}
          >
            <Typography
              variant="h5"
              style={{ color: "#0077b6", fontWeight: "bold" }}
            >
              View Applicants
            </Typography>

            <Typography style={{ marginTop: "20px" }}>
              Check students who applied for your company jobs.
            </Typography>

            <Button
              variant="contained"
              style={{ marginTop: "30px", backgroundColor: "#0077b6" }}
            >
              <Link
                to="/applicants"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                View
              </Link>
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default RecruiterDashboard;