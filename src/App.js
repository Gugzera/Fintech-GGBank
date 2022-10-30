import './App.css';
import Home from './components/Home';
import Topo from './components/Topo';
import Dados from './components/Dados'; 
import Cartoes from './components/Cartoes';  
import Parcerias from './components/Parcerias';  
import Rodape from './components/Rodape';  
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

        <>
          <Home />
          <Topo />
          <Dados />
          <Cartoes />
          <Parcerias />
          <Rodape />
        </>
  );
}

export default App;
