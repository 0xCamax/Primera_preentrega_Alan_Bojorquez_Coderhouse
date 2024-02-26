import AgregarCarrito from './AgregarCarrito.jsx';
import { useContext } from 'react';
import { ShopContext } from './context/ShopContext.jsx';


const Botones = ({item}) => {
    const {useCount} = useContext(ShopContext)   
    const {counter, increment, decrement} = useCount(1, 0, 100);

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light" onClick={decrement}>-</button>
                        <button type="button" className="btn btn-light">{counter}</button>
                        <button type="button" className="btn btn-light" onClick={increment}>+</button>
                    </div>
                    <AgregarCarrito item={item} cantidad={counter}/>
                </div>
            </div>
        </div>
    )
}

export default Botones;