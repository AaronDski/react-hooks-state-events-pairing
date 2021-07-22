import {useState} from 'react'
import video from "../data/video.js";



function Buttons () {

    return(
        <>
            <button>{video.upvotes}👍</button>
            <button>{video.downvotes}👎</button>
        </>
    )

}

export default Buttons