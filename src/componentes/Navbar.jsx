import CartWidget from "./CartWidget";


const Navbar = () => {
    return (
        <>
            <nav className="menu navbar navbar-expand-lg bg-body-tertiary sticky-top ">
                <a className="navbar-brand" href="#">FASCINO</a>
                <ul className="navbar-nav menu-list">
                    <li className="nav-item"><a href="">Ropa</a></li>
                    <li className="nav-item"><a href="">Zapatos</a></li>
                    <li className="nav-item"><a href="">Accesorios</a></li>
                </ul>
                <span>
                    <CartWidget />
                </span>
            </nav>
        </>
    )
}

export default Navbar;