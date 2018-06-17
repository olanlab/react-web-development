import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/product/ProductList";
import axios from "axios";

class Product extends Component {
	constructor(props) {
		super(props);
		this.state = { products: null };
		this.delProduct = this.delProduct.bind(this);
	}

	componentDidMount() {
		axios.get("http://localhost:3001/products").then(response => {
			this.setState({products  : response.data});
		});
	}

	editProduct(product) {

	}

	delProduct(product) {
		axios.delete("http://localhost:3001/products/" + product.id).then(response => {
			axios.get("http://localhost:3001/products").then(response => {
				this.setState({products  : response.data});
			});
		});
	}

	render() {
		return (
			<div>
				<Header />
				<div className="container-fluid ">
					<ProductList products={this.state.products} 
						onEditProduct={this.editProduct} 
						onDelProduct={this.delProduct}  
					/>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Product;
