import { useEffect, useState } from 'react'
import './AppCss-Exercicio3.css'

function App() {
const [form, setForm] = useState({
  nome: '',
  email: '',
  senha: ''
});
// Dica do padrão de atualização imutável com e.target.name:


const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((prevForm) => ({
    ...prevForm,
    [name]: value // Chave dinâmica!
  }));
};

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailValidacao = regexEmail.test(form.email);


  return (
    <>
    <form>
  <div>
    <label>Nome:</label>
    <input 
      type="text" 
      name="nome" 
      value={form.nome} 
      onChange={handleChange} 
    />
    {(form.nome.trim().length < 3 && form.nome.trim().length > 0) && <span>Digite mínimo de 3 caracteres</span>}
  </div>

  <div>
    <label>E-mail:</label>
    <input 
      type="email" 
      name="email" 
      value={form.email} 
      onChange={handleChange} 
    />
    {form.email.trim().length > 0 && !emailValidacao && <span>Escreva um email valido</span>}

  </div>

  <div>
    <label>Senha:</label>
    <input 
      type="password" 
      name="senha" 
      value={form.senha} 
      onChange={handleChange} 
    />
    {(form.senha.trim().length < 6 && form.senha.trim().length > 0) && <span>Digite mínimo de 6 caracteres</span>}
  </div>

  <button type="submit" >
    Cadastrar
  </button>
</form>
    </>
  )
}

export default App
