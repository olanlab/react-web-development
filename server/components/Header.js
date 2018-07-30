import React, { Component } from "react";
import Link from "next/link";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({ date: new Date() });
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8 text-left">
						<h1 className="text-success">
							<img style={{ height: 70 }} src="/static/images/logo/logo.png" alt="" /> เฮลตี้ คาเฟ่{" "}
						</h1>
					</div>
					<div className="col-md-4 text-right">
						<h5 className="text-muted mt-2">{this.state.date.toLocaleTimeString()}</h5>
						<ul className="list-inline">
							<li className="list-inline-item title"><Link href="/" as="/" >หน้าหลัก</Link></li>
							<li className="list-inline-item title">|</li>
							<li className="list-inline-item title"><Link href="/about">เกี่ยวกับเรา</Link></li>
						</ul>
					</div>
				</div>
				<hr />
			</div>
		);
	}
}

export default Header;
