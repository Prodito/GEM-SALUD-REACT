import './Item.css';
import React from 'react';

const Item = ({info})=> {
return (
    <div>
    <img src={info.image} alt=""></img>
    <p>{info.title}</p>
    </div>
);
}
export default Item; 