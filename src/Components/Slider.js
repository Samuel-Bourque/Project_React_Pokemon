import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 1250,
  },
});

const marks = [
  {
    value: 5,
    label: "Niveau de départ",
  },
  {
    value: 16,
    label: "Première évolution",
  },
  {
    value: 36,
    label: "Dernière évolution",
  },
  {
    value: 99,
    label: "Niveau Maximal",
  },
];

function valuetext(value) {
  return `niveau ${value}`;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
    <div className={classes.root}>
      <Slider
          min = {1}
          max = {99}
          defaultValue={5}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-always"
          marks={marks}
          valueLabelDisplay="on"
      />
    </div>
    </Grid>
  );
}
