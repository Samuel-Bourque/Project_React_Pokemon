import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein, pro, proteine) {
    return { name, calories, fat, carbs, protein, pro, proteine };
  }
  
  const rows = [
    createData("Bulebizarre", 45, 49, 49, 45, "Herbe", 3),
    createData("Salamèche", 52, 52, 43, 60, "Feu", 1),
    createData("Carapuce", 44, 48, 65, 43, "Eau", 2),
  ];

  export default function BasicTable() {
    const classes = useStyles();


  return (
<TableContainer component={Paper}>
<Table size="small" className={classes.table} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell>Pokémon(s)</TableCell>
      <TableCell align="center">Point de vie</TableCell>
      <TableCell align="center">Attaque</TableCell>
      <TableCell align="center">Defense</TableCell>
      <TableCell align="center">Vitesse</TableCell>
      <TableCell align="center">Type</TableCell>
      <TableCell align="center">Facilité</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => (
      <TableRow key={row.name}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.calories}</TableCell>
        <TableCell align="center">{row.fat}</TableCell>
        <TableCell align="center">{row.carbs}</TableCell>
        <TableCell align="center">{row.protein}</TableCell>
        <TableCell align="center">{row.pro}</TableCell>
        <TableCell align="center">{row.proteine}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
  );
}