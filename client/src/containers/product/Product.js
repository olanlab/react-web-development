import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";

class Product extends Component {
	constructor(props) {
		super(props);
		this.state = { products: null };
	}

	componentDidMount() {
		axios.get(" http://localhost:3001/products").then(response => {
			console.log(response);
		});
	}

	render() {
		return (
			<div>
				<Header />
				<Footer />
			</div>
		);
	}
}

export default Product;
