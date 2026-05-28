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

const RecruitersList = () => {
  const [recruiters, setRecruiters] = useState([]);

  const fetchRecruiters = () => {
    axios
      .get("https://campus-portal-0pxd.onrender.com/recruiter/view")
      .then((res) => {
        setRecruiters(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRecruiters();
  }, []);

  const approveRecruiter = (id) => {
    axios
      .put(`https://campus-portal-0pxd.onrender.com/recruiter/approve/${id}`)
      .then((res) => {
        alert(res.data.message);
        fetchRecruiters();
      })
      .catch((err) => {
        alert("Approval Failed");
        console.log(err);
      });
  };

  return (
    <div style={{ padding: "40px", backgroundColor: "#f4fbff", minHeight: "100vh" }}>
      <Typography
        variant="h3"
        style={{
          textAlign: "center",
          color: "#0077b6",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        Registered Recruiters
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: "#0077b6" }}>
            <TableRow>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Company Name
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Email
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
            {recruiters.map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{value.companyName}</TableCell>
                  <TableCell>{value.email}</TableCell>

                  <TableCell
                    style={{
                      color: value.status === "Approved" ? "green" : "orange",
                      fontWeight: "bold",
                    }}
                  >
                    {value.status}
                  </TableCell>

                  <TableCell>
                    {value.status === "Approved" ? (
                      <Button disabled>Approved</Button>
                    ) : (
                      <Button
                        color="success"
                        onClick={() => approveRecruiter(value._id)}
                      >
                        Approve
                      </Button>
                    )}
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

export default RecruitersList;