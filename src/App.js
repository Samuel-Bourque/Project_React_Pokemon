import React from "react";
import Table from "./Components/Table";
import Card from "./Components/Card";
import Slider from "./Components/Slider";
import List from "./Components/List";
import AppBar from "./Components/AppBar";
import { Box, Typography } from "@material-ui/core";

function App() {
  return (
    <div>
      <AppBar />
      <br></br>
      <Typography align="center" variant="h2">
        Aide pour le choix du premier pokémon
      </Typography>
      <br></br>
      <Card />
      <Box m={10}>
        <Table />
      </Box>
      <Typography align="center" variant="h2">
        Chartes des niveaux d'un pokémon de départ
      </Typography>
      <br></br>
      <br></br>
      <Slider />
      <div>
        <List />
      </div>
    </div>
  );
}

export default App;
