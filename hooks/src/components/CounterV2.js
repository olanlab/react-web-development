import React, { useReducer, useEffect } from "react";
import ThemeContext from "../contexts/ThemeContext";

const initialState = { count: 0 };

function reducer(state, action) {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 };
		case "decrement":
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
}

function CounterV2() {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		document.title = `You clicked ${state.count} times`;
	});

	return (
		<div>
			<ThemeContext.Consumer>
				{props => {
					return <span style={{ color: props.foreground }}>React Hooks {state.count}</span>;
				}}
			</ThemeContext.Consumer>
			<hr />
			<button onClick={() => dispatch({ type: "decrement" })}>-</button>
			<button onClick={() => dispatch({ type: "increment" })}>+</button>
		</div>
	);
}

export default CounterV2;
