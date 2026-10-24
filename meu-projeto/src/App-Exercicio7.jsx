import { useEffect, useState, useRef } from 'react'
import './AppCss-Exercicio3.css'

function App() {
  const [numero, setNumero] = useState(0);
  const cronometro = useRef(null);
   


  function iniciarCronometro(){
  if (cronometro.current !== null) return;
  cronometro.current = setInterval(() => {

           setNumero((a) => a + 1);

        }, 1000)

}
function limpar () { 
clearInterval(cronometro.current);
cronometro.current = null;
}

function resetar(){
  
  clearInterval(cronometro.current);
  cronometro.current = null;  
  setNumero(0);

}
return (
    <>
{numero} 
<br></br>
<br></br>
<button onClick={iniciarCronometro}>Iniciar</button>
<button onClick={limpar}>Pausar</button> 
<button onClick={resetar}> Reiniciar</button>
    </>
  )
}

export default App
