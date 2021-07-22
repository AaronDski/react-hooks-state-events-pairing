import video from "../data/video.js";
import Buttons from "./Buttons.js";
import VideoDetails from "./VideoDetails.js";

function App( ) {
  console.log("Here's your data:", video);

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
      <hr></hr>
    </div>
  );
}

export default App;
