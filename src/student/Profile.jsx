import React, { useState } from "react";
import { Typography, Paper, Grid, Button, TextField } from "@mui/material";

const Profile = () => {
  const [edit, setEdit] = useState(false);

const loggedStudent = JSON.parse(localStorage.getItem("student"));

const [profile, setProfile] = useState({
  name: loggedStudent?.name || "",
  email: loggedStudent?.email || "",
  department: loggedStudent?.department || "",
  cgpa: loggedStudent?.cgpa || "",
  phone: loggedStudent?.phone || "",
  resume: loggedStudent?.resume || "uploaded_resume.pdf",
});

  const inputHandler = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
const saveProfile = () => {
  localStorage.setItem("student", JSON.stringify(profile));
  setEdit(false);
  alert("Profile Updated Successfully");
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
        Student Profile
      </Typography>

      <Paper
        elevation={5}
        style={{
          padding: "35px",
          maxWidth: "700px",
          margin: "auto",
          borderRadius: "15px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {edit ? (
              <TextField
                name="name"
                label="Name"
                value={profile.name}
                onChange={inputHandler}
                fullWidth
              />
            ) : (
              <Typography>
                <b>Name:</b> {profile.name}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            {edit ? (
              <TextField
                name="email"
                label="Email"
                value={profile.email}
                onChange={inputHandler}
                fullWidth
              />
            ) : (
              <Typography>
                <b>Email:</b> {profile.email}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            {edit ? (
              <TextField
                name="department"
                label="Department"
                value={profile.department}
                onChange={inputHandler}
                fullWidth
              />
            ) : (
              <Typography>
                <b>Department:</b> {profile.department}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            {edit ? (
              <TextField
                name="cgpa"
                label="CGPA"
                value={profile.cgpa}
                onChange={inputHandler}
                fullWidth
              />
            ) : (
              <Typography>
                <b>CGPA:</b> {profile.cgpa}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            {edit ? (
              <TextField
                name="phone"
                label="Phone"
                value={profile.phone}
                onChange={inputHandler}
                fullWidth
              />
            ) : (
              <Typography>
                <b>Phone:</b> {profile.phone}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            {edit ? (
              <TextField
                name="resume"
                label="Resume"
                value={profile.resume}
                onChange={inputHandler}
                fullWidth
              />
            ) : (
              <Typography>
                <b>Resume:</b> {profile.resume}
              </Typography>
            )}
          </Grid>
        </Grid>

        {edit ? (
          <Button
            variant="contained"
            style={{
              marginTop: "30px",
              backgroundColor: "#0077b6",
            }}
            onClick={saveProfile}
          >
            Save Profile
          </Button>
        ) : (
          <Button
            variant="contained"
            style={{
              marginTop: "30px",
              backgroundColor: "#0077b6",
            }}
            onClick={() => setEdit(true)}
          >
            Edit Profile
          </Button>
        )}
      </Paper>
    </div>
  );
};

export default Profile;