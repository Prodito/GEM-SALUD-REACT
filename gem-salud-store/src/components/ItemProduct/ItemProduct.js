import './ItemProduct.css';

const ItemProduct = ({title,price,img}) => {
    return(
        <div className="Item-Product">
        <img className="Img-Box" src={`./assets/${img}`} alt="Producto"/>
        <p className="Product">{title}</p>
        <button> Add to Cart </button>
        </div>

    );
}

export default ItemProduct;