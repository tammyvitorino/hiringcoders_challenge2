import { useState } from 'react'

import productImageSylvie from '../assets/images/sylvie.png'
import productImageLoki from '../assets/images/loki.png'
import productImageKidLoki from '../assets/images/kid_loki.png'
import productImageMobius from '../assets/images/mobius.png'
import { Link } from 'react-router-dom'


export function EstoqueLoki(){
  const [priceSylvie, setPriceSylvie] = useState('')
  const [stockSylvie, setStockSylvie] = useState('')
  const [priceLoki, setPriceLoki] = useState('')
  const [stockLoki, setStockLoki] = useState('')
  const [priceMobius, setPriceMobius] = useState('')
  const [stockMobius, setStockMobius] = useState('')
  const [priceKidLoki, setPriceKidLoki] = useState('')
  const [stockKidLoki, setStockKidLoki] = useState('')
 
 
  function handleProduct(product: string, price: string, stock: string) {
    localStorage.setItem(`${product}productPrice`, price);
    localStorage.setItem(`${product}productStock`, stock);
  }

 return (

  <main>
  <h1>Atualização de Preços e Estoque - Linha Loki</h1>
    <section className="section">
      <div className="container grid" id="product-list">             
        <div className="item">
          <img src={productImageSylvie} alt="Funko Sylvie" className="logo-main"/>
          <p className="product-name">Funko Sylvie</p>
          <form id="form-user" >              
            <input type="number" placeholder="Preço" value={priceSylvie} onChange={e => setPriceSylvie(e.target.value)}/>
            <input type="number" placeholder="Qtde em estoque" value={stockSylvie} onChange={e => setStockSylvie(e.target.value)} />
              <input type="reset" value="Limpar dados"/><input value="Atualizar" type="submit" onClick={() => handleProduct("Silvie", priceSylvie, stockSylvie)} />
          </form>
        </div>    
        <div className="item">
          <img src={productImageLoki} alt="Funko Loki VTA" className="logo-main"/>
          <p className="product-name">Funko Loki</p>
          <form id="form-user" >              
            <input type="number" placeholder="Preço" value={priceLoki} onChange={e => setPriceLoki(e.target.value)}/>
            <input type="number" placeholder="Qtde em estoque" value={stockLoki} onChange={e => setStockLoki(e.target.value)} />
            <input type="reset" value="Limpar dados"/><input value="Atualizar" type="submit" onClick={() => handleProduct("Loki", priceLoki, stockLoki)} />
          </form>
        </div>   
        <div className="item">
          <img src={productImageMobius} alt="Funko Mobius" className="logo-main"/>
          <p className="product-name">Funko Mobius</p>
          <form id="form-user" >              
            <input type="number" placeholder="Preço" value={priceMobius} onChange={e => setPriceMobius(e.target.value)}/>
            <input type="number" placeholder="Qtde em estoque" value={stockMobius} onChange={e => setStockMobius(e.target.value)} />
            <input type="reset" value="Limpar dados"/><input value="Atualizar" type="submit" onClick={() => handleProduct("Mobius", priceMobius, stockMobius)} />
          </form>
        </div>   
        <div className="item">
          <img src={productImageKidLoki} alt="Funko KidLoki" className="logo-main"/>
          <p className="product-name">Funko KidLoki</p>
          <form id="form-user" >              
            <input type="number" placeholder="Preço" value={priceKidLoki} onChange={e => setPriceKidLoki(e.target.value)}/>
            <input type="number" placeholder="Qtde em estoque" value={stockKidLoki} onChange={e => setStockKidLoki(e.target.value)} />
            <input type="reset" value="Limpar dados"/><input value="Atualizar" type="submit" onClick={() => handleProduct("KidLoki", priceKidLoki, stockKidLoki)} />
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