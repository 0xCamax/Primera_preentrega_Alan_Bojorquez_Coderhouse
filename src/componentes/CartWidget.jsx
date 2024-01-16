import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas)


const CartWidget = () => {

    return (
    <>
    <button className='boton' ><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /><span className='notificacion'>1</span></button>
    
    </>
    )
}

export default CartWidget