import React, { useContext } from "react";
import { inerSecContext } from "../Component/IntersectionProvider";
// import Carusel from "./Carusel";
// import Videos from "./Videos";

const Section3 = ({ children }) => {
  const { h1Sec2Ref } = useContext(inerSecContext);
  return (
    <section id="sec_3">
      <h1 ref={h1Sec2Ref}>כותבים עליו</h1>
      {children}
      {/* <Carusel />
      <Videos /> */}
    </section>
  );
};

export default Section3;
