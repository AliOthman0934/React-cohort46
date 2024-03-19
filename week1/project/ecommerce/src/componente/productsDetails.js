import Button from "./button";

function ProductsDetails(props) {
    let badgeClass = "badge";
    badgeClass += props.isAvailable ? " bg-success" : " bg-danger";

    let productCount = 0;
    function displayFormattedProductsCount() {
        return productCount > 0 ? productCount : "zero";
    }

    let incrementProductCount = function () {
        productCount++;
        console.log(productCount);
    };

    let decrementProductCount = function () {
        productCount--;
        console.log(productCount);
    };

    return (
        <div className="d-flex align-items-center justify-content-between mt-1">
            <h6 className="font-weight-bold my-2">{props.price}</h6>
            <Button eventHandler={decrementProductCount}>-</Button>
            <span>{displayFormattedProductsCount()}</span>
            <Button eventHandler={incrementProductCount}>+</Button>
            <span className={badgeClass}>{props.isAvailable ? "Available" : "Unavailable"}</span>
        </div>
    );
}

export default ProductsDetails;
