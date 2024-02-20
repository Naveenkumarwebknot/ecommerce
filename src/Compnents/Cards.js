import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./Cards.css"

export default function Cards(props) {
  return (
    <Card  className="nav" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia className="img"
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent className="content">
          
          <Typography className="Typo">
            {props.desc}
          </Typography>
          <Typography className="typo1" gutterBottom variant="h5" component="div">
            ${props.price}
          </Typography>
          <Typography className="typo1" gutterBottom variant="h5" component="div">
            Size:{props.size}
          </Typography>
          <button className="card_button" onClick={props.handleClick}>add to card</button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}