import { useShopContext } from "./context/ShopContext"

export const ResumenOrden = () => {
    const {cart, carritoFunciones} = useShopContext();
    const {totalPrecio} = carritoFunciones();
    return (
        <div className='m-5'>
                <h2># Resumen de la orden</h2>
                {cart.map(productos => (
                            <div  key={productos.producto.id} className='d-flex p-2 w-100 '>
                                <div className='d-flex flex-column text-start '>
                                    <h5>{productos.producto.nombre}</h5>    
                                    <p><strong>Cantidad: {productos.producto.cantidad}</strong></p>
                                    <p><strong>Total: ${productos.producto.total}</strong></p>
                                </div>
                            </div>
                        ))}
                        <div><p><strong>Total: {totalPrecio()}</strong></p></div>
            </div>
    ) 
}