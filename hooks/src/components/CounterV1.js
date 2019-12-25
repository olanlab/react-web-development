import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const CounterV1 = () => {
	// console.log(`BEFORE HOOKS | ${count}`);
	const [count, setCount] = useState(1);
	// console.log(`AFTER HOOKS | ${count}`);
	const theme = useContext(ThemeContext);

	useEffect(() => {
		document.title = `You clicked ${count} times`;
	});

	return (
		<div>
			<span style={{ color: theme.foreground }}>React Hooks {count}</span>
			<hr />
			<button onClick={() => setCount(count + 1)}>+</button>
			<button onClick={() => setCount(count - 1)}>-</button>
		</div>
	);
};

export default CounterV1;
