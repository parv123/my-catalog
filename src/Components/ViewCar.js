import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./ViewCar.css";

import Slide from "@mui/material/Slide";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewCar(props) {
  const handleClose = () => {
    props.changeDialog(props.index);
  };
  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle className="dialog-title">
        {props.data.makeName + " " + props.data.modelName}
      </DialogTitle>
      <DialogContent className="dialog-content">
        <img src={props.data.imagePath} className="dialog-media" />
        <DialogContentText id="alert-dialog-slide-description">
          <p>
            The {props.data.makeName + " " + props.data.modelName} is available
            with three engine options that include a 1.2-litre NA petrol motor,
            1.5-litre diesel, and a 1.0-litre turbo-petrol motor. The 1.2-litre
            NA version, which produces 82bhp and 114Nm of torque, is offered
            only with a five-speed manual transmission. The 1.5-litre diesel
            mill produces 99bhp and 240Nm of torque, and is paired to a
            six-speed manual unit or a six-speed automatic unit. The 1.0-litre
            TGDi engine produces 118bhp and 172Nm of torque, and comes mated to
            an iMT unit or a seven-speed DCT unit.
          </p>
          <p>
            {props.data.makeName + " " + props.data.modelName} price starts at{" "}
            {props.data.priceOverview.formattedPrice} and goes upto + 4 lacs.
          </p>
        </DialogContentText>
      </DialogContent>
      <DialogActions className="dialog-actions">
        <button className="viewdetails" onClick={handleClose}>
          Close
        </button>
      </DialogActions>
    </Dialog>
  );
}
