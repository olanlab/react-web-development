import React, { Component } from "react";
import { connect } from "react-redux";
import { productFetch, productCreate, productUpdate } from "../../actions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductForm from "../../components/product/ProductForm";

class ProductEdit extends Component {
	componentDidMount() {
		if (this.props.match.params.id) {
			this.props.productFetch(this.props.match.params.id);
		}
	}

	render() {
		const { formValues, match, productCreate, productUpdate, products } = this.props;
		return (
			<div>
				<Header />
				<div className="container col-md-5">
					{match.path.indexOf("add") > 0 && (
						<div>
							<h2>เพิ่ม</h2>
							{products.saved && <div className="alert alert-secondary title " role="alert">
								{products.msg}
							</div>}
							<ProductForm onProductSubmit={() => productCreate(formValues)} />
						</div>
					)}
					{match.path.indexOf("edit") > 0 && products && products.id && (
						<div>
							<h2>แก้ไข</h2>
							{products.saved && <div className="alert alert-secondary title " role="alert">
								{products.msg}
							</div>}
							<ProductForm onProductSubmit={() => productUpdate(products.id, formValues)} />
						</div>
					)}
				</div>
				<Footer />
			</div>
		);
	}
}

function mapStateToProps({ form, products }) {
	return { formValues: form.productForm ? form.productForm.values : null, products };
}

export default connect(mapStateToProps, { productFetch, productCreate, productUpdate })(ProductEdit);
