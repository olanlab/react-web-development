import React, { Component } from "react";

class ProductItem extends Component {

    constructor(props) {
        super(props);
        console.log('constructor|' + props.productName);
    }

    render() {
        const {productName, unitPrice} = this.props;
        return (
            <div>
                <p>{productName}</p>
                <p>{unitPrice}</p>
            </div>
    
        )
    }
}

export default ProductItem;