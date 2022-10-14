import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import Swal from 'sweetalert2';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,  onAuthStateChanged,
    sendPasswordResetEmail, } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { auth } from "../index";

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);
    const [dataUser, setDataUser] = useState([]);
    const [loading, setLoading] = useState(true);

    //Login 
      const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };

      const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };
    
      const logout = () => signOut(auth);
    
      const resetPassword = async (email) => sendPasswordResetEmail(auth, email);
    
      useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            if (currentUser){
                const dbUser = getFirestore();
                const docUs = doc(dbUser, `usuarios/${currentUser.uid}`);
                getDoc(docUs)
                .then(res => setDataUser({id: res.id, ...res.data()}))
            };
        });    
        return () => unsubuscribe();
      }, []);

    //Valido si el item esta en el carrito
    const isInCart = (id) => {
        return (
            cart.some(item => item.id === id)
        )
    }

    //Solo para consultar el CART
    useEffect(()=>{
        //console.log(cart);
    }, [cart]);

    //Agrego items al carrito
    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            //alert("El producto ya se encuentra en el carrito");
            Swal.fire({
                title: 'El producto ya se encuentra en el carrito!',
                showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                }
            })
            return false;
        }else{
            setCart([...cart, {...item, quantity},]);
            const ToastIng = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
                })
                
                ToastIng.fire({
                icon: 'success',
                title: (`Se agrego ${quantity} producto al carrito`) //'Ingreso al pedido'
            })
            console.log(quantity);
            console.log(item);
            return true;
        };    
        
    };

    //Borro todos los items del carrito
    const clear = () => {
        setCart([]);
    };

    //Borro un item del carrito
    const removeItem = (itemId) => {
        setCart(cart.filter(enCarrito => enCarrito.id !== itemId));
        Swal.fire({
            title: 'El producto fue eliminado del carrito!',
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })
    };

    // Consulto la cantidad del producto en el carrito
    const getCantidad = (id) => {
        const productCant = cart.find((enCarrito) => enCarrito.id === id);
    
        return productCant ? productCant.quantity : 0;
      };

  return (
    <CartContext.Provider value={
        { cart, 
        addToCart, 
        clear, 
        removeItem, 
        getCantidad, 
        signUp, 
        login, 
        logout,
        resetPassword, 
        user,
        dataUser,
        loading,
        }}>
        {children}
    </CartContext.Provider>
  )
};