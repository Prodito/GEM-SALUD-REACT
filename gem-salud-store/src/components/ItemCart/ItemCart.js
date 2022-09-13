import React from "react";
import { useCartContext } from "../../Context/CartContext";
import './ItemCart.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from "@mui/material";


const ItemCart = ({product}) => {
    
const {removeProd} = useCartContext();

    return (
        <Card sx={{maxWidth:450, margin:'auto'}}>
            <CardMedia
            component="img"
            src={product.image} alt={product.title}
            height="350"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component='div'>
                {product.title}
            </Typography>
            <Typography>    
                <p>Quantity: {product.quantity}</p>
                <p>U. Price: {product.price}</p>
                <p>SubTotal: ${product.quantity * product.price}</p>
                </Typography>    
                <Button variant="contained" color='error' startIcon={<DeleteIcon />}  onClick={() => removeProd(product.id)}>Remove from Cart</Button>
                </CardContent>
            </Card>
        
    )
}

export default ItemCart;