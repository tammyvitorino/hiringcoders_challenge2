import { useState } from 'react'
import {Link} from 'react-router-dom'

export function Cadastro(){

 const [user, setUsuario] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [adressStreet, setAdressStreet] = useState('')
 const [adressAdditional, setAdressAdditional] = useState('')
 const [adressCity, setAdressCity] = useState('')

 function handleCadastro() {
   localStorage.setItem(`${user}userName`, user);
   localStorage.setItem(`${user}Email`, email);
   localStorage.setItem(`${user}Password`, password);
   localStorage.setItem(`${user}AdressStreet`, adressStreet);   
   localStorage.setItem(`${user}AdressAdditional`, adressAdditional);   
   localStorage.setItem(`${user}AdressCity`, adressCity);
}
 return (   

  <main>
    <h1>Cadastro de Usuários</h1>
  
    <section className="section" id="user-subscribe">
      <div className="main-content">
        <form id="form-user" >
          <input placeholder="Seu nome" className="userInput" value={user} onChange={e => setUsuario(e.target.value)} required />
          <input type="email" placeholder="Seu email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Escolha uma senha" value={password} onChange={e => setPassword(e.target.value)} required/>
          <input placeholder="Logradouro e Número" value={adressStreet} onChange={e => setAdressStreet(e.target.value)} required />
          <input placeholder="Complemento" value={adressAdditional} onChange={e => setAdressAdditional(e.target.value)}  />
          <input placeholder="Cidade / UF" value={adressCity} onChange={e => setAdressCity(e.target.value)} required />
          <input type="reset" /><input type="submit" onClick={handleCadastro} />
        </form>  
      </div> 
      <div className="grid">
        <div className="item left"><h3><Link to="/"> &lt;&lt; Voltar para Tela Inicial</Link></h3></div>
        <div className="item right"><h3><Link to="/logged/estoque"> Gerenciar Estoque &gt;&gt;</Link></h3></div>
      </div>
    </section>
  </main>
)
}