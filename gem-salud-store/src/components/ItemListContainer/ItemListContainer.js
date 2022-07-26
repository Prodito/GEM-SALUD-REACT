import './ItemListContainer.css';
import ItemProduct from '../ItemProduct/ItemProduct';
import ItemCount from '../Button/ItemCount';

const ItemContainer =({section})=>{
    const onAdd = (quantity) => {
        console.log('Agregado al Carrito'+{quantity});
    }
    return(
        <div className="IContainer">
        <h1 className="Title">{section}</h1>
        <ItemProduct title="Gloves" price={2000} img={'surgical_gloves.jpg'} />
        <ItemCount initial ={0} stock= {5} onAdd={onAdd}/>
        <ItemProduct title="Syringes" price={5000} img={'syringes.jpg'} />
        <ItemCount initial ={0} stock= {10} onAdd={onAdd}/>
        <ItemProduct title="Desfibrillator" price={15000} img={'desfibrillator.jpg'} />
        <ItemCount initial ={0} stock= {0} onAdd={onAdd}/>
        <ItemProduct title="Gowns" price={6500} img={'surgical_gown.jpg'} />
        <ItemCount initial ={0} stock= {20} onAdd={onAdd}/>
        </div>
    );
}
export default ItemContainer;