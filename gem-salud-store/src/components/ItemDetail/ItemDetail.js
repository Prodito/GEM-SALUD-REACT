import ItemCount from '../Button/ItemCount';
import './ItemDetail.css';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import { CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);

    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data,quantity);
    }

    return (
        <Card sx={{maxWidth:650, margin:'auto'}}>
        <CardMedia
        component="img" 
        image={data.image}
        alt=''
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.title}
        </Typography>
        <Typography variant='body2' color="text.secondary">
        {data.description}
        </Typography>
        </CardContent>
        {
            goToCart
            ? <Link to='/cart'>Checkout?</Link> : <ItemCount initial={1} stock={15} onAdd={onAdd}/>
        }   
        </Card>
    );
}

export default ItemDetail;