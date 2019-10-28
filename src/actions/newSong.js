import axios from 'axios';
const BASE_URL = 'https://api.soundcloud.com';
const TOKEN = 'client_id=aa06b0630e34d6055f9c6f8beb8e02eb';

export const newSong = (id) => (dispatch) => {
    
    axios.get(`${BASE_URL}\\tracks\\${id}?${TOKEN}`)
    .then( response => {
        console.log(response.data);
        dispatch({
            type: 'NEW_SONG',
            payload: {
                id: response.data.id,
                title: response.data.title,
                artwork_url: response.data.artwork_url,
                genre: response.data.genre,
                created_at: response.data.created_at
            },
        })
    })
    .catch( error => { console.log(`Error: ${error}`) });
}





