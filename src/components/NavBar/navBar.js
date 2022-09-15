import "./navBar.css";
import Logo_Puga from '../../img/Logo_Puga.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="menuNav">
            <h1 className='titulos'>Proyecto Tienda Joyería PUGA</h1>
            <Link
                to={'/'} >
                <img src={Logo_Puga} className="imgLogo" alt="Joyeria_Puga" width="140" height="100"/>
            </Link>
            <ul className="menuPrincipal">
                <li>
                   <Link
                       to={'/'} >
                       Inicio
                    </Link>    
                </li>
                <li>
                   <Link
                       to={'/quienesSomos'} >
                       Quienes Somos
                    </Link>    
                </li>                              
                <li>
                    <Link>
                       Productos
                    </Link>  
                    <ul className="subMenuPrincipal">
                        <li>
                            <Link
                                to={'/categoria/Anillos'} >
                                Anillos
                            </Link>    
                        </li>
                        <li>
                            <Link
                                to={'/categoria/Relojes'} >
                                Relojes
                            </Link>    
                        </li>
                        <li>
                            <Link
                                to={'/categoria/Accesorios'} >
                                Accesorios
                            </Link>    
                        </li>
                        <li>
                            <Link
                                to={'/categoria/Marroquineria'} >
                                Marroquinería
                            </Link>    
                        </li>                                                                                    
                    </ul>
                </li>
                <li>
                   <Link
                       to={'/contacto'} >
                       Contactanos
                    </Link>    
                </li>
                <li className="nav-item">
                    <button type="button" className="botones">Inicie Sesión</button>                                               
                    </li>
                <li className="nav-item">
                    <button type="button" className="botones">Carrito <CartWidget /> <span>4</span>  </button> 
                </li>  
            </ul>
        </div>
    )
}

export default NavBar;