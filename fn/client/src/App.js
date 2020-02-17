import React from 'react';
import './App.css';
import NavBar from './components/NavBar/navBar';
import {Switch, Route} from 'react-router-dom';
import NavBarItems from './components/NavBarItems/navBarItems';


function App() {

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route
          path='/women'
          render={(props) => <NavBarItems {...props} catalogName={'Women'} />}
        />

        <Route
          path='/men'
          render={(props) => <NavBarItems {...props} catalogName={'Male'} />}
        />

        <Route
          path='/children'
          render={(props) => <NavBarItems {...props} catalogName={'Kids'} />}
        />

      </Switch>


    </div>
  );
}

export default App;
