import Logo_Puga from '../img/Logo_Puga.png';
import CartWidget from './CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div>
            <a href="./index.html" >
                <img src={Logo_Puga} className="imgLogo" alt="Joyeria_Puga" width="140" height="100"/>
            </a>
            <h1 className='titulos'>Proyecto Tienda Joyería PUGA</h1>
            <nav className="menuNav">
                <ul className="menuPrincipal">
                    <li><a href="./index.html">Inicio</a></li>
                    <li><a href="./index.html">Quienes Somos</a></li>
                    <li><a href="./index.html">Promociones</a></li>
                    <li><a href="./index.html">Productos</a>
                        <ul className="subMenuPrincipal">
                            <li><a href="./index.html">Anillos</a></li>
                            <li><a href="./index.html">Relojes</a></li>
                            <li><a href="./index.html">Accesorios</a></li>
                            <li><a href="./index.html">Marroquinería</a></li>
                        </ul>
                    </li>
                    <li><a href="./index.html">Contactanos</a></li>
                    <li className="nav-item">
                        <button type="button" className="botones">Inicie Sesión</button>                                               
                        </li>
                    <li className="nav-item">
                        <button type="button" className="botones">Carrito <CartWidget /> <span>4</span>  </button> 
                    </li>  
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;