import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';


function App() {

  const [linea1, setlinea1] = useState('');
  const [linea2, setlinea2] = useState('');
  const [imagen, setimagen] = useState('');

  const onChangeLinea1 = function (evento) {
    setlinea1(evento.target.value)
  }


  const onChangeLinea2 = (evento) => {
    setlinea2(evento.target.value)
  }
  const onChangeImagen = function (evento) {
    setimagen(evento.target.value)
  }

  const onClickBotonExportar = (evento) => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.jpg';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">

      <select onChange={onChangeImagen} name="" id="">
        <option value="imagen1">imagen1</option>
        <option value="imagen2">imagen2</option>
        <option value="imagen3">imagen3</option>
      </select><br />
      <input onChange={onChangeLinea1} placeholder="texto1" type="text" /><br />
      <input onChange={onChangeLinea2} placeholder="texto2" type="text" /><br />
      <button onClick={onClickBotonExportar} >Exportar</button>
      <div className="meme" id="meme">
        <span>{linea1}</span><br />
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} alt="" />
      </div>

    </div>
  );
}

export default App;
