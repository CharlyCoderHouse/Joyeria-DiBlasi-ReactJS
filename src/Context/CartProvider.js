import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);
    
    //Valido si el item esta en el carrito
    const isInCart = (id) => {
        return (
            cart.some(item => item.id === id)
        )
    }

    //Solo para consultar el CART
    useEffect(()=>{
        console.log(cart);
    }, [cart]);

    //Agrego items al carrito
    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            alert("El producto ya se encuentra en el carrito");
            return false;
        }else{
            setCart([...cart, {...item, quantity},]);
            alert(`Se agrego ${quantity} producto al carrito`);
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
        const productBorrar = cart.filter(enCarrito => enCarrito.id !== itemId);
        setCart(productBorrar);
    };

    // Consulto la cantidad del producto en el carrito
    const getCantidad = (id) => {
        const productCant = cart.find((enCarrito) => enCarrito.id === id);
    
        return productCant ? productCant.quantity : 0;
      };

  return (
    <CartContext.Provider value={{ cart, addToCart, clear, removeItem, getCantidad }}>
        {children}
    </CartContext.Provider>
  )
};