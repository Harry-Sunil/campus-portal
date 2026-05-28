import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";

const About = () => {
  return (
    <Box sx={{ backgroundColor: "#f4fbff", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          padding: "70px 40px",
          textAlign: "center",
          background: "linear-gradient(135deg, #0077b6, #00b4d8)",
          color: "white",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          About Campus Recruitment Portal
        </Typography>

        <Typography variant="h6" sx={{ marginTop: "20px", maxWidth: "800px", marginX: "auto" }}>
          A simple platform that connects students, recruiters, and placement
          cells to make campus hiring easier and faster.
        </Typography>

        <Button
          variant="contained"
          sx={{
            marginTop: "30px",
            backgroundColor: "white",
            color: "#0077b6",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#e0f7ff" },
          }}
        >
          Explore Opportunities
        </Button>
      </Box>

      {/* Info Section */}
      <Box sx={{ padding: "50px 40px" }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          color="#0077b6"
        >
          What We Do
        </Typography>

        <Grid container spacing={4} sx={{ marginTop: "25px" }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", textAlign: "center", padding: "20px", borderRadius: "15px" }}>
              <SchoolIcon sx={{ fontSize: 50, color: "#0077b6" }} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  For Students
                </Typography>
                <Typography sx={{ marginTop: "10px" }}>
                  Students can view jobs, apply for openings, and track their
                  application status easily.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", textAlign: "center", padding: "20px", borderRadius: "15px" }}>
              <BusinessIcon sx={{ fontSize: 50, color: "#0077b6" }} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  For Companies
                </Typography>
                <Typography sx={{ marginTop: "10px" }}>
                  Recruiters can post jobs, view applicants, and update
                  selection status.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", textAlign: "center", padding: "20px", borderRadius: "15px" }}>
              <WorkIcon sx={{ fontSize: 50, color: "#0077b6" }} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Placement Support
                </Typography>
                <Typography sx={{ marginTop: "10px" }}>
                  The portal helps placement cells manage recruitment activities
                  in an organized way.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Mission Section */}
      <Box
        sx={{
          padding: "50px 40px",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="#0077b6">
          Our Mission
        </Typography>

        <Typography
          variant="h6"
          sx={{ marginTop: "20px", maxWidth: "850px", marginX: "auto", color: "#555" }}
        >
          Our mission is to reduce the gap between students and recruiters by
          providing a smooth, transparent, and user-friendly recruitment system.
        </Typography>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#023e8a",
          color: "white",
          textAlign: "center",
          padding: "25px",
          marginTop: "40px",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Campus Recruitment Portal
        </Typography>

        <Typography sx={{ marginTop: "8px" }}>
          Connecting Talent with Opportunities
        </Typography>

        <Typography sx={{ marginTop: "12px", fontSize: "14px" }}>
          © 2026 Campus Recruitment Portal. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;