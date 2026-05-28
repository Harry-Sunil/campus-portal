import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Typography,
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

const ManageJobs = () => {
const [job, setJob] = useState({
  jobTitle: "",
  company: "",
  location: "",
  package: "",
  course: "",
  minCgpa: "",
});

  const [jobs, setJobs] = useState([]);
  const [editId, setEditId] = useState(null);

  const inputHandler = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const fetchJobs = () => {
    axios
      .get("http://localhost:5000/job/view")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const addOrUpdateJob = () => {
    if (editId === null) {
      axios
        .post("http://localhost:5000/job/add", job)
        .then((res) => {
          alert(res.data.message);
          setJob({
            jobTitle: "",
            company: "",
            location: "",
            package: "",
          });
          fetchJobs();
        })
        .catch((err) => {
          alert("Job Adding Failed");
          console.log(err);
        });
    } else {
      axios
        .put(`http://localhost:5000/job/update/${editId}`, job)
        .then((res) => {
          alert(res.data.message);
          setJob({
            jobTitle: "",
            company: "",
            location: "",
            package: "",
          });
          setEditId(null);
          fetchJobs();
        })
        .catch((err) => {
          alert("Job Update Failed");
          console.log(err);
        });
    }
  };

  const deleteJob = (id) => {
    axios
      .delete(`http://localhost:5000/job/delete/${id}`)
      .then((res) => {
        alert(res.data.message);
        fetchJobs();
      })
      .catch((err) => {
        alert("Job Delete Failed");
        console.log(err);
      });
  };

  const editJob = (value) => {
   setJob({
  jobTitle: value.jobTitle,
  company: value.company,
  location: value.location,
  package: value.package,
  course: value.course,
  minCgpa: value.minCgpa,
});

    setEditId(value._id);
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
        Manage Jobs
      </Typography>

      <Paper
        elevation={4}
        style={{
          padding: "30px",
          marginBottom: "40px",
          borderRadius: "15px",
        }}
      >
        <Typography variant="h5" style={{ color: "#0077b6" }}>
          {editId === null ? "Add New Job" : "Edit Job"}
        </Typography>

        <br />

        <TextField
          name="jobTitle"
          label="Job Title"
          variant="outlined"
          value={job.jobTitle}
          onChange={inputHandler}
          style={{ margin: "10px" }}
        />

        <TextField
          name="company"
          label="Company"
          variant="outlined"
          value={job.company}
          onChange={inputHandler}
          style={{ margin: "10px" }}
        />

        <TextField
          name="location"
          label="Location"
          variant="outlined"
          value={job.location}
          onChange={inputHandler}
          style={{ margin: "10px" }}
        />

        <TextField
          name="package"
          label="Package/Stipend"
          variant="outlined"
          value={job.package}
          onChange={inputHandler}
          style={{ margin: "10px" }}
        />
        <TextField
  name="course"
  label="Eligible Course"
  variant="outlined"
  value={job.course}
  onChange={inputHandler}
  style={{ margin: "10px" }}
/>

<TextField
  name="minCgpa"
  label="Minimum CGPA"
  variant="outlined"
  value={job.minCgpa}
  onChange={inputHandler}
  style={{ margin: "10px" }}
/>

        <br />

        <Button
          variant="contained"
          style={{
            marginTop: "15px",
            backgroundColor: "#0077b6",
          }}
          onClick={addOrUpdateJob}
        >
          {editId === null ? "Add Job" : "Update Job"}
        </Button>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: "#0077b6" }}>
            <TableRow>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Job Title
              </TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Company
              </TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Location
              </TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Package
              </TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {jobs.map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{value.jobTitle}</TableCell>
                  <TableCell>{value.company}</TableCell>
                  <TableCell>{value.location}</TableCell>
                  <TableCell>{value.package}</TableCell>
                  <TableCell>
                    <Button color="success" onClick={() => editJob(value)}>
                      Edit
                    </Button>

                    <Button color="error" onClick={() => deleteJob(value._id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageJobs;