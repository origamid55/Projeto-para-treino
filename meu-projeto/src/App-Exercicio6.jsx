import { useEffect, useState } from 'react'
import './AppCss-Exercicio3.css'

function App() {

const [carregando, setCarregando] = useState(false);
const [erro, setErro] = useState(false);
const [dados, setDados] = useState('');

useEffect( () => {
  async function api() {
      try {
        setCarregando(true);
     const resposta = await fetch(`https://jsonplaceholder.typicode.com/sers`);
        if (!resposta.ok) {
            throw new Error('Página ou recurso não encontrado (Erro 404)');
         }
      const dados1 = await resposta.json();
      setDados(dados1);
     
      }
      catch (erro2) {
        setErro(erro2);
        setDados(false);
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
{dados &&

<ul>
  {dados.map((e) => (
 <li key={e.id}>   
    Nome: {e.name}
    Email: {e.email}
    Empresa: {e.company.name}
  </li>
    ))
} 
</ul>
}
{erro && <p>Erro no servidor. Mensagem: {erro}</p>}   

    </>
  )
}

export default App
