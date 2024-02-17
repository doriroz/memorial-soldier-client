import React, { useRef, useState } from "react";
import classes from "./AddNote.module.css";
import { addNoteAsync } from "../UtilsRoute/utils";
import { Link } from "react-router-dom";

const AddNote = () => {
  const contactRef = useRef();
  const contextRef = useRef();
  const buttontRef = useRef();
  const [isDisabled, setIsDisabled] = useState(true);

  const changeHandler = () => {
    console.log("contactRef : " + contactRef.current.value);
    console.log("contextRef : " + contextRef.current.value);
    if (
      contactRef.current.value != "" &&
      contextRef.current.value &&
      isDisabled
    ) {
      setIsDisabled(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      contact: e.target[0].value,
      context: e.target[1].value,
    };
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    addNoteAsync("notes/", formData);
    // addNoteAsync("addnote/", formData);
  };

  const buttonStyled = isDisabled
    ? `${classes.button} ${classes.btn_disabled}`
    : `${classes.button}`;
  return (
    <div className={classes.add_note}>
      {/* <h1>כותבים עליו</h1> */}
      <form action="/" method={"POST"} onSubmit={submitHandler}>
        <div className={classes.label}>
          <label htmlFor="name">שם</label>
          <input
            name="contact"
            type="text"
            id="name"
            ref={contactRef}
            onChange={changeHandler}
          />
        </div>
        <div>
          <h2>כמה מילים עליו:</h2>
          <textarea
            name="context"
            id=""
            cols="100"
            rows="10"
            ref={contextRef}
            onChange={changeHandler}
          ></textarea>
        </div>

        <button className={buttonStyled} disabled={isDisabled} ref={buttontRef}>
          שלח
        </button>
      </form>
    </div>
  );
};

export default AddNote;
