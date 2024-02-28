import { useShopContext } from './context/ShopContext.jsx';
import { useProductos } from './context/ProductosContext.jsx';


const Botones = (id) => {
    const {carritoFunciones, useCount} = useShopContext(); 
    const {counter, increment, decrement} = useCount(1, 0, 100);
    const {add} = carritoFunciones();
    const {items, loading} = useProductos();
    
    const producto = items.find(detail => detail.id == id.id)
    
    
    const onAdd = () => {
        add(producto, counter);
    }
    

    return (
        <div className="container">
            <div className="d-flex">
                <div className="col-md-4 w-100">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light" onClick={decrement}>-</button>
                        <button type="button" className="btn btn-light">{counter}</button>
                        <button type="button" className="btn btn-light" onClick={increment}>+</button>
                    </div>
                    <button type="button" className="btn btn-light" onClick={onAdd} >Agregar a Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Botones;