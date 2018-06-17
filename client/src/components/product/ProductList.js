import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  showProducts() {
    return (
      this.props.products &&
      this.props.products.map(product => (
        <ProductItem key={product.id} product={product} onAddOrder={this.props.onAddOrder} onEditProduct={this.props.onEditProduct} onDelProduct={this.props.onDelProduct} />
      ))
    );
  }

  render() {
    return <div className="row">{this.showProducts()}</div>;
  }
}

export default ProductList;
