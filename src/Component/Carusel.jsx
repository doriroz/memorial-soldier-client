import React, { useState, useEffect, useRef } from "react";
import classes from "./Carusel.module.css";
import Note from "./Note";
import Dots from "./Dots";
import Button from "../UI/Button";
import { getNotes, getNotesAsync } from "../UtilsRoute/utils";
// import { MongoClient } from "mongodb";
// import ServiceHero from "../Services/notesService";

const Carusel = (props) => {
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
      contact: ":דימה בולט, מחנכו של מתן בבית החינוך אמית אופק באור עקיבא",
      context: `כשעמדתי בכיתה וסיפרתי על הגבורה של רועי קליין  היד, קצין שקפץ על רימון
        והציל את חבריו החיילים במלחמת לבנון השניה, לא העליתי בדעתי שאחד התלמידים שלי
                יפעל באותה גבורה ויקפוץ על רימון כדי להציל את חבריו`,
    },
  ];

  // context: `כשעמדתי בכיתה וסיפרתי על הגבורה של רועי קליין  היד, קצין שקפץ על רימון
  //       <br />
  //       והציל את חבריו החיילים במלחמת לבנון השניה, לא העליתי בדעתי שאחד התלמידים שלי
  //       <br />
  //       יפעל באותה גבורה ויקפוץ על רימון כדי להציל את חבריו`,

  const dotSteps = Math.round(Math.ceil(noteArr.length / 2));
  const dotStepArr = Array.from({ length: dotSteps }, (_, i) => {
    i + 1;
  });

  const [index, setIndex] = useState(0);
  const [buttonsChecked, setButtonsChecked] = useState(
    dotStepArr.map((_, i) => (i == 0 ? true : false))
  );
  const [isLoading, setIsLoading] = useState(true);
  const [notesData, setNotesData] = useState();
  const prevRef = useRef();
  const nextRef = useRef();
  const caruselRef = useRef();
  const noteRef = useRef();

  let notesArray = [];
  useEffect(() => {
    const fetchNotes = async () => {
      notesArray = await getNotesAsync("notes/");
      console.log(notesArray);
      setNotesData(notesArray);
      setIsLoading(false);
      prevRef.current.style.opacity = 0;
    };
    fetchNotes();
  }, []);

  // useEffect(() => {
  //   prevRef.current.style.opacity = 0;
  // }, [notesArray]);

  const prevHandler = () => {
    const newIndex = Math.max(index - 1, 0);

    prevRef.current.style.opacity = 1;
    nextRef.current.style.opacity = 1;
    nextRef.current.disabled = false;
    if (newIndex == 0) {
      prevRef.current.style.opacity = 0;
      prevRef.current.disabled = true;
    }

    console.log(noteRef.current.getNoteWidth());
    caruselRef.current.style.transform = `translateX(${
      -newIndex * noteRef.current.getNoteWidth()
    }px)`;
    console.log("prev: " + newIndex);

    changeHandler(newIndex);
    setIndex(newIndex);
  };

  const nextHandler = () => {
    const newIndex = Math.min(index + 1, caruselRef.current.children.length);
    const arrLength = caruselRef.current.children.length;

    prevRef.current.style.opacity = 1;
    prevRef.current.disabled = false;
    nextRef.current.style.opacity = 1;
    if (newIndex == arrLength - 3) {
      nextRef.current.style.opacity = 0;
      nextRef.current.disabled = true;
    }

    caruselRef.current.style.transform = `translateX(${
      -newIndex * noteRef.current.getNoteWidth()
    }px)`;
    console.log("next: " + newIndex);

    changeHandler(newIndex);
    setIndex(newIndex);
  };

  const changeHandler = (idx) => {
    const newButtonsChecked = buttonsChecked.map(() => false);
    console.log("change : " + idx);
    newButtonsChecked[idx] = !newButtonsChecked[idx];
    setButtonsChecked(newButtonsChecked);
  };

  const dotHandler = (idx) => {
    const arrLength = caruselRef.current.children.length;
    prevRef.current.style.opacity = 1;
    nextRef.current.style.opacity = 1;
    prevRef.current.disabled = false;
    nextRef.current.disabled = false;
    if (idx == 0) {
      prevRef.current.style.opacity = 0;
      prevRef.current.disabled = true;
      nextRef.current.style.opacity = 1;
    }
    if (idx == arrLength - 3) {
      prevRef.current.style.opacity = 1;
      nextRef.current.style.opacity = 0;
      nextRef.current.disabled = true;
    }

    caruselRef.current.style.transform = `translateX(${
      -idx * noteRef.current.getNoteWidth()
    }px)`;
    console.log("idx: " + idx);

    changeHandler(idx);
    setIndex(idx);
  };

  return (
    <>
      {isLoading ? <div className={classes.loader}></div> : null}
      {!isLoading && (
        <div className={classes["carousel-container"]}>
          <div className={classes.carousel} ref={caruselRef}>
            {notesData.map((note, i) => {
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
          <Dots
            dotArr={buttonsChecked}
            changeHandler={changeHandler}
            dotHandler={dotHandler}
            prev={prevHandler}
            next={nextHandler}
          />

          <Button text="מעוניין לכתוב לזכרו" />
        </div>
      )}
    </>
  );
};

export default Carusel;
