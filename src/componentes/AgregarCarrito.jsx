import { useContext } from "react"
import { ShopContext } from "./context/ShopContext"

const AgregarCarrito = ({item, cantidad}) => {
    const {} = useContext(ShopContext)
    const hola = console.log("hola")
    return (
        <>
            <button type="button" className="btn btn-light" onClick={hola}>Agregar a Carrito</button>
        </>        
    )
}

export default AgregarCarrito;