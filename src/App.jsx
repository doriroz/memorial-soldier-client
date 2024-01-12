import { useRef, useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import AddNote from "./Pages/AddNote";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const scrollRef = useRef(null);

  // useEffect(() => {
  //   window.onscroll = () => {
  //     if (
  //       document.body.scrollTop > 20 ||
  //       document.documentElement.scrollTop > 20
  //     ) {
  //       scrollRef.current.style.display = "block";
  //     } else {
  //       scrollRef.current.style.display = "none";
  //     }
  //   };
  // }, []);

  // const [isShow, setIsShow] = useState(false);

  // const handleAddNote = () => {
  //   console.log("dori");
  //   setIsShow(true);
  // };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/addNote",
      element: <AddNote />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
