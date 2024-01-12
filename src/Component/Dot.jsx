import React, { useRef } from "react";
import classes from "./Dots.module.css";

const Dot = (props) => {
  const dotRef = useRef(null);
  return (
    <>
      <input
        type="radio"
        checked={props.checked}
        className={classes.dot}
        ref={dotRef}
        // onChange={() => changeHandler(i)}
        // onClick={() => changeHandler(i)}
      />
      <span></span>
    </>
  );
  //   return <div>Dot</div>;
};

export default Dot;
