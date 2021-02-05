import React from 'react';
import './VideoItem.css';



const VideoItem = (props)=>{
    
    return(
        <div className="video-item item" onClick={(e)=>{props.onClickVideo(props.video)}}>
            <img className="ui image" key={props.video.id.videoId}
            src={props.video.snippet.thumbnails.default.url}  alt={props.video.snippet.description}/>
            <div  className="content">
            <div className="header">{props.video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;