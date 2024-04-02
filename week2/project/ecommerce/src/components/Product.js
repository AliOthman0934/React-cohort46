import ProductsCard from "./ProductCardDetails"



function Products(props) {
    return (
        <div className="card-group">
            <div className="card custom-card">
                <img src={props.imgUrl} className="card-img-top" alt="Product" style={{ width: "120px", height: "120px" }} />
                <div className="card-body">
                    <h5 className="card-title"  style={{fontSize:16}}>{props.name}</h5>
                    <ProductsCard price={props.price} isAvailable={props.isAvailable} />
                </div>
            </div>    
        </div>
    );
}

export default Products;

