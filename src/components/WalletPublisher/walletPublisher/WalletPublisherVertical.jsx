import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  {
    date: "10 Aug, 2022",
    id: "2313426",
    desc: "Added wallet balance",
    amount: "$10",
  },
  {
    date: "12 Aug, 2022",
    id: "2313421",
    desc: "Paid for orders",
    amount: "$20",
  },
  {
    date: "09 Aug, 2022",
    id: "2313429",
    desc: "Order Cancelled",
    amount: "$10",
  },
];

export default function WalletPublisherTableVertical() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 250 }} aria-label="customized table">
        {/* <TableHead> */}
        {rows.map((row) => (
          <>
            <TableRow sx={{ border: "1px solid black", fontWeight: "bold" }}>
              <TableCell
                sx={{ border: "1px solid black", fontWeight: "bold" }}
                variant="head"
                align="center"
              >
                Date
              </TableCell>
              {/* <TableCell align="center">ID</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Amount</TableCell> */}
              <TableCell
                sx={{ border: "1px solid black", fontWeight: "bold" }}
                align="center"
              >
                {row.date}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ border: "1px solid black", fontWeight: "bold" }}
                variant="head"
                align="center"
              >
                ID
              </TableCell>
              <TableCell
                sx={{ border: "1px solid black", fontWeight: "bold" }}
                align="center"
              >
                {row.id}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ border: "1px solid black", fontWeight: "bold" }}
                variant="head"
                align="center"
              >
                Description
              </TableCell>
              <TableCell
                sx={{ border: "1px solid black", fontWeight: "bold" }}
                align="center"
              >
                {row.desc}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ border: "1px solid black", fontWeight: "bold" }}
                variant="head"
                align="center"
              >
                Amount
              </TableCell>
              <TableCell
                sx={{ border: "1px solid black", fontWeight: "bold" }}
                align="center"
              >
                {row.amount}
              </TableCell>
            </TableRow>
            <br />
          </>
        ))}
      </Table>
    </TableContainer>
  );
}
