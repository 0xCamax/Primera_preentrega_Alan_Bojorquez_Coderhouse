import { useShopContext } from "./context/ShopContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)

export const Eliminar = (producto) => {
    const {carritoFunciones, cart} = useShopContext();
    const {remove} = carritoFunciones();

    const removeItem = () => {
        remove(producto);
        console.log(cart)
    }

    return (
        <button className="btn btn-light ms-auto p-2 h-25 align-self-center" onClick={removeItem}>
            <FontAwesomeIcon icon="fa-solid fa-trash" size="lg" alt="Eliminar"/>
        </button>
    )
}