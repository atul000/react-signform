import React from "react";
import ReactPlayer from "react-player/lazy";

const Video = () => {
  return (
    <div>
      <h1>Videp component</h1>
      <hr />
      <ReactPlayer
        // light={true}
        width="700px"
        controls={true}
        url="https://res.cloudinary.com/dyrannvyu/video/upload/v1602242889/mbehkrzwfmx0grhdlp90.mp4"
      />
    </div>
  );
};

export default Video;
