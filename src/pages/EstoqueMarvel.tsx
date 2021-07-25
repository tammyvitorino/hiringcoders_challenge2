import { useState } from 'react'

import productImageWanda from '../assets/images/halloween_wanda.png'
import productImageHulk from '../assets/images/hulk_endgame.png'
import productImageSilverSurfer from '../assets/images/silver_surfer.png'
import productImageDeadpool from '../assets/images/deadpool.png'
import { Link } from 'react-router-dom'


export function EstoqueMarvel(){
  const [priceWanda, setPriceWanda] = useState('')
  const [stockWanda, setStockWanda] = useState('')
  const [priceHulk, setPriceHulk] = useState('')
  const [stockHulk, setStockHulk] = useState('')
  const [priceDeadpool, setPriceDeadpool] = useState('')
  const [stockDeadpool, setStockDeadpool] = useState('')
  const [priceSilverSurfer, setPriceSilverSurfer] = useState('')
  const [stockSilverSurfer, setStockSilverSurfer] = useState('')
 
 
  function handleProduct(product: string, price: string, stock: string) {
    localStorage.setItem(`${product}productPrice`, price);
    localStorage.setItem(`${product}productStock`, stock);
  }

 return (

  <main>
  <h1>Atualização de Preços e Estoque - Linha Marvel Comics</h1>
    <section className="section">
      <div className="container grid" id="product-list">             
        <div className="item">
          <img src={productImageWanda} alt="Funko Wanda" className="logo-main"/>
          <p className="product-name">Funko Wanda</p>
          <form id="form-user" >              
            <input type="number" placeholder="Preço" value={priceWanda} onChange={e => setPriceWanda(e.target.value)}/>
            <input type="number" placeholder="Qtde em estoque" value={stockWanda} onChange={e => setStockWanda(e.target.value)} />
              <input type="reset" value="Limpar dados"/><input value="Atualizar" type="submit" onClick={() => handleProduct("Wanda", priceWanda, stockWanda)} />
          </form>
        </div>    
        <div className="item">
          <img src={productImageHulk} alt="Funko Hulk" className="logo-main"/>
          <p className="product-name">Funko Hulk Endgame</p>
          <form id="form-user" >              
            <input type="number" placeholder="Preço" value={priceHulk} onChange={e => setPriceHulk(e.target.value)}/>
            <input type="number" placeholder="Qtde em estoque" value={stockHulk} onChange={e => setStockHulk(e.target.value)} />
            <input type="reset" value="Limpar dados"/><input value="Atualizar" type="submit" onClick={() => handleProduct("Hulk", priceHulk, stockHulk)} />
          </form>
        </div>   
        <div className="item">
          <img src={productImageDeadpool} alt="Funko Deadpool" className="logo-main"/>
          <p className="product-name">Funko Deadpool</p>
          <form id="form-user" >              
            <input type="number" placeholder="Preço" value={priceDeadpool} onChange={e => setPriceDeadpool(e.target.value)}/>
            <input type="number" placeholder="Qtde em estoque" value={stockDeadpool} onChange={e => setStockDeadpool(e.target.value)} />
            <input type="reset" value="Limpar dados"/><input value="Atualizar" type="submit" onClick={() => handleProduct("Deadpool", priceDeadpool, stockDeadpool)} />
          </form>
        </div>   
        <div className="item">
          <img src={productImageSilverSurfer} alt="Funko Silver Surfer" className="logo-main"/>
          <p className="product-name">Funko SilverSurfer</p>
          <form id="form-user" >              
            <input type="number" placeholder="Preço" value={priceSilverSurfer} onChange={e => setPriceSilverSurfer(e.target.value)}/>
            <input type="number" placeholder="Qtde em estoque" value={stockSilverSurfer} onChange={e => setStockSilverSurfer(e.target.value)} />
            <input type="reset" value="Limpar dados"/><input value="Atualizar" type="submit" onClick={() => handleProduct("SilverSurfer", priceSilverSurfer, stockSilverSurfer)} />
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