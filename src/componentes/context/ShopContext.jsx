import { createContext, useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore"


export const ShopContext = createContext();

const ShopContextProvider = ({children}) => {
    const [cart, setCart] = useState ([]);
    const [item, setItem] = useState ([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "items");
        getDocs(itemCollection).then(resultado => {
            setItem(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})))
        });

    }, []);
    
    const useCount = (initial, min, max) => {
        const [counter, setCounter] = useState(initial);
    
        const reset = () => {
            setCounter(initial);
        }
    
        const increment = () => {
            if (counter < max) {
                setCounter(counter + 1);
            }
        }
    
        const decrement = () => {
            if (counter > min) {
                setCounter(counter - 1);
            }
        }
        return {counter, reset, increment, decrement}
    }

    const carritoFunciones = () => {
        const add = () => {
        }
        const remove = () => {
        }
        const clear = () => {
        }
        const total = () => {
        }
    }
    

    return (
        <ShopContext.Provider value={{item, useCount, carritoFunciones}}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;