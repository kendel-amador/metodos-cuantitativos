import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export default function NatureTable({ data }) {
  // Obtener los nombres únicos de los talleres
  const uniqueNames = [...new Set(data.map(item => item.nombre))];
  // Obtener los estados únicos
  const uniqueStates = [...new Set(data.map(item => item.estado))];

  // Define estilos personalizados para TableCell y TableHead
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#171717', 
    color: '#E3E3E3', 
    borderColor: '#3E3E3E',
    fontWeight: 'bold'
  }));

  return (
    <TableContainer component={Paper} sx={{m: '25px 0'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            {uniqueNames.map(name => (
              <StyledTableCell key={name} align="center">{name}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {uniqueStates.map(state => (
            <TableRow key={state}>
              <StyledTableCell>{state}</StyledTableCell>
              {uniqueNames.map(name => {
                const item = data.find(item => item.estado === state && item.nombre === name);
                return (
                  <StyledTableCell key={`${state}-${name}`} align="center">
                    {item ? item.costoTotal : ''}
                  </StyledTableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
