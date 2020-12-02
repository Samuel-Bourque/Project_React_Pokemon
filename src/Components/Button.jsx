import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={(e) => {
      e.preventDefault();
      window.open('https://www.youtube.com/watch?v=YhN4oAS3O4c&ab_channel=Pok%C3%A9mon-France', "_blank")
      }}>
        Jouez le générique
      </Button>
    </div>
  );
}
