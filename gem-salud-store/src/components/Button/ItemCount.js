import '../Button/ItemCount.css';
import React,{useState,useEffect} from 'react';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

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
        <>
        <IconButton disabled={count <= 1} onClick={decrease} size = 'large'>
        <RemoveIcon/>
        </IconButton>
        <span>{count}</span>
        <IconButton disabled={count >= stock} onClick={increase} size = 'large' >
        <AddIcon/>
        </IconButton>    
        <IconButton color="primary" aria-label="add to shopping cart" sx={{ fontSize: 200 }} disabled = {stock <= 0} onClick={()=> onAdd(count)}>
        <AddShoppingCartIcon />
        </IconButton>    
        <p className='avl'>{stock} Disponibles</p>
        </>
    );
}

export default ItemCount;