import React from "react";
import video from "../data/video.js";
import Buttons from "./Buttons.js";
import VideoDetails from "./VideoDetails.js";
import Comments from "./Comments"
import {useState} from 'react'

function App( ) {
  // console.log("Here's your data:", video);

  const [showComments, setShowComments] = useState(false);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        // src=
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <VideoDetails title={video.title} views={video.views} createdAt={video.createdAt}/>
      <Buttons />
      <button onClick={() => setShowComments(!showComments)}>{showComments ? "Hide Comments" : "Show Commets"}</button>

      <hr></hr>
      {showComments ? <Comments /> : ""}
      {/* <Comments /> */}
    </div>
  );
}

export default App;
