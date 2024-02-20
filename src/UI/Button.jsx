import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";

const Button = React.forwardRef((props, ref) => {
  return (
    <Link to="/addNote">
      <div ref={ref} className={classes.button}>
        {props.text}
      </div>
    </Link>
  );
});

export default Button;
