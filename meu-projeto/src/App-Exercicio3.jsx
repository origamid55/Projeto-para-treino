import { useEffect, useState } from 'react'
import './AppCss-Exercicio3.css'

function App() {
const [modal, setModal] = useState(false);


useEffect(() => {

  function tratarEvento(e){
        if(e.key === 'Escape'){
            setModal(false)
        }
        
   } 
    window.addEventListener('keydown', tratarEvento);    
return () => {
    window.removeEventListener('keydown', tratarEvento);
};
},[modal])


    


  return (
    <>
    <main>
        
    <button onClick={() => setModal(true)}>Abrir modal</button>

   { modal && 
   
   <div className='overlay' onClick={() => setModal(false)}> 

    <div className='modal' onClick={(e) => e.stopPropagation()}>

    </div>
   </div> } 

     <h1>Lorem Ipsum</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </p>

  <h2>Seção Principal</h2>
  <p>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <p>
    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
    varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna
    felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
  </p>

  <h2>Outros Detalhes</h2>
  <p>
    Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit.
    Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Proin
    sodales libero eget ante.
  </p>
  <p>
    Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur
    ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    Maecenas malesuada.
  </p>
    <h1>Lorem Ipsum</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </p>

  <h2>Seção Principal</h2>
  <p>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <p>
    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
    varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna
    felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
  </p>

  <h2>Outros Detalhes</h2>
  <p>
    Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit.
    Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Proin
    sodales libero eget ante.
  </p>
  <p>
    Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur
    ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    Maecenas malesuada.
  </p>
  <h1>Lorem Ipsum</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </p>

  <h2>Seção Principal</h2>
  <p>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <p>
    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
    varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna
    felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
  </p>

  <h2>Outros Detalhes</h2>
  <p>
    Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit.
    Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Proin
    sodales libero eget ante.
  </p>
  <p>
    Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur
    ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    Maecenas malesuada.
  </p>
</main>


    </>
  )
}

export default App
