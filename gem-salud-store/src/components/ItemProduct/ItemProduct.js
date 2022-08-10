import './ItemProduct.css';

const ItemProduct = ({title,price,img}) => {
    return(
        <div className="item-product">
        <img className="img-box" src={`./assets/${img}`} alt="Producto"/>
        <p className="item-product">{title}</p>
        <span className="price">${price}</span>
        </div>
    );
}

export default ItemProduct;