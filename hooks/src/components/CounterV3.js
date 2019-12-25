import React, { useReducer, useEffect } from "react";

function init(initialCount) {
	console.log(`init | ${initialCount}`);
	return { ...initialCount };
}

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

function CounterV3({ initialCount }) {
	const [state, dispatch] = useReducer(reducer, initialCount, init);

	useEffect(() => {
		document.title = `You clicked ${state.count} times`;
	});

	return (
		<div>
			<span>React Hooks {state.count}</span>
			<hr />
			<button onClick={() => dispatch({ type: "decrement" })}>-</button>
			<button onClick={() => dispatch({ type: "increment" })}>+</button>
		</div>
	);
}

export default CounterV3;
