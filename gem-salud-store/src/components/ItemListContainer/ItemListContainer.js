import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import React,{useState,useEffect} from 'react';


const products = [
    {id: 1,image:"https://images.pexels.com/photos/7723623/pexels-photo-7723623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Surgical Gloves"},
    {id: 2,image:"https://images.pexels.com/photos/3786119/pexels-photo-3786119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Surgical Syringes"},
    {id: 3,image:"https://images.pexels.com/photos/6519837/pexels-photo-6519837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Medical Desfibrillator"},
    {id: 4,image:"https://images.pexels.com/photos/7089393/pexels-photo-7089393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Medical Gown"},
];


const ItemContainer =({section})=>{
const [data,setData] = useState([]);

useEffect(() => {
const getData = new Promise(resolve => {
    setTimeout(() => {
        resolve(products)
    }, 3000);
});
    getData.then(res => setData(res))

}, [])

    const onAdd = (quantity) => {
        console.log('Agregado al Carrito'+{quantity});
    }
    return(
        <div className="list-products">
        <h1 className="item-product">{section}</h1>
        <ItemList data={data}/>
        </div>
    );
}
export default ItemContainer;