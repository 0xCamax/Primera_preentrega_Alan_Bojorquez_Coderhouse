import './App.css'
import ItemDetail from './componentes/ItemDetail'
import ItemList from './componentes/ItemList'
import Navbar from './componentes/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ShopContextProvider} from './componentes/context/ShopContext'
import { ProductosProvider } from './componentes/context/ProductosContext'
import { UserProvider } from './componentes/context/UserProvider'
import Cart from './componentes/Cart'
import Checkout from './componentes/CheckOut'


function App() {

  return (
    <BrowserRouter>
        <ProductosProvider>
            <ShopContextProvider>
                <UserProvider>
                  <Navbar />
                  <Routes>
                      <Route exact path='/' element={<ItemList />} />
                      <Route exact path='/categoria/:id' element={<ItemList />} />
                      <Route exact path='/item/:id' element={<ItemDetail />} />
                      <Route exact path='/cart' element={<Cart />} />
                      <Route exact path='/checkout' element={<Checkout />} />
                  </Routes>
                </UserProvider>
            </ShopContextProvider>
        </ProductosProvider>
    </BrowserRouter>
    
  )
}

export default App
