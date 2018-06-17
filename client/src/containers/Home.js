import React, { Component } from "react";
import Header from "../components/Header";
import Monitor from "../components/monitor/Monitor";
import Footer from "../components/Footer";
import axios from "axios";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { products: "" };
	}

	componentDidMount() {
		/* 1 */
		/* this.setState({products : [
			{ productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
			{ productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
			{ productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
			{ productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
			{ productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
			{ productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
		]}) */
		/* 2 */
		/* fetch("http://localhost:3001/products", { method: "GET" })
			.then(res => res.json())
			.then(res => this.setState({ products: res }))
		.catch(e => {}); */
		/* 3 */
		axios.get("http://localhost:3001/products").then(res => {
			this.setState({ products: res.data });
		});
	}

	render() {
		return (
			<div>
				<Header />
				<Monitor products={this.state.products} />
				<Footer company="Olanlab" email="olan@olanlab.com" />
			</div>
		);
	}
}

export default Home;
