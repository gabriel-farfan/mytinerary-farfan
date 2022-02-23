import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import cityinfo from "./cityinfo";

export default function StaticCard() {
  return (

    <div className="cardGeneral">
        {cityinfo.map(city =>
          <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={process.env.PUBLIC_URL + `./images/${city.image}`}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <p>{city.name}</p>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>{city.description}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
        )}

      </div>
    
    
  );
}
