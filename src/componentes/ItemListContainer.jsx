import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import arrayProductos from './json/productos.json'
import ItemList from './ItemList.jsx'


const ItemListContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {    
            resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos)
        })
        promesa.then(data => {
            setItem(data);
        })
    }, [id]);

    return (
        <ItemList item={item} />
    )
}

export default ItemListContainer