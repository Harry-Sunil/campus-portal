import React from "react";
import { Typography, Grid, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
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
          color: "#0077b6",
          fontWeight: "bold",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        Admin Dashboard
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        
        {/* Manage Jobs */}
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
              Manage Jobs
            </Typography>

            <Typography style={{ marginTop: "20px" }}>
              Add, edit, and delete placement opportunities.
            </Typography>

            <Button
              variant="contained"
              style={{
                marginTop: "30px",
                backgroundColor: "#0077b6",
              }}
            >
              <Link
                to="/manage-jobs"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Open
              </Link>
            </Button>
          </Paper>
        </Grid>

        {/* Students List */}
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
              Students List
            </Typography>

            <Typography style={{ marginTop: "20px" }}>
              View registered students and their details.
            </Typography>

            <Button
              variant="contained"
              style={{
                marginTop: "30px",
                backgroundColor: "#0077b6",
              }}
            >
              <Link
                to="/students-list"
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

        {/* Applications */}
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
              Applications
            </Typography>

            <Typography style={{ marginTop: "20px" }}>
              Check student applications and placement status.
            </Typography>

            <Button
              variant="contained"
              style={{
                marginTop: "30px",
                backgroundColor: "#0077b6",
              }}
            >
              <Link
                to="/admin-applications"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Check
              </Link>
            </Button>
          </Paper>
        </Grid>

        {/* Recruiters List */}
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
              Recruiters
            </Typography>

            <Typography style={{ marginTop: "20px" }}>
              Approve and manage recruiter/company accounts.
            </Typography>

            <Button
              variant="contained"
              style={{
                marginTop: "30px",
                backgroundColor: "#0077b6",
              }}
            >
              <Link
                to="/recruiters-list"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                View Recruiters
              </Link>
            </Button>
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
};

export default AdminDashboard;