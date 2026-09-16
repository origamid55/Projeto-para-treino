import { useState } from 'react'
import './AppCss-Exercicio1.css'

function App() {
const [numero, setNumero] = useState(0);
const [aviso, setAviso] = useState('');
  return (
    <>
    
    <button onClick={() => {
      numero < 10 ? setNumero((e) => e+1) 
      : setAviso('Atingido limite')
    }}>+</button>
    
    <button onClick={() => {
      if (numero === 10) setAviso('')
      if (numero > 0) setNumero((e) => e-1)
    }}>-</button>
;
    
    <h2>Número:</h2>
    
    <p className={`${numero === 0 && 'estazero'} 
    ${numero === 10 && 'estanomaximo'}`} >{numero}</p> 

    <span>{aviso}</span>
    </>
  )
}

export default App
