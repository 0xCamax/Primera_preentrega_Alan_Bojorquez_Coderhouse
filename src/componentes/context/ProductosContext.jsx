import { createContext, useState, useEffect, useContext } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore"

export const ProductosContext = createContext();

export const useProductos = () => {
    return useContext(ProductosContext);
};

export const ProductosProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const db = getFirestore();
            const itemCollection = collection(db, "items");
            const result = await getDocs(itemCollection);
            setItems(result.docs.map(producto => ({ id: producto.id, ...producto.data() })));
            setLoading(false);
            } catch (error) {
            console.error('Error al obtener datos:', error);
            setLoading(false);
            }
        };

        fetchData();
    }, []);
    
    return (
        <ProductosContext.Provider value={{items, loading}}>
            {children}
        </ProductosContext.Provider>
        );
    };
    
