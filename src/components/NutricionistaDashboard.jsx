import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';

const NutricionistaDashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/evaluaciones') // Simulación de llamada a API
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Cargando datos...</div>;
  }

  const chartData = [
    ['Aspecto', 'Promedio'],
    ['Apariencia', data.aparienciaPromedio],
    ['Aroma', data.aromaPromedio],
    ['Sabor', data.saborPromedio],
    ['Textura', data.texturaPromedio],
    ['Satisfacción', data.satisfaccionPromedio],
    ['Intención de Compra', data.intencionPromedio],
  ];

  return (
    <div className="container mt-5">
      <h2>Panel de Nutricionistas</h2>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={chartData}
        options={{ title: 'Resultados de la Evaluación Sensorial' }}
      />
    </div>
  );
};

export default NutricionistaDashboard;
