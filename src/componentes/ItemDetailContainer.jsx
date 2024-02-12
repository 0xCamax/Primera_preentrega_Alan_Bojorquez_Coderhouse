import { useEffect, useState } from 'react';
import arrayproductos from './json/productos.json'
import ItemDetail from './ItemDetail.jsx';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            let producto = arrayproductos.find(item => item.id === id)
            resolve(producto);
        })
        promesa.then(data => {
            setItem(data);
        })
    }, []);

    return (
        <ItemDetail item={item} />
    )
}





export default ItemDetailContainer;