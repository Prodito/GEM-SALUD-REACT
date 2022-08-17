import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import './Cart.css';



const Cart = () => {
    const {cart,totalPrice} = useCartContext();

    if (cart.length === 0 ) {
        return (
            <>
            <p>You didn't select any item!</p>
            <Link to='/'>Let's Shop!</Link>
            </>
        );
    } else {
        return(
            <>
            <div className='cart-container'>
            <h3 className='cart-title'>You selected the following items!</h3>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <span className='cart-total'>Total : ${totalPrice()}</span>
            </div>
            </>
        )
    }
}
export default Cart;