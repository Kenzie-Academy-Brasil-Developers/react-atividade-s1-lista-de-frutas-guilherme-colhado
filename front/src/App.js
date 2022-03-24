import { useState } from 'react';
import './App.css';
import Preco from './components/preco';
import Lista from './components/lista';
import BotaoFilter from './components/botao';

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 }
  ]);
  const fruitsOrigin = [
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 }
  ]
  function set(filtro){
    setFruits(fruitsOrigin.filter(fruta => fruta.color.includes(filtro)))
  }
  return (
    <div className="App">
      <header className="App-header">
        <Preco total={fruits.reduce((a,b) => a+b.price,0)}/>
        <Lista listaDeNomesDeFrutas={fruits.map(fruta=>fruta.name)}/>
        <div className='buttons'>
          <BotaoFilter funcao={set} filtro={''}>Voltar ao normal</BotaoFilter>
          <BotaoFilter funcao={set} filtro={'red'}>Mostrar frutas Vermelhas</BotaoFilter>
          <BotaoFilter funcao={set} filtro={'yellow'}>Mostrar frutas Amarelas</BotaoFilter>
        </div>
      </header>
    </div>
  );
}

export default App;
