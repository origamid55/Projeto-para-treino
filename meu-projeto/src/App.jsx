import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
const [numero, setNumero] = useState(0);
const [aviso, setAviso] = useState('');
  return (
    <>
    <button onClick={() => {
      
      numero < 10 ? setNumero((e) => e+1) : setAviso('Atingido limite')
      

    }}>+</button>
    <button onClick={() => {
      `${numero > 0 && setNumero((e) => e-1)} ${numero === 10 && setAviso('')}`
      
    
    }}>-</button>
    <h2>Número:</h2><p className={`${numero === 0 && 'estazero'} ${numero === 10 && 'estanomaximo'}`} >{numero}</p> 
    <span>{aviso}</span>
    </>
  )
}

export default App
