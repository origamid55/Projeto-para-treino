import { useEffect, useState } from 'react'
import './AppCss-Exercicio3.css'

function App() {

const lista = [
  { id: 1, nome: 'Alice Silva', cargo: 'Desenvolvedora Frontend' },
  { id: 2, nome: 'Bruno Costa', cargo: 'Desenvolvedor Backend' },
  { id: 3, nome: 'Carla Dias', cargo: 'Designer UI/UX' },
  { id: 4, nome: 'Diego Rocha', cargo: 'Gerente de Projetos' },
  { id: 5, nome: 'Elena Martins', cargo: 'Desenvolvedora Full Stack' },
];
const [texto, setTexto] = useState('');
  return (
    <>
   <input type='text' value={texto} onChange={(e) => {setTexto(e.target.value)}}/>
   <ul>
      {lista.filter((e) => e.nome.toLowerCase().includes(texto.toLowerCase()) || e.cargo.toLowerCase().includes(texto.toLowerCase())).map((e) => (
<li  key={e.id}>
 Nome: {e.nome} Cargo: {e.cargo}
</li>
       
     ) )}
   </ul>
    </>
  )
}

export default App
