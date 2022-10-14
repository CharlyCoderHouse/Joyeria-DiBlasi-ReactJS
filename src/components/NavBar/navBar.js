import "./navBar.css";
import logo from "../../logo.svg";
import { useState, useEffect, useContext } from "react";
import Logo_Puga from '../../img/Logo_Puga.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";
import FormLogin from "../AdmUser/Login";
import FormRegister from "../AdmUser/Register";
import Swal from 'sweetalert2';
import 'animate.css';

const NavBar = () => {
    const { logout, user, dataUser, loading } = useContext(CartContext);  
    const [showForm, setShowForm] = useState(false);
    const [showFormReg, setShowFormReg] = useState(false);
    const navigate = useNavigate();
    //console.log(dataUser);
    const handleShowLogin = () => {
        setShowForm(true);
    };

    const handleCart = () => {
        Swal.fire({
            title: 'Debe iniciar sesión para continuar!',
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })
    };
    
    const handleLogout = async () => {
        try {
          await logout();
          navigate("/", { replace: true });
        } catch (error) {
          console.error(error.message);
        }
    };

    useEffect(() => {
    }, [showForm]);

    return (
    <>
        {loading ? (
        <>
            <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <span>Cargando...</span>
            </div>  
        </>
        ) : (
            <>
                {user !== null && <p className="textUser">Bienvenido {dataUser.nombre} </p>}
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
                            {user !== null ?
                                <Button className='btn-warning' onClick={handleLogout}>Cerrar Sesión <i className="fa-solid fa-arrow-right-from-bracket"></i></Button>
                                :    
                                <Button className='btn-warning' onClick={handleShowLogin}>Inicie Sesión <i className="fa-solid fa-person-arrow-down-to-line"></i></Button>
                            }                                             
                            { (showForm) && <FormLogin setShowForm={setShowForm} setShowFormReg={setShowFormReg} /> }
                            { (showFormReg) && <FormRegister setShowFormReg={setShowFormReg} /> }
                        </li>
                        <li className="nav-item">
                            {user !== null ? 
                                <Link
                                    to={'/cart'} >    
                                    <Button className='btn-warning'><CartWidget /> </Button>
                                    </Link>
                                : 
                                <Button className='btn-secondary' onClick={handleCart}><CartWidget /> </Button>
                            }
                        </li>  
                    </ul>
                </div>
                
            </>
        )}
    </>
    )
}

export default NavBar;