import React from "react";
import classes from "./Title.module.css";

const Title = () => {
  return (
    <div className={classes.container}>
      <img className={classes.golani} src="../src/assets/golani.png" />
      <h1>מתן אברג'יל</h1>
      <img src="../src/assets/matan3.jpg" />
    </div>
  );
};

export default Title;
