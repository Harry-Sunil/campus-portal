import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
} from "@mui/material";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    role: "",
    name: "",
    companyName: "",
    email: "",
    department: "",
    cgpa: "",
    password: "",
  });

  const [resume, setResume] = useState(null);

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    setResume(e.target.files[0]);
  };

  const registerUser = () => {
    if (user.role === "student") {
      const formData = new FormData();

      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("department", user.department);
      formData.append("cgpa", user.cgpa);
      formData.append("password", user.password);
      formData.append("resume", resume);

      axios
        .post("${import.meta.env.VITE_API_URL}/student/register", formData)
        .then((res) => {
          alert(res.data.message);
navigate("/login");
        })
        .catch((err) => {
          alert("Student Registration Failed");
          console.log(err);
        });
    } else if (user.role === "recruiter") {
      axios
        .post("${import.meta.env.VITE_API_URL}/recruiter/register", user)
        .then((res) => {
          alert(res.data.message);
navigate("/login");
        })
        .catch((err) => {
          alert("Recruiter Registration Failed");
          console.log(err);
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
        paddingTop: "60px",
      }}
    >
      <Paper
        elevation={5}
        style={{
          maxWidth: "500px",
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
          Registration
        </Typography>

        <TextField
          name="role"
          select
          label="Select Role"
          variant="outlined"
          fullWidth
          value={user.role}
          onChange={inputHandler}
          style={{ marginBottom: "20px" }}
        >
          <MenuItem value="student">Student</MenuItem>
          <MenuItem value="recruiter">Recruiter</MenuItem>
        </TextField>

        {user.role === "student" && (
          <>
            <TextField
              name="name"
              label="Full Name"
              variant="outlined"
              fullWidth
              value={user.name}
              onChange={inputHandler}
              style={{ marginBottom: "20px" }}
            />

            <TextField
              name="department"
              label="Department"
              variant="outlined"
              fullWidth
              value={user.department}
              onChange={inputHandler}
              style={{ marginBottom: "20px" }}
            />

            <TextField
              name="cgpa"
              label="CGPA"
              variant="outlined"
              fullWidth
              value={user.cgpa}
              onChange={inputHandler}
              style={{ marginBottom: "20px" }}
            />

            <Button
              variant="outlined"
              component="label"
              fullWidth
              style={{
                marginBottom: "20px",
                color: "#0077b6",
                borderColor: "#0077b6",
              }}
            >
              Upload Resume
              <input
                type="file"
                hidden
                accept=".pdf,.doc,.docx"
                onChange={fileHandler}
              />
            </Button>

            {resume && (
              <Typography style={{ marginBottom: "20px", color: "green" }}>
                Selected File: {resume.name}
              </Typography>
            )}
          </>
        )}

        {user.role === "recruiter" && (
          <TextField
            name="companyName"
            label="Company Name"
            variant="outlined"
            fullWidth
            value={user.companyName}
            onChange={inputHandler}
            style={{ marginBottom: "20px" }}
          />
        )}

        <TextField
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange={inputHandler}
          style={{ marginBottom: "20px" }}
        />

        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={user.password}
          onChange={inputHandler}
          style={{ marginBottom: "25px" }}
        />

        <Button
          variant="contained"
          fullWidth
          style={{
            backgroundColor: "#0077b6",
            padding: "12px",
          }}
          onClick={registerUser}
        >
          Register
        </Button>
      </Paper>
    </div>
  );
};

export default Register;