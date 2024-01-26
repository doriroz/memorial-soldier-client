import React, { useRef, useState } from "react";
import classes from "./Dots.module.css";

const Dots = (props) => {
  const dotRef = useRef(null);

  return (
    <div className={classes["dot-container"]}>
      {props.dotArr.map((checked, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              checked={checked}
              className={classes.dot}
              ref={dotRef}
              onChange={() => props.dotHandler(i)}
              onClick={() => props.dotHandler(i)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Dots;
