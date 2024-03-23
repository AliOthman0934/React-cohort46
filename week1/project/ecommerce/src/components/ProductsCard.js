import React, {useState} from "react";
import Button from "./Button";

function ProductsCard(props) {
    let badgClass = "badge";
    badgClass += props.isAvailable ? " bg-success" : "  bg-danger";

    let [productCount,upDateCount]= useState(0)

    function displayFormattedProductsCount() {
        return productCount > 0 ? productCount : "zero";
    };

    let incrementProductCount = function(){
        upDateCount(++productCount)
    };

    let decrmnetProductCount = function(){
        upDateCount(--productCount)
    };


    return (
        <div className="d-flex align-items-center justify-content-between mt-1">
            <h6 className="font-weight-bold my-2">{props.price}</h6>
            <Button envntHandler={decrmnetProductCount} disabled={productCount === 0}>-</Button>
            <span>{displayFormattedProductsCount()}</span>
            <Button envntHandler={incrementProductCount}>+</Button>
            <span className={badgClass}>{props.isAvilable ? "Avilable" : "Unavilable"}</span>
        </div>
    )
}

export default ProductsCard;
