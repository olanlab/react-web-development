import React, { Component } from 'react'
import ProductItem from './ProductItem'

export class ProductList extends Component {


    showProducts(){
        return this.props.products&&this.props.products.map(product =>(
            // <ProductItem productName={product.productName} unitPrice={product.unitPrice} />
            <ProductItem key={product.productId} {...product} /> //พอเป็น list ต้องใส่ key  ที่ unique
        ))
    }

    render() {
        return (
            <div className= 'row'>
                {this.showProducts()}

                
                
            </div>
        )
    }
}

export default ProductList
