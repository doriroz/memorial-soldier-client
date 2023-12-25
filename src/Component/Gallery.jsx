import React from "react";
import classes from "./Gallery.module.css";

const Gallery = () => {
  const gridImg1 = `${classes["img_grid"]} ${classes.img1}`;
  const gridImg2 = `${classes["img_grid"]} ${classes.img2}`;
  const gridImg3 = `${classes["img_grid"]} ${classes.img3}`;
  const gridImg4 = `${classes["img_grid"]} ${classes.img4}`;

  return (
    <div className={classes["img_container"]}>
      <div>
        <img className={gridImg1} src="../src/assets/matan2.jpg" />
        <img className={gridImg4} src="../src/assets/matan8.jpg" />
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
        <img className={gridImg3} src="../src/assets/matan4.jpg" />
        <img className={gridImg2} src="../src/assets/matan6.jpg" />
      </div>
    </div>
  );
};

export default Gallery;
