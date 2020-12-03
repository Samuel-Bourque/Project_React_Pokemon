import Link from "@material-ui/core/Link";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import image1 from "../images/bulbasaur.jpg";
import image2 from "../images/charmander.jpg";
import image3 from "../images/squirtle.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
  },
  media: {
    height: 280,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
<Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image1}
            title="Image_Bulbasaur"
            onClick={() => alert("Félicitation! Vous avez choisi Bulbizarre!")}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align="center">
            Bulbizarre
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" aligh="center" >
            Bulbizarre est un petit quadrupède vert avec une tête large. Il porte un bulbe sur son dos. 
            Ce dernier lui sert également d'organe de stockage, puisqu’on rapporte notamment qu’en période de sécheresse, 
            il peut survivre plusieurs jours sans manger grâce à l’énergie qui y est accumulée. Il a des taches foncées sur 
            le corps faisant penser à un batracien. Son bulbe grandit en permanence en absorbant les rayons du soleil, 
            et lorsque le poids du bulbe sera trop grand et empêchera Bulbizarre de se dresser sur ses deux pattes 
            arrière, cela signifiera que son évolution en Herbizarre est proche. Le Bulbizarre utilise couramment 
            la capacité Vampigraine qui est l'expulsion d'une graine parasitant l'ennemi par l'orifice de son bulbe 
            et le Fouet Lianes qui est l’utilisation de tiges comme membres articulés pour frapper l’adversaire. 
            Ces tiges sont d'ailleurs fréquemment utilisées pour manipuler des objets ou se porter lui-même en hauteur. 
            Leur force est incroyable, il peut soulever des masses équivalentes à la sienne, voire plus grosses.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link
            href="https://www.pokebip.com/pokedex/4eme_generation_fiche46__bulbizarre.html"
            onClick={() => alert("Vous allez être rediriger vers une autre page!")}
          >
            {"DESCRIPTION DE BULBIZARRE"}
          </Link>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image2}
            title="Image_Charmander"
            onClick={() => alert("Félicitation! Vous avez choisi Salamèche!")}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align="center">
            SALAMÈCHE
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Salamèche est un Pokémon bipède et reptilien avec un corps orange tandis que son ventre et la plante 
            de ses pieds sont jaunes. Ses bras et ses jambes sont courts, avec respectivement quatre doigts et trois griffes 
            chacune. Une flamme brûle au bout de la svelte queue de Salamèche, et elle flamboie depuis sa naissance. 
            La flamme peut servir d'indication quant à la santé et à l'humeur de Salamèche : elle brûle fièrement 
            quand le Pokémon est en pleine forme, doucement si le Pokémon est faible ou triste, ondoie quand il est heureux et 
            flamboie quand il est en colère. Il est dit que le Salamèche meurt si sa flamme s'éteint.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link
            href="https://www.pokebip.com/pokedex/4eme_generation_fiche58__salameche.html"
            onClick={() => alert("Vous allez être rediriger vers une autre page!")}
          >
            {"DESCRIPTION DE SALAMÈCHE"}
          </Link>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image3}
            title="Image_Squirtle"
            onClick={() => alert("Félicitation! Vous avez choisi Carapuce!")}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align="center">
            CARAPUCE
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Carapuce est une petite tortue bipède de couleur bleue. Il possède une carapace majoritairement brune, 
            jaune pâle au niveau du ventre. Ses yeux sont grands et violacés. Il a une queue avec un motif de spirale à 
            son extrémité. Il possède quatre pattes avec chacune trois doigts.
            Sa carapace, molle à la naissance, durcit avec le temps et lui sert à se protéger pour lancer ensuite 
            des jets d'eau ou d'écume, mais aussi à améliorer son hydrodynamisme.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link
            href="https://www.pokebip.com/pokedex/4eme_generation_fiche333__Carapuce.html"
            onClick={() => alert("Vous allez être rediriger vers une autre page!")}
          >
            {"DESCRIPTION DE CARAPUCE"}
          </Link>
        </CardActions>
      </Card>
</Grid>
  );
}

