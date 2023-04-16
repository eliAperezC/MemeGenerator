import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  // Hooks
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const modificarLinea1 = function(valor) {
    setLinea1(valor.target.value); // Pemrite acceder a los valores que se ingresan en el input
  }

  const modificarLinea2 = function(valor) {
    setLinea2(valor.target.value);
  }

  const modificarImagen = function(valor) {
    setImagen(valor.target.value);
  }

  const descargarImagen = function (valor) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL('image/jpeg');
      var link = document.createElement('a');
      link.download = 'meme.jpeg';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">

      <h1>Generador de memes</h1>

      <label>Plantilla:    
        <select onChange={modificarImagen}>
          <option value='batman'>Batman</option>
          <option value='chemms'>Chemms</option>
          <option value='chicken'>Chicken</option>
          <option value='puppet'>Puppet</option>
          <option value='squidward'>Squidward</option>
        </select>
      </label><br />

      {/*Cuando se realiza un cambio en el input se llama a la función*/}
      <label>Texto superior: 
        <input onChange={modificarLinea1} type='text' placeholder='Linea 1'></input>
      </label><br />

      <label> Texto inferior: 
        <input onChange={modificarLinea2} type='text' placeholder='Linea 2'></input>
      </label><br />

      <button onClick={descargarImagen}>Descargar</button>

      <div className='meme' id='meme'>
        {/*Recibe en tiempo real el valor ingresado en el input*/}
        <span id='linea1'>{linea1}</span> <br />
        <span id='linea2'>{linea2}</span> <br />
        
        <img src={'/img/'+imagen+'.jpg'} alt='meme'/>
      </div>

    </div>
  );
}

export default App;
