import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/product/ProductList";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { productsFetch } from "../../actions/index";
import axios from "axios";


class Product extends Component {
	constructor(props) {
		super(props);
		this.delProduct = this.delProduct.bind(this);
		this.editProduct = this.editProduct.bind(this);
	}

	componentDidMount() {
		this.props.productsFetch();
	}

	editProduct(product) {
		this.props.history.push('products/edit/' + product.id);
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
					<div className="row">
						<div className="col-6">
							<h1>สินค้า</h1>
						</div>
						<div className="col-6">
							<button className="btn btn-success title float-right" onClick={() => this.props.history.push('products/add')}>เพิ่ม</button>
						</div>
					</div>
					<ProductList products={this.props.products} 
						onEditProduct={this.editProduct} 
						onDelProduct={this.delProduct}  
					/>
				</div>
				<Footer />
			</div>
		);
	}
}

function mapStateToProps({ products }) {
	return { products };
}

export default withRouter(connect(mapStateToProps, { productsFetch })(Product));
