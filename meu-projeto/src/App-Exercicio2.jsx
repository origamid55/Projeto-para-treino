import { useState } from 'react'
import './AppCss-Exercicio2.css'

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

function alterartarefa (e) {
  if (e === false) return true;
  if (e === true) return false;
}

  return (
    <>
  <input
  type='text'
  placeholder='Digite seu texto aqui...'
  value={novotexto}
  onChange={(e) => {setNovotexto(e.target.value)}}
  />
<input type='checkbox'></input>
 <button onClick={adicionartarefa}>Adicionar tarefa</button>


<ul>
    {tarefa.map((e) => (
    
    <li key={e.id}>{e.item}
    <input type='checkbox' checked={e.concluida} onClick={alterartarefa(e.concluida)}></input>
    </li>
    
    ))}
 </ul>   
    
    </>
  )
}

export default App
