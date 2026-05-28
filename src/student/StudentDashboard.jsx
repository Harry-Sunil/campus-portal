import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Grid, Paper, Button } from "@mui/material";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("student"));

  const logout = () => {
    localStorage.removeItem("student");
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
      <Typography
        variant="h3"
        style={{
          color: "#0077b6",
          fontWeight: "bold",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        Student Dashboard
      </Typography>

      <Typography
        variant="h6"
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#555",
        }}
      >
        Welcome, {student?.name}
      </Typography>

      <div
        style={{
          position: "absolute",
          top: "40px",
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

      <Grid container spacing={5} justifyContent="center">
        {/* Profile Card */}
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
              style={{
                color: "#0077b6",
                fontWeight: "bold",
              }}
            >
              My Profile
            </Typography>

            <Typography style={{ marginTop: "20px" }}>
              View and edit your student profile details.
            </Typography>

            <Button
              variant="contained"
              style={{
                marginTop: "30px",
                backgroundColor: "#0077b6",
              }}
            >
              <Link
                to="/profile"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                View Profile
              </Link>
            </Button>
          </Paper>
        </Grid>

        {/* Jobs Card */}
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
              style={{
                color: "#0077b6",
                fontWeight: "bold",
              }}
            >
              Available Jobs
            </Typography>

            <Typography style={{ marginTop: "20px" }}>
              Explore new placement and internship opportunities.
            </Typography>

            <Button
              variant="contained"
              style={{
                marginTop: "30px",
                backgroundColor: "#0077b6",
              }}
            >
              <Link
                to="/jobs"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                View Jobs
              </Link>
            </Button>
          </Paper>
        </Grid>

        {/* Applications Card */}
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
              style={{
                color: "#0077b6",
                fontWeight: "bold",
              }}
            >
              My Applications
            </Typography>

            <Typography style={{ marginTop: "20px" }}>
              Track all jobs and internships you have applied for.
            </Typography>

            <Button
              variant="contained"
              style={{
                marginTop: "30px",
                backgroundColor: "#0077b6",
              }}
            >
              <Link
                to="/applications"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                View Applications
              </Link>
            </Button>
          </Paper>
        </Grid>

        {/* Blacklisted Companies Card */}
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
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Blacklisted Companies
            </Typography>

            <Typography style={{ marginTop: "20px" }}>
              View companies restricted by the placement cell.
            </Typography>

            <Button
              variant="contained"
              style={{
                marginTop: "30px",
                backgroundColor: "#0077b6",
              }}
            >
              <Link
                to="/blacklisted-companies"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                View List
              </Link>
            </Button>
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default StudentDashboard;