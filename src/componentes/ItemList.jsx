import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "./context/ShopContext";
import { useParams } from "react-router-dom";

const ItemList = () => {
    const {id} = useParams();
    const {item} = useContext(ShopContext)
    
    const lista = id ? item.filter(categoria => categoria.categoria === id) : item

    return (
                <div className="d-flex flex-wrap">
                    {lista.map(productos => (
                        <div key={productos.id}>
                            <Link to={"/item/"+productos.id}>
                            <img src={productos.imagen} alt={productos.nombre} />
                            <h4>{productos.nombre}</h4>
                            <p><b>${productos.precio}</b></p>
                            </Link>
                        </div>
                    ))}
                </div>
    )
}

export default ItemList;