import { useState } from 'react'
import './AppCss-Exercicio2.css'
import Itemtarefa from '../components/itemtarefa';
function App() {


const [tarefa, setTarefa] = useState([
{id: 1, item: 'texto', concluida: false}
]);


const [novotexto, setNovotexto] = useState("");


function adicionartarefa() {
  if (novotexto.trim() === "") return;

  setTarefa([...tarefa, {id: Date.now(), item: novotexto, concluida: false}]);

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
      <li>
      <Itemtarefa texto={e.item}/>
      <button onClick={() => setTarefa(tarefa.filter((b) => b.id !== e.id))}>x</button>
      </li>
    ))}
 </ul>   
    
    </>
  )
}

export default App
