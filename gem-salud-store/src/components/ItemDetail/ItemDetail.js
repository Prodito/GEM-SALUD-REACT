import ItemCount from '../Button/ItemCount';
import './ItemDetail.css';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);

    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data,quantity);
    }

    return (
        <div className='container'>
        <div className='detail'>
        <img className='detail-img' src={data.image} alt=''/>
        <h3 className="title">{data.title}</h3>
        <span className='text'> {data.description}</span>
        <div className='content'>
        {
            goToCart
            ? <Link to='/cart'>Checkout?</Link> : <ItemCount initial={1} stock={15} onAdd={onAdd}/>
        }
        </div>
        </div>    
        </div>
    );
}

export default ItemDetail;