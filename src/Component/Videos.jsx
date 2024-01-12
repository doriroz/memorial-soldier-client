import React from "react";
import classes from "./Videos.module.css";
import Share from "./Share";
import butterfly from "../assets/butterfly.gif";

const Videos = () => {
  return (
    <div>
      <div className={classes["strikethrough-text"]}>
        <p className={classes.text}>מילים לא מספיקות לתאר</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img src={butterfly} />
        <h4>גודל הגבורה כגודל האסון - צפו בסירטונים</h4>
        <img src={butterfly} />
      </div>
      <div style={{ height: "15rem" }}>
        <div className={classes["video-contianer"]}>
          <div className={classes["video-card"]}>
            <iframe
              src="https://www.youtube.com/embed/mCwXN8zJ_C4?si=PJMv7UMtF8WQRu9F"
              // frameborder="0"
            ></iframe>
          </div>

          <div className={classes["video-card"]}>
            <iframe
              src="https://www.youtube.com/embed/cmdUYq0DncE?si=7Pg82rIo6sc1Qfo0"
              // frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>

      <div className={classes.footer}>
        <Share />
        <h3>
          מתן אברג'יל ממושב חרמש. בן 19 היה בנופלו.{" "}
          <span className={classes.span}>יהי זכרו ברוך</span>
        </h3>
      </div>
    </div>
  );
};

export default Videos;
