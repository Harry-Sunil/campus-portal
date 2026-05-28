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
  Alert,
} from "@mui/material";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios
      .get("https://campus-portal-0pxd.onrender.com/application/view")
      .then((res) => {
  const student = JSON.parse(localStorage.getItem("student"));

  const myApplications = res.data.filter(
    (value) => value.email === student?.email
  );

  setApplications(myApplications);
})
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        My Applications
      </Typography>

{applications.map((value, index) => {
  if (value.status === "Shortlisted") {
    return (
      <Alert severity="success" style={{ marginBottom: "15px" }} key={index}>
        Congratulations! You are shortlisted for {value.jobRole} at {value.company}.
      </Alert>
    );
  }

  if (value.status === "Rejected") {
    return (
      <Alert severity="error" style={{ marginBottom: "15px" }} key={index}>
        Your application for {value.jobRole} at {value.company} was rejected.
      </Alert>
    );
  }

  return null;
})}

      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: "#0077b6" }}>
            <TableRow>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Company
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Job Role
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Location
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Package
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {applications.map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{value.company}</TableCell>
                  <TableCell>{value.jobRole}</TableCell>
                  <TableCell>{value.location}</TableCell>
                  <TableCell>{value.package}</TableCell>
                  <TableCell>{value.status}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Applications;