import React from "react";
import classes from "./Share.module.css";
import share from "../assets/share.png";

const Button = (props) => {
  const style = {
    color: "black",
    // background: "white",
    background: "transparent",
    width: "2rem",
  };
  const handleClick = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Matan Memorial Web Page",
          text: "check this young man heroic story on this memorial web page",
          url: "https://doriroz.github.io/hero/#",
        });
      } else {
        alert("This share API is not supported by the browser");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button className={classes.share} onClick={handleClick}>
      <img style={style} src={share} />
      {/* style={style} */}
      <span>שתף</span>
    </button>
  );
};

export default Button;
