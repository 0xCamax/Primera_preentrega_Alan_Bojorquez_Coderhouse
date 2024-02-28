import { Link } from "react-router-dom";
import { useProductos } from "./context/ProductosContext";
import { useParams } from "react-router-dom";   

const ItemList = () => {
    const {id} = useParams();
    const {items, loading} = useProductos();

    if (loading) {
        return (
        <div>Cargando...</div>
        );
    }
    
    const lista = id ? items.filter(categoria => categoria.categoria === id) : items

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {lista.map(productos => (
                <div key={productos.id}>
                    <Link to={"/item/"+productos.id}>
                    <img src={productos.imagen} alt={productos.nombre} />
                    <h4>{productos.nombre}</h4>
                    <p><strong>{"$" + productos.precio}</strong></p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ItemList;