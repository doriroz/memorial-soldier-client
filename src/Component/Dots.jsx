import React, { useRef, useState } from "react";
import classes from "./Dots.module.css";

const Dots = (props) => {
  // const [isChecked, setIsChecked] = useState(false);

  const dotRef = useRef(null);
  // const dotSteps = Math.round(Math.ceil(props.noteArr.length / 2));
  // const dotStepArr = Array.from({ length: dotSteps }, (_, i) => {
  //   i + 1;
  // });

  // const [buttonsChecked, setButtonsChecked] = useState(
  //   dotStepArr.map((_, i) => (i == 0 ? true : false))
  // );

  // const changeHandler = (index) => {
  //   const newButtonsChecked = buttonsChecked.map(() => false);
  //   newButtonsChecked[index] = !newButtonsChecked[index];
  //   setButtonsChecked(newButtonsChecked);
  // };

  const onChangeHandle = (index) => {
    console.log(index);
  };

  return (
    <div className={classes["dot-container"]}>
      {props.dotArr.map((checked, i) => {
        console.log(i);
        return (
          <>
            <input
              type="radio"
              key={i}
              checked={checked}
              className={classes.dot}
              ref={dotRef}
              onChange={() => props.dotHandler(i)}
              onClick={() => props.dotHandler(i)}
            />
            <span></span>
          </>
        );
      })}
    </div>
  );
};

export default Dots;
