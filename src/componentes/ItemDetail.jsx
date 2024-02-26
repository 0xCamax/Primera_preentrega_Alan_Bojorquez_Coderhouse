import Botones from "./Botones";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./context/ShopContext";

const ItemDetail = () => {
    const {id} = useParams();
    const {item} = useContext(ShopContext)
    const producto = item.filter(detalle => detalle.id == id)   
    const {nombre, imagen, descripcion, precio} = producto


    console.log(item.precio)

    return (
        <div className="container">
            <div className="d-flex align-items-center">
                <div>
                    <img src={imagen} alt={nombre} />
                </div>
                <div>
                    <h1>{nombre}</h1>
                    <p>{descripcion}</p>
                    <p><b>${precio}</b></p>
                    <Botones item={item} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;