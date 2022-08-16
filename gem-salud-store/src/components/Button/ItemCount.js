import '../Button/ItemCount.css';
import React,{useState,useEffect} from 'react';

export const ItemCount =({initial ,stock ,onAdd})=>{
    const [count,setCount] = useState(parseInt(initial));

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

    useEffect(() => {
        setCount(parseInt(initial));
        
    },[initial])

    return(
        <div className='counter-box'>
        <button className='btn-dcr' disabled={count <= 1} onClick={decrease}>-</button>
        <span>{count}</span>
        <button className='btn-inc' disabled={count >= stock} onClick={increase}>+</button>    
        <div className='counter-box-low'>
        <button className='btn-add' disabled = {stock <= 0} onClick={()=> onAdd(count)}>Add to Cart</button>
        <p className='avl'>{stock} Disponibles</p>
        </div>
        </div>
    );
}

export default ItemCount;