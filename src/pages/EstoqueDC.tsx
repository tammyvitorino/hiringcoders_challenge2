import { useState } from 'react'

import productImageKillerFrost from '../assets/images/killer_frost.png'
import productImageCaptainCold from '../assets/images/captain_cold.png'
import productImageDeathStroke from '../assets/images/deathstroke.png'
import productImageKatana from '../assets/images/katana.png'
import { Link } from 'react-router-dom'


export function EstoqueDC(){
  const [priceKillerFrost, setPriceKillerFrost] = useState('')
  const [stockKillerFrost, setStockKillerFrost] = useState('')
  const [priceCaptainCold, setPriceCaptainCold] = useState('')
  const [stockCaptainCold, setStockCaptainCold] = useState('')
  const [priceKatana, setPriceKatana] = useState('')
  const [stockKatana, setStockKatana] = useState('')
  const [priceDeathStroke, setPriceDeathStroke] = useState('')
  const [stockDeathStroke, setStockDeathStroke] = useState('')
 
 
  function handleProduct(product: string, price: string, stock: string) {
    localStorage.setItem(`${product}productPrice`, price);
    localStorage.setItem(`${product}productStock`, stock);
  }

 return (

  <main>
  <h1>Atualização de Preços e Estoque - Linha DC Comics</h1>
    <section className="section">
      <div className="container grid" id="product-list">             
        <div className="item">
          <img src={productImageKillerFrost} alt="Funko KillerFrost" className="logo-main"/>
          <p className="product-name">Funko KillerFrost</p>
          <form id="form-user" >              
            <input type="number" placeholder="Preço" value={priceKillerFrost} onChange={e => setPriceKillerFrost(e.target.value)}/>
            <input type="number" placeholder="Qtde em estoque" value={stockKillerFrost} onChange={e => setStockKillerFrost(e.target.value)} />
              <input type="reset" value="Limpar dados"/><input value="Atualizar" type="submit" onClick={() => handleProduct("Silvie", priceKillerFrost, stockKillerFrost)} />
          </form>
        </div>    
        <div className="item">
          <img src={productImageCaptainCold} alt="Funko Capitão Cold" className="logo-main"/>
          <p className="product-name">Funko CaptainCold</p>
          <form id="form-user" >              
            <input type="number" placeholder="Preço" value={priceCaptainCold} onChange={e => setPriceCaptainCold(e.target.value)}/>
            <input type="number" placeholder="Qtde em estoque" value={stockCaptainCold} onChange={e => setStockCaptainCold(e.target.value)} />
            <input type="reset" value="Limpar dados"/><input value="Atualizar" type="submit" onClick={() => handleProduct("CaptainCold", priceCaptainCold, stockCaptainCold)} />
          </form>
        </div>   
        <div className="item">
          <img src={productImageKatana} alt="Funko Katana" className="logo-main"/>
          <p className="product-name">Funko Katana</p>
          <form id="form-user" >              
            <input type="number" placeholder="Preço" value={priceKatana} onChange={e => setPriceKatana(e.target.value)}/>
            <input type="number" placeholder="Qtde em estoque" value={stockKatana} onChange={e => setStockKatana(e.target.value)} />
            <input type="reset" value="Limpar dados"/><input value="Atualizar" type="submit" onClick={() => handleProduct("Katana", priceKatana, stockKatana)} />
          </form>
        </div>   
        <div className="item">
          <img src={productImageDeathStroke} alt="Funko Deathstroke" className="logo-main"/>
          <p className="product-name">Funko DeathStroke</p>
          <form id="form-user" >              
            <input type="number" placeholder="Preço" value={priceDeathStroke} onChange={e => setPriceDeathStroke(e.target.value)}/>
            <input type="number" placeholder="Qtde em estoque" value={stockDeathStroke} onChange={e => setStockDeathStroke(e.target.value)} />
            <input type="reset" value="Limpar dados"/><input value="Atualizar" type="submit" onClick={() => handleProduct("DeathStroke", priceDeathStroke, stockDeathStroke)} />
          </form>
        </div>   
      </div>
    </section>
    <section className="section grid">
      <div className="item left"><h3><Link to="/"> &lt;&lt; Voltar para Tela Inicial</Link></h3></div>      
      <div className="item"><h3><Link to="/logged/estoque"> Gerenciar outro produto</Link></h3></div>
      <div className="item right"><h3><Link to="/logged/cadastro"> Cadastro de Usuários &gt;&gt;</Link></h3></div>
    </section>
  </main>
)
}