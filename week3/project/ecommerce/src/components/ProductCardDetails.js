import React, {useState} from "react";
import Button from "./Button";


function ProductsCard(props) {
    let badgClass = "badge";
    badgClass += props.isAvailable ? " bg-success" : "  bg-danger";

    let [productCount,setProductCount]= useState(0)

    function displayFormattedProductsCount() {
        return productCount > 0 ? productCount : 0;
    };

    let incrementProductCount = function(){
        setProductCount(prev => prev + 1)
    };

    let decrementProductCount = function(){
        setProductCount(prev => prev - 1)
    };
    console.log(props.id)

    return (
        <div className="d-flex align-items-center justify-content-between mt-1">
            <h6 className="font-weight-bold my-2">{"$" + props.price}</h6>
            <Button envntHandler={decrementProductCount} disabled={productCount === 0}>-</Button>
            <span>{displayFormattedProductsCount()}</span>
            <Button envntHandler={incrementProductCount}>+</Button>
            <span className={badgClass}>{props.isAvailable ? "Available" : "Unavilable"}</span>
        </div>
    )
}

export default ProductsCard;
