import './AdmUser.css';
import { useState, useEffect, useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { CartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'animate.css';

// ES UN MODAL PARA EL LOGIN EN LA TIENDA

const FormLogin = ({setShowForm, setShowFormReg} ) => {
  const { login } = useContext(CartContext);
  const [user, setUser] = useState({
    email:'',
    password:'',
  });
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      Swal.fire({
          icon: "success",
          title: 'Su login se completo con Exito. Ya puede empezar a comprar!',
          showClass: {
          popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
          }
        })
        setShowForm(false);
        setShow(false);
        navigate("/");
    } catch (error) { 
        const errorCode = error.code;
        console.log(errorCode);
        var errorMessage = "";
        switch (errorCode) {
            case "auth/user-not-found":
                errorMessage = "El correo electrónico NO se encuentra registrado en la Tienda. Por favor haga click en Registrase.";
                break;
            case "auth/wrong-password":
                errorMessage = "La contraseña NO es correcta.";
                break;
            case "auth/internal-error":
                errorMessage = "Hay campos incompletos, por favor revise los datos ingresados.";
                break;   
            case "auth/invalid-email":
                errorMessage = "No ingreso un correo electrónico por favor revise los datos ingresados.";
                break;                                        
            default:
                errorMessage = "Hubo un error en el registro, verifique los datos e intente de nuevo.";                    
                break;
        };            
        Swal.fire({
            icon: "error",
            title: `${errorMessage}`,
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        });
    }
  };

  const handleShow = () => setShow(true);

  useEffect(() => {
    handleShow();
  }, []);
  
  const handleClose = (() => {
    
    setShowForm(false);
    setShow(false);
    navigate("/");
  });

  const handleRegister = (() => {
    
    setShowForm(false);
    setShow(false);
    setShowFormReg(true);
  });


  return (
    <>
        <Modal show={show} onHide={handleClose} >
        
        <Modal.Header closeButton>
          <Modal.Title>Ingresar a la Tienda</Modal.Title>
        </Modal.Header>

        <Form className="modal-datos" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Ingresa tu email" onChange={handleChange}/>
                <Form.Text className="text-muted">
                Ingresa tu direccion de email declarada en el registro.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control name="password" type="password" placeholder="Ingresa tu Contraseña" onChange={handleChange}/>
            </Form.Group>
            <Button variant="warning" type="submit"> Ingresar</Button>
        </Form>

        <Modal.Footer>
          <Form.Label>No tienes Cuenta? </Form.Label>
          <Button variant="warning" onClick={handleRegister}>
            Registrarse
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
        
      </Modal>
    </>
  );
}

export default FormLogin;