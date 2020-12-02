import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListDividers() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root}>
      <ListItem button onClick={(e) => {
      e.preventDefault();
      window.open('https://www.pokemon.com', "_blank")
      }}>
        <ListItemText primary="Site Officiel" />
      </ListItem>
      <Divider />
      <ListItem button divider onClick={(e) => {
      e.preventDefault();
      window.open('https://www.pokepedia.fr/Liste_des_Pok%C3%A9mon_de_la_premi%C3%A8re_g%C3%A9n%C3%A9ration', "_blank")
      }}>
        <ListItemText primary="Pokedex Complet" />
      </ListItem>
      <ListItem button onClick={(e) => {
      e.preventDefault();
      window.open('https://www.youtube.com/watch?v=bhZ2CjPM0RY&ab_channel=TomPoret', "_blank")
      }}>
        <ListItemText primary="Épisode 1" />
      </ListItem>
      <Divider light />
      <ListItem button onClick={(e) => {
      e.preventDefault();
      window.open('https://www.pokemoncenter.com', "_blank")
      }}>
        <ListItemText primary="Marchandise" />
      </ListItem>
    </List>
  );
}
