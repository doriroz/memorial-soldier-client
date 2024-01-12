import React, { useRef, useState, useEffect } from "react";
import classes from "./Section2.module.css";
const Section2Raplica = ({ children }) => {
  const h1Sec1Ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const option = { root: null, threshold: 0 };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, option);
    const targetRef = h1Sec1Ref.current;
    observer.observe(targetRef);
    console.log(isVisible);
    isVisible
      ? h1Sec1Ref.current.classList.add(classes.slideup)
      : h1Sec1Ref.current.classList.remove(classes.slideup);

    return () => {
      observer.unobserve(targetRef);
    };
  }, [isVisible]);

  return (
    <section id="sec_2" className={classes.section}>
      <h1 ref={h1Sec1Ref}>תמונות בחייו</h1>
      {children}
    </section>
  );
};

export default Section2Raplica;
