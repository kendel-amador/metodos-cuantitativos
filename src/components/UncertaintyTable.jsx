import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export default function UncertaintyTable({ data }) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: "#171717",
    color: "#E3E3E3",
    borderColor: "#3E3E3E",
    fontWeight: "bold",
    textAlign: "center"
  }));

  return (
    <TableContainer component={Paper} sx={{ m: "25px 0" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>FAVORABLE</StyledTableCell>
            <StyledTableCell>NO FAVORABLE</StyledTableCell>
            <StyledTableCell>MAXIMAX FILA</StyledTableCell>
            <StyledTableCell>MAXIMIN FILA</StyledTableCell>
            <StyledTableCell>REALISMO</StyledTableCell>
            <StyledTableCell>LAPLACE</StyledTableCell>
            <StyledTableCell>ARREPENTIMIENTO FAVORABLE</StyledTableCell>
            <StyledTableCell>ARREPENTIMIENTO NO FAVORABLE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(data).map(([opcion, valores]) => (
            <TableRow key={opcion}>
              <StyledTableCell>{opcion}</StyledTableCell>
              <StyledTableCell>{valores.FAVORABLE}</StyledTableCell>
              <StyledTableCell>{valores["NO FAVORABLE"]}</StyledTableCell>
              <StyledTableCell>{valores["MAXIMAX FILA"]}</StyledTableCell>
              <StyledTableCell>{valores["MAXIMIN FILA"]}</StyledTableCell>
              <StyledTableCell>{valores.REALISMO}</StyledTableCell>
              <StyledTableCell>{valores.LAPLACE}</StyledTableCell>
              <StyledTableCell>{valores["ARREPENTIMIENTO FAVORABLE"]}</StyledTableCell>
              <StyledTableCell>{valores["ARREPENTIMIENTO NO FAVORABLE"]}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
