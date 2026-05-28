import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  TextField,
} from "@mui/material";

const Applicants = () => {
  const [applications, setApplications] = useState([]);
  const [searchText, setSearchText] = useState("");

  const recruiter = JSON.parse(localStorage.getItem("recruiter"));

  const fetchApplicants = () => {
    axios
      .get("https://campus-portal-0pxd.onrender.com/application/view")
      .then((res) => {
        console.log("Recruiter:", recruiter);
        console.log("All Applications:", res.data);

        const companyApplications = res.data.filter(
          (value) =>
            value.company?.toLowerCase().trim() ===
            recruiter?.companyName?.toLowerCase().trim()
        );

        setApplications(companyApplications);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  const updateStatus = (id, newStatus) => {
    axios
      .put(`https://campus-portal-0pxd.onrender.com/application/update/${id}`, {
        status: newStatus,
      })
      .then((res) => {
        alert(res.data.message);
        fetchApplicants();
      })
      .catch((err) => {
        alert("Status Update Failed");
        console.log(err);
      });
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
        Applicants
      </Typography>

      <Paper
        elevation={3}
        style={{
          padding: "20px",
          marginBottom: "30px",
          borderRadius: "15px",
          textAlign: "center",
        }}
      >
        <TextField
          label="Search by Job Role or Student Name"
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: "300px" }}
        />
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: "#0077b6" }}>
            <TableRow>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Student Name
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Email
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Company
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Applied Role
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Status
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Resume
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {applications
              .filter((value) => {
                return (
                  value.studentName
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  value.jobRole
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase())
                );
              })
              .map((value, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{value.studentName}</TableCell>

                    <TableCell>{value.email}</TableCell>

                    <TableCell>{value.company}</TableCell>

                    <TableCell>{value.jobRole}</TableCell>

                    <TableCell
                      style={{
                        color:
                          value.status === "Shortlisted"
                            ? "green"
                            : value.status === "Rejected"
                            ? "red"
                            : "orange",
                        fontWeight: "bold",
                      }}
                    >
                      {value.status}
                    </TableCell>

                    <TableCell>
                      <a
                        href={`https://campus-portal-0pxd.onrender.com/uploads/${value.resume}`}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "#0077b6",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                      >
                        View Resume
                      </a>
                    </TableCell>

                    <TableCell>
                      <Button
                        color="success"
                        onClick={() =>
                          updateStatus(value._id, "Shortlisted")
                        }
                      >
                        Shortlist
                      </Button>

                      <Button
                        color="error"
                        onClick={() => updateStatus(value._id, "Rejected")}
                      >
                        Reject
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

export default Applicants;