import React from 'react';
import { useHistory } from 'react-router-dom';

const DescriptivaPrueba = () => {
  const history = useHistory();

  return (
    <div className="container mt-5">
      <h1>Prueba Descriptiva</h1>
      <p>En esta prueba, evaluaremos características específicas del producto. Nos interesa conocer detalles objetivos sobre su apariencia, aroma y sabor.</p>
      <button className="btn btn-primary" onClick={() => history.push('/descriptiva-evaluacion')}>Iniciar Prueba Descriptiva</button>
      <button className="btn btn-secondary" onClick={() => history.push('/survey-selection')}>Atrás</button>
    </div>
  );
};

export default DescriptivaPrueba;
