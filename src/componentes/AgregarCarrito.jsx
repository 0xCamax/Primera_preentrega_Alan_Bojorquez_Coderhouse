import CartWidget from "./CartWidget";

const AgregarCarrito = ({item, cantidad}) => {
    let {nombre, precio, id, imagen} = item
    function addtoCart() {
        if (localStorage.getItem(id)){
        cantidad += JSON.parse(localStorage.getItem(id)).cantidad
        let nuevoProducto = {nombre, precio, cantidad, imagen}
        let stringPoducto = JSON.stringify(nuevoProducto);
        localStorage.setItem(id, stringPoducto)
        location.reload()
        } else {
            let nuevoProducto = {nombre, precio, cantidad, imagen}
            let stringPoducto = JSON.stringify(nuevoProducto);
            localStorage.setItem(id, stringPoducto)
            location.reload()
        }
    }

    return (
        <>
            <button type="button" className="btn btn-light" onClick={addtoCart}>Agregar a Carrito</button>
        </>        
    )
}

export default AgregarCarrito;