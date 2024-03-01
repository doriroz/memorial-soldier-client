import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";

const Button = React.forwardRef((props, ref) => {
  console.log(props.isDisabled);
  return (
    <Link to={!props.isDisabled ? "/addNote" : "/"}>
      <div style={{ width: "30rem", margin: "3rem auto" }}>
        <button
          ref={ref}
          className={classes.button}
          disabled={props.isDisabled}
        >
          {props.text}
        </button>
      </div>
    </Link>
  );
});

export default Button;
