import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Importamos las dependencias de redux para React.
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';


// Importamos todos los reducers de index.js
import RootReducers from './reducers';

//Creamos el storage a partir del conjunto de reducers.
const store = createStore(RootReducers, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
    
        <App />
    
    </Provider>


,document.getElementById('root'));

serviceWorker.unregister();
