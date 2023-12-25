import React, { useContext } from "react";
import { inerSecContext } from "../Component/IntersectionProvider";

const H1 = (props) => {
  const hRef = useContext(inerSecContext);
  return <h1 ref={hRef}>{props.title}</h1>;
};

export default H1;
