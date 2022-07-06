import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';

// Se importan los estilos globales
import './styles.css'

//
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title={ 123 }/> */}
        {/* Si se envía solamente title como a continuación se entenderá que se le 
        está enviando un true o un valor boolean*/}
        {/* <FirstApp title /> */}
        <FirstApp title='Hola Soy Goku' subtitle={ 213 } />
    </React.StrictMode>
);