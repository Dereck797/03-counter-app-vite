import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';

// Se importan los estilos globales
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* title y subtitle son propiedades del componente  */}
        <FirstApp title="Hola, Soy Goku" subtitle={123} />
    </React.StrictMode>
);