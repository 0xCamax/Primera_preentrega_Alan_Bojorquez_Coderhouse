import Botones from "./Botones";

const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="d-flex align-items-center">
                <div>
                    <img src={item.imagen} alt={item.nombre} />
                </div>
                <div>
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <p><b>${item.precio}</b></p>
                    <Botones item={item} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;