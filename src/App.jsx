import './App.css'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer'
import Navbar from './componentes/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/categoria/:id' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
