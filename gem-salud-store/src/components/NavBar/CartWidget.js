import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import { useCartContext } from '../../Context/CartContext';

export const CartWidget = () => {
    const {totalProducts} = useCartContext();

    return(
        <div className='cartwidget'>
            <ShoppingCartIcon className="cart" />
            <span className='cart-tot'>{(totalProducts() || '')}</span>
        </div>
    )
}

export default CartWidget