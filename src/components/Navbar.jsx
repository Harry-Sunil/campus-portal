import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#0077b6" }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ fontWeight: "bold" }}
            >
              Campus Recruitment Portal
            </Typography>

            <Button color="inherit">
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
            </Button>

            

            <Button color="inherit">
              <Link
                to="/login"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Login
              </Link>
            </Button>

            <Button color="inherit">
              <Link
                to="/register"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Register
              </Link>
            </Button>

            <Button color="inherit">
              <Link
                to="/contact"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Contact
              </Link>
            </Button>
            
            <Button color="inherit">
              <Link
                to="/about"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                About us
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;