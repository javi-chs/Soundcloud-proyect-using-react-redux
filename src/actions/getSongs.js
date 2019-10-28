import axios from 'axios';
const BASE_URL = 'https://api.soundcloud.com/tracks?q=';
const USER = '&client_id=aa06b0630e34d6055f9c6f8beb8e02eb';


export const getSongs = (tag)=>(dispatch)=>{
    axios.get(`${BASE_URL}${tag}${USER}`)
    
    .then(response =>{
        console.log(response.data);
        dispatch({
            type: 'GET_SONGS',
            payload: {
                songs:response.data,
            },
        })
    
    }
        )
    
    .catch( error => { console.log(`Error: ${error}`) })


}