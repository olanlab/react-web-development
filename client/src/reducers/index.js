import { combineReducers } from "redux";
import { reducer as reduxForm } from 'redux-form'
import ProductReducer from "./ProductReducer";
import OrderReducer from "./OrderReducer";

const rootReducer = combineReducers({
	orders: OrderReducer,
	products: ProductReducer,
	form: reduxForm
});

export default rootReducer;
