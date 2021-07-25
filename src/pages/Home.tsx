import { useHistory } from 'react-router'

import logoImage from '../assets/images/logo.png'

export function Home(){
  const history = useHistory();

  function cadastroUser(){
    history.push('/logged/cadastro');    
  }

  function gerenciaEstoque(){
    history.push('/logged/estoque');    
  }
  
  return (
  <div id="home-login">
   <main>
    <div className="main-content">
    <img src={logoImage} alt="Logo 42 Store" className="logo-main"/>   
    <button className="access-button" onClick={cadastroUser} >
      Cadastro de usuário
    </button>
    <button className="access-button" onClick={gerenciaEstoque}>
      Gerenciar estoque
    </button>
    </div>
   </main>
  </div>
 )
}