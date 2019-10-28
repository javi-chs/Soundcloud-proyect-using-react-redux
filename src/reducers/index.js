import { combineReducers } from 'redux';

//Dependencias de Reducers
import song from './song';
import songs from './songs';

// Exportamos CombineReducers donde alojaremos todos los reducers
export default combineReducers({
    song,
    songs
});