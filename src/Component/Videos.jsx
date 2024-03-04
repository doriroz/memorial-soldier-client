import React, { useRef, useState } from "react";
import classes from "./Videos.module.css";
import Share from "./Share";
import butterfly from "../assets/butterfly.gif";
// import tavRecords from "../assets/tav-records.png";
import musicnote from "../assets/musical-tav.png";
import matanSong from "../assets/heroForever.mp3";

const Videos = () => {
  // const [isShow, setIsShow] = useState(false);
  const [title, setTitle] = useState("לשמיעת השיר, לחץ כאן");

  const audioRef = useRef();

  const clickMouseHandler = () => {
    audioRef.current.play();
    setTitle("");
    // setIsShow(false);
  };

  const mouseEnterHandler = () => {
    audioRef.current.play();
    // if (!isShow) {
    //   setIsShow(true);
    // }
  };

  const mouseLeaveHandler = () => {
    audioRef.current.pause();
  };

  // const toolTip = isShow ? (
  //   <p className={classes.tooltip}>לחץ על התווים לשמיעת השיר</p>
  // ) : null;

  // const imageStyle = isShow
  //   ? `${classes.tavs} ${classes.imgAnimation}`
  //   : `${classes.tavs}`;

  return (
    <div>
      <div className={classes["strikethrough-text"]}>
        <p className={classes.text}>מילים לא מספיקות לתאר</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h4>גודל הגבורה כגודל האסון - צפו בסירטונים</h4>
      </div>
      <div style={{ height: "15rem" }}>
        <div className={classes["video-contianer"]}>
          <div className={classes["video-card"]}>
            <iframe src="https://www.youtube.com/embed/mCwXN8zJ_C4?si=PJMv7UMtF8WQRu9F" />
          </div>
          <audio src={matanSong} ref={audioRef} />
          <div className={classes["ttpimg-container"]}>{/* {toolTip} */}</div>

          <div className={classes["video-card"]}>
            <iframe src="https://www.youtube.com/embed/cmdUYq0DncE?si=7Pg82rIo6sc1Qfo0" />
          </div>
        </div>
      </div>

      <div className={classes.footer}>
        <Share />
        <img
          title={title}
          src={musicnote}
          className={classes.tav}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          onClick={clickMouseHandler}
        />
        <img src={butterfly} className={classes.butterfly} />
        <h3>
          מתן אברג'יל ממושב חרמש. בן 19 היה בנופלו.{" "}
          <span className={classes.span}>יהי זכרו ברוך</span>
        </h3>
      </div>
    </div>
  );
};

export default Videos;
