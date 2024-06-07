import React from 'react';
import { Link } from 'react-router-dom';

const SurveySelection = () => (
  <div className="container mt-5">
    <h1>Seleccione una Encuesta</h1>
    <Link to="/afectiva-prueba" className="btn btn-primary mt-3">Prueba Afectiva</Link>
    <Link to="/descriptiva-prueba" className="btn btn-secondary mt-3">Prueba Descriptiva</Link>
  </div>
);

export default SurveySelection;
