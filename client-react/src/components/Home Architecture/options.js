import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './options.css'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: 125,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Loading"
          height="240"
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography style={{fontWeight:"bold"}} gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="h5" color="textSecondary" component="h3">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{backgroundColor: "#505050"}}>
        <Button style={{marginLeft:230,fontWeight:"bold",fontSize: 14, color: "#FF2A27"}} size="large" color="primary">
          Move on
        </Button>
      </CardActions>
    </Card>
  );
}