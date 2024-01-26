import React, { useRef, useEffect, useState } from "react";
import "../App.css";
import Section1 from "../Layout/Section1";
import Section2 from "../Layout/Section2";
// import Section2Raplica from "../Layout/Section2Raplica";
import Section3 from "../Layout/Section3";
import IntersectionProvider from "../Component/IntersectionProvider";
import Navbar from "../UI/Navbar";
import Title from "../Component/Title";
import Scrolling from "../Component/Scrolling";
import TextScroll from "../Component/TextScroll";
import ImageScroll from "../Component/ImageScroll";
import Gallery from "../Component/Gallery";
import Carusel from "../Component/Carusel";
import Videos from "../Component/Videos";
import Utils from "../UtilsRoute/utils";
// https://youtu.be/yP-KX8xqS8Y?si=DhnB7it34HGE478t

const Home = () => {
  const scrollRef = useRef(null);
  const getNotes = (route) => {
    return fetch("http://localhost:3000/" + route)
      .then((response) => response.json())
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollRef.current.style.display = "block";
      } else {
        scrollRef.current.style.display = "none";
      }
    };
  }, []);

  useEffect(() => {
    getNotes("notes/").then((data) => console.log(data));
  }, []);

  return (
    <div className="bckground">
      <IntersectionProvider>
        <Section1>
          <Navbar />
          <Title />
          <Scrolling>
            <ImageScroll />
            <TextScroll />
          </Scrolling>
        </Section1>
        <Section2>
          {/* <H1 title="תמונות בחייו" /> */}
          <Gallery />
        </Section2>
        {/* <H1 title="כותבים עליו"></H1> */}
        <Section3>
          <Carusel />
          <Videos />
        </Section3>
        <a href="#" id="scroll-to-top" ref={scrollRef}>
          ↑
        </a>
      </IntersectionProvider>
    </div>
  );
};

export default Home;
