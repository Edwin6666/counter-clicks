
import './App.css';
import Button from './conponent/Button.js';

import './hojas-de-estilos/Boton.css';
import Count from './conponent/count.jsx'
import { useState } from 'react';

function App() {

  const [ numClicks, setNumClicks]= useState(0);

  const manejarClic = () => {
     setNumClicks( numClicks + 1)
  }

  const reiniciarContador = () => {
    setNumClicks(0)
  }

  return (
    
    <div className = "App" >
      
      <div className='contenedor-contador'>
        <Count
        numClicks={numClicks}
        />

        <Button
        texto='clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />

        <Button
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
