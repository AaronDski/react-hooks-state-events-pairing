import {useState} from 'react'
import video from "../data/video.js";



function Buttons () {

    const [addVotes, setVotes] = useState(video.upvotes)
    const [downVotes, setDownVotes] = useState(video.downvotes)

    return(
        <>
            <button onClick={() => setVotes(addVotes + 1)}>{addVotes}👍</button>
            <button onClick={() => setDownVotes(downVotes + 1)}>{downVotes}👎</button>
            <br></br>
            <br></br>
            {/* <button onToggle={() => }>Hide Comments</button> */}
        </>
    )

}

export default Buttons