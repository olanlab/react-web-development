import React, { useState, useEffect } from "react";

const Count = () => {
    // console.log(`BEFORE HOOKS | ${count}`);
    const [count, setCount] = useState(1);
    // console.log(`AFTER HOOKS | ${count}`);

    useEffect(() => {
        document.title =  `You clicked ${count} times`;
    }, []);
    

	return (
		<div>
			<span>React Hooks {count}</span>
			<hr />
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				+
			</button>
			<button
				onClick={() => {
                    setCount(count - 1);
				}}
			>
				-
			</button>
		</div>
	);
};

export default Count;
