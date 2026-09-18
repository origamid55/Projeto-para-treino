import { useEffect, useState } from 'react'
import './AppCss-Exercicio3.css'

function App() {
const [carregando, setCarregando] = useState(false);

useEffect(
  async function api() {
      try {
        setCarregando(true);
    await const resposta = fetch(`https://jsonplaceholder.typicode.com/users`);
        if (!resposta.ok) {
            return ;
         }
         setCarregando(false);
    await const dados = resposta.json();
     
      }
      catch (erro) {
        const dados = false;
      }finally {
        setCarregando(false);
      }
      
    }
 , [])
     return (
    <>
{carregando && <p>Carregando...</p>}
{dados  ?

<ul>
  {dados.map((e) => (
 <div key={e.id}>   
    <li>{e.nome}</li>
    <li>{e.email}</li>
  </div>
    ))
} 
</ul>

{!dados && <p>Erro no servidor</p>}   

    </>
  )
}

export default App
