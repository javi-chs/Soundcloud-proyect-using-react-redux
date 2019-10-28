import React from 'react';
import './App.scss';
//Servicios

//Componentes
import CustomFooter from './components/CustomFooter';
import CustomHeader from './components/CustomHeader';
import Search from './components/Search';

import { connect } from 'react-redux';

//Importamos las acciones
import { newSong } from './actions/newSong.js';
import {getSongs} from './actions/getSongs.js'; 

function App(props) {
  return (
    <div className="App">
      
      <CustomHeader/>
      
      <Search/>

        
      
      
      <CustomFooter/>
    
    </div>
  );
}
// Inyectamos estas props a APP para poder leer del estado
const mapStateToProps = state => ({
  id: state.song.id,
  titulo: state.song.title,
  imagen: state.song.artwork_url,
  genero: state.song.genre,
  fecha: state.song. created_at,

})
// Inyectamos estas props a APP que son metodos que alteran el estado 
// en este caso al menos, son los encargados de hacer llamadas a a las apis.
const mapDispatchToProps = dispatch => ({
  
  newSong: (id) => dispatch(newSong(id)),
  getSongs:(tag) => dispatch(getSongs(tag))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
