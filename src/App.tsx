import { useState } from 'react';
import { createContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import {Home} from './pages/Home';
import {Cadastro} from './pages/Cadastro';
import {Estoque} from './pages/Estoque';
import {EstoqueLoki} from './pages/EstoqueLoki';
import {EstoqueMarvel} from './pages/EstoqueMarvel';
import {EstoqueDC} from './pages/EstoqueDC';
import {EstoqueHarryPotter} from './pages/EstoqueHarryPotter';

export const PagesContext = createContext({} as any);

const App: React.FC = () => {
  const [value, setValue] = useState('');
  
  return (
    <BrowserRouter>
      <PagesContext.Provider value={{value, setValue} }>
        <Route path="/" exact component={Home} />
        <Route path="/logged/cadastro" component={Cadastro} />
        <Route path="/logged/estoque" component={Estoque} />        
        <Route path="/logged/estoqueloki" component={EstoqueLoki} />        
        <Route path="/logged/estoquemarvel" component={EstoqueMarvel} />
        <Route path="/logged/estoquedc" component={EstoqueDC} />
        <Route path="/logged/estoqueharrypotter" component={EstoqueHarryPotter} />
      </PagesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
