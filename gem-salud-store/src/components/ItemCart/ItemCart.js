import React from "react";
import { useCartContext } from "../../Context/CartContext";
import './ItemCart.css';


const ItemCart = ({product}) => {
    
const {removeProduct} = useCartContext();

    return (
        <div>
            <img src={product.image} alt={product.title}/>
            <div>
                <p>Title : {product.title}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Price u.: {product.price}</p>
                <p>SubTotal: ${product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default ItemCart;