import axios from "axios";
import {
	PRODUCTS_FETCH,
	PRODUCT_FETCH,
	PRODUCT_CREATE,
	PRODUCT_UPDATE
} from "./types";
import { reset } from 'redux-form';

export const productFetch = id => {
	return dispatch => {
		axios
			.get("http://localhost:3001/products/" + id)
			.then(res => dispatch({ type: PRODUCT_FETCH, payload: res.data }));
	};
};

export const productsFetch = () => {
	return dispatch => {
		axios
			.get("http://localhost:3001/products")
			.then(res => dispatch({ type: PRODUCTS_FETCH, payload: res.data }));
	};
};

export const productDelete = id => {
	return dispatch => {
		axios.delete("http://localhost:3001/products/" + id).then(res => {
			axios
				.get("http://localhost:3001/products")
				.then(res =>
					dispatch({ type: PRODUCTS_FETCH, payload: res.data })
				);
		});
	};
};

export const productCreate = values => {
	return dispatch => {
		axios.post("http://localhost:3001/products", values).then(res => {
			dispatch(reset('productForm')); 
			dispatch({ type: PRODUCT_CREATE });
		});
	};
};

export const productUpdate = (id, values) => {
	return dispatch => {
		axios.put("http://localhost:3001/products/" + id, values).then(res => {
			dispatch({ type: PRODUCT_UPDATE });
		});
	}	
};
