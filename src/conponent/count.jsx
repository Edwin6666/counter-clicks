import React from "react";
import '../hojas-de-estilos/contador.css';


function Count({ numClicks }){
    return(
        <div className='contador'>

            {numClicks}

        </div>
    );
}





export default Count;