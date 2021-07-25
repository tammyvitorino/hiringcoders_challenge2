import {Link} from 'react-router-dom'

import seriesImageMarvel from '../assets/images/marvel_destaque.png'
import seriesImageLoki from '../assets/images/loki_destaque.png'
import seriesImageDC from '../assets/images/dc_destaque.png'
import seriesImageHarryPotter from '../assets/images/hp_destaque.png'


export function Estoque(){
  
 return (

  <main>
    <h1>Selecione a linha que deseja atualizar</h1>
    <section className="section" id="product-series">
      <div className="item">
        <Link to='/logged/estoquemarvel'><img src={seriesImageMarvel} alt="Banner Destaque Marvel com foto do Funko do Thor" /></Link>
      </div>
      <div className="item">
        <Link to='/logged/estoqueloki'><img src={seriesImageLoki} alt="Banner destaque Loki com foto dos Lokis"/></Link>
        <Link to='/logged/estoqueharrypotter'><img src={seriesImageHarryPotter} alt="Banner destaque Harry Potter com os funkos num fundo do castelo"/></Link>
      </div>
      <div className="item">
        <Link to='/logged/estoquedc'><img src={seriesImageDC} alt="Banner destaque DC comic com foto do funko Flash"/></Link>
      </div>
    </section>
    <section className="section grid">
      <div className="item left"><h3><Link to="/"> &lt;&lt; Voltar para Tela Inicial</Link></h3></div>
      <div className="item right"><h3><Link to="/logged/cadastro"> Cadastro de Usuários &gt;&gt;</Link></h3></div>
    </section>
  </main>
)
}