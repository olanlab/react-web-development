import axios from "axios";
import { PRODUCTS_FETCH } from "./types";

export const productsFetch = () => {
	return dispatch => {
		axios
			.get("http://localhost:3001/products")
			.then(res => dispatch({ type: PRODUCTS_FETCH, payload: res.data }));
	};
};