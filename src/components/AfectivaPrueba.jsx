import React from 'react';
import { useHistory } from 'react-router-dom';

const AfectivaPrueba = () => {
  const history = useHistory();

  return (
    <div className="container mt-5">
      <h1>Prueba Afectiva</h1>
      <p>En esta prueba, evaluaremos tu percepción subjetiva del producto. Queremos saber qué tan agradable te parece en general.</p>
      <button className="btn btn-primary" onClick={() => history.push('/afectiva-evaluacion')}>Iniciar Prueba Afectiva</button>
      <button className="btn btn-secondary" onClick={() => history.push('/survey-selection')}>Atrás</button>
    </div>
  );
};

export default AfectivaPrueba;
