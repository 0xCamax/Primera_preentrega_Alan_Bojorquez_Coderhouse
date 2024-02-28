import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useShopContext } from './context/ShopContext.jsx';
import { Eliminar } from "./Eliminar.jsx"
import { Link } from 'react-router-dom';


const Cart = () => {
    const {carritoFunciones, cart} = useShopContext()
    const {totalPrecio} = carritoFunciones();
    library.add(fas)
    
    return (
        <div className="container">
                {cart.length === 0 ?
                    <div>
                        <div className="d-flex flex-column alert alert-danger text-center align-items-center" role="alert">
                            <h4>No hay productos en el carrito</h4>
                            <button type="button" className="btn btn-light w-50"><Link to={"/"}>Seguir comprando</Link></button>
                        </div> 
                    </div> :
                    <>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Producto</th>
                                <th scope="col"></th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Total</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        {cart.map(productos => (
                        <tbody key={productos.producto.id}>
                            <tr>    
                                <th scope="row"><img src={productos.producto.imagen} alt={productos.producto.nombre} height="150" /></th>
                                <td className='align-middle'><strong>{productos.producto.nombre}</strong></td>
                                <td className='align-middle'><Eliminar  producto={productos.producto}/></td>
                                <td className='align-middle'><strong>{productos.producto.cantidad}</strong></td>    
                                <td className='align-middle'><strong>${productos.producto.total}</strong></td>
                            </tr>
                        </tbody>
                        ))}
                        <tbody >
                                <tr>    
                                    <th scope="row"></th>
                                    <td className='align-middle'></td>
                                    <td className='align-middle'></td>
                                    <td className='align-middle'></td>
                                    <td className='align-middle'><strong>Total : ${totalPrecio()}</strong></td>
                                </tr>
                        </tbody> 
                    </table>
                    <button><Link to={"/checkout"}>Finalizar Pedido</Link></button>
                    </>
                    }
        </div>
    )
}

export default Cart