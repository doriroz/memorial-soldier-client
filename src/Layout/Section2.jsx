import React, { useContext, useEffect, useRef, useState } from "react";
import classes from "./Section2.module.css";
import { inerSecContext } from "../Component/IntersectionProvider";

const Section2 = ({ children }) => {
  const { h1Sec1Ref } = useContext(inerSecContext);
  const secRef = useRef();

  return (
    <section id="sec_2" className={classes.section} ref={secRef}>
      <h1 ref={h1Sec1Ref}>תמונות בחייו</h1>
      {children}
    </section>
  );
};

export default Section2;
