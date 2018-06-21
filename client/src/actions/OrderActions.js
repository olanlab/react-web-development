import axios from "axios";
import { ORDERS_FETCH } from "./types";

export const ordersFetch = () => {
	return dispatch => {
		axios
			.get("http://localhost:3001/orders")
			.then(res => dispatch({ type: ORDERS_FETCH, payload: res.data }));
	};
};