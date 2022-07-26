import './ItemProduct.css';

const ItemProduct = ({title,price,img}) => {
    return(
        <div className="Item-Product">
        <img className="Img-Box" src={`./assets/${img}`} alt="Producto"/>
        <p className="Product">{title}</p>
        <span className="Price">${price}</span>
        </div>
    );
}

export default ItemProduct;