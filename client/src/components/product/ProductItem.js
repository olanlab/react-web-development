import React from "react";

const ProductItem = (props) => {
    const {productName, unitPrice} = props;
    return (
        <div>
            <p>{productName}</p>
            <p>{unitPrice}</p>
        </div>

    )
}

export default ProductItem;