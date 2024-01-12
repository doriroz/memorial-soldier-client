import React, { useContext } from "react";
import classes from "./Section2.module.css";
import { inerSecContext } from "../Component/IntersectionProvider";

const Section2 = ({ children }) => {
  const { h1Sec1Ref } = useContext(inerSecContext);

  return (
    <section id="sec_2" className={classes.section}>
      <h1 ref={h1Sec1Ref}>תמונות בחייו</h1>
      {children}
    </section>
  );
};

export default Section2;
