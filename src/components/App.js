import React,{useState,useEffect} from 'react';
import SearchList from './SearchList';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import UseVideos from '../customHooks/UseVideos';

const App = ()=>{
    const [selectedVideo,setselectedVideo] = useState(null);//one
    
    const [videos,onSearchSubmit] = UseVideos('movies');
    
    useEffect(()=>{
        setselectedVideo(videos[0])
    },[videos])
        return (
            <div className="ui container">
                <SearchList childToParent={onSearchSubmit}/>
                <div className="ui grid" >
                <div className="ui row">
                <div className="eleven wide column">
                <VideoDetails selectedVideo={selectedVideo}/>
                </div>
                <div className="five wide column"> <VideoList VIDEOS={videos} onClickVideo={(video)=>setselectedVideo(video)}/></div>
                </div>
                </div>
            </div>
        );
    
    
}

export default App;