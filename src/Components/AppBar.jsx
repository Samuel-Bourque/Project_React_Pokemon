import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
      <Button variant="contained" color="primary" onClick={(e) => {
      e.preventDefault();
      window.open('https://www.youtube.com/watch?v=YhN4oAS3O4c&ab_channel=Pok%C3%A9mon-France', "_blank")
      }}>
          <Typography variant="h1" className={classes.title} align="center" color="error"> 
            POKÉDEX
          </Typography>
          </Button>
      </AppBar>
    </div>
  );
}
