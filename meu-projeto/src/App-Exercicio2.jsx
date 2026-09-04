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
       
          setTarefa(tarefa.map((o) => 
            o.id === h ? {...o, concluida: !o.concluida} : o  
          ));
    
}

const [filtro, setFiltro] = useState("todas");

  return (
    <>
  <input
  type='text'
  placeholder='Digite seu texto aqui...'
  value={novotexto}
  onChange={(e) => {setNovotexto(e.target.value)}}
  />

 <button onClick={adicionartarefa}>Adicionar tarefa</button>
 <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
  <option value='todas'>Todas</option>
  <option value='concluida'>Concluidas</option>
  <option value='pendente'>Pendentes</option>
 </select>

<ul>
    {tarefa.filter((y) => {

      switch (filtro) {
        case 'pendente': return y.concluida == false;
       
        case 'concluida': return y.concluida == true;
      
        default: return true;
      }
    
    }).map((e) => (
      <li key={e.id}>
      <input type="checkbox" checked={e.concluida} onChange={() => alterartarefa(e.id)}/>
      <span style={{ textDecoration: e.concluida ? 'line-through' : 'none'}}>{e.item}</span>
      <button onClick={() => setTarefa(tarefa.filter((b) => b.id !== e.id))}>x</button>
      </li>
    ))}
 </ul>   
    
    </>
  )
}

export default App
