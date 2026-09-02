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

function alterartarefa(h) {
       
          setTarefa(
          tarefa.map(
            (o) => {
            if(o.id === h) {return {...o, concluida: !o.concluida}} 
            }
        ));
    
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
      <li key={e.id}>
      <input type="checkbox" checked={e.concluida} onChange={() => alterarcheck(e.id)}></input>
      <span>{e.item}</span>
      <button onClick={() => setTarefa(tarefa.filter((b) => b.id !== e.id))}>x</button>
      </li>
    ))}
 </ul>   
    
    </>
  )
}

export default App
