import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
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
          Contact Us
        </Typography>

        <Typography
          variant="h6"
          sx={{
            marginTop: "20px",
            maxWidth: "700px",
            marginX: "auto",
          }}
        >
          We'd love to hear from you. Reach out for any queries,
          support, or recruitment assistance.
        </Typography>
      </Box>

      {/* Contact Cards */}
      <Box sx={{ padding: "50px 40px" }}>
        <Grid container spacing={4}>
          
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: "center",
                padding: "25px",
                borderRadius: "15px",
                height: "100%",
              }}
            >
              <EmailIcon sx={{ fontSize: 50, color: "#0077b6" }} />

              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Email
                </Typography>

                <Typography sx={{ marginTop: "10px", color: "#555" }}>
                  campusportal@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: "center",
                padding: "25px",
                borderRadius: "15px",
                height: "100%",
              }}
            >
              <PhoneIcon sx={{ fontSize: 50, color: "#0077b6" }} />

              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Phone
                </Typography>

                <Typography sx={{ marginTop: "10px", color: "#555" }}>
                  +91 9876543210
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: "center",
                padding: "25px",
                borderRadius: "15px",
                height: "100%",
              }}
            >
              <LocationOnIcon sx={{ fontSize: 50, color: "#0077b6" }} />

              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Address
                </Typography>

                <Typography sx={{ marginTop: "10px", color: "#555" }}>
                  Kochi, Kerala, India
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
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

export default Contact;