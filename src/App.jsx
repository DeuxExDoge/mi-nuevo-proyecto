import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SurveySelection from './pages/SurveySelection';
import AfectivaPrueba from './components/AfectivaPrueba';
import AfectivaEvaluacion from './components/AfectivaEvaluacion';
import DescriptivaPrueba from './components/DescriptivaPrueba';
import DescriptivaEvaluacion from './components/DescriptivaEvaluacion';
import NutricionistaDashboard from './components/NutricionistaDashboard';



const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/survey-selection" component={SurveySelection} />
      <Route path="/afectiva-prueba" component={AfectivaPrueba} />
      <Route path="/afectiva-evaluacion" component={AfectivaEvaluacion} />
      <Route path="/descriptiva-prueba" component={DescriptivaPrueba} />
      <Route path="/descriptiva-evaluacion" component={DescriptivaEvaluacion} />
      <Route path="/nutricionista-dashboard" component={NutricionistaDashboard} />
    </Switch>
  </Router>
);

export default App;
