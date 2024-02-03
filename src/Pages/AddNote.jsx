import React, { useRef } from "react";
import classes from "./AddNote.module.css";
import { addNoteAsync } from "../UtilsRoute/utils";
import { Link } from "react-router-dom";

const AddNote = () => {
  const contactRef = useRef();
  const contextRef = useRef();
  const buttontRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      contact: e.target[0].value,
      context: e.target[1].value,
    };
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    addNoteAsync("addnote/", formData);
  };

  return (
    <div className={classes.add_note}>
      {/* <h1>כותבים עליו</h1> */}
      <form action="/" method={"POST"} onSubmit={submitHandler}>
        <div className={classes.label}>
          <label htmlFor="name">שם</label>
          <input name="contact" type="text" id="name" />
        </div>
        <div>
          <h2>כמה מילים עליו:</h2>
          <textarea name="context" id="" cols="100" rows="10"></textarea>
        </div>

        <button className={classes.button} disabled>
          שלח
        </button>
      </form>
    </div>
  );
};

export default AddNote;
