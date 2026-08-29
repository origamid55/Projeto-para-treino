import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './AppCss-Exercicio2.css'

function App() {


const [tarefa, setTarefa] = useState([
{id: 1, item: 'texto'}
]);


const [novotexto, setNovotexto] = useState("");


function adicionartarefa() {
  if (novotexto.trim() === "") return;

  setTarefa([...tarefa, {id: Date.now(), item: novotexto}]);

  setNovotexto("");

}

  return (
    <>
  <input
  type='text'
  placeholder='Digite seu texto aqui...'
  value={novotexto}
  onChange={(e) => {setNovotexto(e.target.value)}}
  />

 <button onClick={adicionartarefa}>Adicionar tarefa</button>
<ul>
    {tarefa.map((e) => (
    
    <li key={e.id}>{e.item}</li>
    
    ))}
 </ul>   
    
    </>
  )
}

export default App
