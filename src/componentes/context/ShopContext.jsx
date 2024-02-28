import { createContext, useState, useEffect, useContext } from "react";


const ShopContext = createContext();

export const useShopContext = () => {
    return useContext(ShopContext);
}

export const ShopContextProvider = ({children}) => {
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart, setCart] = useState(initialCart);   

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

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
        const add = (producto, counter) => {
            if (validar(producto.id)){
                let p = cart.findIndex(productos => productos.producto.id === producto.id)
                cart[p].producto.cantidad += counter
                cart[p].producto.total = cart[p].producto.cantidad*cart[p].producto.precio
                setCart([...cart])
            } else {
                producto.cantidad = counter
                producto.total = counter*producto.precio 
                setCart([...cart, {producto}])
            }
        }

        const remove = (producto) => {
            const items = cart.filter(productos => productos.producto.id != producto.producto.id);
            setCart([...items]);
        }

        const clear = () => {
            setCart([])
        }

        const totalPrecio = () => {
            let total = 0
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].producto.total
            }
            return total
        }

        const totalProductos = () => {
            let cantidad = 0
            for (let i = 0; i < cart.length; i++) {
                cantidad += cart[i].producto.cantidad
            }
            return cantidad
        }

        const validar = (id) => {
            const valid = cart.some(productos => productos.producto.id === id)
            return valid
        }

        return {add, remove, validar, clear, totalPrecio, totalProductos}
    }

    

    return (
            <ShopContext.Provider value={{ cart, useCount, carritoFunciones}}>
                {children}
            </ShopContext.Provider>
    )
}