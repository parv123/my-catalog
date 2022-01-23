import cars from "../data/cars";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ViewCar from "./ViewCar";
import "./CarsList.css";
function CarsList() {
  console.log(cars);
  const [open, setOpen] = React.useState({ k0: false });
  function openDialog(index) {
    setOpen((prevData) => {
      return {
        ...prevData,
        ["k" + index]: true,
      };
    });
  }
  function closeDialog(index) {
    setOpen((prevData) => {
      return {
        ...prevData,
        ["k" + index]: false,
      };
    });
  }

  function RenderList() {
    const carsCards = cars.map((el, index) => (
      <Grid item data xs={12} sm={6} lg={4} xl={3} key={index}>
        <Card className="car-card">
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
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {el.makeName}
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ color: "aa6f73" }}
              component="div"
            >
              {el.priceOverview.formattedPrice} onwards
            </Typography>
            <div style={{ textAlign: "right" }}>
              <button
                className="viewdetails"
                onClick={(e) => openDialog(index)}
              >
                View Details
              </button>
              <ViewCar
                open={open["k" + index]}
                index={index}
                changeDialog={closeDialog}
                data={el}
              />
            </div>
          </CardContent>
        </Card>
      </Grid>
    ));

    return carsCards;
  }

  return (
    <div>
      <Grid style={{ marginLeft: "30px" }} container>
        <RenderList />
      </Grid>
    </div>
  );
}

export default CarsList;
