import React from "react";
import classes from "./AddNote.module.css";

const AddNote = () => {
  return (
    <div className={classes.add_note}>
      {/* <h1>כותבים עליו</h1> */}
      <form action="">
        <div className={classes.label}>
          <label htmlFor="name">שם</label>
          <input type="text" id="name" />
        </div>
        <div>
          <h2>כמה מילים עליו:</h2>
          <textarea name="" id="" cols="100" rows="10"></textarea>
        </div>
        <button className={classes.button}>שלח</button>
      </form>
    </div>
  );
};

export default AddNote;
