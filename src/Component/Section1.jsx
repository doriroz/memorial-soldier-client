import React from "react";
import Navbar from "../UI/Navbar";
import Title from "./Title";
import classes from "./Section1.module.css";
// import Scrolling from "./Scrolling";
// import TextScroll from "./TextScroll";
// import ImageScroll from "./ImageScroll";

const Section1 = ({ children }) => {
  return (
    <section id="sec_1">
      <div className={classes.container}>{children}</div>
    </section>
  );
};

export default Section1;
