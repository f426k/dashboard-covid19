import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import LineDashBoard from './features/covid-linechart/DashBoard/DashBoard';
import DashBoard from './features/covid/DashBoard/DashBoard';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="(/)?" component={DashBoard} />
        <Route exact path="/linechart" component={LineDashBoard} />
      </Switch>
  </BrowserRouter>
  )
}

export default App;
