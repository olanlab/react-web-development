import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { productFormField } from "./formFields";
import FormField from "../common/FormField";

class ProductForm extends Component {
	renderFields(formFields) {
		return formFields.map(({ label, name, type, required }) => {
			return (
				<Field
					key={name}
					component={FormField}
					type={type}
					label={label}
					name={name}
					required={required}
				/>
			);
		});
	}

	render() {
		const { onProductSubmit } = this.props;
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(onProductSubmit)}>
					<div>{this.renderFields(productFormField)}</div>
					<div>
						<button className="btn btn-block btn-info title" type="submit" name="action" >
							บันทึก
						</button>
					</div>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};
	productFormField.forEach(({ name, required }) => {
		if (!values[name] && required) {
			errors[name] = "กรุณากรอกข้อมูลด้วยค่ะ";
		}
	});
	return errors;
}

function mapStateToProps({ products}) {
	if (products && products.id) {
		return { initialValues: products };
	} else {
		return {};
	}
}

ProductForm = reduxForm({ validate, form: "productForm" })(ProductForm);

export default connect(mapStateToProps)(ProductForm);
