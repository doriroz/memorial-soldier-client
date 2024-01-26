import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <Link to="/addNote">
      <div className={classes.button}>{props.text}</div>
    </Link>
  );
};

export default Button;
