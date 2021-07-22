
function VideoDetails (props) {
// title , views , dateuploaded, like btn , dislike btn, comments, comments toggle btn,
    return (
        <>
            <h2>{props.title}</h2>
            <p> {props.views} Views | Uploaded {props.createdAt}</p>


        </>
    )


}

export default VideoDetails