import React from "react";
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
      <img style={imageScroll} src="../src/assets/matan6.jpg" />
      <img style={imageScroll} src="../src/assets/matan9.jpg" />
    </div>
  );
};

export default ImageScroll;
