import './Item.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({info})=> {
return (
    <><Link to={`/detail/${info.id}`} className="product">
        <img className="item-img" src={info.image} alt=""></img>
        <h6 className="item-title">{info.title}</h6>
    </Link>
        <div>
        <span className="item-desc">{info.description}</span>
        </div>
    </>
);
}
export default Item; 