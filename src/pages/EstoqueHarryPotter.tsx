import { useState } from 'react'

import productImageLunaLovegood from '../assets/images/luna_lovegood.png'
import productImageMinerva from '../assets/images/minerva_mcgonagall.png'
import productImageHagrid from '../assets/images/hagrid.png'
import productImageCedricDiggory from '../assets/images/cedrico.png'
import { Link } from 'react-router-dom'


export function EstoqueHarryPotter(){
  const [priceLunaLovegood, setPriceLunaLovegood] = useState('')
  const [stockLunaLovegood, setStockLunaLovegood] = useState('')
  const [priceMinerva, setPriceMinerva] = useState('')
  const [stockMinerva, setStockMinerva] = useState('')
  const [priceCedricDiggory, setPriceCedricDiggory] = useState('')
  const [stockCedricDiggory, setStockCedricDiggory] = useState('')
  const [priceHagrid, setPriceHagrid] = useState('')
  const [stockHagrid, setStockHagrid] = useState('')
 
 
  function handleProduct(product: string, price: string, stock: string) {
    localStorage.setItem(`${product}productPrice`, price);
    localStorage.setItem(`${product}productStock`, stock);
  }

 return (

  <main>
  <h1>Atualização de Preços e Estoque - Linha Harry Potter</h1>
    <section className="section">
      <div className="container grid" id="product-list">             
        <div className="item">
          <img src={productImageLunaLovegood} alt="Funko Luna Lovegood" className="logo-main"/>
          <p className="product-name">Funko Luna Lovegood</p>
          <form id="form-user" >              
            <input type="number" placeholder="Preço" value={priceLunaLovegood} onChange={e => setPriceLunaLovegood(e.target.value)}/>
            <input type="number" placeholder="Qtde em estoque" value={stockLunaLovegood} onChange={e => setStockLunaLovegood(e.target.value)} />
              <input type="reset" value="Limpar dados"/><input value="Atualizar" type="submit" onClick={() => handleProduct("Luna Lovegood", priceLunaLovegood, stockLunaLovegood)} />
          </form>
        </div>    
        <div className="item">
          <img src={productImageMinerva} alt="Funko Minerva McGonagall" className="logo-main"/>
          <p className="product-name">Funko Minerva McGonagall</p>
          <form id="form-user" >              
            <input type="number" placeholder="Preço" value={priceMinerva} onChange={e => setPriceMinerva(e.target.value)}/>
            <input type="number" placeholder="Qtde em estoque" value={stockMinerva} onChange={e => setStockMinerva(e.target.value)} />
            <input type="reset" value="Limpar dados"/><input value="Atualizar" type="submit" onClick={() => handleProduct("Minerva", priceMinerva, stockMinerva)} />
          </form>
        </div>   
        <div className="item">
          <img src={productImageCedricDiggory} alt="Funko Cedric Diggory" className="logo-main"/>
          <p className="product-name">Funko Cedric Diggory</p>
          <form id="form-user" >              
            <input type="number" placeholder="Preço" value={priceCedricDiggory} onChange={e => setPriceCedricDiggory(e.target.value)}/>
            <input type="number" placeholder="Qtde em estoque" value={stockCedricDiggory} onChange={e => setStockCedricDiggory(e.target.value)} />
            <input type="reset" value="Limpar dados"/><input value="Atualizar" type="submit" onClick={() => handleProduct("CedricDiggory", priceCedricDiggory, stockCedricDiggory)} />
          </form>
        </div>   
        <div className="item">
          <img src={productImageHagrid} alt="Funko Hagrid" className="logo-main"/>
          <p className="product-name">Funko Hagrid</p>
          <form id="form-user" >              
            <input type="number" placeholder="Preço" value={priceHagrid} onChange={e => setPriceHagrid(e.target.value)}/>
            <input type="number" placeholder="Qtde em estoque" value={stockHagrid} onChange={e => setStockHagrid(e.target.value)} />
            <input type="reset" value="Limpar dados"/><input value="Atualizar" type="submit" onClick={() => handleProduct("Hagrid", priceHagrid, stockHagrid)} />
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