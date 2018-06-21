import {
	ORDERS_FETCH
} from "../actions/types";

export default function(state = [], action) {
	switch (action.type) {
		case ORDERS_FETCH:
			return action.payload;
		default:
			return state;
	}
}
