import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './displayItems.css'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: 125,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card style={{marginTop:30,overflowY: "auto"}} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Loading"
          height="200"
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name} 
          </Typography>
          <Typography variant="h5" color="textSecondary" component="h3">
            {props.text}
          </Typography>
          <Typography variant="h5" component="h2" style={{float:"right", fontWeight:"bold"}}>
          {props.price} -/Rs
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions style={{backgroundColor: "#FF2A27", margin:50, justifyContent:"center"}}> */}
        <Button style={{backgroundColor: "#FF2A27",fontWeight:"bold",fontSize: 14, color: "#ffff",margin:50, marginLeft:100, justifyContent:"center", paddingLeft: 50, paddingRight: 50}} size="large" color="primary">
          Add
        </Button>
      {/* </CardActions> */}
    </Card>
  );
}