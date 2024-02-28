import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'    
import { useUserContext } from "./context/UserProvider"
import { useShopContext } from './context/ShopContext'
import { Link } from "react-router-dom";
import { ResumenOrden } from './ResumenOrden'
library.add(fas)


const Checkout = () => {
    const {handleChange, onSubmit, user, changeUserInfo, confirmUser, fin} = useUserContext();
    const {cart} = useShopContext()

    return (
        <>
        { confirmUser ?
            <div className="d-flex flex-column justify-content-center">
                <h2>Tu compra se ha completado con exito</h2>
                <FontAwesomeIcon icon="fa-solid fa-circle-check" style={{color: "#63E6BE",}} size='2xl'/>
                <button type='button' className='button button-primary m-2'onClick={fin}><Link to={"/"} onClick={fin}>Inicio</Link></button>
            </div> : ((confirmUser ?? true) ?
            <div className='container d-flex m-5 w-100 justify-content-between'>
            <div className='m-3 d-flex justify-content-center'>
                    <form className="w-100" onSubmit = {onSubmit}>
                        <fieldset> 
                            <div className="col m-2 w-100">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" name="nombre" className="form-control" aria-label="First name" onChange={handleChange} />
                            </div>
                            <div className="col-md-6 w-100 m-2">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" id="email" onChange={handleChange} />
                            </div>
                            <div className="col-md-6 w-100 m-2">
                                <label htmlFor="direccion" className="form-label">Direccion</label>
                                <input type="text" name="direccion"  className="form-control" id="direccion" onChange={handleChange} />
                            </div>
                        </fieldset>
                        <div className="col-12 d-flex justify-content-center m-2">
                            <button type="submit" className="btn btn-primary w-100 m-1">Finalizar pedido</button>
                        </div>
                    </form>
            </div>
            <ResumenOrden />
            </div> : 
            <div className='container d-flex m-5 w-100 justify-content-between'>
                <div className='m-1 d-flex justify-content-center'>
                        <form className="w-100" onSubmit = {onSubmit}>
                            <fieldset disabled> 
                                <div className="col m-2 w-100">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input type="text" value={user.nombre} name="nombre" className="form-control" aria-label="First name" readOnly />
                                </div>
                                <div className="col-md-6 w-100 m-2">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" value={user.email} name="email" className="form-control" id="email" readOnly/>
                                </div>
                                <div className="col-md-6 w-100 m-2">
                                    <label htmlFor="direccion" className="form-label">Direccion</label>
                                    <input type="text" name="direccion" value={user.direccion}  className="form-control" id="direccion" readOnly />
                                </div>
                            </fieldset>
                            <div className="col-12 m-2 d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary w-50 m-1">Finalizar pedido</button>
                                <button type="button" className="btn btn-secondary w-50 m-1" onClick={changeUserInfo}>Cambiar Informacion</button>
                            </div>
                        </form>
                </div>
            <ResumenOrden />
        </div>)
        }
        </>
    )
}

export default Checkout 