import ItemCount from '../Button/ItemCount';
import './ItemDetail.css';
import React,{useContext, useState} from 'react';
import { useCartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);

    const{addProd} = useContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProd(data,quantity);
    }

    return (
        <div className='container'>
        <div className='detail'>
        <img className='detailImg' src={data.image} alt=''/>
        <div className='content'>
        <h1>{data.title}</h1>
        {
            goToCart
            ? <Link to='/cart'>Checkout?</Link>
            : <ItemCount initial={3} stock={5} onAdd={onAdd}/>
        }
        </div>
        </div>    
        </div>
    );
}

export default ItemDetail;