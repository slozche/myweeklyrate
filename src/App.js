import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route } from "react-router-dom";

import Main from './components/Main';
import Detail from './components/Detail';

function App() {
  const week = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일']

  return (
    <div className="App">
      <Route path="/" exact>
        <Main week={week} />
      </Route>
      <Route path="/detail/:id">
        <Detail week={week} />
      </Route>
    </div>
  );
}

export default App;
