import React, { Fragment } from 'react';

import Header from './components/Header';
import Nav from './components/Nav';
import SeccionUno from './components/SeccionUno';
import Proyecto from './components/Proyecto';
import Escolaridad from './components/Escolaridad';
import Habilidades from './components/Habilidades';
import Contacto from './components/Contacto';

function App() {
  return (
    <Fragment>
      <div className="container-fluid">
            <Nav/>
      </div>
      <Header/>
      
      <SeccionUno/>
      <Proyecto/>
      <Escolaridad/>
      <Habilidades/>

      <Contacto/>
    </Fragment>
  );
}

export default App;
