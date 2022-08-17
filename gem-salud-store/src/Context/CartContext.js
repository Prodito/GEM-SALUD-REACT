import React,{useState,useContext} from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item,quantity) => {
        if(isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity} : product

            }));
        } else {
            setCart([...cart,{...item,quantity}]);
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0); //precio final
    }

    const totalProducts = () => cart.reduce((acm, currentProd) => acm + currentProd.quantity,0); //total de productos 

    const clearCart = () => setCart([]); //limpiar carrito de compras

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false; //si esta el producto en el carrito

    const removeProd = (id) => setCart(cart.filter(product => product.id !== id)); //borrar un producto del carrito

return (
    <CartContext.Provider value = {{
        clearCart,
        isInCart,
        removeProd,
        addProduct,
        totalPrice,
        totalProducts,
        cart

    }}>
        {children}
    </CartContext.Provider>

)
}
export default CartProvider;