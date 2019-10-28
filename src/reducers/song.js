const INITIAL_STATE = {
    id: 0,
    title: '',
    artwork_url: '',
    genre: '',
    created_at: ''
}

const song = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'NEW_SONG':
            return {
                ...state,
                id: action.payload.id,
                title: action.payload.title,
                artwork_url: action.payload.artwork_url,
                genre: action.payload.genre,
                created_at: action.payload.created_at
            }
        default:
            return state;
    }
}

export default song;