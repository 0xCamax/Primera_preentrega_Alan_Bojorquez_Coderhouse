import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useShopContext } from './context/ShopContext.jsx';
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {carritoFunciones, cart} = useShopContext()
    const {totalProductos} = carritoFunciones();
    library.add(fas)
    
    return (
    <>
        <button className='boton' data-bs-toggle="modal" data-bs-target="#CartModal" ><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /><span className='notificacion'>{totalProductos()}</span></button>

        <div className="modal fade" id="CartModal" tabIndex="-1" aria-labelledby="CartModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="CartModalLabel">Carrito de compras</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="d-flex flex-wrap justify-content-center" >
                    { cart.length === 0 ?
                            <div className="alert alert-danger" role="alert">
                                <h4>El carrito esta vacio</h4>
                            </div> :    
                        cart.map(productos => (
                            <div  key={productos.producto.id} className='d-flex p-2 w-100 '>
                                <img src={productos.producto.imagen} alt={productos.producto.nombre} height="150" />
                                <div className='d-flex flex-column text-start '>
                                    <h5>{productos.producto.nombre}</h5>    
                                    <p><strong>Total: ${productos.producto.total}</strong></p>
                                    <p><strong>Cantidad: {productos.producto.cantidad}</strong></p>
                                </div>
                            </div>
                        ))}
                </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <Link  to={"cart"}><button type="button" className="btn btn-primary" data-bs-dismiss="modal">Ir a carrito</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default CartWidget