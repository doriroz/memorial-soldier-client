import React, { useEffect, useRef } from "react";

const YouTubePlayer = () => {
  const playerRef = useRef();
  return <div ref={playerRef}></div>;
};

export default YouTubePlayer;
