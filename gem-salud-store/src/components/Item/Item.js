import './Item.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({info})=> {
return (
    <>
    <div className='card-cont'>
    <Link to={`/detail/${info.id}`} className="product">
        <img className="item-img" src={info.image} alt=""></img>
        <h6 className="item-title">{info.title}</h6>        
    </Link>
    </div>
    </>
);
}
export default Item; 