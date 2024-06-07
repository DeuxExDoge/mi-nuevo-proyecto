import React from 'react';
import { useHistory } from 'react-router-dom';

const DescriptivaEvaluacion = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para guardar datos
    localStorage.setItem('descriptivaCompleta', true);
    if (localStorage.getItem('afectivaCompleta')) {
      history.push('/survey-selection'); // Redirige a la pantalla de enviar resultados
    } else {
      history.push('/survey-selection'); // Redirige a la pantalla de selección de prueba
    }
  };

  return (
    <div className="container mt-5">
      <h1>Evaluación Descriptiva</h1>
      <form onSubmit={handleSubmit}>
        {/* Repetir estructura para cada pregunta */}
        <div className="form-group">
          <label>Color: Desde Muy Claro (1) a Muy Oscuro (5)</label>
          <div className="rating">
            <input type="radio" name="color" value="1" id="color1" />
            <label htmlFor="color1">⭐</label>
            <input type="radio" name="color" value="2" id="color2" />
            <label htmlFor="color2">⭐</label>
            <input type="radio" name="color" value="3" id="color3" />
            <label htmlFor="color3">⭐</label>
            <input type="radio" name="color" value="4" id="color4" />
            <label htmlFor="color4">⭐</label>
            <input type="radio" name="color" value="5" id="color5" />
            <label htmlFor="color5">⭐</label>
          </div>
          <textarea className="form-control mt-2" placeholder="Comentarios sobre el color"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar Evaluación</button>
        <button type="button" className="btn btn-secondary" onClick={() => history.goBack()}>Atrás</button>
      </form>
    </div>
  );
};

export default DescriptivaEvaluacion;
