import './Item.css';
import React,{useContext} from 'react';
import { CartContext } from '../Context/CartContext';


const Item = ({info})=> {
    const nombre = useContext(CartContext);
return (
    <a href='' className="SurgProducts"> 
    <img src={info.image} alt=""></img>
    <p>{info.title}</p>
    </a>
);
}
export default Item; 