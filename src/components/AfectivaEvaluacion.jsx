import React from 'react';
import { useHistory } from 'react-router-dom';


const AfectivaEvaluacion = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para guardar datos
    localStorage.setItem('afectivaCompleta', true);
    if (localStorage.getItem('descriptivaCompleta')) {
      history.push('/survey-selection'); // Redirige a la pantalla de enviar resultados
    } else {
      history.push('/survey-selection'); // Redirige a la pantalla de selección de prueba
    }
  };

  return (
    <div className="container mt-5">
      <h1>Evaluación Sensorial Afectiva Detallada</h1>
      <form onSubmit={handleSubmit}>
        {/* Repetir estructura para cada pregunta */}
        <div className="form-group">
          <label>Visual - Apariencia: Muy Desagradable (1) a Muy Agradable (5)</label>
          <div className="rating">
            <input type="radio" name="apariencia" value="1" id="apariencia1" />
            <label htmlFor="apariencia1">⭐</label>
            <input type="radio" name="apariencia" value="2" id="apariencia2" />
            <label htmlFor="apariencia2">⭐</label>
            <input type="radio" name="apariencia" value="3" id="apariencia3" />
            <label htmlFor="apariencia3">⭐</label>
            <input type="radio" name="apariencia" value="4" id="apariencia4" />
            <label htmlFor="apariencia4">⭐</label>
            <input type="radio" name="apariencia" value="5" id="apariencia5" />
            <label htmlFor="apariencia5">⭐</label>
          </div>
          <textarea className="form-control mt-2" placeholder="Comentarios sobre la apariencia"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar Evaluación</button>
        <button type="button" className="btn btn-secondary" onClick={() => history.goBack()}>Atrás</button>
      </form>
    </div>
  );
};

export default AfectivaEvaluacion;
