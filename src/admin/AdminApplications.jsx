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
} from "@mui/material";

const AdminApplications = () => {
  const [applications, setApplications] = useState([]);

  const fetchApplications = () => {
    axios
      .get("http://localhost:5000/application/view")
      .then((res) => {
        setApplications(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const updateStatus = (id, newStatus) => {
    axios
      .put(`http://localhost:5000/application/update/${id}`, {
        status: newStatus,
      })
      .then((res) => {
        alert(res.data.message);
        fetchApplications();
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
        Student Applications
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: "#0077b6" }}>
            <TableRow>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Student Name
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Company
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Job Role
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Status
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {applications.map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{value.studentName}</TableCell>

                  <TableCell>{value.company}</TableCell>

                  <TableCell>{value.jobRole}</TableCell>

                 <TableCell
  style={{
    color:
      value.status === "Rejected"
        ? "red"
        : value.status === "Shortlisted"
        ? "green"
        : "orange",
    fontWeight: "bold",
  }}
>
  {value.status}
</TableCell>

                  <TableCell>
                    <Button
                      color="success"
                      onClick={() =>
                        updateStatus(value._id, "Shortlisted")
                      }
                    >
                      Approve
                    </Button>

                    <Button
                      color="error"
                      onClick={() =>
                        updateStatus(value._id, "Rejected")
                      }
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

export default AdminApplications;