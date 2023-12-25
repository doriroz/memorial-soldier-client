import React, { useEffect, useRef } from "react";
import classes from "./Carusel.module.css";
import Note from "./Note";
import Dots from "./Dots";

const Carusel = () => {
  const noteArr = [
    {
      contact: ":חברו לנמר, דניאל",
      context:
        "קשה להגיד את זה, אבל יחד עם זאת שמחתי להגיד שהוא גיבור, שהוא הציל אותנו",
    },
    {
      contact: ":חברו לנמר, אדרי",
      context: `.תודה,תודה להשם ששלח אליי מלאך 
      <br/>
      .מתן, איזה איש היית, איזה חבר היית. מאחל לכל אחד מישהו כמוך בחיים 
      <br/>
      ,אתה תלווה אותי לכל החיים ואני אשמור אותך קרוב לנצח
      <br/>
      הלוואי שהייתי יכול להודות לך שוב שהצלת לנו את החיים, שנתת את שלך למען שלנו`,
    },
    {
      contact: ":חברו לנמר, אמרי",
      context: `בשמנו ובשם כל החברים אנחנו מודים לך מאוד, הצלת את כולנו ושמרת עלינו בגופך
      <br/>
      אתה גיבור אמיתי, אתה נשמה אמיתית. לנצח אזכיר אותך ואספר את הסיפור שלך, בכל מקום שאגיע אליו`,
    },
    {
      contact: ":יובל מצרי, חברו מספר",
      context: `מתן היה איתי מהטירונות ביחד, אדם שתמיד נתן תמיד רצה לעשות למען אחרים
        <br/>
        לא הופתעתי שהוא עשה את זה. זה פשוט הוא. 
        הייתי מתחלק איתו בהכל, היינו רבים בינינו מי יקבל את הביס האחרון, כל אחד רוצה לוותר לשני
        <br/>
        הוא אף פעם לא התלונן תמיד עם חיוך על פנים`,
    },
    {
      contact: "דימה בולט, מחנכו של מתן בבית החינוך אמית אופק באור עקיבא",
      context: "dfsfds",
    },
  ];

  // context: `כשעמדתי בכיתה וסיפרתי על הגבורה של רועי קליין  היד, קצין שקפץ על רימון
  //       <br />
  //       והציל את חבריו החיילים במלחמת לבנון השניה, לא העליתי בדעתי שאחד התלמידים שלי
  //       <br />
  //       יפעל באותה גבורה ויקפוץ על רימון כדי להציל את חבריו`,

  const prevRef = useRef();
  const nextRef = useRef();
  const caruselRef = useRef();
  //   const containerRef = useRef();
  const noteRef = useRef();
  let index = 0;

  useEffect(() => {
    prevRef.current.style.opacity = 0;
  }, []);

  const prevHandler = () => {
    index = Math.max(index - 1, 0);

    prevRef.current.style.opacity = 1;
    nextRef.current.style.opacity = 1;
    if (index == 0) {
      prevRef.current.style.opacity = 0;
      nextRef.current.style.opacity = 1;
    }

    caruselRef.current.style.transform = `translateX(${
      -index * noteRef.current.getNoteWidth()
    }px)`;
  };

  const nextHandler = () => {
    index = Math.min(index + 1, caruselRef.current.children.length);
    const dd = caruselRef.current.children.length;

    prevRef.current.style.opacity = 1;
    nextRef.current.style.opacity = 1;
    if (index == dd - 3) {
      prevRef.current.style.opacity = 1;
      nextRef.current.style.opacity = 0;
    }

    caruselRef.current.style.transform = `translateX(${
      -index * noteRef.current.getNoteWidth()
    }px)`;
  };

  return (
    <div className={classes["carousel-container"]}>
      <div className={classes.carousel} ref={caruselRef}>
        {noteArr.map((note, i) => {
          return (
            <Note
              contact={note.contact}
              context={note.context}
              ref={noteRef}
              key={i}
            />
          );
        })}
      </div>
      <button
        className={classes["prev-btn"]}
        ref={prevRef}
        onClick={prevHandler}
      >
        ←
      </button>
      <button
        className={classes["next-btn"]}
        ref={nextRef}
        onClick={nextHandler}
      >
        →
      </button>
      <Dots noteArr={noteArr} prev={prevHandler} next={nextHandler} />
    </div>
  );
};

export default Carusel;
