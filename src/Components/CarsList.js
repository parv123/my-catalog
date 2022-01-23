import cars from "../data/cars";
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

function CarsList(){
    console.log(cars);
function RenderList(){
 const carsCards = cars.map((el, index) => (
    <Card sx={{ display: 'flex' }} key={index}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          {el.modelName}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {el.makeName}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        
      </Box>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 151 }}
      image={el.imagePath}
      alt="Live from space album cover"
    />
  </Card>
        ))

   return carsCards; 
}

return(
    <div>
        <RenderList />
    </div>
)
}

export default CarsList;