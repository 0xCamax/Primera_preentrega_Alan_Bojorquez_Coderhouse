import './App.css'
import ItemDetail from './componentes/ItemDetail'
import ItemList from './componentes/ItemList'
import Navbar from './componentes/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ShopContextProvider from './componentes/context/ShopContext'

function App() {

  return (
    <ShopContextProvider>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ItemList />} />
          <Route exact path='/categoria/:id' element={<ItemList />} />
          <Route exact path='/item/:id' element={<ItemDetail />} />
        </Routes>
    </BrowserRouter>
    </ShopContextProvider>
  )
}

export default App
