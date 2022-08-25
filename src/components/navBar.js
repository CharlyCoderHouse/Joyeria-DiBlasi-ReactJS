import Logo_Puga from '../Logo_Puga.png';
const NavBar = () => {
    return (
        <div>
            <a href="#" >
                <img src={Logo_Puga} className="imgLogo" alt="Joyeria_Puga" width="140" height="100"/>
            </a>
            <h1 class="titulos">Proyecto Tienda Joyería PUGA</h1>
            <nav class="menuNav">
                <ul class="menuPrincipal">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Quienes Somos</a></li>
                    <li><a href="#">Promociones</a></li>
                    <li><a href="#">Productos</a>
                        <ul class="subMenuPrincipal">
                            <li><a href="#">Anillos</a></li>
                            <li><a href="#">Relojes</a></li>
                            <li><a href="#">Accesorios</a></li>
                            <li><a href="#">Marroquinería</a></li>
                        </ul>
                    </li>
                    <li><a href="pages/contacto.html">Contactanos</a></li>
                    <li class="nav-item">
                        <button type="button" className="botones">Inicie Sesión</button>                                               
                        </li>
                    <li class="nav-item">
                        <button type="button" className="botones">Carrito</button> 
                    </li>  
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;