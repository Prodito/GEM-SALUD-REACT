import './Item.css';
import React from 'react';



const Item = ({info})=> {
return (
    <a href='' className="SurgProducts"> 
    <img src={info.image} alt=""></img>
    <p>{info.title}</p>
    </a>
);
}
export default Item; 