import './ItemListContainer'

const ItemListContainer = ({item}) => {
    // class Item {
    //     constructor(Nombre, Genero, tipo, precio, CantidadInventario){
    //         this.nombre = Nombre;
    //         this.genero = Genero;
    //         this.tipo = tipo;
    //         this.precio = precio;
    //         this.cantidadInventario = CantidadInventario;
    //     }
    // }
    
    // const ItemList =[]
    // function additem (a, b, c, d, e) {
    //     const item = new Item(a, b, c, d, e);
    //     ItemList.push(item);
    // }
    
    // additem('Blusa', 'Mujer', 'ropa', 100, 10);
    // additem('Pantalon', 'Mujer', 'ropa', 100, 10);
    // additem('Calcetines', 'Mujer', 'ropa', 100, 10);
    // additem('Bolsa', 'Mujer', 'accesiorio', 100, 10);
    // additem('Sueter', 'Mujer', 'ropa', 100, 10);

    return (
            <li className="card item"><p>{item}</p><button className="btn btn-dark">Agregar al carrito</button></li>

    )
}

export default ItemListContainer