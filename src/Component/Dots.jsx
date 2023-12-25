import React, { useRef, useState } from "react";
import classes from "./Dots.module.css";

const Dots = (props) => {
  // const [isChecked, setIsChecked] = useState(false);

  const dotRef = useRef(null);
  const dotSteps = Math.round(Math.ceil(props.noteArr.length / 2));
  const dotStepArr = Array.from({ length: dotSteps }, (_, i) => {
    i + 1;
  });

  const [buttonsChecked, setButtonsChecked] = useState(
    dotStepArr.map((_, i) => (i == 0 ? true : false))
  );

  const changeHandler = (index) => {
    const newButtonsChecked = buttonsChecked.map(() => false);
    console.log(newButtonsChecked);

    // console.log(newButtonsChecked);
    newButtonsChecked[index] = !newButtonsChecked[index];
    console.log(newButtonsChecked[index]);
    console.log(newButtonsChecked);
    setButtonsChecked(newButtonsChecked);
  };

  return (
    <div className={classes["dot-container"]}>
      {dotStepArr.map((_, i) => {
        console.log(i);
        return (
          <>
            <input
              type="radio"
              key={i}
              checked={buttonsChecked[i]}
              className={classes.dot}
              ref={dotRef}
              onChange={() => changeHandler(i)}
              onClick={() => changeHandler(i)}
            />
            <span></span>
          </>
        );
      })}
    </div>
  );
};

export default Dots;
