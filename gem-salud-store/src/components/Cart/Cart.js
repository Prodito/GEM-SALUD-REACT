import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";



const Cart = () => {
    const {cart,totalPrice} = useCartContext();

    if (cart.lenght === 0 ) {
        return (
            <>
            <p>You didn't select any item!</p>
            <Link to='/'>Let's Shop!</Link>
            </>
        );
    }

    return(
        <>
        <div>You selected the following items!</div>
        {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        </>
    )
}
export default Cart;