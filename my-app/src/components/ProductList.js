import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";

function ProductList(props) {
  const rows = [
    {
      id: 1,
      name: "Teclado",
      price: 100,
      category: "Informática",
    },
  ];

  return (
    <div>
      <div style={{ fontSize: "18px", fontWeight: "bold" }}>{props.text}</div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Código</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Nome</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Preço
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Categoria
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">R$ {row.price}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProductList;
