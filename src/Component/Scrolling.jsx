import React from "react";
import classes from "./Scrolling.module.css";

const Scrolling = ({ children }) => {
  return (
    <div className={classes["scrolling-text-container"]}>
      <div className={classes["image-and-text-container"]}>{children}</div>
    </div>
  );
};

export default Scrolling;
