//importamos los hooks que vamos a utilizar
import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

function App(){
  //initialState = Estado inicial
  //setInitialState = función de cambiará el estado
  const [name, setName] = useState("Luis")//Estado inicial
  useEffect(()=>{
    setTimeout(()=>{
      setName('Diego')
    },2000)
  },[])
  /*const increment = ()=>{
    return setInitialState(initialState + 1)
  }*/
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{name}</h1>
        <button>Click</button>
      </header>
    </div>
  );
}

export default App;
