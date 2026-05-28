import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const inputHandler = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = () => {
    if (loginData.role === "student") {
      axios
        .post("http://localhost:5000/student/login", loginData)
        .then((res) => {
          alert(res.data.message);

          localStorage.setItem(
            "student",
            JSON.stringify(res.data.student)
          );

          navigate("/student");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });

    } else if (loginData.role === "admin") {

      axios
        .post("http://localhost:5000/admin/login", loginData)
        .then((res) => {
          alert(res.data.message);

          localStorage.setItem(
            "admin",
            JSON.stringify(res.data.admin)
          );

          navigate("/admin");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });

    } else if (loginData.role === "recruiter") {

      axios
        .post("http://localhost:5000/recruiter/login", loginData)
        .then((res) => {
          alert(res.data.message);

          localStorage.setItem(
            "recruiter",
            JSON.stringify(res.data.recruiter)
          );

          navigate("/recruiter");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });

    } else {
      alert("Please select a role");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f4fbff",
        minHeight: "100vh",
        paddingTop: "80px",
      }}
    >
      <Paper
        elevation={5}
        style={{
          maxWidth: "450px",
          margin: "auto",
          padding: "40px",
          borderRadius: "15px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: "#0077b6",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Login
        </Typography>

        <TextField
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={loginData.email}
          onChange={inputHandler}
          style={{ marginBottom: "20px" }}
        />

        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={loginData.password}
          onChange={inputHandler}
          style={{ marginBottom: "20px" }}
        />

        <TextField
          name="role"
          select
          label="Select Role"
          fullWidth
          value={loginData.role}
          onChange={inputHandler}
          style={{ marginBottom: "25px" }}
        >
          <MenuItem value="student">Student</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="recruiter">Recruiter</MenuItem>
        </TextField>

        <Button
          variant="contained"
          fullWidth
          style={{
            backgroundColor: "#0077b6",
            padding: "12px",
          }}
          onClick={loginUser}
        >
          Login
        </Button>
      </Paper>
    </div>
  );
};

export default Login;