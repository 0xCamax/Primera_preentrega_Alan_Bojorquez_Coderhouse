import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


library.add(fas)

let carrito = [];
if(localStorage.length > 0){
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        carrito.push(JSON.parse(localStorage.getItem(key)))
    }
}


function totalCarrito() {
    let total = 0
        if (carrito.length > 0) {
            for (let i = 0; i < carrito.length; i++) {
                total += carrito[i].cantidad
        }
    }
    return total
}


const CartWidget = () => {

    return (
    <>
        <button className='boton' data-bs-toggle="modal" data-bs-target="#CartModal" ><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /><span className='notificacion'>{totalCarrito()}</span></button>

        <div className="modal fade" id="CartModal" tabIndex="-1" aria-labelledby="CartModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="CartModalLabel">Carrito de compras</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="d-flex flex-wrap">
                    {carrito.map(productos => (
                        <div  key={productos.nombre} className='d-flex'>
                            <img src={productos.imagen} alt={productos.nombre} height="150" />
                            <div className='d-flex flex-column text-start'>
                                <h5>{productos.nombre}</h5>
                                <p><b>Precio: ${productos.precio}</b></p>
                                <p><b>Cantidad: {productos.cantidad}</b></p>
                            </div>
                        </div>
                    ))}
                </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default CartWidget