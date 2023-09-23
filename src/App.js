
import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import LandingPage from './component/LandingPage';
function App() {
  return (
    <>
    <Routes>
  
      <Route exact path="/"  Component={LandingPage} />
     
  </Routes>
  </>
  );
}

export default App;
