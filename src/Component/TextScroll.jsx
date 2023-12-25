import React from "react";

const textStyle = {
  display: "inline-block",
  whiteSpace: "nowrap",
};

const TextScroll = () => {
  return (
    <>
      <div style={textStyle}>
        <h2
          style={{
            fontSize: "40px",
            fontFamily: "Amatic SC",
            width: "47rem",
            textAlign: "right",
            paddingRight: "3rem",
            letterSpacing: "0.5rem",
            direction: "rtl",
          }}
        >
          סמל מתן אברג'יל ז"ל, בן 19 מגדוד 13 של גולני
          <br />
          לחם עם הצוות שלו כדי להגן על קיבוץ ניר עם.
          <br />
          במהלך הלחימה מחבל השליך רימון לתוך הנגמ"ש של
          <br />
          הצוות שלו - ומתן זינק עליו והקריב את חייו
          <br />
          חברו של מתן ז"ל, שיחזר את רגעי האימה:
          <br />
          "קיבלנו צרור של יריות על הנמ"ר. שמענו פיצוצים -
          <br />
          מתן התחיל לירות עליהם בלי סוף.
          <br />
          פתאום קיבלנו רימון לבפנים - לתוך הנמ"ר".
          <br />
          דניאל, שטיפל בפצוע אחר, עוד ראה בזווית העין את מתן:
          <br />
          "הרימון נתקע שם באיזושהי פינה. אז מתן בא,
          <br />
          ניסה להוציא את זה, אמר 'פאק' - ופשוט קפץ על הרימון".
        </h2>
      </div>
    </>
  );
};

export default TextScroll;
