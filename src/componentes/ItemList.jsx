import { Link } from "react-router-dom";

const ItemList = ({item}) => {
    return (
                <div className="d-flex flex-wrap">
                    {item.map(productos => (
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