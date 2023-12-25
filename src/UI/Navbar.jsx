import React, { useRef } from "react";
import classes from "../UI/Navbar.module.css";

const Navbar = () => {
  const candleRef = useRef(null);
  const headRef = useRef(null);
  const clickHandle = () => {
    const imgElem = document.createElement("img");
    imgElem.src = "../src/assets/candle.gif";
    imgElem.className = classes.candle;
    headRef.current.removeChild(candleRef.current);
    headRef.current.insertBefore(imgElem, headRef.current.firstChild);
  };

  return (
    <div>
      <header ref={headRef} className={classes.header}>
        <p ref={candleRef} onClick={clickHandle}>
          להדלקת נר לזיכרו
        </p>
        {/* <img className={classes.candle} src="../src/assets/candle.gif" /> */}

        <a href="#sec_2">
          <p>תמונות בחייו</p>
        </a>
        <a href="#sec_3">
          <p>כותבים עליו</p>
        </a>
      </header>
    </div>
  );
};

export default Navbar;
