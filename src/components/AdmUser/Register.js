import './AdmUser.css';
import { useState, useEffect, useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { CartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import 'animate.css';

// ES UN MODAL PARA PEDIR LOS DATOS DE ENVIO

const FormRegister = ({setShowFormReg}) => {
  const dbUser = getFirestore();  
  const { signUp } = useContext(CartContext);
  const [user, setUser] = useState({
    nombre:'',
    phone:'',
    email:'',
    password:'',
  });
  const [showReg, setShowReg] = useState(false);
  const navigate = useNavigate();
  

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(user.nombre==="" || user.phone==="" ){
        Swal.fire({
          icon: "error",
          title: "Debe completar todos los campos!",
        });
      } else {
        try {
        const infoUser = await signUp(user.email, user.password);
        const docUser = doc(dbUser, `usuarios/${infoUser.user.uid}`);
        setDoc(docUser, {nombre: user.nombre, phone: user.phone, email: user.email});
        Swal.fire({
            title: 'Su registro se completo con Exito. Ya puede empezar a comprar!',
            icon: "success",
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
            })
        setShowFormReg(false);
        setShowReg(false);    
        navigate("/");
        } catch (error) {
            //setError(error.message);
            const errorCode = error.code;
            console.log(errorCode);
            var errorMessage = "";
            switch (errorCode) {
                case "auth/email-already-in-use":
                    errorMessage = "El correo electrónico ya se encuentra registrado en la Tienda.";
                    break;
                case "auth/weak-password":
                    errorMessage = "La contraseña debe tener un mínimo de 6 caracteres.";
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
    }
  };

  const handleShowReg = () => setShowReg(true);

  useEffect(() => {
    handleShowReg();
  }, []);
  
  const handleClose = (() => {
    
    setShowFormReg(false);
    setShowReg(false);
    navigate("/", { replace: true });
  });

  return (
    <>
        <Modal show={showReg} onHide={handleClose} >
        
        <Modal.Header closeButton>
          <Modal.Title>Ingresa tus datos de Registro</Modal.Title>
        </Modal.Header>

        <Form className="modal-datos" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control name="nombre" type="text" placeholder="Ingresa tu Nombre y Apellido" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTel">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control name="phone" type="number" placeholder="Ingresa tu Teléfono" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Ingresa tu email" onChange={handleChange}/>
                <Form.Text className="text-muted">
                Ingresa tu direccion de email como usuario de ingreso.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPass">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control name="password" type="password" placeholder="Ingresa tu Contraseña" onChange={handleChange}/>
                <Form.Text className="text-muted">
                    La contraseña no debe ser menor a 6 caracteres.
                </Form.Text>
            </Form.Group>
            <Button variant="warning" type="submit"> Registrarse</Button>
        </Form>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
        
      </Modal>
    </>
  );
}

export default FormRegister;