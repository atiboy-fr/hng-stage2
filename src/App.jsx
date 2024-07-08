import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Products from './Pages/Products'
import Checkout from './Pages/Checkout'
import Cart from './Pages/Cart'
import { useState } from 'react'

function App() {
  const [products, setProducts] = useState([])

  const handleProducts = function(price, name, model, image, key) {
    const product = {
      'price': price,
      'name': name,
      'model': model,
      'image': image,
      'key': key,
    }
    setProducts([...products, product])
  }

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Products handleProducts={handleProducts} />} />
            <Route path='/cart' element={<Cart products={products} />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        
        </BrowserRouter>


    </div>
  )
}

export default App
