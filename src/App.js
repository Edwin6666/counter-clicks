
import './App.css';
import ClickLogo from './imagenes/images.png';

function App() {
  return (
    
    <div className = "App" >
      <div class = 'contenedor-logo' >
        <img className = 'click-logo'
        src = { ClickLogo } 
        alt = 'click logo'
        />

      </div>
      <div className='contenedor-contador'>
        
      </div>
    </div>
  );
}

export default App;
