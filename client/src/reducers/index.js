import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import OrderReducer from "./OrderReducer";

const rootReducer = combineReducers({
	orders: OrderReducer,
	products: ProductReducer
});

export default rootReducer;
