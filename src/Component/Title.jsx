import React from "react";
import classes from "./Title.module.css";
import golani from "../assets/golani.png";
import mt3 from "../assets/matan3.jpg";

const Title = () => {
  return (
    <div className={classes.container}>
      <img className={classes.golani} src={golani} />
      <h1>מתן אברג'יל</h1>
      <img src={mt3} />
    </div>
  );
};

export default Title;
