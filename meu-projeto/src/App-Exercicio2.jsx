import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './AppCss-Exercicio2.css'

function App() {
const [tarefa, setTarefa] = useState([

{id: 1, item: 'texto'}

]);

function adicionartarefa() {

  setTarefa(...tarefa, {} )

}

  return (
    <>
  <input></input>
 <button onClick={adicionartarefa}>Adicionar tarefa</button>
<ul>
    {lista.map((e) => (
    
    <li key={e}>{e}</li>
    
    ))}
 </ul>   
    
    </>
  )
}

export default App
