import { createContext, useState, useEffect, useContext } from "react";
import { useShopContext } from "./ShopContext";
import { getFirestore, collection, addDoc } from "firebase/firestore"

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
}

export const UserProvider = ({children}) => {
    const [confirmUser, setConfirmUser] = useState(null);
    const initialUser = JSON.parse(localStorage.getItem('user')) || null;
    const [user, setUser] = useState(initialUser);
    const {cart, carritoFunciones} = useShopContext();
    const {totalPrecio, clear} = carritoFunciones();

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user]);

    const changeUserInfo = () => {
        setConfirmUser(null)
    }
    const fin = () => {
        setConfirmUser(false);
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const orden = {usuario: user.nombre, direccion: user.direccion, email: user.email, productos: cart, total: totalPrecio(), fecha: new Date()}
        const db = getFirestore()
        const colRef = collection(db, "orders")
        // addDoc(colRef, orden).then((res) => console.log(res))
        clear()
        setConfirmUser(true)
    }

    return (
        <UserContext.Provider value={{handleChange, onSubmit, user, changeUserInfo, confirmUser, fin}}>
            {children}
        </UserContext.Provider>
)
}

