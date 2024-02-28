import Botones from "./Botones";
import { useParams } from "react-router-dom";
import { useProductos } from "./context/ProductosContext";

const ItemDetail = () => {
    const {id} = useParams();
    const {items, loading} = useProductos();

    if (loading) {
        return (
        <div>Cargando...</div>
        );
    }

    const producto = items.filter(detail => detail.id == id)

    return (
        <div className="container">
            <div className="d-flex align-items-center">
                {producto.map(producto => (
                        <div key={producto.id}  className="d-flex align-items-center">
                            <div>
                                <img src={producto.imagen} alt={producto.nombre} height="500" />
                            </div>
                            <div className="m-3">
                                <h1>{producto.nombre}</h1>
                                <p>{producto.descripcion}</p>
                                <p><strong>{"$" + producto.precio}</strong></p>
                                <Botones id={id} />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ItemDetail;