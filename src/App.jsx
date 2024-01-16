import './App.css'
import ItemListContainer from './componentes/ItemListContainer'
import Navbar from './componentes/Navbar'

function App() {

  return (
    <div className='d-flex flex-column'>
      <Navbar />
      <div className='d-flex item-list'>
        <ItemListContainer item={"Blusa"}/>
        <ItemListContainer item={"Bolsa"}/>
        <ItemListContainer item={"Pantalon"}/>
        <ItemListContainer item={"Zapato"}/>
      </div>
    </div>

  )
}

export default App
