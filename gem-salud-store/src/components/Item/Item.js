import './Item.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Item = ({info})=> {
return (
    <>
    <Card sx={{ maxWidth: 345 , margin:'auto' }}>
    <CardActionArea>
    <Link to={`/detail/${info.id}`} className="product">
    <CardMedia component="img" height="540" 
        src={info.image} alt=""/>
    <CardContent>
    <Typography gutterBottom variant="h6" component='div'>{info.title} </Typography>        
    </CardContent>
    </Link>
    </CardActionArea>
    </Card>
    </>
);
}
export default Item; 