const INITIAL_STATE = {
    songs:[]
}

const songs = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case 'GET_SONGS':
            return{
                ...state,
                songs:action.payload.songs
            }
        default:
            return state;
    }


}

export default songs;