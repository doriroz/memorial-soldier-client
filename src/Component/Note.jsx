import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import classes from "./Note.module.css";

const Note = forwardRef((props, ref) => {
  const ctxtRef = useRef();
  const noteRef = useRef();

  useEffect(() => {
    ctxtRef.current.innerHTML = props.context;
  }, []);

  useImperativeHandle(ref, () => ({
    getNoteWidth: () => {
      return noteRef.current.offsetWidth + 115;
    },
  }));

  return (
    <div className={classes["note-card"]} ref={noteRef}>
      <div className={classes["note-header"]}>{props.contact}</div>
      <div className={classes["note-content"]} ref={ctxtRef}></div>
    </div>
  );
});

export default Note;
