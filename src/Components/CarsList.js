import cars from "../data/cars";
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import  Grid  from "@mui/material/Grid";
import "./CarsList.css"
function CarsList(){
    console.log(cars);
function RenderList(){
 const carsCards = cars.map((el, index) => (
    <Grid item data xs={12} sm={6} lg={4} xl={4} key={index}>
    <Card className="car-card"  >
        <div className="car-media">
        <CardMedia
        
      component="img"
      height="180"
      image={el.imagePath}
      alt={el.modelName}
    />
    </div>
    
      <CardContent className="car-des">
        <Typography component="div" variant="h5">
          {el.modelName}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {el.makeName}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div">
          {el.priceOverview.formattedPrice}
        </Typography>
        <div style={{textAlign:'right'}}>
        <button className="viewdetails">View Details</button>
        </div>
      </CardContent>
      
    
  </Card>
  </Grid>
        ))

   return carsCards; 
}

return(
    <div>
        <Grid style={{ marginLeft: "30px" }} container>
        <RenderList />
        </Grid>
    </div>
)
}

export default CarsList;