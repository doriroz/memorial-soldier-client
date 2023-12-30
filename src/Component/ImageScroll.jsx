import React from "react";
import mt6 from "../assets/matan6.jpg";
import mt9 from "../assets/matan9.jpg";
// const imageStyle = {
//   display: "inline-block",
//   whiteSpace: "nowrap",
// };

const imageScroll = {
  width: "15rem",
  borderRadius: "5%",
  border: "5px solid whitesmoke",
};

const ImageScroll = () => {
  return (
    <div
      style={{
        display: "grid",
        paddingRight: "15rem",
        margin: "2rem 0",
      }}
    >
      <img style={imageScroll} src={mt6} />
      <img style={imageScroll} src={mt9} />
    </div>
  );
};

export default ImageScroll;
