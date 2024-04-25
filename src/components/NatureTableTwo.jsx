import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export default function NatureTableTwo({ data }) {

  // Define estilos personalizados para TableCell y TableHead
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#171717', 
    color: '#E3E3E3', 
    borderColor: '#3E3E3E',
    fontWeight: 'bold'
  }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            {Object.keys(data.OPTIMISTA).map((nombre, index) => (
              <StyledTableCell key={index} align="center">{nombre}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(data).map((tipo, index) => (
            <TableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {tipo}
              </StyledTableCell>
              {Object.values(data[tipo]).map((valor, index) => (
                <StyledTableCell key={index} align="center">{valor}</StyledTableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
