import React from "react";
import { Typography, Button, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import tcs from "../images/tcs.png";
import infosys from "../images/infosys.png";
import accenture from "../images/accenture.png";
import wipro from "../images/wipro.png";
import ibm from "../images/ibm.png";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f4fbff", minHeight: "100vh" }}>
      {/* Hero Section */}

      <div
        style={{
          textAlign: "center",
          paddingTop: "100px",
          paddingBottom: "350px",
          background: "linear-gradient(to right, #0077b6, #00b4d8)",
          color: "white",
        }}
      >
        <Typography
          variant="h2"
          style={{ marginTop: "150px", fontWeight: "bold" }}
        >
          Connecting Students with Dream Careers
        </Typography>

        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Find placements, internships, and career opportunities
        </Typography>

        <div style={{ marginTop: "30px" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "white",
              marginRight: "15px",
            }}
          >
            <Link
              to="/register"
              style={{
                color: "#0077b6",
                textDecoration: "none",
              }}
            >
              Register
            </Link>
          </Button>

          <Button
            variant="outlined"
            style={{
              borderColor: "white",
              color: "white",
            }}
            onClick={() => {
              alert("Please login to explore jobs");
            }}
          >
            Explore Jobs
          </Button>
        </div>
      </div>

      {/* Top Recruiters Section */}

      <div style={{ padding: "50px" }}>
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#0077b6",
            fontWeight: "bold",
          }}
        >
          Top Recruiters
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={2}>
            <Paper
              elevation={4}
              style={{
                padding: "30px",
                textAlign: "center",
                borderRadius: "15px",
                fontWeight: "bold",
              }}
            >
              <img src={tcs} alt="TCS" style={{ width: "120px", height: "80px" }} />
              <br />
              TCS
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Paper
              elevation={4}
              style={{
                padding: "30px",
                textAlign: "center",
                borderRadius: "15px",
                fontWeight: "bold",
              }}
            >
              <img src={infosys} alt="infosys" style={{ width: "120px", height: "80px" }} />
              <br />
              Infosys
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Paper
              elevation={4}
              style={{
                padding: "30px",
                textAlign: "center",
                borderRadius: "15px",
                fontWeight: "bold",
              }}
            >
              <img src={wipro} alt="wipro" style={{ width: "120px", height: "80px" }} />
              <br />
              Wipro
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Paper
              elevation={4}
              style={{
                padding: "30px",
                textAlign: "center",
                borderRadius: "15px",
                fontWeight: "bold",
              }}
            >
              <img src={accenture} alt="accenture" style={{ width: "120px", height: "80px" }} />
              <br />
              Accenture
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Paper
              elevation={4}
              style={{
                padding: "30px",
                textAlign: "center",
                borderRadius: "15px",
                fontWeight: "bold",
              }}
            >
              <img src={ibm} alt="ibm" style={{ width: "120px", height: "80px" }} />
              <br />
              IBM
            </Paper>
          </Grid>
        </Grid>
      </div>

      {/* Latest Opportunities Section */}

      <div style={{ padding: "50px" }}>
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#0077b6",
            fontWeight: "bold",
          }}
        >
          Latest Opportunities
        </Typography>

        <Grid container spacing={5} justifyContent="center">
          {/* Opportunity 1 */}

          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={5}
              style={{
                padding: "25px",
                borderRadius: "15px",
                minHeight: "260px",
              }}
            >
              <Typography variant="h5" style={{ color: "#0077b6", fontWeight: "bold" }}>
                Frontend Developer Intern
              </Typography>

              <Typography style={{ marginTop: "15px" }}>Company: Infosys</Typography>
              <Typography>Location: Bangalore</Typography>
              <Typography>Stipend: ₹20,000/month</Typography>

              <Button
                variant="contained"
                style={{
                  marginTop: "20px",
                  backgroundColor: "#0077b6",
                }}
                onClick={() => {
                  alert("Please login to apply for jobs");
                }}
              >
                Apply Now
              </Button>
            </Paper>
          </Grid>

          {/* Opportunity 2 */}

          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={5}
              style={{
                padding: "25px",
                borderRadius: "15px",
                minHeight: "260px",
              }}
            >
              <Typography variant="h5" style={{ color: "#0077b6", fontWeight: "bold" }}>
                Software Engineer
              </Typography>

              <Typography style={{ marginTop: "15px" }}>Company: TCS</Typography>
              <Typography>Location: Hyderabad</Typography>
              <Typography>Package: ₹6 LPA</Typography>

              <Button
                variant="contained"
                style={{
                  marginTop: "20px",
                  backgroundColor: "#0077b6",
                }}
                onClick={() => {
                  alert("Please login to apply for jobs");
                }}
              >
                Apply Now
              </Button>
            </Paper>
          </Grid>

          {/* Opportunity 3 */}

          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={5}
              style={{
                padding: "25px",
                borderRadius: "15px",
                minHeight: "260px",
              }}
            >
              <Typography variant="h5" style={{ color: "#0077b6", fontWeight: "bold" }}>
                Data Analyst
              </Typography>

              <Typography style={{ marginTop: "15px" }}>Company: IBM</Typography>
              <Typography>Location: Chennai</Typography>
              <Typography>Package: ₹5 LPA</Typography>

              <Button
                variant="contained"
                style={{
                  marginTop: "20px",
                  backgroundColor: "#0077b6",
                }}
                onClick={() => {
                  alert("Please login to apply for jobs");
                }}
              >
                Apply Now
              </Button>
            </Paper>
          </Grid>

          {/* Opportunity 4 */}

          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={5}
              style={{
                padding: "25px",
                borderRadius: "15px",
                minHeight: "260px",
              }}
            >
              <Typography variant="h5" style={{ color: "#0077b6", fontWeight: "bold" }}>
                UI/UX Designer
              </Typography>

              <Typography style={{ marginTop: "15px" }}>Company: Accenture</Typography>
              <Typography>Location: Pune</Typography>
              <Typography>Package: ₹4.5 LPA</Typography>

              <Button
                variant="contained"
                style={{
                  marginTop: "20px",
                  backgroundColor: "#0077b6",
                }}
                onClick={() => {
                  alert("Please login to apply for jobs");
                }}
              >
                Apply Now
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>

      {/* Statistics Section */}

      <div style={{ padding: "50px" }}>
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#0077b6",
            fontWeight: "bold",
          }}
        >
          Placement Statistics
        </Typography>

        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={4} style={{ padding: "30px", textAlign: "center", borderRadius: "15px" }}>
              <CircularProgress variant="determinate" value={85} size={90} thickness={5} />
              <Typography variant="h4" style={{ color: "#0077b6", marginTop: "15px" }}>
                85%
              </Typography>
              <Typography variant="h6">Placement Rate</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={4} style={{ padding: "30px", textAlign: "center", borderRadius: "15px" }}>
              <Typography variant="h3" style={{ color: "#0077b6", fontWeight: "bold" }}>
                250+
              </Typography>
              <Typography variant="h6">Students Placed</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={4} style={{ padding: "30px", textAlign: "center", borderRadius: "15px" }}>
              <Typography variant="h3" style={{ color: "#0077b6", fontWeight: "bold" }}>
                50+
              </Typography>
              <Typography variant="h6">Recruiting Companies</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={4} style={{ padding: "30px", textAlign: "center", borderRadius: "15px" }}>
              <Typography variant="h3" style={{ color: "#0077b6", fontWeight: "bold" }}>
                ₹18 LPA
              </Typography>
              <Typography variant="h6">Highest Package</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={4} style={{ padding: "30px", textAlign: "center", borderRadius: "15px" }}>
              <Typography variant="h3" style={{ color: "#0077b6", fontWeight: "bold" }}>
                120+
              </Typography>
              <Typography variant="h6">Internship Offers</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>

      {/* Why Choose Us Section */}

      <div style={{ padding: "60px", backgroundColor: "#eaf7fc" }}>
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            marginBottom: "50px",
            color: "#0077b6",
            fontWeight: "bold",
          }}
        >
          Why Choose Us
        </Typography>

        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={4} style={{ padding: "30px", textAlign: "center", borderRadius: "15px", minHeight: "220px" }}>
              <Typography variant="h5" style={{ color: "#0077b6", fontWeight: "bold" }}>
                Easy Applications
              </Typography>
              <Typography style={{ marginTop: "20px" }}>
                Students can apply for jobs and internships quickly through a simple process.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={4} style={{ padding: "30px", textAlign: "center", borderRadius: "15px", minHeight: "220px" }}>
              <Typography variant="h5" style={{ color: "#0077b6", fontWeight: "bold" }}>
                Verified Companies
              </Typography>
              <Typography style={{ marginTop: "20px" }}>
                Top companies and trusted recruiters regularly post opportunities on the portal.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={4} style={{ padding: "30px", textAlign: "center", borderRadius: "15px", minHeight: "220px" }}>
              <Typography variant="h5" style={{ color: "#0077b6", fontWeight: "bold" }}>
                Real-Time Updates
              </Typography>
              <Typography style={{ marginTop: "20px" }}>
                Get instant notifications about placements, internships, and recruitment drives.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={4} style={{ padding: "30px", textAlign: "center", borderRadius: "15px", minHeight: "220px" }}>
              <Typography variant="h5" style={{ color: "#0077b6", fontWeight: "bold" }}>
                Career Guidance
              </Typography>
              <Typography style={{ marginTop: "20px" }}>
                Students receive career support, interview preparation tips, and placement guidance.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>

      {/* Footer Section */}

      <div
        style={{
          backgroundColor: "#0077b6",
          color: "white",
          padding: "40px",
          marginTop: "50px",
        }}
      >
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              Campus Recruitment Portal
            </Typography>
            <Typography style={{ marginTop: "15px" }}>
              Connecting students with top companies and career opportunities.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <Typography style={{ marginTop: "15px" }}>Home</Typography>
            <Typography>About</Typography>
            <Typography>Register</Typography>
            <Typography>Contact</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Contact Us
            </Typography>
            <Typography style={{ marginTop: "15px" }}>campusportal@gmail.com</Typography>
            <Typography>+91 9876543210</Typography>
            <Typography>Bangalore, India</Typography>
          </Grid>
        </Grid>

        <Typography style={{ marginTop: "40px", textAlign: "center" }}>
          © 2026 Campus Recruitment Portal. All Rights Reserved.
        </Typography>
      </div>
    </div>
  );
};

export default Home;