import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import './Cart.css';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Alert from "@mui/material/Alert";



const Cart = () => {
    const {cart,totalPrice} = useCartContext();

    const [showAlert, setShowAlert] = useState(false);

    const order = {
        buyer:{
            name: 'Julian',
            mail: 'juliantomas.p@gmail.com',
            phone: '123123',
            address: 'insertAdress'},

            items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
            total: totalPrice(),
        }

        const handleClick = () => {
            const db = getFirestore();
            const ordersCollection = collection(db,'orders');
            addDoc(ordersCollection,order)
            .then(({ id }) => {console.log(id);setShowAlert(true)})
        }

    if (cart.length === 0 ) {
        return(
            <Box>
            <Typography sx={{margin:'auto'}}>
            <p>You didn't select any item!</p>
            <Link to='/'>Let's Shop!</Link>
            </Typography>
            </Box>
        );
    } else {
        return(
            <Box>
            <Typography sx={{margin:'right'}}>
            You selected the following items!
            </Typography>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <span className='cart-total'>Total : ${totalPrice()}</span>
            {showAlert ? (
            <Alert severity="success">The check out was completed!</Alert>
            ) : ( <Button variant='contained' color = 'primary' size = 'large' onClick={(handleClick)} >Check Out</Button> ) }
            </Box>
        )
    }
}
export default Cart;