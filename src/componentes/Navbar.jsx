import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="menu navbar navbar-expand-lg bg-body-tertiary sticky-top ">
                <Link to={"/"}>FASCINO</Link>
                <ul className="navbar-nav menu-list">
                    <li className="nav-item btn btn-primary-light"><Link to={"/"}>Inicio</Link></li>
                    <li>
                        <div className="dropdown">
                            <button className="btn btn-primary-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={"categoria/Abrigos"}>Abrigos</Link></li>
                                <li><Link className="dropdown-item" to={"categoria/Chaquetas"}>Chaquetas</Link></li>
                                <li><Link className="dropdown-item" to={"categoria/Vestidos"}>Vestidos</Link></li>
                                <li><Link className="dropdown-item" to={"categoria/Camisas"}>Camisas</Link></li>
                                <li><Link className="dropdown-item" to={"categoria/Jeans"}>Jeans</Link></li>
                                <li><Link className="dropdown-item" to={"categoria/Playeras"}>Playeras</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <span>
                    <CartWidget />
                </span>

            </nav>
        </>
    )
}

export default Navbar;