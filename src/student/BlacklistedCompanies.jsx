import React from "react";
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

const BlacklistedCompanies = () => {
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
        Blacklisted Companies
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: "#0077b6" }}>
            <TableRow>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Company Name
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Reason
              </TableCell>

              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>ABC Tech Solutions</TableCell>
              <TableCell>Fake recruitment process</TableCell>
              <TableCell style={{ color: "red", fontWeight: "bold" }}>
                Blacklisted
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Future Soft Pvt Ltd</TableCell>
              <TableCell>Delayed offer letters</TableCell>
              <TableCell style={{ color: "red", fontWeight: "bold" }}>
                Blacklisted
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>QuickHire Services</TableCell>
              <TableCell>Unverified job postings</TableCell>
              <TableCell style={{ color: "red", fontWeight: "bold" }}>
                Blacklisted
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BlacklistedCompanies;