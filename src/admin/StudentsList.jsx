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

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [courseFilter, setCourseFilter] = useState("");
  const [cgpaFilter, setCgpaFilter] = useState("");

  const fetchStudents = () => {
    axios
      .get("http://localhost:5000/student/view")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const approveStudent = (id) => {
    axios
      .put(`http://localhost:5000/student/approve/${id}`)
      .then((res) => {
        alert(res.data.message);
        fetchStudents();
      })
      .catch((err) => {
        alert("Approval Failed");
        console.log(err);
      });
  };

  const filteredStudents = students.filter((value) => {
    const courseMatch =
      courseFilter === "" ||
      value.department?.toLowerCase().includes(courseFilter.toLowerCase());

    const cgpaMatch =
      cgpaFilter === "" || Number(value.cgpa) >= Number(cgpaFilter);

    return courseMatch && cgpaMatch;
  });

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
        Registered Students
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
          label="Filter by Course"
          variant="outlined"
          value={courseFilter}
          onChange={(e) => setCourseFilter(e.target.value)}
          style={{ margin: "10px" }}
        />

        <TextField
          label="Minimum CGPA"
          variant="outlined"
          value={cgpaFilter}
          onChange={(e) => setCgpaFilter(e.target.value)}
          style={{ margin: "10px" }}
        />

        <Button
          variant="contained"
          style={{
            margin: "10px",
            backgroundColor: "#0077b6",
          }}
          onClick={() => {
            setCourseFilter("");
            setCgpaFilter("");
          }}
        >
          Clear Filter
        </Button>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: "#0077b6" }}>
            <TableRow>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Name
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Department
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                CGPA
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
            {filteredStudents.map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{value.name}</TableCell>
                  <TableCell>{value.department}</TableCell>
                  <TableCell>{value.cgpa}</TableCell>
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
                        onClick={() => approveStudent(value._id)}
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

export default StudentsList;