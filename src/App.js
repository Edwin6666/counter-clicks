
import './App.css';
import Button from './conponent/Button.js';
import ClickLogo from './imagenes/images.png';
import './hojas-de-estilos/Boton.css';
import Count from './conponent/count.jsx'


function App() {

  const manejarClic = () => {
     console.log('Clic')
  }

  const reiniciarContador = () => {
    console.log('Reiniciar')
  }

  return (
    
    <div className = "App" >
      <div className = 'contenedor-logo' >
        <img className = 'click-logo'
        src = { ClickLogo } 
        alt = 'click logo'
        />

      </div>
      <div className='contenedor-contador'>
        <Count
        numClicks='5'
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
