import ItemDetail from '../ItemDetail/ItemDetail';
import React,{useState,useEffect} from 'react';

const products = {id: 1,image:"https://images.pexels.com/photos/7723623/pexels-photo-7723623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Surgical Gloves"};




export const ItemDetailContainer = () => {
    const [data,setData] = useState({});

    useEffect(() => {
const getData = new Promise(resolve => {

    setTimeout(() => {
        resolve(products);

    }, 3000);
});

getData.then(res => setData(res));

    },[])
    
    return (
        <div>
        <ItemDetail data={data}/> 
        </div>
    ); 

}


export default ItemDetailContainer;