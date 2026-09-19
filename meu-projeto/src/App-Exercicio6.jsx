import { useEffect, useState } from 'react'
import './AppCss-Exercicio3.css'

function App() {
const [carregando, setCarregando] = useState(false);
const [erro, setErro] = useState(false);
useEffect( () => {
  async function api() {
      try {
        setCarregando(true);
     const resposta = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if (!resposta.ok) {
            return ;
         }
         setCarregando(false);
    const dados = await resposta.json();
     
      }
      catch (erro2) {
        const dados = false;
        erro = erro2;
      }finally {
        setCarregando(false);
      }
      
    }
    api();
  }
 , [])
     return (
    <>
{carregando && <p>Carregando...</p>}
{dados  ?

<ul>
  {dados.map((e) => (
 <li key={e.id}>   
    Nome: {e.name}
    Email: {e.email}
    Emprese: {e.company.name}
  </li>
    ))
} 
</ul>

{!dados && <p>Erro no servidor. Mensagem {erro}</p>}   

    </>
  )
}

export default App
