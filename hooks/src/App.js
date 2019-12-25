import React from "react";
import CounterV1 from "./components/CounterV1";
import CounterV2 from "./components/CounterV2";
import CounterV3 from "./components/CounterV3";
import Timer from "./components/Timer";

import ThemeContext, { themes } from "./contexts/ThemeContext";

const App = () => {
	return (
		<ThemeContext.Provider value={themes.light}>
			<div>
				<CounterV2 />
				<Timer />
			</div>
		</ThemeContext.Provider>
	);
};

export default App;
