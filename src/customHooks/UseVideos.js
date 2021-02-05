import {useState,useEffect} from 'react';
import youtube from '../api/youtube';

const UseVideos = (defaultSearchTerm)=>{
    const [videos,setVideo] = useState([]);

    useEffect(()=>{
        onSearchSubmit(defaultSearchTerm);
    },[defaultSearchTerm])

    const onSearchSubmit= async(term)=>{
        const response = await youtube.get('/search',{
            params:{
                q:term
            }
        })
        setVideo(response.data.items);
        
    }  

    return [videos,onSearchSubmit];
}

export default UseVideos;