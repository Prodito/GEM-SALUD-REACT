import './Item.css';
import React from 'react';
import ItemCount from "../Button/ItemCount"
import { Link } from 'react-router-dom';


const Item = ({info})=> {
return (
    <Link className="item-container">
    <img className="item-img" src={info.image} alt=""></img>
    <p className="item-title">{info.title}</p>
    <p className="item-desc">{info.description}</p>
    <ItemCount className="item-count"/>
    </Link>
);
}
export default Item; 