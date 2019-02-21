import React, { useState, useEffect } from "react";

const Timer = () => {
	// console.log(`BEFORE HOOKS | ${date}`);
	const [date, setDate] = useState(new Date());
	const [timerID, setTimerID] = useState(null);
	// console.log(`AFTER HOOKS | ${date}`);

	useEffect(() => {
		console.log(`EFFECT HOOKS | ${date}`);
		if (timerID == null) {
			const id = setInterval(() => {
				setDate(new Date());
			}, 1000);
			setTimerID(id);
		}
		return () => {
			clearInterval(timerID);
		};
	}, []);

	return <div>{date.toLocaleTimeString()}</div>;
};

export default Timer;
