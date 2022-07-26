import './ItemListContainer.css'
import ItemProduct from "../ItemProduct/ItemProduct.js"

const ItemContainer =({section})=>{
    return(
        <div className="IContainer">
        <h1 className="Title">{section}</h1>
        <ItemProduct title="Gloves" price={2000} img={'surgical_gloves.jpg'} />
        <ItemProduct title="Syringes" price={5000} img={'syringes.jpg'} />
        <ItemProduct title="Desfibrillator" price={15000} img={'desfibrillator.jpg'} />
        <ItemProduct title="Gowns" price={6500} img={'surgical_gown.jpg'} />
        </div>
    );
}
export default ItemContainer;