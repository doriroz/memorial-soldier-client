import { useRef, useEffect, useState } from "react";
import "./App.css";
import Section1 from "./Component/Section1";
import Section2 from "./Component/Section2";
import Section3 from "./Component/Section3";
import IntersectionProvider from "./Component/IntersectionProvider";
import Navbar from "./UI/Navbar";
import Title from "./Component/Title";
import Scrolling from "./Component/Scrolling";
import TextScroll from "./Component/TextScroll";
import ImageScroll from "./Component/ImageScroll";
import Gallery from "./Component/Gallery";
import Carusel from "./Component/Carusel";
import Videos from "./Component/Videos";
import H1 from "./UI/H1";
import AddNote from "./Component/AddNote";

function App() {
  const scrollRef = useRef(null);

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

  const [isShow, setIsShow] = useState(false);

  const handleAddNote = () => {
    console.log("dori");
    setIsShow(true);
  };

  return (
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
        <button onClick={handleAddNote}>פתח</button>
        {/* <div className={`addnote-container ${isShow ? "addnote-show" : ""}`}>
          <AddNote />
        </div> */}
      </Section2>
      <Section3>
        {/* <H1 title="כותבים עליו"></H1> */}
        <Carusel />
        <Videos />
      </Section3>
      <a href="#" id="scroll-to-top" ref={scrollRef}>
        ↑
      </a>
    </IntersectionProvider>
  );
}

export default App;
