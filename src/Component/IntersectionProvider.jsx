import React, { createContext, useLayoutEffect, useRef } from "react";
import classes from "./IntersectionProvider.module.css";

export const inerSecContext = createContext();

const IntersectionProvider = ({ children }) => {
  const h1Sec1Ref = useRef(null);
  const h1Sec2Ref = useRef(null);

  useLayoutEffect(() => {
    const continousIntersecting = () => {
      const option = {
        root: null,
        threshold: 0, // Adjust the threshold as needed
      };

      const h1Sec1Observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            console.log("Element is in the viewport");
            h1Sec1Ref.current.classList.add(classes.slideup);
            observer.unobserve(h1Sec1Ref.current);
          } else {
            console.log("Element is not in the viewport");
            h1Sec1Ref.current.classList.remove(classes.slideup);
          }
        });
      }, option);

      const h1Sec2Observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            console.log("Element is in the viewport");
            h1Sec2Ref.current.classList.add(classes.slideup);
            observer.unobserve(h1Sec2Ref.current);
          } else {
            console.log("Element is not in the viewport");
            h1Sec2Ref.current.classList.remove(classes.slideup);
          }
        });
      }, option);

      h1Sec1Observer.observe(h1Sec1Ref.current);
      h1Sec2Observer.observe(h1Sec2Ref.current);

      setTimeout(continousIntersecting, 1000);
    };
    continousIntersecting();
  }, []);

  return (
    <inerSecContext.Provider value={{ h1Sec1Ref, h1Sec2Ref }}>
      {children}
    </inerSecContext.Provider>
  );
};

export default IntersectionProvider;
