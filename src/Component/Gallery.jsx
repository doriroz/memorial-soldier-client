import React from "react";
import classes from "./Gallery.module.css";
import mt2 from "../assets/matan2.jpg";
import mt4 from "../assets/matan4.jpg";
import mt6 from "../assets/matan6.jpg";
import mt8 from "../assets/matan8.jpg";

const Gallery = () => {
  const gridImg1 = `${classes["img_grid"]} ${classes.img1}`;
  const gridImg2 = `${classes["img_grid"]} ${classes.img2}`;
  const gridImg3 = `${classes["img_grid"]} ${classes.img3}`;
  const gridImg4 = `${classes["img_grid"]} ${classes.img4}`;

  return (
    <div className={classes["img_container"]}>
      <div>
        <img className={gridImg1} src={mt2} />
        <img className={gridImg4} src={mt8} />
      </div>
      <div className={classes["p-gallery"]}>
        <div>
          <p>
            עד לפני אותו הרגע, שומעים את כל הסיפורים על גיבורי ישראל ולא באמת
            מבינים
          </p>
          <p>
            רק לאחר שיורד האסימון ומתוך השקט, עולה עוד מעשה גבורה ששמור למעטים
            מבין האנשים{" "}
          </p>
          <p>
            ורק אז מבינים שיש אנשים מיוחדים, מלאכים. מתן הוא אחד כזה. גיבור
            ישראל
          </p>
        </div>
      </div>
      <div>
        <img className={gridImg3} src={mt4} />
        <img className={gridImg2} src={mt6} />
      </div>
    </div>
  );
};

export default Gallery;
