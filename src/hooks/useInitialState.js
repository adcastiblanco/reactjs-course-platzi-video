import {useState, useEffect} from 'react';

const useInitialState = (API) => {
    const [video, setVideo] = useState({myList : [], trends :[], originals: []})
useEffect(() =>{
    fetch(API)
    .then(response => response.json())
    .then(data => setVideo(data))
},[])
return video
}

export default useInitialState