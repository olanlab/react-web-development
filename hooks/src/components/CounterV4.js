import React, { useState, useCallback } from "react";

const functions: Set<any> = new Set();


function CounterV4() {
	const [delta, setDelta] = useState(1);
	const [count, setCount] = useState(0);

	const incrementDelta = useCallback(() => setDelta(delta => delta + 1), []);
	const incrementCount = useCallback(() => setCount(count => count + delta), [delta]);

	functions.add(incrementDelta);
	functions.add(incrementCount);

	return (
		<div>
			<div> Delta is {delta} </div>
			<div> Counter is {count} </div>
			<br />
			<div>
				<button onClick={incrementDelta}>Increment Delta</button>
				<button onClick={incrementCount}>Increment Counter</button>
			</div>
			<br />
			<div> Newly Created Functions: {functions.size - 2} </div>
		</div>
	);
}

export default CounterV4;
