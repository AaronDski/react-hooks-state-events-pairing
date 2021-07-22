import video from "../data/video.js";

function Comments (){

    return (
        <>
            <h2>{video.comments.length} Comments</h2>
            <div>
                {video.comments.map(item => {
                    return (
                        <>
                        <h3>{item.user}</h3>
                        <p>{item.comment} </p>
                        </>
                    )
                }) }
            </div>            
        </>
    )
}
export default Comments