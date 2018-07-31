import React, { Component } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
// import "../static/css/style.css";
import "../static/css/style.scss";


export default class Layout extends Component {
	render() {
		const { children, title = "เฮลตี้ คาเฟ่ บล็อกเกอร์" } = this.props;
		return (
			<div>
				<Head>
					<title>{title}</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
					<link rel="shortcut icon" href="/static/images/logo/logo.png" />
					<link rel="stylesheet" href="/_next/static/style.css" />
				</Head>
				<Header />
				{children}
				<Footer company="OlanLab Co.,Ltd." email="olan@olanlab.com" />
			</div>
		);
	}
}
