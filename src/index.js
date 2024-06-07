import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css'; // Importa tus estilos personalizados

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* Envuelve tu App con BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
