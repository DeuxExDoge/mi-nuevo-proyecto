import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container mt-5">
    <h1>Bienvenido a la Evaluación Sensorial</h1>
    <Link to="/survey-selection" className="btn btn-primary mt-3">Iniciar Encuesta</Link>
  </div>
);

export default Home;
