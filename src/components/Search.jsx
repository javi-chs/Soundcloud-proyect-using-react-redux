import React from "react";
import { connect } from 'react-redux';
import {getSongs} from '../actions/getSongs';
import "./style/Search.scss"
function reproduce(/*la url del stream*/){

}
function pausa(){}



function Search(props){
    return(
        <div className="body">
            <div className="Search">
                    <input 
                    type="text" 
                    placeholder="Introduce una canción"
                    onKeyPress={ev =>
                    {   if(ev.key==="Enter"){
                        console.log(ev.target.value);
                        props.getSongs(ev.target.value);
                    }

                    } }
                    ></input>
                    
             </div>
             <h1> Resultados</h1>
             <div className = "images">
              
             {props.songs.map(song => (
              
                
                     <img className="Songs"
                        key ={song.id}
                         src={song.artwork_url}
                         
                      />
            ))}
             </div>

             <div className="botones">
               <button onClick={console.log("play")}>Play</button>
               <button onClick={console.log("pause")}>Pause</button>
             </div>
        </div>  
    );
}



// Inyectamos estas props a APP para poder leer del estado
const mapStateToProps = state => ({
    songs: state.songs.songs,
   
  })
  // Inyectamos estas props a APP que son metodos que alteran el estado 
  // en este caso al menos, son los encargados de hacer llamadas a a las apis.
  const mapDispatchToProps = dispatch => ({
    getSongs:(tag) => dispatch(getSongs(tag))
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search);
